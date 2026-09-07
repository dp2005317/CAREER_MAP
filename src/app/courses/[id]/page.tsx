"use client";

import React, { useState, useMemo, use } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Play, CheckCircle2, Circle, Award, Sparkles, 
  Clock, BookOpen, ChevronRight, Check, ArrowLeft
} from "lucide-react";
import confetti from "canvas-confetti";
import { playlists } from "@/data/data";
import { getCourseModules, getYouTubeEmbedSrc } from "@/data/classroomData";
import { useAuth, UserCertificate } from "@/database/authContext";
import { CertificateModal } from "@/components/courses/CertificateModal";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { UserProfileDrawer } from "@/components/profile/UserProfileDrawer";

export default function CourseClassroomPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  
  const course = playlists.find(p => p.id === id);
  
  const { 
    user, profile,
    toggleModuleComplete, 
    isModuleCompleted, 
    getCourseProgress, 
    claimCertificate,
    certificates 
  } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  const modules = useMemo(() => course ? getCourseModules(course) : [], [course]);
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [showCertModal, setShowCertModal] = useState(false);
  const [createdCert, setCreatedCert] = useState<UserCertificate | null>(null);

  if (!course) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#EEF2F6]">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800">Course not found</h2>
          <button onClick={() => router.push("/courses")} className="mt-4 text-blue-600 underline">Back to Courses</button>
        </div>
      </div>
    );
  }

  const activeModule = modules[activeModuleIndex] || modules[0];
  const progressPercent = getCourseProgress(course.id);
  const is100Percent = progressPercent >= 100;

  const existingCert = certificates.find(c => c.courseId === course.id);

  const handleToggleComplete = async (modId: string) => {
    const res = await toggleModuleComplete(course.id, modId, modules.length);
    if (res.percent === 100) {
      try { confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } }); } catch (e) {}
      const cert = await claimCertificate(course.id, course.title, course.company, course.skills);
      setCreatedCert(cert);
    }
  };

  const handleOpenCertificate = async () => {
    if (existingCert) {
      setCreatedCert(existingCert);
      setShowCertModal(true);
    } else {
      const cert = await claimCertificate(course.id, course.title, course.company, course.skills);
      setCreatedCert(cert);
      setShowCertModal(true);
    }
  };

  const embedSrc = getYouTubeEmbedSrc(course.playlistUrl, activeModuleIndex, course.category, course.id);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#EEF2F6] text-gray-800 antialiased font-sans">
      <AppSidebar activeTab="courses" isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        <DashboardHeader
          title={course.title}
          user={user || profile}
          hasResume={!!profile?.resumeName}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onOpenProfileDrawer={() => setIsProfileDrawerOpen(true)}
        />
        
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 flex flex-col gap-6 custom-scrollbar">
          
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-gray-200/80 shadow-sm shrink-0">
            <div className="flex items-center gap-3">
              <button onClick={() => router.push("/courses")} className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-md">
                <Play className="w-5 h-5 fill-white text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-600">
                    {course.company}
                  </span>
                  <span className="text-[10px] font-bold text-gray-500">
                    {course.difficulty} • {course.duration}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-gray-900 line-clamp-1">
                  {course.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                  <span>Progress:</span>
                  <span className={`font-black ${is100Percent ? "text-amber-500" : "text-blue-600"}`}>
                    {progressPercent}%
                  </span>
                </div>
                <div className="w-28 sm:w-36 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${is100Percent ? "bg-gradient-to-r from-amber-400 to-yellow-500" : "bg-gradient-to-r from-blue-500 to-indigo-600"}`}
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
                <button disabled className="px-3.5 py-2 rounded-xl bg-gray-100 text-gray-400 font-bold text-xs flex items-center gap-1.5 border border-gray-200 cursor-not-allowed">
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

          <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0 overflow-hidden">
            <div className="flex-1 flex flex-col min-h-0 overflow-y-auto custom-scrollbar pr-1">
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-md border border-gray-200/80 bg-black shrink-0">
                <iframe
                  key={embedSrc}
                  src={embedSrc}
                  title={course.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-gray-200">
                  <div>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                      Current Lesson ({activeModuleIndex + 1} of {modules.length})
                    </span>
                    <h2 className="text-lg sm:text-xl font-black text-gray-900 mt-0.5">
                      {activeModule.title}
                    </h2>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{activeModule.duration}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleToggleComplete(activeModule.id)}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isModuleCompleted(course.id, activeModule.id)
                        ? "bg-emerald-100 hover:bg-emerald-200 text-emerald-700 border border-emerald-200 shadow-sm"
                        : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 shadow-sm"
                    }`}
                  >
                    {isModuleCompleted(course.id, activeModule.id) ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 fill-emerald-600 text-emerald-700" />
                        <span>Lesson Completed</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4 text-gray-400" />
                        <span>Mark Complete</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-3xl bg-white border border-gray-200/80 shadow-sm">
                    <h4 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-2">Lesson Overview</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{activeModule.description}</p>
                  </div>
                  <div className="p-5 rounded-3xl bg-white border border-gray-200/80 shadow-sm">
                    <h4 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-2">Key Takeaways</h4>
                    <ul className="flex flex-col gap-2 text-xs text-gray-600">
                      {activeModule.keyTakeaways.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100 mb-8">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Skills:</span>
                    {course.skills.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 text-[10px] font-bold">
                        {s}
                      </span>
                    ))}
                  </div>
                  {activeModuleIndex < modules.length - 1 && (
                    <button
                      onClick={() => setActiveModuleIndex(prev => prev + 1)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer bg-white px-3 py-1.5 rounded-xl border border-blue-200 shadow-sm"
                    >
                      <span>Next Lesson: {modules[activeModuleIndex + 1].title.split(":")[0]}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-80 bg-white border border-gray-200/80 rounded-3xl shadow-sm flex flex-col shrink-0 overflow-hidden">
              <div className="p-4 bg-gray-50/80 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  <h4 className="font-extrabold text-sm text-gray-900">Curriculum</h4>
                </div>
                <span className="text-[10px] font-bold px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                  {modules.filter(m => isModuleCompleted(course.id, m.id)).length} / {modules.length} Done
                </span>
              </div>

              <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 custom-scrollbar">
                {modules.map((mod, idx) => {
                  const isCompleted = isModuleCompleted(course.id, mod.id);
                  const isActive = activeModuleIndex === idx;

                  return (
                    <div
                      key={mod.id}
                      onClick={() => setActiveModuleIndex(idx)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isActive
                          ? "bg-blue-50 border-blue-200 shadow-sm"
                          : "bg-white hover:bg-gray-50 border-gray-100"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleComplete(mod.id);
                        }}
                        className="mt-0.5 text-gray-300 hover:text-emerald-500 transition-colors cursor-pointer"
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-white" />
                        ) : (
                          <Circle className="w-4 h-4" />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Lesson {idx + 1}</span>
                          <span className="text-[10px] text-gray-400 font-medium">{mod.duration}</span>
                        </div>
                        <p className={`text-xs font-bold leading-tight ${isActive ? "text-blue-900" : "text-gray-700"}`}>
                          {mod.title}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {course.jobRoles && course.jobRoles.length > 0 && (
                <div className="p-4 bg-gray-50/80 border-t border-gray-100">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">Linked Careers</p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.jobRoles.map((role) => (
                      <a
                        key={role}
                        href={`/dashboard?tab=jobs&company=${encodeURIComponent(course.company)}`}
                        className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors shadow-sm"
                      >
                        {role}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      {showCertModal && createdCert && (
        <CertificateModal isOpen={showCertModal} onClose={() => setShowCertModal(false)} certificate={createdCert} />
      )}

      <UserProfileDrawer
        isOpen={isProfileDrawerOpen}
        onClose={() => setIsProfileDrawerOpen(false)}
        onOpenResumeUpload={() => {}}
        onViewCertificate={(cert) => {
          setCreatedCert(cert);
          setShowCertModal(true);
        }}
      />
    </div>
  );
}
