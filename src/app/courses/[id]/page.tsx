"use client";

import React, { useState, useEffect, use, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Play, CheckCircle2, Circle, Award, Sparkles, 
  Clock, BookOpen, ChevronRight, Check, ArrowLeft, PlayCircle
} from "lucide-react";
import confetti from "canvas-confetti";
import { getCourse } from "@/lib/courseData";
import { Course } from "@/data/types";
import { useAuth, UserCertificate } from "@/database/authContext";
import { CertificateModal } from "@/components/courses/CertificateModal";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { MobileDock } from "@/components/layout/MobileDock";

export default function CourseClassroomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourse() {
      const data = await getCourse(id);
      setCourse(data);
      setLoading(false);
    }
    loadCourse();
  }, [id]);

  const { 
    user, 
    profile,
    courseProgress,
    toggleLectureComplete,
    toggleModuleComplete, 
    isLectureCompleted,
    isModuleCompleted, 
    claimCertificate,
    certificates 
  } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [createdCert, setCreatedCert] = useState<UserCertificate | null>(null);

  const modules = course?.modules || [];

  // All lectures in the course
  const allLectures = useMemo(() => {
    if (!course) return [];
    return course.modules.flatMap(m => m.lectures);
  }, [course]);

  // Real live progress calculation
  const { progressPercent, completedCount, is100Percent } = useMemo(() => {
    if (!course || allLectures.length === 0) {
      return { progressPercent: 0, completedCount: 0, is100Percent: false };
    }

    const progressRecord = courseProgress[course.courseId];
    const completedLecturesList = progressRecord?.completedLectures || [];
    const count = allLectures.filter(l => completedLecturesList.includes(l.lectureId)).length;
    
    // Fall back to progressRecord.progressPercent if lectures array empty but percent exists
    const computed = Math.min(100, Math.round((count / allLectures.length) * 100));
    const finalPercent = Math.max(computed, progressRecord?.progressPercent || 0);

    return {
      progressPercent: finalPercent,
      completedCount: count,
      is100Percent: finalPercent >= 100
    };
  }, [course, allLectures, courseProgress]);

  const existingCert = certificates.find(c => c.courseId === course?.courseId);

  // Toggle a lecture completed directly from the curriculum view
  const handleToggleLecture = async (e: React.MouseEvent, lectureId: string) => {
    e.stopPropagation();
    if (!course) return;

    const res = await toggleLectureComplete(course.courseId, lectureId, allLectures.length);
    if (res.completed) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (err) {}
    }

    if (res.percent === 100) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch (err) {}
      const cert = await claimCertificate(course.courseId, course.title, course.company || "Career Map", course.skills || []);
      setCreatedCert(cert);
    }
  };

  const handleOpenCertificate = async () => {
    if (!course) return;
    if (existingCert) {
      setCreatedCert(existingCert);
      setShowCertModal(true);
    } else {
      const cert = await claimCertificate(course.courseId, course.title, course.company || "Career Map", course.skills || []);
      setCreatedCert(cert);
      setShowCertModal(true);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#FAF8F5] dark:bg-black text-gray-800 dark:text-zinc-200 font-bold">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-blue-600 dark:border-orange-500 border-t-transparent rounded-full animate-spin" />
          <span>Loading course curriculum...</span>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#FAF8F5] dark:bg-black">
        <div className="text-center bg-white dark:bg-[#151518] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Course not found</h2>
          <button onClick={() => router.push("/courses")} className="mt-4 text-blue-600 dark:text-orange-400 hover:underline font-bold cursor-pointer">
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#FAF8F5] dark:bg-black text-gray-800 dark:text-zinc-100 antialiased font-sans">
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
      
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        <DashboardHeader
          title={course.title}
          user={user || profile}
          hasResume={!!profile?.resumeName}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 pb-[96px] md:pb-6 flex flex-col gap-6 custom-scrollbar">
          
          {/* Header & Controls (Clean rounded card with Live Progress) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-[#151518] p-5 rounded-[28px] border border-slate-200/70 dark:border-white/10 shadow-sm shrink-0">
            <div className="flex items-center gap-3.5">
              <button 
                onClick={() => router.push("/courses")} 
                className="p-2.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-gray-700 dark:text-zinc-300 rounded-2xl transition-colors cursor-pointer shrink-0"
                title="Back to Courses"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              {course.thumbnail && course.thumbnail.startsWith("http") ? (
                <img src={course.thumbnail} alt={course.title} className="w-13 h-13 rounded-2xl object-cover shrink-0 shadow-md border border-gray-200 dark:border-white/10" />
              ) : (
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-orange-600 dark:to-amber-600 flex items-center justify-center shrink-0 shadow-md">
                  <Play className="w-5 h-5 fill-white text-white" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-orange-950/40 text-blue-600 dark:text-orange-400">
                    {course.category}
                  </span>
                  {course.company && (
                    <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500">
                      • {course.company}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white line-clamp-1">
                  {course.title}
                </h3>
              </div>
            </div>

            {/* Live Progress Bar & Certificate Claim */}
            <div className="flex items-center gap-3.5 self-end sm:self-center shrink-0">
              <div className="flex flex-col items-end gap-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-600 dark:text-zinc-400">
                  <span>Progress:</span>
                  <span className={`font-black ${is100Percent ? "text-emerald-500" : "text-blue-600 dark:text-orange-400"}`}>
                    {progressPercent}%
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500">
                    ({completedCount}/{allLectures.length} Done)
                  </span>
                </div>
                <div className="w-32 sm:w-44 h-2.5 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden p-0.5 border border-slate-200/60 dark:border-white/5">
                  <motion.div
                    className={`h-full rounded-full ${
                      is100Percent 
                        ? "bg-gradient-to-r from-emerald-500 to-teal-500" 
                        : "bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-orange-500 dark:to-amber-600"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {is100Percent ? (
                <button 
                  onClick={handleOpenCertificate} 
                  className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/25 animate-pulse cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Claim Certificate</span>
                </button>
              ) : (
                <button 
                  disabled 
                  className="px-3.5 py-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 text-gray-400 dark:text-zinc-600 font-bold text-xs flex items-center gap-1.5 border border-slate-200/80 dark:border-white/5 cursor-not-allowed"
                  title="Complete all lectures to unlock certificate"
                >
                  <Award className="w-4 h-4" />
                  <span>{progressPercent > 0 ? `${progressPercent}% Complete` : "Locked"}</span>
                </button>
              )}
            </div>
          </div>

          {is100Percent && (
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 px-6 py-3.5 rounded-[24px] flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300 shadow-sm shrink-0">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-spin" />
                <span>Curriculum 100% Completed! You have earned your official verifiable certificate.</span>
              </div>
              <button onClick={handleOpenCertificate} className="underline text-emerald-700 dark:text-emerald-400 font-black hover:text-emerald-900 cursor-pointer">
                Claim Certificate →
              </button>
            </div>
          )}

          {/* Course Details & Curriculum List */}
          <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto mt-2">
            <div className="bg-white dark:bg-[#151518] p-6 md:p-8 rounded-[28px] border border-slate-200/70 dark:border-white/10 shadow-sm">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">About this Course</h2>
              <p className="text-sm text-gray-600 dark:text-zinc-400 mb-8 leading-relaxed">{course.description}</p>

              <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-orange-500" />
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">Curriculum</h3>
                </div>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                  {completedCount} of {allLectures.length} Completed
                </span>
              </div>

              <div className="flex flex-col gap-8">
                {modules.map((mod, modIdx) => (
                  <div key={mod.moduleId}>
                    <h4 className="text-sm font-extrabold text-gray-900 dark:text-zinc-200 mb-4 flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-orange-400 text-xs flex items-center justify-center font-black">
                        {modIdx + 1}
                      </span>
                      {mod.title}
                    </h4>
                    
                    <div className="flex flex-col gap-3 pl-4 md:pl-8 border-l-2 border-gray-100 dark:border-zinc-800">
                      {mod.lectures.map((lecture) => {
                        const isCompleted = isLectureCompleted(course.courseId, lecture.lectureId);
                        return (
                          <div 
                            key={lecture.lectureId}
                            onClick={() => router.push(`/courses/${course.courseId}/lectures/${lecture.lectureId}`)}
                            className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group ${
                              isCompleted 
                                ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/80 dark:border-emerald-800/40 hover:border-emerald-400" 
                                : "bg-gray-50 dark:bg-zinc-900/60 hover:bg-blue-50 dark:hover:bg-zinc-800/80 border-gray-200 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-orange-500/40"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              {/* Direct Complete Toggle Button */}
                              <button
                                onClick={(e) => handleToggleLecture(e, lecture.lectureId)}
                                className={`mt-0.5 p-1 rounded-full transition-transform active:scale-95 cursor-pointer ${
                                  isCompleted ? "text-emerald-500" : "text-gray-400 hover:text-blue-600 dark:hover:text-orange-400"
                                }`}
                                title={isCompleted ? "Mark incomplete" : "Mark completed"}
                              >
                                {isCompleted ? (
                                  <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
                                ) : (
                                  <Circle className="w-5 h-5 text-gray-300 dark:text-zinc-600 hover:text-blue-500 dark:hover:text-orange-400" />
                                )}
                              </button>

                              <div>
                                <div className="flex items-center gap-2 mb-0.5">
                                  <p className="text-xs font-bold text-gray-500 dark:text-zinc-500 uppercase tracking-wider">
                                    Lecture {lecture.lectureNumber}
                                  </p>
                                  {isCompleted && (
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300">
                                      Completed ✓
                                    </span>
                                  )}
                                </div>
                                <h5 className={`text-sm font-bold transition-colors ${
                                  isCompleted 
                                    ? "text-emerald-900 dark:text-emerald-200" 
                                    : "text-gray-900 dark:text-zinc-100 group-hover:text-blue-700 dark:group-hover:text-orange-400"
                                }`}>
                                  {lecture.title}
                                </h5>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 text-xs font-bold text-gray-500 dark:text-zinc-400 flex items-center gap-1.5 shadow-2xs">
                                <PlayCircle className="w-3.5 h-3.5 text-blue-600 dark:text-orange-400" />
                                <span>Watch Video</span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-400 dark:text-zinc-500 group-hover:text-blue-500 dark:group-hover:text-orange-400 transition-colors" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {showCertModal && createdCert && (
        <CertificateModal isOpen={showCertModal} onClose={() => setShowCertModal(false)} certificate={createdCert} />
      )}

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
  );
}
