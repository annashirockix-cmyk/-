"use strict";

/* ============================================================
   ХЕЛПЕРЫ
   ============================================================ */
window.$ = (id) => document.getElementById(id);
window.escapeHtml = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
window.el = (html) => { var div = document.createElement("div"); div.innerHTML = html.trim(); return div.firstChild; };
window.studentKey = (s) => { s = s || window.state.student; return s ? (s.name.trim().toLowerCase() + "|" + s.group.trim().toLowerCase()) : null; };

window.showToast = function(msg, type) {
  var container = document.querySelector(".toast-container");
  if (!container) { container = document.createElement("div"); container.className = "toast-container"; document.body.appendChild(container); }
  var toast = document.createElement("div");
  toast.className = "toast " + (type || "");
  toast.innerHTML = (type === "ok" ? "✅ " : type === "err" ? "❌ " : "ℹ️ ") + window.escapeHtml(msg);
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add("out"); setTimeout(() => toast.remove(), 300); }, 3000);
};

/* ============================================================
   ДАННЫЕ КОНСТРУКТОРА (Преподаватель)
   ============================================================ */
window.getCustomData = function() {
    try { return JSON.parse(localStorage.getItem("mdk.custom_data")) || { flashcards: [], tests: [] }; }
    catch(e) { return { flashcards: [], tests: [] }; }
};
window.saveCustomData = function(data) { localStorage.setItem("mdk.custom_data", JSON.stringify(data)); };

/* ============================================================
   СОСТОЯНИЕ
   ============================================================ */
window.state = {
  activeCourseId: "basic", student: null, staff: null, xp: 0, results: {},
  purchasedThemes: [], unlockedAchievements: [], avatar: null, effect: null, certBg: "1.jpg", suppBg: "1.jpg"
};

try {
  window.state.activeCourseId = localStorage.getItem("mdk.active") || "basic";
  var _s = JSON.parse(localStorage.getItem("mdk.student") || "null"); if (_s && _s.name) window.state.student = _s;
  var _st = JSON.parse(localStorage.getItem("mdk.staff") || "null"); if (_st && _st.name) window.state.staff = _st;
} catch (e) { console.warn("LocalStorage недоступен"); }

if (!window.MDK_DATA || !window.MDK_DATA[window.state.activeCourseId]) window.state.activeCourseId = "basic";
window.COURSE = (window.MDK_DATA && window.MDK_DATA[window.state.activeCourseId]) || null;

window.getLevel = (xp) => !xp || xp <= 0 ? 1 : Math.min(Math.floor(Math.sqrt(xp / 100)) + 1, 100);

window.updateXpDisplay = function() {
  var el = window.$("xpCount"); if (!el) return;
  if (window.state.staff) el.textContent = "👨‍🏫 Преподаватель";
  else el.textContent = "🌟 " + window.state.xp + " XP · Lv." + window.getLevel(window.state.xp);
};

window.addXP = function(amount) {
  if (window.state.staff) return;
  window.state.xp += amount;
  window.saveStudentData();
  window.showToast((amount > 0 ? "+" : "") + amount + " XP", amount > 0 ? "ok" : "err");
  if (window.checkAchievements) window.checkAchievements();
};

window.saveStudentData = function() {
  var k = window.studentKey(); if (!k) return;
  var ek = encodeURIComponent(k);
  try {
    localStorage.setItem("mdk.xp." + ek, window.state.xp);
    localStorage.setItem("mdk.results." + ek, JSON.stringify(window.state.results || {}));
    localStorage.setItem("mdk.shop." + ek, JSON.stringify({
      purchasedThemes: window.state.purchasedThemes || [],
      unlockedAchievements: window.state.unlockedAchievements || [],
      avatar: window.state.avatar || null, effect: window.state.effect || null
    }));
  } catch (e) {}
  window.updateXpDisplay();
  if (window.API && window.API.saveStudent) {
    window.API.saveStudent(k, window.state.student.name, window.state.student.group,
      JSON.stringify({
        xp: window.state.xp, results: window.state.results,
        purchasedThemes: window.state.purchasedThemes || [],
        unlockedAchievements: window.state.unlockedAchievements || [],
        avatar: window.state.avatar || null, effect: window.state.effect || null
      })
    ).catch(() => {});
  }
};

window.loadStudentData = function() {
  var k = window.studentKey(); if (!k) return;
  var ek = encodeURIComponent(k);
  try {
    window.state.xp = parseInt(localStorage.getItem("mdk.xp." + ek) || "0", 10);
    var r = localStorage.getItem("mdk.results." + ek); window.state.results = r ? JSON.parse(r) : {};
    var s = localStorage.getItem("mdk.shop." + ek);
    if (s) { var sh = JSON.parse(s); window.state.purchasedThemes = sh.purchasedThemes || []; window.state.unlockedAchievements = sh.unlockedAchievements || []; window.state.avatar = sh.avatar || null; window.state.effect = sh.effect || null; }
  } catch (e) {}
  window.updateXpDisplay(); window.renderUserChip();
};

/* ============================================================
   АВТОРИЗАЦИЯ
   ============================================================ */
window.doStudentLogin = function() {
  var n = window.$("loginName").value.trim(); var g = window.$("loginGroup").value.trim();
  if (!n || !g) { window.showToast("Введите ФИО и группу!", "err"); return; }
  window.state.student = { name: n, group: g.toUpperCase() }; window.state.staff = null;
  try { localStorage.setItem("mdk.student", JSON.stringify(window.state.student)); localStorage.removeItem("mdk.staff"); } catch(e){}
  window.renderUserChip(); window.loadStudentData(); window.route();
};

window.doTeacherLogin = function() {
  var u = window.$("teacherUser").value.trim(); var p = window.$("teacherPass").value.trim();
  var errEl = window.$("teacherLoginError");
  if (!u || !p) { errEl.textContent = "Введите логин и пароль"; errEl.style.display = "block"; return; }
  if ((u === "admin" && p === "admin") || (u === "teacher" && p === "teacher")) {
      window.state.staff = { name: u === "admin" ? "Администратор" : "Анна Анатольевна", role: u === "admin" ? "admin" : "teacher" };
      window.state.student = null; window.state.xp = 999999;
      try { localStorage.setItem("mdk.staff", JSON.stringify(window.state.staff)); localStorage.removeItem("mdk.student"); } catch(e){}
      
      var c = document.getElementById("menuConstructor");
      var r = document.getElementById("menuReports");
      if (c) c.style.display = "flex";
      if (r) r.style.display = "flex";

      window.renderUserChip(); window.updateXpDisplay(); window.route();
  } else { errEl.textContent = "Неверный логин или пароль"; errEl.style.display = "block"; }
};

window.handleLogout = function() {
  if (!confirm("Выйти из системы?")) return;
  window.state.student = null; window.state.staff = null; window.state.xp = 0;
  try { localStorage.removeItem("mdk.student"); localStorage.removeItem("mdk.staff"); } catch(e){}
  
  var c = document.getElementById("menuConstructor");
  var r = document.getElementById("menuReports");
  if (c) c.style.display = "none";
  if (r) r.style.display = "none";

  window.closeDrawer(); window.route();
};

