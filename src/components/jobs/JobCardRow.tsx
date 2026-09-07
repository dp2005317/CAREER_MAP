"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MoreHorizontal, ExternalLink, MapPin, DollarSign, Bookmark, ArrowRight } from "lucide-react";
import { Job } from "@/backend/mockData";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { getExactJobApplyUrl } from "@/backend/jobUrls";
import { calculateJobMatch } from "@/backend/recommendations";
import { Sparkles } from "lucide-react";

interface JobCardRowProps {
  jobs: Job[];
  selectedJob: Job | null;
  onJobSelect: (job: Job) => void;
  onOpenDetails?: (job: Job) => void;
  savedJobIds?: Set<string>;
  onToggleSave?: (jobId: string) => void;
  userSkills?: string[];
  targetRole?: string;
}

function formatSalaryBadge(salary?: string) {
  if (!salary || salary.toLowerCase().includes("not") || salary.toLowerCase().includes("undisclosed")) {
    return "Competitive";
  }
  const parts = salary.split(" ");
  return parts[0] || "Competitive";
}

export function JobCardRow({
  jobs,
  selectedJob,
  onJobSelect,
  onOpenDetails,
  savedJobIds,
  onToggleSave,
  userSkills,
  targetRole
}: JobCardRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (!jobs || jobs.length === 0) {
    return (
      <div className="h-44 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-2xl border border-gray-200/60 text-gray-500 text-sm font-medium">
        No job opportunities found matching your criteria.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Scrollable Cards Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-3 pt-1 px-1 custom-scrollbar scroll-smooth"
      >
        {jobs.map((job) => {
          const isSelected = selectedJob?.id === job.id;

          return (
            <motion.div
              key={job.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => onJobSelect(job)}
              className={`min-w-[280px] max-w-[320px] rounded-3xl p-4 transition-all flex flex-col justify-between cursor-pointer shrink-0 ${
                isSelected
                  ? "neu-card ring-2 ring-blue-500/40 bg-blue-50/20"
                  : "neu-card-sm hover:neu-card"
              }`}
            >
              {/* Header: Logo + Company Name + Options */}
              <div className="flex items-center justify-between gap-3 mb-2.5">
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

                <div className="flex items-center gap-1.5">
                  {onToggleSave && (
                    <button
                      type="button"
                      title={savedJobIds?.has(job.id) ? "Remove from Saved" : "Save Job"}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(job.id);
                      }}
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                        savedJobIds?.has(job.id)
                          ? "neu-icon-btn text-blue-600 bg-blue-50/80 ring-1 ring-blue-500/30"
                          : "neu-icon-btn text-gray-400 hover:text-blue-600"
                      }`}
                    >
                      <Bookmark
                        size={14}
                        className={savedJobIds?.has(job.id) ? "fill-blue-600 text-blue-600" : ""}
                      />
                    </button>
                  )}

                  <button
                    type="button"
                    title="View details"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenDetails) onOpenDetails(job);
                    }}
                    className="w-8 h-8 neu-icon-btn text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
                  >
                    <MoreHorizontal className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Body: Title & Meta Info */}
              <div className="mb-3">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-gray-900 text-sm line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  {userSkills && userSkills.length > 0 && (() => {
                    const match = calculateJobMatch(job, userSkills, targetRole);
                    if (match.matchScore >= 50) {
                      return (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500 text-white shrink-0 shadow-xs flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{match.matchScore}%</span>
                        </span>
                      );
                    }
                    return null;
                  })()}
                </div>
                
                <div className="flex items-center gap-2 mt-1.5 text-[11px] font-semibold text-gray-500 flex-wrap">
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60 font-bold">
                    {formatSalaryBadge(job.salary)}
                  </span>
                  {job.distance !== undefined && job.distance < 99999 && (
                    <span className="text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200/60 font-bold">
                      {Math.round(job.distance)} km
                    </span>
                  )}
                  <span className="text-gray-500 text-[10px] font-medium truncate">
                    {job.type}
                  </span>
                </div>

                {userSkills && userSkills.length > 0 && (() => {
                  const match = calculateJobMatch(job, userSkills, targetRole);
                  if (match.matchedSkills.length > 0) {
                    return (
                      <div className="flex items-center gap-1 overflow-hidden mt-2">
                        {match.matchedSkills.slice(0, 2).map((s) => (
                          <span key={s} className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60 truncate">
                            ✓ {s}
                          </span>
                        ))}
                        {match.matchedSkills.length > 2 && (
                          <span className="text-[9px] font-bold text-gray-400">
                            +{match.matchedSkills.length - 2}
                          </span>
                        )}
                      </div>
                    );
                  }
                  return null;
                })()}
              </div>

              {/* Footer: Apply Button & Details */}
              <div className="flex items-center gap-2 pt-2.5 border-t border-slate-100">
                <a
                  href={getExactJobApplyUrl(job)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 neu-btn-primary text-xs font-bold py-2.5 px-3 text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Apply</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenDetails) onOpenDetails(job);
                  }}
                  className="px-3.5 py-2.5 neu-btn text-gray-700 text-xs font-bold transition-all cursor-pointer"
                >
                  Details
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
