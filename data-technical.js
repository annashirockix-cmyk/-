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

  window.MDK_DATA["technical"] = {
    id: "technical",
    shortName: "Technical English",
    title: "Technical English (SPO)",
    module: "English for Specific Purposes · B1–B2",
    sections: [
      {
        code: "Section 1",
        title: "Engineering Fundamentals",
        topics: [
          topic("t-materials", "Topic 1.1", "Materials & Properties",
            [
              lec("1.1.1", "Types of Materials", `
                <h2>Metals</h2>
                <p><b>Steel</b> — an alloy of iron and carbon, widely used in construction and machine-building. <b>Cast iron</b> — iron with a high carbon content, brittle but resistant to wear. <b>Aluminium</b> — lightweight, corrosion-resistant. <b>Copper</b> — an excellent conductor of electricity.</p>
                <h2>Non-metals</h2>
                <p><b>Plastics</b> — lightweight, corrosion-resistant, used in many industries. <b>Ceramics</b> — hard, heat-resistant. <b>Rubber</b> — elastic, used for seals and gaskets. <b>Glass</b> — transparent, brittle.</p>
                <h2>Composite Materials</h2>
                <p><b>Carbon fibre</b> — strong and lightweight. <b>Fibreglass</b> — corrosion-resistant. <b>Kevlar</b> — high-strength fibres.</p>
              `),
              lec("1.1.2", "Mechanical Properties", `
                <h2>Key Properties</h2>
                <ul>
                  <li><b>strength</b> — способность выдерживать нагрузку</li>
                  <li><b>hardness</b> — твёрдость, сопротивление вдавливанию</li>
                  <li><b>ductility</b> — пластичность, способность вытягиваться в проволоку</li>
                  <li><b>malleability</b> — ковкость, способность деформироваться без разрушения</li>
                  <li><b>brittleness</b> — хрупкость</li>
                  <li><b>elasticity</b> — упругость</li>
                  <li><b>toughness</b> — ударная вязкость</li>
                  <li><b>corrosion resistance</b> — коррозионная стойкость</li>
                </ul>
                <h2>Comparison</h2>
                <p>Steel is <b>stronger</b> than aluminium. Aluminium is <b>lighter</b> than steel. Cast iron is <b>more brittle</b> than steel. Carbon fibre is <b>as strong as</b> steel but much <b>lighter</b>.</p>
              `)
            ],
            [
              prac("P 1.1", "Material Selection", "Compare materials.", "Choose the best material for a machine part. Justify using 3 properties: 1) a shaft (needs strength + toughness), 2) a bearing (needs hardness + wear resistance), 3) an aircraft panel (needs lightness + strength).", ["Variant 1. Shaft.", "Variant 2. Aircraft panel."])
            ],
            [
              selfwork("S 1.1", "Material Properties Table", "Fill in a table: Material | Strength | Hardness | Weight | Cost. Use steel, aluminium, plastic, cast iron.")
            ],
            [
              tq("Which material is lightweight and corrosion-resistant?", ["Aluminium", "Cast iron", "Steel", "Ceramic"], 0),
              tq("'Ductility' means the ability to", ["be drawn into wire", "break easily", "resist heat", "conduct electricity"], 0),
              tq("Cast iron is ___ than steel.", ["more brittle", "stronger", "lighter", "softer"], 0),
              tq("An alloy of iron and carbon is called", ["steel", "aluminium", "copper", "brass"], 0),
              tq("'Hardness' is the ability to", ["resist indentation", "bend without breaking", "conduct heat", "stretch"], 0),
              tq("Carbon fibre is", ["strong and light", "heavy and brittle", "soft and cheap", "transparent"], 0)
            ]
          ),
          topic("t-tools", "Topic 1.2", "Machine Tools",
            [
              lec("1.2.1", "Main Machine Tools", `
                <h2>Lathe</h2>
                <p>The <b>lathe</b> is a machine tool that rotates a workpiece about an axis of rotation to perform various operations such as cutting, sanding, knurling, drilling, or deformation with tools that are applied to the workpiece to create an object with symmetry about that axis.</p>
                <p><b>Main parts:</b> bed, headstock, tailstock, carriage, tool post, spindle.</p>
                <h2>Milling Machine</h2>
                <p>A <b>milling machine</b> uses rotary cutters to remove material from a workpiece. It can machine flat surfaces, slots, grooves, and complex profiles.</p>
                <p><b>Types:</b> vertical, horizontal, universal, CNC milling.</p>
                <h2>Drilling Machine</h2>
                <p>A <b>drill</b> creates holes in a workpiece using a rotating drill bit. Types: pillar drill, radial drill, bench drill.</p>
                <h2>Grinding Machine</h2>
                <p><b>Grinding</b> is used for finishing operations, achieving high precision and smooth surfaces.</p>
                <h2>CNC Machine</h2>
                <p><b>CNC</b> (Computer Numerical Control) machines are controlled by a program, providing high precision and repeatability.</p>
              `)
            ],
            [
              prac("P 1.2", "Machine Tool Choice", "Describe machine tools.", "For each task choose the right machine and explain why: 1) drilling a Ø10 mm hole, 2) turning a Ø50 mm shaft, 3) milling a slot in a plate, 4) grinding a precise surface.", ["Variant 1. Turning.", "Variant 2. Milling."])
            ],
            [
              selfwork("S 1.2", "My Workshop", "Describe the machines in your workshop using 6–8 sentences. Use at least 5 new words.")
            ],
            [
              tq("A lathe rotates the", ["workpiece", "tool", "spindle only", "bed"], 0),
              tq("A milling machine uses", ["rotary cutters", "a single point tool", "a drill bit only", "a grinding wheel"], 0),
              tq("CNC stands for", ["Computer Numerical Control", "Central Numerical Center", "Common Numerical Control", "Complex NC"], 0),
              tq("A drill creates", ["holes", "threads", "flat surfaces", "grooves"], 0),
              tq("Grinding is used for", ["finishing", "roughing", "drilling", "turning"], 0),
              tq("The tailstock is part of a", ["lathe", "milling machine", "drill", "grinder"], 0)
            ]
          ),
          topic("t-measure", "Topic 1.3", "Measurements & Precision",
            [
              lec("1.3.1", "Measuring Tools", `
                <h2>Basic Instruments</h2>
                <p><b>Ruler / steel rule</b> — линейка, accuracy 0.5 mm.</p>
                <p><b>Calliper (vernier calliper)</b> — штангенциркуль, accuracy 0.02–0.1 mm. Used for outer/inner dimensions and depths.</p>
                <p><b>Micrometer</b> — микрометр, accuracy 0.01 mm. Used for precise outer dimensions.</p>
                <p><b>Bore gauge</b> — нутромер, for measuring holes.</p>
                <p><b>Dial indicator</b> — индикатор часового типа, for measuring runout and deviations.</p>
                <h2>Precision</h2>
                <p><b>Accuracy</b> — how close a measurement is to the true value.</p>
                <p><b>Precision</b> — how close repeated measurements are to each other.</p>
                <h2>Tolerances</h2>
                <p><b>Tolerance</b> — the allowed deviation from a nominal dimension. Example: Ø50 ±0.05 mm means the diameter can be between 49.95 and 50.05 mm.</p>
              `)
            ],
            [
              prac("P 1.3", "Measurement Practice", "Choose the right instrument.", "Which instrument would you use for each case: 1) Ø50 ±0.01 mm shaft, 2) hole Ø20 mm, 3) flat surface roughness, 4) depth of a slot 30 mm?", ["Variant 1. Shaft.", "Variant 2. Slot."])
            ],
            [
              selfwork("S 1.3", "Precision vs Accuracy", "Explain the difference between precision and accuracy with a diagram or example.")
            ],
            [
              tq("A micrometer is used for", ["precise outer dimensions", "holes", "angles", "roughness"], 0),
              tq("Accuracy means how close a measurement is to", ["the true value", "another measurement", "the nominal size", "zero"], 0),
              tq("Ø50 ±0.05 means the diameter is between", ["49.95 and 50.05", "49.5 and 50.5", "50 and 51", "49 and 51"], 0),
              tq("A calliper is used for", ["outer/inner dimensions", "only depth", "only angles", "only threads"], 0),
              tq("A dial indicator measures", ["runout", "temperature", "hardness", "roughness"], 0),
              tq("'Tolerance' is the allowed", ["deviation", "increase", "decrease", "error"], 0)
            ]
          )
        ]
      },
      {
        code: "Section 2",
        title: "CNC & Manufacturing",
        topics: [
          topic("t-cnc", "Topic 2.1", "CNC Basics",
            [
              lec("2.1.1", "Introduction to CNC", `
                <h2>What is CNC?</h2>
                <p><b>CNC</b> (Computer Numerical Control) is the automated control of machining tools by means of a computer. A CNC machine processes a piece of material to meet specifications by following coded programmed instructions.</p>
                <h2>Main Components</h2>
                <ul>
                  <li><b>Controller</b> — the computer that reads and executes the program</li>
                  <li><b>Drives</b> — motors that move the axes</li>
                  <li><b>Axes</b> — X, Y, Z (linear), A, B, C (rotary)</li>
                  <li><b>Spindle</b> — rotates the tool or workpiece</li>
                  <li><b>Tool changer</b> — automatic tool change</li>
                  <li><b>Feedback sensors</b> — encoders, linear scales</li>
                </ul>
                <h2>Coordinate Systems</h2>
                <p><b>Machine coordinate system (MCS)</b> — fixed to the machine.</p>
                <p><b>Work coordinate system (WCS)</b> — set by the operator for each workpiece.</p>
                <p><b>G54–G59</b> — work offsets.</p>
              `),
              lec("2.1.2", "G-code Essentials", `
                <h2>Common G-codes</h2>
                <ul>
                  <li><b>G00</b> — rapid positioning</li>
                  <li><b>G01</b> — linear interpolation</li>
                  <li><b>G02 / G03</b> — circular interpolation (CW / CCW)</li>
                  <li><b>G17 / G18 / G19</b> — working plane (XY / XZ / YZ)</li>
                  <li><b>G20 / G21</b> — inch / metric units</li>
                  <li><b>G40 / G41 / G42</b> — cutter radius compensation (off / left / right)</li>
                  <li><b>G43</b> — tool length compensation</li>
                  <li><b>G54–G59</b> — work coordinate system</li>
                  <li><b>G90 / G91</b> — absolute / incremental positioning</li>
                  <li><b>G94 / G95</b> — feed per minute / per revolution</li>
                  <li><b>G96 / G97</b> — constant surface speed / constant RPM</li>
                </ul>
                <h2>Common M-codes</h2>
                <ul>
                  <li><b>M03</b> — spindle ON clockwise</li>
                  <li><b>M04</b> — spindle ON counterclockwise</li>
                  <li><b>M05</b> — spindle STOP</li>
                  <li><b>M06</b> — tool change</li>
                  <li><b>M08 / M09</b> — coolant ON / OFF</li>
                  <li><b>M30</b> — end of program</li>
                </ul>
                <h2>Example Program</h2>
                <pre>%
O1001
N10 G21 G90 G54
N20 G00 X0 Y0 Z5
N30 S1200 M03
N40 G01 Z-2 F150
N50 G01 X50 Y0 F300
N60 G00 Z5
N70 M05
N80 M30
%</pre>
              `)
            ],
            [
              prac("P 2.1", "Read a CNC Program", "Explain each line of the example program.", "For the example program above, explain in English what each block does (N10–N80).", ["Variant 1. Explain G21.", "Variant 2. Explain M30."])
            ],
            [
              selfwork("S 2.1", "G-code Cheat Sheet", "Create a cheat sheet of 10 G-codes and 5 M-codes with English explanations.")
            ],
            [
              tq("G00 means", ["rapid positioning", "linear interpolation", "circular interpolation", "work offset"], 0),
              tq("G01 is", ["linear interpolation", "rapid", "circular CW", "circular CCW"], 0),
              tq("M03 turns the spindle", ["clockwise", "counterclockwise", "off", "slowly"], 0),
              tq("G90 means", ["absolute positioning", "incremental", "metric", "inch"], 0),
              tq("M30 is", ["end of program", "spindle on", "coolant on", "tool change"], 0),
              tq("G21 means", ["metric units", "inch units", "work offset", "cutter comp"], 0),
              tq("G54 is", ["work coordinate system", "tool length comp", "spindle speed", "plane selection"], 0),
              tq("M08 is", ["coolant ON", "coolant OFF", "tool change", "spindle stop"], 0)
            ]
          ),
          topic("t-process", "Topic 2.2", "Manufacturing Processes",
            [
              lec("2.2.1", "From Raw Material to Part", `
                <h2>Basic Steps</h2>
                <ol>
                  <li><b>Design</b> — creating the part using CAD (Computer-Aided Design)</li>
                  <li><b>Process planning</b> — choosing operations, tools, and machines</li>
                  <li><b>Programming</b> — preparing the CNC program (CAM)</li>
                  <li><b>Machining</b> — cutting, turning, milling, drilling, grinding</li>
                  <li><b>Inspection</b> — checking dimensions and quality</li>
                  <li><b>Assembly</b> — joining parts into a product</li>
                </ol>
                <h2>Machining Operations</h2>
                <p><b>Turning</b> — turning a cylindrical surface on a lathe.</p>
                <p><b>Facing</b> — cutting a flat surface perpendicular to the axis.</p>
                <p><b>Drilling</b> — making a hole with a drill.</p>
                <p><b>Milling</b> — cutting using a rotating multi-tooth cutter.</p>
                <p><b>Grinding</b> — finishing with an abrasive wheel.</p>
                <p><b>Tapping</b> — cutting an internal thread.</p>
              `)
            ],
            [
              prac("P 2.2", "Process Chain", "Describe a manufacturing process.", "Choose a simple part (e.g. a flange) and write the manufacturing process in English, step by step, using the vocabulary from the lesson.", ["Variant 1. Shaft.", "Variant 2. Flange."])
            ],
            [
              selfwork("S 2.2", "CAD/CAM/CNC", "Explain the difference between CAD, CAM, and CNC in English (3–4 sentences each).")
            ],
            [
              tq("CAD means", ["Computer-Aided Design", "Computer-Aided Drafting", "Computer-Aided Drawing", "Computer-Aided Development"], 0),
              tq("Facing is done on a", ["lathe", "mill", "drill", "grinder"], 0),
              tq("Tapping is used to make a", ["thread", "hole", "groove", "slot"], 0),
              tq("Inspection is done", ["after machining", "before design", "during CAD", "after shipping"], 0),
              tq("CAM is used to", ["prepare the CNC program", "make drawings only", "inspect parts", "ship products"], 0),
              tq("Milling is done on a", ["milling machine", "lathe", "drill press", "grinder"], 0)
            ]
          ),
          topic("t-safety", "Topic 2.3", "Safety in the Workshop",
            [
              lec("2.3.1", "Workshop Safety Rules", `
                <h2>Personal Protective Equipment (PPE)</h2>
                <ul>
                  <li><b>safety glasses</b> — защитные очки</li>
                  <li><b>safety shoes</b> — защитная обувь</li>
                  <li><b>gloves</b> — перчатки (only for material handling, never near rotating tools)</li>
                  <li><b>ear protection</b> — защита слуха</li>
                  <li><b>overalls</b> — спецодежда</li>
                </ul>
                <h2>Basic Rules</h2>
                <ol>
                  <li>Always wear safety glasses.</li>
                  <li>Do not wear loose clothing or jewellery near rotating parts.</li>
                  <li>Never leave the chuck key in the chuck.</li>
                  <li>Do not remove chips by hand — use a brush or hook.</li>
                  <li>Stop the machine before measuring or changing tools.</li>
                  <li>Keep the workplace clean and tidy.</li>
                  <li>Report any malfunction immediately.</li>
                </ol>
                <h2>Emergency</h2>
                <p>In case of an accident, press the <b>emergency stop</b> button, report to the supervisor, and call for help.</p>
                <h2>Modal Verbs for Rules</h2>
                <p>You <b>must</b> wear PPE. You <b>should</b> keep the area clean. You <b>must not</b> touch rotating parts. You <b>shouldn't</b> leave tools on the machine.</p>
              `)
            ],
            [
              prac("P 2.3", "Safety Poster", "Write safety rules in English.", "Create 6 safety rules for your workshop using 'must', 'should', 'must not', 'shouldn't'.", ["Variant 1. Lathe.", "Variant 2. Milling machine."])
            ],
            [
              selfwork("S 2.3", "Accident Report", "Write a short accident report (5–7 sentences) in English using Past Simple and Passive Voice.")
            ],
            [
              tq("You ___ wear safety glasses in the workshop.", ["must", "might", "can", "could"], 0),
              tq("You ___ leave the chuck key in the chuck.", ["must not", "should", "can", "may"], 0),
              tq("Chips must be removed", ["with a brush or hook", "by hand", "with a cloth", "by mouth"], 0),
              tq("PPE stands for", ["Personal Protective Equipment", "Public Protection Equipment", "Personal Practice Equipment", "Professional Protective Engineering"], 0),
              tq("In case of accident, press the", ["emergency stop", "start button", "reset button", "coolant button"], 0),
              tq("Loose clothing is dangerous near", ["rotating parts", "tools on the bench", "the floor", "the light"], 0)
            ]
          )
        ]
      }
    ],
    videos: [], passports: [], safety: [], formatting: {},

    flashcards: {
      technical: [
        { front: "lathe", back: "токарный станок", transcription: "/leɪð/" },
        { front: "milling machine", back: "фрезерный станок", transcription: "/ˈmɪlɪŋ məˈʃiːn/" },
        { front: "spindle", back: "шпиндель", transcription: "/ˈspɪndl/" },
        { front: "chuck", back: "патрон", transcription: "/tʃʌk/" },
        { front: "tool post", back: "резцедержатель", transcription: "/tuːl pəʊst/" },
        { front: "tailstock", back: "задняя бабка", transcription: "/ˈteɪlstɒk/" },
        { front: "carriage", back: "суппорт", transcription: "/ˈkærɪdʒ/" },
        { front: "feed", back: "подача", transcription: "/fiːd/" },
        { front: "spindle speed", back: "частота вращения шпинделя", transcription: "/ˈspɪndl spiːd/" },
        { front: "cutting tool", back: "режущий инструмент", transcription: "/ˈkʌtɪŋ tuːl/" },
        { front: "workpiece", back: "заготовка", transcription: "/ˈwɜːkpiːs/" },
        { front: "tolerance", back: "допуск", transcription: "/ˈtɒlərəns/" },
        { front: "accuracy", back: "точность", transcription: "/ˈækjərəsi/" },
        { front: "precision", back: "точность (повторяемость)", transcription: "/prɪˈsɪʒn/" },
        { front: "micrometer", back: "микрометр", transcription: "/maɪˈkrɒmɪtə/" },
        { front: "calliper", back: "штангенциркуль", transcription: "/ˈkælɪpə/" },
        { front: "dial indicator", back: "индикатор часового типа", transcription: "/ˈdaɪəl ˈɪndɪkeɪtə/" },
        { front: "drill", back: "сверло", transcription: "/drɪl/" },
        { front: "tap", back: "метчик", transcription: "/tæp/" },
        { front: "die", back: "плашка", transcription: "/daɪ/" },
        { front: "thread", back: "резьба", transcription: "/θred/" },
        { front: "groove", back: "канавка", transcription: "/ɡruːv/" },
        { front: "slot", back: "паз", transcription: "/slɒt/" },
        { front: "surface roughness", back: "шероховатость поверхности", transcription: "/ˈsɜːfɪs ˈrʌfnəs/" },
        { front: "hardness", back: "твёрдость", transcription: "/ˈhɑːdnəs/" },
        { front: "strength", back: "прочность", transcription: "/streŋθ/" },
        { front: "ductility", back: "пластичность", transcription: "/dʌkˈtɪləti/" },
        { front: "brittleness", back: "хрупкость", transcription: "/ˈbrɪtlnəs/" },
        { front: "corrosion resistance", back: "коррозионная стойкость", transcription: "/kəˈrəʊʒn rɪˈzɪstəns/" },
        { front: "alloy", back: "сплав", transcription: "/ˈælɔɪ/" },
        { front: "steel", back: "сталь", transcription: "/stiːl/" },
        { front: "cast iron", back: "чугун", transcription: "/kɑːst ˈaɪən/" },
        { front: "aluminium", back: "алюминий", transcription: "/ˌæljəˈmɪniəm/" },
        { front: "copper", back: "медь", transcription: "/ˈkɒpə/" },
        { front: "brass", back: "латунь", transcription: "/brɑːs/" },
        { front: "bronze", back: "бронза", transcription: "/brɒnz/" },
        { front: "composite", back: "композитный материал", transcription: "/ˈkɒmpəzɪt/" },
        { front: "CNC", back: "ЧПУ", transcription: "/ˌsiː en ˈsiː/" },
        { front: "controller", back: "контроллер (УЧПУ)", transcription: "/kənˈtrəʊlə/" },
        { front: "encoder", back: "энкодер (датчик)", transcription: "/enˈkəʊdə/" },
        { front: "servo drive", back: "сервопривод", transcription: "/ˈsɜːvəʊ draɪv/" },
        { front: "linear scale", back: "линейная шкала", transcription: "/ˈlɪniə skeɪl/" },
        { front: "work coordinate system", back: "система координат детали", transcription: "/wɜːk kəʊˈɔːdɪnət ˈsɪstəm/" },
        { front: "machine coordinate system", back: "система координат станка", transcription: "/məˈʃiːn kəʊˈɔːdɪnət ˈsɪstəm/" },
        { front: "tool length compensation", back: "коррекция длины инструмента", transcription: "/tuːl leŋθ ˌkɒmpenˈseɪʃn/" },
        { front: "cutter radius compensation", back: "коррекция радиуса инструмента", transcription: "/ˈkʌtə ˈreɪdiəs ˌkɒmpenˈseɪʃn/" },
        { front: "rapid positioning", back: "ускоренное перемещение", transcription: "/ˈræpɪd pəˈzɪʃənɪŋ/" },
        { front: "linear interpolation", back: "линейная интерполяция", transcription: "/ˈlɪniə ɪnˌtɜːpəˈleɪʃn/" },
        { front: "circular interpolation", back: "круговая интерполяция", transcription: "/ˈsɜːkjələ ɪnˌtɜːpəˈleɪʃn/" },
        { front: "coolant", back: "СОЖ", transcription: "/ˈkuːlənt/" },
        { front: "coolant ON", back: "СОЖ включить", transcription: "/ˈkuːlənt ɒn/" },
        { front: "spindle ON", back: "шпиндель включить", transcription: "/ˈspɪndl ɒn/" },
        { front: "tool change", back: "смена инструмента", transcription: "/tuːl tʃeɪndʒ/" },
        { front: "chips", back: "стружка", transcription: "/tʃɪps/" },
        { front: "coolant", back: "охлаждающая жидкость", transcription: "/ˈkuːlənt/" },
        { front: "safety glasses", back: "защитные очки", transcription: "/ˈseɪfti ˈɡlɑːsɪz/" },
        { front: "gloves", back: "перчатки", transcription: "/ɡlʌvz/" },
        { front: "overalls", back: "спецодежда", transcription: "/ˈəʊvərɔːlz/" },
        { front: "emergency stop", back: "аварийный останов", transcription: "/ɪˈmɜːdʒənsi stɒp/" },
        { front: "inspection", back: "контроль", transcription: "/ɪnˈspekʃn/" },
        { front: "assembly", back: "сборка", transcription: "/əˈsembli/" },
        { front: "CAD", back: "САПР", transcription: "/kæd/" },
        { front: "CAM", back: "САПР ТП", transcription: "/kæm/" }
      ],
      crossword: [
        { word: "LATHE", clue: "Machine tool that rotates the workpiece" },
        { word: "SPINDLE", clue: "Rotating part of the machine tool" },
        { word: "CHUCK", clue: "Device that holds the workpiece on a lathe" },
        { word: "MILLING", clue: "Machining with rotary cutters" },
        { word: "TOLERANCE", clue: "Allowed deviation from nominal size" },
        { word: "MICROMETER", clue: "Precise measuring instrument (0.01 mm)" },
        { word: "DRILL", clue: "Tool that makes holes" },
        { word: "THREAD", clue: "Cut on a bolt or nut" },
        { word: "COOLANT", clue: "Liquid that cools the cutting zone" },
        { word: "SAFETY", clue: "___ glasses, ___ shoes, ___ rules" }
      ]
    }
  };
})();