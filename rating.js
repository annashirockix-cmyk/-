"use strict";

window.renderRatingPage = function() {
  var app = document.getElementById("app"); app.innerHTML = "";
  document.getElementById("crumbs").textContent = "Доска почета";
  app.appendChild(el('<a class="backlink" href="#/">← На главную</a><section class="hero"><h1>🏆 Доска почета</h1></section>'));
  
  function renderPodium(list) {
      var podiumHtml = '<div style="display:flex; justify-content:center; align-items:flex-end; gap:20px; margin-bottom:40px; height:260px; flex-wrap:wrap;">';
      
      var renderAv = (s, size, borderColor) => {
          var avHtml = "👨‍🎓";
          if (s.avatar) {
              if (s.avatar.length <= 5 && !s.avatar.startsWith("http")) avHtml = `<span style="font-size:${size/2}px;">${s.avatar}</span>`;
              else avHtml = `<img src="${s.avatar}" style="width:100%; height:100%; object-fit:cover;">`;
          }
          return `<div style="width:${size}px; height:${size}px; margin:0 auto; border:3px solid ${borderColor}; border-radius:50%; overflow:hidden; display:flex; align-items:center; justify-content:center; background:var(--card-soft);">${avHtml}</div>`;
      };

      if (list[1]) {
          podiumHtml += `<div style="text-align:center; width:120px;">
              <div style="font-size:50px; filter:drop-shadow(0 0 10px silver);">🥈</div>
              ${renderAv(list[1], 80, "silver")}
              <div style="font-weight:bold; margin-top:10px; font-size:14px;">${window.escapeHtml(list[1].name)}</div>
              <div style="color:var(--gold); font-size:12px;">${list[1].xp} XP</div>
          </div>`;
      }
      if (list[0]) {
          podiumHtml += `<div style="text-align:center; width:140px; transform:translateY(-30px);">
              <div style="font-size:70px; filter:drop-shadow(0 0 15px gold);">🥇</div>
              ${renderAv(list[0], 100, "gold")}
              <div style="font-weight:bold; margin-top:10px; font-size:16px; color:var(--gold);">${window.escapeHtml(list[0].name)}</div>
              <div style="color:var(--gold); font-weight:bold;">${list[0].xp} XP</div>
          </div>`;
      }
      if (list[2]) {
          podiumHtml += `<div style="text-align:center; width:120px;">
              <div style="font-size:50px; filter:drop-shadow(0 0 10px #cd7f32);">🥉</div>
              ${renderAv(list[2], 80, "#cd7f32")}
              <div style="font-weight:bold; margin-top:10px; font-size:14px;">${window.escapeHtml(list[2].name)}</div>
              <div style="color:var(--gold); font-size:12px;">${list[2].xp} XP</div>
          </div>`;
      }
      podiumHtml += '</div>';
      return podiumHtml;
  }

  function renderList(list) {
      var listBlock = el('<section class="module"><h3 style="margin-top:0;">Остальные участники</h3><div id="restList"></div></section>');
      var restWrap = listBlock.querySelector("#restList");
      
      list.slice(3).forEach((s, i) => {
          restWrap.appendChild(el(`<div style="display:flex; justify-content:space-between; align-items:center; padding:12px 0; border-bottom:1px solid var(--border);">
              <div style="display:flex; align-items:center; gap:10px;">
                  <b style="color:var(--muted); font-size:16px;">${i+4}.</b>
                  <div>${window.escapeHtml(s.name)} <span style="font-size:11px; color:var(--muted);">(${window.escapeHtml(s.group)})</span></div>
              </div>
              <b style="color:var(--accent);">${s.xp} XP</b>
          </div>`));
      });
      return listBlock;
  }

  window.API.getStudents().then(d => {
      if (!d || !d.ok || !d.students || !d.students.length) {
          return app.appendChild(el('<div class="module" style="text-align:center;">Пока нет данных для рейтинга.</div>'));
      }

      var list = d.students.filter(s => {
          var g = (s.group || "").toUpperCase();
          return g !== "ТЕСТ" && g !== "TEST";
      }).map(s => {
          var p = {}; try { p = JSON.parse(s.payload || "{}"); } catch(e){}
          return { name: s.name, group: s.group, xp: p.xp || 0, avatar: p.avatar || null };
      }).sort((a, b) => b.xp - a.xp);

      if (list.length === 0) return app.appendChild(el('<div class="module" style="text-align:center;">Нет реальных студентов для рейтинга.</div>'));

      app.appendChild(el(`<section class="module">${renderPodium(list)}</section>`));
      if (list.length > 3) app.appendChild(renderList(list));

  }).catch(err => {
      app.appendChild(el('<div class="module" style="color:var(--gold); border-left:4px solid var(--gold);">⚠️ Ошибка Google API (CORS). Показан рейтинг только для этого устройства.</div>'));
      
      var k = window.studentKey();
      if (k && window.state.student) {
          var localList = [{ name: window.state.student.name, group: window.state.student.group, xp: window.state.xp, avatar: window.state.avatar }];
          app.appendChild(el(`<section class="module">${renderPodium(localList)}</section>`));
      }
  });
};