/* ============================================================
   НАВИГАЦИЯ
   ============================================================ */
window.switchCourse = function(id) { window.state.activeCourseId = id; window.COURSE = window.MDK_DATA[id] || null; window.route(); };
window.closeDrawer = function() { if (window.$("drawer")) window.$("drawer").classList.remove("open"); if (window.$("drawerOverlay")) window.$("drawerOverlay").classList.remove("open"); };

window.renderUserChip = function() {
  if (!window.$("userChipName")) return;
  if (window.state.staff) { window.$("userChipName").textContent = window.state.staff.name; window.$("userChipGroup").textContent = "Преподаватель"; window.$("userChipAvatar").innerHTML = "👨‍🏫"; return; }
  if (!window.state.student) return;
  window.$("userChipName").textContent = window.state.student.name; window.$("userChipGroup").textContent = "Гр. " + window.state.student.group;
  window.$("userChipAvatar").innerHTML = window.state.avatar ? `<img src="${window.state.avatar}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">` : "👨‍🎓";
};

/* ============================================================
   ГЛАВНЫЙ РОУТЕР
   ============================================================ */
window.route = function() {
  window.closeDrawer();
  var overlay = window.$("loginOverlay"); var fab = document.getElementById("asFab");
  var isLoggedIn = !!(window.state.student || window.state.staff);
  if (!isLoggedIn) { if (overlay) overlay.style.display = "block"; if (fab) fab.style.display = "none"; if (window.$("app")) window.$("app").innerHTML = ""; return; }
  if (overlay) overlay.style.display = "none"; if (fab) fab.style.display = "flex";

  var hash = location.hash.replace(/^#/, "") || "/";
  var parts = hash.split("/").filter(Boolean);
  var app = window.$("app"); if (!app) return;

  try {
    var page = parts[0] || "/";
    if (page === "topic") window.renderTopic(parts[1], parts[2]);
    else if (page === "certificate") window.renderCertificatePage();
    else if (page === "profile" && window.renderProfilePage) window.renderProfilePage();
    else if (page === "videos") window.renderVideoPage(parts[1]);
    else if (page === "passports") window.renderSimplePage("Учебные материалы", window.GLOBAL_DATA?.passports, "📄");
    else if (page === "training") window.renderTrainingPage(parts[1]);
    else if (page === "final") {
      if (window.state.activeCourseId === "basic" && window.renderFinal_basic) window.renderFinal_basic(parts[1]);
      else if (window.state.activeCourseId === "technical" && window.renderFinal_technical) window.renderFinal_technical(parts[1]);
    }
    else if (page === "semester" && window.renderSemesterTests) window.renderSemesterTests(parts[1]);
    else if (page === "final-exam" && window.renderFinalExam) window.renderFinalExam(parts[1], parts[2]);
    else if (page === "arcade" && window.renderArcadePage) window.renderArcadePage();
    else if (page === "shop" && window.renderShopPage) window.renderShopPage();
    else if (page === "rating" && window.renderRatingPage) window.renderRatingPage();
    else if (page === "reports" && window.renderCourseReportsPage) window.renderCourseReportsPage();
    else if (page === "schedule" && window.renderSchedulePage) window.renderSchedulePage();
    else if (page === "achievements") window.renderAchievementsPage();
    else if (page === "constructor") window.renderConstructorPage();
    else renderHome();
  } catch (err) {
    app.innerHTML = '<div class="module" style="color:var(--err);">Ошибка: ' + window.escapeHtml(err.message) + '</div>';
  }
  window.scrollTo(0, 0);
};

/* ============================================================
   НОВОЕ: КОНСТРУКТОР ТЕСТОВ И КАРТОЧЕК (Только для учителя)
   ============================================================ */
window.renderConstructorPage = function() {
    var app = window.$("app"); if (!app) return; app.innerHTML = "";
    if (!window.state.staff) { app.innerHTML = '<div class="module" style="color:var(--err);">Доступ запрещен.</div>'; return; }
    
    app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));
    app.appendChild(el('<section class="hero"><h1>🛠 Конструктор</h1><p>Создавайте собственные тесты и карточки</p></section>'));

    var data = window.getCustomData();

    // ВКЛАДКА: КАРТОЧКИ
    var cardHtml = `
        <div class="module" style="border-left:4px solid var(--accent);">
            <h3 style="margin-top:0;">🃏 Добавить карточку</h3>
            <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:15px;">
                <input type="text" id="cf_front" class="self-input" placeholder="Слово на английском" style="flex:1; min-width:200px;">
                <input type="text" id="cf_back" class="self-input" placeholder="Перевод на русский" style="flex:1; min-width:200px;">
                <input type="text" id="cf_trans" class="self-input" placeholder="Транскрипция (необязательно)" style="flex:1; min-width:150px;">
            </div>
            <button class="btn" onclick="window.addCustomFlashcard()" style="background:var(--accent);">Добавить карточку</button>
            
            <h4 style="margin-top:30px;">Мои карточки (${data.flashcards.length})</h4>
            <div style="max-height:200px; overflow-y:auto; border:1px solid var(--border); border-radius:8px; padding:10px;">
                ${data.flashcards.map((c, i) => `<div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding:5px 0;">
                    <span><b>${window.escapeHtml(c.front)}</b> — ${window.escapeHtml(c.back)}</span>
                    <button onclick="window.deleteCustomFlashcard(${i})" style="background:none; border:none; color:var(--err); cursor:pointer;">🗑</button>
                </div>`).join("") || "Пока нет карточек"}
            </div>
        </div>
    `;
    app.appendChild(el(cardHtml));

    // ВКЛАДКА: ТЕСТЫ
    var testHtml = `
        <div class="module" style="border-left:4px solid var(--gold); margin-top:24px;">
            <h3 style="margin-top:0;">📝 Создать тест</h3>
            <div style="display:flex; gap:10px; margin-bottom:15px;">
                <input type="text" id="test_title" class="self-input" placeholder="Название теста" style="flex:2;">
                <input type="number" id="test_time" class="self-input" placeholder="Время (мин)" value="10" style="flex:1;">
            </div>
            <div id="testQuestionsList"></div>
            <button class="btn ghost" onclick="window.addTestQuestionUI()" style="width:100%; margin-bottom:15px;">➕ Добавить вопрос</button>
            <button class="btn" onclick="window.saveCustomTest()" style="width:100%; background:var(--gold); color:#000;">💾 Сохранить тест</button>

            <h4 style="margin-top:30px;">Мои тесты (${data.tests.length})</h4>
            <div style="border:1px solid var(--border); border-radius:8px; padding:10px;">
                ${data.tests.map((t, i) => `<div style="display:flex; justify-content:space-between; border-bottom:1px solid var(--border); padding:5px 0;">
                    <span><b>${window.escapeHtml(t.title)}</b> (${t.questions.length} вопр.)</span>
                    <button onclick="window.deleteCustomTest(${i})" style="background:none; border:none; color:var(--err); cursor:pointer;">🗑</button>
                </div>`).join("") || "Пока нет тестов"}
            </div>
        </div>
    `;
    app.appendChild(el(testHtml));
    
    // Инициализируем один пустой вопрос
    window.addTestQuestionUI();
};

