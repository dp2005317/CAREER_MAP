"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatedBackground } from "@/components/layout/AnimatedBackground";
import { CompanyLogo } from "@/components/jobs/CompanyLogo";
import Image from "next/image";
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  ArrowRight, 
  Briefcase, 
  Zap,
  User as UserIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/database/authContext";

export default function Home() {
  const router = useRouter();
  const { user, profile } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/dashboard?tab=overview");
    }
  }, [user, router]);
  const topCompanies = [
    "Google", "Microsoft", "Apple", "Amazon", 
    "Meta", "Flipkart", "Zomato", "Swiggy", 
    "PhonePe", "Razorpay", "Uber", "Netflix",
    "TCS", "Infosys", "Intel", "Samsung",
    "Cisco", "Qualcomm", "Wipro"
  ];

  return (
    <div className="min-h-screen bg-[#EEF2F6] flex flex-col relative overflow-hidden font-sans selection:bg-blue-200">
      <AnimatedBackground />

      {/* 1. Neumorphic Navigation Bar with Centered Links */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-6 py-3 sm:py-4 relative flex items-center justify-between border-b border-slate-200/80 bg-[#EEF2F6]/90 backdrop-blur-xl">
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group z-10">
          <div className="flex items-center justify-center group-hover:scale-105 transition-transform -ml-2">
            <Image src="/logo.png" alt="CareerMap Logo" width={200} height={200} className="object-contain w-auto h-16 sm:h-20 scale-[1.3]" priority />
          </div>
          <div className="flex flex-col">
            <h1 className="font-extrabold text-gray-900 text-base sm:text-lg tracking-tight leading-none">
              CareerMap
            </h1>
            <span className="text-[8px] sm:text-[10px] font-bold text-blue-600 tracking-wider uppercase hidden sm:block">
              Spatial Intelligence
            </span>
          </div>
        </Link>

        {/* Center: Perfectly Centered Pill Navigation */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 text-xs font-bold text-gray-700 neu-pill px-3 py-1.5 z-10">
          <Link href="/dashboard?tab=overview" className="px-3.5 py-1.5 rounded-full hover:text-blue-600 transition-colors">
            Map Discovery
          </Link>
          <Link href="/courses" className="px-3.5 py-1.5 rounded-full hover:text-blue-600 transition-colors">
            Free Courses
          </Link>
          <Link href="/dashboard?tab=companies" className="px-3.5 py-1.5 rounded-full hover:text-blue-600 transition-colors">
            Companies
          </Link>
          <Link href="/dashboard?tab=saved" className="px-3.5 py-1.5 rounded-full hover:text-blue-600 transition-colors">
            Saved Jobs
          </Link>
        </div>

        {/* Right: Action Button */}
        <div className="flex items-center z-10">
          {user ? (
            <Link
              href="/dashboard"
              className="neu-btn-primary px-3 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-bold flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Dashboard</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 hidden sm:block" />
            </Link>
          ) : (
            <Link
              href="/login"
              className="neu-btn-primary px-3 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-bold flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap"
            >
              <span>Login</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 hidden sm:block" />
            </Link>
          )}
        </div>
      </header>

      {/* 2. Main Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-10 sm:pt-14 pb-16 sm:pb-20 z-10 max-w-6xl mx-auto w-full">
        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.08]"
        >
          Find Your Next <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
            Role <br className="block sm:hidden" />
            on the Map
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium leading-relaxed px-2 sm:px-0"
        >
          Stop scrolling through endless text-heavy job boards. Explore verified tech roles, calculate real-time proximity from your coordinates, and apply directly to official career portals.
        </motion.p>

        {/* Neumorphic CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 w-full sm:w-auto"
        >
          <Link href="/dashboard?tab=overview" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 neu-btn-primary text-sm font-bold flex items-center justify-center gap-2.5 cursor-pointer">
              <span>Launch Interactive Map</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          <Link href="/dashboard?tab=jobs" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 neu-btn text-gray-800 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <span>Browse All Openings</span>
            </button>
          </Link>
        </motion.div>

        {/* 3. Floating Neumorphic Mockup Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="w-full max-w-4xl neu-card p-4 sm:p-7 relative overflow-hidden mb-12 sm:mb-16 text-left"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-100 gap-3 sm:gap-0">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400" />
              <span className="text-[10px] sm:text-xs font-bold text-gray-600 ml-2">Live Spatial Engine</span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-blue-600 neu-pill px-2.5 sm:px-3 py-1 flex items-center gap-1.5 w-fit">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-500 animate-pulse" />
              128+ Verified Opportunities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {[
              {
                company: "Google",
                title: "Cloud Solutions Architect",
                loc: "Kolkata, WB",
                salary: "₹40L - ₹58L",
              },
              {
                company: "Flipkart",
                title: "SDE II - Marketplace",
                loc: "Bengaluru, KA",
                salary: "₹32L - ₹48L",
              },
              {
                company: "Zomato",
                title: "Backend Engineer - Blinkit",
                loc: "Gurugram, NCR",
                salary: "₹30L - ₹45L",
              }
            ].map((j, i) => (
              <div
                key={i}
                className="neu-card-sm p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <CompanyLogo company={j.company} size="sm" />
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                    {j.salary.split(" ")[0]}
                  </span>
                </div>
                <div className="font-bold text-xs text-gray-900 truncate mb-0.5">
                  {j.title}
                </div>
                <div className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                  <MapPin size={10} className="text-blue-500" />
                  <span>{j.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4. Infinite Moving Carousel / Slider */}
        <div className="w-full mb-12 sm:mb-16 overflow-hidden">
          <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 sm:mb-6 text-center px-2">
            Hiring Opportunities from Top Tech Leaders & Enterprises
          </p>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2 sm:py-3">
            <div className="animate-marquee flex items-center gap-3 sm:gap-4">
              {/* Duplicate array twice for seamless continuous sliding */}
              {[...topCompanies, ...topCompanies].map((c, idx) => (
                <Link
                  key={`${c}-${idx}`}
                  href={`/dashboard?tab=jobs&company=${encodeURIComponent(c)}`}
                  className="flex items-center gap-2 sm:gap-2.5 neu-btn px-3 py-2 sm:px-4 sm:py-2.5 hover:scale-105 transition-all shrink-0 cursor-pointer"
                >
                  <CompanyLogo company={c} size="sm" />
                  <span className="text-[10px] sm:text-xs font-bold text-gray-800">{c}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <div className="neu-card p-6">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 neu-icon-btn shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-base mb-1.5">
              Spatial Proximity Engine
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Detects your coordinates and computes real-time Haversine distances to discover jobs closest to your physical location.
            </p>
          </div>

          <div className="neu-card p-6">
            <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 neu-icon-btn shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-base mb-1.5">
              AI Intelligence Pipeline
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Synthesized by Mistral AI & deep web search engines to constantly aggregate fresh, high-paying tech listings with accurate geocoding.
            </p>
          </div>

          <div className="neu-card p-6">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 neu-icon-btn shadow-md">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-gray-900 text-base mb-1.5">
              Direct Official Applications
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              No middleman aggregators or outdated forms. Apply straight to company ATS systems (Greenhouse, Lever, Workday) with 1 click.
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full border-t border-slate-200/80 bg-[#EEF2F6]/90 backdrop-blur-md py-6 px-4 sm:px-6 text-center text-[10px] sm:text-xs text-gray-400 font-medium z-10 flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-3 sm:gap-0">
        <p>© 2026 CareerMap AI. Built for tech talent in India.</p>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/dashboard?tab=overview" className="text-blue-600 font-bold hover:underline">
            Launch App
          </Link>
          <span>•</span>
          <Link href="/login" className="hover:text-gray-600">
            Login
          </Link>
        </div>
      </footer>
    </div>
  );
}
