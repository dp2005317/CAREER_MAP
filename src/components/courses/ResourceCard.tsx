"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Resource } from "@/data/types";

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

export function ResourceCard({ resource, index }: ResourceCardProps) {
  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className="group relative no-underline"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      <div className="relative flex items-center gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-all duration-400">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
          <ExternalLink className="w-5 h-5 text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-xs text-gray-900 truncate group-hover:text-blue-600 transition-colors">
            {resource.name}
          </h3>
          <p className="text-[10px] text-gray-500 font-medium truncate mt-0.5">{resource.description}</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-gray-100/80 text-gray-500 border border-gray-200/50">
            {resource.category}
          </span>
          <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-blue-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </motion.a>
  );
}
