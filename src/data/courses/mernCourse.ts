import { Course } from '../types';

export const mernCourseData: Course = {
  "courseId": "course-mern-stack",
  "title": "Complete MERN Stack & Full Stack Web Development",
  "description": "Comprehensive MERN curriculum from HTML/CSS/JS and React to Redux Toolkit, TypeScript, Node.js, Express, MongoDB, Bank Transaction System, JWT Authentication, and GenAI applications.",
  "category": "web-dev",
  "company": "Sheryians Coding School",
  "instructor": "Harsh Vandana Sharma",
  "thumbnail": "https://i.ytimg.com/vi/kkOuRJ69BRY/hqdefault.jpg",
  "difficulty": "Beginner",
  "duration": "50 hours",
  "durationHours": 50,
  "language": "Hindi",
  "certificateAvailable": true,
  "isFree": true,
  "isTrending": true,
  "rating": 4.9,
  "learners": "300k+",
  "skills": [
    "HTML/CSS",
    "JavaScript",
    "ReactJS",
    "Redux Toolkit",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Generative AI"
  ],
  "jobRoles": [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Frontend Engineer",
    "Backend Engineer"
  ],
  "source": {
    "type": "youtube_playlist",
    "playlistUrl": "https://youtube.com/playlist?list=PLbtI3_MArDOk_A-GnYHPOiHSxlK2Vd3Zn&si=4IXKXvFH6wvudYPY"
  },
  "modules": [
    {
      "moduleId": "mern-mod-1",
      "title": "Module 1: Frontend Web & JavaScript Mastery (Lectures 1 - 6)",
      "lectures": [
        {
          "lectureId": "mern-lec-01",
          "lectureNumber": 1,
          "title": "Learn HTML, CSS and JavaScript in Single Video | Basics of MERN Stack Development",
          "videoUrl": "https://www.youtube.com/embed/kkOuRJ69BRY",
          "topics": [
            "HTML5 Semantic Tags",
            "CSS Selectors & Box Model",
            "Flexbox & Grid Layouts",
            "DOM Manipulation with JavaScript"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-1-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of HTML5 Semantic Tags, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for HTML5 Semantic Tags in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "HTML5 Semantic Tags is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-1-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes CSS Selectors & Box Model?",
              "options": [
                "It enables robust, maintainable patterns for CSS Selectors & Box Model across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "CSS Selectors & Box Model provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-1-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does Flexbox & Grid Layouts improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "Flexbox & Grid Layouts optimizes execution flow and system structure."
            },
            {
              "id": "mern-1-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with DOM Manipulation with JavaScript?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing DOM Manipulation with JavaScript."
            },
            {
              "id": "mern-1-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of Learn HTML, CSS and JavaScript in Single Vide emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-1-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 1: HTML5 Semantic Tags.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for HTML5 Semantic Tags\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for HTML5 Semantic Tags."
            },
            {
              "id": "mern-1-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for CSS Selectors & Box Model that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-1-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for Flexbox & Grid Layouts using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-1-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-1-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for DOM Manipulation with JavaScript.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        },
        {
          "lectureId": "mern-lec-02",
          "lectureNumber": 2,
          "title": "Responsive Web Development Complete Course for Beginners | Tutorial + Full Project",
          "videoUrl": "https://www.youtube.com/embed/J_r6hBo9lO4",
          "topics": [
            "Media Queries & Mobile-First Design",
            "Responsive Images & Typography",
            "CSS Animations & Transitions",
            "Modern Landing Page Project"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-2-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of Media Queries & Mobile-First Design, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for Media Queries & Mobile-First Design in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "Media Queries & Mobile-First Design is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-2-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Responsive Images & Typography?",
              "options": [
                "It enables robust, maintainable patterns for Responsive Images & Typography across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "Responsive Images & Typography provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-2-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does CSS Animations & Transitions improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "CSS Animations & Transitions optimizes execution flow and system structure."
            },
            {
              "id": "mern-2-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with Modern Landing Page Project?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing Modern Landing Page Project."
            },
            {
              "id": "mern-2-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of Responsive Web Development Complete Course fo emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-2-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 2: Media Queries & Mobile-First Design.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for Media Queries & Mobile-First Design\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for Media Queries & Mobile-First Design."
            },
            {
              "id": "mern-2-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for Responsive Images & Typography that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-2-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for CSS Animations & Transitions using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-2-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-2-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for Modern Landing Page Project.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        },
        {
          "lectureId": "mern-lec-03",
          "lectureNumber": 3,
          "title": "JavaScript Full Course | JavaScript - Learn Everything | Sheryians Coding School",
          "videoUrl": "https://www.youtube.com/embed/a-wVHL0lpb0",
          "topics": [
            "Variables, Data Types & Operators",
            "Control Flow & Loops",
            "Functions & Scopes",
            "Arrays & Objects in JS"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-3-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of Variables, Data Types & Operators, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for Variables, Data Types & Operators in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "Variables, Data Types & Operators is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-3-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Control Flow & Loops?",
              "options": [
                "It enables robust, maintainable patterns for Control Flow & Loops across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "Control Flow & Loops provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-3-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does Functions & Scopes improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "Functions & Scopes optimizes execution flow and system structure."
            },
            {
              "id": "mern-3-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with Arrays & Objects in JS?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing Arrays & Objects in JS."
            },
            {
              "id": "mern-3-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of JavaScript Full Course | JavaScript - Learn E emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-3-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 3: Variables, Data Types & Operators.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for Variables, Data Types & Operators\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for Variables, Data Types & Operators."
            },
            {
              "id": "mern-3-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for Control Flow & Loops that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-3-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for Functions & Scopes using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-3-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-3-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for Arrays & Objects in JS.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        },
        {
          "lectureId": "mern-lec-04",
          "lectureNumber": 4,
          "title": "Part 2 – Master JavaScript & Become a Real Developer | Full Course",
          "videoUrl": "https://www.youtube.com/embed/1aR7tcmWo_w",
          "topics": [
            "Higher Order Functions (map, filter, reduce)",
            "Closures & Lexical Scope",
            "Execution Context & Call Stack",
            "Event Loop & Asynchronous JS"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-4-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of Higher Order Functions (map, filter, reduce), what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for Higher Order Functions (map, filter, reduce) in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "Higher Order Functions (map, filter, reduce) is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-4-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Closures & Lexical Scope?",
              "options": [
                "It enables robust, maintainable patterns for Closures & Lexical Scope across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "Closures & Lexical Scope provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-4-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does Execution Context & Call Stack improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "Execution Context & Call Stack optimizes execution flow and system structure."
            },
            {
              "id": "mern-4-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with Event Loop & Asynchronous JS?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing Event Loop & Asynchronous JS."
            },
            {
              "id": "mern-4-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of Part 2 – Master JavaScript & Become a Real De emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-4-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 4: Higher Order Functions (map, filter, reduce).",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for Higher Order Functions (map, filter, reduce)\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for Higher Order Functions (map, filter, reduce)."
            },
            {
              "id": "mern-4-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for Closures & Lexical Scope that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-4-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for Execution Context & Call Stack using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-4-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-4-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for Event Loop & Asynchronous JS.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        },
        {
          "lectureId": "mern-lec-05",
          "lectureNumber": 5,
          "title": "Part 3 – Advanced JavaScript, Projects & Real Developer Mindset | Full Course",
          "videoUrl": "https://www.youtube.com/embed/wH6uf20dpAo",
          "topics": [
            "Promises & Async/Await",
            "Prototypes & Prototypal Inheritance",
            "Debouncing & Throttling",
            "Real World JS DOM Projects"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-5-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of Promises & Async/Await, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for Promises & Async/Await in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "Promises & Async/Await is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-5-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Prototypes & Prototypal Inheritance?",
              "options": [
                "It enables robust, maintainable patterns for Prototypes & Prototypal Inheritance across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "Prototypes & Prototypal Inheritance provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-5-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does Debouncing & Throttling improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "Debouncing & Throttling optimizes execution flow and system structure."
            },
            {
              "id": "mern-5-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with Real World JS DOM Projects?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing Real World JS DOM Projects."
            },
            {
              "id": "mern-5-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of Part 3 – Advanced JavaScript, Projects & Real emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-5-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 5: Promises & Async/Await.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for Promises & Async/Await\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for Promises & Async/Await."
            },
            {
              "id": "mern-5-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for Prototypes & Prototypal Inheritance that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-5-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for Debouncing & Throttling using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-5-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-5-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for Real World JS DOM Projects.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        },
        {
          "lectureId": "mern-lec-06",
          "lectureNumber": 6,
          "title": "Part 4 – JavaScript for Placements | Get Ready for Your First Developer Job",
          "videoUrl": "https://www.youtube.com/embed/GVdBPJzmwQg",
          "topics": [
            "Currying & Deep/Shallow Copy",
            "Call, Apply & Bind Methods",
            "Event Bubbling & Event Delegation",
            "Frontend Interview Coding Challenges"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-6-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of Currying & Deep/Shallow Copy, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for Currying & Deep/Shallow Copy in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "Currying & Deep/Shallow Copy is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-6-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Call, Apply & Bind Methods?",
              "options": [
                "It enables robust, maintainable patterns for Call, Apply & Bind Methods across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "Call, Apply & Bind Methods provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-6-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does Event Bubbling & Event Delegation improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "Event Bubbling & Event Delegation optimizes execution flow and system structure."
            },
            {
              "id": "mern-6-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with Frontend Interview Coding Challenges?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing Frontend Interview Coding Challenges."
            },
            {
              "id": "mern-6-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of Part 4 – JavaScript for Placements | Get Read emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-6-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 6: Currying & Deep/Shallow Copy.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for Currying & Deep/Shallow Copy\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for Currying & Deep/Shallow Copy."
            },
            {
              "id": "mern-6-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for Call, Apply & Bind Methods that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-6-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for Event Bubbling & Event Delegation using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-6-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-6-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for Frontend Interview Coding Challenges.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        }
      ]
    },
    {
      "moduleId": "mern-mod-2",
      "title": "Module 2: ReactJS, Redux Toolkit & TypeScript (Lectures 7 - 9)",
      "lectures": [
        {
          "lectureId": "mern-lec-07",
          "lectureNumber": 7,
          "title": "ReactJS Full Course | ReactJS - Learn Everything | Sheryians Coding School",
          "videoUrl": "https://www.youtube.com/embed/3LRZRSIh_KE",
          "topics": [
            "React Components & JSX",
            "useState & useEffect Hooks",
            "Props Drilling & Lifting State Up",
            "Component Lifecycle & Virtual DOM"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-7-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of React Components & JSX, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for React Components & JSX in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "React Components & JSX is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-7-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes useState & useEffect Hooks?",
              "options": [
                "It enables robust, maintainable patterns for useState & useEffect Hooks across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "useState & useEffect Hooks provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-7-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does Props Drilling & Lifting State Up improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "Props Drilling & Lifting State Up optimizes execution flow and system structure."
            },
            {
              "id": "mern-7-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with Component Lifecycle & Virtual DOM?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing Component Lifecycle & Virtual DOM."
            },
            {
              "id": "mern-7-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of ReactJS Full Course | ReactJS - Learn Everyth emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-7-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 7: React Components & JSX.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for React Components & JSX\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for React Components & JSX."
            },
            {
              "id": "mern-7-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for useState & useEffect Hooks that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-7-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for Props Drilling & Lifting State Up using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-7-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-7-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for Component Lifecycle & Virtual DOM.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        },
        {
          "lectureId": "mern-lec-08",
          "lectureNumber": 8,
          "title": "Redux Toolkit Complete Course 2026 | Beginner to Advanced with Project",
          "videoUrl": "https://www.youtube.com/embed/Q5TqsetwCoE",
          "topics": [
            "Global State Management",
            "createSlice & reducers",
            "configureStore & Provider",
            "useSelector & useDispatch Hooks"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-8-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of Global State Management, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for Global State Management in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "Global State Management is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-8-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes createSlice & reducers?",
              "options": [
                "It enables robust, maintainable patterns for createSlice & reducers across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "createSlice & reducers provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-8-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does configureStore & Provider improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "configureStore & Provider optimizes execution flow and system structure."
            },
            {
              "id": "mern-8-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with useSelector & useDispatch Hooks?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing useSelector & useDispatch Hooks."
            },
            {
              "id": "mern-8-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of Redux Toolkit Complete Course 2026 | Beginner emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-8-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 8: Global State Management.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for Global State Management\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for Global State Management."
            },
            {
              "id": "mern-8-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for createSlice & reducers that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-8-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for configureStore & Provider using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-8-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-8-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for useSelector & useDispatch Hooks.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        },
        {
          "lectureId": "mern-lec-09",
          "lectureNumber": 9,
          "title": "TypeScript Domination - Full Course",
          "videoUrl": "https://www.youtube.com/embed/lVzb6pmel_E",
          "topics": [
            "TypeScript Types, Interfaces & Types vs Interfaces",
            "Generics & Type Constraints",
            "Union & Intersection Types",
            "TypeScript with React Props & State"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-9-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of TypeScript Types, Interfaces & Types vs Interfaces, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for TypeScript Types, Interfaces & Types vs Interfaces in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "TypeScript Types, Interfaces & Types vs Interfaces is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-9-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Generics & Type Constraints?",
              "options": [
                "It enables robust, maintainable patterns for Generics & Type Constraints across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "Generics & Type Constraints provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-9-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does Union & Intersection Types improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "Union & Intersection Types optimizes execution flow and system structure."
            },
            {
              "id": "mern-9-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with TypeScript with React Props & State?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing TypeScript with React Props & State."
            },
            {
              "id": "mern-9-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of TypeScript Domination - Full Course emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-9-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 9: TypeScript Types, Interfaces & Types vs Interfaces.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for TypeScript Types, Interfaces & Types vs Interfaces\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for TypeScript Types, Interfaces & Types vs Interfaces."
            },
            {
              "id": "mern-9-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for Generics & Type Constraints that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-9-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for Union & Intersection Types using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-9-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-9-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for TypeScript with React Props & State.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        }
      ]
    },
    {
      "moduleId": "mern-mod-3",
      "title": "Module 3: Backend, Authentication & Full Stack Projects (Lectures 10 - 13)",
      "lectures": [
        {
          "lectureId": "mern-lec-10",
          "lectureNumber": 10,
          "title": "Complete Backend One Shot | Beginners to Advanced | Learn Node.js, Express, MongoDB from Scratch",
          "videoUrl": "https://www.youtube.com/embed/0IciwnJ6PJI",
          "topics": [
            "Node.js Architecture & Event Loop",
            "Express.js Routing & Middleware",
            "MongoDB & Mongoose Schemas",
            "CRUD RESTful API Implementation"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-10-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of Node.js Architecture & Event Loop, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for Node.js Architecture & Event Loop in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "Node.js Architecture & Event Loop is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-10-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Express.js Routing & Middleware?",
              "options": [
                "It enables robust, maintainable patterns for Express.js Routing & Middleware across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "Express.js Routing & Middleware provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-10-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does MongoDB & Mongoose Schemas improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "MongoDB & Mongoose Schemas optimizes execution flow and system structure."
            },
            {
              "id": "mern-10-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with CRUD RESTful API Implementation?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing CRUD RESTful API Implementation."
            },
            {
              "id": "mern-10-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of Complete Backend One Shot | Beginners to Adva emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-10-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 10: Node.js Architecture & Event Loop.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for Node.js Architecture & Event Loop\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for Node.js Architecture & Event Loop."
            },
            {
              "id": "mern-10-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for Express.js Routing & Middleware that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-10-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for MongoDB & Mongoose Schemas using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-10-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-10-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for CRUD RESTful API Implementation.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        },
        {
          "lectureId": "mern-lec-11",
          "lectureNumber": 11,
          "title": "Advanced Backend Project | Learn Bank Transaction System with Node.js, Express & MongoDB",
          "videoUrl": "https://www.youtube.com/embed/NQOAQP0mow0",
          "topics": [
            "ACID Transactions with Mongoose Sessions",
            "Account Balances & Concurrency Locking",
            "Transaction History Logs",
            "Error Handling & Rollbacks"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-11-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of ACID Transactions with Mongoose Sessions, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for ACID Transactions with Mongoose Sessions in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "ACID Transactions with Mongoose Sessions is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-11-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Account Balances & Concurrency Locking?",
              "options": [
                "It enables robust, maintainable patterns for Account Balances & Concurrency Locking across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "Account Balances & Concurrency Locking provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-11-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does Transaction History Logs improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "Transaction History Logs optimizes execution flow and system structure."
            },
            {
              "id": "mern-11-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with Error Handling & Rollbacks?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing Error Handling & Rollbacks."
            },
            {
              "id": "mern-11-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of Advanced Backend Project | Learn Bank Transac emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-11-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 11: ACID Transactions with Mongoose Sessions.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for ACID Transactions with Mongoose Sessions\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for ACID Transactions with Mongoose Sessions."
            },
            {
              "id": "mern-11-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for Account Balances & Concurrency Locking that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-11-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for Transaction History Logs using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-11-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-11-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for Error Handling & Rollbacks.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        },
        {
          "lectureId": "mern-lec-12",
          "lectureNumber": 12,
          "title": "Complete Authentication System | JWT, Refresh Token, OTP, Logout All Devices",
          "videoUrl": "https://www.youtube.com/embed/pkKn8q5AvsY",
          "topics": [
            "Password Hashing with bcrypt",
            "JWT Access Tokens & Refresh Tokens",
            "HTTP-Only Cookies & XSS Protection",
            "OTP Verification via Email/SMS"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-12-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of Password Hashing with bcrypt, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for Password Hashing with bcrypt in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "Password Hashing with bcrypt is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-12-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes JWT Access Tokens & Refresh Tokens?",
              "options": [
                "It enables robust, maintainable patterns for JWT Access Tokens & Refresh Tokens across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "JWT Access Tokens & Refresh Tokens provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-12-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does HTTP-Only Cookies & XSS Protection improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "HTTP-Only Cookies & XSS Protection optimizes execution flow and system structure."
            },
            {
              "id": "mern-12-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with OTP Verification via Email/SMS?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing OTP Verification via Email/SMS."
            },
            {
              "id": "mern-12-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of Complete Authentication System | JWT, Refresh emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-12-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 12: Password Hashing with bcrypt.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for Password Hashing with bcrypt\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for Password Hashing with bcrypt."
            },
            {
              "id": "mern-12-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for JWT Access Tokens & Refresh Tokens that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-12-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for HTTP-Only Cookies & XSS Protection using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-12-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-12-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for OTP Verification via Email/SMS.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        },
        {
          "lectureId": "mern-lec-13",
          "lectureNumber": 13,
          "title": "Gen AI + Full Stack Web Development Project | React, Node, JWT, Gemini",
          "videoUrl": "https://www.youtube.com/embed/zG3hNL08Dro",
          "topics": [
            "Google Gemini AI API Integration",
            "Streaming Responses to Frontend",
            "Prompt Engineering for Full Stack Apps",
            "Full Stack AI SaaS Deployment"
          ],
          "assessment": {
            "totalQuestions": 10,
            "fundamentalQuestions": 5,
            "codingQuestions": 5
          },
          "fundamentalQuestions": [
            {
              "id": "mern-13-f-01",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "In context of Google Gemini AI API Integration, what is the primary architectural concept?",
              "options": [
                "It provides a foundational building block for Google Gemini AI API Integration in modern web applications",
                "It is a deprecated technique not used today",
                "It only works in desktop browsers",
                "It is an operating system kernel module"
              ],
              "correctAnswer": 0,
              "explanation": "Google Gemini AI API Integration is an essential concept in modern web and full stack development."
            },
            {
              "id": "mern-13-f-02",
              "type": "fundamental",
              "difficulty": "easy",
              "question": "Which statement accurately describes Streaming Responses to Frontend?",
              "options": [
                "It enables robust, maintainable patterns for Streaming Responses to Frontend across the MERN stack",
                "It eliminates the need for database storage",
                "It converts JavaScript into Python automatically",
                "It requires a paid license to execute"
              ],
              "correctAnswer": 0,
              "explanation": "Streaming Responses to Frontend provides key functionality used in industry-standard applications."
            },
            {
              "id": "mern-13-f-03",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "How does Prompt Engineering for Full Stack Apps improve application performance and structure?",
              "options": [
                "By modularizing functionality, optimizing execution, and preventing common anti-patterns",
                "By deleting unused variables from disk",
                "By forcing synchronous blocking operations",
                "By disabling network requests"
              ],
              "correctAnswer": 0,
              "explanation": "Prompt Engineering for Full Stack Apps optimizes execution flow and system structure."
            },
            {
              "id": "mern-13-f-04",
              "type": "fundamental",
              "difficulty": "medium",
              "question": "What common mistake should developers avoid when working with Full Stack AI SaaS Deployment?",
              "options": [
                "Neglecting edge cases, state mutability, and error handling",
                "Using valid variable names",
                "Adding documentation comments",
                "Testing components in the browser"
              ],
              "correctAnswer": 0,
              "explanation": "Proper validation and lifecycle handling are critical when implementing Full Stack AI SaaS Deployment."
            },
            {
              "id": "mern-13-f-05",
              "type": "fundamental",
              "difficulty": "hard",
              "question": "During a senior developer interview, why is mastery of Gen AI + Full Stack Web Development Project | emphasized?",
              "options": [
                "It represents core competencies required to architect scalable production MERN stack web applications",
                "It is the only topic ever asked in interviews",
                "It guarantees 100% bug-free deployment without testing",
                "It is required by the JavaScript compiler"
              ],
              "correctAnswer": 0,
              "explanation": "Understanding full stack architecture and design patterns separates senior engineers from beginners."
            }
          ],
          "codingQuestions": [
            {
              "id": "mern-13-c-01",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Write a JavaScript function representing core logic for Lecture 13: Google Gemini AI API Integration.",
              "language": "javascript",
              "starterCode": "function executeLogic(input) {\n    // Implement logic for Google Gemini AI API Integration\n    return input;\n}",
              "expectedOutput": "Processed output",
              "solution": "function executeLogic(input) {\n    return typeof input === 'string' ? input.trim() : input;\n}",
              "explanation": "Validates and processes input for Google Gemini AI API Integration."
            },
            {
              "id": "mern-13-c-02",
              "type": "coding",
              "subType": "implementation",
              "difficulty": "easy",
              "question": "Implement a helper function for Streaming Responses to Frontend that handles default values cleanly.",
              "language": "javascript",
              "starterCode": "function handleDefault(val, fallback = 'default') {\n    // Return val if present, else fallback\n}",
              "expectedOutput": "Clean value",
              "solution": "function handleDefault(val, fallback = 'default') {\n    return val !== undefined && val !== null ? val : fallback;\n}",
              "explanation": "Nullish coalescing style verification."
            },
            {
              "id": "mern-13-c-03",
              "type": "coding",
              "subType": "problem_solving",
              "difficulty": "medium",
              "question": "Implement an asynchronous helper for Prompt Engineering for Full Stack Apps using Promises or async/await.",
              "language": "javascript",
              "starterCode": "async function fetchDataSim(data) {\n    // Return resolved promise with data\n}",
              "expectedOutput": "Promise resolving data",
              "solution": "async function fetchDataSim(data) {\n    return new Promise(resolve => setTimeout(() => resolve(data), 10));\n}",
              "explanation": "Simulates asynchronous network response."
            },
            {
              "id": "mern-13-c-04",
              "type": "coding",
              "subType": "debugging",
              "difficulty": "medium",
              "question": "Fix the shallow copy mutation bug when updating nested state: `const updated = {...state}; updated.profile.name = 'New';`",
              "language": "javascript",
              "starterCode": "function updateNested(state, newName) {\n    // Fix shallow mutation\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "expectedOutput": "Immutably updated state",
              "solution": "function updateNested(state, newName) {\n    return {...state, profile: {...state.profile, name: newName}};\n}",
              "explanation": "Shallow copying nested objects requires spreading inner object levels."
            },
            {
              "id": "mern-13-c-05",
              "type": "coding",
              "subType": "interview_challenge",
              "difficulty": "hard",
              "question": "Write a robust middleware/validator function for Full Stack AI SaaS Deployment.",
              "language": "javascript",
              "starterCode": "function validatePayload(payload, requiredFields) {\n    // Return true if all requiredFields are present and non-empty\n}",
              "expectedOutput": "Boolean true/false",
              "solution": "function validatePayload(payload, requiredFields) {\n    if (!payload || typeof payload !== 'object') return false;\n    return requiredFields.every(field => payload[field] !== undefined && payload[field] !== null && payload[field] !== '');\n}",
              "explanation": "Ensures all mandatory fields are populated."
            }
          ]
        }
      ]
    }
  ]
};
