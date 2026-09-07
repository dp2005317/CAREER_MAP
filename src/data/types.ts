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
  language: string;
}
