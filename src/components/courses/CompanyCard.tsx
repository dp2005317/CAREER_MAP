"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink, BookOpen, Briefcase, ArrowUpRight } from "lucide-react";
import { Company } from "@/data/types";
import { CompanyLogoSvg } from "@/components/courses/CompanyLogoSvg";

interface CompanyCardProps {
  company: Company;
  index: number;
}

export function CompanyCard({ company, index }: CompanyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.04, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      {/* Glow ring */}
      <div
        className="absolute -inset-0.5 rounded-[1.3rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${company.color}40, transparent 60%)` }}
      />

      <div className="relative rounded-[1.3rem] overflow-hidden bg-white/80 dark:bg-[#0c0c0e]/90 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 p-5 flex flex-col gap-3.5 transform-gpu">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <CompanyLogoSvg company={company.name} size={48} />
              <div
                className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-900 flex items-center justify-center"
                style={{ backgroundColor: company.color }}
              >
                <span className="text-[6px] text-white font-black">{company.courseCount}</span>
              </div>
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-gray-900 dark:text-white tracking-tight">{company.name}</h3>
              <p className="text-[10px] font-semibold text-gray-400 dark:text-zinc-500 mt-0.5">{company.courseCount} Free Playlists</p>
            </div>
          </div>
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-xl bg-gray-100/80 dark:bg-zinc-800 flex items-center justify-center text-gray-400 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-orange-400 hover:bg-blue-50 dark:hover:bg-zinc-700 transition-all group/btn"
            title="Visit Official Site"
          >
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5">
          {company.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-[9px] font-bold px-2.5 py-1 rounded-lg border border-gray-200/60 dark:border-zinc-700/60 bg-gray-50/50 dark:bg-zinc-800/60 text-gray-600 dark:text-zinc-300"
            >
              {skill}
            </span>
          ))}
          {company.skills.length > 4 && (
            <span className="text-[9px] font-bold px-2 py-1 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-400 dark:text-zinc-500">
              +{company.skills.length - 4}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-[11px] text-gray-500 dark:text-zinc-400 leading-relaxed line-clamp-2">{company.description}</p>

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto pt-2">
          <a
            href="#courses"
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-[10px] font-black text-white rounded-xl transition-all shadow-md no-underline"
            style={{ background: `linear-gradient(135deg, ${company.color}, ${company.color}cc)` }}
          >
            <BookOpen className="w-3 h-3" />
            <span>Learn Free</span>
          </a>
          <Link
            href={`/dashboard?tab=jobs&company=${encodeURIComponent(company.name)}`}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 text-[10px] font-black text-gray-700 dark:text-zinc-200 bg-gray-100/80 dark:bg-zinc-800 rounded-xl hover:bg-gray-200/80 dark:hover:bg-zinc-700 transition-all no-underline border border-gray-200/50 dark:border-zinc-700"
          >
            <Briefcase className="w-3 h-3 text-blue-500 dark:text-orange-400" />
            <span>{company.jobCount && company.jobCount > 0 ? `${company.jobCount} Jobs` : "Explore Jobs"}</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
