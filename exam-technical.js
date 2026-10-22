"use strict";

window.renderTraining_technical = function (mdkId) {
  var app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = "";
  app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← Home</a>'));

  if (!mdkId) {
    app.innerHTML += '<section class="hero"><h1>🎯 Quiz: Technical English</h1><p>Choose the quiz</p></section>';
    var card = document.createElement("a");
    card.href = "#/training/technical";
    card.style.cssText = "display:block; padding:20px; background:var(--card); border:1px solid var(--border); border-radius:12px; color:var(--text); text-decoration:none; margin-bottom:12px;";
    card.innerHTML = '<h3>Technical English</h3><span style="color:var(--muted);">Engineering vocabulary, CNC, safety</span>';
    app.appendChild(card);
    return;
  }

  var questions = [];
  if (window.MDK_DATA && window.MDK_DATA['technical']) {
    window.MDK_DATA['technical'].sections.forEach(s => s.topics.forEach(t => {
      if (t.test) questions = questions.concat(t.test);
    }));
  }
  questions = questions.sort(() => Math.random() - 0.5);

  var idx = 0, correct = 0, answered = 0;
  app.innerHTML += '<section class="hero"><h1>🎯 Technical English</h1><p>Training questions: ' + questions.length + '</p></section>';
  var box = document.createElement("div");
  box.className = "module";
  app.appendChild(box);

  function renderQuestion() {
    if (idx >= questions.length) {
      box.innerHTML = '<div style="text-align:center; padding:20px;"><h2>Quiz complete!</h2><p>Correct: <b>' + correct + '</b> of <b>' + answered + '</b></p><div style="display:flex; gap:10px; justify-content:center; margin-top:20px;"><a class="btn" href="#/final/technical">Go to Final Exam</a><a class="btn ghost" href="#/training/technical">Restart</a></div></div>';
      return;
    }
    var q = questions[idx];
    var html = '<div style="font-weight:bold; margin-bottom:15px; font-size:18px;">' + (idx + 1) + '. ' + q.q + '</div>';
    q.options.forEach(function (opt, i) {
      html += '<button class="tr-opt" data-i="' + i + '" style="display:block; width:100%; text-align:left; padding:12px; margin-bottom:8px; background:var(--card-soft); border:1px solid var(--border); border-radius:8px; color:var(--text); cursor:pointer; font-size:15px;">' + opt + '</button>';
    });
    html += '<div id="trFb" style="margin-top:15px; font-weight:bold; min-height:24px;"></div><div style="margin-top:20px;"><button class="btn ghost" id="trSkip">Skip →</button></div>';
    box.innerHTML = html;
    box.querySelectorAll(".tr-opt").forEach(function (btn) {
      btn.onclick = function () {
        var selectedI = Number(btn.getAttribute("data-i"));
        var isCorrect = (selectedI === q.correct);
        if (isCorrect) correct++;
        answered++;
        box.querySelectorAll(".tr-opt").forEach(function (b) { b.disabled = true; b.style.opacity = 0.6; });
        btn.style.opacity = 1;
        btn.style.borderColor = isCorrect ? "var(--ok)" : "var(--err)";
        if (!isCorrect) box.querySelectorAll(".tr-opt").forEach(function (b) { if (Number(b.getAttribute("data-i")) === q.correct) b.style.borderColor = "var(--ok)"; });
        var fb = box.querySelector("#trFb");
        fb.textContent = isCorrect ? "✅ Correct!" : '❌ Correct answer: ' + q.options[q.correct];
        fb.style.color = isCorrect ? "var(--ok)" : "var(--err)";
        setTimeout(function () { idx++; renderQuestion(); }, 1200);
      };
    });
    box.querySelector("#trSkip").onclick = function () { idx++; renderQuestion(); };
  }
  renderQuestion();
};

