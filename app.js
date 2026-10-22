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

// … (getLevel, updateXpDisplay, addXP, saveStudentData, loadStudentData — без изменений)

// ================= РОУТЕР =================
window.route = function() {
  window.closeDrawer();
  var overlay = $("loginOverlay");
  var fab = document.getElementById("asFab");
  var isLoggedIn = !!(window.state.student || window.state.staff);

  if (!isLoggedIn) {
    if (overlay) overlay.style.display = "block";
    if (fab) fab.style.display = "none";
    if ($("app")) $("app").innerHTML = "";
    return;
  }

  if (overlay) overlay.style.display = "none";
  if (fab) fab.style.display = "flex";

  var hash = location.hash.replace(/^#/, "") || "/";
  var parts = hash.split("/").filter(Boolean);
  var app = $("app"); if (!app) return;

  try {
    var page = parts[0] || "/";

    if (page === "topic") window.renderTopic(parts[1], parts[2]);
    else if (page === "certificate") window.renderCertificatePage();
    else if (page === "profile" && window.renderProfilePage) window.renderProfilePage();
    else if (page === "videos") window.renderSimplePage("Video Lessons", window.GLOBAL_DATA?.videos, "🎬");
    else if (page === "passports") window.renderSimplePage("Materials", window.GLOBAL_DATA?.passports, "📄");
    else if (page === "safety") window.renderSimplePage("Safety Rules", window.GLOBAL_DATA?.safety, "🦺");
    else if (page === "formatting") window.renderSimplePage("Formatting Requirements", [{title: "Report formatting", content: "Times New Roman 14, line spacing 1.5, margins: top/bottom 2 cm, left 3 cm, right 1.5 cm."}], "📝");
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

// ================= ИНИЦИАЛИЗАЦИЯ =================
window.addEventListener("DOMContentLoaded", function() {
  var savedTheme = "dark";
  try { savedTheme = localStorage.getItem("mdk.theme") || "dark"; } catch(e){}
  document.documentElement.setAttribute("data-theme", savedTheme);

  if ($("btnLoginStudent")) $("btnLoginStudent").onclick = window.doStudentLogin;
  if ($("btnLoginTeacher")) $("btnLoginTeacher").onclick = window.doTeacherLogin;

  if ($("themeToggle")) {
    $("themeToggle").onclick = () => {
      if (window.renderShopPage) {
        location.hash = "#/shop";
        setTimeout(() => window.showToast("Choose a theme in the 'Themes' section and press 'Apply'", "info"), 300);
      }
    };
  }

  if ($("burgerBtn")) $("burgerBtn").onclick = () => { $("drawer").classList.toggle("open"); $("drawerOverlay").classList.toggle("open"); };
  if ($("drawerClose")) $("drawerClose").onclick = window.closeDrawer;
  if ($("drawerOverlay")) $("drawerOverlay").onclick = window.closeDrawer;

  if ($("mdkSelector")) {
    $("mdkSelector").value = window.state.activeCourseId;
    $("mdkSelector").onchange = (e) => window.switchCourse(e.target.value);
  }

  document.querySelectorAll("[data-go]").forEach(item => {
    item.onclick = (e) => {
      e.preventDefault();
      var target = item.getAttribute("data-go");
      if (location.hash === target) window.route();
      else location.hash = target;
      window.closeDrawer();
    };
  });

  window.renderUserChip();
  if (window.state.student) window.loadStudentData();
  window.route();
});

window.addEventListener("hashchange", window.route);