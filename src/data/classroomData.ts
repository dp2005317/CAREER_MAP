import { Playlist } from "./types";

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  keyTakeaways: string[];
}

export function extractPlaylistId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export function extractVideoId(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export function getYouTubeEmbedSrc(url: string, lessonIndex: number = 0, category?: string, courseId?: string): string {
  // Explicit mapping of real YouTube video IDs for specific modules
  // This bypasses YouTube's buggy playlist 'index' parameter caching
  const specificCourseVideos: Record<string, string[]> = {
    "harvard-cs50": ["8mAITcNt710", "e9Eds2Rc_x8", "tI_tIZFyKBw", "4ZBAxX-aMUM", "F8n_G7-U7R8", "Y1iWvF9D2Vw", "u2yB7C-y14s", "EaV9v6NlY9o"],
    "stanford-cs229": ["jGwO_UgTS7I", "5u4G23_OohI", "HZGCoVF3YvM", "iJIqDqHHOFw", "qyyJKd-zXRE"],
    "mit-python": ["nykOeWgQcHM", "7roJggET5kU", "1V29sN30PXY", "R6L_NqDqIHU", "tT3Z-N33wOQ"],
    "google-ml-recipes": ["cKxRvEZd3Mw", "tNa99PG8hR8", "N9fDIAflCMY", "84gqSbLcBFE", "AoeEHqVSNOw"],
    "aws-basics": ["3hLmDS179YE", "aISCAHjP9M4", "OqTvtKqfJls", "e6w9LwZJFIA", "r-uOLxNrVk8"],
    "ibm-gen-ai": ["1bU5sWz33sY", "O5xeyoRL95U", "JMUxmLyrhSk", "r-uOLxNrVk8", "1bU5sWz33sY"],
    "fcc-data-analysis": ["r-uOLxNrVk8", "rfscVS0vtbw", "r-uOLxNrVk8", "rfscVS0vtbw", "r-uOLxNrVk8"],
    "meta-react": ["bMknfKXIFA8", "c9Wg6Cb_YlU", "bMknfKXIFA8", "c9Wg6Cb_YlU", "bMknfKXIFA8"]
  };

  if (courseId && specificCourseVideos[courseId] && specificCourseVideos[courseId][lessonIndex]) {
    return `https://www.youtube-nocookie.com/embed/${specificCourseVideos[courseId][lessonIndex]}?enablejsapi=1&rel=0&modestbranding=1`;
  }

  const playlistId = extractPlaylistId(url);
  const videoId = extractVideoId(url);
  
  if (playlistId) {
    // YouTube playlist videos are 1-indexed for the 'index' param
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&index=${lessonIndex + 1}&enablejsapi=1&rel=0&modestbranding=1`;
  } else if (videoId) {
    return `https://www.youtube-nocookie.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1`;
  }

  // For the demo, we map categories to high-quality, real, working YouTube video IDs
  // This ensures the player always works and looks highly professional.
  const categoryVideos: Record<string, string> = {
    "data-science": "r-uOLxNrVk8", 
    "programming": "rfscVS0vtbw", 
    "uiux": "c9Wg6Cb_YlU", 
    "app-dev": "fis26HvvDII", 
    "cloud": "218OQ9zYyFk", 
    "ai": "JMUxmLyrhSk", 
    "cybersecurity": "inWWhwg4Q14", 
    "web-dev": "bMknfKXIFA8", 
    "devops": "hQcFE0RD0cQ", 
    "business": "cOMZ3T5oXW8"
  };

  const fallbackVideoId = category && categoryVideos[category] ? categoryVideos[category] : "rfscVS0vtbw";
  
  return `https://www.youtube-nocookie.com/embed/${fallbackVideoId}?enablejsapi=1&rel=0&modestbranding=1`;
}

/**
 * Returns realistic structured modules for a course
 */
export function getCourseModules(course: Playlist): CourseModule[] {
  if (course.modules && course.modules.length > 0) {
    return course.modules;
  }

  const skills = course.skills || ["Core Fundamentals"];
  const title = course.title;

  return [
    {
      id: "mod-1",
      title: `Module 1: Orientation & ${skills[0] || "Foundations"} Architecture`,
      duration: "45 mins",
      description: `Introduction to ${title}. Learn the core mental models, set up your development environment, and master initial syntax.`,
      keyTakeaways: [
        "Development setup & tooling",
        `Core principles of ${skills[0] || "the technology"}`,
        "Initial hands-on sandbox project"
      ]
    },
    {
      id: "mod-2",
      title: `Module 2: Deep Dive into ${skills[1] || skills[0] || "Core Concepts"}`,
      duration: "1 hr 15 mins",
      description: `Comprehensive exploration of ${skills[1] || skills[0]}. Understand data flow, component patterns, and state architecture.`,
      keyTakeaways: [
        "Advanced data structures & APIs",
        "Performance optimization patterns",
        "Writing clean, testable code"
      ]
    },
    {
      id: "mod-3",
      title: `Module 3: Practical Application with ${skills[2] || "Modern Tooling"}`,
      duration: "1 hr 30 mins",
      description: `Build real-world feature sets. Integrate external services, manage asynchronous operations, and debug complex scenarios.`,
      keyTakeaways: [
        "Production-grade integration",
        "Error handling & fault tolerance",
        "Industry best practices & security"
      ]
    },
    {
      id: "mod-4",
      title: `Module 4: Enterprise Capstone Project & Deployment`,
      duration: "2 hrs",
      description: `Implement an end-to-end enterprise solution relevant to ${course.jobRoles[0] || "Engineering"}. Package, containerize, and deploy.`,
      keyTakeaways: [
        "End-to-end full system architecture",
        "Automated testing & CI/CD pipeline",
        "Deployment to cloud hosting"
      ]
    },
    {
      id: "mod-5",
      title: `Module 5: Capstone Review, Interview Prep & Certification`,
      duration: "50 mins",
      description: `Final assessment review, industry interview questions, portfolio presentation tips, and claiming your official Certificate of Completion.`,
      keyTakeaways: [
        "Technical interview defense points",
        "Showcasing project to hiring managers",
        "Official certification validation"
      ]
    }
  ];
}
