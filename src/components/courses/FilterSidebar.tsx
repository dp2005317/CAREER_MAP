"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Filter,
  X,
  SlidersHorizontal,
  Award,
  Globe,
  Clock,
  Building2,
  Tag,
  BarChart3,
} from "lucide-react";
import { companies, categories } from "@/data/data";
import { LearningFilters } from "@/data/types";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";

interface FilterSidebarProps {
  filters: LearningFilters;
  onFilterChange: (filters: LearningFilters) => void;
  isOpen: boolean;
  onClose: () => void;
}

const difficulties = ["Beginner", "Intermediate", "Advanced"];
const durations = [
  { label: "Under 20 Hours", value: "short" },
  { label: "20-40 Hours", value: "medium" },
  { label: "40+ Hours", value: "long" },
];
const languages = ["English", "Hindi", "Spanish", "Other"];

export function FilterSidebar({ filters, onFilterChange, isOpen, onClose }: FilterSidebarProps) {
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
    filters.company ||
    filters.category ||
    filters.difficulty ||
    filters.duration ||
    filters.certificateOnly ||
    filters.freeOnly ||
    filters.language;

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      <div
        className={`
          fixed md:relative inset-y-0 right-0 w-72 md:w-64 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
          bg-[#EEF2F6]/95 backdrop-blur-xl md:bg-transparent md:backdrop-blur-none
          border-l md:border-l-0 md:border-r border-slate-200/80
          overflow-y-auto custom-scrollbar
          flex flex-col gap-5 p-5 md:p-0 shrink-0
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-blue-600" />
            <h3 className="font-bold text-sm text-gray-900">Filters</h3>
            {hasActiveFilters && (
              <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[9px] font-bold flex items-center justify-center">
                !
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={clearAll}
                className="text-[10px] font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onClose}
              className="md:hidden neu-icon-btn w-7 h-7 text-gray-500 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Company Filter */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Building2 className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">
              Company
            </span>
          </div>
          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto custom-scrollbar pr-1">
            {companies.map((c) => (
              <button
                key={c.id}
                onClick={() => updateFilter("company", filters.company === c.name ? "" : c.name)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-semibold transition-all cursor-pointer text-left ${
                  filters.company === c.name
                    ? "neu-btn-primary text-white"
                    : "neu-btn text-gray-600 hover:text-gray-900"
                }`}
              >
                <CompanyLogo company={c.name} size="sm" />
                <span className="truncate">{c.name}</span>
                <span className="text-[9px] ml-auto opacity-70">{c.courseCount}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Tag className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">
              Category
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => updateFilter("category", filters.category === cat.id ? "" : cat.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-semibold transition-all cursor-pointer text-left ${
                  filters.category === cat.id
                    ? "neu-btn-primary text-white"
                    : "neu-btn text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>{cat.icon}</span>
                <span className="truncate">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <BarChart3 className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">
              Difficulty
            </span>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {difficulties.map((d) => (
              <button
                key={d}
                onClick={() => updateFilter("difficulty", filters.difficulty === d ? "" : d)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
                  filters.difficulty === d
                    ? "neu-btn-primary text-white"
                    : "neu-btn text-gray-600 hover:text-gray-900"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Duration Filter */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Clock className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">
              Duration
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {durations.map((d) => (
              <button
                key={d.value}
                onClick={() => updateFilter("duration", filters.duration === d.value ? "" : d.value)}
                className={`px-3 py-2 rounded-xl text-[11px] font-semibold transition-all cursor-pointer text-left ${
                  filters.duration === d.value
                    ? "neu-btn-primary text-white"
                    : "neu-btn text-gray-600 hover:text-gray-900"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Language Filter */}
        <div>
          <div className="flex items-center gap-1.5 mb-2.5">
            <Globe className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">
              Language
            </span>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => updateFilter("language", filters.language === l ? "" : l)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
                  filters.language === l
                    ? "neu-btn-primary text-white"
                    : "neu-btn text-gray-600 hover:text-gray-900"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="flex flex-col gap-2">
          <label className="flex items-center justify-between neu-card-sm px-3 py-2.5 cursor-pointer group">
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-[11px] font-bold text-gray-700">Certificate Available</span>
            </div>
            <div
              className={`w-9 h-5 rounded-full transition-all relative ${
                filters.certificateOnly ? "bg-blue-500" : "bg-gray-300"
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

          <label className="flex items-center justify-between neu-card-sm px-3 py-2.5 cursor-pointer group">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[11px] font-bold text-gray-700">Free Only</span>
            </div>
            <div
              className={`w-9 h-5 rounded-full transition-all relative ${
                filters.freeOnly ? "bg-blue-500" : "bg-gray-300"
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
    </>
  );
}
