
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
    gradeLevels: [9, 12],
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
    subjects: ["Computer Science"],
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
  "equation-solver-race-math-8": {
    questions: [
      { text: "Solve for x: 2x - 5 = x + 3", options: ["x=8", "x=2", "x=5", "x=-8"], correctAnswer: "x=8" },
      { text: "Solve for y: y/4 + 3 = 7", options: ["y=16", "y=10", "y=28", "y=40"], correctAnswer: "y=16" },
      { text: "Solve for z: z² = 81", options: ["z=9", "z=9, z=-9", "z=81", "z=40.5"], correctAnswer: "z=9, z=-9" },
      { text: "Solve for a: 3(a - 2) = 15", options: ["a=5", "a=7", "a=9", "a=17"], correctAnswer: "a=7" },
      { text: "Solve for b: 5 - b = 12", options: ["b=7", "b=-7", "b=17", "b=-17"], correctAnswer: "b=-7" },
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
  "equation-solver-race-math-10": {
    questions: [
      { text: "Solve for x: x² + 5x + 6 = 0", options: ["x=-2, x=-3", "x=2, x=3", "x=-1, x=-6", "x=1, x=6"], correctAnswer: "x=-2, x=-3" },
      { text: "Solve for y: (y+2)/(y-1) = 4", options: ["y=2", "y=3", "y=1", "y=0"], correctAnswer: "y=2" },
      { text: "Solve the system: 3x - 2y = 10, x + y = 5", options: ["x=4, y=1", "x=1, y=4", "x=2, y=3", "x=3, y=2"], correctAnswer: "x=4, y=1" },
      { text: "Solve for a: |2a - 1| = 5", options: ["a=3, a=-2", "a=3", "a=-2", "a=2, a=-3"], correctAnswer: "a=3, a=-2" },
      { text: "Solve for b: 3^(b+1) = 81", options: ["b=1", "b=2", "b=3", "b=4"], correctAnswer: "b=3" },
    ]
  },
  "equation-solver-race-math-11": {
    questions: [
      { text: "Solve for x: log₂(x) + log₂(x-2) = 3", options: ["x=4", "x=-2", "x=4, x=-2", "x=8"], correctAnswer: "x=4" },
      { text: "Solve the trigonometric equation for 0 ≤ θ < 2π: 2sin(θ) - 1 = 0", options: ["π/6, 5π/6", "π/3, 2π/3", "π/6, 11π/6", "π/3, 5π/3"], correctAnswer: "π/6, 5π/6" },
      { text: "Solve for y: e^(2y) - 3e^y + 2 = 0", options: ["y=ln(2), y=0", "y=ln(3), y=ln(2)", "y=2, y=1", "y=ln(2)"], correctAnswer: "y=ln(2), y=0" },
      { text: "Find the vertex of the parabola: y = 2x² - 8x + 5", options: ["(2, -3)", "(-2, 3)", "(2, 3)", "(-2, -3)"], correctAnswer: "(2, -3)" },
      { text: "Solve the matrix equation: [[1, 2], [3, 4]] * X = [[5], [6]]", options: ["X=[[-4], [4.5]]", "X=[[4], [-4.5]]", "X=[[1], [2]]", "X=[[2], [1]]"], correctAnswer: "X=[[-4], [4.5]]" },
    ]
  },
  "equation-solver-race-math-12": {
    questions: [
      { text: "Solve the differential equation: dy/dx = 2x", options: ["y = x² + C", "y = 2x² + C", "y = x + C", "y = e^(2x) + C"], correctAnswer: "y = x² + C" },
      { text: "Find the limit: lim(x->0) sin(x)/x", options: ["0", "1", "∞", "Does Not Exist"], correctAnswer: "1" },
      { text: "Solve for x: ∫(from 0 to x) 2t dt = 9", options: ["x=3", "x=9", "x=3, x=-3", "x=4.5"], correctAnswer: "x=3, x=-3" },
      { text: "Solve the system of linear equations: x+y+z=6, 2x-y+z=3, x+z=4", options: ["x=1, y=2, z=3", "x=3, y=2, z=1", "x=2, y=3, z=1", "x=1, y=3, z=2"], correctAnswer: "x=1, y=2, z=3" },
      { text: "Find the eigenvalues of the matrix [[2, 1], [1, 2]]", options: ["λ=1, λ=3", "λ=2, λ=1", "λ=2, λ=2", "λ=0, λ=4"], correctAnswer: "λ=1, λ=3" },
    ]
  },
  "math-puzzle-adventure-math-6": {
    questions: [
      { text: "A farmer has 15 sheep, and all but 8 die. How many are left?", options: ["7", "8", "15", "23"], correctAnswer: "8" },
      { text: "What has an eye, but cannot see?", options: ["A needle", "A potato", "A storm", "A hurricane"], correctAnswer: "A needle" },
      { text: "I am an odd number. Take away one letter and I become even. What number am I?", options: ["Seven", "Eleven", "One", "Nine"], correctAnswer: "Seven" },
      { text: "If there are 4 apples and you take away 3, how many do you have?", options: ["1", "3", "4", "7"], correctAnswer: "3" },
      { text: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ...?", options: ["11", "12", "13", "14"], correctAnswer: "13" },
      { text: "What has a neck without a head, and a body without legs?", options: ["A bottle", "A shirt", "A snake", "A river"], correctAnswer: "A bottle" },
      { text: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", options: ["A dream", "A map", "A book", "A painting"], correctAnswer: "A map" },
      { text: "What question can you never answer yes to?", options: ["Are you asleep yet?", "Are you lying?", "Is this statement false?", "All of the above"], correctAnswer: "Are you asleep yet?" },
    ]
  },
  "math-puzzle-adventure-logic-6": {
    questions: [
      { text: "A farmer has 15 sheep, and all but 8 die. How many are left?", options: ["7", "8", "15", "23"], correctAnswer: "8" },
      { text: "What has an eye, but cannot see?", options: ["A needle", "A potato", "A storm", "A hurricane"], correctAnswer: "A needle" },
      { text: "I am an odd number. Take away one letter and I become even. What number am I?", options: ["Seven", "Eleven", "One", "Nine"], correctAnswer: "Seven" },
      { text: "If there are 4 apples and you take away 3, how many do you have?", options: ["1", "3", "4", "7"], correctAnswer: "3" },
      { text: "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ...?", options: ["11", "12", "13", "14"], correctAnswer: "13" },
      { text: "What has a neck without a head, and a body without legs?", options: ["A bottle", "A shirt", "A snake", "A river"], correctAnswer: "A bottle" },
      { text: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", options: ["A dream", "A map", "A book", "A painting"], correctAnswer: "A map" },
      { text: "What question can you never answer yes to?", options: ["Are you asleep yet?", "Are you lying?", "Is this statement false?", "All of the above"], correctAnswer: "Are you asleep yet?" },
    ]
  },
  "math-puzzle-adventure-math-7": {
    questions: [
      { text: "If a hen and a half lay an egg and a half in a day and a half, how many hens does it take to lay 6 eggs in 6 days?", options: ["1 hen", "1.5 hens", "2 hens", "3 hens"], correctAnswer: "1.5 hens" },
      { text: "What is the missing number? 8, 6, 7, 5, 6, 4, ?", options: ["2", "3", "5", "6"], correctAnswer: "5" },
      { text: "If you have a 3-gallon jug and a 5-gallon jug, how can you measure out exactly 4 gallons?", options: ["Fill 5, pour to 3, empty 3, pour 2 from 5 to 3, fill 5, pour to 3", "Fill 3, pour to 5, fill 3, pour to 5, empty 5, pour 1 from 3 to 5", "It's impossible", "Fill both and pour out 4 gallons"], correctAnswer: "Fill 5, pour to 3, empty 3, pour 2 from 5 to 3, fill 5, pour to 3" },
      { text: "A man has a wolf, a goat, and a cabbage. He must cross a river with a boat that can only carry him and one other item. How does he do it?", options: ["Leave wolf and cabbage", "Take goat, return, take wolf, bring goat back, take cabbage, return, take goat", "Take wolf, return, take cabbage, return, take goat", "It's impossible"], correctAnswer: "Take goat, return, take wolf, bring goat back, take cabbage, return, take goat" },
    ]
  },
  "math-puzzle-adventure-logic-7": {
    questions: [
      { text: "If a hen and a half lay an egg and a half in a day and a half, how many hens does it take to lay 6 eggs in 6 days?", options: ["1 hen", "1.5 hens", "2 hens", "3 hens"], correctAnswer: "1.5 hens" },
      { text: "What is the missing number? 8, 6, 7, 5, 6, 4, ?", options: ["2", "3", "5", "6"], correctAnswer: "5" },
      { text: "If you have a 3-gallon jug and a 5-gallon jug, how can you measure out exactly 4 gallons?", options: ["Fill 5, pour to 3, empty 3, pour 2 from 5 to 3, fill 5, pour to 3", "Fill 3, pour to 5, fill 3, pour to 5, empty 5, pour 1 from 3 to 5", "It's impossible", "Fill both and pour out 4 gallons"], correctAnswer: "Fill 5, pour to 3, empty 3, pour 2 from 5 to 3, fill 5, pour to 3" },
      { text: "A man has a wolf, a goat, and a cabbage. He must cross a river with a boat that can only carry him and one other item. How does he do it?", options: ["Leave wolf and cabbage", "Take goat, return, take wolf, bring goat back, take cabbage, return, take goat", "Take wolf, return, take cabbage, return, take goat", "It's impossible"], correctAnswer: "Take goat, return, take wolf, bring goat back, take cabbage, return, take goat" },
    ]
  },
  "math-puzzle-adventure-math-8": {
    questions: [
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
  "math-puzzle-adventure-math-9": {
    questions: [
      { text: "What is the next prime number after 7?", options: ["9", "11", "13", "15"], correctAnswer: "11" },
      { text: "A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the portrait?", options: ["His son", "Himself", "His father", "His uncle"], correctAnswer: "His son" },
      { text: "There are 10 socks in a drawer: 5 pairs of black, 3 pairs of white, and 2 pairs of grey. You pick socks in the dark. How many must you pick to be sure of having a matching pair?", options: ["3", "4", "11", "6"], correctAnswer: "4" },
      { text: "What has keys but opens no locks?", options: ["A keyboard", "A map", "A piano", "A chest"], correctAnswer: "A piano" },
    ]
  },
  "math-puzzle-adventure-logic-9": {
    questions: [
      { text: "What is the next prime number after 7?", options: ["9", "11", "13", "15"], correctAnswer: "11" },
      { text: "A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the portrait?", options: ["His son", "Himself", "His father", "His uncle"], correctAnswer: "His son" },
      { text: "There are 10 socks in a drawer: 5 pairs of black, 3 pairs of white, and 2 pairs of grey. You pick socks in the dark. How many must you pick to be sure of having a matching pair?", options: ["3", "4", "11", "6"], correctAnswer: "4" },
      { text: "What has keys but opens no locks?", options: ["A keyboard", "A map", "A piano", "A chest"], correctAnswer: "A piano" },
    ]
  },
  "math-puzzle-adventure-math-10": {
    questions: [
      { text: "What is black when you buy it, red when you use it, and gray when you throw it away?", options: ["A match", "Charcoal", "A steak", "A newspaper"], correctAnswer: "Charcoal" },
      { text: "Which number should come next in the pattern? 1, 1, 2, 3, 5, 8, ...", options: ["11", "12", "13", "14"], correctAnswer: "13" },
      { text: "What gets wetter as it dries?", options: ["A towel", "A sponge", "Ice", "The ground"], correctAnswer: "A towel" },
      { text: "Forward I am heavy, but backward I am not. What am I?", options: ["A scale", "A word", "A ton", "A truck"], correctAnswer: "A ton" },
    ]
  },
  "math-puzzle-adventure-logic-10": {
    questions: [
      { text: "What is black when you buy it, red when you use it, and gray when you throw it away?", options: ["A match", "Charcoal", "A steak", "A newspaper"], correctAnswer: "Charcoal" },
      { text: "Which number should come next in the pattern? 1, 1, 2, 3, 5, 8, ...", options: ["11", "12", "13", "14"], correctAnswer: "13" },
      { text: "What gets wetter as it dries?", options: ["A towel", "A sponge", "Ice", "The ground"], correctAnswer: "A towel" },
      { text: "Forward I am heavy, but backward I am not. What am I?", options: ["A scale", "A word", "A ton", "A truck"], correctAnswer: "A ton" },
    ]
  },
  "periodic-table-explorer-science-8": {
    questions: [
      { text: "What is the chemical symbol for Gold?", options: ["Au", "Ag", "Go", "Gd"], correctAnswer: "Au" },
      { text: "Which element is number 1 on the periodic table?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], correctAnswer: "Hydrogen" },
      { text: "What is the chemical symbol for Iron?", options: ["I", "Ir", "Fe", "In"], correctAnswer: "Fe" },
      { text: "What is the atomic number of Carbon?", options: ["5", "6", "7", "8"], correctAnswer: "6" },
      { text: "Which of these is a noble gas?", options: ["Oxygen", "Nitrogen", "Neon", "Chlorine"], correctAnswer: "Neon" },
    ]
  },
  "periodic-table-explorer-science-9": {
    questions: [
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
    ]
  },
  "periodic-table-explorer-science-11": {
    questions: [
      { text: "What type of element is Silicon (Si)?", options: ["Metal", "Nonmetal", "Metalloid", "Noble Gas"], correctAnswer: "Metalloid" },
      { text: "Which group of elements is known for being largely unreactive?", options: ["Alkali Metals", "Halogens", "Transition Metals", "Noble Gases"], correctAnswer: "Noble Gases" },
      { text: "What is the chemical symbol for Tungsten?", options: ["T", "Tu", "W", "Tg"], correctAnswer: "W" },
      { text: "Which element is liquid at room temperature besides Mercury?", options: ["Bromine", "Gallium", "Cesium", "Francium"], correctAnswer: "Bromine" },
      { text: "What are lanthanides and actinides?", options: ["Groups 1 and 2", "The p-block elements", "The inner transition metals", "The noble gases"], correctAnswer: "The inner transition metals" },
    ]
  },
  "periodic-table-explorer-science-12": {
    questions: [
      { text: "What is ionization energy?", options: ["Energy released when an electron is added", "Energy required to remove an electron from an atom", "Energy of an atom's nucleus", "Energy stored in chemical bonds"], correctAnswer: "Energy required to remove an electron from an atom" },
      { text: "Which element has the highest first ionization energy?", options: ["Helium", "Hydrogen", "Fluorine", "Neon"], correctAnswer: "Helium" },
      { text: "What is the name of the elements in Group 17?", options: ["Alkali Metals", "Alkaline Earth Metals", "Halogens", "Noble Gases"], correctAnswer: "Halogens" },
      { text: "Which element has the electron configuration [Ar] 4s² 3d⁵?", options: ["Manganese (Mn)", "Chromium (Cr)", "Iron (Fe)", "Vanadium (V)"], correctAnswer: "Manganese (Mn)" },
      { text: "What is the trend of metallic character down a group?", options: ["Increases", "Decreases", "Stays the same", "No specific trend"], correctAnswer: "Increases" },
    ]
  },
  "physics-experiment-simulator-science-9": {
    questions: [
        { text: "What is Newton's first law of motion?", options: ["Energy is conserved", "Force = mass x acceleration", "An object in motion stays in motion", "For every action, there is an equal and opposite reaction"], correctAnswer: "An object in motion stays in motion" },
        { text: "What unit is used to measure electric current?", options: ["Volt", "Watt", "Ohm", "Ampere"], correctAnswer: "Ampere" },
        { text: "What is the formula for calculating work?", options: ["Work = Force / Distance", "Work = Force x Distance", "Work = Mass x Acceleration", "Work = Power x Time"], correctAnswer: "Work = Force x Distance" },
        { text: "Which color of light has the longest wavelength?", options: ["Violet", "Blue", "Green", "Red"], correctAnswer: "Red" },
        { text: "What is the force that opposes motion between two surfaces?", options: ["Gravity", "Inertia", "Friction", "Magnetism"], correctAnswer: "Friction" },
    ],
  },
  "physics-experiment-simulator-science-10": {
    questions: [
        { text: "What is Newton's Second Law of Motion?", options: ["F=ma", "For every action, there's an equal and opposite reaction", "Objects at rest stay at rest", "Energy cannot be created or destroyed"], correctAnswer: "F=ma" },
        { text: "What is kinetic energy?", options: ["Stored energy", "Energy of motion", "Energy from heat", "Energy from light"], correctAnswer: "Energy of motion" },
        { text: "What is the unit of measurement for frequency?", options: ["Hertz (Hz)", "Watt (W)", "Joule (J)", "Newton (N)"], correctAnswer: "Hertz (Hz)" },
        { text: "What does a convex lens do to parallel light rays?", options: ["Converges them to a focal point", "Diverges them", "Reflects them", "Absorbs them"], correctAnswer: "Converges them to a focal point" },
        { text: "What is the law of conservation of energy?", options: ["Energy can be created", "Energy is always lost as heat", "Energy cannot be created or destroyed, only transformed", "Energy is equal to mass times the speed of light squared"], correctAnswer: "Energy cannot be created or destroyed, only transformed" },
    ],
  },
  "physics-experiment-simulator-science-11": {
    questions: [
      { text: "What is Snell's Law related to?", options: ["Gravity", "Electromagnetism", "Refraction of light", "Thermodynamics"], correctAnswer: "Refraction of light" },
      { text: "What is the Doppler effect?", options: ["The change in frequency of a wave in relation to an observer who is moving relative to the wave source", "The bending of waves around an obstacle", "The interference of two waves", "The reflection of a wave"], correctAnswer: "The change in frequency of a wave in relation to an observer who is moving relative to the wave source" },
      { text: "What is the formula for momentum?", options: ["p = mv", "p = m/v", "p = F/t", "p = ma"], correctAnswer: "p = mv" },
      { text: "What are the three modes of heat transfer?", options: ["Conduction, Convection, Radiation", "Solid, Liquid, Gas", "Kinetic, Potential, Thermal", "Force, Mass, Acceleration"], correctAnswer: "Conduction, Convection, Radiation" },
      { text: "In a series circuit, how does the total resistance relate to individual resistances?", options: ["It is the sum of the individual resistances", "It is less than any individual resistance", "It is the average of the individual resistances", "It depends on the voltage"], correctAnswer: "It is the sum of the individual resistances" },
    ]
  },
  "physics-experiment-simulator-science-12": {
    questions: [
      { text: "What does the equation E=mc² represent?", options: ["Kinetic energy", "Potential energy", "Mass-energy equivalence", "The law of gravity"], correctAnswer: "Mass-energy equivalence" },
      { text: "According to special relativity, what happens to time for an object moving at very high speeds?", options: ["It speeds up", "It slows down (time dilation)", "It stops", "It reverses"], correctAnswer: "It slows down (time dilation)" },
      { text: "What is quantum entanglement?", options: ["A type of chemical bond", "Particles linked in a way that their fates are intertwined, regardless of distance", "The uncertainty in a particle's position", "The wave-particle duality of matter"], correctAnswer: "Particles linked in a way that their fates are intertwined, regardless of distance" },
      { text: "What is the significance of Planck's constant (h)?", options: ["It relates the energy of a photon to its frequency", "It's the speed of light", "It's the gravitational constant", "It's Avogadro's number"], correctAnswer: "It relates the energy of a photon to its frequency" },
      { text: "What is a black hole?", options: ["A very dense star", "A region of spacetime where gravity is so strong that nothing can escape", "A wormhole to another universe", "A dark nebula"], correctAnswer: "A dark nebula" },
    ]
  },
  "biology-treasure-hunt-science-6": {
    questions: [
      { text: "What part of a plant absorbs water and nutrients from the soil?", options: ["Leaves", "Stem", "Roots", "Flower"], correctAnswer: "Roots" },
      { text: "What do you call an animal that only eats plants?", options: ["Carnivore", "Omnivore", "Herbivore", "Predator"], correctAnswer: "Herbivore" },
      { text: "What is the process called when a caterpillar turns into a butterfly?", options: ["Metamorphosis", "Hibernation", "Migration", "Reproduction"], correctAnswer: "Metamorphosis" },
      { text: "Which of these is NOT a living thing?", options: ["A tree", "A mushroom", "A rock", "A butterfly"], correctAnswer: "A rock" },
      { text: "What gas do humans need to breathe to live?", options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"], correctAnswer: "Oxygen" },
    ]
  },
  "biology-treasure-hunt-science-7": {
    questions: [
      { text: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"], correctAnswer: "Mitochondrion" },
      { text: "What system in the body is responsible for pumping blood?", options: ["Respiratory System", "Digestive System", "Nervous System", "Circulatory System"], correctAnswer: "Circulatory System" },
      { text: "What is the name of the green pigment in plants?", options: ["Chlorophyll", "Melanin", "Hemoglobin", "Carotene"], correctAnswer: "Chlorophyll" },
      { text: "What is a food chain?", options: ["A list of ingredients", "A chain of restaurants", "How energy is passed from one living thing to another", "A type of plant"], correctAnswer: "How energy is passed from one living thing to another" },
      { text: "Which part of the flower produces pollen?", options: ["Petal", "Sepal", "Stamen", "Pistil"], correctAnswer: "Stamen" },
    ]
  },
  "biology-treasure-hunt-science-8": {
    questions: [
      { text: "What process do plants use to make their own food?", options: ["Respiration", "Transpiration", "Photosynthesis", "Pollination"], correctAnswer: "Photosynthesis" },
      { text: "Which part of the blood carries oxygen?", options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"], correctAnswer: "Red blood cells" },
      { text: "What is the main function of the kidneys?", options: ["Pump blood", "Digest food", "Filter waste from blood", "Produce hormones"], correctAnswer: "Filter waste from blood" },
      { text: "Which of these is a producer in an ecosystem?", options: ["Lion", "Grass", "Mushroom", "Human"], correctAnswer: "Grass" },
      { text: "What type of joint is the knee?", options: ["Ball and socket", "Hinge", "Pivot", "Saddle"], correctAnswer: "Hinge" },
    ],
  },
  "biology-treasure-hunt-science-9": {
    questions: [
      { text: "What is DNA?", options: ["The energy currency of the cell", "A protein", "The genetic material that carries instructions for development", "A type of sugar"], correctAnswer: "The genetic material that carries instructions for development" },
      { text: "What is the difference between a prokaryotic and eukaryotic cell?", options: ["Prokaryotic cells have a nucleus", "Eukaryotic cells have a nucleus", "Prokaryotic cells are always multi-cellular", "Eukaryotic cells lack a cell membrane"], correctAnswer: "Eukaryotic cells have a nucleus" },
      { text: "What is natural selection?", options: ["The process where humans choose desirable traits", "The process whereby organisms better adapted to their environment tend to survive and produce more offspring", "A type of genetic mutation", "The aseasonal movement of animals"], correctAnswer: "The process whereby organisms better adapted to their environment tend to survive and produce more offspring" },
      { text: "What are the four bases in DNA?", options: ["A, B, C, D", "Adenine, Guanine, Cytosine, Uracil", "Adenine, Guanine, Cytosine, Thymine", "Alanine, Glycine, Cysteine, Tyrosine"], correctAnswer: "Adenine, Guanine, Cytosine, Thymine" },
      { text: "What is the role of enzymes in the body?", options: ["To store genetic information", "To act as catalysts to speed up chemical reactions", "To transport oxygen", "To provide structural support"], correctAnswer: "To act as catalysts to speed up chemical reactions" },
    ]
  },
  "biology-treasure-hunt-science-10": {
    questions: [
      { text: "What are the four main types of organic macromolecules in living organisms?", options: ["Carbohydrates, Lipids, Proteins, Nucleic Acids", "Water, Salt, Sugar, Fat", "Vitamins, Minerals, Proteins, Fats", "DNA, RNA, ATP, ADP"], correctAnswer: "Carbohydrates, Lipids, Proteins, Nucleic Acids" },
      { text: "What is the role of ribosomes in a cell?", options: ["Energy production", "Waste disposal", "Protein synthesis", "Cell division"], correctAnswer: "Protein synthesis" },
      { text: "Describe the function of the endoplasmic reticulum.", options: ["Modifies, sorts, and packages proteins and lipids", "Controls cell activities", "Site of photosynthesis", "Breaks down old cell parts"], correctAnswer: "Modifies, sorts, and packages proteins and lipids" },
      { text: "What are the stages of mitosis, in order?", options: ["Prophase, Metaphase, Anaphase, Telophase", "Anaphase, Telophase, Prophase, Metaphase", "Metaphase, Prophase, Telophase, Anaphase", "Telophase, Anaphase, Metaphase, Prophase"], correctAnswer: "Prophase, Metaphase, Anaphase, Telophase" },
      { text: "What is the difference between genotype and phenotype?", options: ["One is for plants, one for animals", "Genotype is genetic makeup, phenotype is physical appearance", "Genotype is dominant, phenotype is recessive", "There is no difference"], correctAnswer: "Genotype is genetic makeup, phenotype is physical appearance" },
    ]
  },
  "coding-quest-computer-science-6": {
    questions: [
        { text: "What is an input device?", options: ["A speaker", "A monitor", "A keyboard", "A printer"], correctAnswer: "A keyboard" },
        { text: "What is an output device?", options: ["A mouse", "A scanner", "A microphone", "A monitor"], correctAnswer: "A monitor" },
        { text: "What does CPU stand for?", options: ["Computer Processing Unit", "Central Processing Unit", "Central Power Unit", "Computer Power Unit"], correctAnswer: "Central Processing Unit" },
        { text: "What is the 'brain' of the computer?", options: ["Monitor", "Keyboard", "CPU", "Mouse"], correctAnswer: "CPU" },
        { text: "Which of these stores data, even when the computer is off?", options: ["RAM", "CPU", "Hard Drive", "Monitor"], correctAnswer: "Hard Drive" },
    ]
  },
  "coding-quest-computer-science-7": {
    questions: [
        { text: "What is RAM?", options: ["A type of permanent storage", "A programming language", "Random Access Memory, used for temporary data", "A computer's processor"], correctAnswer: "Random Access Memory, used for temporary data" },
        { text: "What is a 'URL'?", options: ["A computer file", "A type of software", "The address of a website", "A CPU component"], correctAnswer: "The address of a website" },
        { text: "What is binary code?", options: ["A code that uses 10 different digits", "A code made of pictures", "A code that uses only 1s and 0s", "A secret language"], correctAnswer: "A code that uses only 1s and 0s" },
        { text: "What is an 'operating system'?", options: ["A game", "Software that manages all computer hardware and software", "A website", "A type of monitor"], correctAnswer: "Software that manages all computer hardware and software" },
        { text: "Which of these is an example of an operating system?", options: ["Microsoft Word", "Google Chrome", "Windows", "Adobe Photoshop"], correctAnswer: "Windows" },
    ]
  },
  "coding-quest-computer-science-8": {
    questions: [
        { text: "What is an 'algorithm'?", options: ["A type of computer chip", "A step-by-step procedure for solving a problem", "A brand of software", "A computer virus"], correctAnswer: "A step-by-step procedure for solving a problem" },
        { text: "What does HTML stand for?", options: ["HyperText Markup Language", "High-Tech Machine Learning", "Hyperlink and Text Management Logic", "Home Tool Markup Link"], correctAnswer: "HyperText Markup Language" },
        { text: "In programming, what is a 'variable'?", options: ["A fixed value", "A container for storing data", "A type of loop", "A comment in the code"], correctAnswer: "A container for storing data" },
        { text: "What is a 'loop' used for in programming?", options: ["To stop the program", "To make a decision", "To repeat a block of code", "To store data"], correctAnswer: "To repeat a block of code" },
        { text: "Which of the following is considered a high-level programming language?", options: ["Assembly", "Machine Code", "Python", "Binary"], correctAnswer: "Python" },
    ]
  },
  "coding-quest-computer-science-9": {
    questions: [
        { text: "What does 'debugging' mean?", options: ["Writing code faster", "Finding and fixing errors in code", "Adding comments to code", "Designing the user interface"], correctAnswer: "Finding and fixing errors in code" },
        { text: "What is a 'conditional statement' (like if-else)?", options: ["It repeats code", "It stores a value", "It performs different actions based on a condition", "It defines a new function"], correctAnswer: "It performs different actions based on a condition" },
        { text: "What is 'source code'?", options: ["The code that a computer directly executes", "The human-readable instructions written by a programmer", "A secret password", "The output of a program"], correctAnswer: "The human-readable instructions written by a programmer" },
        { text: "What is the purpose of a 'compiler'?", options: ["To run the program", "To translate high-level code into machine code", "To find bugs", "To design the program's look"], correctAnswer: "To translate high-level code into machine code" },
        { text: "What is a 'function' or 'method'?", options: ["A variable", "A loop", "A named block of reusable code", "A conditional statement"], correctAnswer: "A named block of reusable code" },
    ],
  },
  "coding-quest-computer-science-10": {
    questions: [
        { text: "What is the primary purpose of a database?", options: ["To style webpages", "To store and retrieve data efficiently", "To perform complex calculations", "To run operating systems"], correctAnswer: "To store and retrieve data efficiently" },
        { text: "What is an API?", options: ["Advanced Programming Interface", "Application Programming Interface", "Automated Program Interaction", "Application Process Integration"], correctAnswer: "Application Programming Interface" },
        { text: "In Object-Oriented Programming, what is 'inheritance'?", options: ["A way to create a new class from an existing class", "A type of data structure", "A loop that never ends", "A method for debugging code"], correctAnswer: "A way to create a new class from an existing class" },
        { text: "What is the difference between 'let' and 'const' in JavaScript?", options: ["They are the same", "'let' is for numbers, 'const' is for strings", "'const' variables cannot be reassigned, 'let' variables can", "'let' is global, 'const' is local"], correctAnswer: "'const' variables cannot be reassigned, 'let' variables can" },
        { text: "What does 'DRY' stand for in software development?", options: ["Don't Rush Your-code", "Don't Repeat Yourself", "Data Recovery Yard", "Develop, Review, Yield"], correctAnswer: "Don't Repeat Yourself" },
    ]
  },
  "coding-quest-computer-science-11": {
    questions: [
        { text: "What is a 'boolean' data type?", options: ["A number with a decimal", "A text string", "A value that can only be true or false", "A list of items"], correctAnswer: "A value that can only be true or false" },
        { text: "Which data structure operates on a 'First-In, First-Out' (FIFO) basis?", options: ["Stack", "Queue", "Array", "Tree"], correctAnswer: "Queue" },
        { text: "What is the time complexity of a binary search algorithm?", options: ["O(n)", "O(log n)", "O(n²)", "O(1)"], correctAnswer: "O(log n)" },
        { text: "What is a 'version control system' like Git?", options: ["A code editor", "A database", "A tool for tracking changes in code", "A web server"], correctAnswer: "A tool for tracking changes in code" },
        { text: "What is 'recursion' in programming?", options: ["A function that calls itself", "A loop that runs a fixed number of times", "A way to handle errors", "A type of variable"], correctAnswer: "A function that calls itself" }
    ]
  },
  "coding-quest-computer-science-12": {
    questions: [
        { text: "What is dynamic programming?", options: ["Programming with a dynamic UI", "A method for solving complex problems by breaking them down into simpler subproblems", "A language that doesn't require compiling", "A way to manage database transactions"], correctAnswer: "A method for solving complex problems by breaking them down into simpler subproblems" },
        { text: "What is the main difference between a process and a thread?", options: ["Processes are for networking, threads are for CPU tasks", "A process is a program in execution, and a thread is a path of execution within a process", "They are the same thing", "Threads are heavyweight, processes are lightweight"], correctAnswer: "A process is a program in execution, and a thread is a path of execution within a process" },
        { text: "What is a 'race condition' in concurrent programming?", options: ["When two threads are competing to finish first", "An error caused by unpredictable timing of operations by multiple threads", "A security exploit", "A type of sorting algorithm"], correctAnswer: "An error caused by unpredictable timing of operations by multiple threads" },
        { text: "Explain the concept of 'sharding' in the context of databases.", options: ["Encrypting a database", "Creating a backup of a database", "Horizontally partitioning data into smaller, more manageable parts", "A type of SQL join"], correctAnswer: "Horizontally partitioning data into smaller, more manageable parts" },
        { text: "What is the CAP theorem in distributed systems?", options: ["A system can only have two of the three: Consistency, Availability, and Partition tolerance", "A system must have Capacity, Availability, and Performance", "A security principle for APIs", "A data compression algorithm"], correctAnswer: "A system can only have two of the three: Consistency, Availability, and Partition tolerance" },
    ]
  },
  "chemistry-lab-science-10": {
    questions: [
      { text: "What is the pH of a neutral substance like pure water?", options: ["0", "7", "14", "1"], correctAnswer: "7" },
      { text: "What happens in an oxidation reaction?", options: ["Loss of electrons", "Gain of electrons", "Loss of protons", "Gain of protons"], correctAnswer: "Loss of electrons" },
      { text: "What is the common name for Sodium Chloride (NaCl)?", options: ["Sugar", "Vinegar", "Baking Soda", "Table Salt"], correctAnswer: "Table Salt" },
      { text: "Which gas is produced when an acid reacts with a metal?", options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"], correctAnswer: "Hydrogen" },
      { text: "What is a substance that speeds up a chemical reaction called?", options: ["An inhibitor", "A catalyst", "A reactant", "A product"], correctAnswer: "A catalyst" },
    ]
  },
  "chemistry-lab-science-11": {
    questions: [
      { text: "What is the molar mass of H₂O (Water)? (H=1, O=16)", options: ["17 g/mol", "18 g/mol", "19 g/mol", "2 g/mol"], correctAnswer: "18 g/mol" },
      { text: "Balance the equation: __CH₄ + __O₂ -> __CO₂ + __H₂O", options: ["1, 2, 1, 2", "1, 1, 1, 1", "2, 1, 2, 1", "1, 2, 2, 1"], correctAnswer: "1, 2, 1, 2" },
      { text: "What is an endothermic reaction?", options: ["A reaction that releases heat", "A reaction that absorbs heat", "A reaction that produces light", "A reaction that happens instantly"], correctAnswer: "A reaction that absorbs heat" },
      { text: "According to Le Chatelier's principle, if you increase the pressure on the system 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), which way will the equilibrium shift?", options: ["To the right (products)", "To the left (reactants)", "No change", "The reaction stops"], correctAnswer: "To the right (products)" },
      { text: "What is the pH of a 0.01 M solution of HCl?", options: ["1", "2", "12", "13"], correctAnswer: "2" },
    ]
  },
  "chemistry-lab-science-12": {
    questions: [
      { text: "What type of bond is formed between two non-metal atoms?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], correctAnswer: "Covalent" },
      { text: "What is Avogadro's number?", options: ["6.022 x 10²³", "3.14159", "9.8 m/s²", "2.718"], correctAnswer: "6.022 x 10²³" },
      { text: "What is the general formula for an alkane?", options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"], correctAnswer: "CₙH₂ₙ₊₂" },
      { text: "In an electrochemical cell, where does reduction occur?", options: ["Anode", "Cathode", "Salt bridge", "Wire"], correctAnswer: "Cathode" },
      { text: "What is the name of the functional group -OH?", options: ["Carboxyl", "Carbonyl", "Hydroxyl", "Amine"], correctAnswer: "Hydroxyl" },
    ]
  },
  "logic-puzzle-mania-logic-6": {
    questions: [
      { text: "Which number logically follows this series? 4, 6, 9, 6, 14, 6, ...", options: ["6", "17", "19", "21"], correctAnswer: "19" },
      { text: "Which word doesn't belong? Apple, Banana, Rose, Orange", options: ["Apple", "Banana", "Rose", "Orange"], correctAnswer: "Rose" },
      { text: "There are two ducks in front of a duck, two ducks behind a duck and a duck in the middle. How many ducks are there?", options: ["5", "4", "3", "2"], correctAnswer: "3" },
      { text: "What comes next in the pattern? J, F, M, A, M, ...", options: ["J", "A", "S", "O"], correctAnswer: "J" },
      { text: "Which number is the odd one out? 9, 16, 25, 36, 48", options: ["9", "16", "25", "48"], correctAnswer: "48" },
    ]
  },
  "logic-puzzle-mania-logic-7": {
    questions: [
      { text: "A is the father of B. But B is not the son of A. How is that possible?", options: ["B is adopted", "B is A's daughter", "A is not the real father", "It's a mistake"], correctAnswer: "B is A's daughter" },
      { text: "If you rearrange the letters 'CIFAIPC', you would have the name of a(n):", options: ["City", "Animal", "Ocean", "Country"], correctAnswer: "Ocean" },
      { text: "A man is looking at a portrait. Someone asks him whose portrait he is looking at. He replies, 'Brothers and sisters I have none, but that man's father is my father's son.' Who is in the portrait?", options: ["His son", "Himself", "His father", "His uncle"], correctAnswer: "His son" },
      { text: "I am always hungry, I must always be fed. The finger I lick will soon turn red. What am I?", options: ["A baby", "A fire", "A stray cat", "A leech"], correctAnswer: "A fire" },
    ]
  },
  "logic-puzzle-mania-logic-8": {
    questions: [
      { text: "What goes up but never comes down?", options: ["A balloon", "Smoke", "Your age", "A bird"], correctAnswer: "Your age" },
      { text: "What has a thumb and four fingers but is not a hand?", options: ["A glove", "A footprint", "A monkey's paw", "A drawing"], correctAnswer: "A glove" },
      { text: "What can you catch but not throw?", options: ["A ball", "A fish", "A cold", "A frisbee"], correctAnswer: "A cold" },
      { text: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", options: ["A flag", "A whisper", "An echo", "A ghost"], correctAnswer: "An echo" },
    ]
  },
  "logic-puzzle-mania-logic-9": {
    questions: [
      { text: "What is always in front of you but can’t be seen?", options: ["The past", "The present", "The future", "The air"], correctAnswer: "The future" },
      { text: "If a plane crashes on the border between the U.S. and Canada, where do you bury the survivors?", options: ["U.S.", "Canada", "You don't bury survivors", "The nearest city"], correctAnswer: "You don't bury survivors" },
      { text: "Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?", options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"], correctAnswer: "(1/8)" },
      { text: "Which of the following is the 'odd one out': Cat, Dog, Lion, Horse, Cheetah", options: ["Dog", "Horse", "Lion", "Cat"], correctAnswer: "Horse" },
    ]
  },
  "logic-puzzle-mania-logic-10": {
    questions: [
      { text: "A man builds a house with four sides, and it is rectangular in shape. Each side has a southern exposure. A big bear walks by. What color is the bear?", options: ["Brown", "Black", "White", "Grizzly"], correctAnswer: "White" },
      { text: "What is it that's full of holes but can still hold water?", options: ["A net", "A sponge", "A sieve", "A leaky bucket"], correctAnswer: "A sponge" },
      { text: "You have a 5-gallon jug and a 3-gallon jug. How can you measure exactly 4 gallons of water?", options: ["It's impossible", "Fill 5, pour into 3, empty 3, pour rest from 5 into 3, fill 5, top off 3", "Fill 3, pour into 5, fill 3, pour into 5", "Fill 5, pour out 1"], correctAnswer: "Fill 5, pour into 3, empty 3, pour rest from 5 into 3, fill 5, top off 3" },
      { text: "A ship is at anchor. Over the side hangs a rope ladder with its end just touching the water. The rungs are one foot apart and the tide rises at 6 inches per hour. How long will it be until the water covers the first three rungs?", options: ["6 hours", "4 hours", "Never", "2 hours"], correctAnswer: "Never" },
    ]
  },
  "logic-puzzle-mania-logic-11": {
    questions: [
      { text: "All bloops are razzies. All razzies are lazzies. Therefore, all bloops are lazzies.", options: ["True", "False", "Cannot be determined", "Sometimes true"], correctAnswer: "True" },
      { text: "If some A are B, and some B are C, does it follow that some A are C?", options: ["Yes, always", "No, not necessarily", "Only if A, B, and C are numbers", "Yes, but only if all B are C"], correctAnswer: "No, not necessarily" },
      { text: "A statement is made: 'This statement is false.' Is the statement true or false?", options: ["True", "False", "It is a paradox", "Both true and false"], correctAnswer: "It is a paradox" },
      { text: "In a village, the barber shaves everyone who does not shave themselves. Who shaves the barber?", options: ["The barber shaves himself", "Another barber shaves him", "No one shaves the barber", "This is a paradox (Barber's Paradox)"], correctAnswer: "This is a paradox (Barber's Paradox)" },
    ]
  },
  "logic-puzzle-mania-logic-12": {
    questions: [
      { text: "What is the 'P vs NP' problem?", options: ["A problem about physics", "The question of whether every problem whose solution can be quickly verified can also be quickly solved", "A problem in number theory", "A problem about networking protocols"], correctAnswer: "The question of whether every problem whose solution can be quickly verified can also be quickly solved" },
      { text: "What is a 'Turing Machine'?", options: ["A physical computer built by Alan Turing", "A type of encryption machine", "A mathematical model of computation that defines an abstract machine", "A quantum computer"], correctAnswer: "A mathematical model of computation that defines an abstract machine" },
      { text: "What is the 'Halting Problem'?", options: ["The problem of determining if a computer has enough power to run a program", "The problem of determining, from a description of an arbitrary computer program and an input, whether the program will finish running or continue to run forever", "The problem of stopping a program that is in an infinite loop", "The problem of preventing a computer from overheating"], correctAnswer: "The problem of determining, from a description of an arbitrary computer program and an input, whether the program will finish running or continue to run forever" },
      { text: "What is Occam's Razor?", options: ["A principle stating that 'entities should not be multiplied without necessity'", "A tool for precise cutting", "A logical paradox", "A mathematical formula"], correctAnswer: "A principle stating that 'entities should not be multiplied without necessity'" },
    ]
  },
  "math-science-trivia-stem-6": {
    questions: [
      { text: "What is the value of 'c' in E=mc²?", options: ["Mass", "Energy", "Speed of light", "A constant"], correctAnswer: "Speed of light" },
      { text: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correctAnswer: "8" },
      { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
      { text: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
    ]
  },
  "math-science-trivia-math-6": {
    questions: [
      { text: "What is the square root of 144?", options: ["10", "11", "12", "13"], correctAnswer: "12" },
      { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
      { text: "Solve for x: 2x + 10 = 20", options: ["2", "5", "10", "15"], correctAnswer: "5" },
    ]
  },
  "math-science-trivia-science-6": {
    questions: [
      { text: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correctAnswer: "8" },
      { text: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], correctAnswer: "Diamond" },
      { text: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
    ]
  },
  "math-science-trivia-stem-7": {
    questions: [
        { text: "Which scientist proposed the three laws of motion?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correctAnswer: "Isaac Newton" },
        { text: "What is the study of fossils called?", options: ["Biology", "Geology", "Paleontology", "Archeology"], correctAnswer: "Paleontology" },
        { text: "What is the value of 'c' in E=mc²?", options: ["Mass", "Energy", "Speed of light", "A constant"], correctAnswer: "Speed of light" },
        { text: "What is the name of the theory of evolution?", options: ["Big Bang Theory", "Theory of Relativity", "Natural Selection", "Cell Theory"], correctAnswer: "Natural Selection" },
    ]
  },
  "math-science-trivia-math-7": {
    questions: [
        { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
        { text: "Solve for x: 2x + 10 = 20", options: ["2", "5", "10", "15"], correctAnswer: "5" },
    ]
  },
  "math-science-trivia-science-7": {
    questions: [
        { text: "What is the name of the theory of evolution?", options: ["Big Bang Theory", "Theory of Relativity", "Natural Selection", "Cell Theory"], correctAnswer: "Natural Selection" },
        { text: "What is the study of fossils called?", options: ["Biology", "Geology", "Paleontology", "Archeology"], correctAnswer: "Paleontology" },
    ]
  },
  "math-science-trivia-stem-8": {
    questions: [
      { text: "What is the value of 'c' in E=mc²?", options: ["Mass", "Energy", "Speed of light", "A constant"], correctAnswer: "Speed of light" },
      { text: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correctAnswer: "8" },
      { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
      { text: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
    ]
  },
  "math-science-trivia-math-8": {
    questions: [
      { text: "What is the square root of 144?", options: ["10", "11", "12", "13"], correctAnswer: "12" },
      { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
      { text: "Solve for x: 2x + 10 = 20", options: ["2", "5", "10", "15"], correctAnswer: "5" },
    ]
  },
  "math-science-trivia-science-8": {
    questions: [
      { text: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correctAnswer: "8" },
      { text: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], correctAnswer: "Diamond" },
      { text: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
    ]
  },
  "math-science-trivia-stem-9": {
    questions: [
      { text: "What is the value of 'c' in E=mc²?", options: ["Mass", "Energy", "Speed of light", "A constant"], correctAnswer: "Speed of light" },
      { text: "What is the name of the theory of evolution?", options: ["Big Bang Theory", "Theory of Relativity", "Natural Selection", "Cell Theory"], correctAnswer: "Natural Selection" },
      { text: "Which scientist proposed the three laws of motion?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correctAnswer: "Isaac Newton" },
      { text: "What is the study of fossils called?", options: ["Biology", "Geology", "Paleontology", "Archeology"], correctAnswer: "Paleontology" },
    ]
  },
  "math-science-trivia-math-9": {
    questions: [
      { text: "What is the square root of 144?", options: ["10", "11", "12", "13"], correctAnswer: "12" },
      { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
      { text: "Solve for x: 2x + 10 = 20", options: ["2", "5", "10", "15"], correctAnswer: "5" },
    ]
  },
  "math-science-trivia-science-9": {
    questions: [
      { text: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], correctAnswer: "Diamond" },
      { text: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
      { text: "Which scientist proposed the three laws of motion?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correctAnswer: "Isaac Newton" },
    ]
  },
  "math-science-trivia-stem-10": {
    questions: [
      { text: "What is the value of 'c' in E=mc²?", options: ["Mass", "Energy", "Speed of light", "A constant"], correctAnswer: "Speed of light" },
      { text: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correctAnswer: "8" },
      { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
      { text: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
    ]
  },
  "math-science-trivia-math-10": {
    questions: [
      { text: "What is the square root of 144?", options: ["10", "11", "12", "13"], correctAnswer: "12" },
      { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
      { text: "Solve for x: 2x + 10 = 20", options: ["2", "5", "10", "15"], correctAnswer: "5" },
    ]
  },
  "math-science-trivia-science-10": {
    questions: [
      { text: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correctAnswer: "8" },
      { text: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], correctAnswer: "Diamond" },
      { text: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
    ]
  },
  "math-science-trivia-stem-11": {
    questions: [
      { text: "What is the value of 'c' in E=mc²?", options: ["Mass", "Energy", "Speed of light", "A constant"], correctAnswer: "Speed of light" },
      { text: "What is the name of the theory of evolution?", options: ["Big Bang Theory", "Theory of Relativity", "Natural Selection", "Cell Theory"], correctAnswer: "Natural Selection" },
      { text: "Which scientist proposed the three laws of motion?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correctAnswer: "Isaac Newton" },
      { text: "What is the study of fossils called?", options: ["Biology", "Geology", "Paleontology", "Archeology"], correctAnswer: "Paleontology" },
    ]
  },
  "math-science-trivia-math-11": {
    questions: [
      { text: "What is the square root of 144?", options: ["10", "11", "12", "13"], correctAnswer: "12" },
      { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
      { text: "Solve for x: 2x + 10 = 20", options: ["2", "5", "10", "15"], correctAnswer: "5" },
    ]
  },
  "math-science-trivia-science-11": {
    questions: [
      { text: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], correctAnswer: "Diamond" },
      { text: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
      { text: "Which scientist proposed the three laws of motion?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correctAnswer: "Isaac Newton" },
    ]
  },
  "math-science-trivia-stem-12": {
    questions: [
      { text: "What is the value of 'c' in E=mc²?", options: ["Mass", "Energy", "Speed of light", "A constant"], correctAnswer: "Speed of light" },
      { text: "What is the name of the theory of evolution?", options: ["Big Bang Theory", "Theory of Relativity", "Natural Selection", "Cell Theory"], correctAnswer: "Natural Selection" },
      { text: "Which scientist proposed the three laws of motion?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correctAnswer: "Isaac Newton" },
      { text: "What is the study of fossils called?", options: ["Biology", "Geology", "Paleontology", "Archeology"], correctAnswer: "Paleontology" },
    ]
  },
  "math-science-trivia-math-12": {
    questions: [
      { text: "What is the square root of 144?", options: ["10", "11", "12", "13"], correctAnswer: "12" },
      { text: "What is 25% of 200?", options: ["25", "50", "75", "100"], correctAnswer: "50" },
      { text: "Solve for x: 2x + 10 = 20", options: ["2", "5", "10", "15"], correctAnswer: "5" },
    ]
  },
  "math-science-trivia-science-12": {
    questions: [
      { text: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], correctAnswer: "Diamond" },
      { text: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen" },
      { text: "Which scientist proposed the three laws of motion?", options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"], correctAnswer: "Isaac Newton" },
    ]
  },
  "stem-adventure-game-stem-6": {
    questions: [
      { text: "You need to build a bridge across a small creek. What shape is the strongest for support?", options: ["Square", "Circle", "Triangle", "Rectangle"], correctAnswer: "Triangle" },
      { text: "You found a strange plant. Its leaves are waxy. This adaptation most likely helps it to...", options: ["Attract insects", "Store water", "Resist wind", "Stay warm"], correctAnswer: "Store water" },
      { text: "A lever can make lifting a heavy object easier. Where should the fulcrum be placed to use the least amount of effort?", options: ["Close to the object", "Far from the object", "In the middle", "It doesn't matter"], correctAnswer: "Close to the object" },
      { text: "You need to send a secret message. Which of these methods uses binary code?", options: ["Morse code", "Pig Latin", "Smoke signals", "Computer code"], correctAnswer: "Computer code" },
    ]
  },
  "stem-adventure-game-stem-7": {
    questions: [
      { text: "You are trying to generate electricity. Which of these would work?", options: ["Spinning a turbine in a magnetic field", "Mixing baking soda and vinegar", "Shining a light on a plant", "Rubbing two sticks together"], correctAnswer: "Spinning a turbine in a magnetic field" },
      { text: "To purify water, you can boil it. What temperature does water boil at (at sea level)?", options: ["100°F", "212°F", "50°C", "90°C"], correctAnswer: "212°F" },
      { text: "You need to find North without a compass. What can you use?", options: ["The sun's position", "The direction of the wind", "The flow of a river", "The color of the sky"], correctAnswer: "The sun's position" },
      { text: "You are designing a paper airplane. To make it fly farther, it should be more...", options: ["Heavy", "Aerodynamic", "Colorful", "Symmetrical"], correctAnswer: "Aerodynamic" },
    ]
  },
  "stem-adventure-game-stem-8": {
    questions: [
      { text: "You see lightning and hear thunder 5 seconds later. Roughly how far away is the storm?", options: ["1 mile", "5 miles", "10 miles", "It's right on top of you"], correctAnswer: "1 mile" },
      { text: "You want to grow a plant in a dark room. What color light would be best?", options: ["Green", "Blue and Red", "Yellow", "White"], correctAnswer: "Blue and Red" },
      { text: "You need to design a robot arm to lift a 5kg weight. What is more important to consider for the motor?", options: ["Speed", "Torque", "Color", "Size"], correctAnswer: "Torque" },
      { text: "You are building a water filtration system. Which of these materials would be best for the final, finest filter layer?", options: ["Gravel", "Sand", "Activated Carbon", "Cotton balls"], correctAnswer: "Activated Carbon" },
    ]
  },
  "stem-adventure-game-stem-9": {
    questions: [
      { text: "To create a simple circuit to light an LED, you need a power source, the LED, and what other component to prevent the LED from burning out?", options: ["A switch", "A capacitor", "A resistor", "A transistor"], correctAnswer: "A resistor" },
      { text: "You want to measure the pH of a soil sample. What would you use?", options: ["A thermometer", "A barometer", "A pH strip or meter", "A ruler"], correctAnswer: "A pH strip or meter" },
      { text: "In a 'choose your own adventure' game, the story branches based on player choices. What programming concept does this represent?", options: ["Loops", "Variables", "Conditional statements (if/else)", "Functions"], correctAnswer: "Conditional statements (if/else)" },
      { text: "You are designing a small-scale wind turbine. To maximize power output, the blades should have a shape based on what principle?", options: ["Aerodynamics (lift)", "Gravity", "Friction", "Magnetism"], correctAnswer: "Aerodynamics (lift)" },
    ]
  },
  "stem-adventure-game-stem-10": {
    questions: [
      { text: "You need to code a program that performs the same action on a list of 100 items. What is the most efficient way to do this?", options: ["Write the code 100 times", "Use a loop", "Use 100 different variables", "Create 100 functions"], correctAnswer: "Use a loop" },
      { text: "To build a strong but lightweight structure, which engineering concept is often used?", options: ["Using solid blocks", "Using trusses and triangles", "Making it as heavy as possible", "Using only right angles"], correctAnswer: "Using trusses and triangles" },
      { text: "You are observing a cell under a microscope. It has a cell wall and chloroplasts. What kind of cell is it?", options: ["Animal cell", "Bacterial cell", "Plant cell", "Fungal cell"], correctAnswer: "Plant cell" },
      { text: "How does GPS (Global Positioning System) determine your location?", options: ["By communicating with cell towers", "By receiving signals from multiple satellites", "By using the Earth's magnetic field", "By connecting to the internet"], correctAnswer: "By receiving signals from multiple satellites" },
    ]
  },
  "stem-adventure-game-stem-11": {
    questions: [
      { text: "You need to design a robot arm to lift a 5kg weight. What is more important to consider for the motor?", options: ["Speed", "Torque", "Color", "Size"], correctAnswer: "Torque" },
      { text: "You are building a water filtration system. Which of these materials would be best for the final, finest filter layer?", options: ["Gravel", "Sand", "Activated Carbon", "Cotton balls"], correctAnswer: "Activated Carbon" },
      { text: "To create a simple circuit to light an LED, you need a power source, the LED, and what other component to prevent the LED from burning out?", options: ["A switch", "A capacitor", "A resistor", "A transistor"], correctAnswer: "A resistor" },
      { text: "You want to measure the pH of a soil sample. What would you use?", options: ["A thermometer", "A barometer", "A pH strip or meter", "A ruler"], correctAnswer: "A pH strip or meter" },
    ]
  },
    "stem-adventure-game-stem-12": {
    questions: [
      { text: "In a 'choose your own adventure' game, the story branches based on player choices. What programming concept does this represent?", options: ["Loops", "Variables", "Conditional statements (if/else)", "Functions"], correctAnswer: "Conditional statements (if/else)" },
      { text: "You are designing a small-scale wind turbine. To maximize power output, the blades should have a shape based on what principle?", options: ["Aerodynamics (lift)", "Gravity", "Friction", "Magnetism"], correctAnswer: "Aerodynamics (lift)" },
      { text: "You need to code a program that performs the same action on a list of 100 items. What is the most efficient way to do this?", options: ["Write the code 100 times", "Use a loop", "Use 100 different variables", "Create 100 functions"], correctAnswer: "Use a loop" },
      { text: "To build a strong but lightweight structure, which engineering concept is often used?", options: ["Using solid blocks", "Using trusses and triangles", "Making it as heavy as possible", "Using only right angles"], correctAnswer: "Using trusses and triangles" },
    ]
  },
  "speed-calculation-challenge-math-6": {
    questions: [
      { text: "What is 7 x 8?", options: ["49", "54", "56", "63"], correctAnswer: "56" },
      { text: "What is 15 + 23?", options: ["35", "38", "42", "48"], correctAnswer: "38" },
      { text: "What is 45 - 19?", options: ["24", "26", "34", "36"], correctAnswer: "26" },
      { text: "What is 72 / 9?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
      { text: "What is 12 x 5?", options: ["50", "60", "70", "80"], correctAnswer: "60" },
    ]
  },
  "speed-calculation-challenge-math-7": {
    questions: [
      { text: "What is 100 - 37?", options: ["53", "63", "73", "83"], correctAnswer: "63" },
      { text: "What is 6 x 9?", options: ["48", "54", "56", "63"], correctAnswer: "54" },
      { text: "What is 56 / 7?", options: ["6", "7", "8", "9"], correctAnswer: "8" },
      { text: "What is 38 + 47?", options: ["75", "85", "95", "105"], correctAnswer: "85" },
      { text: "What is 11 x 11?", options: ["111", "121", "131", "141"], correctAnswer: "121" },
    ]
  },
  "speed-calculation-challenge-math-8": {
    questions: [
      { text: "What is 1.5 x 20?", options: ["3", "30", "300", "21.5"], correctAnswer: "30" },
      { text: "What is 3/4 of 80?", options: ["40", "50", "60", "70"], correctAnswer: "60" },
      { text: "Calculate 15²", options: ["125", "215", "225", "250"], correctAnswer: "225" },
      { text: "What is 5% of 300?", options: ["5", "10", "15", "30"], correctAnswer: "15" },
      { text: "Solve for x: (2x)/3 = 4", options: ["5", "6", "8", "12"], correctAnswer: "6" },
    ]
  },
  "speed-calculation-challenge-math-9": {
    questions: [
      { text: "What is 99 + 999?", options: ["1098", "1099", "1198", "1998"], correctAnswer: "1098" },
      { text: "Find the average of 5, 10, and 15.", options: ["10", "15", "20", "30"], correctAnswer: "10" },
      { text: "What is 2³ + 3²?", options: ["12", "17", "25", "36"], correctAnswer: "17" },
      { text: "If a train travels at 80 km/h, how far does it go in 45 minutes?", options: ["45 km", "60 km", "75 km", "80 km"], correctAnswer: "60 km" },
      { text: "What is 1 - 0.25?", options: ["0.75", "0.50", "0.25", "1.25"], correctAnswer: "0.75" },
    ]
  },
  "speed-calculation-challenge-math-10": {
    questions: [
      { text: "What is the area of a circle with radius 5?", options: ["25π", "10π", "5π", "100π"], correctAnswer: "25π" },
      { text: "What is the next number in the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, ...?", options: ["13", "11", "12", "14"], correctAnswer: "13" },
      { text: "What is 15 * 16?", options: ["240", "225", "256", "210"], correctAnswer: "240" },
      { text: "What is the square root of 225?", options: ["15", "14", "16", "25"], correctAnswer: "15" },
      { text: "If a car's price is $20,000 and it's discounted by 15%, what is the final price?", options: ["$17,000", "$18,500", "$15,000", "$19,000"], correctAnswer: "$17,000" },
    ]
  },
  "eco-environment-game-science-6": {
    questions: [
        { text: "Which of these is a producer in an ecosystem?", options: ["Lion", "Grass", "Mushroom", "Human"], correctAnswer: "Grass" },
        { text: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: "Jupiter" },
        { text: "What is the process of water turning into vapor called?", options: ["Condensation", "Precipitation", "Evaporation", "Collection"], correctAnswer: "Evaporation" },
    ],
  },
  "eco-environment-game-stem-6": {
    questions: [
        { text: "Which of the following is a renewable resource?", options: ["Coal", "Oil", "Solar energy", "Natural gas"], correctAnswer: "Solar energy" },
        { text: "What is the 3 R's of waste management?", options: ["Reduce, Reuse, Recycle", "Read, Write, Rhyme", "Run, Rest, Repeat", "Rock, Roll, Rhythm"], correctAnswer: "Reduce, Reuse, Recycle" },
        { text: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correctAnswer: "Carbon Dioxide" },
    ],
  },
  "eco-environment-game-science-7": {
    questions: [
        { text: "What is the main cause of global warming?", options: ["Deforestation", "Volcanic eruptions", "Greenhouse gas emissions", "Ozone layer depletion"], correctAnswer: "Greenhouse gas emissions" },
        { text: "What is an animal that eats only plants called?", options: ["Carnivore", "Omnivore", "Herbivore", "Predator"], correctAnswer: "Herbivore" },
        { text: "Which layer of the atmosphere protects us from harmful UV radiation?", options: ["Troposphere", "Stratosphere", "Ozone Layer", "Mesosphere"], correctAnswer: "Ozone Layer" },
    ],
  },
  "eco-environment-game-stem-7": {
    questions: [
        { text: "Which of these is a producer in an ecosystem?", options: ["Lion", "Grass", "Mushroom", "Human"], correctAnswer: "Grass" },
        { text: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: "Jupiter" },
        { text: "What is the process of water turning into vapor called?", options: ["Condensation", "Precipitation", "Evaporation", "Collection"], correctAnswer: "Evaporation" },
    ],
  },
  "eco-environment-game-science-8": {
    questions: [
        { text: "What is a biome?", options: ["A type of animal", "A large community of plants and animals in a major habitat", "A single ecosystem", "A body of water"], correctAnswer: "A large community of plants and animals in a major habitat" },
        { text: "What is biodiversity?", options: ["The variety of life in a particular habitat or ecosystem", "The number of animals", "The number of plants", "The total weight of living organisms"], correctAnswer: "The variety of life in a particular habitat or ecosystem" },
        { text: "What is the difference between weather and climate?", options: ["There is no difference", "Weather is short-term, climate is long-term", "Weather is long-term, climate is short-term", "Climate only refers to temperature"], correctAnswer: "Weather is short-term, climate is long-term" },
    ],
  },
  "eco-environment-game-stem-8": {
    questions: [
        { text: "How does a wind turbine generate electricity?", options: ["By burning fuel", "Using blades to capture wind's kinetic energy and turn a generator", "From solar panels on the blades", "From the heat of the wind"], correctAnswer: "Using blades to capture wind's kinetic energy and turn a generator" },
        { text: "What technology is used to convert sunlight directly into electricity?", options: ["Geothermal", "Hydropower", "Photovoltaics (Solar Panels)", "Nuclear fusion"], correctAnswer: "Photovoltaics (Solar Panels)" },
        { text: "What is compost?", options: ["A type of plastic", "A chemical fertilizer", "Decomposed organic matter used as a natural fertilizer", "A type of soil"], correctAnswer: "Decomposed organic matter used as a natural fertilizer" },
    ],
  },
  "eco-environment-game-science-9": {
    questions: [
        { text: "What is the carbon cycle?", options: ["A type of bicycle", "The process of carbon being exchanged among the atmosphere, oceans, soil, and living organisms", "A way to date fossils", "A chemical reaction involving carbon"], correctAnswer: "The process of carbon being exchanged among the atmosphere, oceans, soil, and living organisms" },
        { text: "What is acid rain?", options: ["Rain that is more acidic than normal due to pollutants", "Rain that contains acid for cleaning", "A type of soda", "Rain that only falls on farms"], correctAnswer: "Rain that is more acidic than normal due to pollutants" },
        { text: "What are invasive species?", options: ["Species that are native to an ecosystem", "Species that cause harm in a new environment where they are not native", "Endangered species", "Species that live in space"], correctAnswer: "Species that cause harm in a new environment where they are not native" },
    ],
  },
  "eco-environment-game-stem-9": {
    questions: [
        { text: "What is graywater?", options: ["Water from the ocean", "Untreated sewage water", "Wastewater from sinks, showers, and laundry that can be recycled for non-potable uses", "Pure drinking water"], correctAnswer: "Wastewater from sinks, showers, and laundry that can be recycled for non-potable uses" },
        { text: "What is a 'carbon footprint'?", options: ["The shape of a carbon atom", "A fossil of a footprint", "The total amount of greenhouse gases produced by our actions", "A unit of measurement for carbon"], correctAnswer: "The total amount of greenhouse gases produced by our actions" },
        { text: "What does it mean for a product to be 'biodegradable'?", options: ["It is made from biological materials", "It can be broken down naturally by microorganisms", "It is edible", "It will last forever"], correctAnswer: "It can be broken down naturally by microorganisms" },
    ],
  },
  "eco-environment-game-science-10": {
    questions: [
      { text: "What is eutrophication?", options: ["The purification of water", "The enrichment of a body of water with nutrients, often causing excessive algae growth", "The process of evaporation and condensation", "The creation of a new species"], correctAnswer: "The enrichment of a body of water with nutrients, often causing excessive algae growth" },
      { text: "What is the difference between a food chain and a food web?", options: ["A food chain is one path of energy; a food web shows all the interconnected food chains", "A food web is one path of energy; a food chain shows all paths", "There is no difference", "Food chains are for plants, food webs are for animals"], correctAnswer: "A food chain is one path of energy; a food web shows all the interconnected food chains" },
      { text: "What is biomagnification?", options: ["The increasing concentration of a substance in organisms at successively higher levels in a food chain", "The study of large biological molecules", "Making animals appear larger", "A type of microscope"], correctAnswer: "The increasing concentration of a substance in organisms at successively higher levels in a food chain" },
    ]
  },
  "eco-environment-game-stem-10": {
    questions: [
      { text: "What is geothermal energy?", options: ["Energy from the sun", "Energy from the wind", "Heat energy generated and stored in the Earth", "Energy from burning wood"], correctAnswer: "Heat energy generated and stored in the Earth" },
      { text: "How can remote sensing satellites help monitor environmental changes?", options: ["They can't", "By taking pictures of animals", "By tracking deforestation, ice melt, and pollution from space", "By sending signals to cell phones"], correctAnswer: "By tracking deforestation, ice melt, and pollution from space" },
      { text: "What is a life cycle assessment (LCA)?", options: ["A study of an animal's life", "A technique to assess environmental impacts associated with all the stages of a product's life", "A way to calculate a person's age", "A biological process"], correctAnswer: "A technique to assess environmental impacts associated with all the stages of a product's life" },
    ]
  },
  "eco-environment-game-science-11": {
    questions: [
      { text: "What is ocean acidification?", options: ["The process of making the ocean more salty", "The ongoing decrease in the pH of the Earth's oceans, caused by the uptake of carbon dioxide", "The pollution of the ocean with acid", "A natural cycle of the ocean"], correctAnswer: "The ongoing decrease in the pH of the Earth's oceans, caused by the uptake of carbon dioxide" },
      { text: "What are 'keystone species'?", options: ["The most common species in an ecosystem", "A species on which other species in an ecosystem largely depend, such that if it were removed the ecosystem would change drastically", "The largest species in an ecosystem", "The first species to populate an area"], correctAnswer: "A species on which other species in an ecosystem largely depend, such that if it were removed the ecosystem would change drastically" },
      { text: "What is ecological succession?", options: ["The process of one species succeeding another in a competition", "The process of change in the species structure of an ecological community over time", "A type of election in the animal kingdom", "A legal term for inheriting land"], correctAnswer: "The process of change in the species structure of an ecological community over time" },
    ]
  },
  "eco-environment-game-stem-11": {
    questions: [
      { text: "What is carbon sequestration?", options: ["The process of capturing and storing atmospheric carbon dioxide", "A type of farming", "A legal process for carbon trading", "A way to create carbon"], correctAnswer: "The process of capturing and storing atmospheric carbon dioxide" },
      { text: "How does precision agriculture help the environment?", options: ["By using more fertilizer", "By using technology to reduce the environmental impact of farming through targeted application of resources", "By only growing one type of crop", "It does not help the environment"], correctAnswer: "By using technology to reduce the environmental impact of farming through targeted application of resources" },
      { text: "What is bioremediation?", options: ["A type of therapy using biological methods", "The use of microorganisms to clean up contaminated sites", "A method for creating new biofuels", "A way to clone plants"], correctAnswer: "The use of microorganisms to clean up contaminated sites" },
    ]
  },
  "eco-environment-game-science-12": {
    questions: [
      { text: "What is the Albedo effect?", options: ["A musical term", "The phenomenon where lighter surfaces reflect more sunlight than darker surfaces", "The effect of altitude on temperature", "A type of ocean current"], correctAnswer: "The phenomenon where lighter surfaces reflect more sunlight than darker surfaces" },
      { text: "Describe the concept of 'carrying capacity' in an ecosystem.", options: ["The maximum weight an animal can carry", "The maximum population size of a biological species that can be sustained by that specific environment", "The amount of water a plant can hold", "The speed at which an ecosystem can recover from a disturbance"], correctAnswer: "The maximum population size of a biological species that can be sustained by that specific environment" },
      { text: "What are the main drivers of biodiversity loss?", options: ["Habitat destruction, climate change, pollution, and overexploitation", "Natural disasters and disease", "Lack of food and water", "The natural aging of ecosystems"], correctAnswer: "Habitat destruction, climate change, pollution, and overexploitation" },
    ]
  },
  "eco-environment-game-stem-12": {
    questions: [
      { text: "What is desalination?", options: ["A process to remove salt from seawater to make it drinkable", "The process of soil becoming salty", "A type of dessert", "A method for predicting weather"], correctAnswer: "A process to remove salt from seawater to make it drinkable" },
      { text: "What are some of the engineering challenges of creating a large-scale solar power plant?", options: ["Land use, energy storage, and grid integration", "Finding enough sunlight", "Making the panels look nice", "There are no challenges"], correctAnswer: "Land use, energy storage, and grid integration" },
      { text: "How can GIS (Geographic Information System) be used in environmental management?", options: ["To play geography-based games", "To map and analyze environmental data to make better decisions", "To communicate with satellites", "To create artistic maps"], correctAnswer: "To map and analyze environmental data to make better decisions" },
    ]
  },
};

    

    







