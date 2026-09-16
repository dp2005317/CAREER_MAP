import { NextRequest, NextResponse } from "next/server";
import { Mistral } from "@mistralai/mistralai";

interface CourseInfo {
  id: string;
  title: string;
  progressPercent: number;
  completedLecturesCount?: number;
  totalLecturesCount?: number;
}

interface RequestBody {
  enrolledCourses?: CourseInfo[];
  certificates?: string[];
  skills?: string[];
  targetRole?: string;
  existingTaskTitles?: string[];
}

interface CurriculumItem {
  courseId: string;
  courseTitle: string;
  lectureId: string;
  videoTitle: string;
  videoUrl: string;
  title: string;
  category: "Course Module" | "Practice Project" | "Certification" | "Skill Challenge";
  roleSuitability: string[];
}

const REAL_CURRICULUM: CurriculumItem[] = [
  {
    courseId: "course-mern-stack",
    courseTitle: "Full Stack MERN",
    lectureId: "mern-lec-01",
    videoTitle: "Learn HTML, CSS and JavaScript in Single Video | Basics of MERN Stack",
    videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
    title: "Master HTML5 Semantic Tags & CSS Box Model Fundamentals",
    category: "Course Module",
    roleSuitability: ["Frontend Developer", "Full Stack Developer", "Software Engineer"]
  },
  {
    courseId: "course-mern-stack",
    courseTitle: "Full Stack MERN",
    lectureId: "mern-lec-02",
    videoTitle: "Responsive Web Development Complete Course for Beginners",
    videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
    title: "Build Responsive Modern Layouts with Flexbox & CSS Grid",
    category: "Practice Project",
    roleSuitability: ["Frontend Developer", "Full Stack Developer"]
  },
  {
    courseId: "course-mern-stack",
    courseTitle: "Full Stack MERN",
    lectureId: "mern-lec-07",
    videoTitle: "ReactJS Full Course | ReactJS - Learn Everything",
    videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
    title: "Master React Components, Props & useState/useEffect Hooks",
    category: "Course Module",
    roleSuitability: ["Frontend Developer", "Full Stack Developer", "Software Engineer"]
  },
  {
    courseId: "course-mern-stack",
    courseTitle: "Full Stack MERN",
    lectureId: "mern-lec-08",
    videoTitle: "Redux Toolkit Complete Course 2026",
    videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
    title: "Implement Predictable Global State with Redux Toolkit",
    category: "Skill Challenge",
    roleSuitability: ["Frontend Developer", "Full Stack Developer"]
  },
  {
    courseId: "course-mern-stack",
    courseTitle: "Full Stack MERN",
    lectureId: "mern-lec-09",
    videoTitle: "TypeScript Domination - Full Course",
    videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
    title: "Convert Web Application Components to Strict TypeScript",
    category: "Skill Challenge",
    roleSuitability: ["Full Stack Developer", "Software Engineer"]
  },
  {
    courseId: "course-mern-stack",
    courseTitle: "Full Stack MERN",
    lectureId: "mern-lec-10",
    videoTitle: "Complete Backend One Shot: Node.js, Express & MongoDB",
    videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
    title: "Build RESTful API CRUD Endpoints with Node.js & Express",
    category: "Practice Project",
    roleSuitability: ["Backend Developer", "Full Stack Developer", "Software Engineer"]
  },
  {
    courseId: "course-mern-stack",
    courseTitle: "Full Stack MERN",
    lectureId: "mern-lec-12",
    videoTitle: "Complete Authentication System | JWT, Refresh Token & Security",
    videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY",
    title: "Implement JWT Authentication & Protected Route Middleware",
    category: "Certification",
    roleSuitability: ["Backend Developer", "Full Stack Developer", "Software Engineer"]
  },
  {
    courseId: "course-dsa",
    courseTitle: "Data Structures & Algorithms",
    lectureId: "dsa-lecture-01",
    videoTitle: "Data Structures & Algorithms: Flowcharts, Logic & Pseudocode",
    videoUrl: "https://www.youtube.com/embed/VTLCoHnyACE",
    title: "Solve Problem-Solving Flowcharts & Logic in C++",
    category: "Skill Challenge",
    roleSuitability: ["Software Engineer", "SDE 1", "Backend Developer"]
  },
  {
    courseId: "course-dsa",
    courseTitle: "Data Structures & Algorithms",
    lectureId: "dsa-lecture-03",
    videoTitle: "Conditional Statements & Loops in C++",
    videoUrl: "https://www.youtube.com/embed/VTLCoHnyACE",
    title: "Practice C++ Nested Loops & Complex Pattern Problems",
    category: "Course Module",
    roleSuitability: ["Software Engineer", "SDE 1"]
  },
  {
    courseId: "course-dsa",
    courseTitle: "Data Structures & Algorithms",
    lectureId: "dsa-lecture-08",
    videoTitle: "Arrays, Vectors & Kadane's Algorithm in C++",
    videoUrl: "https://www.youtube.com/embed/VTLCoHnyACE",
    title: "Master Maximum Subarray Sum with Kadane's Algorithm",
    category: "Skill Challenge",
    roleSuitability: ["Software Engineer", "SDE 1"]
  },
  {
    courseId: "course-dsa",
    courseTitle: "Data Structures & Algorithms",
    lectureId: "dsa-lecture-10",
    videoTitle: "Pointers, References & Memory Management in C++",
    videoUrl: "https://www.youtube.com/embed/VTLCoHnyACE",
    title: "Master C++ Pointers, References & Heap Memory Allocation",
    category: "Course Module",
    roleSuitability: ["Software Engineer", "Backend Developer"]
  },
  {
    courseId: "git-and-github",
    courseTitle: "Git & GitHub",
    lectureId: "git-github-masterclass",
    videoTitle: "Git & GitHub For Engineering Students (What Actually Matters)",
    videoUrl: "https://www.youtube-nocookie.com/embed/BnEFaIfcwOU",
    title: "Practice Git Branching Strategies, Pull Requests & Merge Conflicts",
    category: "Course Module",
    roleSuitability: ["Software Engineer", "Frontend Developer", "Backend Developer", "DevOps Engineer"]
  },
  {
    courseId: "course-linux",
    courseTitle: "Linux Command Line",
    lectureId: "linux-lec-01",
    videoTitle: "Linux Command Line & Shell Fundamentals",
    videoUrl: "https://www.youtube.com/embed/sWbANNq40_k",
    title: "Master Linux Terminal Navigation, Pipes & Shell Redirection",
    category: "Skill Challenge",
    roleSuitability: ["DevOps Engineer", "Backend Developer", "Software Engineer"]
  },
  {
    courseId: "course-data-analytics",
    courseTitle: "SQL & Data Analytics",
    lectureId: "da-lec-01",
    videoTitle: "SQL & Data Analytics Complete Curriculum",
    videoUrl: "https://www.youtube.com/embed/HXV3zeRR3h4",
    title: "Write Complex SQL Joins & Aggregations for Business Analytics",
    category: "Course Module",
    roleSuitability: ["Data Analyst", "Software Engineer", "Backend Developer"]
  },
  {
    courseId: "course-ml",
    courseTitle: "Machine Learning",
    lectureId: "ml-lecture-01",
    videoTitle: "Machine Learning with Python & Scikit-Learn",
    videoUrl: "https://www.youtube.com/embed/i_LwzRVP7bg",
    title: "Train Supervised Machine Learning Models with Scikit-Learn",
    category: "Practice Project",
    roleSuitability: ["AI Engineer", "Data Scientist", "Software Engineer"]
  }
];

