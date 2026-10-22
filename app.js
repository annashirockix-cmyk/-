// ================= БАЗОВЫЕ УТИЛИТЫ =================
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

// ================= СОСТОЯНИЕ =================
window.state = {
  activeCourseId: "basic",
  student: null, staff: null, xp: 0, results: {},
  purchasedThemes: [], unlockedAchievements: [], avatar: null, effect: null,
  certBg: "1.jpg",
  suppBg: "1.jpg"
};

try {
  window.state.activeCourseId = localStorage.getItem("mdk.active") || "basic";
  var _s = JSON.parse(localStorage.getItem("mdk.student") || "null"); if (_s && _s.name) window.state.student = _s;
  var _st = JSON.parse(localStorage.getItem("mdk.staff") || "null"); if (_st && _st.name) window.state.staff = _st;
  window.state.certBg = localStorage.getItem("mdk.certBg") || "1.jpg";
  window.state.suppBg = localStorage.getItem("mdk.suppBg") || "1.jpg";
} catch (e) { console.warn("LocalStorage недоступен"); }

if (!window.MDK_DATA || !window.MDK_DATA[window.state.activeCourseId]) window.state.activeCourseId = "basic";
window.COURSE = (window.MDK_DATA && window.MDK_DATA[window.state.activeCourseId]) || null;

// ================= XP И СОХРАНЕНИЕ =================
window.getLevel = (xp) => !xp || xp <= 0 ? 1 : Math.min(Math.floor(Math.sqrt(xp / 100)) + 1, 100);

window.updateXpDisplay = function() {
  var el = window.$("xpCount"); if (!el) return;
  if (window.state.staff) {
      el.textContent = "👨‍🏫 Teacher";
  } else {
      el.textContent = "🌟 " + window.state.xp + " XP · Lv." + window.getLevel(window.state.xp);
  }
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
      JSON.stringify({ xp: window.state.xp, results: window.state.results,
          purchasedThemes: window.state.purchasedThemes || [], unlockedAchievements: window.state.unlockedAchievements || [],
          avatar: window.state.avatar || null, effect: window.state.effect || null })
    ).catch(() => {});
  }
};

window.loadStudentData = function() {
  var k = window.studentKey(); if (!k) return;
  var ek = encodeURIComponent(k);
  try {
    window.state.xp = parseInt(localStorage.getItem("mdk.xp." + ek) || "0", 10);
    var r = localStorage.getItem("mdk.results." + ek); 
    window.state.results = r ? JSON.parse(r) : {};
    var s = localStorage.getItem("mdk.shop." + ek); 
    if(s) { 
        var sh = JSON.parse(s); 
        window.state.purchasedThemes = sh.purchasedThemes || []; 
        window.state.unlockedAchievements = sh.unlockedAchievements || [];
        window.state.avatar = sh.avatar || null; window.state.effect = sh.effect || null; 
    }
  } catch (e) {}
  window.updateXpDisplay();
  window.renderUserChip();
};

// ================= АВТОРИЗАЦИЯ =================
window.doStudentLogin = function() {
  var n = window.$("loginName").value.trim(); var g = window.$("loginGroup").value.trim();
  if (!n || !g) { window.showToast("Enter your full name and group!", "err"); return; }
  window.state.student = { name: n, group: g.toUpperCase() }; window.state.staff = null;
  try { localStorage.setItem("mdk.student", JSON.stringify(window.state.student)); localStorage.removeItem("mdk.staff"); } catch(e){}
  window.renderUserChip(); window.loadStudentData(); window.route();
};

window.doTeacherLogin = function() {
  var u = window.$("teacherUser").value.trim(); var p = window.$("teacherPass").value.trim();
  var errEl = window.$("teacherLoginError");
  if (!u || !p) { errEl.textContent = "Enter login and password"; errEl.style.display = "block"; return; }
  
  if ((u === "admin" && p === "admin") || (u === "teacher" && p === "teacher")) {
      window.state.staff = { name: u === "admin" ? "Administrator" : "Teacher", role: u === "admin" ? "admin" : "teacher" };
      window.state.student = null;
      window.state.xp = 999999; 
      try { localStorage.setItem("mdk.staff", JSON.stringify(window.state.staff)); localStorage.removeItem("mdk.student"); } catch(e){}
      window.renderUserChip(); window.updateXpDisplay(); window.route();
  } else { errEl.textContent = "Invalid login or password"; errEl.style.display = "block"; }
};

