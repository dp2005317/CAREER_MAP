"use client";

import React from "react";
import { Job } from "@/backend/mockData";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { getExactJobApplyUrl } from "@/backend/jobUrls";
import { Bookmark, MapPin, ExternalLink, Trash2, Map, ArrowRight, Building2, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface SavedJobsViewProps {
  savedJobs: Job[];
  onRemoveSave: (jobId: string) => void;
  onOpenDetails: (job: Job) => void;
  onGoToMap: () => void;
}

export function SavedJobsView({
  savedJobs,
  onRemoveSave,
  onOpenDetails,
  onGoToMap
}: SavedJobsViewProps) {
  if (!savedJobs || savedJobs.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#FAF8F5] dark:bg-black">
        <div className="w-16 h-16 rounded-3xl bg-white dark:bg-[#151518] border border-slate-200/70 dark:border-white/10 flex items-center justify-center mb-4 text-blue-600 dark:text-orange-400 shadow-sm">
          <Bookmark size={28} className="stroke-[1.75]" />
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-1">No Saved Jobs Yet</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 max-w-sm mb-6 leading-relaxed">
          Bookmark jobs you're interested in while browsing the map to keep track of deadlines and apply when you're ready.
        </p>
        <button
          onClick={onGoToMap}
          className="bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white px-6 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 dark:shadow-orange-600/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <Map size={15} />
          <span>Explore on Interactive Map</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto custom-scrollbar bg-[#FAF8F5] dark:bg-black">
      <div className="max-w-[1400px] mx-auto w-full space-y-6">
        
        {/* Header matching dashboard aesthetic */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
              Saved Jobs ({savedJobs.length})
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
              Your shortlisted positions ready for application and tracking.
            </p>
          </div>
          <button
            onClick={onGoToMap}
            className="bg-white dark:bg-[#151518] border border-slate-200/80 dark:border-white/10 px-4 py-2.5 rounded-full text-xs font-bold text-blue-600 dark:text-orange-400 hover:bg-slate-50 dark:hover:bg-white/5 flex items-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <span>Back to Map View</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedJobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-[#151518] rounded-[28px] p-6 border border-slate-200/70 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-blue-500/30 dark:hover:border-orange-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <CompanyLogo company={job.company} logoUrl={job.logo} size="md" />
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">{job.company}</h4>
                      <p className="text-xs text-gray-400 dark:text-gray-500 font-medium flex items-center gap-1 mt-0.5">
                        <MapPin size={11} className="text-blue-600 dark:text-orange-400" />
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveSave(job.id)}
                    title="Remove from saved"
                    className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-base line-clamp-1">
                    {job.title}
                  </h3>
                  <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/40 shrink-0">
                    {job.salary.split(" ")[0]}
                  </span>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mb-4 leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-3 rounded-2xl border border-slate-100 dark:border-white/5">
                  {job.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-bold bg-slate-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 px-2.5 py-0.5 rounded-full">
                    {job.type}
                  </span>
                  <span className="text-[10px] font-bold bg-blue-50 dark:bg-orange-500/10 text-blue-700 dark:text-orange-400 px-2.5 py-0.5 rounded-full border border-blue-100 dark:border-orange-500/20">
                    {(job as any).experience || "Full-time"}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center gap-2">
                <a
                  href={getExactJobApplyUrl(job)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl text-center flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={() => onOpenDetails(job)}
                  className="bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-gray-800 dark:text-gray-200 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
                >
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
