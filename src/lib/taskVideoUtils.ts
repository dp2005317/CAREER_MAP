export interface TaskVideoInfo {
  videoUrl: string;
  videoTitle: string;
  duration: string;
  courseId: string;
  lectureId: string;
  topics: string[];
}

export function resolveTaskVideo(
  title: string, 
  category?: string, 
  explicitCourseId?: string, 
  explicitLectureId?: string
): TaskVideoInfo {
  const lower = (title + " " + (category || "")).toLowerCase();

  // If explicit course and lecture IDs are provided, handle known combinations
  if (explicitCourseId === "course-mern-stack" && explicitLectureId) {
    if (explicitLectureId === "mern-lec-07") {
      return {
        videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
        videoTitle: "ReactJS Full Course | ReactJS - Learn Everything",
        duration: "2 hrs 30 min",
        courseId: "course-mern-stack",
        lectureId: "mern-lec-07",
        topics: ["React Components & JSX", "useState & useEffect Hooks", "Props Drilling vs State", "Virtual DOM & Rendering"]
      };
    }
    if (explicitLectureId === "mern-lec-08") {
      return {
        videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
        videoTitle: "Redux Toolkit Complete Course 2026",
        duration: "1 hr 45 min",
        courseId: "course-mern-stack",
        lectureId: "mern-lec-08",
        topics: ["Redux Store & Slices", "createAsyncThunk for APIs", "useDispatch & useSelector", "State Immutability"]
      };
    }
    if (explicitLectureId === "mern-lec-10") {
      return {
        videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
        videoTitle: "Complete Backend One Shot: Node.js, Express & MongoDB",
        duration: "3 hrs 15 min",
        courseId: "course-mern-stack",
        lectureId: "mern-lec-10",
        topics: ["Express Server Setup", "MongoDB Schema & Mongoose", "REST API CRUD Endpoints", "Middleware Architecture"]
      };
    }
    if (explicitLectureId === "mern-lec-12") {
      return {
        videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
        videoTitle: "Complete Authentication System | JWT, Refresh Token & Security",
        duration: "2 hrs 00 min",
        courseId: "course-mern-stack",
        lectureId: "mern-lec-12",
        topics: ["Password Hashing with bcrypt", "JWT Sign & Verification", "HTTP-Only Cookies", "Protected Route Middleware"]
      };
    }
  }

  // MERN Stack specific topics
  if (lower.includes("redux") || lower.includes("state management") || lower.includes("toolkit")) {
    return {
      videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
      videoTitle: "Redux Toolkit Complete Course 2026",
      duration: "1 hr 45 min",
      courseId: "course-mern-stack",
      lectureId: "mern-lec-08",
      topics: ["Redux Slices & Reducers", "Global Store Setup", "Async API Thunks", "State Predictability"]
    };
  }

  if (lower.includes("react") || lower.includes("hooks") || lower.includes("component") || lower.includes("usestate") || lower.includes("useeffect")) {
    return {
      videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
      videoTitle: "ReactJS Full Course | ReactJS - Learn Everything",
      duration: "2 hrs 30 min",
      courseId: "course-mern-stack",
      lectureId: "mern-lec-07",
      topics: ["Functional Components & JSX", "useState & useEffect Hooks", "Passing Props & Events", "Component Life Cycle"]
    };
  }

  if (lower.includes("typescript") || lower.includes("ts ") || lower.includes("types ")) {
    return {
      videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
      videoTitle: "TypeScript Domination - Full Course",
      duration: "1 hr 50 min",
      courseId: "course-mern-stack",
      lectureId: "mern-lec-09",
      topics: ["TypeScript Types & Interfaces", "Generics & Unions", "Type Safety in React", "Compiling & tsconfig"]
    };
  }

  if (lower.includes("jwt") || lower.includes("auth") || lower.includes("token") || lower.includes("login") || lower.includes("cookie") || lower.includes("security")) {
    return {
      videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
      videoTitle: "Complete Authentication System | JWT, Refresh Token & Security",
      duration: "2 hrs 00 min",
      courseId: "course-mern-stack",
      lectureId: "mern-lec-12",
      topics: ["Password Hashing with bcrypt", "JWT Sign & Verification", "HTTP-Only Cookie Storage", "Protected Route Middleware"]
    };
  }

  if (lower.includes("node") || lower.includes("express") || lower.includes("mongo") || lower.includes("api") || lower.includes("backend") || lower.includes("endpoint") || lower.includes("crud")) {
    return {
      videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
      videoTitle: "Complete Backend One Shot: Node.js, Express & MongoDB",
      duration: "3 hrs 15 min",
      courseId: "course-mern-stack",
      lectureId: "mern-lec-10",
      topics: ["Node.js Runtime & Modules", "Express Router Architecture", "Mongoose Schemas & Models", "Error Handling Middleware"]
    };
  }

  if (lower.includes("responsive") || lower.includes("flexbox") || lower.includes("grid") || lower.includes("css")) {
    return {
      videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
      videoTitle: "Responsive Web Development Complete Course for Beginners",
      duration: "2 hrs 10 min",
      courseId: "course-mern-stack",
      lectureId: "mern-lec-02",
      topics: ["CSS Flexbox Alignment", "CSS Grid 2D Layouts", "Media Queries & Mobile-First", "Modern UI Foundations"]
    };
  }

  if (lower.includes("mern") || lower.includes("full stack") || lower.includes("web development") || lower.includes("javascript") || lower.includes("html") || lower.includes("dom")) {
    return {
      videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
      videoTitle: "Learn HTML, CSS and JavaScript in Single Video | Basics of MERN Stack",
      duration: "2 hrs 10 min",
      courseId: "course-mern-stack",
      lectureId: "mern-lec-01",
      topics: ["HTML5 Semantic Elements", "CSS Styling & Box Model", "JavaScript Variables & Functions", "DOM Manipulation Essentials"]
    };
  }

  // DSA & C++ Specific
  if (lower.includes("array") || lower.includes("vector") || lower.includes("kadane") || lower.includes("subarray")) {
    return {
      videoUrl: "https://www.youtube.com/embed/VTLCoHnyACE",
      videoTitle: "Arrays, Vectors & Kadane's Algorithm in C++",
      duration: "1 hr 30 min",
      courseId: "course-dsa",
      lectureId: "dsa-lecture-08",
      topics: ["Array Memory Allocation", "C++ STL Vector Internals", "Maximum Subarray Sum", "Kadane's Algorithm Optimization"]
    };
  }

  if (lower.includes("pointer") || lower.includes("memory") || lower.includes("reference")) {
    return {
      videoUrl: "https://www.youtube.com/embed/VTLCoHnyACE",
      videoTitle: "Pointers, References & Memory Management in C++",
      duration: "1 hr 15 min",
      courseId: "course-dsa",
      lectureId: "dsa-lecture-10",
      topics: ["Pointer Syntax & Dereferencing", "Pass by Reference vs Value", "Heap vs Stack Memory", "Pointer Arithmetic"]
    };
  }

  if (lower.includes("loop") || lower.includes("conditional") || lower.includes("pattern") || lower.includes("if-else")) {
    return {
      videoUrl: "https://www.youtube.com/embed/VTLCoHnyACE",
      videoTitle: "Conditional Statements & Loops in C++",
      duration: "1 hr 20 min",
      courseId: "course-dsa",
      lectureId: "dsa-lecture-03",
      topics: ["If-Else Branching Logic", "For, While & Do-While Loops", "Nested Loops & Pattern Printing", "Break & Continue Keywords"]
    };
  }

  if (lower.includes("dsa") || lower.includes("algorithm") || lower.includes("leetcode") || lower.includes("problem") || lower.includes("c++") || lower.includes("complexity") || lower.includes("flowchart") || lower.includes("pseudocode")) {
    return {
      videoUrl: "https://www.youtube.com/embed/VTLCoHnyACE",
      videoTitle: "Data Structures & Algorithms: Flowcharts, Logic & Pseudocode",
      duration: "1 hr 15 min",
      courseId: "course-dsa",
      lectureId: "dsa-lecture-01",
      topics: ["Algorithm Problem Solving Framework", "Flowchart Diagramming", "Pseudocode into C++", "Time Complexity Big-O Intro"]
    };
  }

  // Git & GitHub
  if (lower.includes("git") || lower.includes("github") || lower.includes("branch") || lower.includes("merge") || lower.includes("commit") || lower.includes("pull request") || lower.includes("version control") || lower.includes("open source")) {
    return {
      videoUrl: "https://www.youtube-nocookie.com/embed/BnEFaIfcwOU",
      videoTitle: "Git & GitHub For Engineering Students (What Actually Matters)",
      duration: "1 hr 45 min",
      courseId: "git-and-github",
      lectureId: "git-github-masterclass",
      topics: [
        "Git Architecture: Working Directory & Staging Area",
        "Branching Strategies & Pull Requests",
        "Handling & Resolving Merge Conflicts",
        "Open Source Collaboration Workflows"
      ]
    };
  }

  // Linux & DevOps
  if (lower.includes("linux") || lower.includes("terminal") || lower.includes("bash") || lower.includes("shell") || lower.includes("command line") || lower.includes("devops")) {
    return {
      videoUrl: "https://www.youtube.com/embed/sWbANNq40_k",
      videoTitle: "Linux Command Line & Shell Fundamentals",
      duration: "1 hr 20 min",
      courseId: "course-linux",
      lectureId: "linux-lec-01",
      topics: [
        "Linux File System Navigation & Permissions",
        "Pipes, Redirection & Process Management",
        "Shell Scripting Essentials",
        "CLI Productivity Secrets"
      ]
    };
  }

  // SQL & Data Analytics
  if (lower.includes("sql") || lower.includes("query") || lower.includes("database") || lower.includes("table") || lower.includes("join") || lower.includes("analytics")) {
    return {
      videoUrl: "https://www.youtube.com/embed/HXV3zeRR3h4",
      videoTitle: "SQL & Data Analytics Complete Curriculum",
      duration: "1 hr 40 min",
      courseId: "course-data-analytics",
      lectureId: "da-lec-01",
      topics: [
        "Relational Database Schema Design",
        "Complex SQL Joins & Window Functions",
        "Aggregations & Business Reporting",
        "Data Visualization Insights"
      ]
    };
  }

  // Machine Learning
  if (lower.includes("ml") || lower.includes("machine learning") || lower.includes("model") || lower.includes("scikit") || lower.includes("regression") || lower.includes("classification")) {
    return {
      videoUrl: "https://www.youtube.com/embed/i_LwzRVP7bg",
      videoTitle: "Machine Learning with Python & Scikit-Learn",
      duration: "1 hr 30 min",
      courseId: "course-ml",
      lectureId: "ml-lecture-01",
      topics: [
        "Supervised vs Unsupervised Learning",
        "Feature Engineering & Data Preprocessing",
        "Model Training & Validation Metrics",
        "Model Deployment Fundamentals"
      ]
    };
  }

  // Data Science
  if (lower.includes("data science") || lower.includes("pandas") || lower.includes("numpy")) {
    return {
      videoUrl: "https://www.youtube.com/embed/i_LwzRVP7bg",
      videoTitle: "Python for Data Science Bootcamp",
      duration: "1 hr 30 min",
      courseId: "course-data-science",
      lectureId: "ds-lec-01",
      topics: ["Pandas DataFrames", "NumPy Matrix Operations", "Exploratory Data Analysis", "Data Cleaning"]
    };
  }

  // Default to Git & GitHub masterclass
  return {
    videoUrl: "https://www.youtube-nocookie.com/embed/BnEFaIfcwOU",
    videoTitle: "Git & GitHub For Engineering Students (What Actually Matters)",
    duration: "1 hr 45 min",
    courseId: "git-and-github",
    lectureId: "git-github-masterclass",
    topics: [
      "Industry-Standard Developer Tools",
      "Writing Clean, Maintainable Code",
      "Building a Standout Engineering Portfolio",
      "Interview & Career Progression Roadmap"
    ]
  };
}

export function getLectureRoute(courseId: string, lectureId?: string): string {
  if (courseId && lectureId) {
    return `/courses/${courseId}/lectures/${lectureId}`;
  }
  if (courseId) {
    return `/courses/${courseId}`;
  }
  return "/courses";
}
