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
  User,
  Code,
  Bot,
  BarChart3,
  Globe,
  Terminal,
  Cpu
} from "lucide-react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MobileDock } from "@/components/layout/MobileDock";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { CompanyCard } from "@/components/courses/CompanyCard";
import { CourseCard } from "@/components/courses/CourseCard";
import { CategoryCard } from "@/components/courses/CategoryCard";
import { LearningPathCard } from "@/components/courses/LearningPathCard";
import { ResourceCard } from "@/components/courses/ResourceCard";
import { SearchBar } from "@/components/courses/SearchBar";
import { FilterSidebar } from "@/components/courses/FilterSidebar";
import { RecommendationSection } from "@/components/courses/RecommendationSection";
import { CompanyLogoSvg } from "@/components/courses/CompanyLogoSvg";
import { companies, categories, learningPaths, resources } from "@/data/data";
import { getAllCourses } from "@/lib/courseData";
import { Course } from "@/data/types";
import { LearningFilters } from "@/data/types";
import { useAuth, UserCertificate } from "@/database/authContext";
import { getRecommendedCourses, calculateCourseMatch } from "@/backend/recommendations";
import { CertificateModal } from "@/components/courses/CertificateModal";
import { OnboardingModal } from "@/components/profile/OnboardingModal";

const categoryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  programming: Code,
  ai: Bot,
  "data-analytics": BarChart3,
  "web-dev": Globe,
  devops: Terminal,
  "data-science": Cpu,
};

const tabs = [
  { id: "all", label: "All Playlists", icon: BookOpen },
  { id: "recommended", label: "Recommended for You", icon: Sparkles },
  { id: "mylearning", label: "My Learning & Certificates", icon: GraduationCap },
  { id: "trending", label: "Trending", icon: TrendingUp },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "paths", label: "Career Paths", icon: Target },
];

