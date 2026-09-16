"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  SlidersHorizontal,
  Award,
  Globe,
  Clock,
  BarChart3,
  Filter,
} from "lucide-react";
import { LearningFilters } from "@/data/types";

interface FilterDrawerProps {
  filters: LearningFilters;
  onFilterChange: (filters: LearningFilters) => void;
  isOpen: boolean;
  onClose: () => void;
}

const difficulties = ["Beginner", "Intermediate", "Advanced"];
const durations = [
  { label: "Under 20h", value: "short" },
  { label: "20–40h", value: "medium" },
  { label: "40+ Hours", value: "long" },
];
const languages = ["English", "Hindi"];

export function FilterSidebar({ filters, onFilterChange, isOpen, onClose }: FilterDrawerProps) {
  const updateFilter = <K extends keyof LearningFilters>(
    key: K,
    value: LearningFilters[K]
  ) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const clearAll = () => {
    onFilterChange({
      search: "",
      company: "",
      category: "",
      difficulty: "",
      duration: "",
      certificateOnly: false,
      freeOnly: false,
      language: "",
    });
  };

  const hasActiveFilters =
    filters.difficulty ||
    filters.duration ||
    filters.certificateOnly ||
    filters.freeOnly ||
    filters.language;

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
            className="fixed inset-y-0 right-0 w-[300px] max-w-[85vw] z-50 bg-white dark:bg-[#151518] border-l border-slate-200/80 dark:border-white/10 shadow-2xl overflow-y-auto custom-scrollbar flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-blue-600 dark:text-orange-500" />
                <h3 className="font-extrabold text-sm text-gray-900 dark:text-white">Filters</h3>
                {hasActiveFilters && (
                  <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-orange-500" />
                )}
              </div>
              <div className="flex items-center gap-2">
                {hasActiveFilters && (
                  <button
                    onClick={clearAll}
                    className="text-[11px] font-bold text-blue-600 dark:text-orange-400 hover:underline cursor-pointer"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 flex items-center justify-center text-gray-500 dark:text-zinc-400 cursor-pointer transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Content */}
            <div className="flex flex-col gap-5 p-4 flex-1">

              {/* Difficulty */}
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <BarChart3 className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                  <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Difficulty
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {difficulties.map((d) => (
                    <button
                      key={d}
                      onClick={() => updateFilter("difficulty", filters.difficulty === d ? "" : d)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer border ${
                        filters.difficulty === d
                          ? "bg-blue-600 dark:bg-orange-600 text-white border-blue-600 dark:border-orange-600 shadow-sm"
                          : "bg-slate-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-orange-500/50"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <Clock className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                  <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Duration
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {durations.map((d) => (
                    <button
                      key={d.value}
                      onClick={() => updateFilter("duration", filters.duration === d.value ? "" : d.value)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer border ${
                        filters.duration === d.value
                          ? "bg-blue-600 dark:bg-orange-600 text-white border-blue-600 dark:border-orange-600 shadow-sm"
                          : "bg-slate-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-orange-500/50"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Language */}
              <div>
                <div className="flex items-center gap-1.5 mb-2.5">
                  <Globe className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                  <span className="text-[11px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Language
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => updateFilter("language", filters.language === l ? "" : l)}
                      className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer border ${
                        filters.language === l
                          ? "bg-blue-600 dark:bg-orange-600 text-white border-blue-600 dark:border-orange-600 shadow-sm"
                          : "bg-slate-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 border-slate-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-orange-500/50"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="flex flex-col gap-3 pt-2 border-t border-slate-100 dark:border-white/10">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-xs font-bold text-gray-700 dark:text-zinc-300">Certificate Available</span>
                  </div>
                  <div
                    className={`w-9 h-5 rounded-full transition-all relative cursor-pointer ${
                      filters.certificateOnly ? "bg-blue-500 dark:bg-orange-500" : "bg-gray-300 dark:bg-zinc-700"
                    }`}
                    onClick={() => updateFilter("certificateOnly", !filters.certificateOnly)}
                  >
                    <div
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${
                        filters.certificateOnly ? "left-[18px]" : "left-0.5"
                      }`}
                    />
                  </div>
                </label>

                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <Filter className="w-3.5 h-3.5 text-blue-500 dark:text-orange-500" />
                    <span className="text-xs font-bold text-gray-700 dark:text-zinc-300">Free Only</span>
                  </div>
                  <div
                    className={`w-9 h-5 rounded-full transition-all relative cursor-pointer ${
                      filters.freeOnly ? "bg-blue-500 dark:bg-orange-500" : "bg-gray-300 dark:bg-zinc-700"
                    }`}
                    onClick={() => updateFilter("freeOnly", !filters.freeOnly)}
                  >
                    <div
                      className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all ${
                        filters.freeOnly ? "left-[18px]" : "left-0.5"
                      }`}
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* Apply Button */}
            <div className="p-4 border-t border-slate-100 dark:border-white/10 shrink-0">
              <button
                onClick={onClose}
                className="w-full py-3 rounded-2xl bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white font-bold text-sm cursor-pointer transition-all shadow-sm"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
