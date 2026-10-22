"use strict";

const ACHIEVEMENTS = [
    { id: "welcome", title: "Первый шаг", desc: "Войти в систему", icon: "🚪", check: (s) => !!s.student },
    { id: "reader", title: "Книжный червь", desc: "Изучить первую лекцию", icon: "📖", check: (s) => Object.keys(s.results).length > 0 },
    { id: "hacker", title: "Хакер", desc: "Пройти первый тест", icon: "💻", check: (s) => Object.keys(s.results).some(k => k.includes('_test')) },
    { id: "gamer", title: "Геймер", desc: "Сыграть в мини-игру", icon: "🎮", check: (s) => s.xp >= 50 },
    { id: "level_5", title: "Опытный", desc: "Достичь 5 уровня", icon: "⭐", check: (s) => window.getLevel(s.xp) >= 5 },
    { id: "rich", title: "Богач", desc: "Накопить 1000 XP", icon: "💰", check: (s) => s.xp >= 1000 },
    { id: "sherlock", title: "Шерлок", desc: "Пройти 5 семестровых", icon: "🕵️", check: (s) => Object.keys(s.results).filter(k => k.includes('_sem')).length >= 5 },
    { id: "london_eye", title: "Лондонский глаз", desc: "Пройти все итоговые", icon: "🎡", check: (s) => Object.keys(s.results).filter(k => k.startsWith('final_')).length >= 10 },
    { id: "perfect", title: "Идеально", desc: "Получить оценку 5", icon: "💯", check: (s) => Object.values(s.results).some(r => r.grade === 5) }
];

// ДЕЛАЕМ СПИСОК ДОСТИЖЕНИЙ ГЛОБАЛЬНЫМ
window.ACHIEVEMENTS = ACHIEVEMENTS;

const THEMES = [
    { id: "default", title: "Стандартная", price: 0, color: "#ff6b3d", type: "theme" },
    { id: "neon", title: "Киберпанк", price: 500, color: "#ff00cc", type: "theme" },
    { id: "matrix", title: "Матрица", price: 500, color: "#00ff00", type: "theme" },
    { id: "anime", title: "Аниме (Розовый)", price: 800, color: "#ffb6c1", type: "theme" },
    { id: "rgb", title: "RGB Геймер", price: 1000, color: "#ff0055", type: "theme" },
    { id: "union-jack", title: "Union Jack 🇬🇧", price: 1200, color: "#00247d", type: "theme" },
    { id: "royal", title: "Royal Family 👑", price: 1500, color: "#4a148c", type: "theme" },
    { id: "sherlock", title: "Sherlock 🕵️", price: 1300, color: "#3e2723", type: "theme" },
    { id: "tea-time", title: "Tea Time ☕", price: 900, color: "#f8bbd0", type: "theme" }
];

const AVATARS = [
    { id: "default", url: null, price: 0, title: "Стандартный" },
    { id: "av1", url: "👦", price: 200, title: "Парень" },
    { id: "av2", url: "👧", price: 200, title: "Девушка" },
    { id: "av3", url: "🤖", price: 300, title: "Робот" },
    { id: "custom", url: "url", price: 500, title: "Свой URL" },
    { id: "sherlock_av", url: "🕵️‍♂️", price: 800, title: "Шерлок" },
    { id: "queen_av", url: "👸", price: 800, title: "Королева" },
    { id: "guard_av", url: "💂‍♂️", price: 600, title: "Гвардеец" },
    { id: "bus_av", url: "🚌", price: 400, title: "Красный автобус" }
];

const EFFECTS = [
    { id: "none", title: "Нет", price: 0, css: "" },
    { id: "glow", title: "Свечение", price: 400, css: "box-shadow: 0 0 15px var(--accent); border-color: var(--accent);" },
    { id: "rainbow", title: "Радуга", price: 800, css: "animation: rainbow-border 3s infinite linear; border: 3px solid; border-image: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet) 1;" },
    { id: "union", title: "Британский флаг", price: 1000, css: "box-shadow: 0 0 0 3px #00247d, 0 0 0 6px #cf142b, 0 0 0 9px #ffffff; border: none;" }
];

