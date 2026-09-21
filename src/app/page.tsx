"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { 
  MapPin, 
  ArrowRight, 
  Briefcase, 
  Sparkles, 
  Compass, 
  Building2, 
  Users, 
  Layers, 
  GraduationCap, 
  TrendingUp, 
  CheckCircle2, 
  Menu, 
  X, 
  Plus
} from "lucide-react";
import { useAuth } from "@/database/authContext";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (user) {
      router.push("/dashboard?tab=overview");
    }
  }, [user, router]);

  const navLinks = [
    { label: "Map Discovery", href: "/dashboard?tab=map" },
    { label: "Courses", href: "/courses" },
    { label: "Companies", href: "/dashboard?tab=companies" },
    { label: "Saved Jobs", href: "/dashboard?tab=saved" },
  ];

  const trustedCompanies = [
    "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Accenture", "Deloitte"
  ];

  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600 dark:text-orange-500" />,
      title: "Spatial Job Mapping",
      desc: "Visualize employment density, hiring hot-zones, and compensation patterns across 28+ Indian tech hubs in real-time."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-blue-600 dark:text-orange-500" />,
      title: "AI Skill Gap Diagnostics",
      desc: "Upload your resume to instantly identify missing frameworks and uncover personalized pathways to fill the gap."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600 dark:text-orange-500" />,
      title: "Industry-Aligned Curriculums",
      desc: "Learn through comprehensive, free playlists with hands-on projects, code exercises, and verifiable certificates."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-600 dark:text-orange-500" />,
      title: "Real-Time Salary Intelligence",
      desc: "Benchmark compensation against verified local market data across entry, mid, and senior levels for total transparency."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Profile & Resume Scan",
      desc: "Our AI extracts your technical stack, experience level, and target aspirations to build your customized skill graph."
    },
    {
      num: "02",
      title: "Explore on the Spatial Map",
      desc: "Navigate interactive geographic clusters to discover which companies and cities are actively hiring for your profile."
    },
    {
      num: "03",
      title: "Bridge Gaps with Playlists",
      desc: "Follow curated, modular lessons and coding sandboxes directly mapped to the exact requirements of open roles."
    },
    {
      num: "04",
      title: "Earn Verified Placement",
      desc: "Apply with confidence, showcase verifiable skill certificates, and connect with recruiters hiring now."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-gray-900 dark:text-white font-sans selection:bg-blue-600/20 dark:selection:bg-orange-500/20 antialiased overflow-x-hidden">
      
      {/* Container wrapper matching the clean aesthetic */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6 flex flex-col gap-10 sm:gap-14">

        {/* ===================== HERO CARD ===================== */}
        <section className="bg-gradient-to-b from-[#EFF5FF] via-[#F8FAFF] to-white dark:bg-gradient-to-b dark:from-[#181622] dark:via-[#121118] dark:to-[#0C0B12] border border-slate-200/80 dark:border-white/10 rounded-[28px] sm:rounded-[44px] shadow-sm relative overflow-hidden flex flex-col justify-between">
          
          {/* Top Header Inside Hero */}
          <header className="w-full px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between z-20 border-b border-slate-100 dark:border-white/5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 min-w-0 group">
              <div className="flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <BrandLogo className="object-contain w-auto h-8 sm:h-9" priority />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-display font-bold text-base sm:text-lg tracking-tight leading-none text-gray-900 dark:text-white">
                  CareerMap
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold text-blue-600 dark:text-orange-500 tracking-wider uppercase whitespace-nowrap leading-none mt-0.5">
                  Spatial Discovery
                </span>
              </div>
            </Link>

            {/* Desktop Center Nav */}
            <div className="hidden md:flex items-center gap-7 bg-slate-100/80 dark:bg-white/5 px-6 py-2 rounded-full border border-slate-200/60 dark:border-white/10">
              {navLinks.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href}
                  className="text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-orange-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2.5">
              <ThemeToggle />
              
              <Link 
                href="/dashboard?tab=overview"
                className="hidden sm:inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-500 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-600/20 dark:shadow-orange-600/20"
              >
                Launch App
              </Link>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
                className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors cursor-pointer"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </header>

          {/* Mobile Drawer */}
          {isMobileMenuOpen && (
            <div className="md:hidden px-6 py-5 border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#121215]/95 backdrop-blur-xl flex flex-col gap-4 z-30 animate-in fade-in slide-in-from-top-2 duration-200">
              {navLinks.map((link, i) => (
                <Link 
                  key={i} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-orange-400 py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} className="opacity-50" />
                </Link>
              ))}
              <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex flex-col gap-2.5">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-blue-600 dark:bg-orange-600 text-white py-3 rounded-full text-xs font-bold shadow-lg shadow-blue-600/20 dark:shadow-orange-600/20"
                >
                  Student Login
                </Link>
              </div>
            </div>
          )}

          {/* Hero Typography & CTA */}
          <div className="px-5 sm:px-10 pt-8 sm:pt-14 pb-6 sm:pb-10 flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
            
            {/* Top Minimal Plus Icon */}
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 dark:text-gray-500 mb-4 sm:mb-6">
              <Plus className="w-5 h-5" />
            </div>

            {/* Main Headline (Outfit / Plus Jakarta Sans style matching reference) */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-[-0.03em] text-gray-900 dark:text-white leading-[1.1] mb-4 sm:mb-6">
              Where Careers Grow
            </h1>

            {/* Subtitle */}
            <p className="font-display text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl font-normal leading-relaxed mb-6 sm:mb-8">
              A programmable, utility-driven career platform designed for native skill accrual, salary intelligence, and seamless integration into tech hiring.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-center">
              <Link 
                href="/dashboard?tab=map"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-500 text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/25 dark:shadow-orange-600/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass size={16} />
                <span>Launch Interactive Map</span>
                <ArrowRight size={14} />
              </Link>
              <Link 
                href="/dashboard?tab=jobs"
                className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/15 text-gray-900 dark:text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-full border border-slate-200/80 dark:border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Briefcase size={16} />
                <span>Browse 250K+ Openings</span>
              </Link>
            </div>
          </div>

          {/* 3D Visual Centerpiece: Spatial Tech Map of India */}
          <div className="relative w-full px-4 sm:px-8 pb-4 sm:pb-8">
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[22px] sm:rounded-[36px] overflow-hidden shadow-inner border border-slate-200/80 dark:border-white/10 bg-slate-950">
              <Image
                src="/images/careermap_spatial_hero.jpg"
                alt="Spatial Career Intelligence Map"
                fill
                priority
                className="object-cover object-center transform hover:scale-[1.01] transition-transform duration-700 ease-out"
                sizes="(max-width: 1440px) 100vw, 1440px"
              />
              
              {/* Subtle top & bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Stat Badges on Artwork */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                <div className="bg-white/95 dark:bg-black/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/60 dark:border-white/10 shadow-lg text-[10px] sm:text-xs font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>250K+ Verified Indian Tech Openings</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 bg-white/95 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 dark:border-white/10 shadow-lg text-xs font-semibold text-gray-900 dark:text-white">
                  <MapPin size={13} className="text-blue-600 dark:text-orange-400" />
                  <span>28+ Tech Metros Mapped</span>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* ===================== SECTION 2: WHAT IS CAREERMAP? ===================== */}
        <section className="flex flex-col gap-8 sm:gap-12 pt-2">
          
          {/* Header Row: Title on Left, Explanation on Right (Exact reference style) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="md:col-span-6 flex flex-col items-start gap-4 sm:gap-6">
              <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-gray-900 dark:text-white">
                What is CareerMap?
              </h2>
              <Link 
                href="/dashboard?tab=map"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 dark:bg-orange-600 dark:hover:bg-orange-500 text-white text-xs sm:text-sm font-semibold px-7 py-3 rounded-full transition-all hover:scale-105 active:scale-95 shadow-md shadow-blue-600/20 dark:shadow-orange-600/20 cursor-pointer"
              >
                Explore now
              </Link>
            </div>

            <div className="md:col-span-6">
              <p className="font-display text-lg sm:text-2xl font-normal leading-snug text-gray-700 dark:text-gray-200">
                CareerMap is a yield-bearing career platform that helps your technical capital grow while staying pegged to real-time market demand and verified compensation benchmarks across India.
              </p>
            </div>
          </div>

          {/* 3-Card Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            
            {/* CARD 1: Wide Card with Balanced Text Flow and 3D Graphic */}
            <div className="md:col-span-12 lg:col-span-6 bg-blue-50/90 dark:bg-[#141418] rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 relative overflow-hidden flex flex-col justify-between min-h-[300px] sm:min-h-[360px] border border-blue-200/80 dark:border-orange-500/20 group">
              {/* Text Column - naturally flows together without being abandoned at the bottom */}
              <div className="relative z-10 w-full sm:max-w-[54%] flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2.5">
                  <span className="text-[10px] font-semibold text-blue-700 dark:text-orange-400 uppercase tracking-wider block">
                    Skill Mastery
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-gray-900 dark:text-white tracking-tight leading-snug">
                    Skills that compound
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed pt-1">
                    Earn verifiable technical equity as your competencies are deployed into high-performing engineering roles across 28+ Indian tech hubs.
                  </p>
                </div>

                {/* Lower Skill Badges */}
                <div className="flex items-center gap-1.5 pt-6 flex-wrap">
                  <span className="text-[11px] font-medium bg-white/90 dark:bg-white/10 px-2.5 py-1 rounded-full text-blue-700 dark:text-orange-300 border border-blue-200/60 dark:border-white/10 shadow-2xs">
                    Python
                  </span>
                  <span className="text-[11px] font-medium bg-white/90 dark:bg-white/10 px-2.5 py-1 rounded-full text-blue-700 dark:text-orange-300 border border-blue-200/60 dark:border-white/10 shadow-2xs">
                    AI & ML
                  </span>
                  <span className="text-[11px] font-medium bg-white/90 dark:bg-white/10 px-2.5 py-1 rounded-full text-blue-700 dark:text-orange-300 border border-blue-200/60 dark:border-white/10 shadow-2xs">
                    Full Stack
                  </span>
                </div>
              </div>

              {/* Desktop/Tablet 3D Visual */}
              <div className="hidden sm:flex absolute right-4 top-6 bottom-6 w-[40%] pointer-events-none items-center justify-center">
                <div className="relative w-full h-full max-h-[260px] rounded-2xl overflow-hidden shadow-xs border border-blue-200/50 dark:border-white/10 bg-slate-100 dark:bg-black/40">
                  <Image
                    src="/images/careermap_skills_visual.jpg"
                    alt="3D Skill Graph Visualization"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 1024px) 30vw, 20vw"
                  />
                </div>
              </div>

              {/* Mobile 3D Visual */}
              <div className="sm:hidden relative w-full aspect-[16/9] rounded-xl overflow-hidden mt-6 border border-blue-200/50 dark:border-white/10 bg-slate-100 dark:bg-black/40">
                <Image
                  src="/images/careermap_skills_visual.jpg"
                  alt="3D Skill Graph Visualization"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* CARD 2: Dark Slate Card (Always real-time, always verified) */}
            <div className="md:col-span-6 lg:col-span-3 bg-slate-900 dark:bg-[#121215] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 flex flex-col justify-between min-h-[280px] sm:min-h-[360px] border border-slate-800 dark:border-white/10 group hover:border-blue-500/40 dark:hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-semibold text-blue-400 dark:text-orange-400 uppercase tracking-wider block">
                  Salary Intelligence
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-normal tracking-tight leading-snug">
                  Always real-time, <br />
                  always verified
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed pt-1">
                  Stay fully market-aligned with instant access to verified openings and salary data across 28+ cities — no ghost jobs or outdated benchmarks.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                <span>Verified Benchmarks</span>
                <span className="text-blue-400 dark:text-orange-400 font-bold">100% Transparent</span>
              </div>
            </div>

            {/* CARD 3: Dark Slate Card (100% tailored roadmaps) */}
            <div className="md:col-span-6 lg:col-span-3 bg-slate-900 dark:bg-[#121215] text-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-9 flex flex-col justify-between min-h-[280px] sm:min-h-[360px] border border-slate-800 dark:border-white/10 group hover:border-blue-500/40 dark:hover:border-orange-500/40 transition-colors">
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-semibold text-blue-400 dark:text-orange-400 uppercase tracking-wider block">
                  AI Diagnostics
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-normal tracking-tight leading-snug">
                  100% tailored <br />
                  roadmaps
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed pt-1">
                  No need to manage curriculums manually. CareerMap AI works in the background to diagnose missing skills and curate coding playlists.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400 font-medium">
                <span>Algorithmic Curriculums</span>
                <span className="text-blue-400 dark:text-orange-400 font-bold">Automated</span>
              </div>
            </div>

          </div>

          {/* Backed By Row */}
          <div className="pt-4 sm:pt-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 max-w-xs uppercase tracking-wider">
              TRUSTED BY LEARNERS & PROFESSIONALS FROM:
            </p>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
              {trustedCompanies.map((company) => (
                <div 
                  key={company}
                  className="flex items-center gap-2 bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-800 dark:text-gray-200 shadow-2xs hover:scale-105 transition-transform"
                >
                  <CompanyLogo company={company} size="sm" />
                  <span>{company}</span>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ===================== SECTION 3: USE CASES ===================== */}
        <section className="flex flex-col gap-8 sm:gap-12 pt-4">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Use cases Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <span className="text-[11px] font-semibold tracking-widest text-blue-600 dark:text-orange-500 uppercase block mb-2">
                  CareerMap In Action
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-gray-900 dark:text-white mb-4">
                  Use cases
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                  CareerMap offers specialized solutions for candidates, working engineers, academic institutions, and enterprise tech recruiters seeking data-driven workforce mobility.
                </p>
              </div>

              {/* 3 Use Case Mini-Pills */}
              <div className="flex flex-col gap-3">
                <div className="bg-white dark:bg-[#141418] border border-slate-200/80 dark:border-white/10 p-4 rounded-2xl shadow-2xs">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">01. College Students & Grads</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-normal">Scan your resume to discover verified entry-level roles and get targeted course playlists.</p>
                </div>

                <div className="bg-white dark:bg-[#141418] border border-slate-200/80 dark:border-white/10 p-4 rounded-2xl shadow-2xs">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">02. Software Engineers & Switchers</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-normal">Benchmark your compensation tier against local tech hubs like Bengaluru, Pune, and NCR.</p>
                </div>

                <div className="bg-white dark:bg-[#141418] border border-slate-200/80 dark:border-white/10 p-4 rounded-2xl shadow-2xs">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">03. Campuses & Placement Cells</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-normal">Align batch curriculum with verified corporate hiring requirements across India.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Featured Big Card with 3D Campus Building */}
            <div className="lg:col-span-7 bg-white dark:bg-[#141418] border border-slate-200/80 dark:border-white/10 rounded-[28px] sm:rounded-[40px] p-6 sm:p-9 shadow-sm flex flex-col justify-between overflow-hidden relative min-h-[460px]">
              
              <div className="relative z-10 max-w-lg mb-6">
                <span className="text-[10px] font-semibold text-blue-600 dark:text-orange-500 uppercase tracking-wider block mb-1">
                  Enterprise Solutions
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-normal tracking-tight text-gray-900 dark:text-white mb-3">
                  Universities & Enterprises
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed mb-4">
                  Boost placement efficiency and talent acquisition by offering CareerMap intelligence, a spatial skill-verification platform with high predictive match scoring.
                </p>
                <Link 
                  href="/dashboard?tab=companies"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-orange-500 hover:underline"
                >
                  <span>→ Learn more</span>
                </Link>
              </div>

              {/* 3D Campus Building Visual at Bottom */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden mt-4 border border-slate-200/60 dark:border-white/5 bg-slate-950">
                <Image
                  src="/images/careermap_campus_visual.jpg"
                  alt="3D Engineering Campus Building"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

            </div>

          </div>

        </section>

        {/* ===================== SECTION 4: LIVE OPENINGS & MARKET METRIC ===================== */}
        <section className="flex flex-col gap-6 pt-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2">
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-blue-600 dark:text-orange-500 uppercase block mb-1">
                Verified Listings
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-normal tracking-tight text-gray-900 dark:text-white">
                Explore Active Positions
              </h3>
            </div>
            <Link 
              href="/dashboard?tab=jobs" 
              className="text-xs font-semibold text-blue-600 dark:text-orange-500 hover:underline flex items-center gap-1"
            >
              View all 250,000+ jobs <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            
            {/* Job 1: Google Software Engineer */}
            <Link
              href="/dashboard?tab=jobs"
              className="bg-white dark:bg-[#141418] rounded-[24px] p-5 shadow-xs hover:shadow-md border border-slate-200/80 dark:border-white/10 transition-all hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 mb-2 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-blue-600 dark:text-orange-500" />
                    Bengaluru, KA
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                    ₹40L PA
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">
                  Software Engineer
                </h4>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CompanyLogo company="Google" size="sm" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Google</span>
                </div>
                <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Job 2: Amazon Backend Engineer */}
            <Link
              href="/dashboard?tab=jobs"
              className="bg-white dark:bg-[#141418] rounded-[24px] p-5 shadow-xs hover:shadow-md border border-slate-200/80 dark:border-white/10 transition-all hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 mb-2 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-blue-600 dark:text-orange-500" />
                    Mumbai, MH
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                    ₹32L PA
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">
                  Backend Engineer
                </h4>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CompanyLogo company="Amazon" size="sm" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Amazon</span>
                </div>
                <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Job 3: Microsoft Data Analyst */}
            <Link
              href="/dashboard?tab=jobs"
              className="bg-white dark:bg-[#141418] rounded-[24px] p-5 shadow-xs hover:shadow-md border border-slate-200/80 dark:border-white/10 transition-all hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 mb-2 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-blue-600 dark:text-orange-500" />
                    Hyderabad, TG
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                    ₹28L PA
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors">
                  Data Analyst
                </h4>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CompanyLogo company="Microsoft" size="sm" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Microsoft</span>
                </div>
                <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Metric Card */}
            <div className="bg-slate-900 dark:bg-[#121215] text-white rounded-[24px] p-5 shadow-xs border border-slate-800 dark:border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-blue-400 dark:text-orange-400">Hiring Demand Surge</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-full">
                    +32% YoY
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 font-normal">Quarterly growth across Bengaluru, NCR & Pune</p>
              </div>

              <div className="flex items-end gap-1.5 h-12 my-2">
                <div className="w-1/5 bg-blue-900/60 dark:bg-orange-950/60 rounded-t h-[40%]" />
                <div className="w-1/5 bg-blue-800/70 dark:bg-orange-900/70 rounded-t h-[60%]" />
                <div className="w-1/5 bg-blue-700/80 dark:bg-orange-800/80 rounded-t h-[80%]" />
                <div className="w-1/5 bg-blue-600 dark:bg-orange-500 rounded-t h-[100%]" />
                <div className="w-1/5 bg-blue-500 dark:bg-orange-600 rounded-t h-[75%]" />
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-gray-400 font-medium">
                <span>Top Tech Hubs</span>
                <span className="text-blue-400 dark:text-orange-400 font-bold">India 2026</span>
              </div>
            </div>

          </div>
        </section>

        {/* ===================== SECTION 5: PLATFORM CAPABILITIES ===================== */}
        <section className="flex flex-col gap-8 pt-2">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-2xl sm:text-4xl font-normal tracking-tight text-gray-900 dark:text-white mb-3">
              Platform Capabilities
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-normal">
              From spatial demand clusters to tailored coding roadmaps, CareerMap delivers transparency to every step of your career.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feat, i) => (
              <div 
                key={i}
                className="bg-white dark:bg-[#141418] border border-slate-200/80 dark:border-white/10 rounded-[28px] p-6 shadow-2xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-orange-500/10 flex items-center justify-center mb-4 border border-blue-100 dark:border-orange-500/20">
                    {feat.icon}
                  </div>
                  <h4 className="font-display font-medium text-base text-gray-900 dark:text-white mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== SECTION 6: WORKFLOW ===================== */}
        <section className="bg-white dark:bg-[#141418] border border-slate-200/80 dark:border-white/10 rounded-[28px] sm:rounded-[40px] p-6 sm:p-12 shadow-2xs">
          <div className="max-w-2xl mb-10">
            <span className="text-[11px] font-semibold tracking-widest text-blue-600 dark:text-orange-500 uppercase block mb-1">
              Methodology
            </span>
            <h3 className="font-display text-2xl sm:text-4xl font-normal tracking-tight text-gray-900 dark:text-white mb-2">
              How CareerMap AI Works
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-normal">
              Four simple milestones connecting your aspirations to placement outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-display text-blue-600/30 dark:text-orange-500/30 mb-2">
                  {step.num}
                </span>
                <h4 className="font-display font-medium text-base text-gray-900 dark:text-white mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== CTA BANNER ===================== */}
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-orange-600 dark:via-amber-600 dark:to-orange-700 text-white rounded-[28px] sm:rounded-[44px] p-8 sm:p-14 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
          <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight max-w-2xl mb-4">
            Ready to Map Your Career with Spatial Intelligence?
          </h3>
          <p className="text-xs sm:text-sm text-white/90 max-w-lg mb-8 leading-relaxed font-normal">
            Join thousands of engineering students and candidates mastering in-demand frameworks and benchmarking verified salary tiers.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link 
              href="/login"
              className="w-full sm:w-auto bg-white text-blue-600 dark:text-orange-600 font-semibold px-8 py-3.5 rounded-full text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            >
              Get Started for Free
            </Link>
            <Link 
              href="/courses"
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer"
            >
              Explore Free Courses
            </Link>
          </div>
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="pt-8 pb-6 border-t border-slate-200/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400 font-normal">
          <div className="flex items-center gap-3">
            <span className="font-display font-semibold text-gray-900 dark:text-white">CareerMap</span>
            <span>•</span>
            <span>Smart India Hackathon 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/dashboard?tab=map" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">
              Spatial Map
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
