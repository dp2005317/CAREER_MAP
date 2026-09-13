export interface Company {
  id: string;
  name: string;
  courseCount: number;
  skills: string[];
  website: string;
  color: string;
  description: string;
  jobCount?: number;
}

export interface Playlist {
  id: string;
  title: string;
  company: string;
  instructor: string;
  thumbnail: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  durationHours?: number;
  language: string;
  rating: number;
  learners: string;
  category: string;
  skills: string[];
  playlistUrl: string;
  officialUrl: string;
  certificateAvailable: boolean;
  isFree: boolean;
  isNew?: boolean;
  isTrending?: boolean;
  description: string;
  jobRoles: string[];
  modules?: any[];
  videos?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  courseCount: number;
  color: string;
  description?: string;
}

export interface LearningPath {
  id: string;
  title: string;
  icon: string;
  difficulty: string;
  estimatedTime: string;
  careerOutcome: string;
  courseCount: number;
  playlists: string[];
  jobRoles: string[];
  color: string;
  gradient: string;
}

export interface Resource {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
}

export interface LearningFilters {
  search: string;
  company: string;
  category: string;
  difficulty: string;
  duration: string;
  certificateOnly: boolean;
  freeOnly: boolean;
  language?: string;
}

export interface FundamentalQuestion {
  id: string;
  type: "fundamental";
  difficulty: "easy" | "medium" | "hard" | "interview";
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface CodingQuestion {
  id: string;
  type: "coding";
  subType: "implementation" | "debugging" | "output_prediction" | "problem_solving" | "interview_challenge";
  difficulty: "easy" | "medium" | "hard" | "interview";
  question: string;
  language: string;
  starterCode?: string;
  buggyCode?: string;
  code?: string;
  options?: string[];
  inputFormat?: string;
  outputFormat?: string;
  exampleInput?: string;
  exampleOutput?: string;
  expectedOutput?: string;
  solution: string;
  explanation: string;
  correctAnswer?: number;
}

export interface LectureAssessment {
  totalQuestions: number;
  fundamentalQuestions: number;
  codingQuestions: number;
}

export interface Lecture {
  lectureId: string;
  lectureNumber: number;
  title: string;
  videoUrl: string;
  duration?: string;
  topics: string[];
  assessment: LectureAssessment;
  fundamentalQuestions: FundamentalQuestion[];
  codingQuestions: CodingQuestion[];
}

export interface Module {
  moduleId: string;
  title: string;
  lectures: Lecture[];
}

export interface Course {
  courseId: string;
  title: string;
  description: string;
  category: string;
  company: string;
  instructor?: string;
  thumbnail?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  duration?: string;
  durationHours?: number;
  language?: string;
  rating?: number;
  learners?: string;
  skills: string[];
  playlistUrl?: string;
  officialUrl?: string;
  certificateAvailable?: boolean;
  isFree?: boolean;
  isNew?: boolean;
  isTrending?: boolean;
  jobRoles?: string[];
  source: {
    type: "youtube_playlist" | "youtube_video";
    playlistUrl?: string;
    videoUrl?: string;
  };
  modules: Module[];
}
