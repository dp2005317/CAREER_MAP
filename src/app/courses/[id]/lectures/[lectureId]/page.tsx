"use client";

import React, { useState, useEffect, use, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { 
  ArrowLeft, 
  ArrowRight,
  PlayCircle, 
  BookOpen, 
  CheckCircle2, 
  Circle,
  Award, 
  Check, 
  ListVideo, 
  Sparkles,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  Clock,
  RotateCcw,
  ExternalLink,
  Sidebar
} from "lucide-react";
import { getLecture, saveAssessmentResult, getAssessmentResult } from "@/lib/courseData";
import { Course, Lecture } from "@/data/types";
import { AssessmentEngine } from "@/components/courses/assessment/AssessmentEngine";
import { useAuth } from "@/database/authContext";
import confetti from "canvas-confetti";
import { MobileDock } from "@/components/layout/MobileDock";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function LecturePage({ params }: { params: Promise<{ id: string, lectureId: string }> }) {
  const { id, lectureId } = use(params);
  const router = useRouter();
  const { 
    user, 
    profile, 
    courseProgress, 
    toggleLectureComplete, 
    isLectureCompleted, 
    claimCertificate 
  } = useAuth();

  const [course, setCourse] = useState<Course | null>(null);
  const [lecture, setLecture] = useState<Lecture | null>(null);
  const [loading, setLoading] = useState(true);
  const [showAssessment, setShowAssessment] = useState(false);
  const [previousResult, setPreviousResult] = useState<any | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"overview" | "assessment">("overview");
  const [completionBanner, setCompletionBanner] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const userId = user?.uid || "test-user";
      
      const data = await getLecture(id, lectureId);
      if (data) {
        setLecture(data.lecture);
        if (data.course) {
          setCourse(data.course);
        }
        
        const result = await getAssessmentResult(userId, lectureId);
        if (result) {
          setPreviousResult(result);
        }
      }
      setLoading(false);
    }
    loadData();
  }, [id, lectureId, user?.uid]);

  // Flatten all lectures to calculate next, previous, and index
  const allLectures = useMemo(() => {
    if (!course) return [];
    return course.modules.flatMap(m => m.lectures);
  }, [course]);

  const currentIndex = useMemo(() => {
    return allLectures.findIndex(l => l.lectureId === lectureId);
  }, [allLectures, lectureId]);

  const prevLecture = currentIndex > 0 ? allLectures[currentIndex - 1] : null;
  const nextLecture = currentIndex >= 0 && currentIndex < allLectures.length - 1 ? allLectures[currentIndex + 1] : null;

  // Completed status
  const isCompleted = isLectureCompleted(id, lectureId);

  // Completed count and progress
  const completedLecturesList = courseProgress[id]?.completedLectures || [];
  const completedCount = allLectures.filter(l => completedLecturesList.includes(l.lectureId)).length;
  const progressPercent = allLectures.length > 0 
    ? Math.round((completedCount / allLectures.length) * 100) 
    : 0;

  // Auto-rotate to landscape when going fullscreen on mobile
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        // We entered fullscreen
        if (screen.orientation && (screen.orientation as any).lock) {
          (screen.orientation as any).lock("landscape").catch(() => {
            // Ignore errors (e.g. if not supported or on desktop)
          });
        }
      } else {
        // We exited fullscreen
        if (screen.orientation && screen.orientation.unlock) {
          try {
            screen.orientation.unlock();
          } catch (e) {
            // Ignore
          }
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Toggle complete for current lecture
  const handleToggleCurrentComplete = async () => {
    if (!course) return;
    const res = await toggleLectureComplete(id, lectureId, allLectures.length);
    if (res.completed) {
      setCompletionBanner(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {}

      if (res.percent === 100) {
        try {
          confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.5 }
          });
        } catch (e) {}
        await claimCertificate(course.courseId, course.title, course.company, course.skills || []);
      }
    } else {
      setCompletionBanner(false);
    }
  };

  const handleAssessmentFinish = async (result: any) => {
    const userId = user?.uid || "test-user";
    await saveAssessmentResult(userId, id, lectureId, result);
    setPreviousResult(result);
    setShowAssessment(false);
    setActiveTab("overview");

    // Automatically mark lecture complete if passed
    if (result.percentage >= 60 && !isCompleted) {
      handleToggleCurrentComplete();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Autoplay YouTube URL
  const videoAutoplayUrl = useMemo(() => {
    if (!lecture?.videoUrl) return "";
    const separator = lecture.videoUrl.includes("?") ? "&" : "?";
    return `${lecture.videoUrl}${separator}autoplay=1&enablejsapi=1&rel=0`;
  }, [lecture?.videoUrl]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#EEF2F6] dark:bg-black gap-3">
        <div className="w-10 h-10 border-4 border-blue-600 dark:border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-sm font-bold text-gray-600 dark:text-zinc-400">Loading lecture & player...</p>
      </div>
    );
  }

  if (!lecture || !course) {
    return (
      <div className="flex h-screen items-center justify-center flex-col gap-4 bg-[#EEF2F6] dark:bg-black">
        <div className="bg-white dark:bg-[#0c0c0e] p-8 rounded-3xl border border-gray-200 dark:border-white/10 text-center max-w-md shadow-sm">
          <BookOpen className="w-12 h-12 text-gray-400 dark:text-zinc-600 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Lecture not found</h2>
          <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1 mb-5">This lecture may have been moved or does not exist in this course.</p>
          <button 
            onClick={() => router.push(`/courses/${id}`)} 
            className="px-5 py-2.5 bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white rounded-xl font-bold text-sm transition-all cursor-pointer"
          >
            Back to Course
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F8FAFC] dark:bg-black text-gray-800 dark:text-zinc-100 antialiased font-sans">
      <AppSidebar 
        activeTab="courses" 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onTabChange={(tab) => {
          if (tab === "courses") {
            router.push("/courses");
            return;
          }
          router.push(`/dashboard?tab=${tab}`);
        }}
      />
      
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto relative pb-[96px] md:pb-0 custom-scrollbar">
        {/* Top Navbar */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200/80 dark:border-white/10 px-4 lg:px-8 py-3 shrink-0 shadow-xs">
        <div className="max-w-[1720px] w-full mx-auto flex items-center justify-between gap-3">
          
          {/* Left: Back & Course Breadcrumb */}
          <div className="flex items-center gap-3 min-w-0">
            <button 
              onClick={() => router.push(`/courses/${id}`)} 
              className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-300 transition-colors shrink-0 cursor-pointer"
              title="Back to Course Details"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold text-blue-600 dark:text-orange-400 tracking-wide uppercase truncate">
                  {course.title}
                </span>
                <span className="text-gray-300 dark:text-zinc-700">•</span>
                <span className="text-[11px] font-bold text-gray-500 dark:text-zinc-400 shrink-0">
                  Lecture {currentIndex + 1} of {allLectures.length}
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-black text-gray-900 dark:text-white truncate">
                {lecture.title}
              </h1>
            </div>
          </div>

          {/* Right: Progress & Primary Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Wrapper to hide redundant buttons on mobile */}
            <div className="hidden md:flex items-center gap-2.5">
              {/* Progress Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800">
              <div className="w-20 bg-slate-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 dark:bg-orange-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-xs font-bold text-gray-700 dark:text-zinc-300">
                {progressPercent}%
              </span>
            </div>

            {/* Previous Lecture */}
            <button
              onClick={() => prevLecture && router.push(`/courses/${id}/lectures/${prevLecture.lectureId}`)}
              disabled={!prevLecture}
              className={`p-2 sm:px-3 sm:py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                prevLecture 
                  ? "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 shadow-xs cursor-pointer" 
                  : "bg-gray-100 dark:bg-zinc-950 border-gray-200 dark:border-zinc-900 text-gray-300 dark:text-zinc-700 cursor-not-allowed"
              }`}
              title={prevLecture ? `Previous: ${prevLecture.title}` : "First lecture"}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden md:inline">Previous</span>
            </button>

            {/* Mark as Complete Button */}
            <button
              onClick={handleToggleCurrentComplete}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer ${
                isCompleted
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20"
                  : "bg-white dark:bg-zinc-900 hover:bg-blue-50 dark:hover:bg-zinc-800 text-gray-800 dark:text-zinc-200 border border-gray-300 dark:border-zinc-700 hover:border-blue-300 dark:hover:border-orange-500/40"
              }`}
            >
              {isCompleted ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Completed</span>
                </>
              ) : (
                <>
                  <Circle className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-500" />
                  <span>Mark Complete</span>
                </>
              )}
            </button>

            {/* Next Lecture */}
            <button
              onClick={() => nextLecture && router.push(`/courses/${id}/lectures/${nextLecture.lectureId}`)}
              disabled={!nextLecture}
              className={`p-2 sm:px-3 sm:py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all ${
                nextLecture 
                  ? "bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white border-blue-600 dark:border-orange-600 shadow-xs cursor-pointer" 
                  : "bg-gray-100 dark:bg-zinc-950 border-gray-200 dark:border-zinc-900 text-gray-300 dark:text-zinc-700 cursor-not-allowed"
              }`}
              title={nextLecture ? `Next: ${nextLecture.title}` : "Course finished"}
            >
              <span className="hidden md:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            </div>

            {/* Toggle Curriculum Sidebar */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isSidebarOpen 
                  ? "bg-blue-50 dark:bg-orange-950/40 border-blue-200 dark:border-orange-500/40 text-blue-600 dark:text-orange-400" 
                  : "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-800"
              }`}
              title={isSidebarOpen ? "Hide Curriculum Sidebar" : "Show Curriculum Sidebar"}
            >
              <Sidebar className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Completion Banner */}
      {completionBanner && nextLecture && (
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2.5 text-xs font-bold flex items-center justify-between shadow-sm animate-in fade-in slide-in-from-top-2">
          <div className="max-w-[1720px] mx-auto w-full flex items-center justify-between px-2 sm:px-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Great job completing Lecture {lecture.lectureNumber}! Ready to continue?</span>
            </div>
            <button
              onClick={() => router.push(`/courses/${id}/lectures/${nextLecture.lectureId}`)}
              className="bg-white text-emerald-800 px-3 py-1 rounded-lg text-xs font-black hover:bg-emerald-50 flex items-center gap-1 transition-all cursor-pointer"
            >
              <span>Play Next: {nextLecture.title.slice(0, 30)}...</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Workspace Layout */}
      <div className="flex-1 max-w-[1720px] w-full mx-auto p-3 sm:p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* Left / Center Column: Video Player & Overview / Assessment */}
        <div className={`flex flex-col gap-5 ${isSidebarOpen ? "lg:col-span-8 xl:col-span-9" : "lg:col-span-12"}`}>
          
          {!showAssessment ? (
            <>
              {/* YouTube Video Player (With Autoplay) */}
              <div className="relative w-full aspect-video bg-slate-950 rounded-3xl overflow-hidden shadow-xl border border-slate-800">
                <iframe
                  key={lecture.lectureId}
                  src={videoAutoplayUrl}
                  title={lecture.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Player Quick-Actions Bar */}
              <div className="bg-white dark:bg-[#0c0c0e] p-4 rounded-2xl border border-gray-200/80 dark:border-white/10 shadow-xs flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => prevLecture && router.push(`/courses/${id}/lectures/${prevLecture.lectureId}`)}
                    disabled={!prevLecture}
                    className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                      prevLecture 
                        ? "bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-zinc-300 cursor-pointer" 
                        : "bg-slate-50 dark:bg-zinc-950 text-slate-300 dark:text-zinc-700 cursor-not-allowed"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Video</span>
                  </button>

                  <button
                    onClick={handleToggleCurrentComplete}
                    className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all cursor-pointer ${
                      isCompleted
                        ? "bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800/40"
                        : "bg-blue-50 dark:bg-zinc-900 hover:bg-blue-100 dark:hover:bg-zinc-800 text-blue-700 dark:text-orange-400 border border-blue-200 dark:border-zinc-800"
                    }`}
                  >
                    {isCompleted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>Completed ✓</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4 text-blue-500 dark:text-orange-400" />
                        <span>Mark as Done</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowAssessment(true)}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-orange-600 dark:to-amber-600 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-orange-500 dark:hover:to-amber-500 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm shadow-blue-500/20 dark:shadow-orange-500/20 cursor-pointer transition-all"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>Take Assessment ({lecture.assessment.totalQuestions} Qs)</span>
                  </button>

                  {nextLecture && (
                    <button
                      onClick={() => router.push(`/courses/${id}/lectures/${nextLecture.lectureId}`)}
                      className="px-4 py-2 bg-slate-900 dark:bg-zinc-800 hover:bg-black dark:hover:bg-zinc-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Next Video</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Tabs Section: Overview & Assessment Summary */}
              <div className="bg-white dark:bg-[#0c0c0e] rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-xs overflow-hidden">
                {/* Tabs Header */}
                <div className="flex border-b border-gray-100 dark:border-zinc-800 px-6 pt-4 gap-6">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`pb-3 text-xs font-black transition-all relative cursor-pointer ${
                      activeTab === "overview" 
                        ? "text-blue-600 dark:text-orange-400" 
                        : "text-gray-500 dark:text-zinc-400 hover:text-gray-800 dark:hover:text-white"
                    }`}
                  >
                    Lecture Overview
                    {activeTab === "overview" && (
                      <div className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-600 dark:bg-orange-500 rounded-full" />
                    )}
                  </button>

                  <button
                    onClick={() => setActiveTab("assessment")}
                    className={`pb-3 text-xs font-black transition-all relative cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "assessment" 
                        ? "text-blue-600 dark:text-orange-400" 
                        : "text-gray-500 dark:text-zinc-400 hover:text-gray-800 dark:hover:text-white"
                    }`}
                  >
                    <span>Assessment</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-50 dark:bg-orange-950/40 text-blue-600 dark:text-orange-400 font-extrabold border border-blue-100 dark:border-orange-500/30">
                      20 Qs
                    </span>
                    {activeTab === "assessment" && (
                      <div className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-600 dark:bg-orange-500 rounded-full" />
                    )}
                  </button>
                </div>

                {/* Tab 1: Overview */}
                {activeTab === "overview" && (
                  <div className="p-6 flex flex-col gap-6">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-gray-400 dark:text-zinc-500 mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-600 dark:text-orange-500" /> Topics Covered in this Video
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {lecture.topics.map((topic, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1.5 bg-slate-50 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 rounded-xl text-xs font-bold border border-slate-200/80 dark:border-zinc-800 hover:bg-blue-50 dark:hover:bg-zinc-800 hover:text-blue-700 dark:hover:text-orange-400 transition-colors"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100 dark:border-zinc-800">
                      <div className="p-4 bg-slate-50 dark:bg-zinc-900/60 rounded-2xl border border-slate-200/80 dark:border-zinc-800">
                        <span className="text-[11px] font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">Instructor / Channel</span>
                        <h4 className="text-sm font-extrabold text-gray-900 dark:text-white mt-1">{course.instructor || course.company}</h4>
                        <p className="text-xs text-gray-500 dark:text-zinc-400 mt-0.5">{course.title}</p>
                      </div>

                      <div className="p-4 bg-blue-50/60 dark:bg-orange-950/20 rounded-2xl border border-blue-100 dark:border-orange-500/20">
                        <span className="text-[11px] font-bold text-blue-600 dark:text-orange-400 uppercase tracking-wider">Assessment Status</span>
                        <h4 className="text-sm font-extrabold text-gray-900 dark:text-white mt-1">
                          {previousResult ? `${previousResult.totalScore} / ${lecture.assessment.totalQuestions} Passed` : "Not Attempted"}
                        </h4>
                        <p className="text-xs text-blue-600 dark:text-orange-400 font-medium mt-0.5">
                          {previousResult ? `Rating: ${previousResult.status}` : "10 Fundamental + 10 Coding Questions"}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Assessment Card inside tabs */}
                {activeTab === "assessment" && (
                  <div className="p-6 flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50/40 dark:from-zinc-900 dark:to-zinc-900/80 rounded-2xl border border-blue-100 dark:border-zinc-800">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <GraduationCap className="w-5 h-5 text-blue-600 dark:text-orange-500" />
                          <h4 className="text-base font-black text-gray-900 dark:text-white">Interactive Lecture Assessment</h4>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-zinc-400 max-w-xl">
                          Test your mastery over {lecture.title}. Exactly 10 fundamental theory questions and 10 coding exercises generated directly from this video.
                        </p>
                      </div>

                      <button
                        onClick={() => setShowAssessment(true)}
                        className="px-5 py-3 bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white font-extrabold text-xs rounded-xl shadow-md shadow-blue-500/25 dark:shadow-orange-500/25 transition-all shrink-0 cursor-pointer"
                      >
                        {previousResult ? "Retake Assessment" : "Start Assessment Now"}
                      </button>
                    </div>

                    {previousResult && (
                      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">Best Score</p>
                          <p className="text-2xl font-black text-gray-900 dark:text-white mt-0.5">
                            {previousResult.totalScore} <span className="text-xs text-gray-400 dark:text-zinc-500 font-normal">/ {lecture.assessment.totalQuestions}</span>
                          </p>
                        </div>
                        <div className={`px-3 py-1 rounded-xl text-xs font-bold ${
                          previousResult.status === 'Mastered' ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400' :
                          previousResult.status === 'Good' ? 'bg-blue-100 dark:bg-orange-950/40 text-blue-700 dark:text-orange-400' :
                          'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400'
                        }`}>
                          {previousResult.status}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Full Assessment Engine Mode */
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between bg-white dark:bg-[#0c0c0e] p-4 rounded-2xl border border-gray-200 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <PlayCircle className="w-5 h-5 text-blue-600 dark:text-orange-500" />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">{lecture.title} — Assessment</h3>
                    <p className="text-xs text-gray-500 dark:text-zinc-400">10 Fundamental Questions + 10 Coding Questions</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAssessment(false)}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-700 dark:text-zinc-300 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Back to Video
                </button>
              </div>

              <AssessmentEngine 
                fundamentalQuestions={lecture.fundamentalQuestions}
                codingQuestions={lecture.codingQuestions}
                onFinish={handleAssessmentFinish}
              />
            </div>
          )}
        </div>

        {/* Right Column: Full Course Curriculum / Playlist Sidebar */}
        {isSidebarOpen && (
          <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-4">
            <div className="bg-white dark:bg-[#0c0c0e] rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-xs p-5 flex flex-col gap-4 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
              
              {/* Sidebar Header: Course Progress */}
              <div className="border-b border-gray-100 dark:border-zinc-800 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-black text-gray-900 dark:text-white flex items-center gap-2">
                    <ListVideo className="w-4 h-4 text-blue-600 dark:text-orange-500" />
                    <span>Course Content</span>
                  </h3>
                  <span className="text-xs font-extrabold text-blue-600 dark:text-orange-400 bg-blue-50 dark:bg-orange-950/40 px-2 py-0.5 rounded-full border border-blue-100 dark:border-orange-500/30">
                    {completedCount}/{allLectures.length} Done
                  </span>
                </div>

                {/* Visual Progress Bar */}
                <div className="w-full bg-gray-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden mb-1">
                  <div 
                    className="bg-blue-600 dark:bg-orange-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="text-[10px] font-bold text-gray-400 dark:text-zinc-500">
                  {progressPercent}% curriculum completed
                </p>
              </div>

              {/* Course Modules & Lectures Accordion */}
              <div className="flex flex-col gap-4">
                {course.modules.map((module, modIdx) => (
                  <div key={module.moduleId} className="flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 px-1">
                      <span className="w-4 h-4 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 text-[10px] font-black flex items-center justify-center">
                        {modIdx + 1}
                      </span>
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-zinc-400 truncate">
                        {module.title}
                      </h4>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      {module.lectures.map((lec) => {
                        const isCurrent = lec.lectureId === lectureId;
                        const isLecDone = isLectureCompleted(id, lec.lectureId);

                        return (
                          <div
                            key={lec.lectureId}
                            className={`group p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                              isCurrent
                                ? "bg-blue-50/80 dark:bg-orange-950/30 border-blue-300 dark:border-orange-500/40 shadow-xs"
                                : "bg-white dark:bg-zinc-900/60 hover:bg-slate-50 dark:hover:bg-zinc-800/80 border-gray-200/70 dark:border-zinc-800"
                            }`}
                            onClick={() => router.push(`/courses/${id}/lectures/${lec.lectureId}`)}
                          >
                            <div className="flex items-start gap-2.5 min-w-0">
                              {/* Play / Check Icon */}
                              <div className="mt-0.5 shrink-0">
                                {isLecDone ? (
                                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs">
                                    <Check className="w-3 h-3 stroke-[3]" />
                                  </div>
                                ) : isCurrent ? (
                                  <div className="w-5 h-5 rounded-full bg-blue-600 dark:bg-orange-600 text-white flex items-center justify-center animate-pulse shadow-xs">
                                    <PlayCircle className="w-3.5 h-3.5 fill-white text-blue-600 dark:text-orange-600" />
                                  </div>
                                ) : (
                                  <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 flex items-center justify-center text-[10px] font-bold group-hover:bg-blue-100 dark:group-hover:bg-zinc-700 group-hover:text-blue-700 dark:group-hover:text-orange-400 transition-colors">
                                    {lec.lectureNumber}
                                  </div>
                                )}
                              </div>

                              {/* Lecture Title & Details */}
                              <div className="min-w-0">
                                <p className={`text-xs font-bold line-clamp-2 transition-colors ${
                                  isCurrent ? "text-blue-900 dark:text-orange-200 font-extrabold" : "text-gray-800 dark:text-zinc-200 group-hover:text-blue-700 dark:group-hover:text-orange-400"
                                }`}>
                                  {lec.title}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                  {isCurrent && (
                                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-orange-400 bg-blue-100/70 dark:bg-orange-950/50 px-1.5 py-0.5 rounded-md">
                                      Now Playing
                                    </span>
                                  )}
                                  <span className="text-[10px] text-gray-400 dark:text-zinc-500 font-medium">
                                    {lec.assessment.totalQuestions} Questions
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Toggle Completion directly in sidebar */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleLectureComplete(id, lec.lectureId, allLectures.length);
                              }}
                              className={`p-1.5 rounded-lg border transition-all shrink-0 cursor-pointer ${
                                isLecDone 
                                  ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100" 
                                  : "bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-300 dark:text-zinc-600 hover:text-slate-600 dark:hover:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                              }`}
                              title={isLecDone ? "Mark Incomplete" : "Mark Complete"}
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>

      <MobileDock
        activeTab="courses"
        onTabChange={(tab) => {
          if (tab === "courses") {
            router.push("/courses");
            return;
          }
          router.push(`/dashboard?tab=${tab}`);
        }}
        onOpenProfile={() => router.push("/profile")}
      />
      </div>
    </div>
  );
}
