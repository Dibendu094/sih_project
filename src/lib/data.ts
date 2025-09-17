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
    description: "Multiple-choice questions covering arithmetic, algebra, geometry. Points awarded for speed and accuracy.",
    subjects: ["Math"],
    gradeLevels: [6, 7, 8, 9, 10, 11, 12],
    imageId: "game-cover-7",
  },
  {
    id: "equation-solver-race",
    title: "Equation Solver Race",
    description: "Students solve equations against a timer. Leaderboard shows top performers.",
    subjects: ["Math"],
    gradeLevels: [7, 8, 9, 10, 11, 12],
    imageId: "game-cover-1",
  },
  {
    id: "math-puzzle-adventure",
    title: "Math Puzzle Adventure",
    description: "Solve logic puzzles and brainteasers. Unlock levels and badges for each completed puzzle.",
    subjects: ["Math", "Logic"],
    gradeLevels: [6, 7, 8, 9, 10],
    imageId: "game-cover-5",
  },
  {
    id: "periodic-table-explorer",
    title: "Periodic Table Explorer",
    description: "Interactive game to learn elements, symbols, and properties. Quiz-style challenges and drag-and-drop matching.",
    subjects: ["Science"],
    gradeLevels: [8, 9, 10, 11, 12],
    imageId: "game-cover-8",
  },
  {
    id: "physics-experiment-simulator",
    title: "Physics Experiment Simulator",
    description: "Virtual lab where students simulate physics experiments. Earn points by correctly predicting outcomes.",
    subjects: ["Science"],
    gradeLevels: [9, 10, 11, 12],
    imageId: "game-cover-4",
  },
  {
    id: "biology-treasure-hunt",
    title: "Biology Treasure Hunt",
    description: "Match organs, cells, and body systems in a fun “treasure hunt” style. Unlock badges for each completed level.",
    subjects: ["Science"],
    gradeLevels: [6, 7, 8, 9, 10],
    imageId: "game-cover-2",
  },
  {
    id: "coding-quest",
    title: "Coding Quest",
    description: "Drag-and-drop coding puzzles to learn logic and programming basics. Challenges increase in difficulty as students progress.",
    subjects: ["Computer Science", "Logic"],
    gradeLevels: [6, 7, 8, 9, 10, 11, 12],
    imageId: "game-cover-3",
  },
  {
    id: "logic-puzzle-mania",
    title: "Logic Puzzle Mania",
    description: "Sudoku, pattern recognition, sequences, and riddles. Great for building problem-solving skills.",
    subjects: ["Logic"],
    gradeLevels: [6, 7, 8, 9, 10, 11, 12],
    imageId: "game-cover-9",
  },
  {
    id: "math-science-trivia",
    title: "Math & Science Trivia",
    description: "Fast-paced quiz game with multiple-choice questions across STEM subjects. Compete with classmates on a leaderboard.",
    subjects: ["STEM", "Math", "Science"],
    gradeLevels: [6, 7, 8, 9, 10, 11, 12],
    imageId: "game-cover-11",
  },
  {
    id: "stem-adventure-game",
    title: "STEM Adventure Game",
    description: "Choose-your-own-adventure style game with math and science challenges. Correct answers help the player advance through levels.",
    subjects: ["STEM"],
    gradeLevels: [6, 7, 8, 9, 10, 11, 12],
    imageId: "game-cover-10",
  },
  {
    id: "speed-calculation-challenge",
    title: "Speed Calculation Challenge",
    description: "Solve as many math problems as possible within a time limit. Earn stars for speed and accuracy.",
    subjects: ["Math"],
    gradeLevels: [6, 7, 8, 9, 10],
    imageId: "game-cover-12",
  },
  {
    id: "eco-environment-game",
    title: "Eco & Environment Game",
    description: "Learn environmental science concepts by completing interactive missions. Includes quizzes and mini-games about recycling, energy, and ecosystems.",
    subjects: ["Science", "STEM"],
    gradeLevels: [6, 7, 8, 9, 10, 11, 12],
    imageId: "game-cover-6",
  },
];

export const quizzes: Quiz = {
  "math-quiz-challenge-math-6": {
    questions: [
      { text: "What is 5x + 3 = 23? Find x.", options: ["3", "4", "5", "6"], correctAnswer: "4" },
      { text: "Solve for y: 2y - 7 = 11.", options: ["7", "8", "9", "10"], correctAnswer: "9" },
    ],
  },
  "math-quiz-challenge-math-7": {
    questions: [
      { text: "If a rectangle has a length of 8 and a width of 5, what is its area?", options: ["13", "30", "40", "45"], correctAnswer: "40" },
      { text: "What is the value of π (pi) rounded to two decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], correctAnswer: "3.14" },
    ],
  },
  "biology-treasure-hunt-science-8": {
    questions: [
      { text: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Chloroplast"], correctAnswer: "Mitochondrion" },
      { text: "What process do plants use to make their own food?", options: ["Respiration", "Transpiration", "Photosynthesis", "Pollination"], correctAnswer: "Photosynthesis" },
    ],
  },
  "coding-quest-computer-science-9": {
    questions: [
        { text: "What does HTML stand for?", options: ["HyperText Markup Language", "High-Level Text Machine Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"], correctAnswer: "HyperText Markup Language" },
        { text: "Which of these is a programming language?", options: ["JPEG", "HTML", "Python", "CSS"], correctAnswer: "Python" },
    ],
  },
  "physics-experiment-simulator-science-10": {
    questions: [
        { text: "What is Newton's first law of motion?", options: ["Energy is conserved", "Force = mass x acceleration", "An object in motion stays in motion", "For every action, there is an equal and opposite reaction"], correctAnswer: "An object in motion stays in motion" },
        { text: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], correctAnswer: "H2O" },
    ],
  },
  "math-puzzle-adventure-math-8": {
    questions: [
        { text: "How many degrees are in a right angle?", options: ["45", "90", "180", "360"], correctAnswer: "90" },
        { text: "What is the Pythagorean theorem?", options: ["a+b=c", "a² + b² = c²", "E=mc²", "πr²"], correctAnswer: "a² + b² = c²" },
    ],
  },
  "eco-environment-game-science-7": {
    questions: [
        { text: "Which of these is a producer in an ecosystem?", options: ["Lion", "Grass", "Mushroom", "Human"], correctAnswer: "Grass" },
        { text: "What is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correctAnswer: "Jupiter" },
    ],
  },
};
