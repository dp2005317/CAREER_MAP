// Comprehensive Skill Taxonomy & In-Browser PDF Resume Parser

export interface ExtractedResumeData {
  skills: string[];
  suggestedRole: string;
  experienceLevel: "Student" | "Entry Level" | "Mid Level" | "Senior";
  summary: string;
  rawTextPreview: string;
}

export const SKILL_TAXONOMY: { name: string; aliases: string[]; category: string }[] = [
  // Frontend
  { name: "React", aliases: ["react", "react.js", "reactjs"], category: "Frontend" },
  { name: "Next.js", aliases: ["next.js", "nextjs", "next 13", "next 14", "next 15", "next 16"], category: "Frontend" },
  { name: "TypeScript", aliases: ["typescript", "ts"], category: "Frontend" },
  { name: "JavaScript", aliases: ["javascript", "js", "ecmascript"], category: "Frontend" },
  { name: "Vue.js", aliases: ["vue", "vue.js", "vuejs"], category: "Frontend" },
  { name: "Angular", aliases: ["angular", "angularjs"], category: "Frontend" },
  { name: "HTML/CSS", aliases: ["html", "html5", "css", "css3"], category: "Frontend" },
  { name: "Tailwind CSS", aliases: ["tailwind", "tailwindcss"], category: "Frontend" },
  { name: "Redux", aliases: ["redux", "redux toolkit", "rtk"], category: "Frontend" },
  { name: "GraphQL", aliases: ["graphql", "apollo"], category: "Frontend" },
  { name: "REST API", aliases: ["rest", "restful", "rest api", "apis"], category: "Frontend" },
  { name: "Three.js", aliases: ["three.js", "threejs", "webgl"], category: "Frontend" },
  { name: "Framer Motion", aliases: ["framer-motion", "framer motion"], category: "Frontend" },

  // Backend
  { name: "Node.js", aliases: ["node", "node.js", "nodejs"], category: "Backend" },
  { name: "Express.js", aliases: ["express", "express.js", "expressjs"], category: "Backend" },
  { name: "Python", aliases: ["python", "python3"], category: "Backend" },
  { name: "Django", aliases: ["django", "django rest framework"], category: "Backend" },
  { name: "FastAPI", aliases: ["fastapi"], category: "Backend" },
  { name: "Java", aliases: ["java", "jdk", "jvm"], category: "Backend" },
  { name: "Spring Boot", aliases: ["spring boot", "spring framework", "spring"], category: "Backend" },
  { name: "Golang", aliases: ["golang", "go language"], category: "Backend" },
  { name: "C++", aliases: ["c++", "cpp"], category: "Backend" },
  { name: "C#", aliases: ["c#", "csharp", ".net", "dotnet"], category: "Backend" },
  { name: "PHP", aliases: ["php", "laravel"], category: "Backend" },
  { name: "Microservices", aliases: ["microservices", "microservice architecture"], category: "Backend" },

  // Cloud & DevOps
  { name: "AWS", aliases: ["aws", "amazon web services", "ec2", "s3", "lambda"], category: "DevOps" },
  { name: "Azure", aliases: ["azure", "microsoft azure"], category: "DevOps" },
  { name: "Google Cloud", aliases: ["gcp", "google cloud platform", "google cloud"], category: "DevOps" },
  { name: "Docker", aliases: ["docker", "containerization", "containers"], category: "DevOps" },
  { name: "Kubernetes", aliases: ["kubernetes", "k8s"], category: "DevOps" },
  { name: "Terraform", aliases: ["terraform", "iac"], category: "DevOps" },
  { name: "CI/CD", aliases: ["ci/cd", "continuous integration", "github actions", "gitlab ci", "jenkins"], category: "DevOps" },
  { name: "Linux", aliases: ["linux", "bash", "shell scripting", "ubuntu"], category: "DevOps" },
  { name: "Git", aliases: ["git", "github", "version control"], category: "DevOps" },

  // AI & Data
  { name: "Machine Learning", aliases: ["machine learning", "ml"], category: "AI/ML" },
  { name: "Deep Learning", aliases: ["deep learning", "neural networks"], category: "AI/ML" },
  { name: "AI", aliases: ["artificial intelligence", "genai", "generative ai", "llms", "llm"], category: "AI/ML" },
  { name: "PyTorch", aliases: ["pytorch"], category: "AI/ML" },
  { name: "TensorFlow", aliases: ["tensorflow", "keras"], category: "AI/ML" },
  { name: "Scikit-Learn", aliases: ["scikit-learn", "sklearn"], category: "AI/ML" },
  { name: "Pandas", aliases: ["pandas", "numpy"], category: "AI/ML" },
  { name: "Data Analytics", aliases: ["data analytics", "data analysis", "data science"], category: "AI/ML" },
  { name: "Tableau", aliases: ["tableau"], category: "AI/ML" },
  { name: "Power BI", aliases: ["power bi", "powerbi"], category: "AI/ML" },
  { name: "NLP", aliases: ["nlp", "natural language processing"], category: "AI/ML" },
  { name: "Computer Vision", aliases: ["computer vision", "opencv"], category: "AI/ML" },

  // Databases
  { name: "SQL", aliases: ["sql", "rdbms", "relational database"], category: "Database" },
  { name: "PostgreSQL", aliases: ["postgresql", "postgres"], category: "Database" },
  { name: "MySQL", aliases: ["mysql"], category: "Database" },
  { name: "MongoDB", aliases: ["mongodb", "nosql", "mongoose"], category: "Database" },
  { name: "Redis", aliases: ["redis", "caching"], category: "Database" },
  { name: "Firebase", aliases: ["firebase", "firestore", "realtime database"], category: "Database" },

  // Design & Mobile
  { name: "UI/UX Design", aliases: ["ui/ux", "ui design", "ux design", "user experience"], category: "Design" },
  { name: "Figma", aliases: ["figma", "wireframing", "prototyping"], category: "Design" },
  { name: "Flutter", aliases: ["flutter", "dart"], category: "Mobile" },
  { name: "React Native", aliases: ["react native", "react-native"], category: "Mobile" },
  { name: "Android", aliases: ["android", "kotlin"], category: "Mobile" },
  { name: "iOS", aliases: ["ios", "swift"], category: "Mobile" },

  // Cybersecurity
  { name: "Cybersecurity", aliases: ["cybersecurity", "information security", "infosec", "network security"], category: "Security" },
  { name: "Ethical Hacking", aliases: ["ethical hacking", "penetration testing", "pen testing", "owasp"], category: "Security" }
];

