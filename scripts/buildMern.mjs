import fs from 'fs';
import path from 'path';

const outDir = path.resolve('src/data/courses');

const mernVideos = [
  {
    num: 1,
    id: "kkOuRJ69BRY",
    title: "Learn HTML, CSS and JavaScript in Single Video | Basics of MERN Stack Development",
    topics: ["HTML5 Semantic Tags", "CSS Selectors & Box Model", "Flexbox & Grid Layouts", "DOM Manipulation with JavaScript"]
  },
  {
    num: 2,
    id: "J_r6hBo9lO4",
    title: "Responsive Web Development Complete Course for Beginners | Tutorial + Full Project",
    topics: ["Media Queries & Mobile-First Design", "Responsive Images & Typography", "CSS Animations & Transitions", "Modern Landing Page Project"]
  },
  {
    num: 3,
    id: "a-wVHL0lpb0",
    title: "JavaScript Full Course | JavaScript - Learn Everything | Sheryians Coding School",
    topics: ["Variables, Data Types & Operators", "Control Flow & Loops", "Functions & Scopes", "Arrays & Objects in JS"]
  },
  {
    num: 4,
    id: "1aR7tcmWo_w",
    title: "Part 2 – Master JavaScript & Become a Real Developer | Full Course",
    topics: ["Higher Order Functions (map, filter, reduce)", "Closures & Lexical Scope", "Execution Context & Call Stack", "Event Loop & Asynchronous JS"]
  },
  {
    num: 5,
    id: "wH6uf20dpAo",
    title: "Part 3 – Advanced JavaScript, Projects & Real Developer Mindset | Full Course",
    topics: ["Promises & Async/Await", "Prototypes & Prototypal Inheritance", "Debouncing & Throttling", "Real World JS DOM Projects"]
  },
  {
    num: 6,
    id: "GVdBPJzmwQg",
    title: "Part 4 – JavaScript for Placements | Get Ready for Your First Developer Job",
    topics: ["Currying & Deep/Shallow Copy", "Call, Apply & Bind Methods", "Event Bubbling & Event Delegation", "Frontend Interview Coding Challenges"]
  },
  {
    num: 7,
    id: "3LRZRSIh_KE",
    title: "ReactJS Full Course | ReactJS - Learn Everything | Sheryians Coding School",
    topics: ["React Components & JSX", "useState & useEffect Hooks", "Props Drilling & Lifting State Up", "Component Lifecycle & Virtual DOM"]
  },
  {
    num: 8,
    id: "Q5TqsetwCoE",
    title: "Redux Toolkit Complete Course 2026 | Beginner to Advanced with Project",
    topics: ["Global State Management", "createSlice & reducers", "configureStore & Provider", "useSelector & useDispatch Hooks"]
  },
  {
    num: 9,
    id: "lVzb6pmel_E",
    title: "TypeScript Domination - Full Course",
    topics: ["TypeScript Types, Interfaces & Types vs Interfaces", "Generics & Type Constraints", "Union & Intersection Types", "TypeScript with React Props & State"]
  },
  {
    num: 10,
    id: "0IciwnJ6PJI",
    title: "Complete Backend One Shot | Beginners to Advanced | Learn Node.js, Express, MongoDB from Scratch",
    topics: ["Node.js Architecture & Event Loop", "Express.js Routing & Middleware", "MongoDB & Mongoose Schemas", "CRUD RESTful API Implementation"]
  },
  {
    num: 11,
    id: "NQOAQP0mow0",
    title: "Advanced Backend Project | Learn Bank Transaction System with Node.js, Express & MongoDB",
    topics: ["ACID Transactions with Mongoose Sessions", "Account Balances & Concurrency Locking", "Transaction History Logs", "Error Handling & Rollbacks"]
  },
  {
    num: 12,
    id: "pkKn8q5AvsY",
    title: "Complete Authentication System | JWT, Refresh Token, OTP, Logout All Devices",
    topics: ["Password Hashing with bcrypt", "JWT Access Tokens & Refresh Tokens", "HTTP-Only Cookies & XSS Protection", "OTP Verification via Email/SMS"]
  },
  {
    num: 13,
    id: "zG3hNL08Dro",
    title: "Gen AI + Full Stack Web Development Project | React, Node, JWT, Gemini",
    topics: ["Google Gemini AI API Integration", "Streaming Responses to Frontend", "Prompt Engineering for Full Stack Apps", "Full Stack AI SaaS Deployment"]
  }
];