export async function POST(req: NextRequest) {
  try {
    const body: RequestBody = await req.json().catch(() => ({}));
    const {
      enrolledCourses = [],
      certificates = [],
      skills = [],
      targetRole = "Software Engineer",
      existingTaskTitles = []
    } = body;

    const apiKey = process.env.MISTRAL_API_KEY;

    // AI Generation prompt if API key exists
    if (apiKey) {
      try {
        const mistral = new Mistral({ apiKey });
        
        const catalogPrompt = REAL_CURRICULUM.map(
          (c, idx) => `[ID:${idx}] Course: "${c.courseTitle}" (courseId: "${c.courseId}", lectureId: "${c.lectureId}") | Lecture: "${c.videoTitle}" | DefaultTask: "${c.title}"`
        ).join("\n");

        const coursesSummary = enrolledCourses.length > 0
          ? enrolledCourses.map(c => `- ${c.title} (${c.progressPercent}% progress)`).join("\n")
          : "- New Learner (0% progress)";

        const prompt = `You are the elite AI Learning Advisor for CareerMap.
The user is learning for Target Role: ${targetRole}.
Learner's current enrolled progress:
${coursesSummary}
Earned Certificates: ${certificates.length > 0 ? certificates.join(", ") : "None yet"}
Known Skills: ${skills.length > 0 ? skills.join(", ") : "General Engineering"}
Avoid repeating existing tasks: ${existingTaskTitles.join(" | ")}

Here is the EXACT real curriculum catalog available in CareerMap:
${catalogPrompt}

INSTRUCTION:
Select 3-4 distinct learning tasks from the catalog that best match what this learner should do today to progress.
CRITICAL RULE:
The recommended task title MUST match the exact lecture video being recommended. Do not recommend a different topic than the video!
For each selected item, you must use its exact courseId, lectureId, videoTitle, videoUrl.

Reply with ONLY a valid JSON array of objects in this exact structure:
[
  {
    "title": "Actionable task title matching this lecture",
    "category": "Course Module" | "Practice Project" | "Certification" | "Skill Challenge",
    "courseId": "exact courseId from catalog",
    "lectureId": "exact lectureId from catalog",
    "videoTitle": "exact videoTitle from catalog",
    "videoUrl": "exact videoUrl from catalog",
    "progressPercent": 0
  }
]`;

        const response = await mistral.chat.complete({
          model: "mistral-small-latest",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.3,
          responseFormat: { type: "json_object" }
        });

        const rawContent = response.choices?.[0]?.message?.content;
        if (rawContent) {
          let parsed = typeof rawContent === "string" ? JSON.parse(rawContent) : rawContent;
          const taskList = Array.isArray(parsed) ? parsed : (parsed.tasks || parsed.data || []);
          if (Array.isArray(taskList) && taskList.length > 0) {
            return NextResponse.json({
              tasks: taskList.map((t: any, idx: number) => {
                // Ensure lecture data matches catalog
                const matched = REAL_CURRICULUM.find(
                  c => c.courseId === t.courseId && c.lectureId === t.lectureId
                ) || REAL_CURRICULUM.find(
                  c => c.courseId === t.courseId
                ) || REAL_CURRICULUM[idx % REAL_CURRICULUM.length];

                return {
                  id: `ai-task-${Date.now()}-${idx}`,
                  title: t.title || matched.title,
                  category: t.category || matched.category,
                  courseId: matched.courseId,
                  lectureId: matched.lectureId,
                  videoTitle: matched.videoTitle,
                  videoUrl: matched.videoUrl,
                  progressPercent: t.progressPercent || 0,
                  completed: false,
                  isAI: true
                };
              })
            });
          }
        }
      } catch (aiErr) {
        console.warn("Mistral AI task generation failed, falling back to algorithmic curriculum matcher:", aiErr);
      }
    }

    // High-Quality Algorithmic Curriculum Matcher Fallback
    const fallbackTasks = generateCurriculumTasks(enrolledCourses, certificates, skills, targetRole, existingTaskTitles);
    return NextResponse.json({ tasks: fallbackTasks });

  } catch (error: any) {
    console.error("Error in generate-tasks API:", error);
    const defaultTasks = generateCurriculumTasks([], [], [], "Software Engineer", []);
    return NextResponse.json({ tasks: defaultTasks });
  }
}

