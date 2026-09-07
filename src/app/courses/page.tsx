"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  SlidersHorizontal,
  TrendingUp,
  Award,
  Sparkles,
  GraduationCap,
  Target,
  X,
  ExternalLink,
  Filter,
  Map as MapIcon,
  Tag,
  Building2,
  Briefcase,
  Play,
  Video,
  FileText,
  CheckCircle2,
  User
} from "lucide-react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { UserProfileDrawer } from "@/components/profile/UserProfileDrawer";
import { CompanyCard } from "@/components/courses/CompanyCard";
import { CourseCard } from "@/components/courses/CourseCard";
import { CategoryCard } from "@/components/courses/CategoryCard";
import { LearningPathCard } from "@/components/courses/LearningPathCard";
import { ResourceCard } from "@/components/courses/ResourceCard";
import { SearchBar } from "@/components/courses/SearchBar";
import { FilterSidebar } from "@/components/courses/FilterSidebar";
import { RecommendationSection } from "@/components/courses/RecommendationSection";
import { CompanyLogoSvg } from "@/components/courses/CompanyLogoSvg";
import { companies, categories, playlists, learningPaths, resources } from "@/data/data";
import { LearningFilters, Playlist } from "@/data/types";
import { useAuth, UserCertificate } from "@/database/authContext";
import { getRecommendedCourses, calculateCourseMatch } from "@/backend/recommendations";
import { CertificateModal } from "@/components/courses/CertificateModal";
import { OnboardingModal } from "@/components/profile/OnboardingModal";

const tabs = [
  { id: "all", label: "All Playlists", icon: BookOpen },
  { id: "recommended", label: "Recommended for You", icon: Sparkles },
  { id: "mylearning", label: "My Learning & Certificates", icon: GraduationCap },
  { id: "trending", label: "Trending", icon: TrendingUp },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "paths", label: "Career Paths", icon: Target },
];

