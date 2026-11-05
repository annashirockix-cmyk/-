"use strict";

/* Безопасные элементы интерфейса, аналитика и офлайн-статус English Portal. */
(function () {
  function role() { return String(window.state && window.state.staff && window.state.staff.role || "").toLowerCase(); }
  function isStaff() { return role() === "teacher" || role() === "admin"; }
  function isAdmin() { return role() === "admin"; }

  window.syncPortalRoleUI = function () {
    var staff = isStaff();
    ["menuConstructor", "menuReports"].forEach(function (id) {
      var node = document.getElementById(id);
      if (node) node.style.display = staff ? "flex" : "none";
    });
    document.querySelectorAll('[data-staff-only="true"]').forEach(function (node) {
      node.style.display = staff ? "" : "none";
    });
    document.querySelectorAll('[data-admin-only="true"]').forEach(function (node) {
      node.style.display = isAdmin() ? "" : "none";
    });
  };

  // Login is delegated to the existing Apps Script endpoint. Client-side passwords are never accepted.
  window.portalTeacherLogin = async function () {
    var user = document.getElementById("teacherUser");
    var pass = document.getElementById("teacherPass");
    var error = document.getElementById("teacherLoginError");
    var username = user ? user.value.trim() : "";
    var password = pass ? pass.value : "";
    if (!username || !password) {
      if (error) { error.textContent = "Введите логин и пароль"; error.style.display = "block"; }
      return;
    }
    if (!window.API || typeof window.API.login !== "function") {
      if (error) { error.textContent = "Сервер авторизации недоступен"; error.style.display = "block"; }
      return;
    }
    if (error) { error.textContent = ""; error.style.display = "none"; }
    try {
      var response = await window.API.login(username, password);
      var account = response && (response.staff || response.user || response.account || response.data || response);
      var roleName = String(account && (account.role || account.userRole || account.type) || "").toLowerCase();
      if (!(response && (response.ok === true || response.success === true)) || !["teacher", "admin"].includes(roleName)) {
        throw new Error(response && response.error || "Сервер не подтвердил роль преподавателя или администратора");
      }
      window.state.staff = {
        name: account.name || account.fullName || (roleName === "admin" ? "Администратор" : "Преподаватель"),
        role: roleName,
        token: response.token || account.token || null
      };
      window.state.student = null;
      window.state.xp = 0;
      try { localStorage.removeItem("mdk.student"); localStorage.removeItem("mdk.staff"); } catch (e) {}
      if (pass) pass.value = "";
      window.renderUserChip();
      window.updateXpDisplay();
      window.syncPortalRoleUI();
      window.route();
    } catch (err) {
      if (error) { error.textContent = err.message || "Ошибка авторизации"; error.style.display = "block"; }
      else if (window.showToast) window.showToast(err.message || "Ошибка авторизации", "err");
    }
  };

  // Route-level checks complement menu hiding; the server must still enforce permissions on data endpoints.
  var originalRoute = window.route;
  if (typeof originalRoute === "function" && !originalRoute.__roleGuard) {
    var guardedRoute = function () {
      var parts = String(location.hash || "").replace(/^#/, "").split("/").filter(Boolean);
      var page = parts[0] || "";
      var protectedPage = page === "reports" || page === "constructor" || page === "group-certificate";
      if (protectedPage && !isStaff()) {
        if (window.showToast) window.showToast("Раздел доступен только преподавателю.", "err");
        location.hash = "#/";
        return;
      }
      return originalRoute.apply(this, arguments);
    };
    guardedRoute.__roleGuard = true;
    window.route = guardedRoute;
  }

  var originalDelete = window.deleteStudent;
  if (typeof originalDelete === "function") {
    window.deleteStudent = function () {
      if (!isAdmin()) return window.showToast("Удалять студентов может только администратор.", "err");
      return originalDelete.apply(this, arguments);
    };
  }
  var originalGrant = window.grantXP;
  if (typeof originalGrant === "function") {
    window.grantXP = function () {
      if (!isAdmin()) return window.showToast("Начислять XP может только администратор.", "err");
      return originalGrant.apply(this, arguments);
    };
  }

  function topicIndex(courseId) {
    var map = {};
    var course = window.MDK_DATA && window.MDK_DATA[courseId];
    (course && course.sections || []).forEach(function (section) {
      (section.topics || []).forEach(function (topic) {
        map[String(topic.id)] = topic.code + " " + topic.title;
      });
    });
    return map;
  }

  function percentFor(result) {
    if (Number.isFinite(Number(result.percent))) return Math.max(0, Math.min(100, Number(result.percent)));
    if (Number.isFinite(Number(result.score)) && Number(result.maxScore) > 0) return Math.round(Number(result.score) / Number(result.maxScore) * 100);
    var grade = Number(result.grade);
    return grade >= 2 && grade <= 5 ? (grade - 1) * 25 : null;
  }

  function topicForKey(key, item, index) {
    if (item && item.topicId) return String(item.topicId);
    if (/^(prac|self|writing)_/.test(key)) return key.split("_")[1] || key;
    if (key.indexOf("test_") === 0) return key.slice(5);
    if (index[key]) return key;
    return key.indexOf("__final__") === 0 ? "Итоговый экзамен" : (key.indexOf("_sem") >= 0 ? "Семестровая контрольная" : key);
  }

  window.renderTeacherAnalytics = function (students, host) {
    if (!host) return;
    var courseId = window.state && window.state.activeCourseId || "basic";
    var names = topicIndex(courseId);
    var rows = {};
    (students || []).forEach(function (student) {
      var payload = {};
      try { payload = typeof student.payload === "string" ? JSON.parse(student.payload || "{}") : (student.payload || {}); } catch (e) {}
      var results = payload.results || {};
      Object.keys(results).forEach(function (key) {
        var item = results[key] || {};
        if (item.courseId && item.courseId !== courseId) return;
        var pct = percentFor(item);
        if (pct === null) return;
        var topicId = topicForKey(key, item, names);
        var title = names[topicId] || item.topicTitle || (topicId === "Итоговый экзамен" ? topicId : "Работа: " + topicId);
        if (!rows[title]) rows[title] = { title: title, total: 0, count: 0, weak: 0 };
        rows[title].total += pct;
        rows[title].count++;
        if (pct < 60) rows[title].weak++;
      });
    });
    var sorted = Object.keys(rows).map(function (key) {
      var row = rows[key]; row.average = Math.round(row.total / row.count); return row;
    }).sort(function (a, b) { return a.average - b.average; });
    var weak = sorted.filter(function (row) { return row.average < 70; });
    var html = '<section class="module" style="border-left:4px solid var(--gold);"><h2 style="margin-top:0;">📉 Аналитика освоения тем</h2><p style="color:var(--muted);">Средний процент правильных ответов по сохранённым попыткам группы. Низкие значения помогают определить темы для повторения.</p>';
    html += '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;"><span class="status-pill">Тем с результатами: ' + sorted.length + '</span><span class="status-pill">Требуют внимания: ' + weak.length + '</span></div>';
    if (!sorted.length) {
      html += '<p>Пока недостаточно сохранённых результатов. После прохождения тестов аналитика заполнится автоматически.</p>';
    } else {
      sorted.forEach(function (row) {
        var color = row.average < 60 ? "var(--err)" : row.average < 70 ? "var(--gold)" : "var(--ok)";
        html += '<div style="margin:12px 0;"><div style="display:flex;justify-content:space-between;gap:10px;"><b>' + window.escapeHtml(row.title) + '</b><span><b>' + row.average + '%</b> · ' + row.count + ' попыт.</span></div><div style="height:10px;background:var(--card-soft);border-radius:10px;overflow:hidden;margin-top:6px;"><div style="height:100%;width:' + row.average + '%;background:' + color + ';border-radius:10px;"></div></div>' + (row.average < 70 ? '<small style="color:var(--err);">Рекомендуется повторить тему</small>' : '') + '</div>';
      });
    }
    html += '</section>';
    host.innerHTML = html;
  };

  window.exportPortalResults = function (students, format) {
    var rows = [["Студент", "Группа", "Курс", "Работа", "Оценка", "Баллы", "Максимум", "Процент", "Дата"]];
    (students || []).forEach(function (student) {
      var payload = {};
      try { payload = typeof student.payload === "string" ? JSON.parse(student.payload || "{}") : (student.payload || {}); } catch (e) {}
      Object.keys(payload.results || {}).forEach(function (key) {
        var item = payload.results[key] || {};
        var pct = percentFor(item);
        rows.push([student.name || "", student.group || "", item.courseId || (window.state && window.state.activeCourseId) || "", item.topicTitle || key, item.grade || "", item.score == null ? "" : item.score, item.maxScore == null ? "" : item.maxScore, pct == null ? "" : pct, item.completedAt || item.finishedAt || ""]);
      });
    });
    if (rows.length === 1) return window.showToast("Пока нет результатов для экспорта.", "err");
    function cell(v) { return String(v == null ? "" : v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
    var filename = "english-portal-results-" + new Date().toISOString().slice(0, 10);
    var blob, mime, ext;
    if (format === "xls") {
      var table = "<table><thead><tr>" + rows[0].map(function (v) { return "<th>" + cell(v) + "</th>"; }).join("") + "</tr></thead><tbody>" + rows.slice(1).map(function (row) { return "<tr>" + row.map(function (v) { return "<td>" + cell(v) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>";
      blob = new Blob(["\uFEFF<html><head><meta charset=\"utf-8\"></head><body>" + table + "</body></html>"], { type: "application/vnd.ms-excel;charset=utf-8" });
      mime = "application/vnd.ms-excel"; ext = ".xls";
    } else {
      var csv = rows.map(function (row) { return row.map(function (v) { return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; }).join(";"); }).join("\r\n");
      blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
      mime = "text/csv"; ext = ".csv";
    }
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url; link.download = filename + ext; document.body.appendChild(link); link.click(); link.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    window.showToast("Файл подготовлен для Excel.", "ok");
  };

  function offlineStatus() {
    var el = document.getElementById("offlineStatus");
    if (!el) return;
    if (!navigator.onLine) {
      el.textContent = navigator.serviceWorker && navigator.serviceWorker.controller ? "● Офлайн · кэш активен" : "● Нет сети · кэш не подтверждён";
      el.style.color = navigator.serviceWorker && navigator.serviceWorker.controller ? "var(--ok)" : "var(--err)";
    } else if (navigator.serviceWorker && navigator.serviceWorker.controller) {
      el.textContent = "● Офлайн-кэш готов";
      el.style.color = "var(--ok)";
    } else {
      el.textContent = "● Подготовка офлайн-доступа";
      el.style.color = "var(--gold)";
    }
  }
  window.updateOfflineStatus = offlineStatus;

  function registerOffline() {
    if (!("serviceWorker" in navigator) || location.protocol === "file:") {
      var el = document.getElementById("offlineStatus");
      if (el) el.textContent = "● Офлайн-кэш недоступен";
      return;
    }
    navigator.serviceWorker.register("./service-worker.js").then(function () {
      return navigator.serviceWorker.ready;
    }).then(offlineStatus).catch(function (err) {
      console.warn("Service worker:", err);
      var el = document.getElementById("offlineStatus");
      if (el) { el.textContent = "● Ошибка офлайн-кэша"; el.style.color = "var(--err)"; }
    });
    navigator.serviceWorker.addEventListener("controllerchange", offlineStatus);
  }

  document.addEventListener("DOMContentLoaded", function () {
    // A locally edited localStorage object cannot grant staff permissions.
    try { localStorage.removeItem("mdk.staff"); } catch (e) {}
    if (window.state) window.state.staff = null;
    window.syncPortalRoleUI();
    registerOffline();
    offlineStatus();
  });
  window.addEventListener("online", offlineStatus);
  window.addEventListener("offline", offlineStatus);
  if (document.readyState !== "loading") {
    try { localStorage.removeItem("mdk.staff"); } catch (e) {}
    if (window.state) window.state.staff = null;
    window.syncPortalRoleUI();
    registerOffline();
  }
})();