"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Clock,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Zap,
} from "lucide-react";
import { LearningPath } from "@/data/types";

interface LearningPathCardProps {
  path: LearningPath;
  index: number;
}

export function LearningPathCard({ path, index }: LearningPathCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 300, damping: 30 });

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
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <div
        className="absolute -inset-0.5 rounded-[28px] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${path.color}40, transparent 60%)` }}
      />

      <div className="relative rounded-[28px] overflow-hidden bg-white dark:bg-[#151518] border border-slate-200/80 dark:border-white/10 shadow-sm group-hover:shadow-md transition-all duration-300">
        {/* Gradient header */}
        <div className={`bg-gradient-to-r ${path.gradient} p-6 text-white relative overflow-hidden`}>
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl shadow-lg border border-white/20">
                {path.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-base tracking-tight">{path.title}</h3>
                <p className="text-white/80 text-[11px] font-semibold mt-0.5">{path.difficulty}</p>
              </div>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white/30 transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3.5">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center gap-1.5 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/10">
              <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-orange-400" />
              <span className="text-[10px] font-black text-gray-700 dark:text-zinc-200">{path.estimatedTime}</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/10">
              <BarChart3 className="w-3.5 h-3.5 text-blue-600 dark:text-orange-400" />
              <span className="text-[10px] font-black text-gray-700 dark:text-zinc-200">{path.courseCount} courses</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 py-2 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/10">
              <Zap className="w-3.5 h-3.5 text-blue-600 dark:text-orange-400" />
              <span className="text-[10px] font-black text-gray-700 dark:text-zinc-200 truncate">{path.careerOutcome.split("/")[0].trim()}</span>
            </div>
          </div>

          {/* Career Outcome */}
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/60 dark:border-white/10 text-center">
            <p className="text-[8px] font-black text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-0.5">Career Outcome</p>
            <p className="text-[12px] font-black text-gray-800 dark:text-white">{path.careerOutcome}</p>
          </div>

          {/* Job roles */}
          <div>
            <p className="text-[8px] font-black text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Get hired as</p>
            <div className="flex flex-wrap gap-1.5">
              {path.jobRoles.map((role) => (
                <Link
                  key={role}
                  href={`/dashboard?tab=jobs`}
                  className="inline-flex items-center gap-1 text-[9px] font-bold px-2.5 py-1 rounded-full bg-blue-50 dark:bg-orange-500/10 text-blue-600 dark:text-orange-400 hover:bg-blue-100 dark:hover:bg-orange-500/20 transition-colors no-underline border border-blue-200/50 dark:border-orange-500/20"
                >
                  <Briefcase className="w-2.5 h-2.5" />
                  {role}
                </Link>
              ))}
            </div>
          </div>

          {/* Start with */}
          <div>
            <p className="text-[8px] font-black text-gray-400 dark:text-zinc-500 uppercase tracking-widest mb-1.5">Start with</p>
            <div className="flex flex-col gap-1.5">
              {path.playlists.slice(0, 3).map((pid, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] text-gray-600 dark:text-zinc-300 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-blue-600 dark:text-orange-500" />
                  <span className="truncate">
                    {pid.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
