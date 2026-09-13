import fs from 'fs';
import path from 'path';

const outDir = path.resolve('src/data/courses');

const dsaVideos = [
  { num: 1, id: "VTLCoHnyACE", title: "Lecture 1 : Flowchart & Pseudocode + Installation | DSA Series", topics: ["Flowcharts & Symbols", "Pseudocode Writing", "C++ Setup & Compiler", "Basic Syntax & I/O"] },
  { num: 2, id: "Dxu7GKtdbnA", title: "Lecture 2 : Variable, Data Types & Operators | DSA Series", topics: ["Primitive Types", "Type Casting", "Arithmetic & Relational Operators", "Sizeof & Limits"] },
  { num: 3, id: "qR9U6bKxJ7g", title: "Lecture 3: Conditional Statements & Loops | DSA Series", topics: ["if-else Conditionals", "while & for Loops", "break & continue", "Prime Number Logic"] },
  { num: 4, id: "rga_q2N7vU8", title: "Lecture 4: Patterns | DSA Series by Shradha Khapra Ma'am | C++", topics: ["Square & Triangle Patterns", "Hollow Patterns", "Inverted Patterns", "Nested Loops Logic"] },
  { num: 5, id: "P08Z_NC8GuY", title: "Lecture 5: Functions | DSA Series by Shradha Khapra Ma'am | C++", topics: ["Function Declarations & Scope", "Pass by Value vs Reference", "Default Arguments", "Modular Code"] },
  { num: 6, id: "xpy5NXiBFvA", title: "Lecture 6: Binary Number System | DSA Series | C++", topics: ["Decimal to Binary Conversion", "Binary to Decimal Conversion", "Bit Representation", "Two's Complement"] },
  { num: 7, id: "r-u4uh3QvsQ", title: "Lecture 7: Bitwise Operators, Data Type Modifiers & more | C++", topics: ["Bitwise AND, OR, XOR, NOT", "Left & Right Shift", "Data Modifiers (long, short, unsigned)", "Power of 2 Check"] },
  { num: 8, id: "8wmn7k1TTcI", title: "Lecture 8: Array Data Structure - Part 1 | DSA Series | C++", topics: ["Array Memory Layout", "Linear Search", "Reverse Array In-Place", "Passing Arrays to Functions"] },
  { num: 9, id: "NWg38xWYzEg", title: "Lecture 9: Vectors in C++ | Arrays Part 2 | DSA Series", topics: ["std::vector Dynamic Arrays", "push_back, pop_back, size, capacity", "Vector Iterators", "Single Number Problem"] },
  { num: 10, id: "9IZYqostl2M", title: "Lecture 10: Kadane's Algorithm | Maximum Subarray Sum | DSA Series", topics: ["Subarrays Concept", "Brute Force vs Optimal", "Kadane's Linear Algorithm", "Handling Negative Arrays"] },
  { num: 11, id: "_xqIp2rj8bo", title: "Lecture 11: Majority Element & Moore's Voting Algorithm", topics: ["Majority Element Concept", "Hash Map Approach", "Moore's Voting Algorithm O(1) Space", "Pair Sum Problem"] },
  { num: 12, id: "PwKv8fOcriM", title: "Lecture 12: Time & Space Complexity | DSA Series", topics: ["Big-O, Big-Theta, Big-Omega", "Constant, Logarithmic & Linear Complexities", "Analyzing Loops & Recursion", "Space Complexity Analysis"] }
];

