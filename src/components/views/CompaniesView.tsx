"use client";

import React, { useMemo } from "react";
import { Job } from "@/backend/mockData";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
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
    <div className="flex-1 flex flex-col p-6 overflow-y-auto custom-scrollbar bg-[#EEF2F6]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            Top Tech Companies & Unicorns
          </h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Explore verified hiring partners, FAANG/MAANG organizations, and hyper-growth startups.
          </p>
        </div>
        <span className="text-xs font-bold neu-pill px-4 py-2 text-blue-600">
          {companies.length} Companies Hiring
        </span>
      </div>

      {/* Grid of Companies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {companies.map((c) => {
          const locList = Array.from(c.locations).slice(0, 2).join(", ");
          return (
            <motion.div
              key={c.company}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="neu-card-sm p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <CompanyLogo company={c.company} logoUrl={c.logo} size="md" />
                  <span className="text-[11px] font-bold neu-pill px-2.5 py-1 text-blue-600">
                    {c.count} {c.count === 1 ? "Role" : "Roles"}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-sm">{c.company}</h3>
                <p className="text-xs text-gray-500 font-medium flex items-center gap-1 mt-1 truncate">
                  <MapPin size={12} className="text-blue-500 shrink-0" />
                  <span className="truncate">{locList || "India"}</span>
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectCompany(c.company)}
                  className="neu-btn-primary px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 group cursor-pointer"
                >
                  <span>View Openings</span>
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={c.sampleJob.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Official Career Portal"
                  className="neu-icon-btn w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
