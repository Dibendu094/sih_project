
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
   "math-quiz-challenge-math-9": {
    questions: [
      { text: "Solve the quadratic equation: x² - 5x + 6 = 0", options: ["x=2, x=3", "x=1, x=6", "x=-2, x=-3", "x=-1, x=-6"], correctAnswer: "x=2, x=3" },
      { text: "What is the slope-intercept form of a linear equation?", options: ["y = mx + b", "ax + by = c", "y - y1 = m(x - x1)", "x/a + y/b = 1"], correctAnswer: "y = mx + b" },
      { text: "Find the distance between points (1, 2) and (4, 6).", options: ["3", "4", "5", "6"], correctAnswer: "5" },
      { text: "Simplify: (x^3)^4", options: ["x^7", "x^12", "4x^3", "3x^4"], correctAnswer: "x^12" },
      { text: "What is the sum of the interior angles of a pentagon?", options: ["360°", "540°", "720°", "900°"], correctAnswer: "540°" },
      { text: "If log₂(x) = 4, what is x?", options: ["8", "16", "32", "64"], correctAnswer: "16" },
      { text: "What is the value of sin(90°)?", options: ["0", "0.5", "1", "-1"], correctAnswer: "1" },
      { text: "Solve the system of equations: y = 2x and x + y = 9", options: ["x=3, y=6", "x=6, y=3", "x=2, y=4", "x=4, y=2"], correctAnswer: "x=3, y=6" },
      { text: "Expand (x + 2)²", options: ["x² + 4", "x² + 2x + 4", "x² + 4x + 4", "x² + 4x"], correctAnswer: "x² + 4x + 4" },
      { text: "What is the definition of a rational number?", options: ["A number that can be a fraction", "A non-repeating decimal", "A number that is not real", "The square root of a negative number"], correctAnswer: "A number that can be a fraction" },
    ]
  },
  "math-quiz-challenge-math-10": {
    questions: [
      { text: "What is the derivative of x²?", options: ["2x", "x", "x/2", "x³"], correctAnswer: "2x" },
      { text: "What is the integral of 2x dx?", options: ["x² + C", "2x² + C", "x + C", "x³/3 + C"], correctAnswer: "x² + C" },
      { text: "What is i² where i is the imaginary unit?", options: ["1", "-1", "i", "-i"], correctAnswer: "-1" },
      { text: "What is a matrix?", options: ["A single number", "A vector", "A rectangular array of numbers", "A type of graph"], correctAnswer: "A rectangular array of numbers" },
      { text: "In trigonometry, what does SOH CAH TOA stand for?", options: ["A mnemonic for metric units", "A formula for area", "A way to remember trig ratios", "A theorem about triangles"], correctAnswer: "A way to remember trig ratios" },
      { text: "What is the limit of (1/x) as x approaches infinity?", options: ["0", "1", "Infinity", "Does not exist"], correctAnswer: "0" },
      { text: "What is the equation of a circle with center (h, k) and radius r?", options: ["(x-h)² + (y-k)² = r²", "(x+h)² + (y+k)² = r²", "x² + y² = r²", "y = ax² + bx + c"], correctAnswer: "(x-h)² + (y-k)² = r²" },
      { text: "What is the dot product of vectors <1, 2> and <3, 4>?", options: ["10", "11", "12", "13"], correctAnswer: "11" },
      { text: "What is the value of e, Euler's number, approximately?", options: ["2.718", "3.141", "1.618", "1.414"], correctAnswer: "2.718" },
      { text: "What is a geometric series?", options: ["A series where terms have a common difference", "A series where terms have a common ratio", "A series of shapes", "A series that never ends"], correctAnswer: "A series where terms have a common ratio" },
    ]
  },
  "math-quiz-challenge-math-11": {
    questions: [
      { text: "Find the limit: lim(x->2) (x²-4)/(x-2)", options: ["0", "2", "4", "Infinity"], correctAnswer: "4" },
      { text: "What is the derivative of sin(x)?", options: ["cos(x)", "-sin(x)", "-cos(x)", "tan(x)"], correctAnswer: "cos(x)" },
      { text: "What is the integral of x³ dx?", options: ["3x² + C", "x⁴/4 + C", "x³/3 + C", "x⁴ + C"], correctAnswer: "x⁴/4 + C" },
      { text: "Find the sum of the infinite geometric series: 1 + 1/2 + 1/4 + ...", options: ["1.5", "2", "2.5", "Infinity"], correctAnswer: "2" },
      { text: "What is the cross product of vectors <1,0,0> and <0,1,0>?", options: ["<0,0,1>", "<1,1,0>", "<0,0,0>", "<1,0,0>"], correctAnswer: "<0,0,1>" },
      { text: "Solve for x: log₃(x) + log₃(x-2) = 1", options: ["3", "-1", "3 and -1", "1"], correctAnswer: "3" },
      { text: "What is the amplitude of the function y = -3cos(2x - π)?", options: ["-3", "3", "2", "π"], correctAnswer: "3" },
      { text: "What is the determinant of a 2x2 matrix [[a, b], [c, d]]?", options: ["ab-cd", "ad-bc", "ac-bd", "a+d"], correctAnswer: "ad-bc" },
      { text: "What does the Fundamental Theorem of Calculus state?", options: ["The limit of a function", "The relationship between differentiation and integration", "The area of a circle", "The volume of a sphere"], correctAnswer: "The relationship between differentiation and integration" },
      { text: "Convert the polar coordinate (2, π/3) to Cartesian coordinates.", options: ["(1, √3)", "(√3, 1)", "(2, 1)", "(1, 2)"], correctAnswer: "(1, √3)" },
    ]
  },
  "math-quiz-challenge-math-12": {
    questions: [
      { text: "Find the derivative of f(x) = e^(2x) using the chain rule.", options: ["e^(2x)", "2e^(2x)", "e^x", "2xe^(2x)"], correctAnswer: "2e^(2x)" },
      { text: "Evaluate the definite integral ∫ from 0 to 1 of (x²) dx.", options: ["1", "1/2", "1/3", "2"], correctAnswer: "1/3" },
      { text: "What is Taylor series expansion used for?", options: ["Solving differential equations", "Approximating functions with polynomials", "Finding eigenvalues", "Calculating limits"], correctAnswer: "Approximating functions with polynomials" },
      { text: "Solve the differential equation dy/dx = y.", options: ["y = x + C", "y = x² + C", "y = e^x + C", "y = Ce^x"], correctAnswer: "y = Ce^x" },
      { text: "What is the volume of a solid of revolution generated by rotating y=x from x=0 to x=1 about the x-axis?", options: ["π/3", "π/2", "π", "2π"], correctAnswer: "π/3" },
      { text: "What is a vector space?", options: ["A collection of points", "A set of vectors with addition and scalar multiplication operations", "The space between two vectors", "A 3D coordinate system"], correctAnswer: "A set of vectors with addition and scalar multiplication operations" },
      { text: "What is the divergence of a vector field?", options: ["A measure of the 'outflow' of the field", "A measure of the 'circulation' of the field", "The length of the vector", "The direction of the vector"], correctAnswer: "A measure of the 'outflow' of the field" },
      { text: "What test can be used to determine if an infinite series converges or diverges?", options: ["The Litmus Test", "The Pythagorean Test", "The Integral Test", "The Turing Test"], correctAnswer: "The Integral Test" },
      { text: "What is the inverse of a 2x2 matrix [[2, 1], [5, 3]]?", options: ["[[3, -1], [-5, 2]]", "[[2, -1], [-5, 3]]", "[[3, 1], [5, 2]]", "It has no inverse"], correctAnswer: "[[3, -1], [-5, 2]]" },
      { text: "What is L'Hôpital's Rule used for?", options: ["Finding derivatives", "Finding integrals", "Evaluating indeterminate limits", "Solving systems of equations"], correctAnswer: "Evaluating indeterminate limits" },
    ]
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
  "equation-solver-race-math-9": {
    questions: [
      { text: "Solve for x: x² - 4 = 0", options: ["x=2", "x=4", "x=2, x=-2", "x=16"], correctAnswer: "x=2, x=-2" },
      { text: "Solve for y: 2(y - 3) = y + 1", options: ["y=4", "y=5", "y=6", "y=7"], correctAnswer: "y=7" },
      { text: "Solve the inequality: 3z > 15", options: ["z > 5", "z < 5", "z = 5", "z > 3"], correctAnswer: "z > 5" },
      { text: "Solve for a: a/2 + a/3 = 5", options: ["a=6", "a=5", "a=10", "a=30"], correctAnswer: "a=6" },
      { text: "Solve the system: 2x + y = 7 and x - y = -1", options: ["x=2, y=3", "x=3, y=1", "x=1, y=5", "x=4, y=-1"], correctAnswer: "x=2, y=3" },
      { text: "Find the roots of x² + 2x - 8 = 0", options: ["x=2, x=-4", "x=-2, x=4", "x=2, x=4", "x=-2, x=-4"], correctAnswer: "x=2, x=-4" },
      { text: "Solve for d: √(d - 1) = 3", options: ["d=4", "d=9", "d=10", "d=8"], correctAnswer: "d=10" },
      { text: "Solve for e: |e - 5| = 2", options: ["e=7", "e=3", "e=7, e=3", "e=5"], correctAnswer: "e=7, e=3" },
      { text: "Solve for f: 2^f = 32", options: ["f=4", "f=5", "f=6", "f=16"], correctAnswer: "f=5" },
      { text: "Solve for g: log₃(g) = 2", options: ["g=6", "g=5", "g=8", "g=9"], correctAnswer: "g=9" },
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
  "math-puzzle-adventure-logic-7": {
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
  "periodic-table-explorer-science-10": {
    questions: [
      { text: "Which block of the periodic table are the alkaline earth metals in?", options: ["s-block", "p-block", "d-block", "f-block"], correctAnswer: "s-block" },
      { text: "What is electronegativity?", options: ["The energy required to remove an electron", "The tendency of an atom to attract a bonding pair of electrons", "The total mass of the protons and neutrons", "The charge of an ion"], correctAnswer: "The tendency of an atom to attract a bonding pair of electrons" },
      { text: "What is the trend for atomic radius across a period?", options: ["Increases", "Decreases", "Stays the same", "Increases then decreases"], correctAnswer: "Decreases" },
      { text: "Which element is the most electronegative?", options: ["Fluorine", "Chlorine", "Oxygen", "Cesium"], correctAnswer: "Fluorine" },
      { text: "What is the electron configuration of Neon (Ne, atomic number 10)?", options: ["1s²2s²2p⁶", "1s²2s²2p⁵", "1s²2s²2p⁶3s¹", "1s²2s²"], correctAnswer: "1s²2s²2p⁶" },
      { text: "What type of element is Silicon (Si)?", options: ["Metal", "Nonmetal", "Metalloid", "Noble Gas"], correctAnswer: "Metalloid" },
      { text: "Which group of elements is known for being largely unreactive?", options: ["Alkali Metals", "Halogens", "Transition Metals", "Noble Gases"], correctAnswer: "Noble Gases" },
      { text: "What is the chemical symbol for Tungsten?", options: ["T", "Tu", "W", "Tg"], correctAnswer: "W" },
      { text: "Which element is liquid at room temperature besides Mercury?", options: ["Bromine", "Gallium", "Cesium", "Francium"], correctAnswer: "Bromine" },
      { text: "What are lanthanides and actinides?", options: ["Groups 1 and 2", "The p-block elements", "The inner transition metals", "The noble gases"], correctAnswer: "The inner transition metals" },
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
   "biology-treasure-hunt-science-10": {
    questions: [
      { text: "What are the four main types of organic macromolecules in living organisms?", options: ["Carbohydrates, Lipids, Proteins, Nucleic Acids", "Water, Salt, Sugar, Fat", "Vitamins, Minerals, Proteins, Fats", "DNA, RNA, ATP, ADP"], correctAnswer: "Carbohydrates, Lipids, Proteins, Nucleic Acids" },
      { text: "What is the role of ribosomes in a cell?", options: ["Energy production", "Waste disposal", "Protein synthesis", "Cell division"], correctAnswer: "Protein synthesis" },
      { text: "Describe the function of the endoplasmic reticulum.", options: ["Modifies, sorts, and packages proteins and lipids", "Controls cell activities", "Site of photosynthesis", "Breaks down old cell parts"], correctAnswer: "Modifies, sorts, and packages proteins and lipids" },
      { text: "What are the stages of mitosis, in order?", options: ["Prophase, Metaphase, Anaphase, Telophase", "Anaphase, Telophase, Prophase, Metaphase", "Metaphase, Prophase, Telophase, Anaphase", "Telophase, Anaphase, Metaphase, Prophase"], correctAnswer: "Prophase, Metaphase, Anaphase, Telophase" },
      { text: "What is the difference between genotype and phenotype?", options: ["One is for plants, one for animals", "Genotype is genetic makeup, phenotype is physical appearance", "Genotype is dominant, phenotype is recessive", "There is no difference"], correctAnswer: "Genotype is genetic makeup, phenotype is physical appearance" },
      { text: "What is homeostasis?", options: ["The process of cell division", "The breakdown of food", "Maintaining a stable internal environment", "The evolution of a species"], correctAnswer: "Maintaining a stable internal environment" },
      { text: "What is the function of ATP?", options: ["Stores genetic information", "Carries oxygen", "Main energy currency of the cell", "Acts as an enzyme"], correctAnswer: "Main energy currency of the cell" },
      { text: "What is a major difference between prokaryotic and eukaryotic cells?", options: ["Eukaryotic cells have a nucleus", "Prokaryotic cells are larger", "Eukaryotic cells lack ribosomes", "Prokaryotic cells have mitochondria"], correctAnswer: "Eukaryotic cells have a nucleus" },
      { text: "What is the role of enzymes in biological reactions?", options: ["They are the reactants", "They slow down reactions", "They act as catalysts to speed up reactions", "They are the products"], correctAnswer: "They act as catalysts to speed up reactions" },
      { text: "What is DNA transcription?", options: ["The synthesis of DNA from an RNA template", "The synthesis of an RNA molecule from a DNA template", "The synthesis of a protein from an mRNA template", "The replication of DNA"], correctAnswer: "The synthesis of an RNA molecule from aDNA template" },
    ]
  },
  "coding-quest-computer-science-6": {
    questions: [
        { text: "What is an input device?", options: ["A speaker", "A monitor", "A keyboard", "A printer"], correctAnswer: "A keyboard" },
        { text: "What is an output device?", options: ["A mouse", "A scanner", "A microphone", "A monitor"], correctAnswer: "A monitor" },
        { text: "What does CPU stand for?", options: ["Computer Processing Unit", "Central Processing Unit", "Central Power Unit", "Computer Power Unit"], correctAnswer: "Central Processing Unit" },
        { text: "What is the 'brain' of the computer?", options: ["Monitor", "Keyboard", "CPU", "Mouse"], correctAnswer: "CPU" },
        { text: "Which of these stores data, even when the computer is off?", options: ["RAM", "CPU", "Hard Drive", "Monitor"], correctAnswer: "Hard Drive" },
        { text: "What is the internet?", options: ["A single computer", "A global network of computers", "A software program", "A type of cable"], correctAnswer: "A global network of computers" },
        { text: "What do you use a web browser for?", options: ["To write documents", "To access websites", "To play music", "To check email"], correctAnswer: "To access websites" },
        { text: "What is a file?", options: ["A physical folder", "A collection of data stored on a computer", "A part of the CPU", "A type of computer"], correctAnswer: "A collection of data stored on a computer" },
        { text: "What does 'double-click' mean?", options: ["Clicking twice slowly", "Clicking with two fingers", "Clicking the right mouse button", "Clicking twice quickly"], correctAnswer: "Clicking twice quickly" },
        { text: "What is software?", options: ["The physical parts of a computer", "The programs and applications on a computer", "The computer screen", "The computer's power cord"], correctAnswer: "The programs and applications on a computer" }
    ]
  },
  "coding-quest-logic-6": {
    questions: [
        { text: "If a red block is on top of a blue block, and the blue block is on top of a green block, which block is at the bottom?", options: ["Red", "Blue", "Green", "Cannot be determined"], correctAnswer: "Green" },
        { text: "There are 5 birds on a branch. A cat scares 2 of them away. How many birds are left on the branch?", options: ["3", "5", "2", "0"], correctAnswer: "3" },
        { text: "What is the next shape in the pattern: Circle, Square, Triangle, Circle, Square, ...?", options: ["Circle", "Square", "Triangle", "Star"], correctAnswer: "Triangle" },
        { text: "If all cats are animals, and Felix is a cat, then Felix is a(n) ____.", options: ["Dog", "Animal", "Fish", "Bird"], correctAnswer: "Animal" },
        { text: "You have a box of 10 crayons. 3 are red, 4 are blue, and 3 are yellow. Which color do you have the most of?", options: ["Red", "Blue", "Yellow", "They are equal"], correctAnswer: "Blue" },
        { text: "A recipe needs 2 apples and 1 orange. If you want to make two batches, how many apples do you need?", options: ["2", "3", "4", "5"], correctAnswer: "4" },
        { text: "Which number does not belong in this group? 2, 4, 6, 7, 8, 10", options: ["2", "6", "7", "10"], correctAnswer: "7" },
        { text: "A train leaves the station at 1 PM. The trip takes 2 hours. What time does it arrive?", options: ["2 PM", "3 PM", "4 PM", "1 PM"], correctAnswer: "3 PM" },
        { text: "If today is Wednesday, what day was it yesterday?", options: ["Monday", "Tuesday", "Thursday", "Friday"], correctAnswer: "Tuesday" },
        { text: "You have three doors. Behind one door is a prize. You pick Door #1. The host opens Door #3 to show it's empty. Should you switch to Door #2?", options: ["Yes", "No", "It doesn't matter", "There is no prize"], correctAnswer: "Yes" }
    ]
  },
  "coding-quest-computer-science-7": {
    questions: [
        { text: "What is RAM?", options: ["A type of permanent storage", "A programming language", "Random Access Memory, used for temporary data", "A computer's processor"], correctAnswer: "Random Access Memory, used for temporary data" },
        { text: "What is a 'URL'?", options: ["A computer file", "A type of software", "The address of a website", "A CPU component"], correctAnswer: "The address of a website" },
        { text: "What is binary code?", options: ["A code that uses 10 different digits", "A code made of pictures", "A code that uses only 1s and 0s", "A secret language"], correctAnswer: "A code that uses only 1s and 0s" },
        { text: "What is an 'operating system'?", options: ["A game", "Software that manages all computer hardware and software", "A website", "A type of monitor"], correctAnswer: "Software that manages all computer hardware and software" },
        { text: "Which of these is an example of an operating system?", options: ["Microsoft Word", "Google Chrome", "Windows", "Adobe Photoshop"], correctAnswer: "Windows" },
        { text: "What is an 'icon' on a computer desktop?", options: ["A small picture that represents a file or program", "A text document", "The background image", "The clock"], correctAnswer: "A small picture that represents a file or program" },
        { text: "What is 'Wi-Fi'?", options: ["A type of computer", "A wire that connects to the internet", "A way to connect to a network wirelessly", "A brand of laptop"], correctAnswer: "A way to connect to a network wirelessly" },
        { text: "What is 'downloading'?", options: ["Sending a file from your computer to another", "Copying a file from the internet to your computer", "Deleting a file", "Printing a document"], correctAnswer: "Copying a file from the internet to your computer" },
        { text: "What is an 'email'?", options: ["A physical letter", "A message sent electronically", "A type of website", "A video call"], correctAnswer: "A message sent electronically" },
        { text: "What is a 'folder' or 'directory' used for?", options: ["To run programs", "To organize files", "To connect to the internet", "To change screen brightness"], correctAnswer: "To organize files" }
    ]
  },
  "coding-quest-logic-7": {
    questions: [
        { text: "Four friends are in a line. Tom is behind Sam. Sam is not first. Lily is before Tom but after Anna. Who is first in line?", options: ["Sam", "Tom", "Lily", "Anna"], correctAnswer: "Anna" },
        { text: "What comes next? 1, 2, 4, 8, 16, ...", options: ["20", "24", "32", "40"], correctAnswer: "32" },
        { text: "If it takes 10 minutes to walk to the park, and you left at 3:30 PM, what time will you arrive?", options: ["3:40 PM", "3:45 PM", "4:00 PM", "3:50 PM"], correctAnswer: "3:40 PM" },
        { text: "A dog is tied to a 10-foot rope. There is a bone 15 feet away. How can the dog get the bone?", options: ["The rope can stretch", "It can't", "The rope is not tied to anything", "The bone is also tied to a rope"], correctAnswer: "The rope is not tied to anything" },
        { text: "You are in a race and you overtake the person in second place. What place are you in now?", options: ["First", "Second", "Third", "Last"], correctAnswer: "Second" },
        { text: "Which word does not belong? Run, Jump, Sleep, Hop", options: ["Run", "Jump", "Sleep", "Hop"], correctAnswer: "Sleep" },
        { text: "A recipe for 12 cookies needs 2 cups of flour. How many cups do you need for 24 cookies?", options: ["2", "3", "4", "6"], correctAnswer: "4" },
        { text: "There are 3 doors. Red, Blue, Green. The prize is not behind the red door. It is not behind the green door. Which door has the prize?", options: ["Red", "Blue", "Green", "None"], correctAnswer: "Blue" },
        { text: "If A = 1, B = 2, C = 3, what does the word 'CAB' equal?", options: ["312", "6", "321", "5"], correctAnswer: "6" },
        { text: "What has one head, one foot, and four legs?", options: ["A monster", "A chair", "A bed", "A table"], correctAnswer: "A bed" }
    ]
  },
  "coding-quest-computer-science-8": {
    questions: [
        { text: "What is an 'algorithm'?", options: ["A type of computer chip", "A step-by-step procedure for solving a problem", "A brand of software", "A computer virus"], correctAnswer: "A step-by-step procedure for solving a problem" },
        { text: "What does HTML stand for?", options: ["HyperText Markup Language", "High-Tech Machine Learning", "Hyperlink and Text Management Logic", "Home Tool Markup Link"], correctAnswer: "HyperText Markup Language" },
        { text: "In programming, what is a 'variable'?", options: ["A fixed value", "A container for storing data", "A type of loop", "A comment in the code"], correctAnswer: "A container for storing data" },
        { text: "What is a 'loop' used for in programming?", options: ["To stop the program", "To make a decision", "To repeat a block of code", "To store data"], correctAnswer: "To repeat a block of code" },
        { text: "Which of the following is considered a high-level programming language?", options: ["Assembly", "Machine Code", "Python", "Binary"], correctAnswer: "Python" },
        { text: "What does 'debugging' mean?", options: ["Writing code faster", "Finding and fixing errors in code", "Adding comments to code", "Designing the user interface"], correctAnswer: "Finding and fixing errors in code" },
        { text: "What is a 'conditional statement' (like if-else)?", options: ["It repeats code", "It stores a value", "It performs different actions based on a condition", "It defines a new function"], correctAnswer: "It performs different actions based on a condition" },
        { text: "What is 'source code'?", options: ["The code that a computer directly executes", "The human-readable instructions written by a programmer", "A secret password", "The output of a program"], correctAnswer: "The human-readable instructions written by a programmer" },
        { text: "What is the purpose of a 'compiler'?", options: ["To run the program", "To translate high-level code into machine code", "To find bugs", "To design the program's look"], correctAnswer: "To translate high-level code into machine code" },
        { text: "What is a 'function' or 'method'?", options: ["A variable", "A loop", "A named block of reusable code", "A conditional statement"], correctAnswer: "A named block of reusable code" }
    ]
  },
  "coding-quest-logic-8": {
    questions: [
        { text: "Two fathers and two sons went fishing. They each caught one fish. How many fish were caught in total?", options: ["4", "3", "2", "1"], correctAnswer: "3" },
        { text: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", options: ["A globe", "A painting", "A map", "A dream"], correctAnswer: "A map" },
        { text: "What is the next letter in the sequence: O, T, T, F, F, S, S, ...?", options: ["E", "N", "T", "O"], correctAnswer: "E" },
        { text: "A man is on an island with a fox, a chicken, and a bag of grain. He has a boat that can only carry himself and one other item. How does he get all three across without anything being eaten?", options: ["It's impossible", "Fox, return, Grain, return with Fox, Chicken, return, Fox", "Chicken, return, Fox, return with Chicken, Grain, return, Chicken", "Grain, return, Chicken, return, Fox"], correctAnswer: "Chicken, return, Fox, return with Chicken, Grain, return, Chicken" },
        { text: "What can be broken, but is never held?", options: ["A promise", "A window", "A heart", "A record"], correctAnswer: "A promise" },
        { text: "If you have a bowl with six apples and you take away four, how many do you have?", options: ["6", "4", "2", "10"], correctAnswer: "4" },
        { text: "Which number should come next in the pattern? 1, 1, 2, 3, 5, 8, ...", options: ["11", "12", "13", "14"], correctAnswer: "13" },
        { text: "What gets wetter as it dries?", options: ["A towel", "A sponge", "Ice", "The ground"], correctAnswer: "A towel" },
        { text: "Forward I am heavy, but backward I am not. What am I?", options: ["A scale", "A word", "A ton", "A truck"], correctAnswer: "A ton" },
        { text: "There are three switches outside a closed room. One of them controls a light bulb inside. You can flip the switches as much as you want, but you can only enter the room once. How do you find out which switch controls the bulb?", options: ["Flip one, wait, flip another, enter", "Flip one on, wait, turn it off. Flip another on. Enter the room.", "Flip all three", "It's impossible to know"], correctAnswer: "Flip one on, wait, turn it off. Flip another on. Enter the room." }
    ]
  },
  "coding-quest-computer-science-9": {
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
  "coding-quest-logic-9": {
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
  "coding-quest-computer-science-10": {
    questions: [
        { text: "What is the primary purpose of a database?", options: ["To style webpages", "To store and retrieve data efficiently", "To perform complex calculations", "To run operating systems"], correctAnswer: "To store and retrieve data efficiently" },
        { text: "What is an API?", options: ["Advanced Programming Interface", "Application Programming Interface", "Automated Program Interaction", "Application Process Integration"], correctAnswer: "Application Programming Interface" },
        { text: "In Object-Oriented Programming, what is 'inheritance'?", options: ["A way to create a new class from an existing class", "A type of data structure", "A loop that never ends", "A method for debugging code"], correctAnswer: "A way to create a new class from an existing class" },
        { text: "What is the difference between 'let' and 'const' in JavaScript?", options: ["They are the same", "'let' is for numbers, 'const' is for strings", "'const' variables cannot be reassigned, 'let' variables can", "'let' is global, 'const' is local"], correctAnswer: "'const' variables cannot be reassigned, 'let' variables can" },
        { text: "What does 'DRY' stand for in software development?", options: ["Don't Rush Your-code", "Don't Repeat Yourself", "Data Recovery Yard", "Develop, Review, Yield"], correctAnswer: "Don't Repeat Yourself" },
        { text: "What is a 'boolean' data type?", options: ["A number with a decimal", "A text string", "A value that can only be true or false", "A list of items"], correctAnswer: "A value that can only be true or false" },
        { text: "Which data structure operates on a 'First-In, First-Out' (FIFO) basis?", options: ["Stack", "Queue", "Array", "Tree"], correctAnswer: "Queue" },
        { text: "What is the time complexity of a binary search algorithm?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correctAnswer: "O(log n)" },
        { text: "What is a 'version control system' like Git?", options: ["A code editor", "A database", "A tool for tracking changes in code", "A web server"], correctAnswer: "A tool for tracking changes in code" },
        { text: "What is 'recursion' in programming?", options: ["A function that calls itself", "A loop that runs a fixed number of times", "A way to handle errors", "A type of variable"], correctAnswer: "A function that calls itself" }
    ]
  },
  "coding-quest-logic-10": {
    questions: [
        { text: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?", options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"], correctAnswer: "(1/8)" },
        { text: "A ship is at anchor. Over the side hangs a rope ladder with its end just touching the water. The rungs are one foot apart and the tide rises at 6 inches per hour. How long will it be until the water covers the first three rungs?", options: ["6 hours", "4 hours", "Never", "2 hours"], correctAnswer: "Never" },
        { text: "Which of the following is the 'odd one out': Cat, Dog, Lion, Horse, Cheetah", options: ["Dog", "Horse", "Lion", "Cat"], correctAnswer: "Horse" },
        { text: "You have a 5-gallon jug and a 3-gallon jug. How can you measure exactly 4 gallons of water?", options: ["It's impossible", "Fill 5, pour into 3, empty 3, pour rest from 5 into 3, fill 5, top off 3", "Fill 3, pour into 5, fill 3, pour into 5", "Fill 5, pour out 1"], correctAnswer: "Fill 5, pour into 3, empty 3, pour rest from 5 into 3, fill 5, top off 3" },
        { text: "A man says, 'The day before yesterday I was 25. Next year I will be 28.' This is true only one day in a year. What day is his birthday?", options: ["December 31st", "January 1st", "February 29th", "December 30th"], correctAnswer: "December 31st" },
        { text: "What is the center of gravity?", options: ["A point in space", "The heaviest part of an object", "The point where the weight of an object is evenly dispersed", "The bottom of an object"], correctAnswer: "The point where the weight of an object is evenly dispersed" },
        { text: "If you have 5 oranges in one hand and 6 in the other, what do you have?", options: ["11 oranges", "A difficult time", "Very big hands", "A snack"], correctAnswer: "Very big hands" },
        { text: "What has an eye, but cannot see?", options: ["A potato", "A needle", "A hurricane", "All of the above"], correctAnswer: "All of the above" },
        { text: "If you are running a race and pass the person in second place, what position are you in?", options: ["First", "Second", "Third", "Still second"], correctAnswer: "Second" },
        { text: "What is black when you buy it, red when you use it, and gray when you throw it away?", options: ["A match", "Charcoal", "A steak", "A newspaper"], correctAnswer: "Charcoal" }
    ]
  },
  "coding-quest-computer-science-11": {
    questions: [
        { text: "What is the difference between a stack and a queue?", options: ["A stack is FIFO, a queue is LIFO", "A stack is LIFO, a queue is FIFO", "They are identical", "A stack stores numbers, a queue stores text"], correctAnswer: "A stack is LIFO, a queue is FIFO" },
        { text: "What is 'polymorphism' in OOP?", options: ["The ability of a class to have multiple constructors", "The ability of an object to take on many forms", "A type of data encryption", "A way to hide information"], correctAnswer: "The ability of an object to take on many forms" },
        { text: "What is Big O notation used for?", options: ["To measure the exact runtime of an algorithm", "To describe the performance or complexity of an algorithm", "To write code comments", "To define variable names"], correctAnswer: "To describe the performance or complexity of an algorithm" },
        { text: "What is the primary key in a relational database?", options: ["The first column of a table", "A unique identifier for a record in a table", "A key used for encryption", "A foreign user's ID"], correctAnswer: "A unique identifier for a record in a table" },
        { text: "What is a 'hash collision'?", options: ["When two different inputs produce the same hash output", "A type of network error", "When a computer crashes", "A security vulnerability in passwords"], correctAnswer: "When two different inputs produce the same hash output" },
        { text: "What is the difference between TCP and UDP?", options: ["TCP is faster than UDP", "UDP is connection-oriented, TCP is not", "TCP is connection-oriented and reliable, UDP is connectionless and faster", "They are protocols for different network layers"], correctAnswer: "TCP is connection-oriented and reliable, UDP is connectionless and faster" },
        { text: "What is 'garbage collection' in programming languages like Java or C#?", options: ["A tool for cleaning up unused files", "A manual process of freeing memory", "The automatic process of freeing up memory that is no longer in use", "A way to delete variables"], correctAnswer: "The automatic process of freeing up memory that is no longer in use" },
        { text: "What is a 'singleton' design pattern?", options: ["A pattern that restricts the instantiation of a class to one object", "A pattern for creating objects from a prototype", "A pattern that allows an object to alter its behavior when its internal state changes", "A class that can only have one method"], correctAnswer: "A pattern that restricts the instantiation of a class to one object" },
        { text: "What is the purpose of an 'index' in a database?", options: ["To count the number of rows", "To provide a backup of the data", "To speed up the retrieval of rows from a table", "To enforce data types"], correctAnswer: "To speed up the retrieval of rows from a table" },
        { text: "What is an 'associative array' (or dictionary/map)?", options: ["An array with only numbers", "A collection of key-value pairs", "An array that is sorted automatically", "A multidimensional array"], correctAnswer: "A collection of key-value pairs" }
    ]
  },
  "coding-quest-logic-11": {
    questions: [
        { text: "All bloops are razzies. All razzies are lazzies. Therefore, all bloops are lazzies.", options: ["True", "False", "Cannot be determined", "Sometimes true"], correctAnswer: "True" },
        { text: "If some A are B, and some B are C, does it follow that some A are C?", options: ["Yes, always", "No, not necessarily", "Only if A, B, and C are numbers", "Yes, but only if all B are C"], correctAnswer: "No, not necessarily" },
        { text: "A statement is made: 'This statement is false.' Is the statement true or false?", options: ["True", "False", "It is a paradox", "Both true and false"], correctAnswer: "It is a paradox" },
        { text: "Which number is the odd one out? 41, 43, 47, 51, 53", options: ["41", "47", "51", "53"], correctAnswer: "51" },
        { text: "In a village, the barber shaves everyone who does not shave themselves. Who shaves the barber?", options: ["The barber shaves himself", "Another barber shaves him", "No one shaves the barber", "This is a paradox (Barber's Paradox)"], correctAnswer: "This is a paradox (Barber's Paradox)" },
        { text: "What is the next item in the sequence: Z, Y, X, U, T, S, P, O, N, ...?", options: ["M", "K", "L", "I"], correctAnswer: "K" },
        { text: "There are 10 socks in a drawer: 5 pairs of black, 3 pairs of white, and 2 pairs of grey. You pick socks in the dark. How many must you pick to be sure of having a matching pair?", options: ["3", "4", "11", "6"], correctAnswer: "4" },
        { text: "If 'A implies B', what is the contrapositive?", options: ["'B implies A'", "'Not A implies Not B'", "'Not B implies Not A'", "'A implies Not B'"], correctAnswer: "'Not B implies Not A'" },
        { text: "Which conclusion follows from: 'No humans are perfect. All students are humans.'?", options: ["All students are perfect.", "No students are perfect.", "Some students are perfect.", "No conclusion can be drawn."], correctAnswer: "No students are perfect." },
        { text: "You have 12 coins, one of which is counterfeit (either lighter or heavier). Using a balance scale, what is the minimum number of weighings to find the fake coin?", options: ["2", "3", "4", "6"], correctAnswer: "3" }
    ]
  },
  "coding-quest-computer-science-12": {
    questions: [
        { text: "What is dynamic programming?", options: ["Programming with a dynamic UI", "A method for solving complex problems by breaking them down into simpler subproblems", "A language that doesn't require compiling", "A way to manage database transactions"], correctAnswer: "A method for solving complex problems by breaking them down into simpler subproblems" },
        { text: "What is the main difference between a process and a thread?", options: ["Processes are for networking, threads are for CPU tasks", "A process is a program in execution, and a thread is a path of execution within a process", "They are the same thing", "Threads are heavyweight, processes are lightweight"], correctAnswer: "A process is a program in execution, and a thread is a path of execution within a process" },
        { text: "What is a 'race condition' in concurrent programming?", options: ["When two threads are competing to finish first", "An error caused by unpredictable timing of operations by multiple threads", "A security exploit", "A type of sorting algorithm"], correctAnswer: "An error caused by unpredictable timing of operations by multiple threads" },
        { text: "Explain the concept of 'sharding' in the context of databases.", options: ["Encrypting a database", "Creating a backup of a database", "Horizontally partitioning data into smaller, more manageable parts", "A type of SQL join"], correctAnswer: "Horizontally partitioning data into smaller, more manageable parts" },
        { text: "What is the CAP theorem in distributed systems?", options: ["A system can only have two of the three: Consistency, Availability, and Partition tolerance", "A system must have Capacity, Availability, and Performance", "A security principle for APIs", "A data compression algorithm"], correctAnswer: "A system can only have two of the three: Consistency, Availability, and Partition tolerance" },
        { text: "What is the purpose of a load balancer?", options: ["To balance the electrical load on a server", "To distribute network traffic across multiple servers", "To balance the memory usage of an application", "To secure a network from attacks"], correctAnswer: "To distribute network traffic across multiple servers" },
        { text: "What is a 'memory leak'?", options: ["When a program loses data from memory", "A security flaw that exposes memory contents", "When a program fails to release memory it no longer needs", "When the physical RAM is damaged"], correctAnswer: "When a program fails to release memory it no longer needs" },
        { text: "What is the difference between a microservices architecture and a monolithic architecture?", options: ["Microservices are for small apps, monoliths are for large ones", "A monolith is one large application, while microservices are a collection of small, independent services", "Microservices use less code", "There is no difference in architecture, only in programming language"], correctAnswer: "A monolith is one large application, while microservices are a collection of small, independent services" },
        { text: "What is a 'deadlock'?", options: ["A situation where two or more threads are blocked forever, waiting for each other", "A thread that has been terminated", "An error that crashes the entire system", "A computer that will not turn on"], correctAnswer: "A situation where two or more threads are blocked forever, waiting for each other" },
        { text: "What is 'idempotence' in the context of APIs?", options: ["An API that is only accessible by one user", "An operation that can be applied multiple times without changing the result beyond the initial application", "An API that automatically caches responses", "An API that requires a unique ID for every request"], correctAnswer: "An operation that can be applied multiple times without changing the result beyond the initial application" }
    ]
  },
  "coding-quest-logic-12": {
    questions: [
        { text: "What is Gödel's Incompleteness Theorem?", options: ["A theorem about geometry", "A theorem stating that in any consistent formal system, there are true statements that cannot be proven", "A theorem about the limits of computation", "A theorem proving the consistency of arithmetic"], correctAnswer: "A theorem stating that in any consistent formal system, there are true statements that cannot be proven" },
        { text: "What is the 'P vs NP' problem?", options: ["A problem about physics", "The question of whether every problem whose solution can be quickly verified can also be quickly solved", "A problem in number theory", "A problem about networking protocols"], correctAnswer: "The question of whether every problem whose solution can be quickly verified can also be quickly solved" },
        { text: "What is a 'Turing Machine'?", options: ["A physical computer built by Alan Turing", "A type of encryption machine", "A mathematical model of computation that defines an abstract machine", "A quantum computer"], correctAnswer: "A mathematical model of computation that defines an abstract machine" },
        { text: "In modal logic, what does the 'necessity' operator (□) typically mean?", options: ["That a statement is possible", "That a statement is true in all possible worlds", "That a statement is false", "That a statement is contingent"], correctAnswer: "That a statement is true in all possible worlds" },
        { text: "What is the 'Halting Problem'?", options: ["The problem of determining if a computer has enough power to run a program", "The problem of determining, from a description of an arbitrary computer program and an input, whether the program will finish running or continue to run forever", "The problem of stopping a program that is in an infinite loop", "The problem of preventing a computer from overheating"], correctAnswer: "The problem of determining, from a description of an arbitrary computer program and an input, whether the program will finish running or continue to run forever" },
        { text: "What is Occam's Razor?", options: ["A principle stating that 'entities should not be multiplied without necessity'", "A tool for precise cutting", "A logical paradox", "A mathematical formula"], correctAnswer: "A principle stating that 'entities should not be multiplied without necessity'" },
        { text: "What is the 'Sorites Paradox' (paradox of the heap)?", options: ["A paradox about motion", "A paradox that arises from vague predicates, like 'heap'", "A paradox about time travel", "A paradox about self-reference"], correctAnswer: "A paradox that arises from vague predicates, like 'heap'" },
        { text: "What is the difference between deductive and inductive reasoning?", options: ["Deduction moves from general to specific; induction moves from specific to general", "Deduction is for science, induction is for math", "They are the same", "Deduction is always true, induction is always false"], correctAnswer: "Deduction moves from general to specific; induction moves from specific to general" },
        { text: "What is a 'syllogism'?", options: ["A type of logical puzzle", "A form of reasoning in which a conclusion is drawn from two given or assumed propositions", "A statement that is always true", "A programming error"], correctAnswer: "A form of reasoning in which a conclusion is drawn from two given or assumed propositions" },
        { text: "What is Fuzzy Logic?", options: ["A logic that is not clear", "A form of many-valued logic in which the truth values of variables may be any real number between 0 and 1", "A logic used for quantum computers", "A logic that contains errors"], correctAnswer: "A form of many-valued logic in which the truth values of variables may be any real number between 0 and 1" }
    ]
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
    "physics-experiment-simulator-science-12": {
    questions: [
      { text: "What does the equation E=mc² represent?", options: ["Kinetic energy", "Potential energy", "Mass-energy equivalence", "The law of gravity"], correctAnswer: "Mass-energy equivalence" },
      { text: "According to special relativity, what happens to time for an object moving at very high speeds?", options: ["It speeds up", "It slows down (time dilation)", "It stops", "It reverses"], correctAnswer: "It slows down (time dilation)" },
      { text: "What is quantum entanglement?", options: ["A type of chemical bond", "Particles linked in a way that their fates are intertwined, regardless of distance", "The uncertainty in a particle's position", "The wave-particle duality of matter"], correctAnswer: "Particles linked in a way that their fates are intertwined, regardless of distance" },
      { text: "What is the significance of Planck's constant (h)?", options: ["It relates the energy of a photon to its frequency", "It's the speed of light", "It's the gravitational constant", "It's Avogadro's number"], correctAnswer: "It relates the energy of a photon to its frequency" },
      { text: "What is a black hole?", options: ["A very dense star", "A region of spacetime where gravity is so strong that nothing can escape", "A wormhole to another universe", "A dark nebula"], correctAnswer: "A region of spacetime where gravity is so strong that nothing can escape" },
      { text: "What are the four fundamental forces of nature?", options: ["Gravity, Friction, Tension, Normal", "Strong Nuclear, Weak Nuclear, Electromagnetism, Gravity", "Kinetic, Potential, Thermal, Chemical", "Push, Pull, Twist, Shear"], correctAnswer: "Strong Nuclear, Weak Nuclear, Electromagnetism, Gravity" },
      { text: "What is the Heisenberg Uncertainty Principle?", options: ["Energy is always conserved", "It is impossible to know both the exact position and exact momentum of a particle at the same time", "Every action has an equal and opposite reaction", "The universe is expanding"], correctAnswer: "It is impossible to know both the exact position and exact momentum of a particle at the same time" },
      { text: "What is dark matter?", options: ["Matter that does not emit light", "A theoretical form of matter that is believed to account for a large part of the total mass in the universe", "The material inside a black hole", "Anti-matter"], correctAnswer: "A theoretical form of matter that is believed to account for a large part of the total mass in the universe" },
      { text: "What is the Standard Model of Particle Physics?", options: ["A model of the solar system", "A theory describing the fundamental particles and forces", "A model of atomic structure", "A theory of gravity"], correctAnswer: "A theory describing the fundamental particles and forces" },
      { text: "What is redshift in cosmology?", options: ["The shift of light to shorter wavelengths", "The bending of light around a massive object", "The shift of light to longer wavelengths as objects move away from us", "The reflection of light from a red object"], correctAnswer: "The shift of light to longer wavelengths as objects move away from us" },
    ]
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
  "math-puzzle-adventure-logic-8": {
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
    "eco-environment-game-stem-7": {
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
   "chemistry-lab-science-11": {
    questions: [
      { text: "What is the molar mass of H₂O (Water)? (H=1, O=16)", options: ["17 g/mol", "18 g/mol", "19 g/mol", "2 g/mol"], correctAnswer: "18 g/mol" },
      { text: "Balance the equation: __CH₄ + __O₂ -> __CO₂ + __H₂O", options: ["1, 2, 1, 2", "1, 1, 1, 1", "2, 1, 2, 1", "1, 2, 2, 1"], correctAnswer: "1, 2, 1, 2" },
      { text: "What is an endothermic reaction?", options: ["A reaction that releases heat", "A reaction that absorbs heat", "A reaction that produces light", "A reaction that happens instantly"], correctAnswer: "A reaction that absorbs heat" },
      { text: "According to Le Chatelier's principle, if you increase the pressure on the system 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), which way will the equilibrium shift?", options: ["To the right (products)", "To the left (reactants)", "No change", "The reaction stops"], correctAnswer: "To the right (products)" },
      { text: "What is the pH of a 0.01 M solution of HCl?", options: ["1", "2", "12", "13"], correctAnswer: "2" },
      { text: "What type of bond is formed between two non-metal atoms?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], correctAnswer: "Covalent" },
      { text: "What is Avogadro's number?", options: ["6.022 x 10²³", "3.14159", "9.8 m/s²", "2.718"], correctAnswer: "6.022 x 10²³" },
      { text: "What is the general formula for an alkane?", options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"], correctAnswer: "CₙH₂ₙ₊₂" },
      { text: "In an electrochemical cell, where does reduction occur?", options: ["Anode", "Cathode", "Salt bridge", "Wire"], correctAnswer: "Cathode" },
      { text: "What is the name of the functional group -OH?", options: ["Carboxyl", "Carbonyl", "Hydroxyl", "Amine"], correctAnswer: "Hydroxyl" },
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
    "logic-puzzle-mania-logic-10": {
    questions: [
      { text: "What is the next number in the sequence: 1, 4, 9, 16, 25, ...?", options: ["36", "49", "64", "42"], correctAnswer: "36" },
      { text: "A man builds a house with four sides, and it is rectangular in shape. Each side has a southern exposure. A big bear walks by. What color is the bear?", options: ["Brown", "Black", "White", "Grizzly"], correctAnswer: "White" },
      { text: "What is it that's full of holes but can still hold water?", options: ["A net", "A sponge", "A sieve", "A leaky bucket"], correctAnswer: "A sponge" },
      { text: "What has cities, but no houses; forests, but no trees; and water, but no fish?", options: ["A book", "A dream", "A map", "A computer"], correctAnswer: "A map" },
      { text: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", options: ["A flag", "A whisper", "An echo", "A ghost"], correctAnswer: "An echo" },
      { text: "If a plane crashes on the border between the U.S. and Canada, where do you bury the survivors?", options: ["U.S.", "Canada", "You don't bury survivors", "The nearest city"], correctAnswer: "The nearest city" },
      { text: "What has a thumb and four fingers but is not a hand?", options: ["A glove", "A footprint", "A monkey's paw", "A drawing"], correctAnswer: "A glove" },
      { text: "What is always in front of you but can’t be seen?", options: ["The past", "The present", "The future", "The air"], correctAnswer: "The future" },
      { text: "What can you catch but not throw?", options: ["A ball", "A fish", "A cold", "A frisbee"], correctAnswer: "A cold" },
      { text: "What goes up but never comes down?", options: ["A balloon", "Smoke", "Your age", "A bird"], correctAnswer: "Your age" },
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
  "math-science-trivia-math-9": {
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
    "math-science-trivia-science-9": {
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
    "stem-adventure-game-stem-11": {
    questions: [
      { text: "You need to design a robot arm to lift a 5kg weight. What is more important to consider for the motor?", options: ["Speed", "Torque", "Color", "Size"], correctAnswer: "Torque" },
      { text: "You are building a water filtration system. Which of these materials would be best for the final, finest filter layer?", options: ["Gravel", "Sand", "Activated Carbon", "Cotton balls"], correctAnswer: "Activated Carbon" },
      { text: "To create a simple circuit to light an LED, you need a power source, the LED, and what other component to prevent the LED from burning out?", options: ["A switch", "A capacitor", "A resistor", "A transistor"], correctAnswer: "A resistor" },
      { text: "You want to measure the pH of a soil sample. What would you use?", options: ["A thermometer", "A barometer", "A pH strip or meter", "A ruler"], correctAnswer: "A pH strip or meter" },
      { text: "In a 'choose your own adventure' game, the story branches based on player choices. What programming concept does this represent?", options: ["Loops", "Variables", "Conditional statements (if/else)", "Functions"], correctAnswer: "Conditional statements (if/else)" },
      { text: "You are designing a small-scale wind turbine. To maximize power output, the blades should have a shape based on what principle?", options: ["Aerodynamics (lift)", "Gravity", "Friction", "Magnetism"], correctAnswer: "Aerodynamics (lift)" },
      { text: "You need to code a program that performs the same action on a list of 100 items. What is the most efficient way to do this?", options: ["Write the code 100 times", "Use a loop", "Use 100 different variables", "Create 100 functions"], correctAnswer: "Use a loop" },
      { text: "To build a strong but lightweight structure, which engineering concept is often used?", options: ["Using solid blocks", "Using trusses and triangles", "Making it as heavy as possible", "Using only right angles"], correctAnswer: "Using trusses and triangles" },
      { text: "You are observing a cell under a microscope. It has a cell wall and chloroplasts. What kind of cell is it?", options: ["Animal cell", "Bacterial cell", "Plant cell", "Fungal cell"], correctAnswer: "Plant cell" },
      { text: "How does GPS (Global Positioning System) determine your location?", options: ["By communicating with cell towers", "By receiving signals from multiple satellites", "By using the Earth's magnetic field", "By connecting to the internet"], correctAnswer: "By receiving signals from multiple satellites" },
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
  },
    "speed-calculation-challenge-math-9": {
    questions: [
      { text: "What is 1.5 x 20?", options: ["3", "30", "300", "21.5"], correctAnswer: "30" },
      { text: "What is 3/4 of 80?", options: ["40", "50", "60", "70"], correctAnswer: "60" },
      { text: "Calculate 15²", options: ["125", "215", "225", "250"], correctAnswer: "225" },
      { text: "What is 5% of 300?", options: ["5", "10", "15", "30"], correctAnswer: "15" },
      { text: "Solve for x: (2x)/3 = 4", options: ["5", "6", "8", "12"], correctAnswer: "6" },
      { text: "What is 99 + 999?", options: ["1098", "1099", "1198", "1998"], correctAnswer: "1098" },
      { text: "Find the average of 5, 10, and 15.", options: ["10", "15", "20", "30"], correctAnswer: "10" },
      { text: "What is 2³ + 3²?", options: ["12", "17", "25", "36"], correctAnswer: "17" },
      { text: "If a train travels at 80 km/h, how far does it go in 45 minutes?", options: ["45 km", "60 km", "75 km", "80 km"], correctAnswer: "60 km" },
      { text: "What is 1 - 0.25?", options: ["0.75", "0.50", "0.25", "1.25"], correctAnswer: "0.75" },
    ]
  }
};

    

    