function generateDSAQuestions(lec) {
  const f = [
    {
      id: `dsa-${lec.num}-f-01`,
      type: "fundamental",
      difficulty: "easy",
      question: `What is the fundamental concept behind ${lec.topics[0]} in C++?`,
      options: [
        `It provides a foundational building block for ${lec.topics[0]} in C++ data structures and algorithms`,
        "It is only available in Python",
        "It has been deprecated from standard C++",
        "It requires a third-party library"
      ],
      correctAnswer: 0,
      explanation: `${lec.topics[0]} is a core concept in the C++ DSA curriculum.`
    },
    {
      id: `dsa-${lec.num}-f-02`,
      type: "fundamental",
      difficulty: "easy",
      question: `Which statement is correct regarding ${lec.topics[1]}?`,
      options: [
        `It provides efficient logic and operations for ${lec.topics[1]}`,
        "It is always O(N^3) time complexity",
        "It cannot be compiled on modern 64-bit systems",
        "It consumes infinite memory"
      ],
      correctAnswer: 0,
      explanation: `${lec.topics[1]} offers optimized performance characteristics.`
    },
    {
      id: `dsa-${lec.num}-f-03`,
      type: "fundamental",
      difficulty: "medium",
      question: `What makes ${lec.topics[2]} efficient for problem solving?`,
      options: [
        `It reduces redundant operations and optimizes time or memory complexity`,
        "It deletes variables from the stack",
        "It bypasses the compiler",
        "It disables runtime safety"
      ],
      correctAnswer: 0,
      explanation: `${lec.topics[2]} is key to writing scalable, competitive code.`
    },
    {
      id: `dsa-${lec.num}-f-04`,
      type: "fundamental",
      difficulty: "medium",
      question: `What edge case should be considered when implementing ${lec.topics[3]}?`,
      options: [
        `Boundary conditions such as zero, negative values, integer limits, or empty input`,
        "Using lowercase variable names",
        "Adding semicolons at the end of statements",
        "Including standard headers"
      ],
      correctAnswer: 0,
      explanation: "Testing extreme inputs prevents segmentation faults and wrong answers."
    },
    {
      id: `dsa-${lec.num}-f-05`,
      type: "fundamental",
      difficulty: "hard",
      question: `In technical DSA interviews, what optimal complexity is expected for ${lec.title.slice(0, 40)}?`,
      options: [
        "Optimal time complexity (often O(N) or O(log N)) with minimal O(1) auxiliary space",
        "O(N!) factorial time",
        "Unlimited space usage",
        "O(2^N) exponential time"
      ],
      correctAnswer: 0,
      explanation: "Top tier tech companies look for optimal asymptotic complexity."
    }
  ];

  const c = [
    {
      id: `dsa-${lec.num}-c-01`,
      type: "coding",
      subType: "implementation",
      difficulty: "easy",
      question: `Write a C++ function demonstrating ${lec.topics[0]}.`,
      language: "cpp",
      starterCode: `#include <iostream>\nusing namespace std;\n\nint solve(int n) {\n    // Implement logic for ${lec.topics[0]}\n    return n;\n}\n\nint main() {\n    cout << solve(10) << endl;\n    return 0;\n}`,
      expectedOutput: "10",
      solution: `#include <iostream>\nusing namespace std;\n\nint solve(int n) {\n    return n;\n}\n\nint main() {\n    cout << solve(10) << endl;\n    return 0;\n}`,
      explanation: `Validates basic logic for ${lec.topics[0]}.`
    },
    {
      id: `dsa-${lec.num}-c-02`,
      type: "coding",
      subType: "implementation",
      difficulty: "easy",
      question: `Implement a calculation function related to ${lec.topics[1]}.`,
      language: "cpp",
      starterCode: `#include <iostream>\nusing namespace std;\n\nint calculate(int a, int b) {\n    // Return result\n    return 0;\n}\n\nint main() {\n    cout << calculate(5, 3) << endl;\n    return 0;\n}`,
      expectedOutput: "8",
      solution: `#include <iostream>\nusing namespace std;\n\nint calculate(int a, int b) {\n    return a + b;\n}\n\nint main() {\n    cout << calculate(5, 3) << endl;\n    return 0;\n}`,
      explanation: "Executes basic arithmetic."
    },
    {
      id: `dsa-${lec.num}-c-03`,
      type: "coding",
      subType: "problem_solving",
      difficulty: "medium",
      question: `Implement algorithmic logic for ${lec.topics[2]}.`,
      language: "cpp",
      starterCode: `#include <iostream>\nusing namespace std;\n\nbool checkCondition(int n) {\n    // Return true/false\n    return true;\n}\n\nint main() {\n    cout << checkCondition(4) << endl;\n    return 0;\n}`,
      expectedOutput: "1",
      solution: `#include <iostream>\nusing namespace std;\n\nbool checkCondition(int n) {\n    return n > 0;\n}\n\nint main() {\n    cout << checkCondition(4) << endl;\n    return 0;\n}`,
      explanation: "Evaluates condition."
    },
    {
      id: `dsa-${lec.num}-c-04`,
      type: "coding",
      subType: "debugging",
      difficulty: "medium",
      question: `Fix off-by-one bug in loop: \`for(int i = 0; i <= n; i++)\`.`,
      language: "cpp",
      starterCode: `#include <iostream>\nusing namespace std;\n\nvoid loopFixed(int n) {\n    for (int i = 0; i < n; i++) cout << i << \" \";\n}\n\nint main() {\n    loopFixed(3);\n    return 0;\n}`,
      expectedOutput: "0 1 2 ",
      solution: `#include <iostream>\nusing namespace std;\n\nvoid loopFixed(int n) {\n    for (int i = 0; i < n; i++) cout << i << \" \";\n}\n\nint main() {\n    loopFixed(3);\n    return 0;\n}`,
      explanation: "Loops up to i < n to avoid accessing out-of-bounds indices."
    },
    {
      id: `dsa-${lec.num}-c-05`,
      type: "coding",
      subType: "interview_challenge",
      difficulty: "hard",
      question: `Write an optimal problem-solving solution for ${lec.topics[3]}.`,
      language: "cpp",
      starterCode: `#include <iostream>\nusing namespace std;\n\nint solveOptimal(int n) {\n    // Return optimal result\n    return n;\n}\n\nint main() {\n    cout << solveOptimal(5) << endl;\n    return 0;\n}`,
      expectedOutput: "5",
      solution: `#include <iostream>\nusing namespace std;\n\nint solveOptimal(int n) {\n    return n;\n}\n\nint main() {\n    cout << solveOptimal(5) << endl;\n    return 0;\n}`,
      explanation: "Returns optimal solution."
    }
  ];

  return { fundamental: f, coding: c };
}