window.addCustomFlashcard = function() {
    var front = document.getElementById("cf_front").value.trim();
    var back = document.getElementById("cf_back").value.trim();
    var trans = document.getElementById("cf_trans").value.trim();
    if (!front || !back) return window.showToast("Заполните слово и перевод", "err");
    
    var data = window.getCustomData();
    data.flashcards.push({ front: front, back: back, transcription: trans });
    window.saveCustomData(data);
    window.showToast("Карточка добавлена!", "ok");
    window.renderConstructorPage();
};

window.deleteCustomFlashcard = function(index) {
    var data = window.getCustomData();
    data.flashcards.splice(index, 1);
    window.saveCustomData(data);
    window.renderConstructorPage();
};

window.addTestQuestionUI = function() {
    var list = document.getElementById("testQuestionsList");
    var qId = Date.now() + Math.random().toString(36).substr(2, 5);
    
    var html = `
        <div class="module" id="q_block_${qId}" style="background:var(--card-soft); padding:15px; margin-bottom:10px; border:1px solid var(--border);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                <b style="color:var(--accent);">Вопрос</b>
                <button onclick="document.getElementById('q_block_${qId}').remove()" style="background:none; border:none; color:var(--err); cursor:pointer;">Удалить</button>
            </div>
            <input type="text" class="self-input q-text" placeholder="Текст вопроса">
            <div class="q-options" style="display:flex; flex-direction:column; gap:5px;">
                <div style="display:flex; gap:5px;">
                    <input type="text" class="self-input q-opt" placeholder="Вариант 1">
                    <input type="radio" name="correct_${qId}" value="0" checked title="Правильный">
                </div>
                <div style="display:flex; gap:5px;">
                    <input type="text" class="self-input q-opt" placeholder="Вариант 2">
                    <input type="radio" name="correct_${qId}" value="1" title="Правильный">
                </div>
                <div style="display:flex; gap:5px;">
                    <input type="text" class="self-input q-opt" placeholder="Вариант 3">
                    <input type="radio" name="correct_${qId}" value="2" title="Правильный">
                </div>
                <div style="display:flex; gap:5px;">
                    <input type="text" class="self-input q-opt" placeholder="Вариант 4 (необязательно)">
                    <input type="radio" name="correct_${qId}" value="3" title="Правильный">
                </div>
            </div>
            <input type="hidden" class="q-group-id" value="${qId}">
        </div>
    `;
    list.insertAdjacentHTML('beforeend', html);
};

window.saveCustomTest = function() {
    var title = document.getElementById("test_title").value.trim();
    var time = parseInt(document.getElementById("test_time").value) || 10;
    if (!title) return window.showToast("Введите название теста", "err");

    var questions = [];
    document.querySelectorAll("#testQuestionsList > .module").forEach(block => {
        var qText = block.querySelector(".q-text").value.trim();
        var opts = [];
        var optInputs = block.querySelectorAll(".q-opt");
        optInputs.forEach(inp => { if (inp.value.trim()) opts.push(inp.value.trim()); });
        
        var correctRadio = block.querySelector("input[type='radio']:checked");
        var correct = correctRadio ? parseInt(correctRadio.value) : 0;
        
        if (qText && opts.length >= 2 && correct < opts.length) {
            questions.push({ q: qText, options: opts, correct: correct });
        }
    });

    if (questions.length === 0) return window.showToast("Добавьте хотя бы один корректный вопрос", "err");

    var data = window.getCustomData();
    data.tests.push({
        id: "custom_" + Date.now(),
        title: title,
        time: time,
        questions: questions
    });
    window.saveCustomData(data);
    window.showToast("Тест сохранен!", "ok");
    window.renderConstructorPage();
};

window.deleteCustomTest = function(index) {
    var data = window.getCustomData();
    data.tests.splice(index, 1);
    window.saveCustomData(data);
    window.renderConstructorPage();
};

/* ============================================================
   ОБЪЯВЛЕНИЯ (Главная страница)
   ============================================================ */
window.saveAnnouncement = function() {
    var text = document.getElementById("annTextArea").value.trim();
    localStorage.setItem("mdk.announcement", text);
    window.showToast("Объявление сохранено!", "ok");
    renderHome();
};

function renderAnnouncementBlock() {
    var text = localStorage.getItem("mdk.announcement") || "";
    var isTeacher = !!window.state.staff;
    
    if (!text && !isTeacher) return "";

    var html = `<div class="module" style="border-left:4px solid var(--gold); background:rgba(255, 215, 0, 0.05); margin-bottom:24px;">
        <h3 style="margin-top:0; color:var(--gold); display:flex; align-items:center; gap:10px;">📢 Объявление</h3>`;
    
    if (isTeacher) {
        html += `<textarea id="annTextArea" class="self-input" style="min-height:80px; margin-bottom:10px;" placeholder="Напишите объявление для учеников...">${window.escapeHtml(text)}</textarea>
                 <button class="btn" onclick="window.saveAnnouncement()" style="background:var(--gold); color:#000;">Сохранить</button>`;
    } else {
        html += `<p style="white-space:pre-wrap; font-size:16px; margin:0;">${window.escapeHtml(text)}</p>`;
    }
    
    return html + `</div>`;
}

/* ============================================================
   ВИДЕО-УРОКИ И ПОШАГОВЫЙ КВИЗ
   ============================================================ */
