"use client";

import React, { useState, useEffect, use } from "react";
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
    user, profile,
    toggleModuleComplete, 
    isModuleCompleted, 
    getCourseProgress, 
    claimCertificate,
    certificates 
  } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const modules = course?.modules || [];
  const [showCertModal, setShowCertModal] = useState(false);
  const [createdCert, setCreatedCert] = useState<UserCertificate | null>(null);

  if (loading) {
    return <div className="flex h-screen items-center justify-center bg-[#EEF2F6] dark:bg-black text-gray-800 dark:text-zinc-200 font-bold">Loading course...</div>;
  }

  if (!course) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#EEF2F6] dark:bg-black">
        <div className="text-center bg-white dark:bg-[#0c0c0e] p-8 rounded-3xl border border-gray-200 dark:border-white/10 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Course not found</h2>
          <button onClick={() => router.push("/courses")} className="mt-4 text-blue-600 dark:text-orange-400 hover:underline font-bold">Back to Courses</button>
        </div>
      </div>
    );
  }

  // Calculate actual progress based on completed lectures if we tracked it, using mock progress for now
  const progressPercent = 0; // Update with real progress calculation
  const is100Percent = progressPercent >= 100;

  const existingCert = certificates.find(c => c.courseId === course.courseId);

  const handleToggleComplete = async (modId: string) => {
    const res = await toggleModuleComplete(course.courseId, modId, modules.length);
    if (res.percent === 100) {
      try { confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } }); } catch (e) {}
      const cert = await claimCertificate(course.courseId, course.title, "Career Map", []);
      setCreatedCert(cert);
    }
  };

  const handleOpenCertificate = async () => {
    if (existingCert) {
      setCreatedCert(existingCert);
      setShowCertModal(true);
    } else {
      const cert = await claimCertificate(course.courseId, course.title, "Career Map", []);
      setCreatedCert(cert);
      setShowCertModal(true);
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#EEF2F6] dark:bg-black text-gray-800 dark:text-zinc-100 antialiased font-sans">
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
          
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-[#0c0c0e] p-4 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm shrink-0">
            <div className="flex items-center gap-3">
              <button onClick={() => router.push("/courses")} className="p-2 bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-zinc-700 text-gray-600 dark:text-zinc-300 rounded-xl transition-colors cursor-pointer">
                <ArrowLeft className="w-5 h-5" />
              </button>
              {course.thumbnail && course.thumbnail.startsWith("http") ? (
                <img src={course.thumbnail} alt={course.title} className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-md border border-gray-200 dark:border-white/10" />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 dark:from-orange-600 dark:to-amber-600 flex items-center justify-center shrink-0 shadow-md">
                  <Play className="w-5 h-5 fill-white text-white" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 dark:bg-orange-950/40 text-blue-600 dark:text-orange-400">
                    {course.category}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-gray-900 dark:text-white line-clamp-1">
                  {course.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-600 dark:text-zinc-400">
                  <span>Progress:</span>
                  <span className={`font-black ${is100Percent ? "text-amber-500" : "text-blue-600 dark:text-orange-400"}`}>
                    {progressPercent}%
                  </span>
                </div>
                <div className="w-28 sm:w-36 h-2 bg-gray-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${is100Percent ? "bg-gradient-to-r from-amber-400 to-yellow-500" : "bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-orange-500 dark:to-amber-600"}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercent}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {is100Percent ? (
                <button onClick={handleOpenCertificate} className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-black text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/25 animate-pulse cursor-pointer">
                  <Award className="w-4 h-4" />
                  <span>Certificate</span>
                </button>
              ) : (
                <button disabled className="px-3.5 py-2 rounded-xl bg-gray-100 dark:bg-zinc-900 text-gray-400 dark:text-zinc-600 font-bold text-xs flex items-center gap-1.5 border border-gray-200 dark:border-zinc-800 cursor-not-allowed">
                  <Award className="w-4 h-4" />
                  <span>Locked</span>
                </button>
              )}
            </div>
          </div>

          {is100Percent && (
            <div className="bg-amber-50 border border-amber-200 px-6 py-3 rounded-2xl flex items-center justify-between text-xs font-bold text-amber-700 shadow-sm shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />
                <span>Curriculum 100% Completed! You have earned your official verifiable certificate.</span>
              </div>
              <button onClick={handleOpenCertificate} className="underline text-amber-600 font-extrabold hover:text-amber-800 cursor-pointer">
                Claim Certificate →
              </button>
            </div>
          )}

          <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto mt-6">
            <div className="bg-white dark:bg-[#0c0c0e] p-6 md:p-8 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-sm">
              <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2">About this Course</h2>
              <p className="text-gray-600 dark:text-zinc-400 mb-8">{course.description}</p>

              <div className="flex items-center gap-2 mb-6 border-b border-gray-100 dark:border-zinc-800 pb-4">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-orange-500" />
                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">Curriculum</h3>
              </div>

              <div className="flex flex-col gap-8">
                {modules.map((mod, modIdx) => (
                  <div key={mod.moduleId}>
                    <h4 className="text-md font-bold text-gray-800 dark:text-zinc-200 mb-4 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 text-xs flex items-center justify-center font-black">
                        {modIdx + 1}
                      </span>
                      {mod.title}
                    </h4>
                    
                    <div className="flex flex-col gap-3 pl-4 md:pl-8 border-l-2 border-gray-100 dark:border-zinc-800">
                      {mod.lectures.map((lecture, lecIdx) => (
                        <div 
                          key={lecture.lectureId}
                          onClick={() => router.push(`/courses/${course.courseId}/lectures/${lecture.lectureId}`)}
                          className="p-4 bg-gray-50 dark:bg-zinc-900/60 hover:bg-blue-50 dark:hover:bg-zinc-800/80 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-blue-200 dark:hover:border-orange-500/40 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                              <PlayCircle className="w-5 h-5 text-blue-500 dark:text-orange-400 group-hover:text-blue-600 dark:group-hover:text-orange-300 transition-colors" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-500 dark:text-zinc-500 uppercase tracking-wider mb-0.5">
                                Lecture {lecture.lectureNumber}
                              </p>
                              <h5 className="text-sm font-bold text-gray-900 dark:text-zinc-100 group-hover:text-blue-700 dark:group-hover:text-orange-400 transition-colors">
                                {lecture.title}
                              </h5>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700 text-xs font-bold text-gray-500 dark:text-zinc-400 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-500" />
                              {lecture.assessment.totalQuestions} Questions
                            </div>
                            <ChevronRight className="w-4 h-4 text-gray-400 dark:text-zinc-500 group-hover:text-blue-500 dark:group-hover:text-orange-400 transition-colors" />
                          </div>
                        </div>
                      ))}
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
