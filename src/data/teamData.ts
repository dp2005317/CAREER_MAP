export interface TeamMember {
  id: string;
  name: string;
  role: string;
  tagline?: string;
  module: string;
  avatar?: string;
  initials: string;
  headline?: string;
  bio?: string;
  education?: string;
  location?: string;
  connections?: string;
  stats?: {
    connections: number | string;
    projects: number | string;
  };
  contributions: string[];
  skills: string[];
  github?: string;
  linkedin?: string;
}

export const HONEST_VISIONS_TEAM: TeamMember[] = [
  {
    id: "diganta",
    name: "Diganta Pal",
    role: "Team Leader, Product Manager and Full Stack Developer",
    tagline: "Product Manager & Full Stack Developer who focuses on simplicity & usability.",
    module: "Team Lead & Spatial Engine Architect",
    avatar: "/team/diganta.jpg",
    initials: "DP",
    education: "UIT, The University of Burdwan",
    location: "Purba Bardhaman, West Bengal, India",
    stats: {
      connections: 105,
      projects: 20
    },
    contributions: [],
    skills: [],
    github: "https://github.com/dp2005317",
    linkedin: "https://www.linkedin.com/in/diganta-pal/"
  },
  {
    id: "rupam",
    name: "Rupam Biswas",
    role: "Lead Frontend Developer, UI/UX Design & Features Implementation",
    tagline: "Lead Frontend Developer who focuses on UI/UX design & features implementation.",
    module: "Core Design System & Responsive Shell",
    avatar: "/team/rupam_new.jpg",
    initials: "RB",
    education: "UIT, The University of Burdwan",
    location: "West Bengal, India",
    stats: {
      connections: "500+",
      projects: 7
    },
    contributions: [],
    skills: [],
    github: "https://github.com/RUPAM169",
    linkedin: "https://www.linkedin.com/in/rupam-biswas-a614b6256/"
  },
  {
    id: "sumon",
    name: "Sumon Samanta",
    role: "Tester, Team Supervisor and Presentation",
    tagline: "Quality Assurance & System Tester supervising platform stability & workflows.",
    module: "Testing, Supervision & Presentation",
    avatar: "/team/sumon.jpg",
    initials: "SS",
    education: "UIT, The University of Burdwan",
    location: "Mahisadal, West Bengal, India",
    stats: {
      connections: "50+",
      projects: 4
    },
    contributions: [],
    skills: [],
    github: "https://github.com/SamanTaay",
    linkedin: "https://www.linkedin.com/in/suman-samanta-87b521330/"
  },
  {
    id: "om",
    name: "Om Majumder",
    role: "Team Manager and Registration Work",
    tagline: "IT Engineer & Team Manager coordinating project operations & registration.",
    module: "Team Operations & Registration",
    avatar: "/team/om.jpg",
    initials: "OM",
    education: "UIT, The University of Burdwan",
    location: "West Bengal, India",
    stats: {
      connections: 141,
      projects: 4
    },
    contributions: [],
    skills: [],
    github: "https://github.com/om06112005",
    linkedin: "https://www.linkedin.com/in/om-majumder-34a236376/"
  },
  {
    id: "payel",
    name: "Payel Day",
    role: "Presentation",
    tagline: "Product Presentation Specialist focusing on user communication & pitching.",
    module: "Presentation & Product Showcase",
    avatar: "/team/payel.jpg",
    initials: "PD",
    education: "UIT, The University of Burdwan",
    location: "Kolkata, West Bengal, India",
    stats: {
      connections: 167,
      projects: 2
    },
    contributions: [],
    skills: [],
    github: "https://github.com/payeldey1806-2024",
    linkedin: "https://www.linkedin.com/in/payel-dey-758170328/"
  }
];
