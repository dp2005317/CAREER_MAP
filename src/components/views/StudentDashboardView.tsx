"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { 
  User, 
  Search, 
  Bell, 
  CheckCircle2, 
  Sun, 
  Sparkles, 
  Award, 
  ArrowRight, 
  ChevronRight, 
  Plus, 
  Trash2, 
  Briefcase, 
  MapPin, 
  BookOpen, 
  TrendingUp, 
  Check, 
  Clock, 
  Target, 
  Layers,
  Eye,
  Flame,
  ExternalLink,
  Play,
  RotateCcw
} from "lucide-react";
import Image from "next/image";
import { User as FirebaseUser } from "firebase/auth";
import { UserProfile, UserCertificate } from "@/database/authContext";
import { Job } from "@/backend/mockData";
import { getAllCourses } from "@/lib/courseData";
import { Course } from "@/data/types";
import { mernCourseData } from "@/data/courses/mernCourse";
import { mlCourseData } from "@/data/courses/mlCourse";
import { dataScienceCourseData } from "@/data/courses/dataScienceCourse";
import { useTheme } from "@/components/theme/ThemeProvider";
import { LearningProgressDetailModal } from "@/components/dashboard/LearningProgressDetailModal";
import { TaskVideoModal } from "@/components/dashboard/TaskVideoModal";
import { resolveTaskVideo, getLectureRoute } from "@/lib/taskVideoUtils";
import confetti from "canvas-confetti";
import Link from "next/link";

export interface WeeklyTaskItem {
  id: string;
  title: string;
  completed: boolean;
  progressPercent: number; // 0 to 100
  isCustom?: boolean;
  isAI?: boolean;
  category?: string;
  courseId?: string;
  lectureId?: string;
  videoUrl?: string;
  videoTitle?: string;
  completedAt?: string;
}

interface StudentDashboardViewProps {
  user: FirebaseUser | null;
  profile: UserProfile | null;
  savedJobs: Job[];
  certificates: UserCertificate[];
  courseProgress: Record<string, { completedModules: string[]; progressPercent: number; completedLectures?: string[] }>;
  onGoToSavedJobs: () => void;
  onGoToCourses: () => void;
  onOpenJob: (job: Job) => void;
  onOpenCertificate: (cert: UserCertificate) => void;
  onSearchFocus?: () => void;
  onOpenProfile?: () => void;
}

