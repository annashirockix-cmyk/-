"use strict";

window.GLOBAL_DATA = {
  videos: [
    { title: "Isaac Newton – The Force of Genius", description: "Watch a video and complete the gap-fill exercise.", file: "#/videos/newton" },
    { title: "A Glimpse of Britain", description: "Watch a video and answer the quiz questions about the UK.", file: "#/videos/britain" },
    { title: "Basic English Grammar", description: "Overview of English tenses and conditionals.", file: "video/grammar.mp4" },
    { title: "Technical Vocabulary", description: "Learning machine tools and CNC terms.", file: "video/technical.mp4" }
  ],
  
  passports: [
    { title: "English Grammar Guide (PDF)", description: "Comprehensive guide to English tenses, conditionals, and modals.", file: "materials/grammar.pdf" },
    { title: "Technical Vocabulary Dictionary (PDF)", description: "Dictionary of engineering, lathe, and CNC terms.", file: "materials/vocabulary.pdf" },
    { title: "Irregular Verbs List", description: "Complete list of irregular verbs with translations.", file: "materials/irregular_verbs.pdf" }
  ],
  
  safety: [
    { title: "Classroom Safety Rules", description: "General rules for the English classroom and computer use.", file: "rules.pdf" },
    { title: "Workshop Safety Rules", description: "Safety rules for the workshop (in English).", file: "workshop_rules.pdf" }
  ]
};

window.GLOBAL_LESSONS = {
  newton: {
    title: "Isaac Newton - The Force of Genius",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Замените на реальную ссылку
    type: "gap-fill",
    text: `Isaac Newton, a(n) {1}, physicist and astronomer, was one of the scientific geniuses of his day and his work has had a lasting effect on the world we live in.
He was born in England in 1643 and educated at Trinity College, Cambridge where he studied the scientific and philosophical writers that were revolutionizing the world of learning.
It was at Cambridge that Newton produced most of his famous works. In his most influential book, Mathematical Principles of Natural Philosophy, he describes Newton's three laws of {2} and the law of {3}.
His law of gravity explained what had been a mystery to the astronomers of the day: how planets stayed in {4} and did not just spin off into space.
Newton dominated the scientific world of the late 17th and early 18th centuries.
He built the first reflecting {5}.
His other {6} include becoming a member of Parliament, the warden of the Royal Mint and {7} of the Royal {8}, the world's oldest scientific academy.
He was knighted for his {9} to knowledge, becoming Sir Isaac Newton, and died at the age of 84 in 1727.
He was obviously a genius, but Newton modestly claimed that a lot of his work was based on the work of other {10}. He said that if he had seen further, it was by standing on the shoulders of giants.`,
    options: ["gravity", "telescope", "services", "motion", "scientists", "mathematician", "president", "Society", "achievements", "orbit"],
    answers: { 1: "mathematician", 2: "motion", 3: "gravity", 4: "orbit", 5: "telescope", 6: "achievements", 7: "president", 8: "Society", 9: "services", 10: "scientists" }
  },
  britain: {
    title: "A Glimpse of Britain",
    presentationUrl: "Quiz_A_Glimpse_of_Britain.pptx",
    type: "quiz",
    questions: [
      { q: "Who is the current head of state of the UK?", options: ["King William", "Prince Charles", "King Charles III", "Queen Elizabeth II"], correct: 2, explanation: "On 8 September 2022, Prince Charles became King Charles III following the death of Queen Elizabeth II." },
      { q: "The national flag is called the Union Jack.", options: ["True", "False"], correct: 0, explanation: "The Union Jack is the nickname of the national flag of the United Kingdom." },
      { q: "Which king built the Tower of London?", options: ["Henry VIII", "Charles III", "William the Conqueror", "Henry V"], correct: 2, explanation: "The Tower of London was founded toward the end of 1066 as part of the Norman Conquest by William the Conqueror." },
      { q: "What is the name of the tower that is known as Big Ben, after its largest bell?", options: ["Tower of London", "London Bridge Tower", "London Eye", "Elizabeth Tower"], correct: 3, explanation: "Big Ben is the nickname for the Great Bell of the Great Clock of Westminster, and by extension for the clock tower itself, now called Elizabeth Tower." },
      { q: "How far is England from France at the narrowest point?", options: ["92 km", "62 km", "32 km", "20 km"], correct: 2, explanation: "The shortest distance across the English Channel is approximately 32 kilometres (20 miles)." },
      { q: "Which English queen is the song 'Greensleeves' thought to be about?", options: ["Jane Seymour", "Mary I", "Elizabeth I", "Anne Boleyn"], correct: 3, explanation: "It is a common myth that 'Greensleeves' was written by Henry VIII for Anne Boleyn." },
      { q: "What are Beefeaters' iconic hats made from?", options: ["Beaver fur", "Wolf fur", "Fox fur", "Bear fur"], correct: 3, explanation: "The ceremonial hats of the Yeoman Warders (Beefeaters) are made from bear fur." },
      { q: "Who is the patron saint of England?", options: ["St George", "St Andrew", "St David", "St Patrick"], correct: 0, explanation: "St George is the patron saint of England; his feast day is 23 April." },
      { q: "'To be or not to be' is a quotation from which Shakespeare play?", options: ["Romeo and Juliet", "Hamlet", "A Midsummer Night's Dream", "Macbeth"], correct: 1, explanation: "The phrase opens Hamlet's famous soliloquy in the play Hamlet." },
      { q: "Which country gives the Christmas tree on Trafalgar Square to the UK?", options: ["Russia", "The USA", "Finland", "Norway"], correct: 3, explanation: "The Trafalgar Square Christmas tree is given by the city of Oslo, Norway, as a token of gratitude for Britain's support during World War II." },
      { q: "Which famous prehistoric monument can be found in the Salisbury Plain?", options: ["Hadrian's Wall", "Durdle Door", "Stonehenge", "Avebury"], correct: 2, explanation: "Stonehenge is a prehistoric monument in the Salisbury Plain, believed to be at least 4,500 years old." },
      { q: "How many Harry Potter books are there?", options: ["Seven", "Six", "Eight", "Nine"], correct: 0, explanation: "J.K. Rowling wrote seven Harry Potter books, which were adapted into eight films." }
    ]
  }
};