window.handleLogout = function() {
  if (!confirm("Log out of the system?")) return;
  window.state.student = null; window.state.staff = null; window.state.xp = 0;
  try { localStorage.removeItem("mdk.student"); localStorage.removeItem("mdk.staff"); } catch(e){}
  if (window.$("loginName")) window.$("loginName").value = "";
  if (window.$("loginGroup")) window.$("loginGroup").value = "";
  window.closeDrawer(); window.route();
};

window.switchCourse = function(id) { 
    window.state.activeCourseId = id; window.COURSE = window.MDK_DATA[id] || null; window.route(); 
};

window.closeDrawer = function() { 
    if (window.$("drawer")) window.$("drawer").classList.remove("open"); 
    if (window.$("drawerOverlay")) window.$("drawerOverlay").classList.remove("open"); 
};

window.applyTheme = function(theme) { 
    document.documentElement.setAttribute("data-theme", theme); 
    try { localStorage.setItem("mdk.theme", theme); } catch(e){}
};

window.renderUserChip = function() {
  if (!window.$("userChipName")) return;
  if (window.state.staff) { 
      window.$("userChipName").textContent = window.state.staff.name; 
      window.$("userChipGroup").textContent = "Teacher"; 
      window.$("userChipAvatar").innerHTML = "👨‍🏫"; 
      return; 
  }
  if (!window.state.student) return;
  window.$("userChipName").textContent = window.state.student.name; 
  window.$("userChipGroup").textContent = "Gr. " + window.state.student.group;
  window.$("userChipAvatar").innerHTML = window.state.avatar ? `<img src="${window.state.avatar}" style="width:100%; height:100%; border-radius:50%; object-fit:cover;">` : "👨‍🎓";
};