window.checkAchievements = function() {
    if (!window.state.student) return;
    if (!window.state.unlockedAchievements) window.state.unlockedAchievements = [];
    ACHIEVEMENTS.forEach(ach => {
        if (!window.state.unlockedAchievements.includes(ach.id) && ach.check(window.state)) {
            window.state.unlockedAchievements.push(ach.id);
            window.showToast(`🏆 Достижение: ${ach.title}!`, "ok");
            window.saveStudentData();
        }
    });
};

window.renderShopPage = function() {
    var app = document.getElementById("app"); if (!app) return; app.innerHTML = "";
    document.getElementById("crumbs").textContent = "Магазин XP";
    app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));
    app.appendChild(el(`<section class="hero"><h1>🛒 Магазин</h1><p>Баланс: <b style="color:var(--gold); font-size:24px;">${window.state.staff ? "∞ (Учитель)" : window.state.xp + " XP"}</b></p></section>`));

    function renderCategory(title, items, type) {
        var html = `<h3 style="margin-top:30px; border-bottom: 2px solid var(--border); padding-bottom:10px;">${title}</h3>`;
        html += `<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:16px;">`;
        
        items.forEach(item => {
            var isOwned = (window.state.purchasedThemes || []).includes(item.id) || (window.state.avatar === item.url) || (window.state.effect === item.id);
            var isActive = false;
            if (type === 'theme') isActive = localStorage.getItem("mdk.theme_active") === item.id;
            if (type === 'avatar') isActive = window.state.avatar === item.url || (item.id === 'default' && !window.state.avatar);
            if (type === 'effect') isActive = (window.state.effect || 'none') === item.id;

            var btnHtml = "";
            if (isActive) btnHtml = `<button class="btn ghost" disabled style="border-color:var(--ok); color:var(--ok); width:100%;">✅ Активно</button>`;
            else if (isOwned) btnHtml = `<button class="btn" onclick="window.applyShopItem('${type}', '${item.id}', '${item.url || ''}')" style="width:100%; background:var(--card-soft); color:var(--text);">Применить</button>`;
            else btnHtml = `<button class="btn" onclick="window.buyShopItem('${type}', '${item.id}', ${item.price}, '${item.url || ''}')" style="width:100%; background:var(--gold); color:#000;">Купить за ${item.price} XP</button>`;

            var preview = "";
            if (type === 'theme') preview = `<div style="height:40px; border-radius:8px; background:${item.color}; margin-bottom:10px; border: 1px solid var(--border);"></div>`;
            if (type === 'avatar' && item.url && item.url !== 'url') {
                if (item.url.length <= 5 && !item.url.startsWith("http")) {
                    preview = `<div style="font-size:40px; line-height:60px; margin-bottom:10px;">${item.url}</div>`;
                } else {
                    preview = `<img src="${item.url}" style="width:60px; height:60px; border-radius:50%; margin:0 auto 10px; display:block; background:var(--card-soft); object-fit:cover;">`;
                }
            }
            if (type === 'effect') preview = `<div style="height:40px; width:40px; border-radius:50%; background:var(--card); margin:0 auto 10px; ${item.css}"></div>`;

            html += `<div class="module" style="padding:15px; text-align:center;">
                ${preview}
                <h4 style="margin:0 0 10px 0;">${item.title}</h4>
                ${btnHtml}
            </div>`;
        });
        html += `</div>`;
        return html;
    }

    app.innerHTML += renderCategory("🎨 Темы оформления", THEMES, "theme");
    app.innerHTML += renderCategory("👤 Аватары", AVATARS, "avatar");
    app.innerHTML += renderCategory("✨ Эффекты аватара", EFFECTS, "effect");
};

