"use client";

import React, { useState, useMemo } from "react";
import { Job } from "@/backend/mockData";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { getExactJobApplyUrl } from "@/backend/jobUrls";
import { 
  Search, 
  MapPin, 
  ExternalLink, 
  Bookmark, 
  Building2,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

interface AllJobsViewProps {
  jobs: Job[];
  savedJobIds: Set<string>;
  onToggleSave: (jobId: string) => void;
  onOpenDetails: (job: Job) => void;
}

function formatSalaryBadge(salary?: string) {
  if (!salary || salary.toLowerCase().includes("not") || salary.toLowerCase().includes("undisclosed")) {
    return "Competitive";
  }
  const parts = salary.split(" ");
  return parts[0] || "Competitive";
}

export function AllJobsView({
  jobs,
  savedJobIds,
  onToggleSave,
  onOpenDetails
}: AllJobsViewProps) {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const q = search.toLowerCase().trim();
      const matchSearch =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q);

      const matchRole = roleFilter === "All" || j.type === roleFilter;
      return matchSearch && matchRole;
    });
  }, [jobs, search, roleFilter]);

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto custom-scrollbar bg-transparent">
      <div className="max-w-[1400px] mx-auto w-full space-y-6">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
              All Job Openings ({filtered.length})
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
              Browse verified opportunities across India with direct 1-click ATS application links.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search title, company..."
                className="w-full pl-9 pr-3.5 py-2.5 bg-white/70 dark:bg-white/5 backdrop-blur-md text-xs font-semibold text-gray-800 dark:text-white rounded-full border border-white/80 dark:border-white/10 shadow-xs focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="flex items-center gap-1 bg-white/70 dark:bg-white/5 backdrop-blur-md p-1 rounded-full border border-white/80 dark:border-white/10 shadow-xs">
              {["All", "Full Time", "Internship", "Remote"].map((r) => (
                <button
                  key={r}
                  onClick={() => setRoleFilter(r)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    roleFilter === r
                      ? "bg-white text-gray-950 shadow-sm border border-white/90 dark:bg-white/15 dark:text-white dark:border-white/15"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {r === "All" ? "All Roles" : r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        {filtered.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-12 neu-card text-center max-w-lg mx-auto">
            <p className="font-bold text-gray-800 dark:text-white text-sm">No jobs match your criteria.</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Try clearing search filters or search another query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((job) => {
              const isSaved = savedJobIds.has(job.id);
              return (
                <motion.div
                  key={job.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => onOpenDetails(job)}
                  className="neu-card p-6 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <CompanyLogo company={job.company} logoUrl={job.logo} size="md" />
                        <div className="min-w-0">
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm truncate">
                            {job.company}
                          </h4>
                          <span className="text-xs font-medium text-gray-400 dark:text-gray-500 flex items-center gap-1 mt-0.5 truncate">
                            <MapPin size={11} className="text-blue-600 dark:text-orange-400" />
                            {job.location.split(",")[0]}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        title={isSaved ? "Saved" : "Save Job"}
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleSave(job.id);
                        }}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                          isSaved
                            ? "text-blue-600 dark:text-orange-400 bg-blue-50 dark:bg-orange-500/10 border border-blue-200 dark:border-orange-500/30"
                            : "bg-slate-50 dark:bg-white/5 text-gray-400 hover:text-blue-600 dark:hover:text-orange-400"
                        }`}
                      >
                        <Bookmark
                          size={14}
                          className={isSaved ? "fill-blue-600 dark:fill-orange-400 text-blue-600 dark:text-orange-400" : ""}
                        />
                      </button>
                    </div>

                    <h3 className="font-extrabold text-gray-900 dark:text-white text-base mb-2 line-clamp-1">
                      {job.title}
                    </h3>

                    <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed mb-4 bg-slate-50 dark:bg-white/[0.02] p-3 rounded-2xl border border-slate-100 dark:border-white/5">
                      {job.description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/40">
                        {formatSalaryBadge(job.salary)}
                      </span>
                      <span className="text-[10px] font-bold bg-slate-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 px-2.5 py-0.5 rounded-full">
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
                    <a
                      href={getExactJobApplyUrl(job)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    >
                      <span>1-Click Apply</span>
                      <ExternalLink size={13} />
                    </a>

                    <button
                      onClick={() => onOpenDetails(job)}
                      className="bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-gray-800 dark:text-gray-200 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                    >
                      View
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