// Helper to generate 10 questions for each lecture
function generateMernQuestions(lec) {
  const f = [
    {
      id: `mern-${lec.num}-f-01`,
      type: "fundamental",
      difficulty: "easy",
      question: `In context of ${lec.topics[0]}, what is the primary architectural concept?`,
      options: [
        `It provides a foundational building block for ${lec.topics[0]} in modern web applications`,
        "It is a deprecated technique not used today",
        "It only works in desktop browsers",
        "It is an operating system kernel module"
      ],
      correctAnswer: 0,
      explanation: `${lec.topics[0]} is an essential concept in modern web and full stack development.`
    },
    {
      id: `mern-${lec.num}-f-02`,
      type: "fundamental",
      difficulty: "easy",
      question: `Which statement accurately describes ${lec.topics[1]}?`,
      options: [
        `It enables robust, maintainable patterns for ${lec.topics[1]} across the MERN stack`,
        "It eliminates the need for database storage",
        "It converts JavaScript into Python automatically",
        "It requires a paid license to execute"
      ],
      correctAnswer: 0,
      explanation: `${lec.topics[1]} provides key functionality used in industry-standard applications.`
    },
    {
      id: `mern-${lec.num}-f-03`,
      type: "fundamental",
      difficulty: "medium",
      question: `How does ${lec.topics[2]} improve application performance and structure?`,
      options: [
        `By modularizing functionality, optimizing execution, and preventing common anti-patterns`,
        "By deleting unused variables from disk",
        "By forcing synchronous blocking operations",
        "By disabling network requests"
      ],
      correctAnswer: 0,
      explanation: `${lec.topics[2]} optimizes execution flow and system structure.`
    },
    {
      id: `mern-${lec.num}-f-04`,
      type: "fundamental",
      difficulty: "medium",
      question: `What common mistake should developers avoid when working with ${lec.topics[3]}?`,
      options: [
        `Neglecting edge cases, state mutability, and error handling`,
        "Using valid variable names",
        "Adding documentation comments",
        "Testing components in the browser"
      ],
      correctAnswer: 0,
      explanation: `Proper validation and lifecycle handling are critical when implementing ${lec.topics[3]}.`
    },
    {
      id: `mern-${lec.num}-f-05`,
      type: "fundamental",
      difficulty: "hard",
      question: `During a senior developer interview, why is mastery of ${lec.title.slice(0, 45)} emphasized?`,
      options: [
        "It represents core competencies required to architect scalable production MERN stack web applications",
        "It is the only topic ever asked in interviews",
        "It guarantees 100% bug-free deployment without testing",
        "It is required by the JavaScript compiler"
      ],
      correctAnswer: 0,
      explanation: "Understanding full stack architecture and design patterns separates senior engineers from beginners."
    }
  ];

  const c = [
    {
      id: `mern-${lec.num}-c-01`,
      type: "coding",
      subType: "implementation",
      difficulty: "easy",
      question: `Write a JavaScript function representing core logic for Lecture ${lec.num}: ${lec.topics[0]}.`,
      language: "javascript",
      starterCode: `function executeLogic(input) {\n    // Implement logic for ${lec.topics[0]}\n    return input;\n}`,
      expectedOutput: "Processed output",
      solution: `function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}`,
      explanation: `Validates and processes input for ${lec.topics[0]}.`
    },
    {
      id: `mern-${lec.num}-c-02`,
      type: "coding",
      subType: "implementation",
      difficulty: "easy",
      question: `Implement a helper function for ${lec.topics[1]} that handles default values cleanly.`,
      language: "javascript",
      starterCode: `function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}`,
      expectedOutput: "Clean value",
      solution: `function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}`,
      explanation: "Nullish coalescing style verification."
    },
    {
      id: `mern-${lec.num}-c-03`,
      type: "coding",
      subType: "problem_solving",
      difficulty: "medium",
      question: `Implement an asynchronous helper for ${lec.topics[2]} using Promises or async/await.`,
      language: "javascript",
      starterCode: `async function fetchDataSim(data) {\n    // Return resolved promise with data\n}`,
      expectedOutput: "Promise resolving data",
      solution: `async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}`,
      explanation: "Simulates asynchronous network response."
    },
    {
      id: `mern-${lec.num}-c-04`,
      type: "coding",
      subType: "debugging",
      difficulty: "medium",
      question: `Fix the shallow copy mutation bug when updating nested state: \`const updated = {...state}; updated.profile.name = 'New';\``,
      language: "javascript",
      starterCode: `function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}`,
      expectedOutput: "Immutably updated state",
      solution: `function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}`,
      explanation: "Shallow copying nested objects requires spreading inner object levels."
    },
    {
      id: `mern-${lec.num}-c-05`,
      type: "coding",
      subType: "interview_challenge",
      difficulty: "hard",
      question: `Write a robust middleware/validator function for ${lec.topics[3]}.`,
      language: "javascript",
      starterCode: `function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}`,
      expectedOutput: "Boolean true/false",
      solution: `function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}`,
      explanation: "Ensures all mandatory fields are populated."
    }
  ];

  return { fundamental: f, coding: c };
}