export default function FreeCoursesPage() {
  const router = useRouter();
  const { user, profile, courseProgress, certificates, getCourseProgress } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState("data-science");

  // Layout State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  // Modals
  const [viewingCert, setViewingCert] = useState<UserCertificate | null>(null);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  const [filters, setFilters] = useState<LearningFilters>({
    search: "",
    company: "",
    category: "",
    difficulty: "",
    duration: "",
    certificateOnly: false,
    freeOnly: false,
    language: "",
  });

  const handleFilterChange = (newFilters: LearningFilters) => {
    setFilters(newFilters);
  };

  const effectiveSearch = searchQuery || filters.search;

  // Map each course to recommendation match data
  const matchMap = useMemo(() => {
    const map = new Map<string, { matchScore: number; recommendationReason: string }>();
    playlists.forEach((p) => {
      const match = calculateCourseMatch(p, profile?.skills, profile?.targetRole);
      map.set(p.id, {
        matchScore: match.matchScore,
        recommendationReason: match.recommendationReason,
      });
    });
    return map;
  }, [profile]);

  // Enrolled / In-progress courses
  const enrolledCourses = useMemo(() => {
    return playlists.filter((p) => (courseProgress[p.id]?.progressPercent || 0) > 0);
  }, [courseProgress]);

  // Filtered & sorted playlists
  const filteredPlaylists = useMemo(() => {
    let list = playlists.filter((p) => {
      if (effectiveSearch) {
        const q = effectiveSearch.toLowerCase();
        const match =
          p.title.toLowerCase().includes(q) ||
          p.company.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.skills.some((s) => s.toLowerCase().includes(q)) ||
          p.instructor.toLowerCase().includes(q) ||
          p.jobRoles.some((r) => r.toLowerCase().includes(q));
        if (!match) return false;
      }
      if (filters.company && p.company !== filters.company) return false;
      if (filters.category && p.category !== filters.category) return false;
      if (filters.difficulty && p.difficulty !== filters.difficulty) return false;
      if (filters.duration) {
        const hours = p.durationHours || 0;
        if (filters.duration === "short" && hours >= 20) return false;
        if (filters.duration === "medium" && (hours < 20 || hours > 40)) return false;
        if (filters.duration === "long" && hours < 40) return false;
      }
      if (filters.certificateOnly && !p.certificateAvailable) return false;
      if (filters.freeOnly && !p.isFree) return false;
      if (filters.language && p.language !== filters.language) return false;
      if (activeTab === "trending" && !p.isTrending) return false;
      if (activeTab === "certificates" && !p.certificateAvailable) return false;
      return true;
    });

    if (activeTab === "recommended" && profile?.skills?.length) {
      list = [...list].sort((a, b) => {
        const scoreA = matchMap.get(a.id)?.matchScore || 0;
        const scoreB = matchMap.get(b.id)?.matchScore || 0;
        return scoreB - scoreA;
      });
    }

    return list;
  }, [effectiveSearch, filters, activeTab, profile, matchMap]);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#EEF2F6] text-gray-800 antialiased font-sans">
      <AppSidebar
        activeTab="courses"
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onTabChange={(tab) => {
          if (tab === "courses") return;
          router.push(`/dashboard?tab=${tab}`);
        }}
        onSearchChange={(q) => {
          router.push(`/dashboard?tab=search&company=${encodeURIComponent(q)}`);
        }}
      />
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        <DashboardHeader
          title="Free Certification Courses"
          user={user || profile}
          hasResume={!!profile?.resumeName}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onOpenProfileDrawer={() => setIsProfileDrawerOpen(true)}
          onOpenResumeUpload={() => setIsOnboardingOpen(true)}
        />
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-8 custom-scrollbar">
        
        {/* Personalized Resume Hero Banner */}
        <section className="relative z-10 shrink-0 rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Competitor-Grade Free Curriculum</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-2">
                {profile?.displayName
                  ? `Welcome, ${profile.displayName}!`
                  : "Master High-Demand Tech Skills"}
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium mb-4">
                {profile?.skills?.length
                  ? `Based on your resume, we matched ${filteredPlaylists.length} free certification courses aligned with your ${profile.targetRole || "career"} track. Study directly in our embedded theater & earn verifiable certificates.`
                  : "Explore 100+ free official courses from Google, Meta, Microsoft, and IBM. Complete interactive lessons in-app and claim your verified Certificate of Completion."}
              </p>

              {/* Skills Chips or Upload CTA */}
              {profile?.skills && profile.skills.length > 0 ? (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold text-slate-400">Target Role:</span>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-lg bg-blue-600 text-white">
                    {profile.targetRole || "Software Engineer"}
                  </span>
                  <span className="text-[11px] font-bold text-slate-400 ml-2">Matched Skills:</span>
                  {profile.skills.slice(0, 4).map((s) => (
                    <span key={s} className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-800 text-slate-200 border border-slate-700">
                      {s}
                    </span>
                  ))}
                  {profile.skills.length > 4 && (
                    <span className="text-xs text-slate-400">+{profile.skills.length - 4} more</span>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsOnboardingOpen(true)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Upload PDF Resume for Instant Skill Matching</span>
                </button>
              )}
            </div>

            {/* Quick Metrics Badge */}
            <div className="grid grid-cols-2 gap-3 shrink-0 w-full sm:w-auto">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <p className="text-2xl font-black text-white">{enrolledCourses.length}</p>
                <p className="text-[11px] text-slate-300 font-bold uppercase tracking-wider mt-0.5">Enrolled</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-center">
                <p className="text-2xl font-black text-amber-400">{certificates.length}</p>
                <p className="text-[11px] text-slate-300 font-bold uppercase tracking-wider mt-0.5">Certificates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto py-4 custom-scrollbar shrink-0 relative z-20">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                    : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-gray-500"}`} />
                <span>{tab.label}</span>
                {tab.id === "mylearning" && enrolledCourses.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-blue-500 text-white text-[10px] font-black">
                    {enrolledCourses.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab View: My Learning & Certificates */}
        {activeTab === "mylearning" && (
          <div className="flex flex-col gap-8">
            {/* Earned Certificates Section */}
            {certificates.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Your Official Certificates of Completion ({certificates.length})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-5 rounded-2xl bg-white border border-amber-200 shadow-md shadow-amber-500/5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-bold text-amber-700 uppercase tracking-wider mb-2">
                          <span>{cert.company}</span>
                          <span className="font-mono">ID: {cert.credentialId.slice(0, 12)}</span>
                        </div>
                        <h4 className="font-black text-sm text-gray-900 line-clamp-2">
                          {cert.courseTitle}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">Issued to {cert.recipientName} on {cert.issuedAt}</p>
                      </div>

                      <button
                        onClick={() => setViewingCert(cert)}
                        className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>View & Print Certificate</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* In-Progress Courses */}
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span>Courses In Progress ({enrolledCourses.length})</span>
              </h3>

              {enrolledCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {enrolledCourses.map((course, index) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      index={index}
                      onOpenClassroom={(c) => router.push(`/courses/${c.id}`)}
                      progress={getCourseProgress(course.id)}
                      matchScore={matchMap.get(course.id)?.matchScore}
                      matchReason={matchMap.get(course.id)?.recommendationReason}
                    />
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-white rounded-3xl border border-gray-200/80">
                  <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <h4 className="font-extrabold text-base text-gray-900">No courses started yet</h4>
                  <p className="text-xs text-gray-500 mt-1 mb-4">Click "Start Learning" on any playlist to track progress and earn certificates.</p>
                  <button
                    onClick={() => setActiveTab("all")}
                    className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Browse All Courses
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab View: Learning Paths */}
        {activeTab === "paths" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {learningPaths.map((path, index) => (
              <LearningPathCard key={path.id} path={path} index={index} />
            ))}
          </div>
        )}

        {/* Standard Course Catalog View */}
        {activeTab !== "mylearning" && activeTab !== "paths" && (
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Filter Sidebar */}
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              isOpen={showFilters}
              onClose={() => setShowFilters(false)}
            />

            {/* Course Grid */}
            <div className="flex-1 min-w-0 w-full flex flex-col gap-4">
              {/* Search Bar & Mobile Filter Trigger */}
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                  />
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="md:hidden p-3 rounded-2xl bg-white border border-gray-200 text-gray-700 hover:text-blue-600 flex items-center gap-2 text-xs font-bold shadow-xs cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filters</span>
                </button>
              </div>

              {/* Courses Grid */}
              {filteredPlaylists.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filteredPlaylists.map((course, index) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      index={index}
                      onOpenClassroom={(c) => router.push(`/courses/${c.id}`)}
                      progress={getCourseProgress(course.id)}
                      matchScore={matchMap.get(course.id)?.matchScore}
                      matchReason={matchMap.get(course.id)?.recommendationReason}
                    />
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-white rounded-3xl border border-gray-200/80">
                  <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <h4 className="font-extrabold text-base text-gray-900">No courses match your filters</h4>
                  <p className="text-xs text-gray-500 mt-1 mb-4">Try clearing some search terms or filters.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setFilters({ search: "", company: "", category: "", difficulty: "", duration: "", certificateOnly: false, freeOnly: false, language: "" });
                    }}
                    className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      </div>

      {/* Verifiable Certificate Modal */}
      {viewingCert && (
        <CertificateModal
          isOpen={!!viewingCert}
          onClose={() => setViewingCert(null)}
          certificate={viewingCert}
        />
      )}

      {/* Onboarding & Resume Upload Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onComplete={() => setActiveTab("recommended")}
      />

      {/* User Profile Drawer */}
      <UserProfileDrawer
        isOpen={isProfileDrawerOpen}
        onClose={() => setIsProfileDrawerOpen(false)}
        onOpenResumeUpload={() => {
          setIsProfileDrawerOpen(false);
          setIsOnboardingOpen(true);
        }}
        onViewCertificate={(cert) => setViewingCert(cert)}
      />
    </div>
  );
}
