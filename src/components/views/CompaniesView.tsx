"use client";

import React, { useMemo } from "react";
import { Job } from "@/backend/mockData";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { MapPin, ArrowRight, ExternalLink, Building2 } from "lucide-react";
import { motion } from "framer-motion";

interface CompaniesViewProps {
  jobs: Job[];
  onSelectCompany: (companyName: string) => void;
}

export function CompaniesView({ jobs, onSelectCompany }: CompaniesViewProps) {
  // Aggregate companies from jobs
  const companies = useMemo(() => {
    const map = new Map<string, { company: string; logo?: string; count: number; locations: Set<string>; sampleJob: Job }>();

    jobs.forEach((job) => {
      const key = job.company.trim();
      if (!map.has(key)) {
        map.set(key, {
          company: key,
          logo: job.logo,
          count: 0,
          locations: new Set<string>(),
          sampleJob: job,
        });
      }
      const entry = map.get(key)!;
      entry.count += 1;
      const city = job.location.split(",")[0].trim();
      if (city) entry.locations.add(city);
    });

    return Array.from(map.values()).sort((a, b) => b.count - a.count);
  }, [jobs]);

  return (
    <div className="flex-1 flex flex-col p-4 sm:p-6 lg:p-8 overflow-y-auto custom-scrollbar bg-[#FAF8F5] dark:bg-black">
      <div className="max-w-[1400px] mx-auto w-full space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
              Top Tech Companies & Unicorns
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
              Explore verified hiring partners, FAANG/MAANG organizations, and hyper-growth startups.
            </p>
          </div>
          <span className="text-xs font-bold bg-white dark:bg-[#18181b] border border-slate-200/80 dark:border-white/10 px-4 py-2 rounded-full text-blue-600 dark:text-orange-400 shadow-xs w-fit">
            {companies.length} Companies Hiring
          </span>
        </div>

        {/* Grid of Companies */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((c) => {
            const locList = Array.from(c.locations).slice(0, 2).join(", ");
            return (
              <motion.div
                key={c.company}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-[#151518] rounded-[28px] p-6 border border-slate-200/70 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-blue-500/30 dark:hover:border-orange-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <CompanyLogo company={c.company} logoUrl={c.logo} size="md" />
                    <span className="text-[11px] font-black text-blue-600 dark:text-orange-400 bg-blue-50 dark:bg-orange-500/10 border border-blue-200/60 dark:border-orange-500/20 px-2.5 py-1 rounded-full">
                      {c.count} {c.count === 1 ? "Role" : "Roles"}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-gray-900 dark:text-white text-base mb-1">
                    {c.company}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium flex items-center gap-1.5 truncate">
                    <MapPin size={12} className="text-blue-600 dark:text-orange-400 shrink-0" />
                    <span className="truncate">{locList || "India"}</span>
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => onSelectCompany(c.company)}
                    className="bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>View Openings</span>
                    <ArrowRight size={12} />
                  </button>

                  <a
                    href={c.sampleJob.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Official Career Portal"
                    className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 text-gray-400 hover:text-blue-600 dark:hover:text-orange-400 flex items-center justify-center transition-colors"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