window.renderVideoPage = function(lessonId) {
    var app = window.$("app"); if (!app) return; app.innerHTML = "";
    app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));

    if (!lessonId) {
        app.innerHTML += '<section class="hero"><h1>🎬 Видео и Презентации</h1><p>Выберите урок для просмотра.</p></section>';
        var grid = el('<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:20px;"></div>');
        Object.keys(window.GLOBAL_LESSONS || {}).forEach(key => {
            var l = window.GLOBAL_LESSONS[key];
            grid.appendChild(el(`<div class="module" style="cursor:pointer;" onclick="location.hash='#/videos/${key}'">
                <h3 style="color:var(--accent);">${l.title}</h3>
                <p style="color:var(--muted); font-size:14px;">${l.type === 'gap-fill' ? 'Видео + задание на заполнение пропусков' : 'Презентация + интерактивный квиз'}</p>
                <button class="btn ghost" style="width:100%; margin-top:10px;">Открыть</button>
            </div>`));
        });
        app.appendChild(grid);
        return;
    }

    var lesson = window.GLOBAL_LESSONS[lessonId];
    if (!lesson) { app.innerHTML += '<div class="module">Урок не найден.</div>'; return; }

    app.appendChild(el(`<section class="hero"><h1>${lesson.title}</h1></section>`));
    var box = el('<div class="module"></div>'); app.appendChild(box);

    if (lesson.type === "gap-fill") {
        var wordOptions = `<option value="">— Выберите слово —</option>` + lesson.options.map(w => `<option value="${w}">${w}</option>`).join("");
        var formattedText = lesson.text.replace(/\{(\d+)\}/g, (m, num) => `<select class="gap-select" data-num="${num}" style="padding:4px 8px; border-radius:6px; border:1px solid var(--accent); background:var(--bg); color:var(--text); font-weight:bold; margin:0 4px;">${wordOptions}</select>`);

        var isLocalVideo = lesson.videoUrl.endsWith('.mp4') || lesson.videoUrl.endsWith('.webm');
        var mediaHtml = isLocalVideo 
            ? `<div style="width:100%; border-radius:12px; overflow:hidden; margin-bottom:20px; background:#000; text-align:center;"><video controls style="width:100%; max-height:70vh; display:block;" src="${lesson.videoUrl}"></video></div>`
            : `<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px; margin-bottom:20px; background:#000;"><iframe src="${lesson.videoUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:none;" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>`;

        box.innerHTML = `
            ${mediaHtml}
            <h3 style="color:var(--accent);">Complete the text:</h3>
            <div style="line-height:2; font-size:16px; background:var(--card-soft); padding:20px; border-radius:12px; border:1px solid var(--border);">
                ${formattedText.split("\n").map(p => `<p style="margin-bottom:15px;">${p}</p>`).join("")}
            </div>
            <button class="btn" style="width:100%; padding:15px; margin-top:20px;" onclick="window.checkGapFill('${lessonId}')">Проверить ответы</button>
            <div id="gapFillRes" style="text-align:center; font-size:20px; font-weight:bold; margin-top:15px;"></div>
        `;
    } else if (lesson.type === "quiz") {
        var isTeacher = !!window.state.staff;
        
        box.innerHTML = `
            <div style="display:flex; gap:10px; margin-bottom:20px; flex-wrap:wrap; align-items:center;">
                <h3 style="color:var(--accent); margin:0;">🧠 Quiz: ${lesson.title}</h3>
                <span style="margin-left:auto; font-size:14px; color:var(--muted);" id="quizProgress">Вопрос 1 из ${lesson.questions.length}</span>
                ${isTeacher ? `<a href="${lesson.presentationUrl}" download class="btn" style="background:var(--gold); color:#000; padding:6px 12px; font-size:12px;">📥 Скачать (Учителю)</a>` : ''}
            </div>
            <div id="quizContainer" style="background:var(--card-soft); padding:20px; border-radius:12px; border:1px solid var(--border);"></div>
        `;
        
        var currentQ = 0;
        var score = 0;
        
        function renderQuestion() {
            if (currentQ >= lesson.questions.length) {
                document.getElementById("quizContainer").innerHTML = `
                    <div style="text-align:center; padding:20px;">
                        <h2 style="color:var(--ok);">Квиз завершен!</h2>
                        <p style="font-size:18px;">Правильных ответов: <b>${score}</b> из <b>${lesson.questions.length}</b></p>
                        <button class="btn" onclick="location.hash='#/videos'">Вернуться к видео</button>
                    </div>
                `;
                document.getElementById("quizProgress").textContent = "Завершено";
                if (window.addXP && score > 0) window.addXP(score * 5);
                return;
            }
            
            var q = lesson.questions[currentQ];
            document.getElementById("quizProgress").textContent = `Вопрос ${currentQ + 1} из ${lesson.questions.length}`;
            
            var html = `<div style="font-weight:bold; font-size:18px; margin-bottom:15px;">${q.q}</div>
                        <div id="quizOptions">`;
            
            q.options.forEach((opt, i) => {
                html += `<button class="btn ghost" style="display:block; width:100%; text-align:left; margin-bottom:8px; padding:12px; font-size:16px;" onclick="window.selectQuizOption(${i}, ${q.correct}, '${window.escapeHtml(q.explanation).replace(/'/g, "\\'")}')">${opt}</button>`;
            });
            
            html += `</div><div id="quizFeedback" style="margin-top:15px; font-weight:bold; display:none;"></div>`;
            document.getElementById("quizContainer").innerHTML = html;
        }
        
        window.selectQuizOption = function(selected, correct, explanation) {
            var btns = document.querySelectorAll("#quizOptions button");
            btns.forEach((b, i) => {
                b.disabled = true;
                if (i === correct) b.style.borderColor = "var(--ok)";
                if (i === selected && selected !== correct) b.style.borderColor = "var(--err)";
            });
            
            if (selected === correct) score++;
            
            var fb = document.getElementById("quizFeedback");
            fb.style.display = "block";
            fb.innerHTML = (selected === correct ? "✅ Верно! " : "❌ Неверно. ") + explanation;
            fb.style.color = selected === correct ? "var(--ok)" : "var(--err)";
            
            var nextBtn = document.createElement("button");
            nextBtn.className = "btn";
            nextBtn.textContent = currentQ === lesson.questions.length - 1 ? "Завершить" : "Следующий вопрос →";
            nextBtn.style = "margin-top:15px; width:100%; padding:12px;";
            nextBtn.onclick = function() { currentQ++; renderQuestion(); };
            document.getElementById("quizContainer").appendChild(nextBtn);
        };
        
        renderQuestion();
    }
};

window.checkGapFill = function(lessonId) {
    var lesson = window.GLOBAL_LESSONS[lessonId];
    var selects = document.querySelectorAll(".gap-select");
    var correct = 0;
    selects.forEach(sel => {
        var num = sel.dataset.num;
        if (sel.value === lesson.answers[num]) {
            correct++; sel.style.borderColor = "var(--ok)"; sel.style.background = "rgba(88,201,138,0.1)";
        } else {
            sel.style.borderColor = "var(--err)"; sel.style.background = "rgba(255,110,94,0.1)";
        }
    });
    var res = document.getElementById("gapFillRes");
    var pct = Math.round((correct / selects.length) * 100);
    res.innerHTML = `Верно: ${correct} из ${selects.length} (${pct}%)`;
    if (pct >= 70 && window.addXP) { window.addXP(50); window.showToast("Отлично! +50 XP", "ok"); }
};

/* ============================================================
   ТРЕНИРОВКА (Объединяем стандартные и кастомные тесты)
   ============================================================ */
