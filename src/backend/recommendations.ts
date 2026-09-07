import { Job } from "@/backend/mockData";
import { Playlist } from "@/data/types";

export interface JobMatchResult {
  job: Job;
  matchScore: number; // 0 - 100
  matchedSkills: string[];
  missingSkills: string[];
  isTopMatch: boolean;
}

export interface CourseMatchResult {
  course: Playlist;
  matchScore: number; // 0 - 100
  matchedSkills: string[];
  skillsToLearn: string[];
  recommendationReason: string;
}

/**
 * Calculates match score between a Job and User Profile skills/role
 */
export function calculateJobMatch(
  job: Job,
  userSkills: string[] = [],
  targetRole: string = ""
): JobMatchResult {
  if (!userSkills.length) {
    return {
      job,
      matchScore: 0,
      matchedSkills: [],
      missingSkills: [],
      isTopMatch: false
    };
  }

  const jobText = `${job.title} ${job.description} ${job.company}`.toLowerCase();
  
  const matchedSkills: string[] = [];
  const missingSkills: string[] = [];

  userSkills.forEach((skill) => {
    const s = skill.toLowerCase();
    if (jobText.includes(s)) {
      matchedSkills.push(skill);
    }
  });

  // Calculate base score from matched skills
  let baseScore = 0;
  if (matchedSkills.length > 0) {
    // 1 match = 65%, 2 matches = 78%, 3 matches = 88%, 4+ matches = 95%
    baseScore = Math.min(95, 55 + matchedSkills.length * 11);
  } else {
    // Check if job type or title loosely corresponds
    baseScore = 40;
  }

  // Target role boost
  if (targetRole) {
    const roleWords = targetRole.toLowerCase().split(/\s+/);
    const hasRoleMatch = roleWords.some(w => w.length > 3 && jobText.includes(w));
    if (hasRoleMatch) {
      baseScore = Math.min(98, baseScore + 10);
    }
  }

  const isTopMatch = baseScore >= 80;

  return {
    job,
    matchScore: Math.round(baseScore),
    matchedSkills,
    missingSkills,
    isTopMatch
  };
}

/**
 * Ranks all jobs based on user profile
 */
export function getRecommendedJobs(
  jobs: Job[],
  userSkills: string[] = [],
  targetRole: string = ""
): JobMatchResult[] {
  return jobs
    .map(job => calculateJobMatch(job, userSkills, targetRole))
    .sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * Calculates recommendation score for courses based on user skills & gap filling
 */
export function calculateCourseMatch(
  course: Playlist,
  userSkills: string[] = [],
  targetRole: string = ""
): CourseMatchResult {
  if (!userSkills.length) {
    return {
      course,
      matchScore: 70,
      matchedSkills: [],
      skillsToLearn: course.skills,
      recommendationReason: "Popular industry curriculum for " + course.category
    };
  }

  const userSkillsLower = userSkills.map(s => s.toLowerCase());
  const courseSkillsLower = course.skills.map(s => s.toLowerCase());

  const matchedSkills = course.skills.filter(s => 
    userSkillsLower.some(us => us.includes(s.toLowerCase()) || s.toLowerCase().includes(us))
  );

  const skillsToLearn = course.skills.filter(s => 
    !userSkillsLower.some(us => us.includes(s.toLowerCase()) || s.toLowerCase().includes(us))
  );

  let matchScore = 60;
  let recommendationReason = "Expands your technical versatility";

  // Check target role alignment
  const roleMatch = targetRole && course.jobRoles.some(r => 
    r.toLowerCase().includes(targetRole.toLowerCase()) || targetRole.toLowerCase().includes(r.toLowerCase())
  );

  if (roleMatch) {
    matchScore += 25;
    recommendationReason = `Directly prepares you for ${targetRole}`;
  } else if (matchedSkills.length > 0 && skillsToLearn.length > 0) {
    matchScore += 20 + matchedSkills.length * 5;
    recommendationReason = `Leverages your ${matchedSkills[0]} and adds ${skillsToLearn[0] || "valuable skills"}`;
  } else if (matchedSkills.length > 0) {
    matchScore += 15;
    recommendationReason = `Deepens your expertise in ${matchedSkills.join(", ")}`;
  } else if (skillsToLearn.length > 0) {
    matchScore += 10;
    recommendationReason = `Fills critical skill gap in ${skillsToLearn.slice(0, 2).join(", ")}`;
  }

  matchScore = Math.min(99, matchScore);

  return {
    course,
    matchScore,
    matchedSkills,
    skillsToLearn,
    recommendationReason
  };
}

/**
 * Ranks all courses for the user
 */
export function getRecommendedCourses(
  courses: Playlist[],
  userSkills: string[] = [],
  targetRole: string = ""
): CourseMatchResult[] {
  return courses
    .map(c => calculateCourseMatch(c, userSkills, targetRole))
    .sort((a, b) => b.matchScore - a.matchScore);
}
