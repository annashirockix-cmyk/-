"use strict";

// ========== ГЛАВНАЯ СТРАНИЦА КАРТОЧЕК ==========
window.renderArcadePage = function () {
  var app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = "";
  document.getElementById("crumbs").textContent = "Flashcards & Crossword";
  app.appendChild(el('<a class="backlink" href="#/" style="color:var(--accent);">← Home</a>'));
  app.appendChild(el('<section class="hero"><h1>🃏 Flashcards &amp; Crossword</h1><p>Learn vocabulary, then test yourself with a crossword.</p></section>'));

  var courseId = window.state.activeCourseId;
  var data = window.MDK_DATA && window.MDK_DATA[courseId];
  
  // Считаем общее количество карточек (базовые + кастомные)
  var baseCards = data && data.flashcards ? (courseId === "technical" ? data.flashcards.technical : data.flashcards.basic) || [] : [];
  var customData = window.getCustomData ? window.getCustomData() : { flashcards: [] };
  var totalCards = baseCards.length + customData.flashcards.length;

  var grid = el('<div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:16px;"></div>');

  // Карточки
  grid.appendChild(el(`<div class="module" style="cursor:pointer; transition:0.2s;" onclick="window.startFlashcards()" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
    <h3 style="margin-top:0; color:var(--accent);">🃏 Flashcards</h3>
    <p style="color:var(--muted); font-size:14px;">Flip cards to memorize words and translations. ${totalCards} words in this set.</p>
    <button class="btn ghost" style="width:100%; margin-top:15px;">Start</button>
  </div>`));

  // Кроссворд
  grid.appendChild(el(`<div class="module" style="cursor:pointer; transition:0.2s;" onclick="window.startCrossword()" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--border)'">
    <h3 style="margin-top:0; color:var(--accent);">🔤 Crossword</h3>
    <p style="color:var(--muted); font-size:14px;">Solve a crossword using the vocabulary from this course.</p>
    <button class="btn ghost" style="width:100%; margin-top:15px;">Start</button>
  </div>`));

  app.appendChild(grid);
};

// ========== ФЛЕШ-КАРТОЧКИ ==========
window.startFlashcards = function () {
  var app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(el('<a class="backlink" href="javascript:void(0)" onclick="window.renderArcadePage()" style="color:var(--accent); cursor:pointer;">← Back</a>'));

  var courseId = window.state.activeCourseId;
  var course = window.MDK_DATA[courseId];
  
  // Базовые карточки
  var baseCards = course && course.flashcards ? (courseId === "technical" ? course.flashcards.technical : course.flashcards.basic) : [];
  
  // Кастомные карточки (добавленные учителем)
  var customData = window.getCustomData ? window.getCustomData() : { flashcards: [] };
  var cards = (baseCards || []).concat(customData.flashcards);
  
  if (cards.length === 0) { app.appendChild(el('<div class="module">No flashcards yet.</div>')); return; }

  var idx = 0;
  var flipped = false;

  app.appendChild(el('<section class="hero"><h1>🃏 Flashcards</h1><p>Click the card to flip</p></section>'));
  var box = el('<div class="module" style="text-align:center;"></div>');
  app.appendChild(box);

  function render() {
    var c = cards[idx];
    box.innerHTML = `
      <div style="font-size:13px; color:var(--muted); margin-bottom:15px;">${idx + 1} / ${cards.length}</div>
      <div id="flashcard" style="cursor:pointer; min-height:200px; display:flex; flex-direction:column; justify-content:center; align-items:center; background:var(--card-soft); border:2px solid var(--accent); border-radius:16px; padding:30px; user-select:none;">
        <div style="font-size:36px; font-weight:bold; color:var(--accent); margin-bottom:10px;">${flipped ? c.back : c.front}</div>
        <div style="font-size:16px; color:var(--muted);">${flipped ? c.transcription || '' : '🔤 Tap to flip'}</div>
      </div>
      <div style="display:flex; gap:10px; margin-top:20px; justify-content:center;">
        <button class="btn ghost" id="fcPrev" ${idx === 0 ? 'disabled' : ''}>← Prev</button>
        <button class="btn" id="fcFlip">Flip</button>
        <button class="btn ghost" id="fcNext" ${idx === cards.length - 1 ? 'disabled' : ''}>Next →</button>
      </div>
      <div style="margin-top:15px; font-size:13px; color:var(--muted);">Card ${idx + 1} of ${cards.length}</div>
    `;
    box.querySelector("#flashcard").onclick = () => { flipped = !flipped; render(); };
    box.querySelector("#fcFlip").onclick = () => { flipped = !flipped; render(); };
    box.querySelector("#fcPrev").onclick = () => { if (idx > 0) { idx--; flipped = false; render(); } };
    box.querySelector("#fcNext").onclick = () => { if (idx < cards.length - 1) { idx++; flipped = false; render(); } };
  }
  render();
};