export default function CoursesPage() {
  const router = useRouter();
  const { user, profile, courseProgress, certificates, getCourseProgress } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState("data-science");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const [playlists, setPlaylists] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    async function load() {
      const data = await getAllCourses();
      setPlaylists(data);
      setLoading(false);
    }
    load();
  }, []);

  // Layout State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem("careermap_sidebar_hidden");
      if (saved === "true") {
        setIsSidebarHidden(true);
      }
    } catch (e) {
      console.error("Error loading sidebar preference", e);
    }
  }, []);

  const handleToggleSidebar = () => {
    setIsSidebarHidden((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("careermap_sidebar_hidden", String(next));
      } catch (e) {
        console.error("Error saving sidebar preference", e);
      }
      return next;
    });
  };

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
      const match = calculateCourseMatch(p as any, profile?.skills, profile?.targetRole);
      map.set(p.courseId, {
        matchScore: match.matchScore,
        recommendationReason: match.recommendationReason,
      });
    });
    return map;
  }, [profile, playlists]);

  // Enrolled / In-progress courses
  const enrolledCourses = useMemo(() => {
    return playlists.filter((p) => (courseProgress[p.courseId]?.progressPercent || 0) > 0);
  }, [courseProgress, playlists]);

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
          p.instructor?.toLowerCase().includes(q) ||
          p.jobRoles?.some((r) => r.toLowerCase().includes(q));
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
        const scoreA = matchMap.get(a.courseId)?.matchScore || 0;
        const scoreB = matchMap.get(b.courseId)?.matchScore || 0;
        return scoreB - scoreA;
      });
    }

    return list;
  }, [effectiveSearch, filters, activeTab, profile, matchMap, playlists]);

  return (
    <div className="flex h-screen w-screen overflow-hidden antialiased font-sans bg-[#FAF8F5] dark:bg-black">
      <AppSidebar
        activeTab="courses"
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isSidebarHidden={isSidebarHidden}
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
          title="Certification Courses"
          user={user || profile}
          hasResume={!!profile?.resumeName}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onOpenResumeUpload={() => setIsOnboardingOpen(true)}
          isSidebarHidden={isSidebarHidden}
          onToggleSidebar={handleToggleSidebar}
        />
        <main className="flex-1 overflow-y-auto p-3 sm:p-5 lg:p-8 pb-28 md:pb-8 flex flex-col gap-6 sm:gap-8 custom-scrollbar relative bg-[#FAF8F5] dark:bg-black">
        
        {/* Personalized Resume Hero Banner (Dashboard aesthetic) */}
        <section className="relative z-10 shrink-0 rounded-2xl sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-[#EFF5FF] via-[#F8FAFF] to-white dark:bg-gradient-to-b dark:from-[#151518] dark:via-[#121215] dark:to-[#0D0D10] text-gray-900 dark:text-white shadow-sm border border-slate-200/80 dark:border-white/10 group">
          <div className="relative z-10 p-4 sm:p-6 lg:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-10">
            <div className="w-full max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-orange-500/10 border border-blue-200/60 dark:border-orange-500/20 text-blue-700 dark:text-orange-400 text-xs font-bold mb-4 shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-orange-400 shrink-0" />
                <span className="tracking-wide">Industry-Standard Free Curriculums</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-gray-900 dark:text-white mb-3 leading-[1.15]"
              >
                {profile?.displayName
                  ? <>Welcome, <span className="text-blue-600 dark:text-orange-500">{profile.displayName}</span>!</>
                  : <>Master <span className="text-blue-600 dark:text-orange-500">High-Demand</span> Tech Skills</>}
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-6 max-w-xl"
              >
                {profile?.skills?.length
                  ? `Based on your resume, we matched ${filteredPlaylists.length} free certification courses aligned with your ${profile.targetRole || "career"} track. Study directly in our embedded theater & earn verifiable certificates.`
                  : "Explore 100+ free official courses from leading engineering teams. Complete interactive lessons and claim your verified Certificate of Completion."}
              </motion.p>

              {/* Skills Chips or Upload CTA */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
              {profile?.skills && profile.skills.length > 0 ? (
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-2xl p-3 sm:rounded-full sm:px-5 sm:py-2.5 w-full md:w-max overflow-hidden">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Target:</span>
                    <span className="text-[10px] sm:text-xs font-extrabold px-2.5 sm:px-3 py-0.5 rounded-full bg-blue-50 dark:bg-orange-500/20 text-blue-700 dark:text-orange-400 border border-blue-200 dark:border-orange-500/20">
                      {profile.targetRole || "Software Engineer"}
                    </span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-slate-200 dark:bg-white/10 shrink-0" />
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap min-w-0">
                    <span className="hidden sm:inline-block text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider shrink-0">Skills:</span>
                    {profile.skills.slice(0, 3).map((s) => (
                      <span key={s} className="text-[9px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-slate-200/80 dark:border-white/10 whitespace-nowrap">
                        {s}
                      </span>
                    ))}
                    {profile.skills.length > 3 && (
                      <span className="text-[9px] sm:text-[11px] font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap">+{profile.skills.length - 3}</span>
                    )}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsOnboardingOpen(true)}
                  className="w-full sm:w-auto justify-center px-6 py-3 rounded-full bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white font-black text-xs sm:text-sm flex items-center gap-2 active:scale-95 transition-all shadow-md cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Upload Resume for Match</span>
                </button>
              )}
              </motion.div>
            </div>

            {/* Quick Metrics Badge matching dashboard rounded-[28px] */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0 w-full md:w-auto"
            >
              <div className="p-3 sm:p-5 rounded-2xl sm:rounded-[28px] bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xs">
                <p className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white relative z-10">{enrolledCourses.length}</p>
                <p className="text-[10px] sm:text-xs text-blue-600 dark:text-orange-400 font-extrabold uppercase tracking-widest mt-1 relative z-10">Enrolled</p>
              </div>
              <div className="p-3 sm:p-5 rounded-2xl sm:rounded-[28px] bg-slate-50 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex flex-col items-center justify-center relative overflow-hidden shadow-2xs">
                <p className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white relative z-10">{certificates.length}</p>
                <p className="text-[10px] sm:text-xs text-amber-500 font-extrabold uppercase tracking-widest mt-1 relative z-10">Certificates</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Tabs (Dashboard styled pills: Light mode blue, Dark mode orange) */}
        <div className="flex items-center gap-2 overflow-x-auto py-2 custom-scrollbar shrink-0 relative z-20 -mx-3 px-3 sm:mx-0 sm:px-0 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-600 dark:bg-orange-600 text-white shadow-md shadow-blue-600/25 dark:shadow-orange-600/30"
                    : "bg-white dark:bg-[#151518] text-gray-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white border border-slate-200/80 dark:border-white/10"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-gray-500 dark:text-zinc-400"}`} />
                <span>{tab.label}</span>
                {tab.id === "mylearning" && enrolledCourses.length > 0 && (
                  <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-white text-[10px] font-black">
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
                <h3 className="text-base font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span>Your Official Certificates of Completion ({certificates.length})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certificates.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-5 rounded-2xl liquid-glass flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider mb-2">
                          <span>{cert.company}</span>
                          <span className="font-mono">ID: {cert.credentialId.slice(0, 12)}</span>
                        </div>
                        <h4 className="font-black text-sm text-gray-900 dark:text-white line-clamp-2">
                          {cert.courseTitle}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1">Issued to {cert.recipientName} on {cert.issuedAt}</p>
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
              <h3 className="text-base font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-orange-500" />
                <span>Courses In Progress ({enrolledCourses.length})</span>
              </h3>

              {enrolledCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {enrolledCourses.map((course, index) => (
                    <CourseCard
                      key={course.courseId}
                      course={course}
                      index={index}
                      onOpenClassroom={(c) => router.push(`/courses/${c.courseId}`)}
                      progress={getCourseProgress(course.courseId)}
                      matchScore={matchMap.get(course.courseId)?.matchScore}
                      matchReason={matchMap.get(course.courseId)?.recommendationReason}
                    />
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-white dark:bg-[#0c0c0e] rounded-3xl border border-gray-200/80 dark:border-white/10">
                  <GraduationCap className="w-12 h-12 text-gray-400 dark:text-zinc-600 mx-auto mb-3" />
                  <h4 className="font-extrabold text-base text-gray-900 dark:text-white">No courses started yet</h4>
                  <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1 mb-4">Click "Start Learning" on any playlist to track progress and earn certificates.</p>
                  <button
                    onClick={() => setActiveTab("all")}
                    className="px-5 py-2.5 bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white rounded-xl text-xs font-bold cursor-pointer transition-all"
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
          <div className="flex flex-col gap-4">
            {/* Search Bar & Filter Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex-1 min-w-0">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                />
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-3 rounded-2xl bg-white dark:bg-[#151518] border border-slate-200/80 dark:border-white/10 text-gray-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-orange-400 flex items-center gap-2 text-xs font-bold shadow-xs cursor-pointer shrink-0 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>

            {/* Horizontal Category Chip Bar */}
            <div className="flex items-center gap-2 overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0 py-1 scrollbar-hide">
              <button
                onClick={() => { setSelectedCategory(""); setFilters({ ...filters, category: "" }); }}
                className={`px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer border shrink-0 ${
                  !selectedCategory
                    ? "bg-blue-600 dark:bg-orange-600 text-white border-blue-600 dark:border-orange-600 shadow-md shadow-blue-600/20 dark:shadow-orange-600/25"
                    : "bg-white dark:bg-[#151518] text-gray-700 dark:text-zinc-300 border-slate-200/80 dark:border-white/10 hover:border-blue-400 dark:hover:border-orange-500/50"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>All Courses</span>
                <span className="text-[10px] opacity-70">({playlists.length})</span>
              </button>
              {categories.map((cat) => {
                const CatIcon = categoryIconMap[cat.id] || BookOpen;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      const newCat = selectedCategory === cat.id ? "" : cat.id;
                      setSelectedCategory(newCat);
                      setFilters({ ...filters, category: newCat });
                    }}
                    className={`px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer border shrink-0 ${
                      selectedCategory === cat.id
                        ? "bg-blue-600 dark:bg-orange-600 text-white border-blue-600 dark:border-orange-600 shadow-md shadow-blue-600/20 dark:shadow-orange-600/25"
                        : "bg-white dark:bg-[#151518] text-gray-700 dark:text-zinc-300 border-slate-200/80 dark:border-white/10 hover:border-blue-400 dark:hover:border-orange-500/50"
                    }`}
                  >
                    <CatIcon className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Filter Drawer (slide-over) */}
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              isOpen={showFilters}
              onClose={() => setShowFilters(false)}
            />

            {/* Courses Grid — cards capped at max-w-[420px] */}
            {filteredPlaylists.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                {filteredPlaylists.map((course, index) => (
                  <CourseCard
                    key={course.courseId}
                    course={course}
                    index={index}
                    onOpenClassroom={(c) => router.push(`/courses/${c.courseId}`)}
                    progress={getCourseProgress(course.courseId)}
                    matchScore={matchMap.get(course.courseId)?.matchScore}
                    matchReason={matchMap.get(course.courseId)?.recommendationReason}
                  />
                ))}
              </div>
            ) : (
              <div className="p-8 sm:p-12 text-center bg-white dark:bg-[#0c0c0e] rounded-2xl sm:rounded-3xl border border-gray-200/80 dark:border-white/10">
                <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 dark:text-zinc-600 mx-auto mb-3" />
                <h4 className="font-extrabold text-sm sm:text-base text-gray-900 dark:text-white">No courses match your filters</h4>
                <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1 mb-4">Try clearing some search terms or filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("");
                    setFilters({ search: "", company: "", category: "", difficulty: "", duration: "", certificateOnly: false, freeOnly: false, language: "" });
                  }}
                  className="px-5 py-2.5 bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white rounded-xl text-xs font-bold cursor-pointer transition-all"
                >
                  Reset Filters
                </button>
              </div>
            )}
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

      {/* Mobile Dock */}
      <MobileDock
        activeTab="courses"
        onTabChange={(tab) => {
          if (tab === "courses") return;
          router.push(`/dashboard?tab=${tab}`);
        }}
        onOpenProfile={() => router.push("/profile")}
      />
    </div>
  );
}