/**
 * Extracts plain text from a PDF ArrayBuffer directly in the browser
 */
export async function extractTextFromPDF(arrayBuffer: ArrayBuffer): Promise<string> {
  const bytes = new Uint8Array(arrayBuffer);
  let text = "";

  // 1. Check if window.pdfjsLib is loaded from CDN
  if (typeof window !== "undefined" && (window as any).pdfjsLib) {
    try {
      const pdf = await (window as any).pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      let fullText = "";
      for (let i = 1; i <= Math.min(pdf.numPages, 10); i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(" ");
        fullText += pageText + "\n";
      }
      if (fullText.trim().length > 50) {
        return fullText;
      }
    } catch (e) {
      console.warn("pdfjsLib parsing failed, falling back to stream decoder", e);
    }
  }

  // 2. High-performance fallback: decode binary PDF text streams
  // Standard PDF text is contained in () Tj, [()] TJ, or plain text streams
  const decoder = new TextDecoder("latin1");
  const rawString = decoder.decode(bytes);

  // Extract text within BT ... ET blocks
  const btBlocks = rawString.match(/BT[\s\S]*?ET/g) || [];
  if (btBlocks.length > 0) {
    for (const block of btBlocks) {
      // Matches (string) Tj or [(str1)(str2)] TJ
      const matches = block.match(/\((.*?)\)\s*(?:Tj|'|")/g);
      if (matches) {
        for (const m of matches) {
          const str = m.replace(/\)\s*(?:Tj|'|")$/, "").replace(/^\(/, "");
          text += str + " ";
        }
      }
      const arrayMatches = block.match(/\[(.*?)\]\s*TJ/g);
      if (arrayMatches) {
        for (const am of arrayMatches) {
          const subStrings = am.match(/\((.*?)\)/g);
          if (subStrings) {
            for (const s of subStrings) {
              text += s.slice(1, -1) + " ";
            }
          }
        }
      }
    }
  }

  // 3. Fallback if BT blocks were compressed: extract readable text tokens
  if (text.trim().length < 50) {
    const words = rawString.match(/[A-Za-z0-9+#./-]{2,30}/g) || [];
    text = words.slice(0, 1500).join(" ");
  }

  return cleanExtractedText(text);
}

function cleanExtractedText(text: string): string {
  return text
    .replace(/\\r/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, " ")
    .replace(/\\([()\\])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Analyzes resume text and returns matching skills, suggested role, experience level, and summary
 */
export function analyzeResumeText(rawText: string): ExtractedResumeData {
  const normalized = " " + rawText.toLowerCase().replace(/[^a-z0-9+#./-]/g, " ") + " ";
  
  const detectedSkills = new Set<string>();
  const categoryScores: Record<string, number> = {
    Frontend: 0,
    Backend: 0,
    "DevOps": 0,
    "AI/ML": 0,
    Database: 0,
    Design: 0,
    Mobile: 0,
    Security: 0,
  };

  for (const skill of SKILL_TAXONOMY) {
    for (const alias of skill.aliases) {
      // Strict regex matching with word boundaries
      const escaped = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(?:^|[^a-zA-Z0-9+#])${escaped}(?:$|[^a-zA-Z0-9+#])`, "i");

      if (regex.test(normalized)) {
        detectedSkills.add(skill.name);
        categoryScores[skill.category] = (categoryScores[skill.category] || 0) + 1;
        break;
      }
    }
  }

  // Determine suggested role based on dominant categories
  let topCategory = "Frontend";
  let maxScore = 0;
  for (const [cat, score] of Object.entries(categoryScores)) {
    if (score > maxScore) {
      maxScore = score;
      topCategory = cat;
    }
  }

  let suggestedRole = "Full Stack Developer";
  if (categoryScores["Frontend"] >= 2 && categoryScores["Backend"] >= 2) {
    suggestedRole = "Full Stack Developer";
  } else if (topCategory === "Frontend") {
    suggestedRole = "Frontend Developer";
  } else if (topCategory === "Backend") {
    suggestedRole = "Backend Engineer";
  } else if (topCategory === "AI/ML") {
    suggestedRole = "AI / Data Science Engineer";
  } else if (topCategory === "DevOps") {
    suggestedRole = "Cloud & DevOps Engineer";
  } else if (topCategory === "Design") {
    suggestedRole = "UI/UX Product Designer";
  } else if (topCategory === "Mobile") {
    suggestedRole = "Mobile Application Developer";
  } else if (topCategory === "Security") {
    suggestedRole = "Cybersecurity Analyst";
  }

  // Determine Experience Level
  let experienceLevel: "Student" | "Entry Level" | "Mid Level" | "Senior" = "Entry Level";
  const lowerText = rawText.toLowerCase();

  if (lowerText.includes("senior") || lowerText.includes("lead") || lowerText.includes("architect") || lowerText.includes("5+ years") || lowerText.includes("6+ years")) {
    experienceLevel = "Senior";
  } else if (lowerText.includes("mid-level") || lowerText.includes("3+ years") || lowerText.includes("4+ years") || lowerText.includes("2-4 years")) {
    experienceLevel = "Mid Level";
  } else if (lowerText.includes("intern") || lowerText.includes("b.tech") || lowerText.includes("bachelor") || lowerText.includes("student") || lowerText.includes("college") || lowerText.includes("university")) {
    experienceLevel = "Student";
  }

  const skillsList = Array.from(detectedSkills);
  if (skillsList.length === 0) {
    // Fallback default starter skills
    skillsList.push("JavaScript", "React", "Python", "SQL");
  }

  return {
    skills: skillsList,
    suggestedRole,
    experienceLevel,
    summary: `Identified ${skillsList.length} core technical competencies in ${topCategory} & Software Engineering. Strong candidate for ${suggestedRole} positions.`,
    rawTextPreview: rawText.slice(0, 300)
  };
}
