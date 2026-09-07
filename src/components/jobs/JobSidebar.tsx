"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, DollarSign, Menu, X, Navigation } from 'lucide-react';
import { Job, JOB_TYPES } from '@/backend/mockData';
import { LiquidGlass } from '@/components/layout/LiquidGlass';
import { CompanyLogo } from '@/components/jobs/CompanyLogo';
import Image from 'next/image';

interface JobSidebarProps {
  jobs: Job[];
  selectedJob: Job | null;
  onJobSelect: (job: Job) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const JobSidebar = ({ jobs, selectedJob, onJobSelect, isMobileMenuOpen, setIsMobileMenuOpen }: JobSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'All' || job.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [jobs, searchQuery, activeFilter]);

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden absolute top-4 left-4 z-40">
        <LiquidGlass className="p-3 rounded-full cursor-pointer">
          <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </div>
        </LiquidGlass>
      </div>

      <div className={`
        absolute top-0 md:top-4 bottom-0 md:bottom-4 left-0 md:left-4 z-30 w-full md:w-[420px] 
        transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <LiquidGlass className="w-full h-full md:rounded-[2.5rem] flex flex-col overflow-hidden">
          {/* Header & Search */}
          <div className="p-6 pb-2 shrink-0">
            <div className="flex items-center gap-3 mb-6 px-1">
              <div className="flex items-center justify-center -ml-2">
                <Image src="/logo.png" alt="CareerMap Logo" width={200} height={200} className="object-contain w-auto h-16 scale-[1.3]" priority />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight">CareerMap</h1>
                <p className="text-xs text-gray-500 font-medium">Find your next opportunity</p>
              </div>
            </div>

            <div className="relative mb-4 group">
              <div className="absolute inset-0 bg-white/40 rounded-2xl blur group-hover:bg-white/50 transition-colors" />
              <div className="relative flex items-center bg-white/50 border border-white/60 rounded-2xl px-4 py-3 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)]">
                <Search className="text-gray-400 mr-3" size={18} />
                <input 
                  type="text" 
                  placeholder="Search roles, companies..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-sm placeholder:text-gray-400 text-gray-900"
                />
              </div>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {['All', ...JOB_TYPES].map(type => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    activeFilter === type 
                      ? 'bg-gray-900 text-white shadow-md scale-105' 
                      : 'bg-white/50 text-gray-600 hover:bg-white/70 border border-white/50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Job List */}
          <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-3 custom-scrollbar relative">
            {filteredJobs.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-3">
                <Search size={32} opacity={0.5} />
                <p className="text-sm font-medium">No matches found.</p>
              </div>
            ) : (
              <AnimatePresence>
                {filteredJobs.map(job => (
                  <motion.div
                    key={job.id}
                    layoutId={`card-${job.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={() => {
                      onJobSelect(job);
                      if (window.innerWidth < 768) setIsMobileMenuOpen(false);
                    }}
                    className={`relative p-4 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 ${
                      selectedJob?.id === job.id 
                        ? 'bg-white/80 shadow-md border-white' 
                        : 'bg-white/30 hover:bg-white/50 border-white/40 hover:shadow-sm'
                    } border`}
                  >
                    {selectedJob?.id === job.id && (
                      <motion.div layoutId="highlight" className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-blue-500 rounded-r-full" />
                    )}
                    
                    <div className="flex gap-4 items-start">
                      <CompanyLogo company={job.company} logoUrl={job.logo} size="md" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{job.title}</h3>
                        <p className="text-gray-500 text-xs truncate mt-0.5">{job.company}</p>
                        
                        <div className="flex items-center flex-wrap gap-2 mt-3 text-xs font-medium text-gray-500">
                          <span className="flex items-center gap-1 bg-white/40 px-2 py-1 rounded-md"><MapPin size={10} className="text-blue-500"/> {job.location}</span>
                          <span className="flex items-center gap-1 bg-white/40 px-2 py-1 rounded-md"><DollarSign size={10} className="text-emerald-500"/> {job.salary.split(' ')[0]}</span>
                          {job.distance !== undefined && (
                            <span className="flex items-center gap-1 bg-white/40 px-2 py-1 rounded-md">
                              <Navigation size={10} className="text-purple-500"/> {Math.round(job.distance)} km
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </LiquidGlass>
      </div>
    </>
  );
};