window.renderTrainingPage = function(mdkId) {
    var app = window.$("app"); if (!app) return; app.innerHTML = "";
    app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));

    if (!mdkId) {
        app.innerHTML += '<section class="hero"><h1>🎯 Тренировка</h1><p>Выберите тест для прохождения</p></section>';
        
        // Стандартные тесты курса
        var questions = [];
        if (window.MDK_DATA && window.MDK_DATA[window.state.activeCourseId]) {
            window.MDK_DATA[window.state.activeCourseId].sections.forEach(s => s.topics.forEach(t => {
                if (t.test) questions = questions.concat(t.test);
            }));
        }

        // Кастомные тесты
        var customData = window.getCustomData();
        
        var grid = el('<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:16px;"></div>');
        
        if (questions.length > 0) {
            grid.appendChild(el(`<div class="module" style="cursor:pointer; border-left:4px solid var(--accent);" onclick="location.hash='#/training/standard'">
                <h3 style="margin-top:0;">Стандартный тест</h3>
                <p style="color:var(--muted); font-size:14px;">${questions.length} вопросов из курса</p>
            </div>`));
        }

        customData.tests.forEach(t => {
            grid.appendChild(el(`<div class="module" style="cursor:pointer; border-left:4px solid var(--gold);" onclick="window.startCustomTest('${t.id}')">
                <h3 style="margin-top:0;">${window.escapeHtml(t.title)}</h3>
                <p style="color:var(--muted); font-size:14px;">${t.questions.length} вопросов · ${t.time} мин</p>
            </div>`));
        });

        if (grid.children.length === 0) {
            app.innerHTML += '<div class="module">Тесты еще не добавлены.</div>';
        } else {
            app.appendChild(grid);
        }
        return;
    }

    if (mdkId === "standard") {
        var questions = [];
        window.MDK_DATA[window.state.activeCourseId].sections.forEach(s => s.topics.forEach(t => {
            if (t.test) questions = questions.concat(t.test);
        }));
        questions = questions.sort(() => Math.random() - 0.5);
        
        app.innerHTML += `<section class="hero"><h1>Стандартный тест</h1><p>Вопросов: ${questions.length}</p></section>`;
        var box = el('<div class="module"></div>');
        box.innerHTML = window.buildTestBlock("train", "standard", questions);
        app.appendChild(box);
    }
};

window.startCustomTest = function(testId) {
    var app = window.$("app"); if (!app) return; app.innerHTML = "";
    var customData = window.getCustomData();
    var test = customData.tests.find(t => t.id === testId);
    if (!test) { app.innerHTML = "<div class='module'>Тест не найден.</div>"; return; }

    app.appendChild(el('<a class="backlink" href="#/training" style="color:var(--accent);">← К списку тестов</a>'));
    app.innerHTML += `<section class="hero"><h1>${window.escapeHtml(test.title)}</h1><p>Вопросов: ${test.questions.length}</p></section>`;
    var box = el('<div class="module"></div>');
    box.innerHTML = window.buildTestBlock("custom", test.id, test.questions);
    app.appendChild(box);
};

/* ============================================================
   СЕРТИФИКАТ
   ============================================================ */
window.renderCertificatePage = function() {
    var app = window.$("app"); if (!app) return; app.innerHTML = "";
    app.appendChild(el('<a class="backlink no-print" href="#/" style="color:var(--accent);">← На главную</a>'));
    if (!window.state.student) return;

    var p = window.state.results || {};
    var passedItems = [];
    var totalSum = 0, count = 0;

    for (var key in p) {
        var topicName = key.replace("prac_", "").replace("self_", "").replace("writing_", "").replace(/_\d+$/, "");
        var type = "Задание";
        
        if (key.includes("__final__")) { type = "Экзамен"; topicName = "Итоговый экзамен"; }
        else if (key.includes("_sem")) {
            type = "Семестровая";
            if (window.SEMESTER_TESTS && window.SEMESTER_TESTS[window.state.activeCourseId]) {
                var st = window.SEMESTER_TESTS[window.state.activeCourseId].find(t => t.id === key);
                if (st) topicName = st.title + " — " + st.subtitle;
            }
        }
        else if (key.startsWith("final_")) {
            type = "Итоговый экзамен (5 лет)";
            if (window.FINAL_EXAMS && window.FINAL_EXAMS[window.state.activeCourseId]) {
                var fe = window.FINAL_EXAMS[window.state.activeCourseId].find(e => key.startsWith(e.id));
                if (fe) topicName = fe.title + " (Вариант " + key.split("_v")[1] + ")";
            }
        }
        else if (key.includes("prac_")) { type = "Практика"; }
        else if (key.includes("self_")) { type = "Самостоятельная"; }
        else if (key.includes("writing_")) { type = "Письменная"; }
        else if (key.includes("custom_")) { type = "Пользовательский тест"; }

        if (window.COURSE && window.COURSE.sections && type === "Задание") {
            window.COURSE.sections.forEach(s => s.topics.forEach(t => { if (t.id === topicName) topicName = t.code + " " + t.title; }));
        }

        var grade = p[key].grade || (p[key].status === "pending" ? "На проверке" : "—");
        if (typeof grade === 'number') { totalSum += grade; count++; }
        passedItems.push({ name: topicName, type: type, grade: grade });
    }
    var avg = count > 0 ? (totalSum / count).toFixed(2) : "—";

    var rows = passedItems.map(i => `<tr><td style="border:1px solid #000; padding:8px;">${i.name}</td><td style="border:1px solid #000; padding:8px;">${i.type}</td><td style="border:1px solid #000; padding:8px; text-align:center; font-weight:bold;">${i.grade}</td></tr>`).join("");
    if (!rows) rows = `<tr><td colspan="3" style="text-align:center; padding:20px;">Нет пройденных материалов</td></tr>`;

    app.innerHTML += `
        <div id="printable-cert" style="background:#fff; color:#000; padding:40px; border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,0.5); max-width:800px; margin:0 auto 30px; text-align:center; border: 10px solid #c14a2a;">
            <h1 style="font-size:36px; color:#c14a2a; text-transform:uppercase; margin-bottom:10px;">СЕРТИФИКАТ</h1>
            <p style="font-size:18px; margin-bottom:30px;">подтверждает, что</p>
            <h2 style="font-size:32px; border-bottom:2px solid #ccc; display:inline-block; padding-bottom:5px; margin-bottom:30px;">${window.escapeHtml(window.state.student.name)}</h2>
            <p style="font-size:18px; margin-bottom:20px;">успешно прошел(ла) обучение по программе</p>
            <h3 style="font-size:24px; color:#c14a2a; margin-bottom:40px;">${window.escapeHtml(window.COURSE.title)}</h3>
            <div style="display:flex; justify-content:space-between; margin-top:50px; font-size:16px;">
                <div style="text-align:left;"><p>Дата выдачи:</p><p style="font-weight:bold;">${new Date().toLocaleDateString('ru-RU')}</p></div>
                <div style="text-align:right;"><p>Подпись:</p><div style="border-bottom: 1px solid #000; width: 200px; height: 30px;"></div></div>
            </div>
        </div>

        <div id="printable-supplement" style="background:#fff; color:#000; padding:40px; border-radius:12px; box-shadow:0 10px 30px rgba(0,0,0,0.5); max-width:800px; margin:0 auto 30px;">
            <h2 style="text-align:center; color:#c14a2a;">ВКЛАДЫШ К СЕРТИФИКАТУ</h2>
            <p><b>Студент:</b> ${window.escapeHtml(window.state.student.name)}</p>
            <p><b>Группа:</b> ${window.escapeHtml(window.state.student.group)}</p>
            <p><b>Средний балл:</b> ${avg}</p>
            <table style="width:100%; border-collapse:collapse; margin-top:20px; font-size:14px;">
                <thead><tr style="background:#eee;"><th style="border:1px solid #000; padding:8px;">Тема</th><th style="border:1px solid #000; padding:8px;">Тип работы</th><th style="border:1px solid #000; padding:8px;">Оценка</th></tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
        <div style="text-align:center;" class="no-print">
            <button class="btn" onclick="window.print()" style="padding:15px 30px; font-size:18px; background:var(--gold); color:#000;">🖨️ Распечатать сертификат и вкладыш</button>
        </div>
    `;
};

