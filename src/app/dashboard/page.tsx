"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Job, generateJobsNearCoordinates } from "@/backend/mockData";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { InteractiveMap } from "@/components/maps/InteractiveMap";
import { JobCardRow } from "@/components/jobs/JobCardRow";
import { JobDetailOverlay } from "@/components/jobs/JobDetailOverlay";
import { CompaniesView } from "@/components/views/CompaniesView";
import { AllJobsView } from "@/components/views/AllJobsView";
import { SavedJobsView } from "@/components/views/SavedJobsView";
import { StudentDashboardView } from "@/components/views/StudentDashboardView";
import { useRouter } from "next/navigation";
import { useAuth, UserCertificate } from "@/database/authContext";
import { OnboardingModal } from "@/components/profile/OnboardingModal";
import { UserProfileDrawer } from "@/components/profile/UserProfileDrawer";
import { CertificateModal } from "@/components/courses/CertificateModal";
import { calculateJobMatch } from "@/backend/recommendations";

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, certificates, courseProgress } = useAuth();

  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [inspectedJob, setInspectedJob] = useState<Job | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [savedJobIds, setSavedJobIds] = useState<Set<string>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modals
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);
  const [viewingCertificate, setViewingCertificate] = useState<UserCertificate | null>(null);

  // Read query params on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      const companyParam = params.get("company");
      const onboardingParam = params.get("onboarding");

      if (tabParam && ["overview", "map", "companies", "saved", "jobs", "search"].includes(tabParam)) {
        setActiveTab(tabParam);
      }
      if (companyParam) {
        setSearchQuery(companyParam);
      }
      if (onboardingParam === "prompt") {
        setIsOnboardingOpen(true);
      }
    }
  }, []);

  // Auto prompt onboarding if user has logged in but has no skills/resume
  useEffect(() => {
    if (user && profile && !profile.skills?.length && !profile.resumeName) {
      const hasDismissed = sessionStorage.getItem("careermap_onboarding_dismissed");
      if (!hasDismissed) {
        setIsOnboardingOpen(true);
        sessionStorage.setItem("careermap_onboarding_dismissed", "true");
      }
    }
  }, [user, profile]);

  // Load saved jobs from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("careermap_saved_jobs");
      if (stored) {
        setSavedJobIds(new Set(JSON.parse(stored)));
      }
    } catch (e) {
      console.error("Error loading saved jobs", e);
    }
  }, []);

  const handleToggleSave = (jobId: string) => {
    if (!user) {
      router.push("/login?redirect=/dashboard");
      return;
    }
    if (!profile?.skills?.length && !profile?.resumeName) {
      setIsOnboardingOpen(true);
      return;
    }

    setSavedJobIds((prev) => {
      const next = new Set(prev);
      if (next.has(jobId)) {
        next.delete(jobId);
      } else {
        next.add(jobId);
      }
      try {
        localStorage.setItem("careermap_saved_jobs", JSON.stringify(Array.from(next)));
      } catch (e) {
        console.error("Error saving job", e);
      }
      return next;
    });
  };

  const [viewState, setViewState] = useState({
    longitude: 88.3639,
    latitude: 22.5726,
    zoom: 9.5,
    pitch: 0,
    bearing: 0
  });

  useEffect(() => {
    const fetchRealJobs = async (lat: number, lng: number) => {
      try {
        const response = await fetch(`/api/jobs?lat=${lat}&lng=${lng}`);
        const data = await response.json();
        if (data.jobs && data.jobs.length > 0) {
          setJobs(data.jobs);
          setSelectedJob(data.jobs[0]);
        } else {
          const fallback = generateJobsNearCoordinates(lat, lng);
          setJobs(fallback);
          if (fallback.length > 0) setSelectedJob(fallback[0]);
        }
      } catch (error) {
        console.error("Error fetching real jobs:", error);
        const fallback = generateJobsNearCoordinates(lat, lng);
        setJobs(fallback);
        if (fallback.length > 0) setSelectedJob(fallback[0]);
      } finally {
        setIsLoadingLocation(false);
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          setViewState((prev) => ({
            ...prev,
            longitude: lng,
            latitude: lat
          }));

          fetchRealJobs(lat, lng);
        },
        () => {
          fetchRealJobs(22.5726, 88.3639);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      fetchRealJobs(22.5726, 88.3639);
    }
  }, []);

  const filteredJobs = useMemo(() => {
    let result = jobs.filter((job) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q);

      if (!matchesSearch) return false;

      if (activeFilter === "Recommended") return true;
      if (activeFilter === "All") return true;
      return job.type === activeFilter;
    });

    // If Recommended filter is active, sort by highest match score
    if (activeFilter === "Recommended" && profile?.skills?.length) {
      result = [...result].sort((a, b) => {
        const scoreA = calculateJobMatch(a, profile.skills, profile.targetRole).matchScore;
        const scoreB = calculateJobMatch(b, profile.skills, profile.targetRole).matchScore;
        return scoreB - scoreA;
      });
    }

    return result;
  }, [jobs, searchQuery, activeFilter, profile]);

  const savedJobsList = useMemo(() => {
    return jobs.filter((j) => savedJobIds.has(j.id));
  }, [jobs, savedJobIds]);

  const nearestDistance = useMemo(() => {
    const withDistance = jobs.filter(
      (j) => j.distance !== undefined && j.distance !== null && j.distance < 99999
    );
    if (withDistance.length > 0) {
      return withDistance[0].distance;
    }
    return null;
  }, [jobs]);

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
    if (job.lat && job.lng) {
      setViewState((prev) => ({
        ...prev,
        longitude: job.lng!,
        latitude: job.lat!,
        zoom: 10.5
      }));
    }
  };

  const handleOpenDetails = (job: Job) => {
    setSelectedJob(job);
    setInspectedJob(job);
  };

  const handleSelectCompany = (companyName: string) => {
    setSearchQuery(companyName);
    setActiveTab("jobs");
  };

  const getHeaderTitle = () => {
    switch (activeTab) {
      case "overview":
        return "Student Dashboard";
      case "saved":
        return "Saved Opportunities";
      case "companies":
        return "Companies Directory";
      case "jobs":
        return "All Job Openings";
      case "search":
        return "Search Roles";
      default:
        return "Filter & Map!";
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#EEF2F6] text-gray-800 antialiased font-sans">
      {/* Dynamic Left Sidebar */}
      <AppSidebar
        activeTab={activeTab}
        onTabChange={(tab) => {
          if (!user && tab !== "map") {
            router.push("/login?redirect=/dashboard");
            return;
          }
          if (tab !== "map" && tab !== "overview" && !profile?.skills?.length && !profile?.resumeName) {
            setIsOnboardingOpen(true);
            return;
          }
          setActiveTab(tab);
          setIsMobileMenuOpen(false);
        }}
        onSearchChange={(q) => {
          if (!user) {
            router.push("/login?redirect=/dashboard");
            return;
          }
          if (!profile?.skills?.length && !profile?.resumeName) {
            setIsOnboardingOpen(true);
            return;
          }
          setSearchQuery(q);
        }}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        {/* Header */}
        <DashboardHeader
          title={getHeaderTitle()}
          nearestDistanceKm={nearestDistance}
          user={user || profile}
          hasResume={!!profile?.resumeName}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onOpenProfileDrawer={() => setIsProfileDrawerOpen(true)}
          onOpenResumeUpload={() => setIsOnboardingOpen(true)}
        />

        {/* Tab 0: Overview View */}
        {activeTab === "overview" && (
          <StudentDashboardView
            user={user}
            profile={profile}
            savedJobs={savedJobsList}
            certificates={certificates}
            courseProgress={courseProgress}
            onGoToSavedJobs={() => setActiveTab("saved")}
            onGoToCourses={() => router.push("/courses")}
            onOpenProfile={() => setIsProfileDrawerOpen(true)}
            onOpenJob={handleOpenDetails}
            onOpenCertificate={setViewingCertificate}
          />
        )}

        {/* Tab 1: Map View */}
        {activeTab === "map" && (
          <main className="flex-1 flex flex-col min-h-0 relative p-3 sm:p-4 gap-3 sm:gap-4 overflow-hidden">
            {/* Top Area: Map View */}
            <div className="flex-1 min-h-0 relative rounded-3xl overflow-hidden">
              <InteractiveMap
                jobs={filteredJobs}
                selectedJob={selectedJob}
                onJobSelect={handleJobSelect}
                viewState={viewState}
                onMove={(evt) => setViewState(evt.viewState)}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                hasResumeSkills={!!profile?.skills?.length}
              />
            </div>

            {/* Bottom Area: Job Card Row */}
            <div className="h-auto shrink-0 z-10">
              <JobCardRow
                jobs={filteredJobs}
                selectedJob={selectedJob}
                onJobSelect={handleJobSelect}
                onOpenDetails={handleOpenDetails}
                savedJobIds={savedJobIds}
                onToggleSave={handleToggleSave}
                userSkills={profile?.skills}
                targetRole={profile?.targetRole}
              />
            </div>
          </main>
        )}

        {activeTab === "companies" && (
          <CompaniesView
            jobs={jobs}
            onSelectCompany={handleSelectCompany}
          />
        )}

        {(activeTab === "jobs" || activeTab === "search") && (
          <AllJobsView
            jobs={filteredJobs}
            savedJobIds={savedJobIds}
            onToggleSave={handleToggleSave}
            onOpenDetails={handleOpenDetails}
          />
        )}

        {activeTab === "saved" && (
          <SavedJobsView
            savedJobs={savedJobsList}
            onRemoveSave={handleToggleSave}
            onOpenDetails={handleOpenDetails}
            onGoToMap={() => setActiveTab("map")}
          />
        )}
      </div>

      {/* Job Detail Modal Overlay */}
      <JobDetailOverlay
        job={inspectedJob}
        onClose={() => setInspectedJob(null)}
        isSaved={inspectedJob ? savedJobIds.has(inspectedJob.id) : false}
        onToggleSave={handleToggleSave}
      />

      {/* Onboarding & Resume Upload Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onComplete={() => {
          setActiveFilter("Recommended");
        }}
      />

      {/* User Profile Drawer */}
      <UserProfileDrawer
        isOpen={isProfileDrawerOpen}
        onClose={() => setIsProfileDrawerOpen(false)}
        onOpenResumeUpload={() => {
          setIsProfileDrawerOpen(false);
          setIsOnboardingOpen(true);
        }}
        onViewCertificate={(cert) => setViewingCertificate(cert)}
      />

      {/* Certificate Modal */}
      {viewingCertificate && (
        <CertificateModal
          isOpen={!!viewingCertificate}
          onClose={() => setViewingCertificate(null)}
          certificate={viewingCertificate}
        />
      )}

      {/* Loading Overlay */}
      {isLoadingLocation && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white p-5 rounded-2xl shadow-xl flex flex-col items-center gap-3">
            <div className="w-7 h-7 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-semibold text-gray-700">
              Locating you & discovering opportunities...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