const mernModules = [
  {
    moduleId: "mern-mod-1",
    title: "Module 1: Frontend Web & JavaScript Mastery (Lectures 1 - 6)",
    lectures: mernVideos.slice(0, 6).map(v => {
      const q = generateMernQuestions(v);
      return {
        lectureId: `mern-lec-${String(v.num).padStart(2, '0')}`,
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
    moduleId: "mern-mod-2",
    title: "Module 2: ReactJS, Redux Toolkit & TypeScript (Lectures 7 - 9)",
    lectures: mernVideos.slice(6, 9).map(v => {
      const q = generateMernQuestions(v);
      return {
        lectureId: `mern-lec-${String(v.num).padStart(2, '0')}`,
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
    moduleId: "mern-mod-3",
    title: "Module 3: Backend, Authentication & Full Stack Projects (Lectures 10 - 13)",
    lectures: mernVideos.slice(9).map(v => {
      const q = generateMernQuestions(v);
      return {
        lectureId: `mern-lec-${String(v.num).padStart(2, '0')}`,
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

const mernCourse = {
  courseId: "course-mern-stack",
  title: "Complete MERN Stack & Full Stack Web Development",
  description: "Comprehensive MERN curriculum from HTML/CSS/JS and React to Redux Toolkit, TypeScript, Node.js, Express, MongoDB, Bank Transaction System, JWT Authentication, and GenAI applications.",
  category: "web",
  company: "Sheryians Coding School",
  instructor: "Harsh Vandana Sharma",
  thumbnail: "https://i.ytimg.com/vi/kkOuRJ69BRY/hqdefault.jpg",
  difficulty: "Beginner",
  duration: "50 hours",
  rating: 4.9,
  learners: "300k+",
  skills: ["HTML/CSS", "JavaScript", "ReactJS", "Redux Toolkit", "TypeScript", "Node.js", "Express", "MongoDB", "JWT", "Generative AI"],
  jobRoles: ["Full Stack Developer", "MERN Stack Developer", "Frontend Engineer", "Backend Engineer"],
  source: {
    type: "youtube_playlist",
    playlistUrl: "https://youtube.com/playlist?list=PLbtI3_MArDOk_A-GnYHPOiHSxlK2Vd3Zn&si=4IXKXvFH6wvudYPY"
  },
  modules: mernModules
};

fs.writeFileSync(path.join(outDir, 'mernCourse.ts'), `import { Course } from '../types';\n\nexport const mernCourseData: Course = ${JSON.stringify(mernCourse, null, 2)};\n`);
console.log("Wrote mernCourse.ts");