// ================= РОУТЕР =================
window.route = function() {
  window.closeDrawer();
  var overlay = window.$("loginOverlay");
  var fab = document.getElementById("asFab");
  var isLoggedIn = !!(window.state.student || window.state.staff);

  if (!isLoggedIn) { 
      if (overlay) overlay.style.display = "block"; 
      if (fab) fab.style.display = "none";
      if (window.$("app")) window.$("app").innerHTML = ""; 
      return; 
  }

  if (overlay) overlay.style.display = "none";
  if (fab) fab.style.display = "flex";

  var hash = location.hash.replace(/^#/, "") || "/"; 
  var parts = hash.split("/").filter(Boolean);
  var app = window.$("app"); if (!app) return;

  try {
    var page = parts[0] || "/";
    
    if (page === "topic") window.renderTopic(parts[1], parts[2]);
    else if (page === "certificate") window.renderCertificatePage();
    else if (page === "profile" && window.renderProfilePage) window.renderProfilePage();
    else if (page === "videos") window.renderSimplePage("Video Lessons", window.GLOBAL_DATA?.videos, "🎬");
    else if (page === "passports") window.renderSimplePage("Materials", window.GLOBAL_DATA?.passports, "📄");
    else if (page === "safety") window.renderSimplePage("Safety Rules", window.GLOBAL_DATA?.safety, "🦺");
    else if (page === "formatting") window.renderSimplePage("Formatting", [{title: "Report formatting", content: "Times New Roman 14, line spacing 1.5, margins: top/bottom 2 cm, left 3 cm, right 1.5 cm."}], "📝");
    else if (page === "links" && window.renderLinksPage) window.renderLinksPage();
    else if (page === "training") { 
        if (window.state.activeCourseId === "basic" && window.renderTraining_basic) window.renderTraining_basic(parts[1]); 
        else if (window.state.activeCourseId === "technical" && window.renderTraining_technical) window.renderTraining_technical(parts[1]); 
    }
    else if (page === "final") { 
        if (window.state.activeCourseId === "basic" && window.renderFinal_basic) window.renderFinal_basic(parts[1]); 
        else if (window.state.activeCourseId === "technical" && window.renderFinal_technical) window.renderFinal_technical(parts[1]); 
    }
    else if (page === "arcade" && window.renderArcadePage) window.renderArcadePage();
    else if (page === "shop" && window.renderShopPage) window.renderShopPage();
    else if (page === "rating" && window.renderRatingPage) window.renderRatingPage();
    else if (page === "reports" && window.renderCourseReportsPage) window.renderCourseReportsPage();
    else if (page === "schedule" && window.renderSchedulePage) window.renderSchedulePage();
    else if (page === "achievements") window.renderAchievementsPage();
    else renderHome();
  } catch (err) { 
      app.innerHTML = '<div class="module" style="color:var(--err);">Error: ' + window.escapeHtml(err.message) + '</div>'; 
  }
  window.scrollTo(0, 0);
};

// ================= ДОСТИЖЕНИЯ И ПРОСТЫЕ СТРАНИЦЫ =================
window.renderAchievementsPage = function() {
    var app = window.$("app"); if (!app) return; app.innerHTML = "";
    document.getElementById("crumbs").textContent = "Achievements";
    app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← Home</a>'));
    app.appendChild(el('<section class="hero"><h1>🏆 Achievements</h1><p>Your rewards for hard work</p></section>'));

    var achievements = [
        { id: "welcome", title: "First Step", desc: "Log into the system", icon: "🚪" },
        { id: "reader", title: "Bookworm", desc: "Study the first lecture", icon: "📖" },
        { id: "hacker", title: "Hacker", desc: "Pass the first test", icon: "💻" },
        { id: "gamer", title: "Gamer", desc: "Play a mini-game", icon: "🎮" },
        { id: "level_5", title: "Experienced", desc: "Reach level 5", icon: "⭐" },
        { id: "rich", title: "Rich", desc: "Accumulate 1000 XP", icon: "💰" }
    ];

    var box = el('<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:16px;"></div>');
    var unlocked = window.state.unlockedAchievements || [];
    
    achievements.forEach(a => {
        var isUnlocked = unlocked.includes(a.id) || (a.id === "welcome" && window.state.student);
        var opacity = isUnlocked ? "1" : "0.4";
        var filter = isUnlocked ? "none" : "grayscale(100%)";
        
        box.appendChild(el(`<div class="module" style="text-align:center; padding:20px; opacity:${opacity};">
            <div style="font-size:40px; margin-bottom:10px; filter:${filter};">${a.icon}</div>
            <h3 style="margin:0 0 5px 0; font-size:16px;">${a.title}</h3>
            <p style="font-size:12px; color:var(--muted); margin:0;">${a.desc}</p>
        </div>`));
    });
    app.appendChild(box);
};

window.renderSimplePage = function(title, items, icon) {
    var app = document.getElementById("app"); app.innerHTML = "";
    document.getElementById("crumbs").textContent = title;
    app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← Home</a>'));
    app.appendChild(el(`<section class="hero"><h1>${icon} ${title}</h1></section>`));
    var list = el(`<div class="module"></div>`);
    
    if (!items || !items.length) {
        list.innerHTML = "<p>Materials will be added soon.</p>";
    } else {
        items.forEach(item => {
            list.innerHTML += `<div style="margin-bottom:10px; padding:15px; border:1px solid var(--border); border-radius:8px; background:var(--card-soft);">
                <b style="color:var(--accent); font-size:16px;">${item.title || 'Untitled'}</b><br>
                <span style="font-size:14px; color:var(--muted);">${item.description || item.content || ''}</span>
                ${item.file ? `<br><a href="${item.file}" target="_blank" class="btn" style="margin-top:8px; padding:6px 12px; font-size:12px;">📥 Open</a>` : ''}
            </div>`;
        });
    }
    app.appendChild(list);
};

window.renderCertificatePage = function() {
    var app = window.$("app"); if (!app) return; app.innerHTML = "";
    app.appendChild(el('<a class="backlink no-print" href="#/" style="color:var(--accent);">← Home</a>'));
    if (!window.state.student) return;

    app.innerHTML += `<section class="module"><h2>📜 Certificate</h2>
    <p>Your certificate will be generated here once you complete the course and pass the final exam.</p>
    <div style="padding:40px; text-align:center; border:2px dashed var(--border); border-radius:16px; margin-top:20px;">
        <h1 style="font-size:48px; color:var(--gold); margin-bottom:10px;">CERTIFICATE</h1>
        <p style="font-size:20px;">This is to certify that</p>
        <h2 style="font-size:32px; margin:20px 0;">${window.escapeHtml(window.state.student.name)}</h2>
        <p style="font-size:18px;">has successfully completed the course</p>
        <h3 style="font-size:24px; color:var(--accent); margin:20px 0;">${window.escapeHtml(window.COURSE ? window.COURSE.title : "English Course")}</h3>
        <p>Group: ${window.escapeHtml(window.state.student.group)}</p>
        <p style="margin-top:40px; font-size:14px; color:var(--muted);">Date: ${new Date().toLocaleDateString('en-GB')}</p>
        ${!window.state.results['__final__' + window.state.activeCourseId] ? `<div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%) rotate(-30deg); font-size:80px; font-weight:bold; color:rgba(255,0,0,0.1); pointer-events:none; z-index:10; white-space:nowrap;">SAMPLE</div>` : ''}
    </div>
    <div style="text-align:center; margin-top:20px;" class="no-print">
        <button class="btn" onclick="window.print()" style="padding:12px 24px; font-size:16px; background:var(--gold); color:#000;">🖨️ Print Certificate</button>
    </div>
    </section>`;
};

// ================= ГЛАВНАЯ =================
function renderHome() {
  var app = window.$("app"); app.innerHTML = "";
  var c = window.COURSE;
  if (!c) { app.innerHTML = "<div class='module'>Error loading course data.</div>"; return; }
  
  var html = '<section class="hero"><h1>' + window.escapeHtml(c.title) + '</h1><p>' + window.escapeHtml(c.module || "") + '</p></section>';
  html += '<div class="steps-title">Curriculum</div>';
  
  (c.sections || []).forEach(sec => {
    html += '<div style="font-weight:bold; margin:20px 0 10px; color:var(--accent); text-transform:uppercase; font-size:12px;">' + window.escapeHtml(sec.title) + '</div>';
    (sec.topics || []).forEach(t => {
      var badges = []; 
      if (t.lectures) badges.push("📖"); 
      if (t.practicals) badges.push("🛠"); 
      if (t.test || t.tests) badges.push("📝");
      
      html += `<div class="topic" onclick="location.hash='#/topic/${t.id}/lecture'">
        <div style="flex:1;">
            <div style="font-size:12px; color:var(--muted);">${t.code}</div>
            <div style="font-weight:bold;">${t.title}</div>
            <div style="font-size:13px; margin-top:4px; color:var(--muted);">${badges.join(" ")}</div>
        </div>
      </div>`;
    });
  });
  app.innerHTML = html;
}

// ================= ИНИЦИАЛИЗАЦИЯ =================
window.addEventListener("DOMContentLoaded", function() {
  var savedTheme = "dark";
  try { savedTheme = localStorage.getItem("mdk.theme") || "dark"; } catch(e){}
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (window.$("btnLoginStudent")) window.$("btnLoginStudent").onclick = window.doStudentLogin;
  if (window.$("btnLoginTeacher")) window.$("btnLoginTeacher").onclick = window.doTeacherLogin;
  
  if (window.$("themeToggle")) {
      window.$("themeToggle").onclick = () => { 
          if(window.renderShopPage) {
              location.hash = "#/shop";
              setTimeout(() => {
                  window.showToast("Choose a theme in the 'Themes' section and press 'Apply'", "info");
              }, 300);
          }
      };
  }
  
  if (window.$("burgerBtn")) window.$("burgerBtn").onclick = () => { window.$("drawer").classList.toggle("open"); window.$("drawerOverlay").classList.toggle("open"); };
  if (window.$("drawerClose")) window.$("drawerClose").onclick = window.closeDrawer;
  if (window.$("drawerOverlay")) window.$("drawerOverlay").onclick = window.closeDrawer;
  
  if (window.$("mdkSelector")) { 
      window.$("mdkSelector").value = window.state.activeCourseId; 
      window.$("mdkSelector").onchange = (e) => window.switchCourse(e.target.value); 
  }
  
  document.querySelectorAll("[data-go]").forEach(item => { 
      item.onclick = (e) => { 
          e.preventDefault(); 
          var target = item.getAttribute("data-go");
          if(location.hash === target) {
              window.route(); 
          } else {
              location.hash = target; 
          }
          window.closeDrawer(); 
      }; 
  });

  window.renderUserChip(); 
  if (window.state.student) window.loadStudentData();
  window.route();
});

window.addEventListener("hashchange", window.route);
