"use strict";

window.MDK_DATA = window.MDK_DATA || {};

(function () {
  function lec(code, title, content) { return { code, title, content }; }
  function prac(code, title, goal, task, variants) { return { code, title, goal, task, variants: variants || [] }; }
  function selfwork(code, title, task) { return { code, title, task }; }
  function tq(q, options, correct) { return { q, options, correct }; }
  function topic(id, code, title, lectures, practicals, selfWork, test) {
    return { id, code, title, lectures, practicals, selfWork, test };
  }

  window.MDK_DATA["basic"] = {
    id: "basic",
    shortName: "Basic English",
    title: "Basic English (Grades 10–11)",
    module: "General English · B1–B2",
    sections: [
      {
        code: "Section 1",
        title: "Grammar Foundations",
        topics: [
          topic("b-tenses", "Topic 1.1", "English Tenses",
            [
              lec("1.1.1", "Present and Past Tenses", `
                <h2>Present Simple</h2>
                <p><b>Form:</b> Subject + V1 (he/she/it + V-s).</p>
                <p><b>Use:</b> habits, routines, facts, schedules.</p>
                <p><b>Example:</b> She <i>works</i> at a factory every day.</p>
                <h2>Present Continuous</h2>
                <p><b>Form:</b> am/is/are + V-ing.</p>
                <p><b>Use:</b> actions happening now, temporary situations, fixed future arrangements.</p>
                <p><b>Example:</b> They <i>are studying</i> for the exam right now.</p>
                <h2>Present Perfect</h2>
                <p><b>Form:</b> have/has + V3.</p>
                <p><b>Use:</b> past actions with a result in the present; life experience; unfinished time.</p>
                <p><b>Example:</b> I <i>have finished</i> my homework already.</p>
                <h2>Past Simple</h2>
                <p><b>Form:</b> V2 (regular: -ed).</p>
                <p><b>Use:</b> finished actions in the past with a known time.</p>
                <p><b>Example:</b> He <i>worked</i> at the plant in 2020.</p>
                <h2>Past Continuous</h2>
                <p><b>Form:</b> was/were + V-ing.</p>
                <p><b>Use:</b> actions in progress at a specific past moment.</p>
                <p><b>Example:</b> They <i>were measuring</i> the part when the bell rang.</p>
                <h2>Past Perfect</h2>
                <p><b>Form:</b> had + V3.</p>
                <p><b>Use:</b> an action that happened before another past action.</p>
                <p><b>Example:</b> She <i>had finished</i> the report before the meeting started.</p>
              `),
              lec("1.1.2", "Future Forms", `
                <h2>Future Simple (will)</h2>
                <p><b>Form:</b> will + V1.</p>
                <p><b>Use:</b> predictions, spontaneous decisions, promises.</p>
                <p><b>Example:</b> I <i>will help</i> you with the equipment.</p>
                <h2>Be going to</h2>
                <p><b>Form:</b> am/is/are going to + V1.</p>
                <p><b>Use:</b> plans and intentions; predictions based on evidence.</p>
                <p><b>Example:</b> We <i>are going to</i> design a new tool.</p>
                <h2>Present Continuous for Future</h2>
                <p><b>Use:</b> fixed arrangements.</p>
                <p><b>Example:</b> I <i>am meeting</i> the chief engineer at 10.</p>
                <h2>Present Simple for Future</h2>
                <p><b>Use:</b> timetables and schedules.</p>
                <p><b>Example:</b> The workshop <i>starts</i> at 8:00.</p>
              `)
            ],
            [
              prac("P 1.1", "Choose the Correct Tense", "Practise tense selection.", "Fill in the gaps with the correct form of the verb in brackets: 1) My brother ___ (work) at the factory since 2018. 2) They ___ (test) the machine when the power went off. 3) I ___ (finish) the drawing before the deadline.", ["Variant 1. Routine vs. now.", "Variant 2. Past vs. past perfect."])
            ],
            [
              selfwork("S 1.1", "My Study Routine", "Write 5–7 sentences about your daily routine using Present Simple and Present Continuous.")
            ],
            [
              tq("She ___ at a factory every day.", ["works", "is working", "worked", "has worked"], 0),
              tq("They ___ the part when the bell rang.", ["were measuring", "measured", "have measured", "measure"], 0),
              tq("I ___ my homework already.", ["have finished", "finished", "finish", "had finished"], 0),
              tq("We ___ a new tool next week.", ["are going to design", "design", "designed", "have designed"], 0),
              tq("The workshop ___ at 8:00.", ["starts", "is starting", "started", "has started"], 0),
              tq("She ___ the report before the meeting started.", ["had finished", "finished", "has finished", "finishes"], 0)
            ]
          ),
          topic("b-conditionals", "Topic 1.2", "Conditionals & Passive Voice",
            [
              lec("1.2.1", "Conditionals (Zero, First, Second, Third)", `
                <h2>Zero Conditional</h2>
                <p><b>Form:</b> If + Present Simple, Present Simple.</p>
                <p><b>Use:</b> general truths, scientific facts, rules.</p>
                <p><b>Example:</b> If you heat metal, it <i>expands</i>.</p>
                <h2>First Conditional</h2>
                <p><b>Form:</b> If + Present Simple, will + V1.</p>
                <p><b>Use:</b> real, possible future situations.</p>
                <p><b>Example:</b> If you press the button, the machine <i>will start</i>.</p>
                <h2>Second Conditional</h2>
                <p><b>Form:</b> If + Past Simple, would + V1.</p>
                <p><b>Use:</b> unreal or hypothetical present/future.</p>
                <p><b>Example:</b> If I had more time, I <i>would read</i> the manual.</p>
                <h2>Third Conditional</h2>
                <p><b>Form:</b> If + Past Perfect, would have + V3.</p>
                <p><b>Use:</b> regrets about the past, impossible situations.</p>
                <p><b>Example:</b> If they had checked the drawing, they <i>would have avoided</i> the mistake.</p>
                <h2>Mixed Conditional</h2>
                <p><b>Use:</b> mix past cause and present result (or vice versa).</p>
                <p><b>Example:</b> If I had studied harder, I <i>would be</i> an engineer now.</p>
              `),
              lec("1.2.2", "Passive Voice", `
                <h2>Form</h2>
                <p><b>Passive:</b> be + V3 (Past Participle). The object becomes the subject.</p>
                <p><b>Example:</b> The part <i>is measured</i> by the operator.</p>
                <h2>All Tenses in Passive</h2>
                <ul>
                  <li>Present Simple: is/are + V3</li>
                  <li>Past Simple: was/were + V3</li>
                  <li>Present Perfect: has/have been + V3</li>
                  <li>Past Perfect: had been + V3</li>
                  <li>Future: will be + V3</li>
                  <li>Modal: can/must/should be + V3</li>
                </ul>
                <h2>When to Use Passive</h2>
                <p>Use passive when the action is more important than the doer, when the doer is unknown, or in formal/technical writing.</p>
                <p><b>Example:</b> The machine <i>was repaired</i> yesterday. (by someone unknown)</p>
              `)
            ],
            [
              prac("P 1.2", "Conditionals & Passive", "Practise conditionals and passive voice.", "Transform the sentences: 1) If you press this button, the machine ___ (start). 2) The part ___ (measure) by the operator every shift. 3) If I had studied harder, I ___ (pass) the exam.", ["Variant 1. First conditional.", "Variant 2. Passive present simple."])
            ],
            [
              selfwork("S 1.2", "Safety Rules in Conditionals", "Write 5 safety rules using conditionals: 'If you do X, Y will happen.'")
            ],
            [
              tq("If you heat metal, it ___.", ["expands", "will expand", "expanded", "would expand"], 0),
              tq("The part ___ by the operator.", ["is measured", "measures", "has measured", "measured"], 0),
              tq("If I had more time, I ___ the manual.", ["would read", "read", "will read", "have read"], 0),
              tq("If they had checked the drawing, they ___ the mistake.", ["would have avoided", "avoided", "will avoid", "have avoided"], 0),
              tq("The machine ___ yesterday.", ["was repaired", "repaired", "has repaired", "repairs"], 0),
              tq("If you press the button, the machine ___.", ["will start", "starts", "started", "would start"], 0)
            ]
          ),
          topic("b-modals", "Topic 1.3", "Modal Verbs & Articles",
            [
              lec("1.3.1", "Modal Verbs", `
                <h2>Common Modals</h2>
                <ul>
                  <li><b>can / could</b> — ability, permission, possibility</li>
                  <li><b>must / have to</b> — obligation</li>
                  <li><b>should / ought to</b> — advice</li>
                  <li><b>may / might</b> — possibility, formal permission</li>
                  <li><b>will / would</b> — future, polite requests</li>
                  <li><b>need</b> — necessity</li>
                </ul>
                <h2>Rules</h2>
                <p>Modal verbs do not take -s, -ed, -ing. Followed by bare infinitive (V1).</p>
                <p><b>Example:</b> He <i>can operate</i> the lathe. (not "cans" or "can operates")</p>
                <h2>Modal + Passive</h2>
                <p><b>Form:</b> modal + be + V3.</p>
                <p><b>Example:</b> The tool <i>must be checked</i> before use.</p>
              `),
              lec("1.3.2", "Articles (a / an / the)", `
                <h2>Indefinite Article (a / an)</h2>
                <p>Use with singular countable nouns when mentioned for the first time or when it's "one of many".</p>
                <p><b>Example:</b> I need <i>a</i> wrench. She bought <i>an</i> anvil.</p>
                <h2>Definite Article (the)</h2>
                <p>Use when the object is already known, unique, or specified by context.</p>
                <p><b>Example:</b> <i>The</i> machine is broken. Please pass <i>the</i> hammer.</p>
                <h2>Zero Article</h2>
                <p>Use with plural countable nouns and uncountable nouns in a general sense.</p>
                <p><b>Example:</b> <i>Steel</i> is a strong material. <i>Tools</i> are important.</p>
              `)
            ],
            [
              prac("P 1.3", "Modals & Articles", "Practise modal verbs and articles.", "Choose the correct modal or article: 1) You ___ wear safety glasses. (must/should) 2) I saw ___ machine in the workshop. (a/the) 3) The tool ___ be checked before use. (must/be must)", ["Variant 1. Obligation.", "Variant 2. Definite article."])
            ],
            [
              selfwork("S 1.3", "Workshop Instructions", "Write 5 instructions using modal verbs: 'You should...', 'You must...', 'The tool must be...'.")
            ],
            [
              tq("You ___ wear safety glasses in the workshop.", ["must", "can", "may", "might"], 0),
              tq("I saw ___ machine in the workshop.", ["a", "the", "an", "—"], 0),
              tq("The tool ___ be checked before use.", ["must", "must to", "can to", "should to"], 0),
              tq("___ steel is a strong material.", ["—", "The", "A", "An"], 0),
              tq("He ___ operate the lathe.", ["can", "cans", "can to", "is can"], 0),
              tq("You ___ read the manual before starting.", ["should", "should to", "may to", "must to"], 0)
            ]
          )
        ]
      },
      {
        code: "Section 2",
        title: "Vocabulary & Communication",
        topics: [
          topic("b-daily", "Topic 2.1", "Daily Life & Routine",
            [
              lec("2.1.1", "Daily Activities Vocabulary", `
                <h2>Morning Activities</h2>
                <p><b>wake up</b> — просыпаться; <b>get up</b> — вставать; <b>have breakfast</b> — завтракать; <b>brush teeth</b> — чистить зубы; <b>get dressed</b> — одеваться; <b>leave home</b> — выходить из дома.</p>
                <h2>Evening Activities</h2>
                <p><b>come home</b> — приходить домой; <b>have dinner</b> — ужинать; <b>do homework</b> — делать уроки; <b>watch TV</b> — смотреть ТВ; <b>go to bed</b> — ложиться спать.</p>
                <h2>Useful Phrases</h2>
                <p>Once a week — раз в неделю; twice a month — дважды в месяц; every day — каждый день; rarely — редко; often — часто; always — всегда; never — никогда.</p>
              `)
            ],
            [
              prac("P 2.1", "My Day", "Describe a routine.", "Write 6–8 sentences about your typical day using new vocabulary and adverbs of frequency.", ["Variant 1. School day.", "Variant 2. Weekend."])
            ],
            [
              selfwork("S 2.1", "Weekly Schedule", "Make a weekly schedule in English with 7 activities and their frequency.")
            ],
            [
              tq("I ___ at 7 every morning.", ["wake up", "wake", "woke", "waking"], 0),
              tq("She ___ her teeth twice a day.", ["brushes", "brush", "brushing", "brushed"], 0),
              tq("We ___ dinner at 7 p.m.", ["have", "has", "having", "had"], 0),
              tq("'Rarely' means", ["not often", "always", "often", "never"], 0),
              tq("He ___ to bed at 11.", ["goes", "go", "going", "went"], 0),
              tq("I do my homework ___ day.", ["every", "each", "all", "any"], 0)
            ]
          ),
          topic("b-travel", "Topic 2.2", "Travel & Transport",
            [
              lec("2.2.1", "Travel Vocabulary", `
                <h2>At the Airport</h2>
                <p><b>ticket</b> — билет; <b>passport</b> — паспорт; <b>luggage</b> — багаж; <b>departure</b> — вылет; <b>arrival</b> — прибытие; <b>check-in</b> — регистрация; <b>boarding pass</b> — посадочный талон; <b>gate</b> — выход; <b>customs</b> — таможня.</p>
                <h2>At the Station</h2>
                <p><b>platform</b> — платформа; <b>train</b> — поезд; <b>timetable</b> — расписание; <b>return ticket</b> — билет туда-обратно; <b>single ticket</b> — билет в одну сторону.</p>
                <h2>Useful Expressions</h2>
                <p>How much does it cost? — Сколько это стоит? Where is the gate? — Где выход? What time does the train leave? — Во сколько уходит поезд?</p>
              `)
            ],
            [
              prac("P 2.2", "Planning a Trip", "Describe a trip.", "Write a short plan for a trip: destination, transport, date, activities. Use 5 new words.", ["Variant 1. City trip.", "Variant 2. Countryside trip."])
            ],
            [
              selfwork("S 2.2", "My Last Trip", "Write 5–7 sentences about your last trip using Past Simple and travel vocabulary.")
            ],
            [
              tq("At the airport, you need a", ["boarding pass", "library card", "menu", "notebook"], 0),
              tq("'Luggage' means", ["bags", "tickets", "food", "books"], 0),
              tq("A single ticket is", ["one way", "two ways", "three ways", "free"], 0),
              tq("The train leaves from", ["platform", "gate", "counter", "office"], 0),
              tq("'Departure' means", ["leaving", "arriving", "waiting", "sleeping"], 0),
              tq("Customs is at the", ["airport", "school", "library", "home"], 0)
            ]
          ),
          topic("b-health", "Topic 2.3", "Health & Lifestyle",
            [
              lec("2.3.1", "Health Vocabulary", `
                <h2>Body & Health</h2>
                <p><b>headache</b> — головная боль; <b>toothache</b> — зубная боль; <b>stomachache</b> — боль в животе; <b>cough</b> — кашель; <b>cold</b> — простуда; <b>fever</b> — жар; <b>medicine</b> — лекарство; <b>doctor</b> — врач; <b>hospital</b> — больница.</p>
                <h2>Healthy Habits</h2>
                <p><b>do sports</b> — заниматься спортом; <b>eat healthy food</b> — есть здоровую пищу; <b>sleep well</b> — хорошо спать; <b>drink water</b> — пить воду; <b>avoid stress</b> — избегать стресса.</p>
                <h2>Useful Phrases</h2>
                <p>What's the matter? — Что случилось? I have a headache. — У меня болит голова. You should see a doctor. — Тебе стоит обратиться к врачу.</p>
              `)
            ],
            [
              prac("P 2.3", "Healthy Lifestyle", "Give advice about health.", "Write 5 recommendations using 'should / shouldn't' and health vocabulary.", ["Variant 1. Healthy habits.", "Variant 2. What to do when ill."])
            ],
            [
              selfwork("S 2.3", "Doctor's Advice", "Write a dialogue between a doctor and a patient (8–10 lines) using modal verbs.")
            ],
            [
              tq("If you have a fever, you ___ see a doctor.", ["should", "can", "may", "might"], 0),
              tq("'Cough' is a", ["symptom", "medicine", "doctor", "hospital"], 0),
              tq("To be healthy, you should", ["do sports", "eat fast food", "sleep badly", "avoid water"], 0),
              tq("A toothache is pain in the", ["tooth", "head", "stomach", "back"], 0),
              tq("You shouldn't", ["eat junk food", "do sports", "drink water", "sleep well"], 0),
              tq("'Medicine' is used when you are", ["ill", "hungry", "bored", "tired"], 0)
            ]
          )
        ]
      }
    ],
    videos: [], passports: [], safety: [], formatting: {},

    flashcards: {
      basic: [
        { front: "ability", back: "способность", transcription: "/əˈbɪləti/" },
        { front: "achieve", back: "достигать", transcription: "/əˈtʃiːv/" },
        { front: "advantage", back: "преимущество", transcription: "/ədˈvɑːntɪdʒ/" },
        { front: "advice", back: "совет", transcription: "/ədˈvaɪs/" },
        { front: "affect", back: "влиять", transcription: "/əˈfekt/" },
        { front: "allow", back: "разрешать", transcription: "/əˈlaʊ/" },
        { front: "ancient", back: "древний", transcription: "/ˈeɪnʃənt/" },
        { front: "apply", back: "применять", transcription: "/əˈplaɪ/" },
        { front: "available", back: "доступный", transcription: "/əˈveɪləbl/" },
        { front: "average", back: "средний", transcription: "/ˈævərɪdʒ/" },
        { front: "behavior", back: "поведение", transcription: "/bɪˈheɪvjə/" },
        { front: "benefit", back: "польза", transcription: "/ˈbenɪfɪt/" },
        { front: "career", back: "карьера", transcription: "/kəˈrɪə/" },
        { front: "challenge", back: "вызов", transcription: "/ˈtʃælɪndʒ/" },
        { front: "compare", back: "сравнивать", transcription: "/kəmˈpeə/" },
        { front: "conclusion", back: "вывод", transcription: "/kənˈkluːʒn/" },
        { front: "confident", back: "уверенный", transcription: "/ˈkɒnfɪdənt/" },
        { front: "consider", back: "рассматривать", transcription: "/kənˈsɪdə/" },
        { front: "convenient", back: "удобный", transcription: "/kənˈviːniənt/" },
        { front: "creative", back: "творческий", transcription: "/kriˈeɪtɪv/" },
        { front: "decision", back: "решение", transcription: "/dɪˈsɪʒn/" },
        { front: "develop", back: "развивать", transcription: "/dɪˈveləp/" },
        { front: "difference", back: "разница", transcription: "/ˈdɪfrəns/" },
        { front: "education", back: "образование", transcription: "/ˌedʒuˈkeɪʃn/" },
        { front: "effort", back: "усилие", transcription: "/ˈefət/" },
        { front: "environment", back: "окружающая среда", transcription: "/ɪnˈvaɪrənmənt/" },
        { front: "experience", back: "опыт", transcription: "/ɪkˈspɪəriəns/" },
        { front: "explain", back: "объяснять", transcription: "/ɪkˈspleɪn/" },
        { front: "foreign", back: "иностранный", transcription: "/ˈfɒrən/" },
        { front: "future", back: "будущее", transcription: "/ˈfjuːtʃə/" },
        { front: "goal", back: "цель", transcription: "/ɡəʊl/" },
        { front: "government", back: "правительство", transcription: "/ˈɡʌvənmənt/" },
        { front: "important", back: "важный", transcription: "/ɪmˈpɔːtnt/" },
        { front: "improve", back: "улучшать", transcription: "/ɪmˈpruːv/" },
        { front: "include", back: "включать", transcription: "/ɪnˈkluːd/" },
        { front: "influence", back: "влияние", transcription: "/ˈɪnfluəns/" },
        { front: "knowledge", back: "знание", transcription: "/ˈnɒlɪdʒ/" },
        { front: "language", back: "язык", transcription: "/ˈlæŋɡwɪdʒ/" },
        { front: "necessary", back: "необходимый", transcription: "/ˈnesəsəri/" },
        { front: "opportunity", back: "возможность", transcription: "/ˌɒpəˈtjuːnəti/" },
        { front: "positive", back: "положительный", transcription: "/ˈpɒzətɪv/" },
        { front: "possible", back: "возможный", transcription: "/ˈpɒsəbl/" },
        { front: "practice", back: "практика", transcription: "/ˈpræktɪs/" },
        { front: "problem", back: "проблема", transcription: "/ˈprɒbləm/" },
        { front: "process", back: "процесс", transcription: "/ˈprəʊses/" },
        { front: "progress", back: "прогресс", transcription: "/ˈprəʊɡres/" },
        { front: "purpose", back: "цель", transcription: "/ˈpɜːpəs/" },
        { front: "quality", back: "качество", transcription: "/ˈkwɒləti/" },
        { front: "reason", back: "причина", transcription: "/ˈriːzn/" },
        { front: "relationship", back: "отношения", transcription: "/rɪˈleɪʃnʃɪp/" },
        { front: "research", back: "исследование", transcription: "/rɪˈsɜːtʃ/" },
        { front: "responsible", back: "ответственный", transcription: "/rɪˈspɒnsəbl/" },
        { front: "result", back: "результат", transcription: "/rɪˈzʌlt/" },
        { front: "science", back: "наука", transcription: "/ˈsaɪəns/" },
        { front: "similar", back: "похожий", transcription: "/ˈsɪmələ/" },
        { front: "situation", back: "ситуация", transcription: "/ˌsɪtʃuˈeɪʃn/" },
        { front: "success", back: "успех", transcription: "/səkˈses/" },
        { front: "technology", back: "технология", transcription: "/tekˈnɒlədʒi/" },
        { front: "tradition", back: "традиция", transcription: "/trəˈdɪʃn/" },
        { front: "understand", back: "понимать", transcription: "/ˌʌndəˈstænd/" },
        { front: "useful", back: "полезный", transcription: "/ˈjuːsfl/" },
        { front: "value", back: "ценность", transcription: "/ˈvæljuː/" },
        { front: "various", back: "различный", transcription: "/ˈveəriəs/" },
        { front: "volunteer", back: "волонтёр", transcription: "/ˌvɒlənˈtɪə/" }
      ],
      crossword: [
        { word: "ABILITY", clue: "The power or skill to do something" },
        { word: "CAREER", clue: "A profession or job you do for a long time" },
        { word: "EDUCATION", clue: "The process of learning at school or university" },
        { word: "FUTURE", clue: "Time that has not come yet" },
        { word: "GOAL", clue: "Something you want to achieve" },
        { word: "KNOWLEDGE", clue: "Information and understanding you have" },
        { word: "LANGUAGE", clue: "English, Russian, French — all are ..." },
        { word: "PRACTICE", clue: "Doing something regularly to improve" },
        { word: "RESULT", clue: "The final outcome of an action" },
        { word: "SUCCESS", clue: "Achieving your goal" }
      ]
    }
  };
})();