window.renderFinal_technical = function (mdkId) {
  var app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = "";
  app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← Home</a>'));

  if (!mdkId) {
    app.innerHTML += '<section class="hero"><h1>📋 Final Exam: Technical English</h1><p>10 questions · 10 minutes</p></section>';
    var card = document.createElement("a");
    card.href = "#/final/technical";
    card.style.cssText = "display:block; padding:20px; background:var(--card); border:1px solid var(--border); border-radius:12px; color:var(--text); text-decoration:none;";
    card.innerHTML = '<h3>Technical English</h3><span style="color:var(--muted);">Final exam</span>';
    app.appendChild(card);
    return;
  }

  var allQ = [];
  if (window.MDK_DATA && window.MDK_DATA['technical']) {
    window.MDK_DATA['technical'].sections.forEach(s => s.topics.forEach(t => {
      if (t.test) allQ = allQ.concat(t.test);
    }));
  }

  app.innerHTML += '<section class="hero"><h1>📋 Technical English</h1><p>Final exam: 10 questions · 10 minutes</p></section>';
  var box = document.createElement("div");
  box.className = "module";
  app.appendChild(box);
  var startBtn = document.createElement("button");
  startBtn.className = "btn";
  startBtn.textContent = "Start Exam";
  startBtn.style.width = "100%";
  box.appendChild(startBtn);

  startBtn.onclick = function () {
    var picked = allQ.sort(() => Math.random() - 0.5).slice(0, Math.min(10, allQ.length));
    var timeLeft = 600;
    box.innerHTML = '<div id="exTimer" style="font-size:24px; font-weight:bold; text-align:center; color:var(--accent); margin-bottom:20px;">10:00</div>';
    var form = document.createElement("form");
    picked.forEach(function (q, qi) {
      var qHtml = '<div style="margin-bottom:20px; padding:15px; background:var(--card-soft); border-radius:8px;"><div style="font-weight:bold; margin-bottom:10px; font-size:16px;">' + (qi + 1) + '. ' + q.q + '</div>';
      q.options.forEach(function (opt, oi) {
        qHtml += '<label style="display:flex; align-items:center; gap:10px; padding:8px; cursor:pointer; border-radius:6px; margin-bottom:4px;"><input type="radio" name="eq' + qi + '" value="' + oi + '" style="transform:scale(1.2); accent-color:var(--accent);"><span>' + opt + '</span></label>';
      });
      qHtml += '</div>';
      form.innerHTML += qHtml;
    });
    var done = document.createElement("button");
    done.type = "button";
    done.className = "btn";
    done.textContent = "Finish Exam";
    done.style.cssText = "width:100%; margin-top:20px; padding:15px; font-size:16px;";
    form.appendChild(done);
    box.appendChild(form);
    var tEl = box.querySelector("#exTimer");
    var tid = setInterval(function () {
      timeLeft--;
      var m = Math.floor(timeLeft / 60), s = timeLeft % 60;
      tEl.textContent = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
      if (timeLeft <= 60) tEl.style.color = "var(--err)";
      if (timeLeft <= 0) { clearInterval(tid); done.click(); }
    }, 1000);
    done.onclick = function () {
      clearInterval(tid);
      var correct = 0;
      picked.forEach(function (q, qi) {
        var ch = form.querySelector('input[name="eq' + qi + '"]:checked');
        if (ch && Number(ch.value) === q.correct) correct++;
      });
      var pct = Math.round((correct / picked.length) * 100);
      var grade = pct >= 90 ? 5 : pct >= 75 ? 4 : pct >= 60 ? 3 : 2;
      window.state.results["__final__technical"] = { grade: grade, total: correct, max: picked.length };
      if (window.addXP) window.addXP(grade * 20);
      if (window.saveStudentData) window.saveStudentData();
      box.innerHTML = '<div style="text-align:center; padding:30px;"><h1 style="font-size:72px; margin:0; color:' + (grade >= 3 ? 'var(--ok)' : 'var(--err)') + ';">' + grade + '</h1><p style="font-size:18px;">Correct: <b>' + correct + '</b> of <b>' + picked.length + '</b> (' + pct + '%)</p><div style="display:flex; gap:10px; justify-content:center; margin-top:30px;"><a class="btn" href="#/final">Back to exams</a><a class="btn ghost" href="#/training/technical">Training</a></div></div>';
    };
  };
};