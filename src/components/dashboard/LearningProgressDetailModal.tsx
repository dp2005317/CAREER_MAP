"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Flame, 
  ExternalLink, 
  ArrowRight,
  ChevronRight,
  Zap,
  GraduationCap
} from "lucide-react";
import { UserCertificate } from "@/database/authContext";
import { Course } from "@/data/types";
import { CertificateModal } from "@/components/courses/CertificateModal";

interface LearningProgressDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  courseProgress: Record<string, { completedModules: string[]; progressPercent: number; completedLectures?: string[]; lastAccessedAt?: string }>;
  certificates: UserCertificate[];
  realtimePercent: number;
  totalCompletedLessons: number;
  totalCourseLessons: number;
  bonusPoints: number;
}

export function LearningProgressDetailModal({
  isOpen,
  onClose,
  courses,
  courseProgress,
  certificates,
  realtimePercent,
  totalCompletedLessons,
  totalCourseLessons,
  bonusPoints,
}: LearningProgressDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"all" | "courses" | "certificates" | "skills">("all");
  const [selectedCert, setSelectedCert] = useState<UserCertificate | null>(null);

  if (!isOpen) return null;

  // Filter courses that user has interacted with or show top courses
  const enrolledCoursesList = courses.map((course) => {
    const prog = courseProgress[course.courseId];
    const totalLectures = course.modules?.reduce((acc: number, m: any) => acc + (m.lectures?.length || 1), 0) || 10;
    const completedLecturesCount = prog?.completedLectures?.length || prog?.completedModules?.length || 0;
    const percent = prog ? prog.progressPercent : 0;
    return {
      ...course,
      percent,
      totalLectures,
      completedLecturesCount,
      isEnrolled: !!prog && prog.progressPercent > 0,
      isCompleted: percent === 100 || certificates.some((c) => c.courseId === course.courseId)
    };
  });

  const activeCourses = enrolledCoursesList.filter((c) => c.isEnrolled);
  const displayCourses = activeCourses.length > 0 ? activeCourses : enrolledCoursesList.slice(0, 4);

  // Aggregate all skills from completed courses and certificates
  const masteredSkills = Array.from(
    new Set([
      ...certificates.flatMap((c) => c.skills || []),
      ...enrolledCoursesList.filter((c) => c.percent > 20).flatMap((c) => c.skills || []),
      "Git", "GitHub", "REST APIs", "Modern JavaScript"
    ])
  );

  return (
    <>
      <AnimatePresence>
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[28px] bg-[#FAF8F5] dark:bg-[#151518] text-gray-900 dark:text-white border border-slate-200/80 dark:border-white/10 shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between bg-white dark:bg-[#18181c] shrink-0">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-orange-500/10 border border-blue-200/80 dark:border-orange-500/20 flex items-center justify-center text-blue-600 dark:text-orange-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                    Learning Progress & Credentials
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                    Real-time tracking of courses, lectures, modules, and verified certificates.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sub-nav Tabs */}
            <div className="flex items-center gap-2 px-6 sm:px-8 py-3 bg-white/50 dark:bg-white/[0.02] border-b border-slate-200/60 dark:border-white/5 overflow-x-auto shrink-0">
              {[
                { id: "all", label: "Overview" },
                { id: "courses", label: `Courses (${displayCourses.length})` },
                { id: "certificates", label: `Certificates (${certificates.length})` },
                { id: "skills", label: `Skills Mastered (${masteredSkills.length})` }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === tab.id
                      ? "bg-blue-600 dark:bg-orange-600 text-white shadow-sm shadow-blue-600/20 dark:shadow-orange-600/20"
                      : "bg-slate-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar space-y-6 flex-1">
              
              {/* Quick Summary Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Overall Completion</span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-orange-500 mt-1">{realtimePercent}%</span>
                  <span className="text-[11px] text-gray-400 font-semibold mt-0.5">Real-time metric</span>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Lessons Finished</span>
                  <span className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-1">{totalCompletedLessons} / {totalCourseLessons}</span>
                  <span className="text-[11px] text-gray-400 font-semibold mt-0.5">Completed lectures</span>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Certificates</span>
                  <span className="text-2xl sm:text-3xl font-black text-amber-500 mt-1">{certificates.length}</span>
                  <span className="text-[11px] text-gray-400 font-semibold mt-0.5">Verifiable credentials</span>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Bonus Points</span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">{bonusPoints.toLocaleString()}</span>
                  <span className="text-[11px] text-gray-400 font-semibold mt-0.5">Earned XP</span>
                </div>
              </div>

              {/* COURSES SECTION */}
              {(activeTab === "all" || activeTab === "courses") && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600 dark:text-orange-500" />
                      <span>Courses & Syllabus Progress</span>
                    </h3>
                    <Link
                      href="/courses"
                      onClick={onClose}
                      className="text-xs font-bold text-blue-600 dark:text-orange-400 hover:underline inline-flex items-center gap-1"
                    >
                      Browse Catalog <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {displayCourses.map((c) => (
                      <div
                        key={c.courseId}
                        className="p-4 rounded-[24px] bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 dark:bg-white/10 shrink-0 border border-slate-200/60 dark:border-white/10">
                            <Image
                              src={(c as any).thumbnailUrl || (c as any).thumbnail || "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"}
                              alt={c.title}
                              fill
                              className="object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-orange-400">
                              {c.company}
                            </span>
                            <h4 className="text-sm font-extrabold text-gray-900 dark:text-white truncate">
                              {c.title}
                            </h4>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                              {c.completedLecturesCount} of {c.totalLectures} lectures completed
                            </p>
                          </div>
                        </div>

                        {/* Progress meter */}
                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-3">
                          <div className="flex-1">
                            <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                              <span className="text-gray-600 dark:text-gray-300">Progress</span>
                              <span className="text-blue-600 dark:text-orange-400">{c.percent}%</span>
                            </div>
                            <div className="h-2 w-full bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-blue-600 dark:bg-orange-500 rounded-full transition-all duration-500"
                                style={{ width: `${Math.max(5, c.percent)}%` }}
                              />
                            </div>
                          </div>

                          <Link
                            href={`/courses/${c.courseId}`}
                            onClick={onClose}
                            className="px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-white/10 hover:bg-blue-600 dark:hover:bg-orange-600 text-blue-700 dark:text-white hover:text-white text-xs font-bold transition-all shrink-0 cursor-pointer"
                          >
                            Continue
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CERTIFICATES SECTION */}
              {(activeTab === "all" || activeTab === "certificates") && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      <span>Official Certificates ({certificates.length})</span>
                    </h3>
                  </div>

                  {certificates.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {certificates.map((cert) => (
                        <div
                          key={cert.id}
                          className="p-5 rounded-[24px] bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent bg-white dark:bg-white/5 border border-amber-300/40 dark:border-amber-500/20 flex flex-col justify-between shadow-2xs"
                        >
                          <div>
                            <div className="flex items-center justify-between text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                              <span>{cert.company}</span>
                              <span className="font-mono">ID: {cert.credentialId.slice(0, 12)}</span>
                            </div>
                            <h4 className="font-black text-sm text-gray-900 dark:text-white line-clamp-2">
                              {cert.courseTitle}
                            </h4>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              Issued on {cert.issuedAt}
                            </p>
                          </div>

                          <button
                            onClick={() => setSelectedCert(cert)}
                            className="mt-4 w-full py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>View & Download Certificate</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-6 rounded-[24px] bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-center">
                      <Award className="w-10 h-10 text-amber-400 mx-auto mb-2 opacity-80" />
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white">
                        First Certificate Within Reach
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-md mx-auto">
                        Complete 100% of lectures in any course and pass the module assessment to generate your verified certificate of completion.
                      </p>
                      <Link
                        href="/courses"
                        onClick={onClose}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-orange-400 hover:underline"
                      >
                        Start a certificate course <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* SKILLS SECTION */}
              {(activeTab === "all" || activeTab === "skills") && (
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600 dark:text-orange-500" />
                    <span>Skills Acquired</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {masteredSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 text-xs font-bold text-gray-800 dark:text-gray-200 border border-slate-200/80 dark:border-white/10 flex items-center gap-1.5 shadow-2xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-orange-400" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#18181c] flex items-center justify-between shrink-0">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                All progress is automatically synced to your cloud profile.
              </span>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white text-xs font-bold transition-all cursor-pointer shadow-sm"
              >
                Done
              </button>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>

      {/* Embedded Certificate Viewer Modal */}
      {selectedCert && (
        <CertificateModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          certificate={selectedCert}
        />
      )}
    </>
  );
}