// ========== КРОССВОРД ==========
window.startCrossword = function () {
  var app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(el('<a class="backlink" href="javascript:void(0)" onclick="window.renderArcadePage()" style="color:var(--accent); cursor:pointer;">← Back</a>'));

  var courseId = window.state.activeCourseId;
  var course = window.MDK_DATA[courseId];
  if (!course || !course.flashcards || !course.flashcards.crossword) {
    app.appendChild(el('<div class="module">No crossword for this course.</div>'));
    return;
  }

  var words = course.flashcards.crossword;
  var SIZE = 15;
  var grid = Array(SIZE).fill().map(() => Array(SIZE).fill(""));
  var placed = [];

  function tryPlace(word, dir) {
    for (var attempt = 0; attempt < 200; attempt++) {
      var r = Math.floor(Math.random() * SIZE);
      var c = Math.floor(Math.random() * SIZE);
      if (dir === "H" && c + word.length > SIZE) continue;
      if (dir === "V" && r + word.length > SIZE) continue;
      var ok = true;
      for (var i = 0; i < word.length; i++) {
        var rr = dir === "H" ? r : r + i;
        var cc = dir === "H" ? c + i : c;
        if (grid[rr][cc] && grid[rr][cc] !== word[i]) { ok = false; break; }
      }
      if (ok) {
        for (var j = 0; j < word.length; j++) {
          var r2 = dir === "H" ? r : r + j;
          var c2 = dir === "H" ? c + j : c;
          grid[r2][c2] = word[j];
        }
        placed.push({ word: word, r: r, c: c, dir: dir });
        return true;
      }
    }
    return false;
  }

  var sorted = words.slice().sort((a, b) => b.word.length - a.word.length);
  sorted.forEach((w, i) => {
    var dir = i % 2 === 0 ? "H" : "V";
    if (!tryPlace(w.word, dir)) {
      tryPlace(w.word, dir === "H" ? "V" : "H");
    }
  });

  app.appendChild(el('<section class="hero"><h1>🔤 Crossword</h1><p>Fill in the words. Use the clues below.</p></section>'));

  var wrap = el('<div class="module" style="overflow-x:auto; padding:10px;"></div>');
  var table = document.createElement("table");
  table.style = "border-collapse:collapse; margin:0 auto; background:var(--card-soft);";
  var inputs = [];

  for (var r = 0; r < SIZE; r++) {
    var tr = document.createElement("tr");
    for (var c = 0; c < SIZE; c++) {
      var td = document.createElement("td");
      td.style = "width:32px; height:32px; text-align:center; padding:0; border:1px solid var(--border);";
      if (grid[r][c]) {
        var input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.dataset.r = r;
        input.dataset.c = c;
        input.style = "width:32px; height:32px; text-align:center; font-weight:bold; font-size:16px; border:none; background:#fff; color:#000; text-transform:uppercase;";
        inputs.push({ r, c, input, letter: grid[r][c], filled: false });
        td.appendChild(input);
      } else {
        td.style.background = "#000";
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  wrap.appendChild(table);
  app.appendChild(wrap);

  var list = el('<div class="module"><h3>Clues</h3><div id="clueList"></div></div>');
  var clueList = list.querySelector("#clueList");
  placed.forEach((p, i) => {
    clueList.appendChild(el(`<div style="padding:8px 0; border-bottom:1px solid var(--border); font-size:14px;"><b>${i + 1}.</b> ${p.dir === "H" ? "Across" : "Down"} — ${words.find(w => w.word === p.word) ? words.find(w => w.word === p.word).clue : ""} <span style="color:var(--muted);">(${p.word.length} letters)</span></div>`));
  });
  app.appendChild(list);

  var checkBtn = el('<button class="btn" style="width:100%; padding:15px; margin-top:15px;">✅ Check Answers</button>');
  app.appendChild(checkBtn);
  var result = el('<div id="crosswordResult" style="text-align:center; font-size:18px; font-weight:bold; margin-top:15px;"></div>');
  app.appendChild(result);

  checkBtn.onclick = function () {
    var total = 0, correct = 0;
    inputs.forEach(inp => {
      total++;
      var val = (inp.input.value || "").toUpperCase();
      if (val === inp.letter) {
        correct++;
        inp.input.style.background = "rgba(88,201,138,0.2)";
      } else {
        inp.input.style.background = "rgba(255,110,94,0.2)";
      }
    });
    var pct = Math.round(correct / total * 100);
    result.innerHTML = `Score: <span style="color:${pct >= 70 ? 'var(--ok)' : 'var(--err)'};">${correct} / ${total} (${pct}%)</span>`;
    if (pct >= 70 && window.addXP) {
      window.addXP(50);
      window.showToast("🎉 Well done! +50 XP", "ok");
    }
  };
};