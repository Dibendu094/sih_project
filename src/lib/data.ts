
export type Student = {
  id: string;
  name: string;
  avatar: string;
  grade: number;
  points: number;
  achievements: string[];
  performance: {
    [subject: string]: number;
  };
  progress: { month: string; points: number }[];
};

export type Game = {
  id: string;
  title: string;
  description: string;
  subjects: string[];
  gradeLevels: number[];
  imageId: string;
  duration: number;
  points: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
};

export type Question = {
  text: string;
  options: string[];
  correctAnswer: string;
};

export type Quiz = {
  [key: string]: {
    questions: Question[];
  };
};

export const students: Student[] = [
  {
    id: "student-1",
    name: "Alex Johnson",
    avatar: "user-avatar-2",
    grade: 7,
    points: 1250,
    achievements: ["Math Whiz", "Science Explorer"],
    performance: { Math: 85, Science: 92, History: 78 },
    progress: [
      { month: "Jan", points: 200 },
      { month: "Feb", points: 450 },
      { month: "Mar", points: 700 },
      { month: "Apr", points: 950 },
      { month: "May", points: 1250 },
    ],
  },
  {
    id: "student-2",
    name: "Maria Garcia",
    avatar: "user-avatar-3",
    grade: 8,
    points: 980,
    achievements: ["Code Master"],
    performance: { Math: 90, Science: 88, "Computer Science": 95 },
    progress: [
      { month: "Jan", points: 150 },
      { month: "Feb", points: 300 },
      { month: "Mar", points: 580 },
      { month: "Apr", points: 720 },
      { month: "May", points: 980 },
    ],
  },
  {
    id: "student-3",
    name: "Chen Wei",
    avatar: "user-avatar-4",
    grade: 6,
    points: 1500,
    achievements: ["Top Scorer", "Biology Buff"],
    performance: { Math: 95, Science: 98, English: 85 },
     progress: [
      { month: "Jan", points: 300 },
      { month: "Feb", points: 600 },
      { month: "Mar", points: 900 },
      { month: "Apr", points: 1200 },
      { month: "May", points: 1500 },
    ],
  },
    {
    id: "student-4",
    name: "Samira Khan",
    avatar: "user-avatar-5",
    grade: 9,
    points: 820,
    achievements: ["Physics Phanatic"],
    performance: { Math: 75, Science: 85, Physics: 91 },
     progress: [
      { month: "Jan", points: 100 },
      { month: "Feb", points: 250 },
      { month: "Mar", points: 450 },
      { month: "Apr", points: 600 },
      { month: "May", points: 820 },
    ],
  },
];