window.buyShopItem = function(type, id, price, url) {
    if (!window.state.staff && window.state.xp < price) return window.showToast("Недостаточно XP!", "err");
    
    if (url === 'url') {
        url = prompt("Введите прямую ссылку на картинку (URL, заканчивающийся на .png, .jpg, .gif):");
        if (!url || (!url.startsWith("http") && !url.startsWith("data:"))) return window.showToast("Неверный URL", "err");
    }
    
    if (confirm(window.state.staff ? "Выдать бесплатно?" : `Купить за ${price} XP?`)) {
        if (!window.state.staff) window.state.xp -= price;
        
        if (type === 'theme') { if(!window.state.purchasedThemes) window.state.purchasedThemes = []; window.state.purchasedThemes.push(id); }
        if (type === 'avatar') { window.state.avatar = url; }
        if (type === 'effect') { window.state.effect = id; }
        
        window.saveStudentData();
        window.showToast(window.state.staff ? "Выдано!" : "Покупка успешна!", "ok");
        window.renderShopPage();
        window.renderUserChip();
    }
};

window.applyShopItem = function(type, id, url) {
    if (type === 'theme') {
        localStorage.setItem("mdk.theme_active", id);
        document.documentElement.setAttribute("data-theme", id === "default" ? "dark" : id);
    } else if (type === 'avatar') {
        window.state.avatar = url || null;
    } else if (type === 'effect') {
        window.state.effect = id;
    }
    window.saveStudentData();
    window.showToast("Применено!", "ok");
    window.renderShopPage();
    window.renderUserChip();
};

window.renderProfilePage = function() {
  var app = document.getElementById("app"); if (!app) return; app.innerHTML = "";
  app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));
  
  if (window.state.staff) { app.innerHTML += `<section class="module"><h1>Профиль учителя</h1><p>${window.state.staff.name}</p></section>`; return; }
  if (!window.state.student) return;

  var lvl = window.getLevel(window.state.xp);
  var effCss = window.state.effect && window.state.effect !== 'none' ? EFFECTS.find(e => e.id === window.state.effect).css : "";
  
  var avHtml = "👨‍🎓";
  if (window.state.avatar) {
      if (window.state.avatar.length <= 5 && !window.state.avatar.startsWith("http")) {
          avHtml = `<span style="font-size:60px;">${window.state.avatar}</span>`;
      } else {
          avHtml = `<img src="${window.state.avatar}" style="width:100px; height:100px; border-radius:50%; object-fit:cover;">`;
      }
  }

  var resultsHtml = "";
  var results = window.state.results || {};
  var hasResults = false;
  
  for (var key in results) {
      if (results.hasOwnProperty(key)) {
          hasResults = true;
          var grade = results[key].grade || "?";
          var color = grade >= 4 ? "var(--ok)" : (grade >= 3 ? "var(--gold)" : "var(--err)");
          var displayName = key;
          if (key.includes("_test")) displayName = "Тест / Практика";
          if (key.includes("_sem")) displayName = "Семестровая";
          if (key.startsWith("final_")) displayName = "Итоговый экзамен";
          
          resultsHtml += `<div style="display:flex; justify-content:space-between; padding:10px; border-bottom:1px solid var(--border);">
              <span>${window.escapeHtml(displayName)}</span>
              <b style="color:${color}; font-size:18px;">${grade}</b>
          </div>`;
      }
  }

  if (!hasResults) resultsHtml = "<p style='color:var(--muted);'>Вы пока не прошли ни одного теста.</p>";

  app.innerHTML += `<section class="module" style="text-align:center; padding:40px;">
      <div style="width:120px; height:120px; margin:0 auto 20px; border-radius:50%; border:4px solid var(--accent); display:flex; align-items:center; justify-content:center; font-size:60px; ${effCss}">
          ${avHtml}
      </div>
      <h2 style="margin:0 0 10px 0;">${window.state.student.name}</h2>
      <p style="color:var(--muted); margin-bottom:15px;">Группа: ${window.state.student.group}</p>
      <div style="display:inline-block; background:var(--card-soft); padding:10px 20px; border-radius:20px;">
          <b style="color:var(--gold);">${window.state.xp} XP</b> · Уровень ${lvl}
      </div>
  </section>
  
  <section class="module">
      <h3>📊 Мои оценки</h3>
      ${resultsHtml}
  </section>`;
};