function generateCurriculumTasks(
  enrolled: CourseInfo[],
  certs: string[],
  skills: string[],
  role: string,
  existingTitles: string[] = []
) {
  const generated: any[] = [];
  const now = Date.now();
  const existingSet = new Set(existingTitles.map(t => t.toLowerCase()));

  // Filter candidates that match role or general software engineering
  const candidates = REAL_CURRICULUM.filter(item => {
    if (existingSet.has(item.title.toLowerCase())) return false;
    return true;
  });

  // Pick up to 4 distinct items across different courses or lectures
  const selectedItems: CurriculumItem[] = [];
  
  // 1. Role match
  const roleMatch = candidates.find(c => c.roleSuitability.some(r => role.toLowerCase().includes(r.toLowerCase())));
  if (roleMatch) {
    selectedItems.push(roleMatch);
  }

  // 2. Core fundamentals (Git or DSA)
  const coreFund = candidates.find(c => 
    !selectedItems.some(s => s.courseId === c.courseId) && 
    (c.courseId === "git-and-github" || c.courseId === "course-dsa")
  );
  if (coreFund) {
    selectedItems.push(coreFund);
  }

  // 3. Web or Full Stack
  const webItem = candidates.find(c => 
    !selectedItems.some(s => s.courseId === c.courseId && s.lectureId === c.lectureId) && 
    c.courseId === "course-mern-stack"
  );
  if (webItem) {
    selectedItems.push(webItem);
  }

  // 4. Another skill/challenge
  const nextItem = candidates.find(c => 
    !selectedItems.some(s => s.courseId === c.courseId && s.lectureId === c.lectureId)
  );
  if (nextItem) {
    selectedItems.push(nextItem);
  }

  // Fill up to 3-4 if needed
  for (const item of candidates) {
    if (selectedItems.length >= 4) break;
    if (!selectedItems.some(s => s.lectureId === item.lectureId)) {
      selectedItems.push(item);
    }
  }

  return selectedItems.map((item, idx) => ({
    id: `ai-task-${now}-${idx}`,
    title: item.title,
    category: item.category,
    courseId: item.courseId,
    lectureId: item.lectureId,
    videoTitle: item.videoTitle,
    videoUrl: item.videoUrl,
    progressPercent: 0,
    completed: false,
    isAI: true
  }));
}