export const games: Game[] = [
  {
    id: "math-quiz-challenge",
    title: "Math Quiz Challenge",
    description: "Master arithmetic through epic battles with number monsters.",
    subjects: ["Math"],
    gradeLevels: [6, 12],
    imageId: "game-cover-7",
    duration: 15,
    points: 100,
    difficulty: "Beginner",
  },
  {
    id: "equation-solver-race",
    title: "Equation Solver Race",
    description: "Students solve equations against a timer. Leaderboard shows top performers.",
    subjects: ["Math"],
    gradeLevels: [7, 12],
    imageId: "game-cover-1",
    duration: 10,
    points: 120,
    difficulty: "Intermediate",
  },
  {
    id: "math-puzzle-adventure",
    title: "Math Puzzle Adventure",
    description: "Solve logic puzzles and brainteasers. Unlock levels and badges for each completed puzzle.",
    subjects: ["Math", "Logic"],
    gradeLevels: [6, 10],
    imageId: "game-cover-5",
    duration: 20,
    points: 150,
    difficulty: "Intermediate",
  },
  {
    id: "periodic-table-explorer",
    title: "Periodic Table Explorer",
    description: "Interactive game to learn elements, symbols, and properties. Quiz-style challenges and drag-and-drop matching.",
    subjects: ["Science"],
    gradeLevels: [8, 12],
    imageId: "game-cover-8",
    duration: 15,
    points: 100,
    difficulty: "Intermediate",
  },
  {
    id: "physics-experiment-simulator",
    title: "Physics Playground",
    description: "Explore motion, forces, and energy through interactive experiments.",
    subjects: ["Science"],
    gradeLevels: [9, 10],
    imageId: "game-cover-4",
    duration: 20,
    points: 150,
    difficulty: "Intermediate",
  },
  {
    id: "biology-treasure-hunt",
    title: "Biology Treasure Hunt",
    description: "Match organs, cells, and body systems in a fun “treasure hunt” style. Unlock badges for each completed level.",
    subjects: ["Science"],
    gradeLevels: [6, 10],
    imageId: "game-cover-2",
    duration: 20,
    points: 130,
    difficulty: "Beginner",
  },
  {
    id: "coding-quest",
    title: "Coding Quest",
    description: "Drag-and-drop coding puzzles to learn logic and programming basics. Challenges increase in difficulty as students progress.",
    subjects: ["Computer Science", "Logic"],
    gradeLevels: [6, 12],
    imageId: "game-cover-3",
    duration: 25,
    points: 200,
    difficulty: "Advanced",
  },
    {
    id: "chemistry-lab",
    title: "Chemistry Lab",
    description: "Mix virtual chemicals and discover amazing reactions.",
    subjects: ["Science"],
    gradeLevels: [10, 12],
    imageId: "game-cover-8",
    duration: 25,
    points: 200,
    difficulty: "Advanced",
  },
  {
    id: "logic-puzzle-mania",
    title: "Logic Puzzle Mania",
    description: "Sudoku, pattern recognition, sequences, and riddles. Great for building problem-solving skills.",
    subjects: ["Logic"],
    gradeLevels: [6, 12],
    imageId: "game-cover-9",
    duration: 15,
    points: 100,
    difficulty: "Beginner",
  },
  {
    id: "math-science-trivia",
    title: "Math & Science Trivia",
    description: "Fast-paced quiz game with multiple-choice questions across STEM subjects. Compete with classmates on a leaderboard.",
    subjects: ["STEM", "Math", "Science"],
    gradeLevels: [6, 12],
    imageId: "game-cover-11",
    duration: 10,
    points: 110,
    difficulty: "Intermediate",
  },
  {
    id: "stem-adventure-game",
    title: "STEM Adventure Game",
    description: "Choose-your-own-adventure style game with math and science challenges. Correct answers help the player advance through levels.",
    subjects: ["STEM"],
    gradeLevels: [6, 12],
    imageId: "game-cover-10",
    duration: 30,
    points: 250,
    difficulty: "Advanced",
  },
  {
    id: "speed-calculation-challenge",
    title: "Speed Calculation Challenge",
    description: "Solve as many math problems as possible within a time limit. Earn stars for speed and accuracy.",
    subjects: ["Math"],
    gradeLevels: [6, 10],
    imageId: "game-cover-12",
    duration: 5,
    points: 50,
    difficulty: "Beginner",
  },
  {
    id: "eco-environment-game",
    title: "Eco & Environment Game",
    description: "Learn environmental science concepts by completing interactive missions. Includes quizzes and mini-games about recycling, energy, and ecosystems.",
    subjects: ["Science", "STEM"],
    gradeLevels: [6, 12],
    imageId: "game-cover-6",
    duration: 20,
    points: 140,
    difficulty: "Intermediate",
  },
];