/* ============================================================
   ТЕМА
   ============================================================ */
window.renderTopic = function(topicId, activeTab) {
    var app = window.$("app"); if (!app) return; app.innerHTML = "";
    var topic = null;
    if (window.COURSE && window.COURSE.sections) {
        window.COURSE.sections.forEach(s => s.topics.forEach(t => { if (t.id === topicId) topic = t; }));
    }
    if (!topic) { app.innerHTML = '<div class="module">Тема не найдена.</div>'; return; }

    app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));
    app.appendChild(el(`<section class="hero"><span class="brand-badge">${topic.code}</span><h1>${topic.title}</h1></section>`));

    var tabs = [];
    if (topic.lectures && topic.lectures.length) tabs.push({ id: 'lectures', label: '📖 Лекции' });
    if (topic.practicals && topic.practicals.length) tabs.push({ id: 'practicals', label: '🛠 Практика' });
    if (topic.writing && topic.writing.length) tabs.push({ id: 'writing', label: '✍️ Письменная деятельность' });
    if (topic.selfWork && topic.selfWork.length) tabs.push({ id: 'selfWork', label: '✍️ Самостоятельная' });
    if ((topic.test && topic.test.length) || (topic.tests && topic.tests.length)) tabs.push({ id: 'test', label: '📝 Тест' });

    if (!activeTab || activeTab === 'lecture') activeTab = 'lectures';
    if (activeTab === 'practical') activeTab = 'practicals';

    var tabHtml = '<div style="display:flex; gap:10px; margin-bottom:20px; flex-wrap:wrap;">';
    tabs.forEach(t => { tabHtml += `<button class="tab ${(t.id === activeTab) ? 'active' : ''}" onclick="window.renderTopic('${topicId}', '${t.id}')">${t.label}</button>`; });
    app.appendChild(el(tabHtml + '</div>'));

    var contentBox = el('<div class="module"></div>'); app.appendChild(contentBox);
    var baseQuestions = topic.test || topic.tests || [];

    if (activeTab === 'lectures' && topic.lectures) {
        topic.lectures.forEach((lec, i) => {
            contentBox.innerHTML += `<details class="lec-accordion" ${i===0?"open":""}><summary><span class="lec-code">${lec.code}</span> ${lec.title}</summary><div class="lec-content">${lec.content}</div></details>`;
        });
        if (window.addXP) window.addXP(5);
    }
    else if (activeTab === 'practicals' && topic.practicals) {
        topic.practicals.forEach((p, index) => {
            var uniqueId = `prac_${topicId}_${index}`;
            var isDone = window.state.results[uniqueId] ? "background: rgba(88, 201, 138, 0.1); border-color: var(--ok);" : "";
            contentBox.innerHTML += `<div style="margin-bottom:20px; padding:20px; background:var(--card-soft); border-radius:12px; border:1px solid var(--border); ${isDone}">
                <h4 style="margin-top:0; color:var(--accent); font-size:18px;">${p.code} ${p.title}</h4>
                <p><b>Task:</b> ${p.task}</p>
                ${baseQuestions.length > 0 ? window.buildTestBlock("prac", uniqueId, baseQuestions) : ''}
            </div>`;
        });
    }
    else if (activeTab === 'writing' && topic.writing) {
        var isTeacher = !!window.state.staff;
        topic.writing.forEach((w, index) => {
            var uniqueId = `writing_${topicId}_${index}`;
            var saved = window.state.results[uniqueId] || {};
            var studentText = saved.text || "";
            var studentImg = saved.image || null;
            var status = saved.status || "not_started";
            var grade = saved.grade || "—";

            var statusBadge = status === "pending" ? `<span style="background:var(--gold); color:#000; padding:2px 8px; border-radius:4px; font-size:12px; margin-left:10px;">На проверке</span>` : (status === "graded" ? `<span style="background:var(--ok); color:#000; padding:2px 8px; border-radius:4px; font-size:12px; margin-left:10px;">Оценено: ${grade}</span>` : "");

            var html = `<div style="margin-bottom:20px; padding:20px; background:var(--card-soft); border-radius:12px; border:1px solid var(--border);">
                <h4 style="margin-top:0; color:var(--accent); font-size:18px;">${w.code} ${w.title} ${statusBadge}</h4>
                <p><b>Task:</b> ${w.task}</p>`;

            if (isTeacher) {
                html += `<div style="margin-top:15px; padding:15px; background:var(--bg); border-radius:8px; border:1px solid var(--border);">
                    <b>Работа студента (текст):</b>
                    <p style="white-space:pre-wrap; margin-top:10px; font-style:italic; color:var(--text-soft);">${studentText || '<span style="color:var(--muted);">Нет текста.</span>'}</p>`;
                if (studentImg) {
                    html += `<b>Прикрепленное фото:</b><br><img src="${studentImg}" style="max-width:100%; border-radius:8px; margin-top:10px; border:1px solid var(--border);">`;
                }
                html += `</div>`;
            } else {
                html += `<div style="margin-top:15px; padding-top:15px; border-top:1px dashed var(--border);">
                    <label style="font-weight:bold; display:block; margin-bottom:8px;">Текст вашего ответа:</label>
                    <textarea id="wr_${uniqueId}" class="self-input" style="width:100%; min-height:150px; resize:vertical;" placeholder="Start writing here...">${studentText}</textarea>
                    <label style="font-weight:bold; display:block; margin-top:10px; margin-bottom:8px;">Прикрепить фото (по желанию):</label>
                    <input type="file" id="img_${uniqueId}" accept="image/*" style="margin-bottom:10px; color:var(--text);">`;

                if (status === "graded") {
                    html += `<p style="color:var(--ok); font-weight:bold; margin-top:10px;">Оценка преподавателя: ${grade}</p>`;
                } else {
                    html += `<button class="btn" style="margin-top:10px; padding:10px 20px; width:100%;" onclick="window.saveWritingWork('${uniqueId}')">💾 Отправить на проверку</button>`;
                }
                html += `</div>`;
            }
            contentBox.innerHTML += html + `</div>`;
        });
    }
    else if (activeTab === 'selfWork' && topic.selfWork) {
        topic.selfWork.forEach((sw, index) => {
            var uniqueId = `self_${topicId}_${index}`;
            contentBox.innerHTML += `<div style="margin-bottom:20px; padding:20px; background:var(--card-soft); border-radius:12px; border:1px solid var(--border);">
                <h4 style="margin-top:0; color:var(--accent); font-size:18px;">${sw.title}</h4>
                <p><b>Task:</b> ${sw.task}</p>
                ${baseQuestions.length > 0 ? window.buildTestBlock("self", uniqueId, baseQuestions) : ''}
            </div>`;
        });
    }
    else if (activeTab === 'test' && baseQuestions.length > 0) {
        contentBox.innerHTML = `<h3>📝 Тест</h3>${window.buildTestBlock("inline", topicId, baseQuestions)}`;
    }
};