export function StudentDashboardView({
  user,
  profile,
  savedJobs,
  certificates,
  courseProgress,
  onGoToSavedJobs,
  onGoToCourses,
  onOpenJob,
  onOpenCertificate,
  onSearchFocus
}: StudentDashboardViewProps) {
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  // Search input state
  const [searchQuery, setSearchQuery] = useState("");

  // Courses list
  const [courses, setCourses] = useState<Course[]>([
    mernCourseData,
    mlCourseData,
    dataScienceCourseData,
  ]);

  // ================= REAL USER-DRIVEN WEEKLY TASKS =================
  const initialRealTasks: WeeklyTaskItem[] = useMemo(() => {
    const activeCourseIds = Object.keys(courseProgress).filter((id) => (courseProgress[id]?.progressPercent || 0) > 0);
    
    if (activeCourseIds.length > 0) {
      return activeCourseIds.slice(0, 4).map((cid) => {
        const prog = courseProgress[cid];
        const matchCourse = courses.find((c) => c.courseId === cid);
        const title = matchCourse ? matchCourse.title : cid;
        const isDone = prog.progressPercent === 100;
        const videoInfo = resolveTaskVideo(title, "Course Module", cid);
        return {
          id: `task-${cid}`,
          title: isDone ? `Completed: ${title}` : `Advance ${title} (Target: ${Math.min(100, prog.progressPercent + 25)}%)`,
          completed: isDone,
          progressPercent: prog.progressPercent,
          category: "Course Module",
          courseId: cid,
          lectureId: videoInfo.lectureId,
          videoTitle: videoInfo.videoTitle,
          videoUrl: videoInfo.videoUrl
        };
      });
    }

    return [
      { 
        id: "task-1", 
        title: "Master Git Architecture, Branching & Pull Requests", 
        completed: false, 
        progressPercent: 0,
        category: "Course Module",
        courseId: "git-and-github",
        lectureId: "git-github-masterclass",
        videoTitle: "Git & GitHub For Engineering Students (What Actually Matters)",
        videoUrl: "https://www.youtube-nocookie.com/embed/BnEFaIfcwOU"
      },
      { 
        id: "task-2", 
        title: "Solve Problem-Solving Flowcharts & Logic in C++", 
        completed: false, 
        progressPercent: 0,
        category: "Skill Challenge",
        courseId: "course-dsa",
        lectureId: "dsa-lecture-01",
        videoTitle: "Data Structures & Algorithms: Flowcharts, Logic & Pseudocode",
        videoUrl: "https://www.youtube.com/embed/VTLCoHnyACE"
      },
      { 
        id: "task-3", 
        title: "Build Responsive Modern Layouts with Flexbox & CSS Grid", 
        completed: false, 
        progressPercent: 0,
        category: "Practice Project",
        courseId: "course-mern-stack",
        lectureId: "mern-lec-02",
        videoTitle: "Responsive Web Development Complete Course for Beginners",
        videoUrl: "https://www.youtube.com/embed/kkOuRJ69BRY"
      },
      { 
        id: "task-4", 
        title: "Master Linux Terminal Navigation, Pipes & Redirection", 
        completed: false, 
        progressPercent: 0,
        category: "Course Module",
        courseId: "course-linux",
        lectureId: "linux-lec-01",
        videoTitle: "Linux Command Line & Shell Fundamentals",
        videoUrl: "https://www.youtube.com/embed/sWbANNq40_k"
      }
    ];
  }, [courseProgress, courses]);

  const [tasks, setTasks] = useState<WeeklyTaskItem[]>(initialRealTasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [aiFeedbackMsg, setAiFeedbackMsg] = useState<string | null>(null);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [selectedTaskForVideo, setSelectedTaskForVideo] = useState<WeeklyTaskItem | null>(null);

  // Load user's customized tasks from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("careermap_weekly_tasks");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTasks(parsed);
        }
      }
    } catch (e) {
      // ignore
    }
  }, []);

  // Save tasks to localStorage
  const saveTasks = (newTasks: WeeklyTaskItem[]) => {
    setTasks(newTasks);
    try {
      localStorage.setItem("careermap_weekly_tasks", JSON.stringify(newTasks));
    } catch (e) {
      // ignore
    }
  };

  // Active vs Completed tasks partition
  const activeTasks = useMemo(() => tasks.filter((t) => !t.completed), [tasks]);
  const completedTasks = useMemo(() => tasks.filter((t) => t.completed), [tasks]);
  const taskCompletionRate = useMemo(() => {
    if (tasks.length === 0) return 0;
    return Math.round((completedTasks.length / tasks.length) * 100);
  }, [tasks, completedTasks]);

  // Complete an active task: removes from active, moves to completed
  const handleCompleteTask = (id: string) => {
    const updated = tasks.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          completed: true,
          progressPercent: 100,
          completedAt: new Date().toISOString()
        };
      }
      return t;
    });
    saveTasks(updated);
    try {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    } catch (e) {}
  };

  // Restore a completed task back to active
  const handleRestoreTask = (id: string) => {
    const updated = tasks.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          completed: false,
          progressPercent: 0,
          completedAt: undefined
        };
      }
      return t;
    });
    saveTasks(updated);
  };

  // Clear all completed tasks
  const handleClearCompleted = () => {
    saveTasks(tasks.filter((t) => !t.completed));
  };

  // Dedicated action: Navigate straight to the course video at the course section
  const handleWatchLecture = (task: WeeklyTaskItem) => {
    const resolved = resolveTaskVideo(task.title, task.category, task.courseId, task.lectureId);
    const targetCourseId = task.courseId || resolved.courseId;
    const targetLectureId = task.lectureId || resolved.lectureId;
    const route = getLectureRoute(targetCourseId, targetLectureId);
    router.push(route);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const videoInfo = resolveTaskVideo(newTaskTitle.trim());
    const newTask: WeeklyTaskItem = {
      id: `task-${Date.now()}`,
      title: newTaskTitle.trim(),
      completed: false,
      progressPercent: 0,
      isCustom: true,
      category: "Personal Goal",
      courseId: videoInfo.courseId,
      lectureId: videoInfo.lectureId,
      videoTitle: videoInfo.videoTitle,
      videoUrl: videoInfo.videoUrl
    };
    saveTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setIsAddingTask(false);
  };

  const handleDeleteTask = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    saveTasks(tasks.filter((t) => t.id !== id));
  };

  // AI Daily Task Generator based on real-time learning progress
  const handleGenerateAITasks = async () => {
    try {
      setIsGeneratingAI(true);
      setAiFeedbackMsg(null);

      const enrolledPayload = courses.map((c) => ({
        id: c.courseId,
        title: c.title,
        progressPercent: courseProgress[c.courseId]?.progressPercent || 0,
        completedLecturesCount: courseProgress[c.courseId]?.completedLectures?.length || courseProgress[c.courseId]?.completedModules?.length || 0,
        totalLecturesCount: c.modules?.reduce((acc: number, m: any) => acc + (m.lectures?.length || 1), 0) || 10
      }));

      const res = await fetch("/api/ai/generate-tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          enrolledCourses: enrolledPayload,
          certificates: certificates.map((c) => c.courseTitle),
          skills: profile?.skills || [],
          targetRole: profile?.targetRole || "Software Engineer",
          existingTaskTitles: tasks.map((t) => t.title)
        })
      });

      const data = await res.json();
      if (data?.tasks && Array.isArray(data.tasks)) {
        const combined = [...data.tasks, ...tasks].slice(0, 8);
        saveTasks(combined);
        setAiFeedbackMsg("✨ 4 personalized daily AI tasks added to your schedule!");
        setTimeout(() => setAiFeedbackMsg(null), 4500);
      }
    } catch (err) {
      console.error("Failed to generate AI tasks:", err);
    } finally {
      setIsGeneratingAI(false);
    }
  };

  // Load all real courses
  useEffect(() => {
    async function load() {
      try {
        const list = await getAllCourses();
        if (list && list.length > 0) {
          setCourses(list);
        }
      } catch (e) {
        // use default fallback
      }
    }
    load();
  }, []);

  // ================= REAL-TIME LEARNING PROGRESS CALCULATION =================
  const {
    activeCoursesCount,
    totalCompletedLessons,
    totalCourseLessons,
    realtimePercent,
    bonusPoints,
    activeEnrolledCourses
  } = useMemo(() => {
    // Check which courses have actual progress recorded in courseProgress
    const activeEnrolled = courses.filter((c) => {
      const prog = courseProgress[c.courseId];
      return prog && prog.progressPercent > 0;
    });

    let completedLessonsCount = 0;
    let totalLessonsCount = 0;

    if (activeEnrolled.length > 0) {
      activeEnrolled.forEach((c) => {
        const prog = courseProgress[c.courseId];
        const courseTotal = c.modules?.reduce((acc: number, m: any) => acc + (m.lectures?.length || 1), 0) || 10;
        totalLessonsCount += courseTotal;
        if (prog) {
          completedLessonsCount += (prog.completedLectures?.length || prog.completedModules?.length || 0);
        }
      });
    }

    const computedPercent = totalLessonsCount > 0
      ? Math.min(100, Math.round((completedLessonsCount / totalLessonsCount) * 100))
      : 0;

    // Real dynamic bonuses based on actual user accomplishments:
    const completedTasksCount = completedTasks.length;
    const points = (completedLessonsCount * 100) + (certificates.length * 500) + (savedJobs.length * 50) + (completedTasksCount * 100) + (profile?.resumeName ? 200 : 0);

    return {
      activeCoursesCount: activeEnrolled.length,
      totalCompletedLessons: completedLessonsCount,
      totalCourseLessons: totalLessonsCount,
      realtimePercent: computedPercent,
      bonusPoints: points,
      activeEnrolledCourses: activeEnrolled
    };
  }, [courseProgress, courses, certificates, savedJobs, completedTasks, profile]);

  // SVG Radial Gauge parameters
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (realtimePercent / 100) * circumference;

  // Exact stroke color based on theme: BLUE in Light mode, ORANGE in Dark mode
  const gaugeStrokeColor = resolvedTheme === "light" ? "#2563EB" : "#F97316";

  // Render segmented bar helper (10 segments)
  // Filled in Light mode: BLUE (bg-blue-600), Dark mode: ORANGE (bg-orange-500)
  const renderSegmentedBar = (progressPercent: number, totalSegments = 10) => {
    const filledCount = Math.min(totalSegments, Math.round((progressPercent / 100) * totalSegments));
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: totalSegments }).map((_, idx) => (
          <span
            key={idx}
            className={`h-2.5 w-1.5 rounded-full transition-colors ${
              idx < filledCount 
                ? "bg-blue-600 dark:bg-orange-500" 
                : "bg-slate-200 dark:bg-white/10"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar bg-[#FAF8F5] dark:bg-black text-gray-900 dark:text-white transition-colors">
      <div className="max-w-[1400px] mx-auto space-y-7">
        
        {/* TOP GREETING & SEARCH HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Left: User Avatar + Greeting */}
          <div className="flex items-center gap-4">
            <div className="relative">
              {profile?.photoURL || user?.photoURL ? (
                <img
                  src={profile?.photoURL || user?.photoURL || ""}
                  alt="Avatar"
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500/20 dark:ring-orange-500/30"
                />
              ) : (
                <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-white/10 text-blue-600 dark:text-orange-400 flex items-center justify-center font-black text-lg ring-2 ring-blue-500/20 dark:ring-orange-500/30">
                  {profile?.displayName ? profile.displayName.charAt(0).toUpperCase() : user?.displayName ? user.displayName.charAt(0).toUpperCase() : user?.email ? user.email.charAt(0).toUpperCase() : "U"}
                </div>
              )}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Welcome back, {profile?.displayName || user?.displayName || "Learner"}!
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Here is your live roadmap progress and daily career milestones.
              </p>
            </div>
          </div>

          {/* Right: Search & Action Header */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={onSearchFocus}
                placeholder="Search jobs, courses, roadmap..."
                className="w-full bg-white dark:bg-[#151518] text-gray-900 dark:text-white text-xs font-medium pl-10 pr-4 py-2.5 rounded-full border border-slate-200/80 dark:border-white/10 shadow-2xs focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-orange-500/50 transition-all placeholder:text-gray-400"
              />
            </div>
            
            <button
              onClick={onGoToCourses}
              className="px-4 py-2.5 rounded-full bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white font-bold text-xs shadow-xs transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Browse</span> Courses
            </button>
          </div>
        </div>

        {/* TOP ROW: 2 MAIN CARDS (Learning Progress & Weekly Tasks) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* CARD 1: Real-Time Learning Progress */}
          <div className="bg-white dark:bg-[#151518] rounded-[28px] p-6 sm:p-8 border border-slate-200/70 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
                      Learning Progress
                    </h2>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Real-Time
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
                    Calculated accurately from your completed lessons and credentials.
                  </p>
                </div>
                
                {/* View Details Button */}
                <button
                  onClick={() => setIsProgressModalOpen(true)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-extrabold text-blue-600 dark:text-orange-400 bg-blue-50 dark:bg-white/5 hover:bg-blue-100 dark:hover:bg-white/10 transition-colors border border-blue-200/50 dark:border-white/10 cursor-pointer flex items-center gap-1 shrink-0"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>

              {/* Central Progress Visual with Metric Indicators */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 my-4">
                
                {/* SVG Radial Gauge */}
                <div className="flex items-center gap-4">
                  <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 160 160">
                      <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="14"
                        fill="transparent"
                        className="text-slate-100 dark:text-white/5"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke={gaugeStrokeColor}
                        strokeWidth="14"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>

                    <div className="absolute flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
                        {realtimePercent}%
                      </span>
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        Mastery
                      </span>
                    </div>
                  </div>

                  {/* Summary labels next to gauge */}
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400">
                      Completed Lessons
                    </p>
                    <p className="text-lg font-black text-gray-900 dark:text-white">
                      {totalCompletedLessons} / {totalCourseLessons > 0 ? totalCourseLessons : "0"}
                    </p>
                    <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500">
                      Across {activeCoursesCount} enrolled {activeCoursesCount === 1 ? "course" : "courses"}
                    </p>
                  </div>
                </div>

                {/* Badges / Metrics column */}
                <div className="flex flex-col gap-2.5 sm:border-l sm:border-slate-100 dark:sm:border-white/5 sm:pl-6">
                  
                  {/* Verified Certificates */}
                  <div className="flex items-center gap-2.5 text-xs">
                    <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900 dark:text-white">
                        {certificates.length} {certificates.length === 1 ? "Certificate" : "Certificates"} Earned
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {certificates.length > 0 ? "Verifiable credentials" : "Complete a course to claim"}
                      </p>
                    </div>
                  </div>

                  {/* Completed Tasks Count */}
                  <div className="flex items-center gap-2.5 text-xs">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-orange-500/10 text-blue-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900 dark:text-white">
                        {completedTasks.length} Weekly Tasks Done
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {completedTasks.length} of {tasks.length} tasks completed ({taskCompletionRate}%)
                      </p>
                    </div>
                  </div>

                  {/* Career Readiness Points */}
                  <div className="flex items-center gap-2.5 text-xs">
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-extrabold text-gray-900 dark:text-white">
                        {bonusPoints} Career XP
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Live dynamic ranking score
                      </p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* In-Card Learning Progress Highlights (Courses & Certificates) */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold text-gray-800 dark:text-gray-200 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-orange-500" />
                  <span>Active Courses & Credentials:</span>
                </span>
                <button 
                  onClick={() => setIsProgressModalOpen(true)}
                  className="text-[11px] font-bold text-blue-600 dark:text-orange-400 hover:underline cursor-pointer inline-flex items-center gap-1"
                >
                  <span>Detailed Breakdown</span>
                  <ChevronRight size={12} />
                </button>
              </div>
              
              {/* Compact course and certificate chips */}
              <div className="flex flex-wrap items-center gap-2">
                {activeEnrolledCourses.length > 0 ? (
                  activeEnrolledCourses.slice(0, 3).map((c) => {
                    const prog = courseProgress[c.courseId]?.progressPercent || 0;
                    return (
                      <Link
                        key={c.courseId}
                        href={`/courses/${c.courseId}`}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-[11px] font-bold text-gray-700 dark:text-gray-200 hover:border-blue-500 dark:hover:border-orange-500 transition-colors"
                      >
                        <span className="truncate max-w-[120px]">{c.title}</span>
                        <span className="text-blue-600 dark:text-orange-400 font-extrabold">{prog}%</span>
                      </Link>
                    );
                  })
                ) : (
                  <span className="text-xs text-gray-400 dark:text-gray-500 italic flex items-center gap-1.5">
                    <span>No active course enrollments yet •</span>
                    <button onClick={onGoToCourses} className="text-blue-600 dark:text-orange-400 font-bold hover:underline not-italic cursor-pointer">
                      Browse Courses →
                    </button>
                  </span>
                )}

                {certificates.slice(0, 2).map((cert) => (
                  <button
                    key={cert.id}
                    onClick={() => onOpenCertificate(cert)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-[11px] font-bold text-amber-800 dark:text-amber-400 hover:scale-105 transition-all cursor-pointer"
                  >
                    <Award size={13} className="text-amber-500" />
                    <span className="truncate max-w-[110px]">{cert.courseTitle}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2: User-Editable & AI-Generated Weekly Tasks */}
          <div className="bg-white dark:bg-[#151518] rounded-[28px] p-6 sm:p-8 border border-slate-200/70 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">
                    Weekly Tasks
                  </h2>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 bg-slate-100 dark:bg-white/5 px-2.5 py-0.5 rounded-full">
                    {completedTasks.length}/{tasks.length} Done ({taskCompletionRate}%)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleGenerateAITasks}
                    disabled={isGeneratingAI}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-orange-600 dark:to-amber-600 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-orange-500 dark:hover:to-amber-500 px-3.5 py-1.5 rounded-full shadow-xs cursor-pointer transition-all active:scale-95 disabled:opacity-50"
                    title="Generate smart daily tasks tailored to your learning progress"
                  >
                    <Sparkles className={`w-3.5 h-3.5 ${isGeneratingAI ? "animate-spin" : ""}`} />
                    <span>{isGeneratingAI ? "Generating..." : "✨ AI Daily Tasks"}</span>
                  </button>
                  <button 
                    onClick={() => setIsAddingTask(!isAddingTask)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-orange-400 hover:underline cursor-pointer bg-blue-50 dark:bg-white/5 border border-blue-200/60 dark:border-white/10 px-3 py-1.5 rounded-full shadow-2xs"
                  >
                    <Plus size={13} />
                    <span>Add Task</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Personalized daily milestones updated dynamically as you study.
                </p>
                <div className="shrink-0">
                  {renderSegmentedBar(taskCompletionRate)}
                </div>
              </div>

              {/* AI Generation Feedback Toast */}
              {aiFeedbackMsg && (
                <div className="mb-4 px-3.5 py-2 rounded-2xl bg-blue-50 dark:bg-orange-500/10 border border-blue-200/80 dark:border-orange-500/20 text-xs font-bold text-blue-700 dark:text-orange-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>{aiFeedbackMsg}</span>
                </div>
              )}

              {/* Inline Add Task Form */}
              {isAddingTask && (
                <form onSubmit={handleAddTask} className="mb-4 flex items-center gap-2 p-2 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200/80 dark:border-white/10">
                  <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Enter task (e.g. Master Docker, Build Auth API)..."
                    className="flex-1 bg-transparent px-3 py-1.5 text-xs font-medium text-gray-900 dark:text-white outline-none placeholder:text-gray-400"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 dark:bg-orange-600 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xs"
                  >
                    Create
                  </button>
                </form>
              )}
            </div>

            {/* Active Tasks List */}
            <div className="space-y-2.5 mt-1">
              {activeTasks.length > 0 ? (
                activeTasks.map((task) => (
                  <div 
                    key={task.id}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group border border-slate-100 dark:border-white/5 hover:border-slate-200/80 dark:hover:border-white/10"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      {/* Checkbox to Complete Task: Removes from active, moves to completed */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCompleteTask(task.id);
                        }}
                        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 border-slate-300 dark:border-white/20 hover:border-blue-600 dark:hover:border-orange-500 hover:bg-blue-50 dark:hover:bg-white/10 text-transparent hover:text-blue-600 dark:hover:text-orange-400 transition-all cursor-pointer"
                        title="Click to complete task"
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </button>

                      {/* Task Title & Direct Lecture Navigation */}
                      <div 
                        onClick={() => handleWatchLecture(task)}
                        className="flex flex-col min-w-0 flex-1 cursor-pointer pr-2"
                        title="Click to watch lecture video at the course section"
                      >
                        <span className="text-xs sm:text-sm font-extrabold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors truncate">
                          {task.title}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          {task.isAI && (
                            <span className="text-[10px] font-bold text-blue-600 dark:text-orange-400 flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" />
                              <span>{task.category || "AI Daily Goal"}</span>
                            </span>
                          )}
                          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 flex items-center gap-1 group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">
                            <Play className="w-2 h-2 fill-current" />
                            <span>Watch Lecture Video →</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                      {/* Dedicated Watch Video Button: Navigates straight to course video */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWatchLecture(task);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-blue-50 dark:bg-white/10 text-blue-700 dark:text-orange-400 hover:bg-blue-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white border border-blue-200/60 dark:border-white/10 transition-all cursor-pointer shrink-0 shadow-2xs"
                        title="Watch lecture video in the course classroom"
                      >
                        <Play className="w-2.5 h-2.5 fill-current" />
                        <span>Watch Video</span>
                      </button>

                      {(task.isCustom || task.isAI) && (
                        <button 
                          onClick={(e) => handleDeleteTask(task.id, e)}
                          className="text-gray-400 hover:text-red-500 p-1 rounded transition-colors cursor-pointer"
                          title="Delete task"
                        >
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center rounded-2xl bg-slate-50/70 dark:bg-white/5 border border-dashed border-slate-200 dark:border-white/10">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                  <h4 className="text-sm font-extrabold text-gray-900 dark:text-white">All Weekly Tasks Completed! 🎉</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-3">
                    You have cleared all active milestones. Generate fresh AI daily tasks to continue making progress.
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={handleGenerateAITasks}
                      disabled={isGeneratingAI}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 dark:bg-orange-600 px-3.5 py-1.5 rounded-full hover:scale-105 transition-all cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Generate AI Tasks</span>
                    </button>
                    <button
                      onClick={() => setIsAddingTask(true)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-gray-700 dark:text-gray-200 bg-slate-200/70 dark:bg-white/10 px-3 py-1.5 rounded-full hover:scale-105 transition-all cursor-pointer"
                    >
                      <Plus size={13} />
                      <span>Add Task</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Completed Tasks Drawer / Section */}
            {completedTasks.length > 0 && (
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Completed Tasks ({completedTasks.length})
                    </span>
                  </div>
                  <button
                    onClick={handleClearCompleted}
                    className="text-[11px] font-bold text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    Clear completed
                  </button>
                </div>

                <div className="space-y-2 max-h-44 overflow-y-auto custom-scrollbar pr-1">
                  {completedTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50/70 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 group transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <button
                          onClick={() => handleRestoreTask(task.id)}
                          className="w-5 h-5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shrink-0 cursor-pointer shadow-xs transition-transform active:scale-95"
                          title="Click to restore to active tasks"
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </button>
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 line-through truncate">
                            {task.title}
                          </span>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                            Completed & Counted in Progress
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleWatchLecture(task)}
                          className="text-[10px] font-extrabold text-gray-400 hover:text-blue-600 dark:hover:text-orange-400 flex items-center gap-1 cursor-pointer transition-colors"
                          title="Re-watch lecture video at the course section"
                        >
                          <Play className="w-2 h-2 fill-current" />
                          <span>Review Video</span>
                        </button>
                        <button
                          onClick={(e) => handleDeleteTask(task.id, e)}
                          className="text-gray-300 dark:text-gray-600 hover:text-red-500 p-1 rounded transition-colors cursor-pointer"
                          title="Delete task"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* BOTTOM SECTION: FEATURED REAL COURSES */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">
              Featured Courses
            </h2>
            <button 
              onClick={onGoToCourses}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-400 transition-colors cursor-pointer"
            >
              <span>View all ({courses.length})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3 Real Course Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((c, idx) => {
              const prog = courseProgress[c.courseId]?.progressPercent || 0;
              const tagText = idx === 0 ? "🔥 Most popular" : idx === 1 ? "⭐ Highest rated" : "🚀 Recommended";
              return (
                <Link 
                  key={c.courseId}
                  href={`/courses/${c.courseId}`}
                  className="group bg-white dark:bg-[#151518] rounded-[28px] overflow-hidden border border-slate-200/70 dark:border-white/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
                >
                  {/* Thumbnail Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-white/5">
                    <Image
                      src={c.thumbnail || "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"}
                      alt={c.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-amber-400 text-stone-900 font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <span>{tagText}</span>
                    </div>
                    {prog > 0 && (
                      <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md text-white font-bold text-[11px] px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                        <span>Progress: {prog}%</span>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors line-clamp-1 mb-2">
                        {c.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium line-clamp-2 mb-4 leading-relaxed">
                        {c.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-blue-600 dark:text-orange-400">
                      <span>{c.duration || "40 hours"}</span>
                      <span>•</span>
                      <span>{c.difficulty || "Beginner"}</span>
                      <span>•</span>
                      <span className="capitalize">{c.category}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* MY SAVED JOBS & APPLICATIONS (Quick Access) */}
        {savedJobs.length > 0 && (
          <div className="bg-white dark:bg-[#151518] rounded-[28px] p-6 sm:p-8 border border-slate-200/70 dark:border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-orange-400" />
                <h3 className="font-extrabold text-lg text-gray-900 dark:text-white">
                  My Applications ({savedJobs.length})
                </h3>
              </div>
              <button 
                onClick={onGoToSavedJobs}
                className="text-xs font-bold text-blue-600 dark:text-orange-400 hover:underline cursor-pointer"
              >
                View all applications →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedJobs.slice(0, 3).map((job) => (
                <div 
                  key={job.id}
                  onClick={() => onOpenJob(job)}
                  className="p-4 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-blue-500/40 dark:hover:border-orange-500/40 bg-slate-50/50 dark:bg-white/[0.02] hover:bg-white dark:hover:bg-white/5 transition-all cursor-pointer group shadow-2xs"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-orange-500 transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                        {job.company}
                      </p>
                    </div>
                    <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                      {job.salary.split(" ")[0]}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3 text-[10px] font-semibold text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Full Learning Progress & Credentials Detail Modal */}
      <LearningProgressDetailModal
        isOpen={isProgressModalOpen}
        onClose={() => setIsProgressModalOpen(false)}
        courses={courses as any}
        courseProgress={courseProgress}
        certificates={certificates}
        realtimePercent={realtimePercent}
        totalCompletedLessons={totalCompletedLessons}
        totalCourseLessons={totalCourseLessons}
        bonusPoints={bonusPoints}
      />

      {/* Task Lecture Video Modal (if opened for preview) */}
      <TaskVideoModal
        isOpen={!!selectedTaskForVideo}
        onClose={() => setSelectedTaskForVideo(null)}
        task={selectedTaskForVideo}
        onToggleComplete={handleCompleteTask}
      />
    </main>
  );
}