export const quizzes: Quiz = {
  "math-quiz-challenge-math-6": {
    questions: [
      { text: "What is 12 x 8?", options: ["84", "96", "108", "72"], correctAnswer: "96" },
      { text: "Find the missing number: 6, 12, 18, ?, 30", options: ["22", "24", "26", "28"], correctAnswer: "24" },
      { text: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correctAnswer: "6" },
      { text: "What is 3/4 as a decimal?", options: ["0.50", "0.75", "0.25", "0.80"], correctAnswer: "0.75" },
      { text: "A bus travels 60 km in 1 hour. How far will it travel in 3 hours?", options: ["120 km", "150 km", "180 km", "200 km"], correctAnswer: "180 km" },
      { text: "What is the perimeter of a square with a side length of 5 cm?", options: ["15 cm", "20 cm", "25 cm", "30 cm"], correctAnswer: "20 cm" },
      { text: "Solve for x: x - 9 = 15", options: ["24", "6", "16", "25"], correctAnswer: "24" },
      { text: "Which number is a prime number?", options: ["9", "15", "17", "21"], correctAnswer: "17" },
      { text: "What is 20% of 50?", options: ["5", "10", "15", "20"], correctAnswer: "10" },
      { text: "Round 5.67 to the nearest whole number.", options: ["5", "6", "5.7", "5.6"], correctAnswer: "6" },
    ],
  },
  "math-quiz-challenge-math-7": {
    questions: [
      { text: "What is 5x + 3 = 23? Find x.", options: ["3", "4", "5", "6"], correctAnswer: "4" },
      { text: "Solve for y: 2y - 7 = 11.", options: ["7", "8", "9", "10"], correctAnswer: "9" },
      { text: "If a rectangle has a length of 8 and a width of 5, what is its area?", options: ["13", "30", "40", "45"], correctAnswer: "40" },
      { text: "What is the value of π (pi) rounded to two decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], correctAnswer: "3.14" },
      { text: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
      { text: "Convert 0.5 to a fraction.", options: ["1/4", "1/2", "3/4", "2/5"], correctAnswer: "1/2" },
      { text: "What is the next number in the sequence: 2, 5, 8, 11, ...?", options: ["13", "14", "15", "16"], correctAnswer: "14" },
      { text: "How many degrees are in a triangle?", options: ["90", "180", "270", "360"], correctAnswer: "180" },
      { text: "If a t-shirt costs $15 and is on sale for 20% off, what is the sale price?", options: ["$10", "$12", "$13.50", "$3"], correctAnswer: "$12" },
      { text: "Simplify the expression: 3(x + 4) - 2x", options: ["x + 12", "5x + 12", "x + 4", "5x + 4"], correctAnswer: "x + 12" },
    ],
  },
  "math-quiz-challenge-math-8": {
     questions: [
        { text: "How many degrees are in a right angle?", options: ["45", "90", "180", "360"], correctAnswer: "90" },
        { text: "What is the Pythagorean theorem?", options: ["a+b=c", "a² + b² = c²", "E=mc²", "πr²"], correctAnswer: "a² + b² = c²" },
        { text: "Solve for x: 3x - 5 = 10", options: ["3", "4", "5", "6"], correctAnswer: "5" },
        { text: "What is the area of a circle with a radius of 5?", options: ["10π", "15π", "25π", "50π"], correctAnswer: "25π" },
        { text: "What is the slope of the line y = 2x + 3?", options: ["1", "2", "3", "5"], correctAnswer: "2" },
        { text: "Factor the expression: x² - 9", options: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "x(x-9)"], correctAnswer: "(x-3)(x+3)" },
        { text: "What is the probability of flipping a coin and getting heads?", options: ["1/4", "1/3", "1/2", "1"], correctAnswer: "1/2" },
        { text: "If a car travels 120 miles in 2 hours, what is its average speed?", options: ["50 mph", "60 mph", "70 mph", "80 mph"], correctAnswer: "60 mph" },
        { text: "What is |-8|?", options: ["-8", "8", "0", "16"], correctAnswer: "8" },
        { text: "What is 7 cubed (7³)?", options: ["21", "49", "147", "343"], correctAnswer: "343" },
    ],
  },
    "equation-solver-race-math-7": {
    questions: [
      { text: "Solve for x: x + 5 = 12", options: ["5", "6", "7", "8"], correctAnswer: "7" },
      { text: "Solve for y: 3y = 21", options: ["6", "7", "8", "9"], correctAnswer: "7" },
      { text: "Solve for z: z / 4 = 5", options: ["16", "20", "24", "28"], correctAnswer: "20" },
      { text: "Solve for a: 2a - 3 = 7", options: ["4", "5", "6", "7"], correctAnswer: "5" },
      { text: "Solve for b: b/2 + 1 = 5", options: ["6", "8", "10", "12"], correctAnswer: "8" },
      { text: "Solve for c: 4(c + 1) = 20", options: ["3", "4", "5", "6"], correctAnswer: "4" },
      { text: "Solve for d: 10 - d = 3", options: ["5", "6", "7", "8"], correctAnswer: "7" },
      { text: "Solve for e: 5e + 2 = 3e + 8", options: ["1", "2", "3", "4"], correctAnswer: "3" },
      { text: "Solve for f: f^2 = 49", options: ["5", "6", "7", "8"], correctAnswer: "7" },
      { text: "Solve for g: g/3 = g - 6", options: ["7", "8", "9", "10"], correctAnswer: "9" },
    ]
  },
  "math-puzzle-adventure-math-7": {
    questions: [
      { text: "If a hen and a half lay an egg and a half in a day and a half, how many hens does it take to lay 6 eggs in 6 days?", options: ["1 hen", "1.5 hens", "2 hens", "3 hens"], correctAnswer: "1.5 hens" },
      { text: "What has an eye, but cannot see?", options: ["A needle", "A potato", "A storm", "A hurricane"], correctAnswer: "A needle" },
      { text: "I am an odd number. Take away one letter and I become even. What number am I?", options: ["Seven", "Eleven", "One", "Nine"], correctAnswer: "Seven" },
      { text: "A man has a wolf, a goat, and a cabbage. He must cross a river with a boat that can only carry him and one other item. How does he do it?", options: ["Leave wolf and cabbage", "Take goat, return, take wolf, bring goat back, take cabbage, return, take goat", "Take wolf, return, take cabbage, return, take goat", "It's impossible"], correctAnswer: "Take goat, return, take wolf, bring goat back, take cabbage, return, take goat" },
      { text: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ...?", options: ["11", "12", "13", "14"], correctAnswer: "13" },
      { text: "If you have a 3-gallon jug and a 5-gallon jug, how can you measure out exactly 4 gallons?", options: ["Fill 5, pour to 3, empty 3, pour 2 from 5 to 3, fill 5, pour to 3", "Fill 3, pour to 5, fill 3, pour to 5, empty 5, pour 1 from 3 to 5", "It's impossible", "Fill both and pour out 4 gallons"], correctAnswer: "Fill 5, pour to 3, empty 3, pour 2 from 5 to 3, fill 5, pour to 3" },
      { text: "What is the missing number? 8, 6, 7, 5, 6, 4, ?", options: ["2", "3", "5", "6"], correctAnswer: "5" },
      { text: "What has a neck without a head, and a body without legs?", options: ["A bottle", "A shirt", "A snake", "A river"], correctAnswer: "A bottle" },
      { text: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", options: ["A dream", "A map", "A book", "A painting"], correctAnswer: "A map" },
      { text: "What question can you never answer yes to?", options: ["Are you asleep yet?", "Are you lying?", "Is this statement false?", "All of the above"], correctAnswer: "Are you asleep yet?" },
    ]
  },
  "periodic-table-explorer-science-8": {
    questions: [
      { text: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Go", "Gd"], correctAnswer: "Au" },
      { text: "Which element is number 1 on the periodic table?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], correctAnswer: "Hydrogen" },
      { text: "What is the chemical symbol for Iron?", options: ["I", "Ir", "Fe", "In"], correctAnswer: "Fe" },
      { text: "What is the atomic number of Carbon?", options: ["5", "6", "7", "8"], correctAnswer: "6" },
      { text: "Which of these is a noble gas?", options: ["Oxygen", "Nitrogen", "Neon", "Chlorine"], correctAnswer: "Neon" },
      { text: "What is the chemical symbol for Sodium?", options: ["S", "So", "Na", "Nd"], correctAnswer: "Na" },
      { text: "Which element is a halogen?", options: ["Fluorine", "Potassium", "Silicon", "Argon"], correctAnswer: "Fluorine" },
      { text: "What is the chemical symbol for Silver?", options: ["Si", "Sv", "Ag", "Sl"], correctAnswer: "Ag" },
      { text: "What is the atomic mass of Helium (approx.)?", options: ["2", "4", "6", "8"], correctAnswer: "4" },
      { text: "Which element has the symbol 'K'?", options: ["Krypton", "Potassium", "Kryptonite", "Kelvin"], correctAnswer: "Potassium" },
    ]
  },
  "biology-treasure-hunt-science-8": {
    questions: [
      { text: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"], correctAnswer: "Mitochondrion" },
      { text: "What process do plants use to make their own food?", options: ["Respiration", "Transpiration", "Photosynthesis", "Pollination"], correctAnswer: "Photosynthesis" },
      { text: "Which part of the blood carries oxygen?", options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"], correctAnswer: "Red blood cells" },
      { text: "What is the main function of the kidneys?", options: ["Pump blood", "Digest food", "Filter waste from blood", "Produce hormones"], correctAnswer: "Filter waste from blood" },
      { text: "Which of these is a producer in an ecosystem?", options: ["Lion", "Grass", "Mushroom", "Human"], correctAnswer: "Grass" },
      { text: "What type of joint is the knee?", options: ["Ball and socket", "Hinge", "Pivot", "Saddle"], correctAnswer: "Hinge" },
      { text: "What is the largest organ of the human body?", options: ["Liver", "Brain", "Skin", "Heart"], correctAnswer: "Skin" },
      { text: "Which of these is NOT a mammal?", options: ["Whale", "Bat", "Penguin", "Dolphin"], correctAnswer: "Penguin" },
      { text: "What is the name of the green pigment in plants?", options: ["Chlorophyll", "Melanin", "Hemoglobin", "Carotene"], correctAnswer: "Chlorophyll" },
      { text: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Organ"], correctAnswer: "Cell" },
    ],
  },
  "coding-quest-computer science-9": {
    questions: [
        { text: "What does HTML stand for?", options: ["HyperText Markup Language", "High-Level Text Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"], correctAnswer: "HyperText Markup Language" },
        { text: "Which of these is a programming language?", options: ["JPEG", "HTML", "Python", "CSS"], correctAnswer: "Python" },
        { text: "What is a 'bug' in programming?", options: ["A feature", "An error in the code", "A type of comment", "A security measure"], correctAnswer: "An error in the code" },
        { text: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"], correctAnswer: "Cascading Style Sheets" },
        { text: "Which symbol is used for comments in Python?", options: ["//", "/* */", "#", "<!-- -->"], correctAnswer: "#" },
        { text: "What is a 'loop' in programming?", options: ["A way to store data", "A conditional statement", "A piece of code that repeats", "A function"], correctAnswer: "A piece of code that repeats" },
        { text: "Which of the following is NOT a data type?", options: ["String", "Integer", "Variable", "Boolean"], correctAnswer: "Variable" },
        { text: "What is an 'algorithm'?", options: ["A programming language", "A set of rules to solve a problem", "A type of computer hardware", "A software application"], correctAnswer: "A set of rules to solve a problem" },
        { text: "What does 'git' do?", options: ["Runs code", "Styles web pages", "Manages code versions", "A text editor"], correctAnswer: "Manages code versions" },
        { text: "What is the purpose of a 'function'?", options: ["To store a single value", "To group code for reuse", "To create a user interface", "To style text"], correctAnswer: "To group code for reuse" },
    ],
  },
  "physics-experiment-simulator-science-10": {
    questions: [
        { text: "What is Newton's first law of motion?", options: ["Energy is conserved", "Force = mass x acceleration", "An object in motion stays in motion", "For every action, there is an equal and opposite reaction"], correctAnswer: "An object in motion stays in motion" },
        { text: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], correctAnswer: "H2O" },
        { text: "What unit is used to measure electric current?", options: ["Volt", "Watt", "Ohm", "Ampere"], correctAnswer: "Ampere" },
        { text: "What is the formula for calculating work?", options: ["Work = Force / Distance", "Work = Force x Distance", "Work = Mass x Acceleration", "Work = Power x Time"], correctAnswer: "Work = Force x Distance" },
        { text: "Which color of light has the longest wavelength?", options: ["Violet", "Blue", "Green", "Red"], correctAnswer: "Red" },
        { text: "What is the force that opposes motion between two surfaces?", options: ["Gravity", "Inertia", "Friction", "Magnetism"], correctAnswer: "Friction" },
        { text: "What is the speed of light in a vacuum?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], correctAnswer: "300,000 km/s" },
        { text: "Which type of energy is stored in a battery?", options: ["Kinetic", "Potential", "Chemical", "Thermal"], correctAnswer: "Chemical" },
        { text: "What is the main source of energy for the Earth?", options: ["The Moon", "Geothermal heat", "The Sun", "Fossil fuels"], correctAnswer: "The Sun" },
        { text: "What happens to the density of most substances when they are heated?", options: ["It increases", "It decreases", "It stays the same", "It becomes zero"], correctAnswer: "It decreases" },
    ],
  },
  "math-puzzle-adventure-math-8": {
    questions: [
        { text: "How many degrees are in a right angle?", options: ["45", "90", "180", "360"], correctAnswer: "90" },
        { text: "What is the Pythagorean theorem?", options: ["a+b=c", "a² + b² = c²", "E=mc²", "πr²"], correctAnswer: "a² + b² = c²" },
        { text: "A bat and ball cost $1.10. The bat costs $1.00 more than the ball. How much is the ball?", options: ["$0.10", "$0.05", "$1.00", "$0.15"], correctAnswer: "$0.05" },
        { text: "What month has 28 days?", options: ["February", "All of them", "March", "December"], correctAnswer: "All of them" },
        { text: "I have two coins that total 30 cents. One of them is not a nickel. What are the two coins?", options: ["Two dimes and a nickel", "A quarter and a nickel", "Six nickels", "This is impossible"], correctAnswer: "A quarter and a nickel" },
        { text: "What number comes next? 4, 9, 16, 25, ...", options: ["30", "36", "49", "64"], correctAnswer: "36" },
        { text: "If there are 12 apples and you take away 4, how many do you have?", options: ["12", "8", "4", "0"], correctAnswer: "4" },
        { text: "How many times can you subtract 10 from 100?", options: ["1", "10", "9", "As many as you want"], correctAnswer: "1" },
        { text: "A farmer had 17 sheep. All but 9 died. How many are left?", options: ["17", "9", "8", "0"], correctAnswer: "9" },
        { text: "Divide 30 by 1/2 and add 10. What is the answer?", options: ["25", "70", "45", "17.5"], correctAnswer: "70" },
    ],
  },
  "eco-environment-game-science-7": {
    questions: [
        { text: "Which of these is a producer in an ecosystem?", options: ["Lion", "Grass", "Mushroom", "Human"], correctAnswer: "Grass" },
        { text: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: "Jupiter" },
        { text: "What is the process of water turning into vapor called?", options: ["Condensation", "Precipitation", "Evaporation", "Collection"], correctAnswer: "Evaporation" },
        { text: "Which of the following is a renewable resource?", options: ["Coal", "Oil", "Solar energy", "Natural gas"], correctAnswer: "Solar energy" },
        { text: "What is the 3 R's of waste management?", options: ["Reduce, Reuse, Recycle", "Read, Write, Rhyme", "Run, Rest, Repeat", "Rock, Roll, Rhythm"], correctAnswer: "Reduce, Reuse, Recycle" },
        { text: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: "Carbon Dioxide" },
        { text: "What is the main cause of global warming?", options: ["Deforestation", "Volcanic eruptions", "Greenhouse gas emissions", "Ozone layer depletion"], correctAnswer: "Greenhouse gas emissions" },
        { text: "What is an animal that eats only plants called?", options: ["Carnivore", "Omnivore", "Herbivore", "Predator"], correctAnswer: "Herbivore" },
        { text: "What is a group of fish called?", options: ["A flock", "A herd", "A school", "A pack"], correctAnswer: "A school" },
        { text: "Which layer of the atmosphere protects us from harmful UV radiation?", options: ["Troposphere", "Stratosphere", "Ozone Layer", "Mesosphere"], correctAnswer: "Ozone Layer" },
    ],
  },
  "chemistry-lab-science-10": {
    questions: [
      { text: "What is the pH of a neutral substance like pure water?", options: ["0", "7", "14", "1"], correctAnswer: "7" },
      { text: "What happens in an oxidation reaction?", options: ["Loss of electrons", "Gain of electrons", "Loss of protons", "Gain of protons"], correctAnswer: "Loss of electrons" },
      { text: "What is the common name for Sodium Chloride (NaCl)?", options: ["Sugar", "Vinegar", "Baking Soda", "Table Salt"], correctAnswer: "Table Salt" },
      { text: "Which gas is produced when an acid reacts with a metal?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"], correctAnswer: "Hydrogen" },
      { text: "What is a substance that speeds up a chemical reaction called?", options: ["An inhibitor", "A catalyst", "A reactant", "A product"], correctAnswer: "A catalyst" },
      { text: "What is the main component of natural gas?", options: ["Ethane", "Propane", "Butane", "Methane"], correctAnswer: "Methane" },
      { text: "Which of these is a physical change?", options: ["Burning wood", "Rusting iron", "Boiling water", "Digesting food"], correctAnswer: "Boiling water" },
      { text: "What are isotopes?", options: ["Atoms of the same element with different numbers of neutrons", "Atoms with the same number of neutrons but different numbers of protons", "Charged atoms", "Atoms that have formed a bond"], correctAnswer: "Atoms of the same element with different numbers of neutrons" },
      { text: "What is the chemical formula for sulfuric acid?", options: ["HCl", "H2SO4", "HNO3", "NaOH"], correctAnswer: "H2SO4" },
      { text: "What does a Geiger counter measure?", options: ["Acidity", "Temperature", "Pressure", "Radiation"], correctAnswer: "Radiation" },
    ]
  },
  "logic-puzzle-mania-logic-7": {
    questions: [
      { text: "Which number logically follows this series? 4, 6, 9, 6, 14, 6, ...", options: ["6", "17", "19", "21"], correctAnswer: "19" },
      { text: "A is the father of B. But B is not the son of A. How is that possible?", options: ["B is adopted", "B is A's daughter", "A is not the real father", "It's a mistake"], correctAnswer: "B is A's daughter" },
      { text: "Which word doesn't belong? Apple, Banana, Rose, Orange", options: ["Apple", "Banana", "Rose", "Orange"], correctAnswer: "Rose" },
      { text: "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):", options: ["City", "Animal", "Ocean", "Country"], correctAnswer: "Ocean" },
      { text: "There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?", options: ["5", "4", "3", "2"], correctAnswer: "3" },
      { text: "What comes next in the pattern? J, F, M, A, M, ...", options: ["J", "A", "S", "O"], correctAnswer: "J" },
      { text: "A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the portrait?", options: ["His son", "Himself", "His father", "His uncle"], correctAnswer: "His son" },
      { text: "What has keys but opens no locks?", options: ["A keyboard", "A map", "A piano", "A chest"], correctAnswer: "A piano" },
      { text: "Which number is the odd one out? 9, 16, 25, 36, 48", options: ["9", "16", "25", "48"], correctAnswer: "48" },
      { text: "I am always hungry, I must always be fed. The finger I lick will soon turn red. What am I?", options: ["A baby", "A fire", "A stray cat", "A leech"], correctAnswer: "A fire" },
    ]
  },
  "math-science-trivia-stem-9": {
    questions: [
      { text: "What is the value of 'c' in E=mc²?", options: ["Mass", "Energy", "Speed of light", "A constant"], correctAnswer: "Speed of light" },
      { text: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correctAnswer: "8" },
      { text: "What is the square root of 144?", options: ["10", "11", "12", "13"], correctAnswer: "12" },
      { text: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], correctAnswer: "Diamond" },
      { text: "What is the name of the theory of evolution?", options: ["Big Bang Theory", "Theory of Relativity", "Natural Selection", "Cell Theory"], correctAnswer: "Natural Selection" },
      { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
      { text: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
      { text: "Solve for x: 2x + 10 = 20", options: ["2", "5", "10", "15"], correctAnswer: "5" },
      { text: "Which scientist proposed the three laws of motion?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correctAnswer: "Isaac Newton" },
      { text: "What is the study of fossils called?", options: ["Biology", "Geology", "Paleontology", "Archeology"], correctAnswer: "Paleontology" },
    ]
  },
  "stem-adventure-game-stem-8": {
    questions: [
      { text: "You need to build a bridge across a small creek. What shape is the strongest for support?", options: ["Square", "Circle", "Triangle", "Rectangle"], correctAnswer: "Triangle" },
      { text: "You found a strange plant. Its leaves are waxy. This adaptation most likely helps it to...", options: ["Attract insects", "Store water", "Resist wind", "Stay warm"], correctAnswer: "Store water" },
      { text: "A lever can make lifting a heavy object easier. Where should the fulcrum be placed to use the least amount of effort?", options: ["Close to the object", "Far from the object", "In the middle", "It doesn't matter"], correctAnswer: "Close to the object" },
      { text: "You need to send a secret message. Which of these methods uses binary code?", options: ["Morse code", "Pig Latin", "Smoke signals", "Computer code"], correctAnswer: "Computer code" },
      { text: "You are trying to generate electricity. Which of these would work?", options: ["Spinning a turbine in a magnetic field", "Mixing baking soda and vinegar", "Shining a light on a plant", "Rubbing two sticks together"], correctAnswer: "Spinning a turbine in a magnetic field" },
      { text: "To purify water, you can boil it. What temperature does water boil at (at sea level)?", options: ["100°F", "212°F", "50°C", "90°C"], correctAnswer: "212°F" },
      { text: "You need to find North without a compass. What can you use?", options: ["The sun's position", "The direction of the wind", "The flow of a river", "The color of the sky"], correctAnswer: "The sun's position" },
      { text: "You are designing a paper airplane. To make it fly farther, it should be more...", options: ["Heavy", "Aerodynamic", "Colorful", "Symmetrical"], correctAnswer: "Aerodynamic" },
      { text: "You see lightning and hear thunder 5 seconds later. Roughly how far away is the storm?", options: ["1 mile", "5 miles", "10 miles", "It's right on top of you"], correctAnswer: "1 mile" },
      { text: "You want to grow a plant in a dark room. What color light would be best?", options: ["Green", "Blue and Red", "Yellow", "White"], correctAnswer: "Blue and Red" },
    ]
  },
  "speed-calculation-challenge-math-6": {
    questions: [
      { text: "What is 7 x 8?", options: ["49", "54", "56", "63"], correctAnswer: "56" },
      { text: "What is 15 + 23?", options: ["35", "38", "42", "48"], correctAnswer: "38" },
      { text: "What is 45 - 19?", options: ["24", "26", "34", "36"], correctAnswer: "26" },
      { text: "What is 72 / 9?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
      { text: "What is 12 x 5?", options: ["50", "60", "70", "80"], correctAnswer: "60" },
      { text: "What is 100 - 37?", options: ["53", "63", "73", "83"], correctAnswer: "63" },
      { text: "What is 6 x 9?", options: ["48", "54", "56", "63"], correctAnswer: "54" },
      { text: "What is 56 / 7?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
      { text: "What is 38 + 47?", options: ["75", "85", "95", "105"], correctAnswer: "85" },
      { text: "What is 11 x 11?", options: ["111", "121", "131", "141"], correctAnswer: "121" },
    ]
  }
};

    