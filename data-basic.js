"use strict";

window.MDK_DATA = window.MDK_DATA || {};

(function () {
  function lec(code, title, content) { return { code, title, content }; }
  function prac(code, title, goal, task, variants) { return { code, title, goal, task, variants: variants || [] }; }
  function selfwork(code, title, task) { return { code, title, task }; }
  function tq(q, options, correct) { return { q, options, correct }; }
  function topic(id, code, title, lectures, practicals, selfWork, test, writing) {
    return { id, code, title, lectures, practicals, selfWork, test, writing };
  }

  window.MDK_DATA["basic"] = {
    id: "basic",
    shortName: "Basic English",
    title: "English (СПО, по учебнику Н.М. Беловой)",
    module: "General English · Based on N.M. Belova's textbook",
    sections: [
      {
        code: "UNIT 1",
        title: "About Myself. Phonetics and Grammar Basics",
        topics: [
          topic("b-unit1", "Unit 1", "About Myself",
            [
              lec("1.1", "Phonetics and Pronunciation", `
                <h3>1. Основные сведения об английской фонетике</h3>
                <p>В современном английском языке существует огромное несоответствие между написанием и произношением слов. Это связано с тем, что английская орфография не подвергалась существенным изменениям и отражает произношение, существовавшее несколько веков назад. Например: <i>through</i> [θru:] — 7 букв, 3 звука; <i>thought</i> [θɔ:t] — 7 букв, 3 звука.</p>
                <p>Количество звуков в языке превышает число букв: 26 букв алфавита должны обозначать 44 звука. Одна и та же буква может читаться по-разному. Гласные подразделяются на долгие и краткие. Долгие произносятся примерно в полтора раза дольше, чем краткие. Английские долгие и краткие — это разные звуки, несоответствие этого правила приводит к искажению смысла слова.</p>
                <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:14px;">
                  <tr style="background:var(--card-soft);"><th style="border:1px solid var(--border); padding:5px;">Буква</th><th style="border:1px solid var(--border); padding:5px;">Открытый слог</th><th style="border:1px solid var(--border); padding:5px;">Закрытый слог</th><th style="border:1px solid var(--border); padding:5px;">Гласная + r</th><th style="border:1px solid var(--border); padding:5px;">Гласная + r + гласная</th></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">A</td><td style="border:1px solid var(--border); padding:5px;">[ei] table</td><td style="border:1px solid var(--border); padding:5px;">[æ] bank</td><td style="border:1px solid var(--border); padding:5px;">[ɑ:] car</td><td style="border:1px solid var(--border); padding:5px;">[εə] care</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">O</td><td style="border:1px solid var(--border); padding:5px;">[əu] no</td><td style="border:1px solid var(--border); padding:5px;">[ɔ] hot</td><td style="border:1px solid var(--border); padding:5px;">[ɔ:] cord</td><td style="border:1px solid var(--border); padding:5px;">[ɔ:] more</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">I</td><td style="border:1px solid var(--border); padding:5px;">[ai] fine</td><td style="border:1px solid var(--border); padding:5px;">[i] list</td><td style="border:1px solid var(--border); padding:5px;">[ə:] circuit</td><td style="border:1px solid var(--border); padding:5px;">[aiə] Irish</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">E</td><td style="border:1px solid var(--border); padding:5px;">[i:] bee</td><td style="border:1px solid var(--border); padding:5px;">[e] get</td><td style="border:1px solid var(--border); padding:5px;">[ə:] terminal</td><td style="border:1px solid var(--border); padding:5px;">[iə] beer</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">U</td><td style="border:1px solid var(--border); padding:5px;">[ju:] mute</td><td style="border:1px solid var(--border); padding:5px;">[ʌ] cut</td><td style="border:1px solid var(--border); padding:5px;">[ə:] turn</td><td style="border:1px solid var(--border); padding:5px;">[juə] pure</td></tr>
                </table>
                <p><b>Правила чтения согласных:</b><br>
                <b>s</b> — [s] в начале слова, перед согласными и после глухих; [z] после гласных и звонких согласных.<br>
                <b>c</b> — [s] перед e, i, y; [k] в остальных случаях.<br>
                <b>g</b> — [dʒ] перед e, i, y (кроме give, get); [g] в остальных случаях.<br>
                <b>th</b> — [ð], [θ]. Звуки часто подменяются русскими [з], [с], [ф], что приводит к изменению смысла.</p>
                <p>Английские согласные никогда не смягчаются (особенно перед e: let) и на конце слова никогда не оглушаются. Несоблюдение этого правила может привести к искажению смысла слова: <i>back</i> [bæk] — спина, <i>bag</i> [bæg] — сумка.</p>
              `),
              lec("1.2", "Grammar: Pronouns, Verbs, Modals", `
                <h3>1. Personal Pronouns (Личные местоимения)</h3>
                <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:14px;">
                  <tr style="background:var(--card-soft);"><th style="border:1px solid var(--border); padding:5px;">Личные (Им.)</th><th style="border:1px solid var(--border); padding:5px;">Объектные</th><th style="border:1px solid var(--border); padding:5px;">Притяжательные (простая)</th><th style="border:1px solid var(--border); padding:5px;">Притяжательные (абсолютная)</th><th style="border:1px solid var(--border); padding:5px;">Возвратные</th></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">I</td><td style="border:1px solid var(--border); padding:5px;">me</td><td style="border:1px solid var(--border); padding:5px;">my</td><td style="border:1px solid var(--border); padding:5px;">mine</td><td style="border:1px solid var(--border); padding:5px;">myself</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">you</td><td style="border:1px solid var(--border); padding:5px;">you</td><td style="border:1px solid var(--border); padding:5px;">your</td><td style="border:1px solid var(--border); padding:5px;">yours</td><td style="border:1px solid var(--border); padding:5px;">yourself</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">he</td><td style="border:1px solid var(--border); padding:5px;">him</td><td style="border:1px solid var(--border); padding:5px;">his</td><td style="border:1px solid var(--border); padding:5px;">his</td><td style="border:1px solid var(--border); padding:5px;">himself</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">she</td><td style="border:1px solid var(--border); padding:5px;">her</td><td style="border:1px solid var(--border); padding:5px;">her</td><td style="border:1px solid var(--border); padding:5px;">hers</td><td style="border:1px solid var(--border); padding:5px;">herself</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">it</td><td style="border:1px solid var(--border); padding:5px;">it</td><td style="border:1px solid var(--border); padding:5px;">its</td><td style="border:1px solid var(--border); padding:5px;">its</td><td style="border:1px solid var(--border); padding:5px;">itself</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">we</td><td style="border:1px solid var(--border); padding:5px;">us</td><td style="border:1px solid var(--border); padding:5px;">our</td><td style="border:1px solid var(--border); padding:5px;">ours</td><td style="border:1px solid var(--border); padding:5px;">ourselves</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">they</td><td style="border:1px solid var(--border); padding:5px;">them</td><td style="border:1px solid var(--border); padding:5px;">their</td><td style="border:1px solid var(--border); padding:5px;">theirs</td><td style="border:1px solid var(--border); padding:5px;">themselves</td></tr>
                </table>
                <h3>2. Multifunctional verbs</h3>
                <p><b>To be:</b> (am, is, are, was, were, will be). Смысловой (He is a student), Вспомогательный (He is reading now), Модальный (He is to study).</p>
                <p><b>To have:</b> (have, has, had). Смысловой (I have a lot of free time), Вспомогательный (I have done my homework), Модальный (I have to work).</p>
                <p><b>To do:</b> (do, does, did). Смысловой (I do my homework), Вспомогательный (Do you go to school?), Усилительный (I do know this man).</p>
                <h3>3. Modal Verbs</h3>
                <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:14px;">
                  <tr style="background:var(--card-soft);"><th style="border:1px solid var(--border); padding:5px;">Глагол</th><th style="border:1px solid var(--border); padding:5px;">Значение</th><th style="border:1px solid var(--border); padding:5px;">Перевод</th></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">can</td><td style="border:1px solid var(--border); padding:5px;">физическая возможность, способность</td><td style="border:1px solid var(--border); padding:5px;">могу, умею</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">may</td><td style="border:1px solid var(--border); padding:5px;">разрешение</td><td style="border:1px solid var(--border); padding:5px;">можно</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">must</td><td style="border:1px solid var(--border); padding:5px;">долженствование</td><td style="border:1px solid var(--border); padding:5px;">должен</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">should</td><td style="border:1px solid var(--border); padding:5px;">мягкий совет, рекомендация</td><td style="border:1px solid var(--border); padding:5px;">следует, хорошо бы</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">ought to</td><td style="border:1px solid var(--border); padding:5px;">настойчивый совет</td><td style="border:1px solid var(--border); padding:5px;">обязательно следует</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">need</td><td style="border:1px solid var(--border); padding:5px;">необходимость</td><td style="border:1px solid var(--border); padding:5px;">необходимо</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">to be to</td><td style="border:1px solid var(--border); padding:5px;">долженствование по плану</td><td style="border:1px solid var(--border); padding:5px;">должен, запланировано</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">to have to</td><td style="border:1px solid var(--border); padding:5px;">долженствование как вынужденная необходимость</td><td style="border:1px solid var(--border); padding:5px;">должен, вынужден</td></tr>
                </table>
              `),
              lec("1.3", "Reading: Speak about yourself", `
                <h3>Text: About Myself</h3>
                <p>My name is Oleg. I am 25. I was born and live in Nizhnekamsk. I am married (not married yet) and live together with my wife and a daughter (a son, with my parents, with my brother). Our flat isn’t large but comfortable (cozy, well-furnished, small, inconvenient). It is a three-room flat on the second floor of the five-storeyed house.</p>
                <p>I do not work now but I am busy all day long. Every day I have a lot of work to do, so I have to get up very early and usually go to bed late in the evening. I must devote enough time to my studies because I am a student. I think further education will help me get a new profession (to make a career, to get a profitable job). That’s why I decided to enter Nizhnekamsk Institute of Chemical Technology. I study at the full-time department. Twice a year I have to pass the examinations some of which are rather difficult, especially because I can’t (don’t want to) afford much time to study thoroughly all year round. But I am going to work hard to get a diploma. And in two years I will become a process engineer.</p>
                <p>When the studying hours are over, I usually go to the sport center. I do take care about my health and about my future that’s why I do not smoke and do my best to go in for sport at least twice a week.</p>
                <p>I am used to spend my weekends with my family (my friends, alone). Sometimes we go to the countryside, play different games, cook tasty things (meat, sausages, vegetables, toasts) or simply walk. When the weather is bad we stay at home, watch TV or listen to music and chatter. Reading the English books in the original is also my hobby.</p>
              `)
            ],
            [], // Practicals
            [], // SelfWork
            [
              tq("This computer is ...", ["me", "my", "mine"], 2),
              tq("You can ask ... teacher about it.", ["our", "ours", "ourselves"], 0),
              tq("Can you see ... through the window?", ["something", "anything", "nothing"], 1),
              tq("You will ... learn the poem.", ["must", "have to", "can"], 1),
              tq("Nobody ... heard about this writer.", ["haven't", "have", "has"], 2),
              tq("I don't believe he is ... cruel.", ["what", "so", "that"], 2),
              tq("He had read the article ... yesterday evening.", ["must", "had", "by"], 2)
            ],
            [
              { code: "W 1.1", title: "Grammar Exercises: Pronouns & Verbs", task: "1. Are you in the library? I'd like to join ... .\n2. The professor is at the University. You can meet ... .\n3. Your test is on the desk. Take ... .\n4. We can't make a conclusion. Can you help ... ?\n5. Are they still analyzing the data? May I speak to ... ?\n6. The secretary may be late. Tell ... the time, please.\n7. The assistant is at the laboratory. Ask ... to come, please.\n8. The researchers are to arrive at 12. Meet ... in the hall.\n\nInsert possessive pronouns:\n1. My friends and I live in a little village. There are many old houses in ... village.\n2. You take chemistry at University. Are there many students at ... faculty?\n3. Joe teaches at school. Does he like ... job?\n4. I have got a family. I spend every weekend with ... family.\n5. Your parents live in Moscow. Do they have ... own flat?" },
              { code: "W 1.2", title: "Translation Practice (Unit 1)", task: "Translate the following sentences into English:\n1. Я работаю распространителем в иностранной торговой компании.\n2. Мне нравится моя работа, хотя я занят целый день.\n3. Изучать иностранный язык очень важно.\n4. Высшее образование необходимо каждому руководителю.\n5. Я собираюсь поменять работу в следующем году.\n6. Я надеюсь, что через несколько лет получу диплом инженера.\n7. Без сомнения, будущее человека во многом зависит от его здоровья.\n8. Активный отдых - лучшее средство для того, чтобы поддерживать хорошую физическую форму." }
            ]
          )
        ]
      },
            {
        code: "UNIT 2",
        title: "The Town I Live In",
        topics: [
          topic("b-unit2", "Unit 2", "Nizhnekamsk",
            [
              lec("2.1", "Grammar: Word Formation & Chain of Definitions", `
                <h3>1. Word Formation (Словообразование)</h3>
                <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:14px;">
                  <tr style="background:var(--card-soft);"><th style="border:1px solid var(--border); padding:5px;">Суффиксы существительных</th><th style="border:1px solid var(--border); padding:5px;">Суффиксы прилагательных</th><th style="border:1px solid var(--border); padding:5px;">Приставки с отрицанием</th></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">-er (worker), -or (insulator), -ment (development), -ness (happiness), -ity (equality), -ion (union)</td><td style="border:1px solid var(--border); padding:5px;">-able (comfortable), -al (formal), -ant (important), -ful (peaceful), -ive (effective), -ous (dangerous)</td><td style="border:1px solid var(--border); padding:5px;">un- (unimportant), in- (inaccuracy), im- (impossible), il- (illegal), ir- (irresponsible)</td></tr>
                </table>
                <h3>2. «Цепочка определений» (Chain of Definitions)</h3>
                <p>В английском языке часто используются беспредложные словосочетания, состоящие из нескольких существительных. Главным словом является последнее, а все стоящие слева — определениями к нему. Перевод следует начинать с последнего слова.</p>
                <p><i>state border</i> — государственная граница<br>
                <i>remote control system</i> — система дистанционного управления</p>
                <h3>3. Порядок слов в предложении</h3>
                <p>Прямой порядок: Подлежащее → Сказуемое → Дополнение → Обстоятельство.</p>
              `),
              lec("2.2", "Reading: Nizhnekamsk", `
                <h3>Text: The Town I Live In</h3>
                <p>Nizhnekamsk is a young town. It is located on the left bank of the river Kama, the tributary of the Volga. It is a very nice town with new blocks of houses, wide streets, wonderful squares and parks. The architectural symbol of our town is the Mosque, a very beautiful building with four minarets.</p>
                <p>Nizhnekamsk is a developed economic center. The biggest industrial enterprises of our town are the petrochemical and the tyre plants. A lot of useful goods produced here are exported to other republics and countries.</p>
                <p>Nizhnekamsk is an important educational center of Tatarstan. Thousands of students receive higher education at higher schools, colleges and universities.</p>
                <p>Nizhnekamsk is a new green town with a widely developed infrastructure. We have a railway station, a bus station, an airport, a river port. The vast forests surround the town. You can spend your days off enjoying the magnificent nature in the suburbs.</p>
              `),
              lec("2.3", "Reading Practice: A Machine Should Work", `
                <h3>Text: A Machine Should Work, a Man Think</h3>
                <p>The robots of our time resemble humans very little. According to specialists, the main thing for them is not to look like people, but to do their work for them. Factories, which are equipped with automatic machine tools, transfer lines and management information systems place a lot of hope. Automation sought out areas where a robot can operate as well as a person but where people don't like to work. In other words, man has created the robot so as not to become a robot himself.</p>
                <p>The first generation of robots appeared in the 60s and they were complex and capricious in maintenance. They could perform operations of the type "take off - put on" or "pick up - bring". They could pick up items only from definite positions determined by a rigid program. Today, to avoid errors, robots are supplied with vision (TV camera) and hearing (microphone). They can perform more complex production operations - painting, soldering, welding and assembly work. A more complex task lies ahead - to remove people completely from production areas where there are harmful fumes, excessively high or low temperatures and pressures. People should not work in conditions that are dangerous. Let the robot replace them there - and the sooner, the better.</p>
                <p>Generally speaking a single robot by itself is hardly of any use in production. It must be coupled in design with other equipment, with a system of machines, machine tools and other devices. We must set up robotized complexes and flexible productions capable of transferring easily and quickly to an output of new goods. Flexible production system consists, as a rule, of several machine tools with numerical programmed control or of processing centers - machine tools equipped with microprocessors. An all-purpose computer controls the entire cycle, including the storage facilities. One hundred per cent automated production is no longer a dream.</p>
              `)
            ],
            [],
            [],
            [
              tq("Nizhnekamsk is located on the river...", ["Volga", "Kama", "Oka"], 1),
              tq("The architectural symbol of Nizhnekamsk is...", ["The Kremlin", "The Mosque", "The Cathedral"], 1),
              tq("The biggest industrial enterprises are...", ["car and tyre plants", "petrochemical and tyre plants", "food and textile plants"], 1),
              tq("What is exported to other countries?", ["cars", "useful goods", "oil"], 1),
              tq("The town has a widely developed...", ["infrastructure", "agriculture", "tourism"], 0)
            ],
            [
              { code: "W 2.1", title: "Translate noun chains", task: "Translate the following noun chains into Russian:\n1. internal combustion engine\n2. the temperature limit determination\n3. the modern house ventilation facilities\n4. the Moscow region newspaper\n5. essential research program\n6. National Oil and Gas Research Institute\n7. wooden house advantages\n8. nineteenth century physics achievements\n9. new digital computer effectiveness\n10. modern sport car average velocity\n11. computer software possibilities" },
              { code: "W 2.2", title: "Translation Practice (Unit 2)", task: "Translate the following sentences into English:\n1. Кремль – архитектурный символ Москвы. Это очень старое красивое сооружение.\n2. Тольятти – развитый экономический центр. Самое большое промышленное предприятие здесь – это автомобильный завод.\n3. Казань – крупный центр образования. Казанскому университету уже 200 лет.\n4. В новых городах обычно очень хорошо развита инфраструктура.\n5. Лондон расположен на берегу реки Темзы.\n6. Крупнейший аэропорт Парижа – Орли – расположен в нескольких километрах от города.\n7. Рим – самый старый город в Европе." },
              { code: "W 2.3", title: "Reading: A Machine Should Work", task: "Answer the following questions based on the text 'A Machine Should Work, a Man Think':\n1. What is the difference between generations of robots?\n2. What does the flexible production complex consist of?\n3. Can you imagine the robot of the future?\n4. What fantastic stories have you read about robots?\n5. Explain the title of the text." }
            ]
          )
        ]
      },
            {
        code: "UNIT 3",
        title: "Tatarstan. Non-Finite Forms of the Verb",
        topics: [
          topic("b-unit3", "Unit 3", "Tatarstan",
            [
              lec("3.1", "Grammar: Participles, Gerunds, Infinitives", `
                <h3>1. Причастие I (Participle I)</h3>
                <p>Образуется прибавлением -ing к глаголу (asking, being asked). Переводится как причастие с суффиксами -ущ, -ющ, -ащ, -ящ (в функции определения) или деепричастие (в функции обстоятельства).</p>
                <p><i>the playing boy</i> — играющий мальчик<br>
                <i>waiting for his friend</i> — ожидая своего друга</p>
                <h3>2. Причастие II (Participle II)</h3>
                <p>Это 3-я форма глагола (asked, produced, written). Переводится страдательным причастием с суффиксами -нн, -т (данный, законченный).</p>
                <p><i>The results obtained depended on the methods used.</i> — Полученные результаты зависели от использованных методов.</p>
                <h3>3. Герундий (Gerund)</h3>
                <p>Образуется прибавлением -ing. Выражает процесс действия. Переводится деепричастием или отглагольным существительным на -ние (using — использование, reading — чтение).</p>
                <p><i>In describing the experiment he shows all details.</i> — При описании эксперимента он показывает все подробности.</p>
                <h3>4. Инфинитив (Infinitive)</h3>
                <p>Неопределенная форма глагола (to ask, to read). Может выполнять роль подлежащего, дополнения, обстоятельства цели.</p>
              `),
              lec("3.2", "Reading: Tatarstan", `
                <h3>Text: Tatarstan</h3>
                <p>Tatarstan is situated in the middle part of the Volga basin. The territory is 70 thousand square kilometers. Tatarstan is mostly plain with hills. The climate is continental, winters are cold, summers are rather warm.</p>
                <p>The population of the republic is about 4 million people, mostly the Tatars and the Russians. The state languages are Tatar and Russian. The flag of Tatarstan consists of three horizontal stripes: green, red and white.</p>
                <p>Tatarstan is rich in natural resources. The main branches of industry are oil and gas extracting, motorcar constructing, chemical production. The main agricultural products are rye, wheat, and potato.</p>
                <p>Kazan is the capital of our republic. It is historical, cultural, educational and industrial center. Other big industrial cities are Naberezhny Chelny, Nizhnekamsk, Yelabuga, Almetyevsk, and Mendeleyevsk.</p>
                <p>The state sovereignty was proclaimed on the 30th of August 1991. It opens new prospects for international cooperation with Russia and other countries, for the development of culture, education and social security.</p>
              `),
              lec("3.3", "Reading Practice: Dealing with People", `
                <h3>Text: Dealing with People</h3>
                <p>Dealing with people is probably the biggest problem you face, especially if you are in business. Yes, and that is also true if you are a housewife, architect or engineer. Even in such technical lines as engineering about 15 percent of one's financial success is due to one's technical knowledge and about 85 percent is due to skill in human engineering - to personality and the ability to lead people. The person who had technical knowledge plus the ability to express ideas, to assume leadership and to arouse enthusiasm among people - that person is headed for higher earning power. The survey conducted by Chicago University revealed that the health is the prime interest of adults.</p>
              `)
            ],
            [],
            [],
            [
              tq("Tatarstan is situated in the middle part of...", ["the Volga basin", "the Dnieper basin", "the Ural mountains"], 0),
              tq("The population is about...", ["1 million", "4 million", "10 million"], 1),
              tq("The state languages are...", ["Russian and English", "Tatar and Russian", "Tatar and English"], 1),
              tq("The main branches of industry are...", ["oil extracting and chemical production", "agriculture", "tourism"], 0),
              tq("The capital of the republic is...", ["Nizhnekamsk", "Kazan", "Yelabuga"], 1)
            ],
            [
              { code: "W 3.1", title: "Translation Practice (Unit 3)", task: "Translate the following sentences into English:\n1. Флаг Франции состоит из трех вертикальных полос: белой, красной и голубой.\n2. Столица Италии – Рим, исторический и культурный центр Европы.\n3. Государственные языки Канады – английский и французский.\n4. Швейцария расположена в центре Европы.\n5. Климат Гренландии очень суровый: лето прохладное, зима очень холодная.\n6. Антарктида богата природными ресурсами.\n7. Основная отрасль промышленности Японии – высокотехнологичное машиностроение.\n8. Основная продукция сельского хозяйства Индии – чай и рис.\n9. Нефтедобыча – основа промышленности стран Ближнего Востока.\n10. Самые крупные промышленные центры Великобритании – Ливерпуль и Манчестер." },
              { code: "W 3.2", title: "Essay: Dealing with People", task: "Write down a short essay (10-12 sentences) on the topic 'Dealing with People'. Why is it important for an engineer to have communication skills?" }
            ]
          )
        ]
      },
            {
        code: "UNIT 4",
        title: "Environmental Protection",
        topics: [
          topic("b-unit4", "Unit 4", "Ecology",
            [
              lec("4.1", "Grammar: Conditionals & Reported Speech", `
                <h3>1. Условные предложения (Conditionals)</h3>
                <table style="width:100%; border-collapse:collapse; margin:10px 0; font-size:14px;">
                  <tr style="background:var(--card-soft);"><th style="border:1px solid var(--border); padding:5px;">Тип</th><th style="border:1px solid var(--border); padding:5px;">Формула</th><th style="border:1px solid var(--border); padding:5px;">Пример</th></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">Тип I (Реальное)</td><td style="border:1px solid var(--border); padding:5px;">If + Present Simple, will + V1</td><td style="border:1px solid var(--border); padding:5px;">If machine parts are oiled, they will not rust.</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">Тип II (Маловероятное)</td><td style="border:1px solid var(--border); padding:5px;">If + Past Simple, would + V1</td><td style="border:1px solid var(--border); padding:5px;">If I had time, I would help you.</td></tr>
                  <tr><td style="border:1px solid var(--border); padding:5px;">Тип III (Нереальное)</td><td style="border:1px solid var(--border); padding:5px;">If + Past Perfect, would have + V3</td><td style="border:1px solid var(--border); padding:5px;">If they had checked the drawing, they would have avoided the mistake.</td></tr>
                </table>
                <h3>2. Согласование времен (Sequence of Tenses)</h3>
                <p>Если сказуемое главного предложения стоит в прошедшем времени, то в придаточном время сдвигается на шаг назад (Present → Past, Past → Past Perfect, Future → Future in the Past).</p>
                <h3>3. Косвенная речь (Reported Speech)</h3>
                <p>При переводе вопросов в косвенную речь порядок слов становится прямым. Общие вопросы вводятся союзом <i>if</i> или <i>whether</i>, специальные — вопросительным словом.</p>
              `),
              lec("4.2", "Reading: Environmental Protection", `
                <h3>Text: Ecology</h3>
                <p>About two hundred years ago man lived in harmony with nature because industry was not so much developed. Today the situation is quite different: the contradictions between man and nature are dramatic. The intensive development of science, industry and chemistry during the last century resulted in the global pollution of the environment.</p>
                <p>Now many parts of the world are overcrowded. Rapid growth of population increases the pollution of the environment greatly. People living in big cities suffer from smog. Factories, electric power stations, the chemical industry and heavy industry throw out into atmosphere billions tons of dust and harmful substances. Much of this waste is carried by winds for great distances. The destruction of the ozone layer could lead our planet to a global catastrophe.</p>
                <p>In recent years the pollution problems have received great publicity. People all over the world are worried about what is happening to the environment. Newspapers and magazines write about water, air and land pollution. The protection of nature is becoming a political program of every country. The Earth is our home that's why we must take care of it and keep it clean for ourselves and for the next generations.</p>
              `),
              lec("4.3", "Reading Practice: The Speed Limit", `
                <h3>Text: The Speed Limit</h3>
                <p>Before the World War II the speed of aircraft was far below the speed of sound. Today we have supersonic aircraft. Radio waves propagate at the velocity of light. Could we perhaps create "superlight" telegraphy to send signals at velocities greater than the velocity of light? No, that is an impossible thing to do. Since the experiment disproves the absolute nature of time, we conclude that signal transmission cannot be instantaneous. The velocity of transmission from one point of space to another can't be infinite, in other words, can't be greater than some ultimate value, the latter being called the speed limit. This speed limit concurs with the light velocity.</p>
                <p>Indeed, according to the principles of the relativity of motion the laws of nature will be the same for all the laboratories moving relatively to each other. The affirmation that no velocity can be greater than the given limit is also the law of Nature and, therefore, the value of the speed limit should be exactly similar in different laboratories. The light velocity is known to possess the same qualities. Thus, the speed of light is not merely the speed of propagation of a natural phenomenon. It plays the important part of being the top velocity. The discovery of the existence of the top velocity in the Universe is one of the greatest triumphs of human genius and of the experimental capacity of the mankind.</p>
                <p>In the 19th century physicists were unable to perceive that a top speed existed and that its existence could be proved. Moreover, if they had stumbled upon it by chance in their experiments, they wouldn't have been sure that it was a law of nature and not merely the effect of their limited experimental capacity.</p>
                <p>To assume that technological development will enable us to attain velocities greater than the velocity of light is just as ridiculous as to suggest that the absence of points on the Earth's surface more than 20 thousand kilometers apart is not a geographical law, but the upshot of our limited knowledge, and to hope that some day, when geography makes further advances, we will be able to find points on the Earth that are still farther apart.</p>
                <p>Light velocity is sure to play such an exceptional part in nature exactly because it is the top velocity for the propagation of anything. Light either outstrips all other phenomena, or, at the outside, arrives simultaneously with them.</p>
                <p>If the Sun should split in two and form two stars, the motion of the Earth would, naturally, suffer a change as well. The 19th century physicists, who didn't know that the top velocity existed in nature, would certainly assume that the Earth changed its motion instantly after the Sun split in two. Yet it would have taken light all of eight minutes to cover the distance from the split Sun to the Earth. The change in the Earth's rotary motion would begin eight minutes after the Sun split up. Until that moment, the Earth would continue to move as if the Sun had not split. Anything that may occur with or on the Sun will not affect the Earth or its motion until eight minutes later.</p>
              `)
            ],
            [],
            [],
            [
              tq("The main reason for ecological problems is...", ["intensive development of industry", "natural disasters", "animal migration"], 0),
              tq("People living in big cities suffer from...", ["smog", "clean air", "noise"], 0),
              tq("What throws out harmful substances into the atmosphere?", ["Trees", "Factories and power stations", "Rivers"], 1),
              tq("The destruction of the ozone layer could lead to...", ["global catastrophe", "economic growth", "new discoveries"], 0),
              tq("The Earth is our home, that's why we must...", ["conquer it", "take care of it", "ignore it"], 1)
            ],
            [
              { code: "W 4.1", title: "Translation Practice (Unit 4)", task: "Translate the following sentences into English using Conditionals:\n1. Если бы у меня было больше времени, я бы прочитал эту книгу.\n2. Если вы нагреете металл, он расширится.\n3. Если бы они проверили чертеж, они бы избежали ошибки.\n4. Если мы понизим температуру, жидкость может превратиться в лед.\n5. Если бы я выиграл соревнования, меня отправили бы за границу. (Had I won...)\n6. Если увидишь родителей, тебе следует спросить у них совета." },
              { code: "W 4.2", title: "Reading: Answer the questions", task: "Answer the following questions based on the text 'The Speed Limit':\n1. Guess the meaning of the following words: radio waves, signal transmission, speed limit, to concur with, uniform, natural phenomenon.\n2. Finish the sentences: 1. Before the World War II... 2. Today we have... 3. According to the principles of the relativity... 4. It plays the important part...\n3. Write out of the text the key words and word combinations." },
              { code: "W 4.3", title: "Essay: Ecology", task: "Write a short essay (10-12 sentences) about the ecological problems in your city or region. What can people do to protect the environment? Use the vocabulary from the text." }
            ]
          )
        ]
      },
            {
        code: "UNIT 6",
        title: "Additional Materials for Reading",
        topics: [
          topic("b-unit6", "Unit 6", "Additional Reading",
            [
              lec("6.1", "The History of Physics", `
                <h3>The History of Physics</h3>
                <p>The most advanced science at present and the one which seems to give the most light on the structure of the world is physics. It is useful to have some idea of not only what the up-to-date development of physics is but also how we came to think in that way and how the whole of modern physics is connected with its history. In fact, the history of this science begins with Galileo. Galileo introduced the fundamental concepts and principles which were enough for physics until the present century. Galileo introduced the two principles that made mathematical physics possible: the law of inertia and the parallelogram law. The law of inertia, now familiar as Newton's first law of motion made it possible to calculate the motions of matter by means of the laws of dynamics alone.</p>
                <p>Technically the principle of inertia meant that casual laws of physics should be stated in terms of acceleration, i.e. a change of velocity in amount or direction or both which was found in Newton's law of gravitation. From the law of inertia it followed that the causal laws of dynamics must be differential equations of the second order, though this form of statement could not be made until Newton and Leibniz had developed the infinitesimal calculus. The basic idea of dynamics, the equations of motion, the ideas of momentum, of inertia, of mass and of acceleration were applied by Newton to large bodies like the Earth and the Moon to explain the structure and the motion of the Universe.</p>
                <p>From Newton to the end of the nineteenth century, the progress of physics involved no basically new principles. The first revolutionary novelty was Planck's introduction of the quantum constant \(h\) to explain the structure and behaviour of atoms in the year 1900. Another departure from Newtonian principles followed in 1905, when Einstein published his special theory of relativity, which was primarily a geometrical theory of gravitation showing that the universe is expanding.</p>
                <p>In fact, when modern science was growing up from the time of Galileo to the time of Newton, all the sciences were very much joined together. A single man could do absolutely first-class research in pure mathematics, in physics, in chemistry and even in biology. Towards the end of that time the sciences were beginning to separate and after that they continued to separate more and more. Just at this moment we can see a great convergence of all sciences. Physics is increasingly penetrating all the other parts of science and this is evident in the names of the new hybrid subjects. We have long had physical chemistry; now we have chemical physics. A biologist cannot do without knowledge of modern physics while a physicist must know something of biology, as he may find, that a great deal of his work will be concerned with biophysics. The mathematical aspect of physics is also becoming much more evident especially now that we are having a growing symbiosis between physics and mathematics in computational physics. Our job in physics is to see things simply, to understand a great many complicated phenomena in a unified way, in terms of a few simple principles. You cannot predict what will happen in future, but you have to be ready to meet it.</p>
              `),
              lec("6.2", "The Revolution in Physics", `
                <h3>The Revolution in Physics</h3>
                <p>Nineteenth-century physics was a majestic achievement of the human mind. To many who were working in science this achievement seems to be moving towards a certain completion of the picture of the operation of natural forces on the secure basis of the mechanics of Galileo and Newton. However, this picture was shattered at the very outset of the XXth century and was to be replaced by another one. The revolution in physics broke out unexpectedly. In November 1895 the general direction of world research was sharply changed by an accidental and altogether unforeseen discovery.</p>
                <p>Konrad fon Rontgen (1845-1923), then the professor of physics had bought a new cathode-ray discharge tube with the object of studying its inner mechanism. Within a week he had found that something was happening outside the tube: something was escaping that had properties never before imagined in Nature. That something made fluorescent screen shine in the dark and could fog photographic plates through black paper. These astonishing photographs showed coins in purses and bones in the hand. He didn't know what that something was, so he called it "X-rays". This scientific discovery was a top press news all over the world. It was the subject of innumerable music-hall jokes and within a few weeks almost every physicist of repute was repeating the experiment for himself and demonstrating it to admirable audience.</p>
                <p>The immediate value of X-rays was great, particularly to medicine, however, their importance was much greater to the whole of physics and natural knowledge, for the discovery of X-rays provided the key not only to one, but to many branches of physics. This discovery was followed by a number of unexpected discoveries like that of radioactivity in 1896, of the structure of crystals in 1912, of the neutron in 1932, of nuclear fission in 1938, and of mesons between 1936 and 1947. This revolutionary development includes great theoretical achievements of synthesis like Plank's quantum theory in 1900, Einstein's special relativity theory in 1905 and his general theory in 1916, the Rutherford-Bohr atom in 1913 and the new quantum theory in 1925.</p>
                <p>The period from 1895 to 1916 might be called the first phase of the revolution in physics, the so-called heroic, or in a different aspect, the amateur stage of modern physics. In it new worlds were being explored, new ideas created, mainly with the technical and intellectual means of the old XIXth century science. It was still a period primarily of individual achievement: of the Curies and Rutherford, of Plank and Einstein, of the Braggs and Bohr. Physical science, particularly physics itself, still belonged to the university laboratory, it had few links with industry, apparatuses were cheap and simple, it was still in the "sealing-wax-and-string" stage.</p>
              `),
              lec("6.3", "Automation", `
                <h3>Automation</h3>
                <p>We now use the term automation for specific techniques combined to operate automatically in a complete system. These techniques are possible because of electronic devices, most of which have come into use in the last thirty years. They include program, action, sensing or feedback, decision, and control elements as components of a complete system.</p>
                <p>The program elements determine what the system does and the step-by-step manner in which it works to produce the desired result. A program is step-by-step sequence that breaks a task into its individual parts. Some steps in an industrial automation program direct other parts of the system when and how to carry out their jobs. The action elements are those which do the actual work. They may carry or convey materials to specific places at specific times or they may perform operations on the materials. The term mechanical handling device is also used for the action elements.</p>
                <p>Perhaps the most important part of an automated system is sensing or feedback. Sensing devices automatically check on parts of the manufacturing process such as the thickness of a sheet of steel or paper. This is called feedback because the instruments return or feed back this information to the central system control.</p>
                <p>The decision element is used to compare what is going on in the system with what should be going on, it receives information from the sensing devices and makes decisions necessary to maintain the system correctly. If some action is necessary the decision element can give instructions or commands to the system.</p>
                <p>The control element consists of devices to carry out the commands of the decision element. There may be many kinds of devices: valves that open or close, switches that control the flow of electricity, or regulators that change the voltage in various machines; they make the necessary corrections or adjustments to keep the system in conformity with its program.</p>
                <p>An industrial engineer working with automated system is part of a team. Many components of the system, such as the computers, are electronic devices so electronic engineers and technicians are also involved. Many of the industries in which automation has proved particularly suitable - chemicals, papermaking, metal processing - involve chemical processes, so there may be chemical engineers at work too. An industrial engineer with expertise in all these fields may become a systems engineer for automation projects thereby coordinating the activities of all the members of the team.</p>
              `),
              lec("6.4", "Environmental Pollution", `
                <h3>Environmental Pollution</h3>
                <p>Once came into being from inorganic environment, the living matter has deeply altered the lifeless Earth, step by step changing the composition of the atmosphere, the sea, and the upper layers of the solid crust both on land and under the ocean. Since then, were one to find out a single object to evolution it would be the perpetuation of life. Though there are more than 100 chemical elements in the Periodic Table, only four prove to be essential for the biosphere; they are hydrogen, carbon, nitrogen and oxygen. Ecologists define the biosphere to be the part of the world where life can exist and the point of interaction of these four elements. While the elements mentioned above go wonderfully with much of the chemistry life, the definition turns out to be a little too limited, ignoring as it does, the role of sulphur and phosphorus.</p>
                <p>Consequently, it is a fact that most of the problems of the environmental disturbance arise from the extraordinary reactivity of these six elements, with the first four actually building protein molecule, sulphur being the fastening in protein, and phosphorus supplying high-energy bond which is known to be universal fuel for biochemical work within the cells.</p>
                <p>If the biosphere continues in running order biologically important materials must undergo cyclic changes so that after utilization they are put back at the expense of some solar energy into a form in which they can be reused. So far nature itself saw to the whole arrangement go on smoothly and all the cycles be governed by complex mechanisms that were fitted together and held the whole in balance. Yet during the few last decades the man's intervention into the natural cycling of the living matter has been going on an unprecedented scale and at an unprecedented rate. Never before has nature been treated in such a drastic and often irreversible way, with both immediate consequences and ultimate incineration, not even vaguely foreseeable. For too little do we know for certain about the way nature has been self-regulating for millions of years since life began and too many variables are involved, to be able to foresee the final aftermath of our rapid technological development on the biosphere as the home of life.</p>
                <p>Thus, what is now recognized as a threat to our environment is caused first of all by disturbances either in natural cycles of the six essentials, or in the energy cycle of the biosphere, energy being the driving force of all life processes.</p>
              `)
            ],
            [],
            [],
            [
              tq("Physics begins with...", ["Galileo", "Newton", "Einstein"], 0),
              tq("The first revolutionary novelty was...", ["Planck's quantum constant", "Einstein's relativity", "Rutherford's atom"], 0),
              tq("X-rays were discovered by...", ["Rontgen", "Curie", "Bohr"], 0),
              tq("The term automation includes...", ["program, action, sensing, decision, control", "only computers", "only robots"], 0),
              tq("Only four chemical elements are essential for the biosphere: hydrogen, carbon, nitrogen and...", ["oxygen", "sulphur", "phosphorus"], 0)
            ],
            [
              { code: "W 6.1", title: "Reading: The History of Physics", task: "Answer the questions based on the text:\n1. Who introduced the law of inertia?\n2. What did Newton apply to large bodies?\n3. When did Planck introduce the quantum constant?\n4. Why is physics penetrating other sciences?" },
              { code: "W 6.2", title: "Reading: The Revolution in Physics", task: "Answer the questions based on the text:\n1. Who discovered X-rays and when?\n2. What did the photographs show?\n3. What discoveries followed the discovery of X-rays?\n4. What was the first phase of the revolution called?" },
              { code: "W 6.3", title: "Reading: Automation", task: "Answer the questions based on the text:\n1. What are the main components of an automated system?\n2. What is feedback used for?\n3. What does the decision element do?\n4. Why is an industrial engineer part of a team?" },
              { code: "W 6.4", title: "Reading: Environmental Pollution", task: "Answer the questions based on the text:\n1. What is the biosphere?\n2. What are the four essential elements for the biosphere?\n3. What causes environmental disturbance?\n4. What is the threat to our environment caused by?" },
              { code: "W 6.5", title: "Essay: A Good Job", task: "Read the text 'A good job' from the speaking section of your textbook. Write a short retelling of it (10-12 sentences) using indirect speech." },
              { code: "W 6.6", title: "Dialogue: Looking for a job", task: "Make up your own dialogue based on the 'Looking for a job' text. Use the conversational formulas from the text." }
            ]
          )
        ]
      }
    ],
    videos: [], passports: [], safety: [], formatting: {},
    
    flashcards: {
      basic: [
        { front: "ability", back: "способность" }, { front: "achieve", back: "достигать" },
        { front: "advantage", back: "преимущество" }, { front: "advice", back: "совет" },
        { front: "affect", back: "влиять" }, { front: "allow", back: "разрешать" },
        { front: "ancient", back: "древний" }, { front: "apply", back: "применять" },
        { front: "available", back: "доступный" }, { front: "average", back: "средний" },
        { front: "behavior", back: "поведение" }, { front: "benefit", back: "польза" },
        { front: "career", back: "карьера" }, { front: "challenge", back: "вызов" }
      ],
      crossword: [
        { word: "ABILITY", clue: "The power or skill to do something" },
        { word: "CAREER", clue: "A profession or job you do for a long time" },
        { word: "FUTURE", clue: "Time that has not come yet" },
        { word: "GOAL", clue: "Something you want to achieve" },
        { word: "LANGUAGE", clue: "English, Russian, French — all are ..." },
        { word: "RESULT", clue: "The final outcome of an action" }
      ]
    }
  };
})();
