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

  window.MDK_DATA["technical"] = {
    id: "technical",
    shortName: "Technical English",
    title: "Technical English (ESP, Mechanics & Electronics)",
    module: "English for Specific Purposes · Mechanics & Electronics",
    sections: [
      {
        code: "UNIT 1",
        title: "Materials and Metal Processes",
        topics: [
          topic("t-unit1", "Unit 1", "Materials",
            [
              lec("1.1", "Materials in Mechanical Engineering", `
                <p>A mechanical engineer uses different materials to build machinery or tools. A specific knowledge of materials is required, concerning qualities, properties, costs and general characteristics.</p>
                <p>When a machine or a tool is made, the most suitable material must be chosen by considering its properties, which can be classified as mechanical, thermal, electrical and chemical. The main types of materials used in mechanical engineering are metals, polymer materials, ceramics and composite materials.</p>
                <p>The most commonly used materials are metals, which can be divided into ferrous and non-ferrous. They can be used in their pure form or mixed with other elements. In this second case we have an alloy and it is used to improve some properties of the metals. The most commonly used ferrous metals are iron and alloys which use iron. Because iron is soft and pasty it is not suitable to be used as a structural material, so a small amount of carbon is added to it to make steel alloy.</p>
                <p>Non-ferrous metals contain little or no iron. The most common non-ferrous metals used in mechanics are copper, zinc, tin and aluminium. Some common non-ferrous alloys are brass (formed by mixing copper and zinc), bronze (formed by mixing copper and tin) and other aluminium alloys which are used in the aircraft industry. Other examples of materials used in mechanical engineering are plastic and rubber.</p>
                <p>PVC or polyvinyl chloride is a type of plastic and is used to insulate wires and cables. Rubber is a polymer and its best property is elasticity, as it returns to its original size and shape after deformation. Ceramic materials are good insulators: hard, resistant and strong, but brittle. Composite materials are made up of two or more materials combined to improve their mechanical properties. Concrete is reinforced with steel and is used in building engineering.</p>
              `),
              lec("1.2", "Metal Processes: Casting, Drawing, Forging", `
                <p><b>Casting</b> is a 6,000 year old process. It is the oldest and most well-known technique based on three fundamental steps: moulding, melting and <i>pouring</i>. First the pattern is made to form the mould. Then an empty mould is created, and finally the empty cavity is filled with molten metal which is then left to solidify into the shape. Casting materials are usually <i>metals</i> but can also be plastic, resin or various cold materials for example <i>clay</i>. Casting is usually used for making complex shapes.</p>
                <p><b>Drawing</b> is a manufacturing process for producing wires, bars and <i>tubes</i> by pulling on material through a series of dies until it increases in length. It is divided into two types: sheet metal drawing, and wire, <i>rod</i> and tube drawing. Drawing is usually done at room temperature but it can be performed at elevated temperatures to hot work large wires, rods or hollow sections in order to reduce forces.</p>
                <p><b>Forging</b> is the process by which metal is heated and shaped by a compressive force using a hammer or a press. It is used to produce large quantities of identical parts, such as <i>machine</i> parts in the automobile industry. Cold forging is done at a low temperature using <i>soft</i> metals and plastic. Hot forging is done at a high temperature and makes metal easier to shape without breaking. In the past, forging was done by a blacksmith using a hammer. Nowadays industrial forging is done with <i>hammers</i> powered by a machine.</p>
              `),
              lec("1.3", "Metal Processes: Rolling, Extrusion, Sheet forming", `
                <p><b>Rolling</b> is a metal forming <i>process</i> in which a material (metal, plastic, paper or glass) is passed through a pair of rollers. According to the <i>temperature</i> of material rolled, there is hot rolling or cold rolling.</p>
                <p><b>Extrusion</b> is a process used to produce objects with a fixed cross-sectional profile. A material is pushed or drawn through a die of the desired cross-section. The two main <i>advantages</i> of this process are its ability to create very complex cross-sections and work materials that are brittle. The extrusion process can be done with hot or cold materials. Commonly extruded materials include metals, polymers, <i>ceramics</i>, concrete and foodstuffs. Ceramic can also be formed into shapes via extrusion. Terracotta extrusion is used to produce pipes. Many modern bricks are also manufactured using a brick extrusion process. Extrusion is also used in <i>food</i> processing. Products such as certain pastas, many breakfast cereals, French fries, dry pet food and ready-to-eat snacks are mostly manufactured by extrusion.</p>
              `)
            ],
            [], // Practicals
            [], // SelfWork
            [
              tq("Which material is lightweight and corrosion-resistant?", ["Aluminium", "Cast iron", "Steel", "Ceramic"], 0),
              tq("'Ductility' means the ability to", ["be drawn into wire", "break easily", "resist heat", "conduct electricity"], 0),
              tq("Cast iron is ___ than steel.", ["more brittle", "stronger", "lighter", "softer"], 0),
              tq("An alloy of iron and carbon is called", ["steel", "aluminium", "copper", "brass"], 0),
              tq("What process uses a die to create wires?", ["Drawing", "Casting", "Forging", "Rolling"], 0),
              tq("Which process requires heating metal and shaping it with a press?", ["Forging", "Drawing", "Extrusion", "Rolling"], 0)
            ],
            [
              { code: "W 1.1", title: "Match words with definitions", task: "Match the words with their definitions:\n1 alloy\na a type of plastic used for insulation\n2 steel\nb a combination of different metals\n3 PVC\nc an alloy formed by mixing iron and carbon\n4 concrete\nd an alloy formed by mixing copper and zinc\n5 brass\ne metals containing iron\n6 ferrous materials\nf a composite material used to build houses\n7 ceramic\ng a metal not suitable as structural material\n8 iron\nh a good insulator but brittle" },
              { code: "W 1.2", title: "Answer the questions", task: "Answer the questions based on the text 'Materials':\n1 What is the basic classification of metals?\n2 What are the characteristics of iron?\n3 Why are alloys created?\n4 Which materials are good insulators?\n5 Is steel an alloy? Which metal does it contain?" },
              { code: "W 1.3", title: "Put the words in the correct order", task: "Put the words in the correct order to make complete sentences:\n1 taking their forms / fluid substances / into moulds / solidify\n2 drawing / room temperature / is done at\n3 not essential / heat / is / in the drawing process\n4 in the past / using / forging / a hammer / was done\n5 can be / brittle materials / extrusion / done / with\n6 many / is used / everyday objects / sheet forming / to make" },
              { code: "W 1.4", title: "Summary", task: "Write a summary of the texts following the flow chart:\n- Write about the importance in engineering of having a specific knowledge of materials.\n- List the materials and the main groups used in mechanics.\n- Tell the difference between ferrous and non-ferrous metals.\n- Say what an alloy is and why it is used.\n- Write a list of non-ferrous metals and alloys." }
            ]
          )
        ]
      },
            {
        code: "UNIT 2",
        title: "Technical Drawing",
        topics: [
          topic("t-unit2", "Unit 2", "Technical Drawing",
            [
              lec("2.1", "Technical Drawing and Tools", `
                <p>Technical drawing, also known as drafting, is the act and discipline of composing plans. The main purpose of technical drawing is to describe or explain all the characteristics of a product, giving all the necessary information that will help a manufacturer to produce that component. The visual image should be accurate in terms of dimensions and proportions, and should provide an overall impression of what an object is or does. It is a precise task requiring a high level of skill and suitable engineering tools.</p>
                <p>A drafter is the person who makes a drawing and who requires a wide knowledge of geometry, trigonometry and spatial comprehension, and in all cases must be precise and accurate and give great attention to detail. People who communicate with technical drawings use a visual language and technical standards that define practical symbols, perspectives and units of measurement.</p>
                <p>What are the tools and instruments used by a drafter in manual drafting? A T-square, a protractor, a compass, rulers, and triangles. Paper is also important and can be divided into layout paper, which is thin and fragile, and cartridge paper, which is heavier and more suitable for final drawings. Pencils used in drawing are graded from H to F depending on the hardness. The final drawing is made using a technical pen, graded according to the point, which must maintain the same line width. They are used with a range of stencils to add symbols, letters and patterns to the drawing. Rubbers remove pencils or pen writing when mistakes are found. Correction fluid is used to mask text errors.</p>
              `),
              lec("2.2", "CAD/CAM Systems", `
                <p>Drawing <i>boards</i> and manual drawing are not always precise and rapid: <i>traditional</i> design is usually slow, especially in its revision and <i>modification</i>. For this reason manufacturing firms have replaced manual drawing with computer-aided design (CAD) to carry out functions related to design and production. This computer technology assists the designer in the <i>creation</i>, modification and analysis of a physical object. Nowadays computer <i>software</i> can easily provide a three-dimensional drawing, which allows engineering designers to see how mechanical components may fit together without making models thus saving a lot of time.</p>
                <p>CAD is much <i>faster</i> and more accurate than manual drawing; designs can be quickly modified, reproduced and transmitted <i>electronically</i>. Computer simulated analysis of the model helps experts find problems and <i>defects</i> without building prototypes, in this way saving a lot of money and time. When the design is ready, the CAD system can generate the detailed <i>drawings</i> needed to start product manufacturing.</p>
                <p>When CAD systems are linked to manufacturing equipment controlled by computers, they form an integrated CAD/CAM system. Computer-aided manufacturing (CAM) offers significant <i>advantages</i> over traditional approaches by controlling manufacturing equipment with computers instead of human labour. CAM converts the design of a component into computer language and it gives <i>instructions</i> to the computer regarding machine operations. Thanks to CAD/CAM systems it is possible to eliminate operator errors and <i>reduce</i> manufacturing costs.</p>
              `)
            ],
            [],
            [],
            [
              tq("Technical drawing is needed to...", ["make a scale of the product", "practise pens, rulers and stencils", "let the manufacturer understand the requirements"], 2),
              tq("The drafter needs...", ["some paper and a pencil", "a wide range of technical instruments", "the final product"], 1),
              tq("Paper is chosen considering...", ["what sort of drawing the drafter is going to make", "the pencils he/she is going to use", "the drafter's preference"], 0),
              tq("Pencils are graded according to...", ["hardness", "hardness and colour", "hardness and point"], 0),
              tq("A technical pen...", ["makes regular lines", "maintains the same line width", "draws lines of the same length"], 1),
              tq("CAD helps designers...", ["to draw, modify and correct designs", "to build prototypes", "to manufacture parts"], 0)
            ],
            [
              { code: "W 2.1", title: "Complete the text about CAD/CAM", task: "Complete the text with the words: creation, advantages, boards, drawings, software, defects, faster, instructions, traditional, reduce, modification, electronically.\n\nDrawing (1) ______ and manual drawing are not always precise and rapid: (2) ______ design is usually slow, especially in its revision and (3) ______. For this reason manufacturing firms have replaced manual drawing with computer-aided design (CAD)... This computer technology assists the designer in the (4) ______, modification and analysis... Nowadays computer (5) ______ can easily provide a three-dimensional drawing... CAD is much (6) ______ and more accurate... designs can be quickly modified, reproduced and transmitted (7) ______. Computer simulated analysis... helps experts find problems and (8) ______... the CAD system can generate the detailed (9) ______ needed to start product manufacturing... CAM offers significant (10) ______... it gives (11) ______ to the computer regarding machine operations. Thanks to CAD/CAM systems it is possible to eliminate operator errors and (12) ______ manufacturing costs." },
              { code: "W 2.2", title: "Match sentences with endings", task: "Match each sentence with its ending:\n1 CAD helps designers\na seen from any angle and are easily manipulated.\n2 By using a CAD technology\nb to draw, modify and correct designs.\n3 Unlike manual drawing, CAD\nc the design into computer language.\n4 CAD allows us to save\nd defects can be easily found.\n5 CAD designs can be\ne provides three-dimensional drawings.\n6 CAM is the use of computer software\nf time and money.\n7 The CAM system turns\ng minimise errors and manufacturing costs.\n8 CAD/CAM systems\nh to control machine tools in the manufacturing process." }
            ]
          )
        ]
      },
      {
        code: "UNIT 3",
        title: "Machine Tools",
        topics: [
          topic("t-unit3", "Unit 3", "Machine Tools",
            [
              lec("3.1", "Turning, Shaper, Drilling", `
                <p>The engine lathe is the most important of all the machine tools. It is used to produce external or internal cylindrical surfaces. The piece is held by the machine and is rotated while a cutting tool removes excess metal from the external diameter. Internal turning consists of enlarging and finishing a hole.</p>
                <p>A machine tool uses a power source to modify the shape of metal components of machines. It is a sort of machine used as a tool in the making of other machines. Machine tools were powered in the Middle Ages by humans and animals, and later by the energy captured by waterwheels. After the Industrial Revolution, most machine tools were powered by steam engine and nowadays by electricity. Machine tools can be operated manually, or under automatic control. In the 1960s, computers gave more flexibility to the process. Such machines became known as computerized numerical control (CNC) machines. They could precisely repeat sequences, and could produce much more complex pieces than even the most skilled tool operators.</p>
                <p><b>Shaper:</b> This is a metal-cutting machine used to produce or modify flat surfaces. The cutting tool moves cutting on the forward stroke, with the piece feeding automatically towards the tool during each return stroke. Shapers can be horizontal or vertical.</p>
                <p><b>Drilling machine:</b> It is used to produce circular holes in metal with a twist drill. It also uses a variety of other cutting tools to perform the basic hole-machining operations.</p>
              `),
              lec("3.2", "Milling, Grinding, Press, Band saw", `
                <p><b>Milling machine:</b> This cuts flat metal surfaces. The piece is fed against a rotating cutting tool. Cutters of many shapes and sizes are available for a wide variety of milling operations. Milling machines may be manually operated, mechanically automated, or digitally automated via computer numerical control (CNC).</p>
                <p><b>Grinding machine:</b> This removes excessive material from parts that are brought into contact with a rotating abrasive wheel. Grinding is the most accurate of all the basic machining processes, but also the most time consuming.</p>
                <p><b>Press:</b> This is a machine tool that changes the shape of a workpiece. Historically, metal was shaped by hand using a hammer. Machine presses can be dangerous. Bi-manual controls (controls which require both hands to be on the buttons to operate) are a very good way to prevent accidents.</p>
                <p><b>Band saw:</b> It is a power tool which uses a blade consisting of a continuous band of metal with teeth along one edge. The band usually rides on two wheels rotating in the same plane. Band saws are used for woodworking, metalworking, or for cutting a variety of other materials, and are particularly useful for cutting irregular or curved shapes. A constant flow of liquid is poured over the blade to keep it cool and preventing it from overheating.</p>
              `),
              lec("3.3", "Computer Numerical Control (CNC)", `
                <p>Computer Numerical control (CNC) refers to the automation of machine tools in manufacturing processes. The machines are controlled by computer software which carries out a series of operations automatically. The first NC machines were built in the 1940s and 1950s. They are used to cut and shape products, such as automobile parts that need precise specifications. Parts must be carefully planned and prepared by CNC programmers. First they view the three-dimensional computer aided designed part. Then they calculate where to cut, the speed and shape and select the tools and materials. The CNC programmers translate the planned machine operations into a set of instructions. These instructions are translated into a computer aided manufacturing (CAM) program containing a set of commands for the machine. The commands are a series of numbers which explains where to cut and the position of material. The computer checks all the operations made by the machine tools.</p>
              `)
            ],
            [],
            [],
            [
              tq("A lathe rotates the", ["workpiece", "tool", "spindle only", "bed"], 0),
              tq("A milling machine uses", ["rotary cutters", "a single point tool", "a drill bit only", "a grinding wheel"], 0),
              tq("CNC stands for", ["Computer Numerical Control", "Central Numerical Center", "Common Numerical Control", "Complex NC"], 0),
              tq("A drill creates", ["holes", "threads", "flat surfaces", "grooves"], 0),
              tq("Grinding is used for", ["finishing", "roughing", "drilling", "turning"], 0),
              tq("The tailstock is part of a", ["lathe", "milling machine", "drill", "grinder"], 0)
            ],
            [
              { code: "W 3.1", title: "Match the processes", task: "Read the texts again and write the correct processes that produce the objects listed below:\n1 wires - ______\n2 pasta - ______\n3 sheet - ______\n4 bricks - ______\n5 tubes - ______\n6 rods and bars - ______\n7 golden leaves - ______\n8 machine parts - ______\n9 concrete - ______" },
              { code: "W 3.2", title: "True or False", task: "Read the texts again and decide if the following sentences are true (T) or false (F):\n1 Turning machines remove excess metal from the external diameter and enlarge and finish a hole.\n2 Shapers can only be vertical.\n3 Drilling machines use a twist drill to make circular holes.\n4 Milling machines can only be manually operated.\n5 Grinding machines remove excessive material from parts.\n6 Band saws use a band of metal with teeth to cut various parts.\n7 Presses are not dangerous if operated by both hands." },
              { code: "W 3.3", title: "Put sentences in correct order", task: "Read the text about CNC and put the sentences in the correct order:\na The planned machine operations are translated into a set of instructions.\nb These instructions are translated into a CAM program.\nc The program contains a set of commands for the machine.\nd It is calculated where to cut and tools and materials are selected.\ne The computer checks all the operations made by the machine tools.\nf Programmers view the part in its three-dimensional computer aided design." }
            ]
          )
        ]
      },
            {
        code: "UNIT 4",
        title: "What is Electricity?",
        topics: [
          topic("t-unit4", "Unit 4", "Electricity",
            [
              lec("4.1", "Atoms, Conductors, Semiconductors, Insulators", `
                <p>All substances, solids, liquids or gases, are composed of one or more of the chemical elements. Each element is composed of identical atoms. Each atom is composed of a small central nucleus consisting of protons and neutrons around which orbit shells of electrons. These electrons are very much smaller than protons and neutrons. The electrons in the outermost shell are called valence electrons and the electrical properties of the substance depend on the number of these electrons. Neutrons have no electric charge, but protons have a positive charge while electrons have a negative charge. In some substances, usually metals, the valence electrons are free to move from one atom to another and this is what constitutes an electric current.</p>
                <p><b>Conductors:</b> Electricity needs a material which allows a current to pass through easily, which offers little <i>resistance</i> to the flow and is full of free electrons. This material is called a conductor and can be in the form of a bar, tube or sheet. The most commonly used <i>conductors</i> are wires, available in many sizes and thicknesses. They are coated with insulating materials such as plastic.</p>
                <p><b>Semiconductors:</b> Semiconductors such as silicon and germanium are used in transistors and their conductivity is halfway in between a conductor and an <i>insulator</i>. Small quantities of other substances, called impurities, are introduced in the material to <i>increase</i> the conductivity.</p>
                <p><b>Insulators:</b> A material which contains very <i>few</i> free electrons is called an insulator. Glass, rubber, dry wood and <i>plastic</i> resist the flow of electric charge, and as such they are good insulating materials.</p>
              `),
              lec("4.2", "Types of Current and Units", `
                <p>There are two types of current: Direct current (DC) and Alternating current (AC).</p>
                <p>Direct current is a continuous flow of electrons in one direction and it never changes its direction until the power is stopped or switched off.</p>
                <p>Alternating current constantly changes its direction because of the way it is generated. The term 'frequency' is used to indicate how many times the current changes its direction in one second. Alternating current has a great advantage over direct current because it can be transmitted over very long distances through small wires, by making energy high voltage and low current.</p>
                <p>There are several quantities that are important when we are talking about electric current. Volts (V) - so named after the Italian physicist Alessandro Volta - measure the difference of electric potential between two points on a conducting wire. Amperes (A) measure the amount of current flowing through a conductor, that is to say the number of electrons passing a point in a conductor in one second. Coulomb (C) measure the quantity of charge transferred in one second by a steady current of one ampere. Power is the rate at which work is performed and it is measured in watts (W). A Kilowatt (kW), which is equal to one thousand watts, is used to measure the amount of used or available energy. The amount of electrical energy consumed in one hour at the constant rate of one kilowatt is called kilowatt-hour.</p>
              `)
            ],
            [],
            [],
            [
              tq("A flow of electrons moving inside a conductor creates an electric current.", ["True", "False"], 0),
              tq("A generator is used to move the charges.", ["True", "False"], 0),
              tq("Electrons can easily pass through any material.", ["True", "False"], 1),
              tq("Conductors are coated with insulators.", ["True", "False"], 0),
              tq("Impurities are introduced to increase conductivity.", ["True", "False"], 0),
              tq("Insulating materials resist the flow of electrons.", ["True", "False"], 0)
            ],
            [
              { code: "W 4.1", title: "Complete the sentences", task: "Complete the sentences with the missing information:\n1 Elements make up ______.\n2 Identical atoms ______.\n3 Atoms consist of ______ and ______.\n4 Inside ______ there are ______ and ______, while outside ______.\n5 Shells ______.\n6 Valence electrons ______.\n7 Neutrons do not have ______.\n8 Electricity is generated when ______." },
              { code: "W 4.2", title: "True or False", task: "Decide if the statements are true (T) or false (F), then correct the false ones:\n1 A flow of electrons moving inside a conductor creates an electric current.\n2 A generator is used to move the charges.\n3 Electrons can easily pass through any material.\n4 Any material is a good conductor.\n5 Conductors are coated with insulators.\n6 The presence of free electrons affects the conductivity of materials.\n7 Impurities are introduced to increase conductivity.\n8 Insulating materials resist the flow of electrons." },
              { code: "W 4.3", title: "Complete the table", task: "Complete the table with the missing information:\n1. Unit of measurement: ______. What does it measure? The number of electrons passing a given point in a conductor in one second.\n2. Unit of measurement: ______. What does it measure? The quantity of electricity transferred by a steady current of one ampere.\n3. Unit of measurement: ______. What does it measure? The amount of electric energy used.\n4. Unit of measurement: ______. What does it measure? The difference of potential between two points on a conductor.\n5. Unit of measurement: ______. What does it measure? Rate at which work is done." }
            ]
          )
        ]
      },
      {
        code: "UNIT 5",
        title: "Electric Circuits",
        topics: [
          topic("t-unit5", "Unit 5", "Electric Circuits",
            [
              lec("5.1", "Circuit Components", `
                <p>An electric circuit or network is a pathway through which the electric current can flow. A simple circuit consists of a power source, two conducting wires, each one attached to a terminal of the source and a device through which electricity can flow. This device is called a load and it's attached to the wires. If all the parts are properly connected, the current flows and the lamp lights up. This kind of circuit is called 'closed'.</p>
                <p>On the contrary, if the wires are disconnected the circuit is called 'open' or 'broken'. The circuit can be opened and closed by a device called a switch.</p>
                <p>Loads can turn electrical energy into a more useful form. Some examples are: light bulbs, which change electrical energy into light energy; electric motors, which change electrical energy into mechanical energy; speakers, which change energy into sound.</p>
                <p>The source provides the electrical energy used by the load. It can be a storage battery or a generator. The switch interrupts the current delivered to the load by the source and allows us to control the flow.</p>
                <p>When an abnormally high amount of current passes through a network, you get a short circuit. This may occur when there is a drop in the resistance or a broken insulation. In order to prevent short circuits, it is best to use fuses, which melt when too much current flows through them, interrupting in this way the circuit.</p>
              `),
              lec("5.2", "Series and Parallel Circuits", `
                <p>The <i>components</i> of a circuit can be wired in two different ways: series or parallel. If components are arranged one after another to form a single <i>path</i> between the terminals and the components, the circuit is known as a series circuit. In this type of circuit, the <i>current</i> flows from the negative terminal to the <i>positive</i> terminal, passing through all the other components of the circuit. This means that the <i>amount</i> of energy passing through all the components in the series is the same. The main disadvantage of a series circuit is that when a single component in the path <i>burns out</i>, the entire circuit stops operating (e.g. Christmas tree lights).</p>
                <p>A parallel circuit consists of several paths connecting the different components. Each separate path is called a <i>branch</i> of the circuit. Current from the source divides and flows through the different branches. Unlike series circuits, if one of the components in the parallel circuit burns out, the other paths <i>continue</i> to operate. Parallel circuits are commonly used to connect <i>appliances</i> at home, so that each socket can function independently. For example, you don't have to <i>turn on</i> the light in your room for the TV socket to work.</p>
                <p>A fuse can be added to an electric circuit to protect it from the effects of undue power. This safety device, which is made of a heat-sensitive alloy, is connected in series with the circuit it has to protect. If an excessive amount of current flows through the circuit, the alloy will liquefy and open the circuit. A circuit breaker is fundamental in a house to protect circuits against overloading, overheating and short circuits. The advantage of a circuit breaker is that it can be reset after the overloading by replacing the fuse. A professional electrician should always provide his customers with a map of the electric circuit in the house so that it will be easier to work on it in case of faults.</p>
              `)
            ],
            [],
            [],
            [
              tq("A device which interrupts the circuit is a...", ["load", "switch", "source", "fuse"], 1),
              tq("A circuit in which wires are disconnected is...", ["closed", "broken", "short", "parallel"], 1),
              tq("A device which provides power is a...", ["load", "switch", "source", "fuse"], 2),
              tq("A complete circuit with no breaks is a...", ["closed circuit", "broken circuit", "short circuit", "series circuit"], 0),
              tq("A device which consumes electric power is a...", ["load", "switch", "source", "fuse"], 0),
              tq("A protective device is a...", ["load", "switch", "source", "fuse"], 3)
            ],
            [
              { code: "W 5.1", title: "Match definitions", task: "Match the words with their definitions:\n1 load\na a device which interrupts the circuit\n2 switch\nb a circuit in which wires are disconnected\n3 source\nc a device which provides power\n4 fuse\nd a complete circuit with no breaks at all\n5 closed circuit\ne a device which consumes electric power\n6 broken circuit\nf a protective device" },
              { code: "W 5.2", title: "Answer the questions", task: "Answer the following questions:\n1 What does a simple circuit consist of?\n2 What happens to the lamp in a closed circuit?\n3 Can you name some examples of loads?\n4 What is a generator?\n5 What is the function of a switch?\n6 When does a short circuit occur?\n7 What can we use to prevent short circuits?\n8 How does a fuse work?" },
              { code: "W 5.3", title: "Find synonyms", task: "Read the text and find synonyms for the words below:\n1 excessive: ______\n2 reacting to high temperatures: ______\n3 to melt: ______\n4 loading up: ______\n5 adjusted: ______\n6 clients: ______" }
            ]
          )
        ]
      },
            {
        code: "UNIT 6",
        title: "How Energy is Produced",
        topics: [
          topic("t-unit6", "Unit 6", "Energy Production",
            [
              lec("6.1", "Conventional Power Plants", `
                <p><b>Nuclear power plants:</b> About 10% of the world's electric power is produced by nuclear power plants. Nuclear power requires little fuel and causes much less air pollution than other power plants, but it can cause severe health and environmental problems when accidents occur, with a consequent release of radioactive material. This type of energy is produced by the splitting of atoms of uranium, which releases heat. This process - called fission - produces large amounts of steam, which is used to turn the blades of turbines thus creating energy. The main problems with nuclear power are linked to the location of the power plants, as people are not willing to have these plants near their homes, and the disposal of waste material, which stays radioactive for centuries.</p>
                <p><b>Thermoelectric power plants:</b> They provide about 2/3 of the world's electricity. These plants burn fossil fuels, such as coal, oil or natural gas, which are all non-renewable resources. This means that in the future there will be a limited supply of these resources. The main advantage of thermoelectric power plants is that they are reliable and can meet the demand in peak periods. Electricity is generated by heating water in a boiler to create steam, which is then pressurised and used to turn the blades of giant turbines that produce electricity. These power plants cause environmental pollution because of the combustion of fossil fuels which release carbon dioxide.</p>
                <p><b>Hydroelectric power plants:</b> The energy produced by water can be captured and turned into electricity. The use of a dam on a river allows hydroelectric power plants to store water in an artificial lake, or reservoir. When released, the force of the water spins the blades of giant turbines, which are connected to a generator producing energy. Hydropower is one of the most important renewable energy resources, because it is reliable, efficient and does not pollute the air. Although it has high initial costs, it is cheap to operate. Unfortunately, it has a great impact on the environment, as humans, animals and plants may lose their natural habitats.</p>
              `),
              lec("6.2", "Alternative Power Sources", `
                <p><b>Solar Energy:</b> Sunlight can be directly converted into electricity by solar cells made of silicon. When light strikes the cells, a part of it is absorbed by the semiconductor material. The energy of the absorbed light knocks electrons loose, allowing them to flow freely and produce electricity. The process of converting light (photons) into electricity (voltage) is known as the photo-voltaic process (PV). Solar cells are usually combined into panels and grouped into arrays. Even if the initial costs can be high, the PV system provides an independent, reliable electrical power source. It can produce energy for more than 15 years and its routine maintenance is simple and cheap.</p>
                <p><b>Wind Energy:</b> Wind energy is one of the cheapest renewable technologies available today. The wind turns the blades of giant turbines, producing in this way kinetic energy which is then converted into mechanical power and electricity by a generator. The main disadvantage of wind energy is that there are few suitable wind sites where it is possible to have a constant production of electricity.</p>
                <p><b>Tidal Energy:</b> This alternative power source, which is typically used in coastal areas, turns the potential energy of tides into electricity. Tidal power generators use rising and falling tides in much the same manner as hydroelectric power plants. Large underwater turbines are placed in areas with high tidal movements and are designed to capture the kinetic energy of rising and falling tides. The turbines are driven by the power of the sea both when the tide comes in and when it goes out. The problem with tidal power is that only massive increases in tides can produce energy and there are very few places where this occurs. Moreover, the aquatic ecosystem and the shoreline can be damaged by the changes in the tidal flow.</p>
                <p><b>Geothermal Energy:</b> In the past, people used hot springs for bathing, cooking and heating. Geothermal energy is based on the fact that the Earth is hotter below the surface. The hot water which is stored in the Earth can be brought to the surface and used to drive turbines to produce electricity or it can be piped through houses as heat. This energy is cheap and has a low impact on the environment, but there are few sites where it can be extracted at low cost.</p>
                <p><b>Biomass Energy:</b> Biomass is a renewable energy source deriving from plant material and animal waste. When it is burnt, it releases its chemical energy as heat. Biomass fuels include forest residues (such as dead trees, branches and tree stumps), straw, manure and even municipal solid waste. Biomass energy is a natural process, it is carbon neutral and has low initial costs. It used to be the main source of heating at home in the past and it continues to be highly exploited in the developing world. The main disadvantage of biomass is that it has a smaller potential than other energy sources and requires excellent maintenance skills.</p>
              `)
            ],
            [],
            [],
            [
              tq("Which power plant produces energy by splitting atoms?", ["Nuclear", "Thermoelectric", "Hydroelectric"], 0),
              tq("Which power plant burns coal, oil or gas?", ["Nuclear", "Thermoelectric", "Hydroelectric"], 1),
              tq("Which power plant uses a dam?", ["Nuclear", "Thermoelectric", "Hydroelectric"], 2),
              tq("Which alternative source converts light into electricity?", ["Solar", "Wind", "Tidal"], 0),
              tq("Which alternative source uses blades turned by air?", ["Solar", "Wind", "Tidal"], 1),
              tq("Which alternative source uses rising and falling water?", ["Solar", "Wind", "Tidal"], 2)
            ],
            [
              { code: "W 6.1", title: "True or False", task: "Decide if the following sentences are true (T) or false (F), then correct the false ones:\n1 Nuclear power plants do not produce air pollution at all.\n2 Accidents in nuclear power plants can have terrible consequences for the environment.\n3 Nuclear power plants produce biodegradable waste material.\n4 Thermoelectric power is generated by the combustion of renewable resources.\n5 Thermoelectric power plants are environmentally friendly.\n6 Dams are built on rivers to store water.\n7 The water released from the reservoir flows through the generator.\n8 The only disadvantage of hydropower is its high initial cost." },
              { code: "W 6.2", title: "Match words with definitions", task: "Match the words with their definitions:\n1 array\na a spot where hot water comes up naturally from the ground\n2 kinetic\nb unwanted material left after using\n3 tide\nc a group of things arranged in a particular way\n4 hot spring\nd waste material from animals used as fertiliser\n5 to pipe\ne the process of keeping something in good condition by regularly checking it\n6 manure\nf produced by motion\n7 waste\ng to send a liquid or a gas through a tube\n8 maintenance\nh the regular change in the level of the sea caused by gravitational attraction of the moon and the sun" },
              { code: "W 6.3", title: "Complete the table", task: "Complete the table with missing information about energy types:\nType of energy | How it works | Advantages | Disadvantages\n______ | high initial costs\nWind energy | ______ | ______ | ______\nTidal energy | ______ | ______ | It is a natural process because it exploits the potential energy of tides." }
            ]
          )
        ]
      },
      {
        code: "UNIT 7",
        title: "What is Electronics?",
        topics: [
          topic("t-unit7", "Unit 7", "Electronics",
            [
              lec("7.1", "Main Inventions in Electronics", `
                <p>Electronics is the branch of science which controls electricity in order to convey a signal using semiconductor materials. These signals represent numbers, letters, sounds, pictures, computer instructions or other information. Radio systems were developed to read and understand these signals and in 1920 radio broadcasting started, making it possible for electromagnetic waves to travel long distances. More sophisticated devices were needed during the Second World War and the invention of radar (Radio Detection and Ranging) represented a further step in electronics, making it possible to determine the altitude, direction and speed of moving and fixed objects.</p>
                <p>The invention of television in the 1920s was one of the most revolutionary and popular inventions in history and it showed the importance of electronics in certain branches of industry. For the first time in history it became possible to transmit images and sound over wire circuits.</p>
                <p>The first computer appeared in 1946. This machine, which could solve a wide range of computing problems, was built over a period of three years by a team of American scientists working at the University of Pennsylvania. It was a huge machine weighing almost 50 tons.</p>
                <p>The first transistor was assembled in 1957 by a team of scientists working at the Bell Laboratories in the U.S.A, and it was a real coming of age in the science of electronics because it replaced the use of valves. Transistors are very small, easy to handle, cheap, and they use little power. The silicon chip - which followed the transistor in the 1960s - can contain up to several thousand transistors packed and interconnected in layers beneath the surface. It is really tiny (usually less than one centimetre square and about half a millimetre thick) and it has paved the way to microelectronics.</p>
                <p>Electronics has influenced and improved the way information is stored, processed and distributed. Social and personal life has been deeply affected by these inventions and many financial, business, medical, education and political routines have been speeded up.</p>
              `),
              lec("7.2", "Electronic Circuits", `
                <p>A conventional electronic circuit is made of separate components attached to a base called a printed circuit board (PCB). Before being finalised and manufactured, the electronic circuit must be tested many times on an experimentation board called a breadboard. It consists of a perforated block of plastic with several spring clips connected by copper wires. It doesn't require soldering as its components can be pushed straight into the holes, so it is easy to change connections and replace pieces. It is generally used to create temporary prototypes and experiment with circuit design.</p>
                <p>The integrated circuit, also known as a chip, is one of the most important inventions of the 20th century. Integrated circuits are used in almost all electronic equipment today, for example watches, calculators and microprocessors. It consists of millions of transistors and other electronic components combined to form a complex set on a thin slice of silicon or other semiconductor material. Chips are becoming tinier and tinier and they are produced in large quantities so that costs are reduced. Since signals have to travel a short distance, they work faster, consume less power and generate less heat. They are also more reliable given the limited amount of connections which could fail.</p>
                <p>The microprocessor is the heart of any normal computer: it is a logic integrated circuit chip which can carry out a sequence of operations when it receives instructions from different input devices. As it doesn't contain a large memory, it can't work alone but needs to be supported by other integrated circuits to be connected with peripherals. Most microprocessors are found inside computers and are called the CPU (Central Processing Unit). In order to work properly, the microprocessor needs to receive instructions from a memory chip. These instructions are then decoded, executed and elaborated so as to get the results available. The most sophisticated microprocessors can contain up to 10 million transistors and run 300 million cycles per second. It means that the computer can perform about a billion instructions every second. As technology continues to evolve, microprocessors are becoming tinier and tinier.</p>
              `),
              lec("7.3", "Mobile Phones", `
                <p>A cellular phone (or mobile phone) is designed to give the user freedom of <i>movement</i> while using a telephone. It uses <i>radio</i> signals to communicate between the phone and the <i>base station</i>. The server area is divided into smaller areas called cells and an antenna is placed within each cell and connected by telephone <i>lines</i>. These lines connect cellular phones to one another: a computer selects the antenna closest to the telephone when a call is made. If the phone moves to one serving <i>cell</i> to another, the radio signal is transferred to the actual cell without interrupting the conversation.</p>
                <p>The circuit board is the heart of the system. A chip translates the outgoing and incoming <i>signals</i> from analogue to digital and back from digital to analogue. The <i>microprocessor</i> handles all the functions for the keyboard, the display and the loudspeakers, and it controls the signal to the base station. Other <i>flash</i> memory chips provide storage for the operating system.</p>
                <p>A cellular phone is not only a phone but it provides an incredible amount of functions: store information; use a calculator; send and receive <i>messages</i>; surf the Internet; play simple games; play music, take <i>photos</i> and videos.</p>
              `)
            ],
            [],
            [],
            [
              tq("Electronics uses...", ["semiconductor materials", "only metals", "wood"], 0),
              tq("The first computer appeared in...", ["1946", "1920", "1957"], 0),
              tq("The first transistor replaced...", ["valves", "chips", "computers"], 0),
              tq("A printed circuit board is called...", ["PCB", "CPU", "RAM"], 0),
              tq("A chip is also called...", ["integrated circuit", "transistor", "valve"], 0),
              tq("The brain of a computer is the...", ["microprocessor", "chip", "PCB"], 0)
            ],
            [
              { code: "W 7.1", title: "Complete the table", task: "Complete the table with missing information:\nInvention | Year | Function\n______ | ______ | read and understand electronic signals\nRadar | 1920s | ______\nTelevision | 1920s | ______\nFirst computer | ______ | ______\nTransistor | ______ | ______" },
              { code: "W 7.2", title: "Answer questions", task: "Answer the questions based on the text 'Electronic Circuits':\n1 What is a conventional circuit made of?\n2 What does PCB stand for?\n3 What is a breadboard?\n4 What does a chip consist of?\n5 What is a chip made out of?\n6 What are the advantages of chips compared to conventional electronic circuits?\n7 What is a microprocessor?\n8 How many instructions can computers perform?" },
              { code: "W 7.3", title: "Match definitions", task: "Match the words with their definitions:\n1 prototype\na to convert an electrical signal into another code\n2 perforated\nb the act of joining metallic parts\n3 soldering\nc an original model used to test a circuit or a product\n4 to fail\nd to perform ineffectively\n5 peripheral\ne having a series of holes\n6 to decode\nf an auxiliary device that works with a computer" },
              { code: "W 7.4", title: "True or False", task: "Decide if the statements are true (T) or false (F):\n1 Mobile phones use radio signals to communicate.\n2 The server area is divided into smaller areas called stations.\n3 An antenna is placed every two or three cells.\n4 Communication with a mobile within a cell is independent from the base station.\n5 There are interruptions when you move to one cell to another.\n6 The antenna is the heart of the system.\n7 The signal must be translated.\n8 The flash memory handles all the functions.\n9 Loudspeakers are controlled by the microprocessor.\n10 You can text and send emails with your mobile phone." }
            ]
          )
        ]
      },
            {
        code: "UNIT 8",
        title: "Communication",
        topics: [
          topic("t-unit8", "Unit 8", "Communication",
            [
              lec("8.1", "Means of Transmission", `
                <p><b>Ground transmission:</b> Wires provide a cheap and effective means of communication that was predominant in the past. Wires, which are made out of copper and insulated with plastic, can be single or twisted, and they are used mainly in telephone and computer networks. Coaxial cables consist of an inner conductor insulated with plastic and surrounded by a woven copper shield. They are used in television and radio as these cables can support about 60 channels. The inner copper cable is insulated to protect the wires from bending and crushing and to reduce the noises. Optical fibres are used in place of simple copper wires to carry larger amounts of information. They consist of strands of pure glass as thin as a human hair. Signals travel along fibres with less loss and without any electromagnetic interference. As they permit transmission over longer distances and at a higher speed, they are used in communication systems, in some medical instruments and in a wide variety of sensing devices.</p>
                <p><b>Air transmission:</b> Antennas were invented to capture radio signals and convert them into electrical signals through the receiver. They can also receive electrical signals from the transmitter and convert them into radio signals. These electric devices, which provide information at a cheap rate, are essential to all equipment that uses radio. They are used in systems such as radio and television broadcasting, radar, mobile phones, and satellite communications, for which they are in form of dishes. Satellites are machines launched into space to move around Earth or another celestial body. A communications satellite is basically a station which receives signals in a given frequency and then retransmits them at a different frequency to avoid interference problems. The first satellite was launched by the Soviet Union in 1957. There are different types of satellites: low-orbit satellites, which travel at about 300 km from the Earth and observe the planet, providing accurate information about agriculture, pollution and weather forecasting; medium-altitude satellites, which travel at about 9000-18000 km from the Earth and are used in telecommunications.</p>
              `),
              lec("8.2", "Networks and Topologies", `
                <p>A network is a group of computers linked together. It consists of at least two computers joined by cables on the same desk or same office, but it can also mean thousands of computers across the world. The users of a network can share hardware (scanner, printer, fax machine, etc.), access data in other people's computers and run other programs stored in the network although not installed on their own computer.</p>
                <p>A network consists of: nodes (different computers and devices); a connecting medium (cables or a wireless connection); routers (special computers enabled to send messages); switches (devices which help to select a specific path to follow).</p>
                <p>Networks can be connected in different ways according to the area they cover. A LAN (Local Area Network) is generally located in a limited space, such as a building or a campus. On the contrary, a WAN (Wide Area Network) operates in a larger area and it can reach most of the world, so it could be described as a collection of LANs all over the world. The exchange of information in a network is controlled by communications protocols, which define the formats and rules that computers must follow when talking to one another. Well-known communications protocols are Ethernet, which is a family of protocols used in LANs, and the Internet Protocol Suite, which is used in any computer network.</p>
                <p><b>Network topologies:</b></p>
                <p><b>Bus network:</b> In a bus network all nodes are connected to a common medium, called backbone, as it happens with Christmas lights. Information sent along the pathway travels until the destination is reached. This kind of topology is generally used only for small networks, as it isn't able to connect a large number of computers. The main advantage offered by this topology is that if a computer or device doesn't work, it doesn't affect the others.</p>
                <p><b>Star network:</b> In a star network all nodes are connected to a special central node called the hub. Once it has received a signal, the hub passes it to all the other nodes until it reaches the destination computer. This means that all the computers and devices are joined together. This topology is commonly used in businesses because it can grant rapidity and safety in exchanging data. Thanks to this topology, data is always up-to-date and if a computer doesn't work, it doesn't affect the others. The only disadvantage to it is that if the hub goes down, the whole network doesn't work.</p>
                <p><b>Ring network:</b> In a ring network each node is connected to its left in a circle. There is no central hub that holds all the data, and communication is sent in one direction around the ring through the use of a token. As it requires fewer cables, this topology is less expensive. Nonetheless, because it provides only one pathway among the nodes, a single node failure may isolate all the devices attached to the ring.</p>
                <p><b>Star bus topology:</b> Star bus topology is the most common network topology used today. It combines elements of star and bus topologies to create a more effective network. Computers in a specific area are connected to hubs creating a star, then each hub is connected together along the network backbone. The main advantage of this type of topology is that it can be more easily expanded over time than a bus or a star. On the other hand, this topology is more difficult to configure than the others and if the backbone line breaks, the whole network goes down.</p>
              `)
            ],
            [],
            [],
            [
              tq("Which cable supports about 60 channels?", ["Coaxial", "Optical fibre", "Simple wire"], 0),
              tq("Which cable uses pure glass?", ["Coaxial", "Optical fibre", "Simple wire"], 1),
              tq("Which is used for long-distance transmission in space?", ["Antennas", "Satellites", "Cables"], 1),
              tq("A LAN covers...", ["a limited space", "the whole world", "a country"], 0),
              tq("A WAN covers...", ["a limited space", "a large area/world", "a room"], 1),
              tq("In which topology is there a central hub?", ["Bus", "Star", "Ring"], 1)
            ],
            [
              { code: "W 8.1", title: "Answer questions (Networks)", task: "Answer the following questions based on the text 'Networks':\n1 What does a network consist of?\n2 What is a router?\n3 What is a LAN?\n4 What is a WAN?\n5 What is the function of communications protocols?\n6 What is Ethernet used for?\n7 What are the advantages of using a network?\n8 What are the disadvantages of using a network?" },
              { code: "W 8.2", title: "Complete the table (Topologies)", task: "Complete the table with missing information:\nTopology | Connection | Use | Advantages | Disadvantages\n______ | ______ | small networks | ______ | ______\n______ | Each node is connected to the central hub | ______ | ______ | ______\nring | ______ | ______ | ______ | ______" },
              { code: "W 8.3", title: "True or False", task: "Decide if the statements are true (T) or false (F):\n1 The topology chosen depends only on the location of computers.\n2 All topologies use many cables and are very expensive.\n3 In a bus topology all the buses are connected one after the other.\n4 In a bus topology a server controls the flow of data.\n5 In a star network data is always updated.\n6 The hub doesn't connect printers and other devices in a star topology.\n7 In the ring topology each node is connected to the hub.\n8 In the ring topology if the hub doesn't work, the network goes down.\n9 Star bus topology combines elements of bus and ring topologies.\n10 In a star bus topology a backbone line failure affects the whole network." }
            ]
          )
        ]
      },
      {
        code: "UNIT 9",
        title: "Computer Technology",
        topics: [
          topic("t-unit9", "Unit 9", "Computers",
            [
              lec("9.1", "Hardware and Software", `
                <p>A computer is an electronic device that performs high-speed mathematical or logical operations and executes instructions in a program. Its main functions are to accept and process data to produce results, store information and programs and show results. The main characteristics of these powerful machines are: speed, as they can execute billions of operations per second; high reliability in the elaboration and delivery of data; storage of huge amounts of information.</p>
                <p>A computer consists of hardware and software. The word hardware refers to all the components you can physically see such as the CPU (Central Processing Unit), the internal memory system, the mass storage system, the peripherals (input and output devices) and the connecting system. Software, instead, comprises all the computer programs and related data that provide the instructions for a computer to work properly.</p>
                <p>The CPU is the brains of your computer and consists of ALU (Arithmetic Logic Unit), which carries out the instructions of a program to perform arithmetical and logical operations, and CU (Control Unit), which controls the system and coordinates all the operations. In order to memorise input and output data, there is an internal memory that can be distinguished into volatile and non-volatile. Volatile memory is memory that loses its contents when the computer or hardware device is off. Computer RAM (Random Access Memory) is a good example of volatile memory. It is the main memory of the computer where all data can be stored as long as the machine is on. On the contrary, a non-volatile memory contains information, data and programs that cannot be modified, or can be modified only very slowly and with difficulty. Computer ROM (Read Only Memory), for example, contains essential and permanent information and software which allow the computer to work properly. Memory storage devices are available in different options, sizes and capacities. These devices are extremely useful; they can be rewritten and offer incredible storage capacity, up to 256 GB. They can be magnetic (hard disks), optical (CDs and DVDs) or solid (flash memory cards).</p>
              `),
              lec("9.2", "USB Flash Drives and Types of Computers", `
                <p>A USB flash drive is a flash memory data storage device integrated with a USB (Universal Serial Bus) interface. USB flash drives are removable and rewritable, and they're small enough to be carried in a <i>pocket</i>. These portable drives are faster, have thousands of times more capacity, and are more durable and reliable than CD-ROMs because of their lack of <i>moving</i> parts. Unlike most removable drives, a USB drive does not require rebooting after it's attached, they are very robust and use very little power. They just need to be <i>plugged</i> into a USB port to work and they're compatible with any modern <i>operating system</i> such as Linux, Mac OS X and Windows. A flash drive consists of a small printed circuit <i>board</i> carrying the circuit elements and a USB connector, insulated electrically and protected inside a plastic <i>case</i>. The drive is often used as a <i>backup</i> medium to save data, because it is very user-friendly and it can be carried <i>off-site</i> for safety despite being large enough for several backups. Moreover, flash drives are cheaper and less fragile than many other backup systems. Its only <i>disadvantage</i> is that it can be easily lost because of its size and it's easy for people without a right to data to take illicit backups. Some specially manufactured flash drives are provided with a metal or rubber case designed to be waterproof and almost unbreakable. It's been tested that these flash drives can retain their memory even after being submerged in <i>water</i> put in a washing machine and run over with a car.</p>
                <p><b>Types of computers:</b> When you go to a computer shop, you can find computers for any use, size or capability. 1 <b>Desktop:</b> this is a personal computer intended for regular use at a single location. It's designed to sit on your desk, and as such it consists of a monitor and a tower with extra drives inside. 2 <b>Laptop:</b> this is a portable computer, which integrates all the usual components of a desktop computer into a single unit. Smaller versions of laptops are known as notebooks. It is useful for people who do not have a fixed place to work at. They are lighter and handier than desktop computers, but they also tend to be more expensive. They require an expensive battery that needs to be recharged quite often. 3 <b>Netbook:</b> this is a portable computer, with limited capabilities as compared to standard laptops. It is smaller and lighter, but it also has less processing power than a full-sized laptop. It is useful for people who don't have a fixed place to work at or for those who travel, but still need to surf the Net. They use a battery which needs to be recharged often. 4 <b>Palmtop:</b> this is a small portable computer designed to have large amounts of information close to hand. They are provided with light long-lasting batteries and special operating systems. They don't require any keyboard but use special pens or touch screens to enter data and access information. 5 <b>Mainframe:</b> this is a very large and expensive computer capable of supporting thousands of users at the same time. For this reason, it is used in businesses and it's the centre of computer networks. These super computers, which are usually as big as a large refrigerator, are the most powerful and expensive ones and they're used for jobs which require enormous amounts of calculations, such as weather forecasting, engineering design and economic data processing.</p>
              `),
              lec("9.3", "The Internet", `
                <p>The Internet is a worldwide information system consisting of countless networks and computers, which allow millions of people to share information and data. Thanks to the Internet it is now possible for people all over the world to communicate with one another in a fast and cheap way.</p>
                <p>The Internet was first invented in the 1960s in the USA by the Department of Defence as an internal project to link computers. The Department wanted an extremely safe way of sending messages in case of nuclear attack. It was a British physicist, Sir Timothy Berners-Lee, who used it to make information available to everyone and created the most important media of the 21st century. In 1980 while working at CERN in Geneva - the largest particle physics laboratory in the world - he first thought of using hypertext to share and update information among researchers. Then in 1989-90 he produced a plan to link hypertext to the Internet to create the World Wide Web. He designed and built the first site browser and editor, as well as the first web server called httpd (Hypertext Trader Protocol Deamon). Hypertext are the words or chains of words in a text we can click on to be linked to new sites whose content is related to the words.</p>
                <p>But how does this global system work? It is a network of people and information linked together by telephone lines which are connected to computers. The applications are based on a client/server relationship, in which your computer is the client and a remote computer is the server. All you need to join this system is a computer, a normal telephone line, a modem and an account with an Internet Service Provider (ISP), a company that provides access to the Internet. A user buys a subscription to a service provider, which gives him/her an identifying username, a password and an email address. With a computer and a modem, the user can connect to the service provider's computer which gives access to many services, such as WWW (world wide web), emails and FTP (file transfer protocol).</p>
              `)
            ],
            [],
            [],
            [
              tq("The CPU consists of ALU and...", ["CU", "RAM", "ROM"], 0),
              tq("Which memory loses its contents when the computer is off?", ["RAM", "ROM", "Hard disk"], 0),
              tq("Which memory contains essential and permanent information?", ["RAM", "ROM", "Hard disk"], 1),
              tq("A USB flash drive is...", ["removable", "built-in", "not rewritable"], 0),
              tq("Which computer is the most powerful and expensive?", ["Mainframe", "Laptop", "Palmtop"], 0),
              tq("Who created the World Wide Web?", ["Timothy Berners-Lee", "Bill Gates", "Steve Jobs"], 0)
            ],
            [
              { code: "W 9.1", title: "Complete the table (Components)", task: "Complete the table with missing information:\nComponent (acronym) | Full name / Description | Functions and properties\nhardware | ______ | ______\nsoftware | ______ | ______\nCPU | ______ | ______\nALU | ______ | ______\nCU | ______ | ______\nRAM | ______ | ______\nROM | ______ | ______" },
              { code: "W 9.2", title: "Answer questions (Computers)", task: "Answer the questions based on the text 'Types of computers':\n1 What does a desktop computer consist of?\n2 Are desktop computers designed to be carried around?\n3 Who are laptops useful for?\n4 What is the difference between a netbook and a laptop?\n5 How can you access or enter information on a palmtop?\n6 What are mainframes used for?" },
              { code: "W 9.3", title: "Complete sentences (Internet)", task: "Complete the sentences with the missing information:\n1 The Internet allows people to ______.\n2 In the 1960s, the Internet was used ______.\n3 Thanks to Sir Timothy Berners-Lee ______.\n4 He created the World Wide Web by linking ______.\n5 All you need to access the Internet is ______.\n6 The ISP is ______." }
            ]
          )
        ]
      },
      {
        code: "UNIT 10",
        title: "Automation and Robotics",
        topics: [
          topic("t-unit10", "Unit 10", "Automation",
            [
              lec("10.1", "Automation and Robotics", `
                <p>Mechanisation refers to the process of providing human beings with machinery capable of assisting them with the muscular requirements of work. A further development of mechanisation is represented by automation, which implies the use of control systems and information technologies to reduce the need for both physical and mental work to produce goods.</p>
                <p>Automation has had a great impact on industries over the last century, changing the world economy from industrial jobs to service jobs. In manufacturing, where the process began, automation has meant that the desired results can be obtained through a series of instructions made automatically by the system, which define the actions to be done. Automated manufacturing grants higher consistency and quality, while reducing lead times and handling. It also improves work flow and increases the morale of workers when a good implementation of the automation is made.</p>
                <p>However, the purpose of automation cannot be seen only in terms of a reduction of cost and time; there are several more aspects to be taken into consideration. For example, while it is true that automation offers a higher precision in the manufacturing process, it is also true that it requires skilled workers who can make repairs and manage the machinery.</p>
                <p><b>Robotics:</b> Robotics is a special branch of automation in which the automated machines have certain human features and are used to replace human workers in factory operations. Robots are computer-controlled mechanical devices that are programmed to move, manipulate objects and interact with the environment. Nowadays more and more sophisticated robots are being built to serve various practical purposes, for example in houses, businesses, in the army and for medical appliances for disabled people.</p>
              `),
              lec("10.2", "Sensors", `
                <p>Almost every industrial automated process requires the use of sensors and transducers, which are very advanced devices capable of measuring and sensing the environment and translating physical information (e.g. variations of light, pressure, temperature and position) into electrical signals. The sensor picks up the information to be measured and the transducer converts it into electrical signals that can be directly processed by the control unit of a system.</p>
                <p>Because of the industrial and scientific importance of measuring, sensors are widely used in a variety of fields, such as medicine, engineering, robotics, biology and manufacturing. Traditional machines have difficulty measuring small differences in product size, so sensors can be particularly useful as they can discriminate down to 0,00013 millimetres. They can also detect temperature, humidity and pressure, acquire data and alter the manufacturing process. Sensors are also vital components of advanced machines, such as robots.</p>
                <p>There are two types of sensors: analogue and digital. Analogue sensors operate with data represented by measured voltages or quantities, while digital ones have numeric or digital outputs which can be directly transmitted to computers.</p>
                <p>The sensors usually employed in manufacturing are classified as mechanical, electrical, magnetic and thermal, but they can also be acoustic, chemical, optical and radiation sensors. Moreover, according to their method of sensing, they can be tactile or visual. Tactile sensors are sensitive to touch, force or pressure and they are used to measure and register the interaction between a contact surface and the environment. These sensors are used in innumerable everyday objects, such as lift buttons and lamps which turn on and off by touching the base. Visual sensors, instead, sense the presence, shape and movement of an object optically. They are becoming more and more important in surveillance systems, environment and disaster monitoring and military applications.</p>
              `),
              lec("10.3", "The Optical Mouse", `
                <p>A common example of the application of sensors to everyday objects is the computer mouse. The mechanical mouse has a ball which rotates and translates the <i>motion</i> of our hand into signals that the computer can use.</p>
                <p>Developed in late 1999, the optical mouse is an advanced computer pointing device that uses a light-emitting diode (LED), an <i>optical</i> sensor and a digital signal processor (DSP) in place of the traditional mouse ball and electromechanical transducer. The optical mouse actually uses a tiny <i>camera</i> to take thousands of pictures at a rate of more than 1,000 images per <i>second</i>.</p>
                <p>Optical mice can work on many surfaces without a mouse pad, thanks to an LED that bounces light off the surface it is on onto an optical sensor. The sensor sends each image to a digital signal <i>processor</i> which examines how the patterns have moved since the previous image, determining how far the mouse has moved. The computer then moves the cursor on the screen based on the coordinates received from the mouse. This happens hundreds of times each second, making the cursor appear to move very <i>smoothly</i>.</p>
                <p>The best surfaces reflect but some others, for example a blank sheet of white <i>paper</i>, do not allow the sensor and DSP to work properly because the details are too small to be detected. In addition to LEDs, a recent innovation are laser-based optical mice that detect more surface details compared to LED technology. This results in the ability to use a mouse on almost any surface and to <i>increase</i> the resolution of the image.</p>
              `)
            ],
            [],
            [],
            [
              tq("Mechanisation uses machinery to assist with...", ["muscular requirements", "mental work", "both"], 0),
              tq("Automation reduces the need for...", ["physical work", "mental work", "both physical and mental work"], 2),
              tq("What is the main advantage of automation?", ["higher consistency and quality", "unemployment", "high costs"], 0),
              tq("Sensors translate physical information into...", ["electrical signals", "mechanical signals", "light signals"], 0),
              tq("Which sensors are sensitive to touch?", ["Tactile", "Visual", "Acoustic"], 0),
              tq("The optical mouse uses...", ["LED and sensor", "a ball", "a wheel"], 0)
            ],
            [
              { code: "W 10.1", title: "Match words with definitions", task: "Match the words with their definitions:\n1 manufacturing\na the time between the design of a product and its production\n2 information technologies\nb the amount of confidence that a group of people have\n3 goods\nc a set of tasks performed to complete a procedure\n4 service jobs\nd the process of packing and distributing goods\n5 skilled\ne the industry in which machinery is used to produce goods\n6 morale\nf the development and application of computer systems\n7 unemployment\ng having the knowledge and the ability to do something well\n8 lead times\nh things that are made to be sold\n9 handling\ni jobs in transports, communications, hospitals, energy industry, etc.\n10 work flow\nj the state of not having a job" },
              { code: "W 10.2", title: "Answer questions (Sensors)", task: "Answer the questions based on the text 'Sensors':\n1 What does computer-aided technologies mean?\n2 Which software does CAx include?\n3 What are the current limits of CAx?\n4 Can you name two applications of automation technologies?\n5 How does a homotic house differ from a traditional house?\n6 What are robots used for?" },
              { code: "W 10.3", title: "Match sentences (Mouse)", task: "Match each sentence with its ending:\n1 A mechanical mouse\na the optical mouse was developed.\n2 There are no sensors\nb provide high-resolution images.\n3 In late 1999\nc can reflect light in the same way.\n4 An optical mouse\nd in a mechanical mouse.\n5 A DPS\ne has got a scroll ball mechanism inside.\n6 Not all surfaces\nf uses a light-emitting diode, an optical sensor and a DSP.\n7 Laser-based optical mice\ng is a processor for digital signals." }
            ]
          )
        ]
      },
      {
        code: "UNIT 11",
        title: "Technical Assistance and Maintenance",
        topics: [
          topic("t-unit11", "Unit 11", "Maintenance",
            [
              lec("11.1", "Types of Maintenance", `
                <p>Any machine and device must be controlled regularly in order to avoid the risk of damage or breakdown of single parts due to long usage. Sometimes, if a proper maintenance is not done, a fault could occur, with negative consequences on the production process and on the workers' safety. The primary goal of maintenance is to avoid or mitigate the consequences of failure of equipment. This includes performing routine actions to keep the device in working order and prevent the failure before it actually occurs (preventive maintenance), or fixing equipment after breakdown (corrective maintenance).</p>
                <p>Preventive maintenance is designed to preserve and restore equipment reliability by replacing worn components before they actually fail. It includes maintenance activities such as partial or complete overhauls at specified periods, oil changes and lubrication. The ideal preventive maintenance is a combination of technical, administrative and managerial actions to prevent all equipment failure. If carried out properly, preventive maintenance can extend the life of the equipment.</p>
                <p>Corrective maintenance, sometimes simply called 'repair', is carried out to get equipment working again. It aims at restoring the functionality of a machine so that it can continue to perform its work. This type of maintenance can be very expensive because sometimes equipment needs to be replaced, with substantial costs for the company.</p>
                <p>Generally, maintenance is scheduled according to: the original equipment manufacturer's recommendations; codes and legislation within a country; consultancy advice; previous maintenance; most important measured values and performance indications.</p>
              `),
              lec("11.2", "Auto Maintenance", `
                <p>Cars are not just a luxury item to purchase one day and forget about until something happens. A properly maintained car not only lasts longer, but it is also less likely to break down unexpectedly.</p>
                <p>Auto maintenance describes the act of inspecting or testing the condition of car subsystems (e.g.: engine, brakes, radiator, etc.) and replacing parts and fluids. Thanks to regular maintenance it is possible to ensure the safety, reliability and comfort of a car, while during preventive maintenance, a number of parts are replaced to avoid major damage or for safety reasons.</p>
                <p>Car maintenance is usually scheduled according to different factors, such as the year or model of the car, its driving condition and driver behaviour. When scheduling auto maintenance, car manufacturers recommend keeping in mind some factors that may affect the functionality of car subsystems. Some of these factors are: the number of trips and the distance travelled every day; the exposure to particular climate conditions (extreme hot or cold); long-distance cruising and whether the car has to tow a trailer or other heavy loads.</p>
                <p>Common car maintenance tasks include: car wash; check or replace the engine oil and oil filters; inspect or replace windshield wipers; inspect tyre pressure and wear; check wheel alignment; check, clean or replace battery terminals; inspect or replace brake pads and fluids; inspect or replace air filter; lubricate locks and hinges; check all lights; inspect or replace spark plugs; tighten chassis bolts.</p>
                <p>Some tasks that have equivalent service intervals can be combined into one single service known as a tune-up. In modern cars, where electronics control most of the car's functions, the traditional tune-up has been replaced by incorporated software that takes care of the engine by constantly checking thousands of sensor signals. Completed maintenance services are then recorded in a service book which is very useful for keeping track of the car service history.</p>
              `)
            ],
            [],
            [],
            [
              tq("Preventive maintenance is done...", ["before a failure occurs", "after a breakdown", "only when the machine stops"], 0),
              tq("Corrective maintenance is...", ["repair", "prevention", "inspection"], 0),
              tq("What can be replaced during preventive maintenance?", ["worn components", "the whole machine", "nothing"], 0),
              tq("Car maintenance includes checking...", ["engine oil", "only tyres", "only brakes"], 0),
              tq("A tune-up is a combination of...", ["tasks with equivalent service intervals", "only electrical tasks", "only mechanical tasks"], 0),
              tq("Where are maintenance services recorded?", ["In a service book", "In a notebook", "In a file"], 0)
            ],
            [
              { code: "W 11.1", title: "Match words with definitions", task: "Match the words with their definitions:\n1 fault\na damaged and in poor condition as a result of much use\n2 to mitigate\nb a set of rules about how something must be done\n3 to fix\nc expert advice within a particular field\n4 overhaul\nd applying a greasy substance to reduce friction\n5 worn\ne a break or other defect in a piece of machinery\n6 lubrication\nf to do the necessary work to repair something that doesn't work properly\n7 code\ng to make something less severe or unpleasant\n8 consultancy\nh a careful examination of a machinery or system that must be repaired" },
              { code: "W 11.2", title: "True or False", task: "Take the quiz and check your answers:\n1 Auto maintenance doesn't entail replacing fluids. True/False\n2 It is not possible to do preventive maintenance to cars. True/False\n3 Car maintenance must be scheduled keeping in mind different factors. True/False\n4 The distance travelled every day doesn't affect the functionality of a car. True/False\n5 If a car is exposed to extreme weather conditions it must be checked more often. True/False\n6 It is not possible to replace windshield wipers. True/False\n7 Brake fluid lasts forever. True/False\n8 Car maintenance tasks should never be combined in one single service. True/False" },
              { code: "W 11.3", title: "Answer questions (Maintenance)", task: "Answer the questions based on the text:\n1 Why is maintenance important?\n2 What are the main types of maintenance?\n3 What is the function of preventive maintenance?\n4 Which activities does it include?\n5 What is maintenance called if it occurs after a failure?\n6 Why can corrective maintenance be expensive?" }
            ]
          )
        ]
      },
      {
        code: "UNIT 12",
        title: "Health and Safety at Work",
        topics: [
          topic("t-unit12", "Unit 12", "Safety",
            [
              lec("12.1", "Health and Safety Regulations", `
                <p>Attention must be paid to safety in order to ensure a safe working practice in factories. Workers must be aware of the dangers and risks that exist all around them: two out of every three industrial accidents are caused by individual carelessness. In order to avoid or reduce accidents, both protective and precautionary measures must be followed while working.</p>
                <p>Each country has specific regulations concerning health and safety at work. For example, The Health and Safety at Work Act 1974 is a UK Act of Parliament that establishes the fundamental rules to enforce workplace health, safety and welfare within the United Kingdom.</p>
                <p>The objectives of the Act are: to secure the health, safety and welfare of people at work; to protect people in the work place against risks to health or safety in connection to their work activities; to control the keeping and use of dangerous substances; to control the emission of dangerous gases into the atmosphere.</p>
                <p>The Act defines general duties of employers, employees, suppliers of goods and substances for use at work, and people who manage and maintain work premises. In particular, every employer has to ensure the health, safety and welfare at work of all the employees, visitors, the general public and clients. Employers have to ensure the absence of risk to health in connection with the use, handling or storage of items and substances, as well as provide adequate facilities for a safe working environment. It is also very important to provide employees with proper instructions and training so that they will be able to cope with any problem that may occur at work. Employees, on their part, should always behave responsibly at work and take care of themselves and other people who may be affected by their actions. Moreover, they should cooperate with employers to enable them to perform their duties or requirements under the Act.</p>
              `),
              lec("12.2", "Safety Rules and Equipment", `
                <h3>SAFETY RULES</h3>
                <p><b>MACHINERY:</b> Be sure to understand how to <i>operate</i> every machine you are going to use. Never use machinery when you are in a room alone. Use all the <i>protection</i> required in the place of work. Check that the safety devices are working. If they are not working, ask for them to be repaired immediately. Do not talk to anybody who is operating a machine. <i>Concentration</i> is important at all times. Turn off the electricity before cleaning a machine.</p>
                <p><b>TOOLS:</b> Report any damage to the tools used at work. See that tools are correctly set.</p>
                <p><b>DRESS:</b> Before starting work, wear protective clothing. Always wear safety glasses, <i>gloves</i> and boots when using a machine.</p>
                <p><b>WORKSHOP:</b> Keep the workshop <i>tidy</i>, do not leave rubbish around and do not throw cigarette ends or ashes into the rubbish bin. The area around machines must be kept clear to avoid falling. Tools and protective clothing should be put away when not in use. Clean machines after use with a <i>brush</i> not with your hands.</p>
                <p><b>ACCIDENT PROCEDURES:</b> Make sure you know where to assemble in the event of <i>fire</i> and where the emergency stop buttons are located. Check where the fire extinguishers are in your workplace and how they work, in order to be able to use them in case of fire. Do not shout or run as this can lead to panic, and inform the supervisor immediately if any accident occurs. Never administer <i>first aid</i> unless you have been trained to do so.</p>
                <p><b>Safety equipment:</b> Safety glasses are the most important piece of safety equipment. There are many styles of these, but all share the same features, that is to say impact resistant lenses and side screens to protect against dust. Hearing protection should be worn when working with loud power tools and machinery, in order to protect you from long-term hearing loss. Hard hats are predominantly used in workplace environments such as building sites. They protect the head from injury by falling objects, impact with other objects, debris, bad weather and electric shock. A face shield must be worn when using machinery which gives off sparks or little parts. It is comfortable, can be flipped up when not needed, and will keep most of the flying chips away from your face. When working with chemicals or machinery which makes dust, it is advisable to wear a face mask, to keep these fine particles away from the face. When spraying varnish or paint, a respirator is a better choice, to protect you from any harmful effects of using these chemicals. When working, you should always wear proper clothing, like an overall. Comfortable, long-sleeved shirts and long trousers combined with good safety boots will each provide a layer of protection.</p>
              `)
            ],
            [],
            [],
            [
              tq("What is the main cause of industrial accidents?", ["individual carelessness", "bad machinery", "lack of training"], 0),
              tq("What does the Health and Safety at Work Act regulate?", ["workplace safety", "traffic rules", "education"], 0),
              tq("Who is responsible for providing a safe environment?", ["employers", "employees", "clients"], 0),
              tq("What should be worn when working with loud machinery?", ["Hearing protection", "Safety glasses", "Gloves"], 0),
              tq("What is used to protect the head from falling objects?", ["Hard hat", "Safety glasses", "Face shield"], 0),
              tq("What is used to protect from dust or chemicals?", ["Face mask or respirator", "Gloves", "Boots"], 0)
            ],
            [
              { code: "W 12.1", title: "Match words with definitions", task: "Match the words with their definitions:\n1 precautionary measure\na a responsibility or task that you have to do as part of your job\n2 carelessness\nb to deal effectively with a difficult situation\n3 welfare\nc the buildings and land occupied by a business\n4 duty\nd poor attention to an activity, which results in harm or errors\n5 premises\ne action taken in order to prevent something dangerous from happening\n6 to cope with\nf the health, comfort and well-being of a person or group" },
              { code: "W 12.2", title: "True or False (Safety Rules)", task: "Decide if the following rules are true (T) or false (F), then correct the false ones:\n1 Use machinery only when other people are in the workplace.\n2 People mustn't talk in the workplace.\n3 Turn off electricity after a machine has been cleaned.\n4 Wear safety boots before arriving in a workplace.\n5 Always wear sunglasses when using a machine.\n6 Damaged tools can be dangerous.\n7 Report to the supervisor about damaged equipment.\n8 In case of fire ask the supervisor where the emergency stop buttons are located.\n9 In case of fire shout to catch other people's attention.\n10 Anyone can give first aid in case of an accident." },
              { code: "W 12.3", title: "Put actions in correct order (Fire)", task: "Read the text about fire safety procedures and put the actions in the correct order:\na Close all doors and windows.\nb Do a head count of all staff and visitors.\nc Evacuate your area and check all rooms.\nd Meet the firefighters and give them details about the fire.\ne Save records.\nf Prepare to evacuate.\ng Remain calm and move quickly.\nh Report any people unaccounted for to the supervisor.\ni Rescue any people in immediate danger.\nj Telephone the correct national emergency number.\nk Try to extinguish the fire using appropriate firefighting equipment." }
            ]
          )
        ]
      }
    ],
    videos: [], passports: [
        { title: "Flash on English for Mechanics, Electronics and Technical Assistance (PDF)", description: "Учебное пособие по техническому английскому языку.", file: "Flash_on_English_for_Mechanics.pdf" }
    ], safety: [], formatting: {},
    
    flashcards: {
      technical: [
        { front: "lathe", back: "токарный станок" }, { front: "milling machine", back: "фрезерный станок" },
        { front: "spindle", back: "шпиндель" }, { front: "chuck", back: "патрон" },
        { front: "tool post", back: "резцедержатель" }, { front: "tailstock", back: "задняя бабка" },
        { front: "carriage", back: "суппорт" }, { front: "feed", back: "подача" },
        { front: "workpiece", back: "заготовка" }, { front: "tolerance", back: "допуск" },
        { front: "accuracy", back: "точность" }, { front: "micrometer", back: "микрометр" },
        { front: "calliper", back: "штангенциркуль" }, { front: "drill", back: "сверло" },
        { front: "thread", back: "резьба" }, { front: "hardness", back: "твёрдость" },
        { front: "strength", back: "прочность" }, { front: "alloy", back: "сплав" },
        { front: "steel", back: "сталь" }, { front: "cast iron", back: "чугун" },
        { front: "aluminium", back: "алюминий" }, { front: "copper", back: "медь" },
        { front: "CNC", back: "ЧПУ" }, { front: "controller", back: "контроллер" },
        { front: "sensor", back: "датчик" }, { front: "motor", back: "двигатель" },
        { front: "voltage", back: "напряжение" }, { front: "current", back: "ток" },
        { front: "resistance", back: "сопротивление" }, { front: "circuit", back: "цепь" }
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
