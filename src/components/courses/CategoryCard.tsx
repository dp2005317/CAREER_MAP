"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Bot, BarChart, Cloud, Shield, Globe, Box, Palette, Smartphone, Brain, TrendingUp, Briefcase, LayoutGrid } from "lucide-react";
import { Category } from "@/data/types";

const IconMap: Record<string, any> = {
  "programming": Code,
  "ai": Bot,
  "data-science": BarChart,
  "cloud": Cloud,
  "cybersecurity": Shield,
  "web-dev": Globe,
  "devops": Box,
  "uiux": Palette,
  "app-dev": Smartphone,
  "soft-skills": Brain,
  "digital-marketing": TrendingUp,
  "business": Briefcase,
};

interface CategoryCardProps {
  category: Category;
  index: number;
  onClick?: (category: string) => void;
}

  export function CategoryCard({ category, index, onClick }: CategoryCardProps) {
    const Icon = IconMap[category.id] || LayoutGrid;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.04, y: -4 }}
        onClick={() => onClick?.(category.id)}
        className="group relative cursor-pointer"
      >
        {/* Glow */}
        <div
          className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${category.color}30, transparent 60%)` }}
        />
  
        <div className="relative rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-400 p-4 flex flex-col gap-2.5">
          {/* Icon + Arrow */}
          <div className="flex items-center justify-between">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: `${category.color}15`, color: category.color }}
            >
              <Icon className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </div>

        {/* Name + Count */}
        <div>
          <h3 className="font-extrabold text-[12px] text-gray-900 leading-tight">{category.name}</h3>
          <p className="text-[10px] text-gray-400 font-semibold mt-0.5">{category.courseCount} courses</p>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 group-hover:w-full"
            style={{ backgroundColor: category.color, width: '55%' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