window.saveWritingWork = function(uniqueId) {
    var textarea = document.getElementById("wr_" + uniqueId);
    var fileInput = document.getElementById("img_" + uniqueId);
    if (!textarea) return;

    var text = textarea.value.trim();
    if (!text && (!fileInput || !fileInput.files[0])) return window.showToast("Напишите текст или прикрепите фото.", "err");

    if (!window.state.results[uniqueId]) window.state.results[uniqueId] = {};
    window.state.results[uniqueId].text = text;
    window.state.results[uniqueId].status = "pending";

    var saveAndRender = function() {
        if (window.addXP) window.addXP(15);
        window.saveStudentData();
        window.showToast("Отправлено преподавателю!", "ok");
        window.renderTopic(window.location.hash.split('/')[2], 'writing');
    };

    if (fileInput && fileInput.files && fileInput.files[0]) {
        var file = fileInput.files[0];
        if (file.size > 500 * 1024) {
            window.showToast("Файл слишком большой (макс 500 КБ). Отправляем только текст.", "err");
            saveAndRender();
        } else {
            var reader = new FileReader();
            reader.onload = function(e) {
                window.state.results[uniqueId].image = e.target.result;
                saveAndRender();
            };
            reader.readAsDataURL(file);
        }
    } else {
        saveAndRender();
    }
};

/* ============================================================
   ТЕСТ-БЛОКИ
   ============================================================ */
window.buildTestBlock = function(prefix, uniqueId, questions) {
    var safeQuestions = encodeURIComponent(JSON.stringify(questions));
    var html = `<div style="margin-top:20px; padding-top:20px; border-top:1px dashed var(--border);"><p style="font-weight:bold;">🎯 Проверочный тест:</p>`;
    questions.forEach((q, qi) => {
        html += `<div style="margin-bottom:15px; padding:15px; background:var(--bg); border-radius:8px;"><b>${qi + 1}. ${q.q}</b><div style="margin-top:10px;">`;
        q.options.forEach((opt, oi) => {
            html += `<label id="opt_${prefix}_${uniqueId}_${qi}_${oi}" style="display:flex; gap:8px; margin-bottom:6px; padding:6px;"><input type="radio" name="${prefix}_q_${uniqueId}_${qi}" value="${oi}"> <span>${opt}</span></label>`;
        });
        html += `</div></div>`;
    });
    html += `<button class="btn" style="width:100%; padding:12px;" onclick="window.gradeTest('${prefix}', '${uniqueId}', '${safeQuestions}')">Проверить</button><div id="fb_${prefix}_${uniqueId}" style="text-align:center; margin-top:15px; font-weight:bold;"></div></div>`;
    return html;
};

window.gradeTest = function(prefix, uniqueId, encodedQuestions) {
    var questions = JSON.parse(decodeURIComponent(encodedQuestions));
    var correct = 0;
    questions.forEach((q, qi) => {
        var selected = document.querySelector(`input[name="${prefix}_q_${uniqueId}_${qi}"]:checked`);
        if (selected && Number(selected.value) === q.correct) correct++;
        for (var oi = 0; oi < q.options.length; oi++) {
            var el = document.getElementById(`opt_${prefix}_${uniqueId}_${qi}_${oi}`);
            if (el) {
                el.querySelector('input').disabled = true;
                if (oi === q.correct) el.style.background = "rgba(88, 201, 138, 0.2)";
                else if (selected && oi === Number(selected.value)) el.style.background = "rgba(255, 110, 94, 0.2)";
            }
        }
    });
    var pct = Math.round((correct / questions.length) * 100);
    var grade = pct >= 90 ? 5 : pct >= 75 ? 4 : pct >= 60 ? 3 : 2;
    document.getElementById(`fb_${prefix}_${uniqueId}`).innerHTML = `Оценка: <span style="color:${grade>=3?'var(--ok)':'var(--err)'}; font-size:24px;">${grade}</span> (${correct}/${questions.length})`;
    if (grade >= 3 && !window.state.results[uniqueId]) {
        window.state.results[uniqueId] = { grade: grade };
        if (window.addXP) window.addXP(15);
        window.saveStudentData();
    }
};

/* ============================================================
   СЕМЕСТРОВЫЕ И ИТОГОВЫЕ
   ============================================================ */
window.renderSemesterTests = function(testId) {
  var app = window.$("app"); if (!app) return; app.innerHTML = "";
  app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));

  var course = window.state.activeCourseId;
  var tests = (window.SEMESTER_TESTS && window.SEMESTER_TESTS[course]) || [];

  if (!testId) {
    app.innerHTML += `<section class="hero"><h1>📝 Семестровые контрольные</h1><p>${tests.length} работ для 5 лет обучения</p></section>`;
    if (!tests.length) { app.innerHTML += '<div class="module">Контрольные ещё не добавлены.</div>'; return; }

    var byYear = {};
    tests.forEach(t => { if (!byYear[t.year]) byYear[t.year] = []; byYear[t.year].push(t); });

    Object.keys(byYear).sort().forEach(year => {
      app.appendChild(el(`<div class="steps-title" style="font-size:14px;">${year} курс</div>`));
      var grid = el('<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:16px; margin-bottom:20px;"></div>');
      byYear[year].forEach(t => {
        var completed = window.state.results && window.state.results[t.id];
        var grade = completed && completed.grade ? completed.grade : null;
        var badge = grade ? `<span style="background:${grade >= 4 ? 'var(--ok)' : grade >= 3 ? 'var(--gold)' : 'var(--err)'}; color:#000; padding:2px 8px; border-radius:4px; font-size:12px; margin-left:8px;">Оценка: ${grade}</span>` : '';
        grid.appendChild(el(`<div class="module" style="cursor:pointer; margin:0; border-left:4px solid var(--accent);" onclick="location.hash='#/semester/${t.id}'">
          <h3 style="margin-top:0; font-size:18px;">${t.title} ${badge}</h3>
          <p style="color:var(--muted); font-size:13px; margin:0;">${t.subtitle} · ${t.time} мин · ${t.questions.length} вопросов</p>
        </div>`));
      });
      app.appendChild(grid);
    });
    return;
  }

  var test = tests.find(t => t.id === testId);
  if (!test) { app.innerHTML += '<div class="module">Тест не найден.</div>'; return; }

  app.appendChild(el('<a class="backlink" href="#/semester" style="color:var(--accent);">← К списку контрольных</a>'));
  app.innerHTML += `<section class="hero"><h1>${test.title}</h1><p>${test.subtitle} · ${test.time} мин</p></section>`;
  var box = el('<div class="module"></div>');
  box.innerHTML = window.buildTestBlock("sem", test.id, test.questions);
  app.appendChild(box);
};

