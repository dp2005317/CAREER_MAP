"use client";

import React, { useState, useMemo } from "react";
import { Job } from "@/lib/mockData";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { getExactJobApplyUrl } from "@/lib/jobUrls";
import { 
  Search, 
  MapPin, 
  ExternalLink, 
  Bookmark, 
  MoreHorizontal
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
    <div className="flex-1 flex flex-col p-6 overflow-y-auto custom-scrollbar bg-[#EEF2F6]">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            All Job Openings ({filtered.length})
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Browse verified opportunities across India with direct 1-click ATS application links.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search title, company..."
              className="pl-9 pr-3.5 py-2.5 bg-slate-100/90 text-xs font-semibold text-gray-800 rounded-2xl shadow-[inset_2px_2px_5px_rgba(163,177,198,0.4),inset_-2px_-2px_5px_rgba(255,255,255,0.9)] border border-white/60 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 neu-pill p-1.5">
            {["All", "Full Time", "Internship", "Remote"].map((r) => (
              <button
                key={r}
                onClick={() => setRoleFilter(r)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  roleFilter === r
                    ? "neu-btn-primary"
                    : "text-gray-600 hover:text-gray-900"
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
          <p className="font-bold text-gray-800 text-sm">No jobs match your criteria.</p>
          <p className="text-xs text-gray-400 mt-1">Try clearing search filters or search another query.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((job) => {
            const isSaved = savedJobIds.has(job.id);
            return (
              <motion.div
                key={job.id}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                onClick={() => onOpenDetails(job)}
                className="neu-card-sm p-5 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <CompanyLogo company={job.company} logoUrl={job.logo} size="sm" />
                      <div className="min-w-0">
                        <h4 className="font-bold text-gray-900 text-xs truncate">
                          {job.company}
                        </h4>
                        <span className="text-[10px] font-medium text-gray-400 block truncate">
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
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                        isSaved
                          ? "neu-icon-btn text-blue-600 bg-blue-50/80 ring-1 ring-blue-500/30"
                          : "neu-icon-btn text-gray-400 hover:text-blue-600"
                      }`}
                    >
                      <Bookmark
                        size={14}
                        className={isSaved ? "fill-blue-600 text-blue-600" : ""}
                      />
                    </button>
                  </div>

                  <h3 className="font-bold text-gray-900 text-sm mb-1.5 line-clamp-1">
                    {job.title}
                  </h3>

                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-3">
                    {job.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500">
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 font-bold">
                      {formatSalaryBadge(job.salary)}
                    </span>
                    <span className="text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md font-medium">
                      {job.type}
                    </span>
                    {job.distance !== undefined && job.distance < 99999 && (
                      <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100 font-bold">
                        {Math.round(job.distance)} km
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={getExactJobApplyUrl(job)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 neu-btn-primary text-xs font-bold py-2 px-3 text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenDetails(job);
                    }}
                    className="px-3.5 py-2 neu-btn text-gray-700 text-xs font-bold transition-all cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
