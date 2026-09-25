"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MoreHorizontal, ExternalLink, MapPin, DollarSign, Bookmark, ArrowRight } from "lucide-react";
import { Job } from "@/backend/mockData";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { getExactJobApplyUrl } from "@/backend/jobUrls";
import { calculateJobMatch } from "@/backend/recommendations";
import { Sparkles, Check } from "lucide-react";

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
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22 }}
              onClick={() => onJobSelect(job)}
              className={`min-w-[280px] max-w-[320px] liquid-glass-card p-4 transition-all flex flex-col justify-between cursor-pointer shrink-0 ${
                isSelected ? "is-selected" : ""
              }`}
            >
              {/* Header: Logo + Company Name + Options */}
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <CompanyLogo company={job.company} logoUrl={job.logo} size="sm" />
                  <div className="min-w-0">
                    <h4 className="font-extrabold text-gray-900 dark:text-white text-xs truncate">
                      {job.company}
                    </h4>
                    <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-300 block truncate">
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
                      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-md ${
                        savedJobIds?.has(job.id)
                          ? "bg-blue-500/20 text-blue-600 border border-blue-400/40 shadow-xs"
                          : "bg-white/30 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-white/40 dark:border-white/15 hover:bg-white/50"
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
                    className="w-8 h-8 rounded-xl bg-white/30 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-white/40 dark:border-white/15 hover:bg-white/50 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <MoreHorizontal className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Body: Title & Meta Info */}
              <div className="mb-3">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-sm line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">
                    {job.title}
                  </h3>
                  {userSkills && userSkills.length > 0 && (() => {
                    const match = calculateJobMatch(job, userSkills, targetRole);
                    if (match.matchScore >= 50) {
                      return (
                        <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-emerald-500 text-white shrink-0 shadow-xs flex items-center gap-1 border border-white/40">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>{match.matchScore}%</span>
                        </span>
                      );
                    }
                    return null;
                  })()}
                </div>
                
                <div className="flex items-center gap-1.5 mt-2 text-[11px] font-semibold flex-wrap">
                  <span className="text-emerald-800 dark:text-emerald-300 bg-emerald-500/15 backdrop-blur-md px-2.5 py-0.5 rounded-xl border border-emerald-400/30 font-bold shadow-2xs">
                    {formatSalaryBadge(job.salary)}
                  </span>
                  {job.distance !== undefined && job.distance < 99999 && (
                    <span className="text-purple-800 dark:text-purple-300 bg-purple-500/15 backdrop-blur-md px-2.5 py-0.5 rounded-xl border border-purple-400/30 font-bold shadow-2xs">
                      {Math.round(job.distance)} km away
                    </span>
                  )}
                  <span className="text-gray-700 dark:text-gray-300 bg-white/30 dark:bg-white/10 backdrop-blur-md px-2 py-0.5 rounded-xl border border-white/40 dark:border-white/15 text-[10px] font-medium truncate">
                    {job.type}
                  </span>
                </div>

                {userSkills && userSkills.length > 0 && (() => {
                  const match = calculateJobMatch(job, userSkills, targetRole);
                  if (match.matchedSkills.length > 0) {
                    return (
                      <div className="flex items-center gap-1 overflow-hidden mt-2">
                        {match.matchedSkills.slice(0, 2).map((s) => (
                          <span key={s} className="text-[9px] font-bold px-1.5 py-0.5 rounded-lg bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-400/30 truncate inline-flex items-center gap-0.5 backdrop-blur-xs">
                            <Check className="w-2.5 h-2.5 shrink-0" />
                            <span>{s}</span>
                          </span>
                        ))}
                        {match.matchedSkills.length > 2 && (
                          <span className="text-[9px] font-bold text-gray-500 dark:text-gray-400">
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
              <div className="flex items-center gap-2 pt-3 border-t border-white/30 dark:border-white/10">
                <a
                  href={getExactJobApplyUrl(job)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-linear-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold py-2.5 px-3 rounded-2xl shadow-md shadow-blue-500/25 border border-white/30 backdrop-blur-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
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
                  className="px-3.5 py-2.5 bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 text-gray-800 dark:text-white border border-white/50 dark:border-white/15 backdrop-blur-md rounded-2xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
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
