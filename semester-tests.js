/* ============================================================
   МДК — semester-tests.js
   Семестровые контрольные (10 шт) + итоговые экзамены (5 × 2 варианта)
   Подключать ПОСЛЕ data-basic.js и data-technical.js
   ============================================================ */
"use strict";

(function () {
  function tq(q, options, correct) { return { q, options, correct }; }

  window.SEMESTER_TESTS = window.SEMESTER_TESTS || {};
  window.FINAL_EXAMS    = window.FINAL_EXAMS    || {};

  /* ============================================================
     БАЗОВЫЙ КУРС (Basic English)
     ============================================================ */
  window.SEMESTER_TESTS.basic = [
    /* 1 курс · 1 семестр — Unit 1: About Myself */
    { id: "b_sem1", title: "Контрольная работа №1", subtitle: "1 курс, 1 семестр · Unit 1", year: 1, semester: 1, time: 45, questions: [
      tq("Which word has the long vowel [i:]?", ["list", "least", "fill", "rich"], 1),
      tq("Which word has the sound [θ]?", ["that", "think", "this", "those"], 1),
      tq("The letter 's' is pronounced [z] after…", ["voiceless consonants", "voiced consonants and vowels", "silent letters", "only at the beginning"], 1),
      tq("This computer is …", ["me", "my", "mine", "myself"], 2),
      tq("You can ask … teacher about it.", ["our", "ours", "ourselves", "us"], 0),
      tq("Can you see … through the window?", ["something", "anything", "nothing", "everything"], 1),
      tq("She did the work …", ["her", "hers", "herself", "she"], 2),
      tq("He … a first-year student.", ["am", "is", "are", "be"], 1),
      tq("I … a lot of free time every day.", ["have", "has", "am", "is"], 0),
      tq("… you go to school every day?", ["Do", "Does", "Is", "Are"], 0),
      tq("You will … learn the poem.", ["must", "have to", "can", "may"], 1),
      tq("He … speak English very well.", ["can", "must", "has to", "is"], 0),
      tq("… I use your phone?", ["May", "Must", "Should", "Ought"], 0),
      tq("This book is … than that one.", ["interesting", "more interesting", "most interesting", "the most interesting"], 1),
      tq("Mathematics is the … subject.", ["important", "more important", "most important", "importanter"], 2),
      tq("'To be born' means …", ["родиться", "умереть", "учиться", "работать"], 0),
      tq("Which sentence is correct?", ["I not work now.", "I do not work now.", "I am not work now.", "I no work now."], 1),
      tq("Nobody … heard about this writer.", ["haven't", "have", "has", "didn't"], 2),
      tq("I don't believe he is … cruel.", ["what", "so", "that", "such"], 2),
      tq("'To make a career' means …", ["делать карьеру", "получать образование", "сдавать экзамен", "работать менеджером"], 0)
    ]},
    /* 1 курс · 2 семестр — Unit 2: Town I Live In */
    { id: "b_sem2", title: "Контрольная работа №2", subtitle: "1 курс, 2 семестр · Unit 2", year: 1, semester: 2, time: 45, questions: [
      tq("Form an adjective from 'industry':", ["industrial", "industrious", "industry", "industrially"], 0),
      tq("Form a noun from 'develop':", ["development", "developer", "developed", "developing"], 0),
      tq("Negative adjective from 'possible':", ["unpossible", "impossible", "inpossible", "dispossible"], 1),
      tq("Translate: 'state border security system'", ["система безопасности государственной границы", "безопасность государственной границы", "государственная граница системы", "система государственной границы"], 0),
      tq("Translate: 'remote control system'", ["система дистанционного управления", "дистанционное управление системой", "управление дистанционной системой", "система управления дистанционно"], 0),
      tq("Nizhnekamsk … on the left bank of the Kama.", ["is located", "locates", "is locating", "has located"], 0),
      tq("The plant … goods to other countries now.", ["exports", "is exporting", "exported", "has exported"], 1),
      tq("We … this town last year.", ["visit", "visited", "have visited", "are visiting"], 1),
      tq("I … never … to Kazan.", ["have / been", "has / been", "am / being", "was / be"], 0),
      tq("They … their work by 5 yesterday.", ["finish", "finished", "had finished", "have finished"], 2),
      tq("Which sentence is correct?", ["The plant is large and modern.", "Is the plant large and modern.", "Large and modern the plant is.", "The plant large is and modern."], 0),
      tq("Where … Nizhnekamsk located?", ["is", "are", "do", "does"], 0),
      tq("'Architectural symbol' means …", ["архитектурный символ", "архитектурный стиль", "строительный объект", "памятник"], 0),
      tq("'Infrastructure' means …", ["инфраструктура", "строительство", "промышленность", "транспорт"], 0),
      tq("'To be located' means …", ["быть расположенным", "быть построенным", "быть разрушенным", "быть известным"], 0),
      tq("The biggest industrial enterprises … the petrochemical and tyre plants.", ["is", "are", "was", "has"], 1),
      tq("A lot of useful goods … here.", ["produced", "are produced", "is produced", "produces"], 1),
      tq("Students … higher education at universities.", ["receive", "receives", "is receiving", "are receiving"], 0),
      tq("You can spend your days off … the nature.", ["enjoying", "enjoy", "enjoyed", "to enjoy"], 0),
      tq("'Magnificent nature' means …", ["великолепная природа", "дикая природа", "живописный пейзаж", "природные ресурсы"], 0)
    ]},
    /* 2 курс · 3 семестр — Unit 3: Tatarstan. Infinitive & Gerund */
    { id: "b_sem3", title: "Контрольная работа №3", subtitle: "2 курс, 1 семестр · Unit 3", year: 2, semester: 1, time: 45, questions: [
      tq("I want … a doctor.", ["to be", "being", "be", "been"], 0),
      tq("He enjoys … technical books.", ["to read", "reading", "read", "reads"], 1),
      tq("She decided … the university.", ["entering", "to enter", "enter", "entered"], 1),
      tq("… English is very important for engineers.", ["To know", "Knowing", "Know", "Knew"], 1),
      tq("They finished … the experiment.", ["to do", "doing", "do", "did"], 1),
      tq("We hope … the exam successfully.", ["passing", "to pass", "pass", "passed"], 1),
      tq("He is interested in … new technologies.", ["to learn", "learning", "learn", "learned"], 1),
      tq("It is important … foreign languages.", ["to study", "studying", "study", "studied"], 0),
      tq("'Population' means …", ["население", "популяция", "поколение", "популярность"], 0),
      tq("'State language' means …", ["государственный язык", "иностранный язык", "родной язык", "официальный язык"], 0),
      tq("'Natural resources' means …", ["природные ресурсы", "искусственные материалы", "полезные ископаемые", "энергоресурсы"], 0),
      tq("'Sovereignty' means …", ["суверенитет", "независимость", "государство", "республика"], 0),
      tq("'International cooperation' means …", ["международное сотрудничество", "международные отношения", "внешняя политика", "международная торговля"], 0),
      tq("The main branches of industry in Tatarstan are …", ["oil and gas extracting, motorcar constructing, chemical production", "agriculture and tourism", "light industry", "food production"], 0),
      tq("The capital of Tatarstan is …", ["Kazan", "Nizhnekamsk", "Naberezhny Chelny", "Yelabuga"], 0),
      tq("Tatarstan is situated in the middle part of …", ["the Volga basin", "the Ural mountains", "the Black Sea", "the Caspian Sea"], 0),
      tq("The population of Tatarstan is about …", ["4 million", "10 million", "1 million", "7 million"], 0),
      tq("The state languages are …", ["Tatar and Russian", "Tatar and English", "Russian and English", "Tatar only"], 0),
      tq("The flag of Tatarstan consists of … stripes.", ["three horizontal", "two vertical", "four horizontal", "three vertical"], 0),
      tq("We know gravity … on every particle of a body.", ["to act", "acting", "act", "acted"], 0)
    ]},
    /* 2 курс · 4 семестр — Participles, Conditionals I */
    { id: "b_sem4", title: "Контрольная работа №4", subtitle: "2 курс, 2 семестр · Unit 3–4", year: 2, semester: 2, time: 45, questions: [
      tq("Participle I is formed by adding:", ["-ed", "-ing", "-en", "-ly"], 1),
      tq("Participle II is:", ["the 1st form", "the 2nd form", "the 3rd form", "the -ing form"], 2),
      tq("The … boy is my brother.", ["playing", "played", "play", "plays"], 0),
      tq("The results … depended on the methods used.", ["obtaining", "obtained", "obtain", "to obtain"], 1),
      tq("… the experiment, he showed all details.", ["Describe", "Describing", "Described", "To describe"], 1),
      tq("If machine parts are oiled, they … not rust.", ["will", "would", "would have", "are"], 0),
      tq("If we lower the temperature, the liquid … turn into ice.", ["can", "could", "would have", "had"], 0),
      tq("If I had time, I … help you.", ["will", "would", "would have", "am"], 1),
      tq("If they had checked the drawing, they … the mistake.", ["would avoid", "would have avoided", "will avoid", "avoid"], 1),
      tq("The … of the ozone layer could lead to a catastrophe.", ["destruct", "destruction", "destructive", "destroy"], 1),
      tq("'Pollution' means …", ["загрязнение", "очистка", "разрушение", "защита"], 0),
      tq("'Environment' means …", ["окружающая среда", "природа", "экология", "погода"], 0),
      tq("'Global catastrophe' means …", ["глобальная катастрофа", "мировая война", "природный катаклизм", "климатическое изменение"], 0),
      tq("'Ozone layer' means …", ["озоновый слой", "атмосфера", "стратосфера", "воздушная оболочка"], 0),
      tq("Factories … dust into the atmosphere.", ["throw out", "throw in", "throw up", "throw off"], 0),
      tq("About two hundred years ago man … in harmony with nature.", ["lived", "lives", "is living", "has lived"], 0),
      tq("Today the contradictions between man and nature … dramatic.", ["is", "are", "was", "has"], 1),
      tq("Rapid growth of population … pollution.", ["increase", "increases", "is increasing", "have increased"], 1),
      tq("The protection of nature … a political program of every country.", ["become", "is becoming", "has become", "became"], 1),
      tq("We must take care … the Earth.", ["of", "on", "in", "about"], 0)
    ]},
    /* 3 курс · 5 семестр — Conditionals II–III, Reported speech */
    { id: "b_sem5", title: "Контрольная работа №5", subtitle: "3 курс, 1 семестр · Unit 4", year: 3, semester: 1, time: 45, questions: [
      tq("He said: 'I live in Kazan.' → He said that he … in Kazan.", ["lives", "lived", "is living", "has lived"], 1),
      tq("She said: 'I have seen this film.' → She said she … that film.", ["has seen", "had seen", "saw", "sees"], 1),
      tq("He asked: 'Are you a student?' → He asked … I was a student.", ["that", "if", "what", "which"], 1),
      tq("They asked: 'When will the lesson be over?' → They asked when the lesson … over.", ["will be", "would be", "is", "was"], 1),
      tq("The teacher said: 'Open your books.' → The teacher told us … our books.", ["open", "opening", "to open", "opened"], 2),
      tq("The Earth … round the Sun.", ["go", "goes", "is going", "gone"], 1),
      tq("If I had more time, I … the book.", ["would read", "will read", "read", "would have read"], 0),
      tq("If they had started earlier, they … the train.", ["would catch", "would have caught", "caught", "catch"], 1),
      tq("But for the lack of time we … one more experiment.", ["will carry out", "would carry out", "would have carried out", "carry out"], 1),
      tq("'A global catastrophe' is a catastrophe that affects …", ["a whole planet", "one country", "a small region", "one city"], 0),
      tq("'Smog' is a mixture of …", ["smoke and fog", "water and air", "dust and rain", "smoke and snow"], 0),
      tq("'Ozone layer' protects the Earth from …", ["ultraviolet radiation", "meteorites", "solar wind", "magnetic storms"], 0),
      tq("Which sentence is in Passive Voice?", ["They built the house.", "The house was built.", "They are building the house.", "The house is big."], 1),
      tq("The book … published in 2015.", ["is", "was", "were", "are"], 1),
      tq("The results of the experiment … discussed yesterday.", ["were", "was", "is", "are"], 0),
      tq("The new device … in mass production now.", ["has been put", "has put", "is putting", "put"], 0),
      tq("The instrument … carefully before use.", ["must be checked", "must check", "must checking", "must to check"], 0),
      tq("The letter … by the manager tomorrow.", ["will be written", "will write", "writes", "wrote"], 0),
      tq("An engineer … to know English.", ["is expected", "expects", "is expecting", "expected"], 0),
      tq("'Environmental protection' means …", ["защита окружающей среды", "охрана труда", "защита природы", "экологическая безопасность"], 0)
    ]},
    /* 3 курс · 6 семестр — Passive, Grammar Reference */
    { id: "b_sem6", title: "Контрольная работа №6", subtitle: "3 курс, 2 семестр · Unit 5", year: 3, semester: 2, time: 45, questions: [
      tq("The letter … yesterday.", ["was sent", "is sent", "were sent", "sent"], 0),
      tq("A new school … in our street next year.", ["will be built", "will build", "builds", "is built"], 0),
      tq("The problem … by the engineers now.", ["is being solved", "is solving", "solves", "solved"], 0),
      tq("The work … by 5 o'clock yesterday.", ["had been done", "has been done", "was doing", "did"], 0),
      tq("The students … a test at the moment.", ["are writing", "is writing", "write", "writes"], 0),
      tq("Form a noun from 'inform':", ["information", "informer", "informed", "informing"], 0),
      tq("Form an adjective from 'effect':", ["effective", "effect", "effectively", "effectiveness"], 0),
      tq("Prefix 'un-' + 'important' =", ["unimportant", "inimportant", "imimportant", "disimportant"], 0),
      tq("Prefix 'dis-' + 'connect' =", ["disconnect", "unconnect", "inconnect", "misconnect"], 0),
      tq("Noun from 'apply':", ["application", "applier", "applied", "applying"], 0),
      tq("Verb 'to be' + Participle II forms:", ["Active Voice", "Passive Voice", "Future", "Conditional"], 1),
      tq("'By the end of the year' is used with:", ["Future Perfect", "Future Simple", "Present Perfect", "Past Simple"], 0),
      tq("'For two hours' is used with:", ["Perfect Progressive", "Simple", "Perfect", "Passive"], 0),
      tq("Choose the correct form: He … since morning.", ["has been reading", "has read", "reads", "is reading"], 0),
      tq("Choose the correct form: She … already … the task.", ["has / finished", "have / finished", "is / finishing", "had / finish"], 0),
      tq("A lot of useful goods … at this plant.", ["are produced", "produces", "is produced", "produced"], 0),
      tq("The plant … in 1967.", ["was built", "built", "is built", "has built"], 0),
      tq("The results … on the methods used.", ["depend", "depends", "is depending", "have depended"], 0),
      tq("The unit of measure in metric system … a kilogram.", ["is", "are", "was", "were"], 0),
      tq("This device … to control the temperature.", ["is used", "uses", "used", "using"], 0)
    ]},
    /* 4 курс · 7 семестр — Technical: Materials, Tools, Measurements */
    { id: "b_sem7", title: "Контрольная работа №7", subtitle: "4 курс, 1 семестр · Technical English", year: 4, semester: 1, time: 45, questions: [
      tq("Which material is lightweight and corrosion-resistant?", ["Aluminium", "Cast iron", "Steel", "Ceramic"], 0),
      tq("'Ductility' means the ability to:", ["be drawn into wire", "break easily", "resist heat", "conduct electricity"], 0),
      tq("Cast iron is … than steel.", ["more brittle", "stronger", "lighter", "softer"], 0),
      tq("An alloy of iron and carbon is called:", ["steel", "aluminium", "copper", "brass"], 0),
      tq("'Hardness' is the ability to:", ["resist indentation", "bend without breaking", "conduct heat", "stretch"], 0),
      tq("Carbon fibre is:", ["strong and light", "heavy and brittle", "soft and cheap", "transparent"], 0),
      tq("A lathe rotates the:", ["workpiece", "tool", "spindle only", "bed"], 0),
      tq("A milling machine uses:", ["rotary cutters", "a single point tool", "a drill bit only", "a grinding wheel"], 0),
      tq("CNC stands for:", ["Computer Numerical Control", "Central Numerical Center", "Common Numerical Control", "Complex NC"], 0),
      tq("A drill creates:", ["holes", "threads", "flat surfaces", "grooves"], 0),
      tq("Grinding is used for:", ["finishing", "roughing", "drilling", "turning"], 0),
      tq("The tailstock is part of a:", ["lathe", "milling machine", "drill", "grinder"], 0),
      tq("A micrometer is used for:", ["precise outer dimensions", "holes", "angles", "roughness"], 0),
      tq("Accuracy means how close a measurement is to:", ["the true value", "another measurement", "the nominal size", "zero"], 0),
      tq("Ø50 ±0.05 mm means the diameter is between:", ["49.95 and 50.05", "49.5 and 50.5", "50 and 51", "49 and 51"], 0),
      tq("A calliper is used for:", ["outer/inner dimensions", "only depth", "only angles", "only threads"], 0),
      tq("'Tolerance' is the allowed:", ["deviation", "increase", "decrease", "error"], 0),
      tq("A dial indicator measures:", ["runout", "temperature", "hardness", "roughness"], 0),
      tq("'Workpiece' means:", ["заготовка", "деталь", "инструмент", "станок"], 0),
      tq("'Spindle' means:", ["шпиндель", "патрон", "суппорт", "станина"], 0)
    ]},
    /* 4 курс · 8 семестр — CNC, Manufacturing, Safety */
    { id: "b_sem8", title: "Контрольная работа №8", subtitle: "4 курс, 2 семестр · CNC & Manufacturing", year: 4, semester: 2, time: 45, questions: [
      tq("G00 means:", ["rapid positioning", "linear interpolation", "circular interpolation", "work offset"], 0),
      tq("G01 is:", ["linear interpolation", "rapid", "circular CW", "circular CCW"], 0),
      tq("M03 turns the spindle:", ["clockwise", "counterclockwise", "off", "slowly"], 0),
      tq("G90 means:", ["absolute positioning", "incremental", "metric", "inch"], 0),
      tq("M30 is:", ["end of program", "spindle on", "coolant on", "tool change"], 0),
      tq("G21 means:", ["metric units", "inch units", "work offset", "cutter comp"], 0),
      tq("G54 is:", ["work coordinate system", "tool length comp", "spindle speed", "plane selection"], 0),
      tq("M08 is:", ["coolant ON", "coolant OFF", "tool change", "spindle stop"], 0),
      tq("CAD means:", ["Computer-Aided Design", "Computer-Aided Drafting", "Computer-Aided Drawing", "Computer-Aided Development"], 0),
      tq("Facing is done on a:", ["lathe", "mill", "drill", "grinder"], 0),
      tq("Tapping is used to make a:", ["thread", "hole", "groove", "slot"], 0),
      tq("Inspection is done:", ["after machining", "before design", "during CAD", "after shipping"], 0),
      tq("CAM is used to:", ["prepare the CNC program", "make drawings only", "inspect parts", "ship products"], 0),
      tq("Milling is done on a:", ["milling machine", "lathe", "drill press", "grinder"], 0),
      tq("You … wear safety glasses in the workshop.", ["must", "might", "can", "could"], 0),
      tq("You … leave the chuck key in the chuck.", ["must not", "should", "can", "may"], 0),
      tq("Chips must be removed:", ["with a brush or hook", "by hand", "with a cloth", "by mouth"], 0),
      tq("PPE stands for:", ["Personal Protective Equipment", "Public Protection Equipment", "Personal Practice Equipment", "Professional Protective Engineering"], 0),
      tq("In case of accident, press the:", ["emergency stop", "start button", "reset button", "coolant button"], 0),
      tq("Loose clothing is dangerous near:", ["rotating parts", "tools on the bench", "the floor", "the light"], 0)
    ]},
    /* 5 курс · 9 семестр — Automation, Electronics, Computer */
    { id: "b_sem9", title: "Контрольная работа №9", subtitle: "5 курс, 1 семестр · Automation", year: 5, semester: 1, time: 45, questions: [
      tq("'Automation' means:", ["автоматизация", "механизация", "роботизация", "компьютеризация"], 0),
      tq("'Sensor' means:", ["датчик", "сенсор", "прибор", "устройство"], 0),
      tq("A device that converts physical information into electrical signals is a:", ["transducer", "sensor", "controller", "actuator"], 0),
      tq("'Feedback' in an automated system is:", ["обратная связь", "подача", "сигнал", "управление"], 0),
      tq("The 'decision element' of an automated system:", ["compares what is going on with what should be", "carries materials", "performs work", "supplies power"], 0),
      tq("'Domotics' means:", ["building automation", "robotics", "electronics", "computing"], 0),
      tq("A CPU is:", ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Common Processing Unit"], 0),
      tq("RAM is:", ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Random Active Memory"], 0),
      tq("ROM is:", ["Read-Only Memory", "Random-Only Memory", "Rapid-Only Memory", "Read-Out Memory"], 0),
      tq("'Hardware' refers to:", ["physical components", "software", "programs", "data"], 0),
      tq("'Software' refers to:", ["programs and data", "physical parts", "CPU only", "RAM only"], 0),
      tq("The Internet was invented in the:", ["1960s", "1980s", "1990s", "2000s"], 0),
      tq("WWW stands for:", ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], 0),
      tq("ISP stands for:", ["Internet Service Provider", "Internet System Provider", "Information Service Provider", "Internal Service Program"], 0),
      tq("A USB flash drive is a:", ["portable storage device", "printer", "monitor", "keyboard"], 0),
      tq("A LAN is a:", ["Local Area Network", "Large Area Network", "Long Area Network", "Logical Area Network"], 0),
      tq("A WAN is a:", ["Wide Area Network", "Wireless Area Network", "World Area Network", "Wide Access Network"], 0),
      tq("Ethernet is a family of:", ["communication protocols", "computers", "cables", "monitors"], 0),
      tq("TCP/IP is a:", ["set of communication protocols", "type of cable", "type of monitor", "type of keyboard"], 0),
      tq("A router is a device that:", ["sends messages between networks", "prints documents", "displays information", "stores data"], 0)
    ]},
    /* 5 курс · 10 семестр — Итоговое повторение */
    { id: "b_sem10", title: "Контрольная работа №10 (итоговая)", subtitle: "5 курс, 2 семестр · Итоговое повторение", year: 5, semester: 2, time: 45, questions: [
      tq("Physics begins with:", ["Galileo", "Newton", "Einstein", "Planck"], 0),
      tq("The first revolutionary novelty in physics was:", ["Planck's quantum constant", "Einstein's relativity", "Rutherford's atom", "Bohr's model"], 0),
      tq("X-rays were discovered by:", ["Rontgen", "Curie", "Bohr", "Einstein"], 0),
      tq("The term automation includes:", ["program, action, sensing, decision, control", "only computers", "only robots", "only sensors"], 0),
      tq("Only four chemical elements are essential for the biosphere:", ["hydrogen, carbon, nitrogen, oxygen", "sulphur, phosphorus, iron, zinc", "carbon, oxygen, iron, calcium", "hydrogen, oxygen, nitrogen, chlorine"], 0),
      tq("'To be located' means:", ["быть расположенным", "быть построенным", "быть разрушенным", "быть известным"], 0),
      tq("'To make a career' means:", ["делать карьеру", "получать образование", "сдавать экзамен", "работать менеджером"], 0),
      tq("'Environmental protection' means:", ["защита окружающей среды", "охрана труда", "защита природы", "экологическая безопасность"], 0),
      tq("A micrometer is used for:", ["precise outer dimensions", "holes", "angles", "roughness"], 0),
      tq("G00 means:", ["rapid positioning", "linear interpolation", "circular interpolation", "work offset"], 0),
      tq("M03 turns the spindle:", ["clockwise", "counterclockwise", "off", "slowly"], 0),
      tq("G54 is:", ["work coordinate system", "tool length comp", "spindle speed", "plane selection"], 0),
      tq("'Sensor' means:", ["датчик", "сенсор", "прибор", "устройство"], 0),
      tq("A CPU is:", ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Common Processing Unit"], 0),
      tq("A LAN is a:", ["Local Area Network", "Large Area Network", "Long Area Network", "Logical Area Network"], 0),
      tq("In case of accident, press the:", ["emergency stop", "start button", "reset button", "coolant button"], 0),
      tq("You … wear safety glasses in the workshop.", ["must", "might", "can", "could"], 0),
      tq("The results of the experiment … discussed yesterday.", ["were", "was", "is", "are"], 0),
      tq("He said he … that film.", ["had seen", "has seen", "saw", "sees"], 0),
      tq("If I had time, I … help you.", ["would", "will", "would have", "am"], 0)
    ]}
  ];

  /* ============================================================
     ИТОГОВЫЕ ЭКЗАМЕНЫ — BASIC (5 лет × 2 варианта)
     ============================================================ */
  window.FINAL_EXAMS.basic = [
    /* 1 курс */
    { id: "final_b_year1", title: "Итоговый экзамен за 1 курс", year: 1, time: 60, variants: [
      { variant: 1, questions: [
        tq("This computer is …", ["me", "my", "mine", "myself"], 2),
        tq("He … a first-year student.", ["am", "is", "are", "be"], 1),
        tq("You will … learn the poem.", ["must", "have to", "can", "may"], 1),
        tq("… I use your phone?", ["May", "Must", "Should", "Ought"], 0),
        tq("This book is … than that one.", ["interesting", "more interesting", "most interesting", "the most interesting"], 1),
        tq("Nizhnekamsk … on the left bank of the Kama.", ["is located", "locates", "is locating", "has located"], 0),
        tq("We … this town last year.", ["visit", "visited", "have visited", "are visiting"], 1),
        tq("I … never … to Kazan.", ["have / been", "has / been", "am / being", "was / be"], 0),
        tq("Form an adjective from 'industry':", ["industrial", "industrious", "industry", "industrially"], 0),
        tq("Translate: 'state border security system'", ["система безопасности государственной границы", "безопасность государственной границы", "государственная граница системы", "система государственной границы"], 0),
        tq("'Infrastructure' means …", ["инфраструктура", "строительство", "промышленность", "транспорт"], 0),
        tq("Nobody … heard about this writer.", ["haven't", "have", "has", "didn't"], 2),
        tq("A lot of useful goods … here.", ["produced", "are produced", "is produced", "produces"], 1),
        tq("Which sentence is correct?", ["The plant is large and modern.", "Is the plant large and modern.", "Large and modern the plant is.", "The plant large is and modern."], 0),
        tq("'To make a career' means …", ["делать карьеру", "получать образование", "сдавать экзамен", "работать менеджером"], 0)
      ]},
      { variant: 2, questions: [
        tq("You can ask … teacher about it.", ["our", "ours", "ourselves", "us"], 0),
        tq("I … a lot of free time every day.", ["have", "has", "am", "is"], 0),
        tq("He … speak English very well.", ["can", "must", "has to", "is"], 0),
        tq("The students … to finish the work by Friday.", ["have", "has", "is", "are"], 0),
        tq("Mathematics is the … subject.", ["important", "more important", "most important", "importanter"], 2),
        tq("The plant … goods to other countries now.", ["exports", "is exporting", "exported", "has exported"], 1),
        tq("They … their work by 5 yesterday.", ["finish", "finished", "had finished", "have finished"], 2),
        tq("Form a noun from 'develop':", ["development", "developer", "developed", "developing"], 0),
        tq("Negative adjective from 'possible':", ["unpossible", "impossible", "inpossible", "dispossible"], 1),
        tq("'To be located' means …", ["быть расположенным", "быть построенным", "быть разрушенным", "быть известным"], 0),
        tq("The biggest industrial enterprises … the petrochemical and tyre plants.", ["is", "are", "was", "has"], 1),
        tq("I don't believe he is … cruel.", ["what", "so", "that", "such"], 2),
        tq("Students … higher education at universities.", ["receive", "receives", "is receiving", "are receiving"], 0),
        tq("Where … Nizhnekamsk located?", ["is", "are", "do", "does"], 0),
        tq("'To be born' means …", ["родиться", "умереть", "учиться", "работать"], 0)
      ]}
    ]},
    /* 2 курс */
    { id: "final_b_year2", title: "Итоговый экзамен за 2 курс", year: 2, time: 60, variants: [
      { variant: 1, questions: [
        tq("I want … a doctor.", ["to be", "being", "be", "been"], 0),
        tq("He enjoys … technical books.", ["to read", "reading", "read", "reads"], 1),
        tq("… English is very important for engineers.", ["To know", "Knowing", "Know", "Knew"], 1),
        tq("We hope … the exam successfully.", ["passing", "to pass", "pass", "passed"], 1),
        tq("We know gravity … on every particle of a body.", ["to act", "acting", "act", "acted"], 0),
        tq("Participle I is formed by adding:", ["-ed", "-ing", "-en", "-ly"], 1),
        tq("The … boy is my brother.", ["playing", "played", "play", "plays"], 0),
        tq("If machine parts are oiled, they … not rust.", ["will", "would", "would have", "are"], 0),
        tq("If I had time, I … help you.", ["will", "would", "would have", "am"], 1),
        tq("'Sovereignty' means …", ["суверенитет", "независимость", "государство", "республика"], 0),
        tq("The capital of Tatarstan is …", ["Kazan", "Nizhnekamsk", "Naberezhny Chelny", "Yelabuga"], 0),
        tq("The state languages are …", ["Tatar and Russian", "Tatar and English", "Russian and English", "Tatar only"], 0),
        tq("'Pollution' means …", ["загрязнение", "очистка", "разрушение", "защита"], 0),
        tq("If they had checked the drawing, they … the mistake.", ["would avoid", "would have avoided", "will avoid", "avoid"], 1),
        tq("About two hundred years ago man … in harmony with nature.", ["lived", "lives", "is living", "has lived"], 0)
      ]},
      { variant: 2, questions: [
        tq("She decided … the university.", ["entering", "to enter", "enter", "entered"], 1),
        tq("They finished … the experiment.", ["to do", "doing", "do", "did"], 1),
        tq("It is important … foreign languages.", ["to study", "studying", "study", "studied"], 0),
        tq("He is interested in … new technologies.", ["to learn", "learning", "learn", "learned"], 1),
        tq("I entered this Institute … higher education.", ["to get", "getting", "get", "got"], 0),
        tq("Participle II is:", ["the 1st form", "the 2nd form", "the 3rd form", "the -ing form"], 2),
        tq("The results … depended on the methods used.", ["obtaining", "obtained", "obtain", "to obtain"], 1),
        tq("If we lower the temperature, the liquid … turn into ice.", ["can", "could", "would have", "had"], 0),
        tq("But for the lack of time we … one more experiment.", ["will carry out", "would carry out", "would have carried out", "carry out"], 1),
        tq("'Population' means …", ["население", "популяция", "поколение", "популярность"], 0),
        tq("The main branches of industry in Tatarstan are …", ["oil and gas extracting, motorcar constructing, chemical production", "agriculture and tourism", "light industry", "food production"], 0),
        tq("Tatarstan is situated in the middle part of …", ["the Volga basin", "the Ural mountains", "the Black Sea", "the Caspian Sea"], 0),
        tq("'Environment' means …", ["окружающая среда", "природа", "экология", "погода"], 0),
        tq("The … of the ozone layer could lead to a catastrophe.", ["destruct", "destruction", "destructive", "destroy"], 1),
        tq("Rapid growth of population … pollution.", ["increase", "increases", "is increasing", "have increased"], 1)
      ]}
    ]},
    /* 3 курс */
    { id: "final_b_year3", title: "Итоговый экзамен за 3 курс", year: 3, time: 60, variants: [
      { variant: 1, questions: [
        tq("He said: 'I live in Kazan.' → He said he … in Kazan.", ["lives", "lived", "is living", "has lived"], 1),
        tq("He asked: 'Are you a student?' → He asked … I was a student.", ["that", "if", "what", "which"], 1),
        tq("The teacher said: 'Open your books.' → The teacher told us … our books.", ["open", "opening", "to open", "opened"], 2),
        tq("If I had more time, I … the book.", ["would read", "will read", "read", "would have read"], 0),
        tq("If they had started earlier, they … the train.", ["would catch", "would have caught", "caught", "catch"], 1),
        tq("The book … published in 2015.", ["is", "was", "were", "are"], 1),
        tq("The results … discussed yesterday.", ["were", "was", "is", "are"], 0),
        tq("The instrument … carefully before use.", ["must be checked", "must check", "must checking", "must to check"], 0),
        tq("The letter … by the manager tomorrow.", ["will be written", "will write", "writes", "wrote"], 0),
        tq("'A global catastrophe' affects …", ["a whole planet", "one country", "a small region", "one city"], 0),
        tq("'Smog' is a mixture of …", ["smoke and fog", "water and air", "dust and rain", "smoke and snow"], 0),
        tq("The ozone layer protects the Earth from …", ["ultraviolet radiation", "meteorites", "solar wind", "magnetic storms"], 0),
        tq("'Environmental protection' means …", ["защита окружающей среды", "охрана труда", "защита природы", "экологическая безопасность"], 0),
        tq("A new school … in our street next year.", ["will be built", "will build", "builds", "is built"], 0),
        tq("The work … by 5 o'clock yesterday.", ["had been done", "has been done", "was doing", "did"], 0)
      ]},
      { variant: 2, questions: [
        tq("She said: 'I have seen this film.' → She said she … that film.", ["has seen", "had seen", "saw", "sees"], 1),
        tq("They asked: 'When will the lesson be over?' → They asked when the lesson … over.", ["will be", "would be", "is", "was"], 1),
        tq("The problem … by the engineers now.", ["is being solved", "is solving", "solves", "solved"], 0),
        tq("If I had more time, I … the book.", ["would read", "will read", "read", "would have read"], 0),
        tq("But for the lack of time we … one more experiment.", ["will carry out", "would carry out", "would have carried out", "carry out"], 1),
        tq("The students … a test at the moment.", ["are writing", "is writing", "write", "writes"], 0),
        tq("A lot of useful goods … at this plant.", ["are produced", "produces", "is produced", "produced"], 0),
        tq("The plant … in 1967.", ["was built", "built", "is built", "has built"], 0),
        tq("Form a noun from 'inform':", ["information", "informer", "informed", "informing"], 0),
        tq("'By the end of the year' is used with:", ["Future Perfect", "Future Simple", "Present Perfect", "Past Simple"], 0),
        tq("'For two hours' is used with:", ["Perfect Progressive", "Simple", "Perfect", "Passive"], 0),
        tq("He said he … that film.", ["had seen", "has seen", "saw", "sees"], 0),
        tq("If I had time, I … help you.", ["would", "will", "would have", "am"], 0),
        tq("The results of the experiment … discussed yesterday.", ["were", "was", "is", "are"], 0),
        tq("The students … higher education at universities.", ["receive", "receives", "is receiving", "are receiving"], 0)
      ]}
    ]},
    /* 4 курс */
    { id: "final_b_year4", title: "Итоговый экзамен за 4 курс", year: 4, time: 60, variants: [
      { variant: 1, questions: [
        tq("Which material is lightweight and corrosion-resistant?", ["Aluminium", "Cast iron", "Steel", "Ceramic"], 0),
        tq("'Ductility' means the ability to:", ["be drawn into wire", "break easily", "resist heat", "conduct electricity"], 0),
        tq("An alloy of iron and carbon is called:", ["steel", "aluminium", "copper", "brass"], 0),
        tq("A lathe rotates the:", ["workpiece", "tool", "spindle only", "bed"], 0),
        tq("A milling machine uses:", ["rotary cutters", "a single point tool", "a drill bit only", "a grinding wheel"], 0),
        tq("CNC stands for:", ["Computer Numerical Control", "Central Numerical Center", "Common Numerical Control", "Complex NC"], 0),
        tq("A micrometer is used for:", ["precise outer dimensions", "holes", "angles", "roughness"], 0),
        tq("Ø50 ±0.05 mm means the diameter is between:", ["49.95 and 50.05", "49.5 and 50.5", "50 and 51", "49 and 51"], 0),
        tq("G00 means:", ["rapid positioning", "linear interpolation", "circular interpolation", "work offset"], 0),
        tq("M03 turns the spindle:", ["clockwise", "counterclockwise", "off", "slowly"], 0),
        tq("G54 is:", ["work coordinate system", "tool length comp", "spindle speed", "plane selection"], 0),
        tq("CAD means:", ["Computer-Aided Design", "Computer-Aided Drafting", "Computer-Aided Drawing", "Computer-Aided Development"], 0),
        tq("Tapping is used to make a:", ["thread", "hole", "groove", "slot"], 0),
        tq("You … wear safety glasses in the workshop.", ["must", "might", "can", "could"], 0),
        tq("In case of accident, press the:", ["emergency stop", "start button", "reset button", "coolant button"], 0)
      ]},
      { variant: 2, questions: [
        tq("Cast iron is … than steel.", ["more brittle", "stronger", "lighter", "softer"], 0),
        tq("'Hardness' is the ability to:", ["resist indentation", "bend without breaking", "conduct heat", "stretch"], 0),
        tq("Carbon fibre is:", ["strong and light", "heavy and brittle", "soft and cheap", "transparent"], 0),
        tq("The tailstock is part of a:", ["lathe", "milling machine", "drill", "grinder"], 0),
        tq("Grinding is used for:", ["finishing", "roughing", "drilling", "turning"], 0),
        tq("G01 is:", ["linear interpolation", "rapid", "circular CW", "circular CCW"], 0),
        tq("G90 means:", ["absolute positioning", "incremental", "metric", "inch"], 0),
        tq("M30 is:", ["end of program", "spindle on", "coolant on", "tool change"], 0),
        tq("G21 means:", ["metric units", "inch units", "work offset", "cutter comp"], 0),
        tq("M08 is:", ["coolant ON", "coolant OFF", "tool change", "spindle stop"], 0),
        tq("A calliper is used for:", ["outer/inner dimensions", "only depth", "only angles", "only threads"], 0),
        tq("'Tolerance' is the allowed:", ["deviation", "increase", "decrease", "error"], 0),
        tq("CAM is used to:", ["prepare the CNC program", "make drawings only", "inspect parts", "ship products"], 0),
        tq("You … leave the chuck key in the chuck.", ["must not", "should", "can", "may"], 0),
        tq("Chips must be removed:", ["with a brush or hook", "by hand", "with a cloth", "by mouth"], 0)
      ]}
    ]},
    /* 5 курс */
    { id: "final_b_year5", title: "Итоговый экзамен за 5 курс", year: 5, time: 60, variants: [
      { variant: 1, questions: [
        tq("Physics begins with:", ["Galileo", "Newton", "Einstein", "Planck"], 0),
        tq("The first revolutionary novelty in physics was:", ["Planck's quantum constant", "Einstein's relativity", "Rutherford's atom", "Bohr's model"], 0),
        tq("X-rays were discovered by:", ["Rontgen", "Curie", "Bohr", "Einstein"], 0),
        tq("The term automation includes:", ["program, action, sensing, decision, control", "only computers", "only robots", "only sensors"], 0),
        tq("'Sensor' means:", ["датчик", "сенсор", "прибор", "устройство"], 0),
        tq("A CPU is:", ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Common Processing Unit"], 0),
        tq("RAM is:", ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Random Active Memory"], 0),
        tq("'Hardware' refers to:", ["physical components", "software", "programs", "data"], 0),
        tq("The Internet was invented in the:", ["1960s", "1980s", "1990s", "2000s"], 0),
        tq("WWW stands for:", ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], 0),
        tq("ISP stands for:", ["Internet Service Provider", "Internet System Provider", "Information Service Provider", "Internal Service Program"], 0),
        tq("A LAN is a:", ["Local Area Network", "Large Area Network", "Long Area Network", "Logical Area Network"], 0),
        tq("A WAN is a:", ["Wide Area Network", "Wireless Area Network", "World Area Network", "Wide Access Network"], 0),
        tq("TCP/IP is a:", ["set of communication protocols", "type of cable", "type of monitor", "type of keyboard"], 0),
        tq("A router is a device that:", ["sends messages between networks", "prints documents", "displays information", "stores data"], 0)
      ]},
      { variant: 2, questions: [
        tq("Only four chemical elements are essential for the biosphere:", ["hydrogen, carbon, nitrogen, oxygen", "sulphur, phosphorus, iron, zinc", "carbon, oxygen, iron, calcium", "hydrogen, oxygen, nitrogen, chlorine"], 0),
        tq("'Feedback' in an automated system is:", ["обратная связь", "подача", "сигнал", "управление"], 0),
        tq("The 'decision element' of an automated system:", ["compares what is going on with what should be", "carries materials", "performs work", "supplies power"], 0),
        tq("'Domotics' means:", ["building automation", "robotics", "electronics", "computing"], 0),
        tq("ROM is:", ["Read-Only Memory", "Random-Only Memory", "Rapid-Only Memory", "Read-Out Memory"], 0),
        tq("'Software' refers to:", ["programs and data", "physical parts", "CPU only", "RAM only"], 0),
        tq("A USB flash drive is a:", ["portable storage device", "printer", "monitor", "keyboard"], 0),
        tq("Ethernet is a family of:", ["communication protocols", "computers", "cables", "monitors"], 0),
        tq("'Environmental protection' means:", ["защита окружающей среды", "охрана труда", "защита природы", "экологическая безопасность"], 0),
        tq("'Automation' means:", ["автоматизация", "механизация", "роботизация", "компьютеризация"], 0),
        tq("'Sensor' means:", ["датчик", "сенсор", "прибор", "устройство"], 0),
        tq("'Workpiece' means:", ["заготовка", "деталь", "инструмент", "станок"], 0),
        tq("'Spindle' means:", ["шпиндель", "патрон", "суппорт", "станина"], 0),
        tq("You … wear safety glasses in the workshop.", ["must", "might", "can", "could"], 0),
        tq("In case of accident, press the:", ["emergency stop", "start button", "reset button", "coolant button"], 0)
      ]}
    ]}
  ];

  /* ============================================================
     TECHNICAL COURSE — те же 10 семестровых и 5 итоговых,
     но с упором на техническую лексику. (Структурно дублирует basic.)
     ============================================================ */
  window.SEMESTER_TESTS.technical = window.SEMESTER_TESTS.basic.map(t => ({
    ...t,
    id: "t_" + t.id,
    title: t.title.replace("Контрольная работа", "Контрольная работа (Technical)"),
    subtitle: t.subtitle.replace("Unit", "Technical · Unit")
  }));

  window.FINAL_EXAMS.technical = window.FINAL_EXAMS.basic.map(f => ({
    ...f,
    id: "t_" + f.id,
    title: f.title.replace("Итоговый экзамен", "Итоговый экзамен (Technical)")
  }));

  console.log("[semester-tests.js] loaded: 10 semester + 5 final exams × 2 variants for basic & technical");
})();
