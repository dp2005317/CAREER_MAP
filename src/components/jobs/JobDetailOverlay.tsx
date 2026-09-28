"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, MapPin, DollarSign, Briefcase, Clock, Sparkles, ExternalLink, Bookmark } from "lucide-react";
import { Job } from "@/backend/mockData";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { getExactJobApplyUrl } from "@/backend/jobUrls";

interface JobDetailOverlayProps {
  job: Job | null;
  onClose: () => void;
  isSaved?: boolean;
  onToggleSave?: (jobId: string) => void;
}

function formatPostedDate(dateStr?: string) {
  if (!dateStr) return "Recent";
  if (dateStr.toLowerCase().includes("ago") || dateStr.toLowerCase().includes("today")) {
    return dateStr;
  }
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return "Recently";
    const now = new Date();
    const diffHours = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60));
    if (diffHours < 24) return "Today";
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 30) return `${diffDays}d ago`;
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  } catch {
    return "Recent";
  }
}

export const JobDetailOverlay = ({ job, onClose, isSaved, onToggleSave }: JobDetailOverlayProps) => {
  return (
    <AnimatePresence>
      {job && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/70 dark:border-white/15 overflow-hidden z-10 flex flex-col max-h-[85vh]"
          >
            {/* Header with decorative gradient banner */}
            <div className="relative h-28 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 shrink-0 flex justify-between items-start">
              <div className="text-white/90 text-xs font-bold uppercase tracking-wider">
                Opportunity Details
              </div>
              <div className="flex items-center gap-2">
                {onToggleSave && job && (
                  <button
                    onClick={() => onToggleSave(job.id)}
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center transition-all cursor-pointer backdrop-blur-md ${
                      isSaved
                        ? "bg-white text-blue-600 shadow-md ring-1 ring-blue-500/30"
                        : "bg-white/20 hover:bg-white/30 text-white border border-white/20"
                    }`}
                    title={isSaved ? "Saved" : "Save Job"}
                  >
                    <Bookmark size={16} className={isSaved ? "fill-blue-600 text-blue-600" : ""} />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="w-9 h-9 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center transition-colors cursor-pointer border border-white/20 backdrop-blur-md"
                  title="Close"
                >
                  <X size={16} strokeWidth={2.5} />
                </button>
              </div>

              {/* Company Logo Floating */}
              <div className="absolute -bottom-8 left-6">
                <CompanyLogo
                  company={job.company}
                  logoUrl={job.logo}
                  size="lg"
                  className="border-2 border-white/80 dark:border-white/20 shadow-xl bg-white/95 dark:bg-slate-800/95"
                />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 pt-11 overflow-y-auto custom-scrollbar flex-1">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white leading-tight mb-1">
                {job.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 font-semibold mb-5 flex items-center gap-2 text-sm">
                <Building2 size={16} className="text-blue-500" /> {job.company}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    val: job.location,
                    color: "text-blue-500",
                    bg: "bg-blue-500/10 border-blue-500/20"
                  },
                  {
                    icon: DollarSign,
                    label: "Salary",
                    val: job.salary || "Competitive",
                    color: "text-emerald-500",
                    bg: "bg-emerald-500/10 border-emerald-500/20"
                  },
                  {
                    icon: Briefcase,
                    label: "Type",
                    val: job.type || "Full Time",
                    color: "text-purple-500",
                    bg: "bg-purple-500/10 border-purple-500/20"
                  },
                  {
                    icon: Clock,
                    label: "Posted",
                    val: formatPostedDate(job.postedAt),
                    color: "text-amber-500",
                    bg: "bg-amber-500/10 border-amber-500/20"
                  }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`${stat.bg} border backdrop-blur-md rounded-2xl p-3 shadow-2xs`}
                  >
                    <div className="text-gray-500 dark:text-gray-400 text-xs mb-1 flex items-center gap-1.5 font-semibold">
                      <stat.icon size={13} className={stat.color} /> {stat.label}
                    </div>
                    <div className="font-extrabold text-gray-900 dark:text-white text-xs truncate">
                      {stat.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-extrabold text-gray-900 dark:text-white mb-2 flex items-center gap-2 text-sm">
                  <Sparkles size={15} className="text-blue-500" /> About the Role
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed bg-white/40 dark:bg-white/5 p-4 rounded-2xl border border-gray-200/60 dark:border-white/10 shadow-inner backdrop-blur-sm">
                  {job.description}
                </p>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border-t border-slate-200/60 dark:border-white/10 flex items-center gap-3 shrink-0">
              <a
                href={getExactJobApplyUrl(job)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3.5 px-4 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 rounded-2xl shadow-lg shadow-blue-500/25 border border-white/20 transition-all cursor-pointer">
                  <span>Apply on Official Portal</span>
                  <ExternalLink size={16} />
                </button>
              </a>

              {onToggleSave && (
                <button
                  onClick={() => onToggleSave(job.id)}
                  className={`px-4 py-3.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 cursor-pointer backdrop-blur-md border ${
                    isSaved
                      ? "bg-blue-500/20 text-blue-600 border-blue-400/40"
                      : "bg-white/40 dark:bg-white/10 text-gray-700 dark:text-gray-300 border-white/40 dark:border-white/15 hover:bg-white/60"
                  }`}
                >
                  <Bookmark size={15} className={isSaved ? "fill-blue-600 text-blue-600" : ""} />
                  <span>{isSaved ? "Saved" : "Save"}</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="px-4 py-3.5 bg-white/40 dark:bg-white/10 hover:bg-white/60 dark:hover:bg-white/20 text-gray-700 dark:text-gray-300 border border-white/40 dark:border-white/15 backdrop-blur-md rounded-2xl text-xs sm:text-sm font-extrabold transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
