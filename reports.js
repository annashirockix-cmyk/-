"use strict";

window.renderCourseReportsPage = function() {
  var app = document.getElementById("app"); 
  if (!app) return; 
  app.innerHTML = ""; 
  document.getElementById("crumbs").textContent = "Отчеты по курсам";
  app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));

  if (!window.state.staff) { 
      app.innerHTML += '<div class="module" style="color:var(--err); padding:40px; text-align:center;">⛔ Доступ только для преподавателя.</div>'; 
      return; 
  }

  var topPanel = el(`<div style="display:flex; gap:10px; margin-bottom:20px; flex-wrap:wrap; align-items:center;">
      <h2 style="margin:0; font-size:20px;">📊 Отчеты и управление</h2>
      <div style="margin-left:auto; display:flex; gap:10px;">
          <select id="reportGroupFilter" class="self-input" style="width:auto; margin:0; padding:10px; font-weight:bold; background:var(--card-soft); color:var(--accent); border:1px solid var(--accent);">
              <option value="all">Все группы</option>
              <option value="ТЕСТ">ТЕСТ</option>
              <option value="ТМ 4-3">ТМ 4-3</option>
              <option value="ТМ 3-4">ТМ 3-4</option>
          </select>
          <button class="btn" id="btnRefreshReports" style="padding:10px 20px;">🔄 Обновить</button>
      </div>
  </div>`);
  app.appendChild(topPanel);
  var contentWrap = el('<div id="reportsContent"></div>'); app.appendChild(contentWrap);

  function renderReports() {
      var filterGroup = document.getElementById("reportGroupFilter").value;
      contentWrap.innerHTML = '<div class="skeleton" style="height:200px;"></div>';
      
      window.API.getStudents().then(d => {
          contentWrap.innerHTML = "";
          if (!d || !d.ok || !d.students || !d.students.length) { 
              contentWrap.innerHTML = "<div class='module'>Нет студентов.</div>"; 
              return; 
          }
          
          var students = filterGroup === "all" ? d.students : d.students.filter(s => s.group === filterGroup);
          if (!students.length) { 
              contentWrap.innerHTML = "<div class='module'>В группе нет студентов.</div>"; 
              return; 
          }

          students.forEach((s) => {
              var p = {}; try { p = JSON.parse(s.payload || "{}"); } catch(e) {}
              var xp = p.xp || 0; 
              var results = p.results || {};
              var sKey = s.name.trim().toLowerCase() + "|" + s.group.trim().toLowerCase();

              // Карточка студента
              var block = document.createElement("div");
              block.className = "module";
              block.style = "margin-bottom:20px; border-left: 4px solid var(--accent); padding:15px;";

              // Заголовок студента
              var header = document.createElement("div");
              header.style = "display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:1px solid var(--border); padding-bottom:10px;";
              header.innerHTML = `<h3 style="margin:0;">${window.escapeHtml(s.name)} <span style="color:var(--muted); font-size:14px; font-weight:normal;">(Гр. ${window.escapeHtml(s.group)})</span></h3>
                                  <span style="color:var(--gold); font-weight:bold;">${xp} XP</span>`;
              block.appendChild(header);

              // Таблица работ
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

              // Проходимся по всем сохраненным результатам
              for (var key in results) {
                  if (!results.hasOwnProperty(key)) continue;
                  hasWorks = true;
                  
                  var item = results[key];
                  var topicName = key;
                  var typeName = "Неизвестно";
                  var gradeDisplay = item.grade || "—";

                  // Определяем тип работы
                  if (key.includes("prac_")) typeName = "Практика";
                  else if (key.includes("self_")) typeName = "Самостоятельная";
                  else if (key.includes("writing_")) typeName = "Письменная";
                  else if (key === "__final__" + window.state.activeCourseId) {
                      typeName = "Экзамен";
                      topicName = "Итоговый экзамен";
                  } else typeName = "Тест";

                  // Ищем нормальное название темы
                  var cleanId = key.replace("prac_", "").replace("self_", "").replace("writing_", "").replace(/_\d+$/, "");
                  if (window.COURSE && window.COURSE.sections) {
                      window.COURSE.sections.forEach(sec => {
                          sec.topics.forEach(t => {
                              if (t.id === cleanId) topicName = t.code + " " + t.title;
                          });
                      });
                  }

                  // Спец. обработка для письменных
                  var actionBtn = "";
                  if (typeName === "Письменная") {
                      if (item.status === "pending") {
                          gradeDisplay = `<span style="color:var(--gold);">На проверке</span>`;
                          actionBtn = `<button class="btn" style="padding:4px 8px; font-size:12px; background:var(--gold); color:#000;" onclick="window.teacherGradeWriting('${sKey}', '${key}')">Оценить</button>`;
                      } else if (item.status === "graded") {
                          gradeDisplay = `<span style="color:var(--ok); font-weight:bold;">${item.grade}</span>`;
                      } else {
                          gradeDisplay = `<span style="color:var(--muted);">—</span>`;
                      }
                  }

                  var tr = document.createElement("tr");
                  tr.innerHTML = `<td style="padding:8px; border:1px solid var(--border);">${window.escapeHtml(topicName)}</td>
                                  <td style="padding:8px; border:1px solid var(--border);">${typeName}</td>
                                  <td style="padding:8px; border:1px solid var(--border); text-align:center;">${gradeDisplay}</td>
                                  <td style="padding:8px; border:1px solid var(--border); text-align:center;">${actionBtn}</td>`;
                  tbody.appendChild(tr);
              }

              if (!hasWorks) {
                  tbody.innerHTML = `<tr><td colspan="4" style="padding:15px; text-align:center; color:var(--muted);">Нет выполненных заданий</td></tr>`;
              }

              table.appendChild(tbody);
              block.appendChild(table);
              
              // Кнопки управления
              var controls = document.createElement("div");
              controls.style = "margin-top:10px; display:flex; gap:10px; justify-content:flex-end;";
              controls.innerHTML = `
                  <button class="btn" style="padding:4px 8px; font-size:12px; background:var(--gold); color:#000;" onclick="window.grantXP('${sKey}')">+ XP</button>
                  <button class="btn ghost" style="padding:4px 8px; font-size:12px; border-color:var(--err); color:var(--err);" onclick="window.deleteStudent('${sKey}', '${s.name}')">🗑 Удалить</button>
              `;
              block.appendChild(controls);

              contentWrap.appendChild(block);
          });
      }).catch(err => { 
          contentWrap.innerHTML = `<div class="module" style="color:var(--err);">Ошибка: ${err.message}</div>`; 
      });
  }

  document.getElementById("reportGroupFilter").onchange = renderReports;
  document.getElementById("btnRefreshReports").onclick = renderReports;
  renderReports();
};

