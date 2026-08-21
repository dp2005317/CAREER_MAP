"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, MapPin, DollarSign, Briefcase, Clock, Sparkles, ExternalLink, Bookmark } from "lucide-react";
import { Job } from "@/lib/mockData";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { getExactJobApplyUrl } from "@/lib/jobUrls";

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
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden z-10 flex flex-col max-h-[85vh]"
          >
            {/* Header with decorative gradient banner */}
            <div className="relative h-28 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shrink-0 flex justify-between items-start">
              <div className="text-white/80 text-xs font-semibold uppercase tracking-wider">
                Opportunity Details
              </div>
              <div className="flex items-center gap-2">
                {onToggleSave && job && (
                  <button
                    onClick={() => onToggleSave(job.id)}
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                      isSaved
                        ? "neu-btn text-blue-600 bg-white shadow-md ring-1 ring-blue-500/30"
                        : "bg-white/20 hover:bg-white/30 text-white"
                    }`}
                    title={isSaved ? "Saved" : "Save Job"}
                  >
                    <Bookmark size={16} className={isSaved ? "fill-blue-600 text-blue-600" : ""} />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="w-9 h-9 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center transition-colors cursor-pointer"
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
                  className="border-3 border-white shadow-xl bg-white"
                />
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 pt-11 overflow-y-auto custom-scrollbar flex-1">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight mb-1">
                {job.title}
              </h2>
              <p className="text-gray-500 font-semibold mb-5 flex items-center gap-2 text-sm">
                <Building2 size={16} className="text-gray-400" /> {job.company}
              </p>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    val: job.location,
                    color: "text-blue-500",
                    bg: "bg-blue-50/60"
                  },
                  {
                    icon: DollarSign,
                    label: "Salary",
                    val: job.salary || "Competitive",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50/60"
                  },
                  {
                    icon: Briefcase,
                    label: "Type",
                    val: job.type || "Full Time",
                    color: "text-purple-500",
                    bg: "bg-purple-50/60"
                  },
                  {
                    icon: Clock,
                    label: "Posted",
                    val: formatPostedDate(job.postedAt),
                    color: "text-amber-500",
                    bg: "bg-amber-50/60"
                  }
                ].map((stat, i) => (
                  <div
                    key={i}
                    className={`${stat.bg} border border-gray-200/60 rounded-2xl p-3 shadow-sm`}
                  >
                    <div className="text-gray-400 text-xs mb-1 flex items-center gap-1.5 font-semibold">
                      <stat.icon size={13} className={stat.color} /> {stat.label}
                    </div>
                    <div className="font-bold text-gray-900 text-xs truncate">
                      {stat.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 text-sm">
                  <Sparkles size={15} className="text-blue-600" /> About the Role
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed bg-gray-50/80 p-4 rounded-2xl border border-gray-200/60 shadow-inner">
                  {job.description}
                </p>
              </div>
            </div>

            {/* Action Footer */}
            <div className="p-4 bg-[#EEF2F6] border-t border-slate-200/80 flex items-center gap-3 shrink-0">
              <a
                href={getExactJobApplyUrl(job)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <button className="w-full neu-btn-primary py-3.5 px-4 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer">
                  <span>Apply on Official Portal</span>
                  <ExternalLink size={16} />
                </button>
              </a>

              {onToggleSave && (
                <button
                  onClick={() => onToggleSave(job.id)}
                  className={`px-4 py-3.5 neu-btn text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSaved
                      ? "text-blue-600 ring-1 ring-blue-500/30"
                      : "text-gray-700"
                  }`}
                >
                  <Bookmark size={15} className={isSaved ? "fill-blue-600 text-blue-600" : ""} />
                  <span>{isSaved ? "Saved" : "Save"}</span>
                </button>
              )}

              <button
                onClick={onClose}
                className="px-4 py-3.5 neu-btn text-gray-700 rounded-2xl text-xs sm:text-sm font-bold transition-colors cursor-pointer"
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
