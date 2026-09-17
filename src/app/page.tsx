"use client";

import React from "react";
import Link from "next/link";
import { GraduationCap, Play, Sparkles, ArrowRight, Award, Video, BookOpen } from "lucide-react";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070709] text-gray-900 dark:text-white flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-gray-200/80 dark:border-white/10 px-6 flex items-center justify-between backdrop-blur-xl">
        <BrandLogo />
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/courses"
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Explore Courses</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/40 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Feature Branch: Learning & Courses Catalog</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-600 dark:from-white dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          University-Grade Video Classrooms & Certifications
        </h1>

        <p className="text-gray-600 dark:text-zinc-400 text-lg max-w-2xl mb-10 font-medium leading-relaxed">
          Master DSA, Machine Learning, MERN Stack, Data Science, and Cloud Computing with structured video lectures from Harvard, Stanford, MIT, Google, and Meta.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/courses"
            className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base flex items-center gap-3 shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02]"
          >
            <BookOpen className="w-5 h-5" />
            <span>Browse Full Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-left w-full">
          <div className="p-6 rounded-3xl border border-gray-200/80 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base mb-1">Curated Video Classrooms</h3>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">Per-lesson video players, curriculum modules, and progress tracking.</p>
          </div>

          <div className="p-6 rounded-3xl border border-gray-200/80 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base mb-1">Verifiable Certificates</h3>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">Earn and download certificates upon course completion.</p>
          </div>

          <div className="p-6 rounded-3xl border border-gray-200/80 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur-xl">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base mb-1">Global Institutions</h3>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">Course pathways aligned with Harvard CS50, Stanford, MIT & AWS.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
