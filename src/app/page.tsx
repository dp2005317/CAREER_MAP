"use client";

import React, { useEffect } from "react";
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
  Mouse, 
  Bookmark, 
  Sparkles, 
  Compass, 
  Building2, 
  Users, 
  Layers, 
  GraduationCap, 
  TrendingUp, 
  CheckCircle2, 
  ChevronDown
} from "lucide-react";
import { useAuth } from "@/database/authContext";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/dashboard?tab=overview");
    }
  }, [user, router]);

  const navLinks = [
    { label: "Map Discovery", href: "/dashboard?tab=overview" },
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

  const scrollToContent = () => {
    const el = document.getElementById("platform-features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-gray-900 dark:text-white flex flex-col relative overflow-x-hidden font-sans selection:bg-blue-600/20 dark:selection:bg-orange-500/20">

      {/* ===================== HERO SECTION ===================== */}
      {/* Background image is strictly contained inside this hero section only */}
      <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-slate-100/60 dark:bg-black">
        
        {/* Background images ONLY for hero with reduced opacity */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Light Mode Hero Image */}
          <div className="dark:hidden absolute inset-0 w-full h-full opacity-35 transition-opacity duration-500">
            <Image
              src="/images/light_mode_image.png"
              alt="Hero Background Light"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center right' }}
              quality={90}
              priority
            />
            {/* Soft left gradient so hero text is 100% crisp and readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent" />
          </div>

          {/* Dark Mode Hero Image */}
          <div className="hidden dark:block absolute inset-0 w-full h-full opacity-40 transition-opacity duration-500">
            <Image
              src="/images/dark_mode_background.png"
              alt="Hero Background Dark"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center right' }}
              quality={90}
              priority
            />
            {/* Soft dark gradient on left */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>
        </div>

        {/* Top Header */}
        <header className="relative w-full px-6 sm:px-12 py-5 z-40 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <BrandLogo className="object-contain w-auto h-12" priority />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight leading-none text-gray-900 dark:text-white">CareerMap</span>
              <span className="text-[10px] font-bold text-blue-600 dark:text-orange-500 tracking-wider uppercase">Spatial Intelligence</span>
            </div>
          </Link>

          {/* Center Nav */}
          <div className="hidden lg:flex items-center gap-8 bg-white/75 dark:bg-black/50 backdrop-blur-md border border-white/60 dark:border-white/10 px-8 py-2.5 rounded-full shadow-xs">
            {navLinks.map((link, i) => (
              <Link key={i} href={link.href} className="text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-orange-400 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Nav */}
          <div className="flex items-center gap-3 sm:gap-4 z-10">
            <div className="bg-white/80 dark:bg-black/60 backdrop-blur-md border border-slate-200/80 dark:border-white/10 rounded-full p-2 shadow-xs">
              <ThemeToggle />
            </div>
            <Link href="/login" className="bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white px-7 py-2.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/25 dark:shadow-orange-600/25 transition-all">
              Login <ArrowRight size={15} />
            </Link>
          </div>
        </header>

        {/* Main Hero Body */}
        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-center py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50/90 dark:bg-orange-500/10 border border-blue-200/70 dark:border-orange-500/20 px-3.5 py-1.5 rounded-full w-fit mb-5 backdrop-blur-sm shadow-2xs">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-orange-500 animate-pulse" />
                <span className="text-xs font-bold text-blue-700 dark:text-orange-400">AI-Powered Career Discovery</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-4">
                Find Your Next <br />
                Role on <span className="text-blue-600 dark:text-orange-500">the Map</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-md font-medium mb-6 leading-relaxed">
                Explore real opportunities, skill demands, and top companies across India — powered by AI, geospatial intelligence and real-time data.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Link href="/dashboard?tab=overview">
                  <button className="w-full sm:w-auto bg-blue-600 dark:bg-orange-600 hover:bg-blue-700 dark:hover:bg-orange-500 text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/25 dark:shadow-orange-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                    <Compass size={18} />
                    Launch Interactive Map
                    <ArrowRight size={16} />
                  </button>
                </Link>
                <Link href="/dashboard?tab=jobs">
                  <button className="w-full sm:w-auto bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 backdrop-blur-md border border-slate-200 dark:border-white/10 text-gray-900 dark:text-white px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
                    <Briefcase size={18} />
                    Browse All Openings
                  </button>
                </Link>
              </div>

              {/* 4 Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-4 border-y border-slate-200/60 dark:border-white/10 mb-6">
                <div>
                  <span className="text-2xl font-black text-gray-900 dark:text-white block">250K+</span>
                  <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">Verified Jobs</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-gray-900 dark:text-white block">10K+</span>
                  <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">Companies</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-gray-900 dark:text-white block">500+</span>
                  <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">Skills Mapped</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-gray-900 dark:text-white block">28+</span>
                  <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">Indian Cities</span>
                </div>
              </div>

              {/* Trusted by row */}
              <div>
                <p className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2.5">
                  TRUSTED BY LEARNERS & PROFESSIONALS FROM
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {trustedCompanies.map((company) => (
                    <div key={company} className="bg-white/70 dark:bg-white/5 backdrop-blur-sm border border-slate-200/70 dark:border-white/10 px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-2xs">
                      <CompanyLogo company={company} size="sm" />
                      <span className="text-[11px] font-bold text-gray-800 dark:text-gray-200">{company}</span>
                    </div>
                  ))}
                  <Link href="/dashboard?tab=companies" className="text-xs font-bold text-blue-600 dark:text-orange-400 ml-1 hover:underline cursor-pointer">
                    and more →
                  </Link>
                </div>
              </div>

            </div>

            {/* Right Column: 2 Rows and 2 Columns Professional Grid */}
            <div className="lg:col-span-7 flex items-center justify-center lg:justify-end relative w-full hidden lg:flex my-auto">
              <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full max-w-[580px] relative z-20">
                
                {/* ROW 1, COL 1: Software Engineer (Google - Bengaluru) */}
                <Link
                  href="/dashboard?tab=jobs"
                  className="bg-white/95 dark:bg-[#151518]/95 backdrop-blur-xl rounded-[24px] p-5 shadow-lg hover:shadow-2xl border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-orange-500/40 transition-all hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 font-medium mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-blue-600 dark:text-orange-400" />
                        Bengaluru, KA
                      </span>
                      <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                        ₹40L PA
                      </span>
                    </div>
                    <h4 className="font-extrabold text-sm text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors line-clamp-1">
                      Software Engineer
                    </h4>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CompanyLogo company="Google" size="sm" />
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Google</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-blue-50 dark:bg-orange-500/10 flex items-center justify-center text-blue-600 dark:text-orange-500 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-orange-500 transition-colors">
                        <ArrowRight size={13} />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2.5 pt-2 border-t border-slate-100 dark:border-white/5 text-[10px] font-semibold text-gray-500">
                      <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Full-time</span>
                      <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">On-site</span>
                    </div>
                  </div>
                </Link>

                {/* ROW 1, COL 2: Backend Engineer (Amazon - Mumbai) */}
                <Link
                  href="/dashboard?tab=jobs"
                  className="bg-white/95 dark:bg-[#151518]/95 backdrop-blur-xl rounded-[24px] p-5 shadow-lg hover:shadow-2xl border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-orange-500/40 transition-all hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 font-medium mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-blue-600 dark:text-orange-400" />
                        Mumbai, MH
                      </span>
                      <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                        ₹32L PA
                      </span>
                    </div>
                    <h4 className="font-extrabold text-sm text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors line-clamp-1">
                      Backend Engineer
                    </h4>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CompanyLogo company="Amazon" size="sm" />
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Amazon</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-blue-50 dark:bg-orange-500/10 flex items-center justify-center text-blue-600 dark:text-orange-500 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-orange-500 transition-colors">
                        <ArrowRight size={13} />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2.5 pt-2 border-t border-slate-100 dark:border-white/5 text-[10px] font-semibold text-gray-500">
                      <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Full-time</span>
                      <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">On-site</span>
                    </div>
                  </div>
                </Link>

                {/* ROW 2, COL 1: Data Analyst (Microsoft - Hyderabad) */}
                <Link
                  href="/dashboard?tab=jobs"
                  className="bg-white/95 dark:bg-[#151518]/95 backdrop-blur-xl rounded-[24px] p-5 shadow-lg hover:shadow-2xl border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-orange-500/40 transition-all hover:-translate-y-1 flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 font-medium mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-blue-600 dark:text-orange-400" />
                        Hyderabad, TG
                      </span>
                      <span className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                        ₹28L PA
                      </span>
                    </div>
                    <h4 className="font-extrabold text-sm text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-orange-400 transition-colors line-clamp-1">
                      Data Analyst
                    </h4>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CompanyLogo company="Microsoft" size="sm" />
                        <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Microsoft</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-blue-50 dark:bg-orange-500/10 flex items-center justify-center text-blue-600 dark:text-orange-500 group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-orange-500 transition-colors">
                        <ArrowRight size={13} />
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2.5 pt-2 border-t border-slate-100 dark:border-white/5 text-[10px] font-semibold text-gray-500">
                      <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Full-time</span>
                      <span className="bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded">Hybrid</span>
                    </div>
                  </div>
                </Link>

                {/* ROW 2, COL 2: High Demand Areas Market Metric Card */}
                <div className="bg-white/95 dark:bg-[#151518]/95 backdrop-blur-xl rounded-[24px] p-5 shadow-lg border border-slate-200/80 dark:border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-extrabold text-xs text-gray-900 dark:text-white">High Demand Areas</h4>
                      <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded">
                        India 2026
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">Hiring surge across tier-1 tech hubs</p>
                  </div>

                  <div className="py-2">
                    <div className="flex items-end gap-2 h-14 mb-2">
                      <div className="w-1/5 bg-blue-200 dark:bg-orange-900/50 rounded-t-md h-[40%]" title="NCR" />
                      <div className="w-1/5 bg-blue-300 dark:bg-orange-800/60 rounded-t-md h-[60%]" title="Pune" />
                      <div className="w-1/5 bg-blue-400 dark:bg-orange-700/70 rounded-t-md h-[80%]" title="Hyderabad" />
                      <div className="w-1/5 bg-blue-600 dark:bg-orange-500 rounded-t-md h-[100%]" title="Bengaluru" />
                      <div className="w-1/5 bg-blue-500 dark:bg-orange-600 rounded-t-md h-[70%]" title="Mumbai" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/5">
                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">Quarterly Growth</span>
                    <span className="text-xs font-black text-blue-600 dark:text-orange-500">+32% YoY</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Mobile Cards Preview */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="bg-white/90 dark:bg-[#151518]/90 backdrop-blur-md rounded-xl p-4 border border-slate-200/70 dark:border-white/10 shadow-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <CompanyLogo company="Google" size="sm" />
                  <span className="text-xs font-black text-emerald-600">₹40L PA</span>
                </div>
                <h4 className="font-bold text-xs text-gray-900 dark:text-white">Software Engineer</h4>
                <p className="text-[10px] text-gray-500">Bengaluru, KA • Full-time</p>
              </div>

              <div className="bg-white/90 dark:bg-[#151518]/90 backdrop-blur-md rounded-xl p-4 border border-slate-200/70 dark:border-white/10 shadow-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <CompanyLogo company="Amazon" size="sm" />
                  <span className="text-xs font-black text-emerald-600">₹32L PA</span>
                </div>
                <h4 className="font-bold text-xs text-gray-900 dark:text-white">Backend Engineer</h4>
                <p className="text-[10px] text-gray-500">Mumbai, MH • Full-time</p>
              </div>
            </div>

          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="relative z-20 w-full px-6 sm:px-12 py-4 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase gap-3">
          <div>
            EXPLORE <span className="mx-2">•</span> LEARN <span className="mx-2">•</span> CONNECT <span className="mx-2">•</span> GROW
          </div>
          <button 
            onClick={scrollToContent} 
            className="flex flex-col items-center gap-1 cursor-pointer hover:text-blue-600 dark:hover:text-orange-500 transition-colors"
          >
            <div className="flex items-center gap-1.5">
              <Mouse size={14} />
              <span>Scroll to explore</span>
              <ChevronDown size={14} />
            </div>
          </button>
          <div className="text-right hidden md:block">
            A BRIGHTER TOMORROW IS CLOSER THAN YOU THINK
          </div>
        </div>

      </section>

      {/* ===================== PLATFORM FEATURES ===================== */}
      <section id="platform-features" className="relative z-10 w-full max-w-[1700px] mx-auto px-6 sm:px-12 py-20 border-t border-slate-200/70 dark:border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-orange-500/10 border border-blue-200/70 dark:border-orange-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 dark:text-orange-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            Everything You Need to Navigate Your Tech Career
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
            From spatial market demand to curriculum mastery, CareerMap provides unmatched transparency for engineering careers in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="bg-white dark:bg-[#151518] rounded-3xl p-7 border border-slate-200/80 dark:border-white/10 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-orange-500/10 flex items-center justify-center mb-5 border border-blue-100 dark:border-orange-500/20">
                {feat.icon}
              </div>
              <h3 className="font-extrabold text-lg text-gray-900 dark:text-white mb-2">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== WORKFLOW SECTION ===================== */}
      <section className="relative z-10 w-full max-w-[1700px] mx-auto px-6 sm:px-12 py-20 bg-slate-100/60 dark:bg-white/[0.01] border-y border-slate-200/70 dark:border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-orange-500/10 border border-blue-200/70 dark:border-orange-500/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-700 dark:text-orange-400 mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-4">
            How CareerMap AI Works
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium">
            Four streamlined steps connecting your current skillset to high-growth tech positions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col relative">
              <div className="text-4xl sm:text-5xl font-black text-blue-600/30 dark:text-orange-500/30 mb-3 font-mono">
                {step.num}
              </div>
              <h3 className="font-extrabold text-base sm:text-lg text-gray-900 dark:text-white mb-2">{step.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== CALL TO ACTION ===================== */}
      <section className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-20">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 dark:from-orange-600 dark:via-amber-600 dark:to-orange-700 rounded-[32px] p-8 sm:p-16 text-white text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 max-w-2xl">
            Ready to Map Your Career with Geospatial Intelligence?
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-xl font-medium mb-8 leading-relaxed">
            Join thousands of students and engineers discovering high-salary roles, learning paths, and placement analytics across India.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/login">
              <button className="bg-white text-blue-600 dark:text-orange-600 font-extrabold px-8 py-4 rounded-2xl text-sm sm:text-base shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer">
                Get Started for Free
              </button>
            </Link>
            <Link href="/courses">
              <button className="bg-white/15 hover:bg-white/25 border border-white/30 text-white font-extrabold px-8 py-4 rounded-2xl text-sm sm:text-base backdrop-blur-md transition-all cursor-pointer">
                Explore Free Courses
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER WITH TERMS & PRIVACY ===================== */}
      <footer className="relative z-10 w-full bg-white dark:bg-[#0c0c0e] border-t border-slate-200/80 dark:border-white/10 pt-16 pb-12">
        <div className="max-w-[1700px] mx-auto px-6 sm:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
            
            {/* Brand Column */}
            <div className="lg:col-span-2 flex flex-col">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <BrandLogo className="object-contain w-auto h-12" priority />
                <div className="flex flex-col">
                  <span className="font-extrabold text-xl tracking-tight leading-none text-gray-900 dark:text-white">CareerMap</span>
                  <span className="text-[10px] font-bold text-blue-600 dark:text-orange-500 tracking-wider uppercase">Spatial Intelligence</span>
                </div>
              </Link>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-sm mb-6">
                CareerMap AI delivers real-time geospatial job intelligence, curriculum mastery, and algorithmic skill matching for India's tech workforce.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40 px-3 py-1.5 rounded-full w-fit">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Real-Time Data Feed Active</span>
              </div>
            </div>

            {/* Links Column 1: Explore */}
            <div className="flex flex-col">
              <h4 className="font-extrabold text-xs text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Explore
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs font-medium text-gray-600 dark:text-gray-400">
                <li><Link href="/dashboard?tab=overview" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Map Discovery</Link></li>
                <li><Link href="/dashboard?tab=jobs" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Job Openings</Link></li>
                <li><Link href="/dashboard?tab=companies" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Top Tech Hubs</Link></li>
                <li><Link href="/dashboard?tab=saved" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Saved Opportunities</Link></li>
                <li><Link href="/code" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Code Playground</Link></li>
              </ul>
            </div>

            {/* Links Column 2: Curriculums */}
            <div className="flex flex-col">
              <h4 className="font-extrabold text-xs text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Curriculums
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs font-medium text-gray-600 dark:text-gray-400">
                <li><Link href="/courses" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Full Stack Web (MERN)</Link></li>
                <li><Link href="/courses" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Machine Learning & AI</Link></li>
                <li><Link href="/courses" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Data Science & Analytics</Link></li>
                <li><Link href="/courses" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">DSA & Problem Solving</Link></li>
                <li><Link href="/courses" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Verifiable Certificates</Link></li>
              </ul>
            </div>

            {/* Links Column 3: Platform */}
            <div className="flex flex-col">
              <h4 className="font-extrabold text-xs text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Platform
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs font-medium text-gray-600 dark:text-gray-400">
                <li><Link href="/login" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Student Login</Link></li>
                <li><Link href="/profile" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Skill Assessment</Link></li>
                <li><Link href="/dashboard" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">Candidate Dashboard</Link></li>
                <li><span className="text-gray-400 dark:text-gray-600">Smart India Hackathon 2026</span></li>
              </ul>
            </div>

            {/* Links Column 4: Legal & Compliance */}
            <div className="flex flex-col">
              <h4 className="font-extrabold text-xs text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                Legal & Compliance
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs font-medium text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="/terms" className="text-blue-600 dark:text-orange-400 font-bold hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-blue-600 dark:text-orange-400 font-bold hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li><span className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">Cookie Settings</span></li>
                <li><span className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">Security Standards</span></li>
                <li><span className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">Responsible AI Guidelines</span></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200/60 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
            <p>
              © 2026 CareerMap AI. Built for Smart India Hackathon. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/dashboard?tab=overview" className="hover:text-blue-600 dark:hover:text-orange-400 transition-colors">
                Interactive Map
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