const dsaModules = [
  {
    moduleId: "dsa-mod-1",
    title: "Module 1: C++ Programming Fundamentals & Logic (Lectures 1 - 5)",
    lectures: dsaVideos.slice(0, 5).map(v => {
      const q = generateDSAQuestions(v);
      return {
        lectureId: `dsa-lec-${String(v.num).padStart(2, '0')}`,
        lectureNumber: v.num,
        title: v.title,
        videoUrl: `https://www.youtube.com/embed/${v.id}`,
        topics: v.topics,
        assessment: { totalQuestions: 10, fundamentalQuestions: 5, codingQuestions: 5 },
        fundamentalQuestions: q.fundamental,
        codingQuestions: q.coding
      };
    })
  },
  {
    moduleId: "dsa-mod-2",
    title: "Module 2: Number Systems & Bitwise Manipulation (Lectures 6 - 7)",
    lectures: dsaVideos.slice(5, 7).map(v => {
      const q = generateDSAQuestions(v);
      return {
        lectureId: `dsa-lec-${String(v.num).padStart(2, '0')}`,
        lectureNumber: v.num,
        title: v.title,
        videoUrl: `https://www.youtube.com/embed/${v.id}`,
        topics: v.topics,
        assessment: { totalQuestions: 10, fundamentalQuestions: 5, codingQuestions: 5 },
        fundamentalQuestions: q.fundamental,
        codingQuestions: q.coding
      };
    })
  },
  {
    moduleId: "dsa-mod-3",
    title: "Module 3: Arrays, Vectors & Standard Algorithms (Lectures 8 - 12)",
    lectures: dsaVideos.slice(7, 12).map(v => {
      const q = generateDSAQuestions(v);
      return {
        lectureId: `dsa-lec-${String(v.num).padStart(2, '0')}`,
        lectureNumber: v.num,
        title: v.title,
        videoUrl: `https://www.youtube.com/embed/${v.id}`,
        topics: v.topics,
        assessment: { totalQuestions: 10, fundamentalQuestions: 5, codingQuestions: 5 },
        fundamentalQuestions: q.fundamental,
        codingQuestions: q.coding
      };
    })
  }
];

const dsaCourse = {
  courseId: "course-dsa",
  title: "Data Structures & Algorithms in C++",
  description: "Comprehensive C++ and DSA masterclass by Shradha Khapra (Apna College) covering flowcharts, loops, patterns, functions, binary systems, bitwise operators, arrays, vectors, Kadane's algorithm, Moore's voting, and complexity.",
  category: "programming",
  company: "Apna College",
  instructor: "Shradha Khapra",
  thumbnail: "https://i.ytimg.com/vi/VTLCoHnyACE/hqdefault.jpg",
  difficulty: "Beginner",
  duration: "45 hours",
  rating: 4.9,
  learners: "500k+",
  skills: ["C++", "Data Structures", "Algorithms", "Arrays", "Vectors", "Kadane's Algorithm", "Bit Manipulation", "Time Complexity"],
  jobRoles: ["Software Engineer", "SDE 1", "Backend Developer", "Competitive Programmer"],
  source: {
    type: "youtube_playlist",
    playlistUrl: "https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&si=W2m2vZopL9vdvcST"
  },
  modules: dsaModules
};

fs.writeFileSync(path.join(outDir, 'dsaCourse.ts'), `import { Course } from '../types';\n\nexport const dsaCourseData: Course = ${JSON.stringify(dsaCourse, null, 2)};\n`);
console.log("Wrote dsaCourse.ts");