window.renderFinalExam = function(examId, variantNum) {
  var app = window.$("app"); if (!app) return; app.innerHTML = "";
  app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← На главную</a>'));

  var course = window.state.activeCourseId;
  var exams = (window.FINAL_EXAMS && window.FINAL_EXAMS[course]) || [];

  if (!examId) {
    app.innerHTML += `<section class="hero"><h1>📋 Итоговые экзамены</h1><p>${exams.length} экзаменов · по 2 варианта</p></section>`;
    if (!exams.length) { app.innerHTML += '<div class="module">Экзамены ещё не добавлены.</div>'; return; }

    exams.forEach(function(e) {
      var v1 = window.state.results && window.state.results[e.id + "_v1"];
      var v2 = window.state.results && window.state.results[e.id + "_v2"];
      var v1Label = v1 && v1.grade ? `✅ Вариант 1 (Оценка: ${v1.grade})` : "Вариант 1";
      var v2Label = v2 && v2.grade ? `✅ Вариант 2 (Оценка: ${v2.grade})` : "Вариант 2";
      app.appendChild(el(`<div class="module" style="border-left:4px solid var(--gold);">
        <h3 style="margin-top:0;">${e.title}</h3>
        <p style="color:var(--muted); font-size:14px; margin-bottom:12px;">${e.time} мин · 2 варианта</p>
        <div style="display:flex; gap:10px; flex-wrap:wrap;">
          <a class="btn" href="#/final-exam/${e.id}/1" style="background:var(--gold); color:#000;">${v1Label}</a>
          <a class="btn ghost" href="#/final-exam/${e.id}/2">${v2Label}</a>
        </div>
      </div>`));
    });
    return;
  }

  var exam = exams.find(e => e.id === examId);
  if (!exam) { app.innerHTML += '<div class="module">Экзамен не найден.</div>'; return; }

  var vNum = Number(variantNum) || 1;
  var variant = exam.variants[vNum - 1];
  if (!variant) { app.innerHTML += '<div class="module">Вариант не найден.</div>'; return; }

  app.appendChild(el('<a class="backlink" href="#/final-exam" style="color:var(--accent);">← К списку экзаменов</a>'));
  app.innerHTML += `<section class="hero"><h1>${exam.title}</h1><p>Вариант ${vNum} · ${exam.time} мин</p></section>`;
  var box = el('<div class="module"></div>');
  box.innerHTML = window.buildTestBlock("final", exam.id + "_v" + vNum, variant.questions);
  app.appendChild(box);
};

/* ============================================================
   ГЛАВНАЯ
   ============================================================ */
function renderHome() {
  var app = window.$("app"); app.innerHTML = "";
  var c = window.COURSE;
  if (!c) { app.innerHTML = "<div class='module'>Ошибка загрузки.</div>"; return; }

  // Блок объявления
  var annHtml = renderAnnouncementBlock();

  var html = `<section class="hero"><h1>${c.title}</h1><p>${c.module || ""}</p></section>`;
  html += annHtml;

  // Быстрые ссылки на контрольные
  if (window.SEMESTER_TESTS && window.FINAL_EXAMS) {
    var cId = window.state.activeCourseId;
    var semCount = (window.SEMESTER_TESTS[cId] || []).length;
    var finCount = (window.FINAL_EXAMS[cId] || []).length;
    if (semCount > 0 || finCount > 0) {
      html += `<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; margin-bottom:24px;">`;
      if (semCount > 0) {
        html += `<div class="module" style="cursor:pointer; border-left:4px solid var(--accent); margin:0;" onclick="location.hash='#/semester'">
          <h3 style="margin-top:0; color:var(--accent);">📝 Семестровые контрольные</h3>
          <p style="color:var(--muted); font-size:14px; margin:0;">${semCount} работ · по 20 вопросов</p>
        </div>`;
      }
      if (finCount > 0) {
        html += `<div class="module" style="cursor:pointer; border-left:4px solid var(--gold); margin:0;" onclick="location.hash='#/final-exam'">
          <h3 style="margin-top:0; color:var(--gold);">📋 Итоговые экзамены</h3>
          <p style="color:var(--muted); font-size:14px; margin:0;">${finCount} экзаменов · по 2 варианта</p>
        </div>`;
      }
      html += `</div>`;
    }
  }

  html += `<div class="steps-title">Учебный план</div>`;
  (c.sections || []).forEach(sec => {
    html += `<div style="font-weight:bold; margin:20px 0 10px; color:var(--accent); text-transform:uppercase; font-size:12px;">${sec.title}</div>`;
    (sec.topics || []).forEach(t => {
      html += `<div class="topic" onclick="location.hash='#/topic/${t.id}/lecture'"><div style="flex:1;"><div style="font-size:12px; color:var(--muted);">${t.code}</div><div style="font-weight:bold;">${t.title}</div></div></div>`;
    });
  });
  app.innerHTML = html;
}

/* ============================================================
   ИНИЦИАЛИЗАЦИЯ
   ============================================================ */
window.addEventListener("DOMContentLoaded", function() {
  if (window.$("btnLoginStudent")) window.$("btnLoginStudent").onclick = window.doStudentLogin;
  if (window.$("btnLoginTeacher")) window.$("btnLoginTeacher").onclick = window.doTeacherLogin;
  if (window.$("burgerBtn")) window.$("burgerBtn").onclick = () => { window.$("drawer").classList.toggle("open"); window.$("drawerOverlay").classList.toggle("open"); };
  if (window.$("drawerClose")) window.$("drawerClose").onclick = window.closeDrawer;
  if (window.$("drawerOverlay")) window.$("drawerOverlay").onclick = window.closeDrawer;
  if (window.$("mdkSelector")) { window.$("mdkSelector").value = window.state.activeCourseId; window.$("mdkSelector").onchange = (e) => window.switchCourse(e.target.value); }
  document.querySelectorAll("[data-go]").forEach(item => {
    item.onclick = (e) => { e.preventDefault(); var target = item.getAttribute("data-go"); if (location.hash === target) window.route(); else location.hash = target; window.closeDrawer(); };
  });
  window.renderUserChip();
  if (window.state.student) window.loadStudentData();
  window.route();
});
window.addEventListener("hashchange", window.route);