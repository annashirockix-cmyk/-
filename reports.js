"use strict";

window.renderCourseReportsPage = function() {
  var app = document.getElementById("app"); 
  if (!app) return; app.innerHTML = ""; 
  document.getElementById("crumbs").textContent = "Отчеты по курсам";
  app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));

  if (!window.state.staff) { app.innerHTML += '<div class="module" style="color:var(--err); padding:40px; text-align:center;">⛔ Доступ только для преподавателя.</div>'; return; }

  var topPanel = el(`<div style="display:flex; gap:10px; margin-bottom:20px; flex-wrap:wrap; align-items:center;">
      <h2 style="margin:0; font-size:20px;">📊 Отчеты и управление</h2>
      <div style="margin-left:auto; display:flex; gap:10px;">
          <button class="btn" id="btnRefreshReports" style="padding:10px 20px;">🔄 Обновить</button>
          <button class="btn" onclick="location.hash='#/group-certificate'" style="padding:10px 20px; background:var(--gold); color:#000;">🏆 Сертификаты групп</button>
      </div>
  </div>`);
  app.appendChild(topPanel);
  var contentWrap = el('<div id="reportsContent"></div>'); app.appendChild(contentWrap);

  function renderStudentCard(s) {
      var p = {}; try { p = JSON.parse(s.payload || "{}"); } catch(e) {}
      var xp = p.xp || 0; var results = p.results || {};
      var sKey = s.name.trim().toLowerCase() + "|" + s.group.trim().toLowerCase();

      var block = document.createElement("div");
      block.className = "module";
      block.style = "margin-bottom:20px; border-left: 4px solid var(--accent); padding:15px;";

      block.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:1px solid var(--border); padding-bottom:10px;">
          <h3 style="margin:0;">${window.escapeHtml(s.name)} <span style="color:var(--muted); font-size:14px; font-weight:normal;">(Гр. ${window.escapeHtml(s.group)})</span></h3>
          <span style="color:var(--gold); font-weight:bold;">${xp} XP</span>
      </div>`;

      var table = document.createElement("table");
      table.style = "width:100%; border-collapse:collapse; font-size:14px; text-align:left;";
      table.innerHTML = `<thead><tr style="background:var(--card-soft);">
          <th style="padding:8px; border:1px solid var(--border);">Тема / Задание</th>
          <th style="padding:8px; border:1px solid var(--border);">Тип работы</th>
          <th style="padding:8px; border:1px solid var(--border); text-align:center;">Оценка / Статус</th>
          <th style="padding:8px; border:1px solid var(--border); text-align:center;">Действие</th>
      </tr></thead>`;
      
      var tbody = document.createElement("tbody");
      var hasWorks = false;

      for (var key in results) {
          if (!results.hasOwnProperty(key)) continue;
          hasWorks = true;
          var item = results[key];
          var topicName = key; var typeName = "Тест"; var gradeDisplay = item.grade || "—";

          if (key.includes("prac_")) typeName = "Практика";
          else if (key.includes("self_")) typeName = "Самостоятельная";
          else if (key.includes("writing_")) typeName = "Письменная";
          else if (key.includes("_sem")) typeName = "Семестровая";
          else if (key.startsWith("final_")) typeName = "Итоговый экзамен";
          else if (key === "__final__" + window.state.activeCourseId) { typeName = "Экзамен"; topicName = "Итоговый экзамен"; }

          var actionBtn = "";
          if (typeName === "Письменная") {
              if (item.status === "pending") {
                  gradeDisplay = `<span style="color:var(--gold);">На проверке</span>`;
                  actionBtn = `<button class="btn" style="padding:4px 8px; font-size:12px; background:var(--gold); color:#000;" onclick="window.teacherGradeWriting('${sKey}', '${key}')">Оценить</button>`;
              } else if (item.status === "graded") { gradeDisplay = `<span style="color:var(--ok); font-weight:bold;">${item.grade}</span>`; }
          }

          var tr = document.createElement("tr");
          tr.innerHTML = `<td style="padding:8px; border:1px solid var(--border);">${window.escapeHtml(topicName)}</td>
                          <td style="padding:8px; border:1px solid var(--border);">${typeName}</td>
                          <td style="padding:8px; border:1px solid var(--border); text-align:center;">${gradeDisplay}</td>
                          <td style="padding:8px; border:1px solid var(--border); text-align:center;">${actionBtn}</td>`;
          tbody.appendChild(tr);
      }

      if (!hasWorks) tbody.innerHTML = `<tr><td colspan="4" style="padding:15px; text-align:center; color:var(--muted);">Нет выполненных заданий</td></tr>`;
      table.appendChild(tbody);
      block.appendChild(table);
      
      var controls = document.createElement("div");
      controls.style = "margin-top:10px; display:flex; gap:10px; justify-content:flex-end;";
      controls.innerHTML = `
          <button class="btn" style="padding:4px 8px; font-size:12px; background:var(--gold); color:#000;" onclick="window.grantXP('${sKey}')">+ XP</button>
          <button class="btn ghost" style="padding:4px 8px; font-size:12px; border-color:var(--err); color:var(--err);" onclick="window.deleteStudent('${sKey}', '${s.name}')">🗑 Удалить</button>
      `;
      block.appendChild(controls);
      return block;
  }

  function renderReports() {
      contentWrap.innerHTML = '<div class="skeleton" style="height:200px;"></div>';
      
      window.API.getStudents().then(d => {
          contentWrap.innerHTML = "";
          if (!d || !d.ok || !d.students || !d.students.length) { contentWrap.innerHTML = "<div class='module'>Нет студентов.</div>"; return; }
          
          d.students.forEach(s => { contentWrap.appendChild(renderStudentCard(s)); });
      }).catch(err => {
          contentWrap.innerHTML = `<div class="module" style="color:var(--gold); margin-bottom:20px; border-left:4px solid var(--gold);">
              ⚠️ <b>Внимание:</b> Ошибка подключения к Google Таблицам (CORS).<br>
              <small>Показаны данные, сохраненные локально на этом устройстве. Чтобы исправить, переопубликуйте скрипт в Google Apps Script (Доступ: Все).</small>
          </div>`;
          
          // Резервный режим: показываем текущего студента из памяти браузера
          var k = window.studentKey();
          if (k && window.state.student) {
              var localStudent = {
                  name: window.state.student.name,
                  group: window.state.student.group,
                  payload: JSON.stringify({ xp: window.state.xp, results: window.state.results })
              };
              contentWrap.appendChild(renderStudentCard(localStudent));
          } else {
              contentWrap.innerHTML += "<div class='module'>Локальных данных нет.</div>";
          }
      });
  }

  document.getElementById("btnRefreshReports").onclick = renderReports;
  renderReports();
};

window.teacherGradeWriting = function(studentKey, resultKey) {
    var grade = prompt("Введите оценку за письменную работу (2, 3, 4 или 5):");
    if (!grade || isNaN(grade) || grade < 2 || grade > 5) return window.showToast("Неверная оценка", "err");

    window.API.getStudents().then(d => {
        var student = d.students.find(x => (x.name.trim().toLowerCase() + "|" + x.group.trim().toLowerCase()) === studentKey);
        if (!student) return;
        var p = {}; try { p = JSON.parse(student.payload || "{}"); } catch(e) {}
        if (!p.results || !p.results[resultKey]) return;

        p.results[resultKey].grade = parseInt(grade);
        p.results[resultKey].status = "graded";
        if (grade >= 4) p.xp = (p.xp || 0) + 20;

        window.API.saveStudent(studentKey, student.name, student.group, JSON.stringify(p)).then(res => {
            if (res.ok) { window.showToast("Оценка выставлена!", "ok"); window.renderCourseReportsPage(); }
            else window.showToast("Ошибка сохранения", "err");
        });
    });
};

window.grantXP = function(key) {
  var amount = prompt("Сколько XP начислить?", "50"); if (!amount || isNaN(amount)) return;
  window.API.grantXP(key, parseInt(amount)).then(() => { window.showToast("Начислено +" + amount + " XP", "ok"); window.renderCourseReportsPage(); }).catch(() => window.showToast("Ошибка", "err"));
};

window.deleteStudent = function(key, name) {
  if (!confirm(`Удалить студента ${name}? Это действие необратимо.`)) return;
  window.API.deleteStudent(key).then(res => { if(res && res.ok) { window.showToast("Удален", "ok"); window.renderCourseReportsPage(); } else window.showToast("Ошибка удаления", "err"); }).catch(() => window.showToast("Ошибка сети", "err"));
};
