"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Job, generateJobsNearCoordinates } from "@/lib/mockData";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { InteractiveMap } from "@/components/maps/InteractiveMap";
import { JobCardRow } from "@/components/jobs/JobCardRow";
import { JobDetailOverlay } from "@/components/jobs/JobDetailOverlay";
import { CompaniesView } from "@/components/views/CompaniesView";
import { AllJobsView } from "@/components/views/AllJobsView";
import { SavedJobsView } from "@/components/views/SavedJobsView";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [inspectedJob, setInspectedJob] = useState<Job | null>(null);
  const [activeTab, setActiveTab] = useState("map");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [savedJobIds, setSavedJobIds] = useState<Set<string>>(new Set());
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Read query params on initial load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");
      const companyParam = params.get("company");
      if (tabParam && ["map", "companies", "saved", "jobs", "search"].includes(tabParam)) {
        setActiveTab(tabParam);
      }
      if (companyParam) {
        setSearchQuery(companyParam);
      }
    }
  }, []);

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
        console.error("Error saving to localStorage", e);
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
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

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
            latitude: lat,
            zoom: 9.5
          }));

          fetchRealJobs(lat, lng);
        },
        (error) => {
          console.error("Geolocation error:", error);
          fetchRealJobs(22.5726, 88.3639);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      fetchRealJobs(22.5726, 88.3639);
    }
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q);

      const matchesFilter =
        activeFilter === "All" || job.type === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [jobs, searchQuery, activeFilter]);

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

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("tab", tab);
      window.history.replaceState({}, "", url.toString());
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#EEF2F6] font-sans text-gray-900 overflow-hidden select-none">
      {/* 1. Left Navigation Sidebar */}
      <AppSidebar
        activeTab={activeTab}
        onTabChange={(tab) => {
          handleTabChange(tab);
          setIsMobileMenuOpen(false);
        }}
        onSearchChange={(q) => {
          setSearchQuery(q);
        }}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* 2. Main Dashboard Layout Area */}
      <div className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
        {/* Top Header */}
        <DashboardHeader
          title={getHeaderTitle()}
          nearestDistanceKm={nearestDistance}
          user={currentUser}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        {/* Central Content Area Switcher */}
        {activeTab === "map" && (
          <main className="flex-1 flex flex-col p-4 gap-4 overflow-hidden min-h-0">
            {/* Upper: Embedded Interactive Map */}
            <div className="flex-1 w-full min-h-[300px] relative rounded-3xl overflow-hidden shadow-sm">
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
              />
            </div>

            {/* Lower: Horizontal Job Cards Deck */}
            <div className="shrink-0 w-full">
              <div className="flex items-center justify-between px-1 mb-2">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                  Explore Opportunities ({filteredJobs.length})
                </span>
                <span className="text-[11px] font-semibold text-blue-600">
                  Sorted by Proximity
                </span>
              </div>
              <JobCardRow
                jobs={filteredJobs}
                selectedJob={selectedJob}
                onJobSelect={handleJobSelect}
                onOpenDetails={handleOpenDetails}
                savedJobIds={savedJobIds}
                onToggleSave={handleToggleSave}
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
