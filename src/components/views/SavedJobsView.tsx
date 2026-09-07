"use client";

import React from "react";
import { Job } from "@/backend/mockData";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { getExactJobApplyUrl } from "@/backend/jobUrls";
import { Bookmark, MapPin, ExternalLink, Trash2, Map, ArrowRight } from "lucide-react";
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
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-[#EEF2F6]">
        <div className="w-16 h-16 rounded-3xl neu-card flex items-center justify-center mb-4 text-blue-600">
          <Bookmark size={28} className="stroke-[1.75]" />
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 mb-1">No Saved Jobs Yet</h3>
        <p className="text-xs text-gray-500 max-w-sm mb-6 leading-relaxed">
          Bookmark jobs you're interested in while browsing the map to keep track of deadlines and apply when you're ready.
        </p>
        <button
          onClick={onGoToMap}
          className="neu-btn-primary px-6 py-3 text-xs font-bold flex items-center gap-2 cursor-pointer"
        >
          <Map size={15} />
          <span>Explore on Interactive Map</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto custom-scrollbar bg-[#EEF2F6]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Saved Jobs ({savedJobs.length})
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Your shortlisted positions ready for application.
          </p>
        </div>
        <button
          onClick={onGoToMap}
          className="neu-btn px-4 py-2 text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 cursor-pointer"
        >
          <span>Back to Map View</span>
          <ArrowRight size={13} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedJobs.map((job) => (
          <motion.div
            key={job.id}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="neu-card-sm p-5 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <CompanyLogo company={job.company} logoUrl={job.logo} size="md" />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{job.company}</h4>
                    <p className="text-xs text-gray-400 font-medium flex items-center gap-1 mt-0.5">
                      <MapPin size={11} className="text-blue-500" />
                      {job.location}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRemoveSave(job.id)}
                  title="Remove from saved"
                  className="neu-icon-btn w-8 h-8 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <h3 className="font-bold text-gray-900 text-base mb-2 line-clamp-1">
                {job.title}
              </h3>

              <p className="text-xs text-gray-600 line-clamp-2 mb-4 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100 shadow-inner">
                {job.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
              <a
                href={getExactJobApplyUrl(job)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 neu-btn-primary text-xs font-bold py-2.5 px-3 text-center flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Apply Now</span>
                <ExternalLink size={13} />
              </a>

              <button
                onClick={() => onOpenDetails(job)}
                className="neu-btn px-4 py-2.5 text-xs font-bold text-gray-700 transition-all cursor-pointer"
              >
                Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