// Функция выставления оценки за письменную работу
window.teacherGradeWriting = function(studentKey, resultKey) {
    var grade = prompt("Введите оценку за письменную работу (2, 3, 4 или 5):");
    if (!grade || isNaN(grade) || grade < 2 || grade > 5) return window.showToast("Неверная оценка", "err");

    window.API.getStudents().then(d => {
        var student = d.students.find(x => (x.name.trim().toLowerCase() + "|" + x.group.trim().toLowerCase()) === studentKey);
        if (!student) return;

        var p = {}; try { p = JSON.parse(student.payload || "{}"); } catch(e) {}
        if (!p.results || !p.results[resultKey]) return;

        // Обновляем оценку и статус
        p.results[resultKey].grade = parseInt(grade);
        p.results[resultKey].status = "graded";

        // Если оценка 4 или 5, начисляем немного XP (по желанию)
        if (grade >= 4) p.xp = (p.xp || 0) + 20;

        window.API.saveStudent(studentKey, student.name, student.group, JSON.stringify(p)).then(res => {
            if (res.ok) {
                window.showToast("Оценка выставлена!", "ok");
                window.renderCourseReportsPage(); // Обновляем страницу
            } else {
                window.showToast("Ошибка сохранения", "err");
            }
        });
    });
};

// Управление XP
window.grantXP = function(key) {
  var amount = prompt("Сколько XP начислить?", "50"); if (!amount || isNaN(amount)) return;
  window.API.grantXP(key, parseInt(amount)).then(() => { 
      window.showToast("Начислено +" + amount + " XP", "ok"); 
      window.renderCourseReportsPage(); 
  }).catch(() => window.showToast("Ошибка", "err"));
};

window.deleteStudent = function(key, name) {
  if (!confirm(`Удалить студента ${name}? Это действие необратимо.`)) return;
  window.API.deleteStudent(key).then(res => { 
      if(res && res.ok) { 
          window.showToast("Удален", "ok"); 
          window.renderCourseReportsPage(); 
      } else {
          window.showToast("Ошибка удаления", "err"); 
      }
  }).catch(() => window.showToast("Ошибка сети", "err"));
};
