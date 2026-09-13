
import { Playlist, Category } from "./types";

export const categories: Category[] = [
  { id: "programming", name: "Data Structures & Algorithms (DSA)", icon: "⚡", color: "#3B82F6", courseCount: 1 },
  { id: "ai", name: "Machine Learning & AI", icon: "🤖", color: "#8B5CF6", courseCount: 1 },
  { id: "data-analytics", name: "Data Analytics", icon: "📊", color: "#0EA5E9", courseCount: 1 },
  { id: "web-dev", name: "Web Development (MERN)", icon: "🌐", color: "#F59E0B", courseCount: 1 },
  { id: "devops", name: "Linux & DevOps", icon: "🐧", color: "#6366F1", courseCount: 1 },
  { id: "data-science", name: "Data Science", icon: "🔬", color: "#10B981", courseCount: 1 },
];

export const companies = [
  { id: "sheryians-ai", name: "Sheryians AI School", logo: "🎓", courseCount: 3 },
  { id: "sheryians-code", name: "Sheryians Coding School", logo: "💻", courseCount: 1 },
  { id: "apna-college", name: "Apna College", logo: "🚀", courseCount: 1 },
  { id: "codewithharry", name: "CodeWithHarry", logo: "⚡", courseCount: 1 },
];

export const learningPaths: any[] = [];
export const resources: any[] = [];

export const playlists: Playlist[] = [];
