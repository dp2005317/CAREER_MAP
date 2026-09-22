"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Bookmark, 
  Map as MapIcon, 
  Building2, 
  Briefcase, 
  ChevronRight, 
  Sparkles,
  Compass,
  GraduationCap,
  LayoutDashboard,
  Code2,
  User as UserIcon,
  PanelLeftClose
} from "lucide-react";
import Image from "next/image";
import { BrandLogo } from "@/components/layout/BrandLogo";

interface AppSidebarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  onSearchChange?: (query: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
  isSidebarHidden?: boolean;
  onToggleCollapse?: () => void;
}

export function AppSidebar({ 
  activeTab = "map", 
  onTabChange,
  onSearchChange,
  isOpen = false,
  onClose,
  isSidebarHidden = false,
  onToggleCollapse
}: AppSidebarProps) {
  const [searchVal, setSearchVal] = useState("");

  const handleTabClick = (id: string) => {
    if (onTabChange) onTabChange(id);
  };

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
    if (onSearchChange) onSearchChange(e.target.value);
  };

  const navItems = [
    { id: "overview", label: "Dashboard", icon: LayoutDashboard, hasChevron: true },
    { id: "courses", label: "Courses", icon: GraduationCap, hasChevron: true, external: true },
    { id: "search", label: "Search", icon: Search },
    { id: "saved", label: "Saved Jobs", icon: Bookmark, hasChevron: true },
    { id: "map", label: "Map View", icon: MapIcon, hasChevron: true },
    { id: "companies", label: "Companies", icon: Building2, hasChevron: true },
    { id: "jobs", label: "All Jobs", icon: Briefcase },
    { id: "code", label: "Code Playground", icon: Code2, hasChevron: true, external: true },
  ];

  const bottomNavItems = [
    { id: "profile", label: "My Profile", icon: UserIcon, hasChevron: true, external: true }
  ];

  return (
    <>
      
      <aside 
        className={`hidden lg:flex flex-col justify-between relative transition-all duration-300 ease-in-out z-50 h-screen bg-white/65 dark:bg-[#08090e]/60 backdrop-blur-xl border-r border-white/60 dark:border-white/10 shrink-0 select-none ${
          isSidebarHidden 
            ? "w-0 p-0 m-0 border-r-0 opacity-0 overflow-hidden pointer-events-none" 
            : "w-64 p-4 opacity-100"
        }`}
      >
        <div className="flex flex-col gap-5">
        {/* Logo / Brand & Collapse Button */}
        <div className="flex items-center justify-between gap-2 pt-1 pb-1">
          <Link href="/" className="flex items-center gap-2.5 min-w-0 flex-1 group">
            <div className="flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <BrandLogo className="object-contain w-auto h-8" priority />
            </div>
            <div className="min-w-0 flex flex-col justify-center">
              <h1 className="font-extrabold text-gray-900 dark:text-white text-base tracking-tight leading-tight truncate">
                CareerMap
              </h1>
              <span className="text-[9px] font-bold text-blue-600 dark:text-orange-500 tracking-wider uppercase whitespace-nowrap leading-none mt-0.5">
                Spatial Discovery
              </span>
            </div>
          </Link>
        </div>

        {/* Quick Search - Clean Frosted Pill */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchVal}
            onChange={handleSearchInput}
            placeholder="Search roles or skills..."
            className="w-full pl-9 pr-3.5 py-2 bg-white/70 dark:bg-white/5 text-xs font-medium text-gray-800 dark:text-white rounded-full border border-white/80 dark:border-white/10 shadow-xs focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-orange-500/20 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Category Label */}
        <div className="px-2 pt-1">
          <span className="text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase">
            General
          </span>
        </div>

        {/* Navigation Items - Clean Frosted Pill List */}
        <nav className="flex flex-col gap-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            const isExternal = (item as any).external;
            const isSubItem = (item as any).isSubItem;
            
            if (isExternal) {
              const href = item.id === "code" ? "/code" : "/courses";
              return (
                <a
                  key={item.id}
                  href={href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer no-underline ${
                    isSubItem ? "ml-4 py-2 px-3 text-[11px]" : ""
                  } ${
                    isActive
                      ? "bg-white text-gray-950 shadow-sm border border-white/90 dark:bg-white/15 dark:text-white dark:border-white/15"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`${isSubItem ? "w-3 h-3" : "w-4 h-4"} ${isActive ? "text-blue-600 dark:text-orange-400" : "text-gray-500 dark:text-gray-400"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.hasChevron && (
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-gray-700 dark:text-gray-300" : "text-gray-400/60"}`} />
                  )}
                </a>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer ${
                  isSubItem ? "ml-4 py-2 px-3 text-[11px]" : ""
                } ${
                  isActive
                    ? "bg-white text-gray-950 shadow-sm border border-white/90 dark:bg-white/15 dark:text-white dark:border-white/15"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`${isSubItem ? "w-3 h-3" : "w-4 h-4"} ${isActive ? "text-blue-600 dark:text-orange-400" : "text-gray-500 dark:text-gray-400"}`} />
                  <span>{item.label}</span>
                </div>
                {item.hasChevron && (
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-gray-700 dark:text-gray-300" : "text-gray-400/60"}`} />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer / Bottom Actions */}
      <div className="flex flex-col gap-3 mt-auto pt-4">
        <div className="px-2">
          <span className="text-[10px] font-bold tracking-wider text-gray-400 dark:text-gray-500 uppercase">
            Account
          </span>
        </div>
        <nav className="flex flex-col gap-1">
          {bottomNavItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            const href = item.id === "profile" ? "/profile" : "#";
            return (
              <a
                key={item.id}
                href={href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer no-underline ${
                  isActive
                    ? "bg-white text-gray-950 shadow-sm border border-white/90 dark:bg-white/15 dark:text-white dark:border-white/15"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-blue-600 dark:text-orange-400" : "text-gray-500 dark:text-gray-400"}`} />
                  <span>{item.label}</span>
                </div>
                {item.hasChevron && (
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-gray-700 dark:text-gray-300" : "text-gray-400/60"}`} />
                )}
              </a>
            );
          })}
        </nav>
        
        {/* Footer Info */}
        <div className="pt-3 border-t border-white/60 dark:border-white/10 flex flex-col gap-1 text-[11px] text-gray-400 dark:text-gray-500 font-medium px-2">
          <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-orange-400" />
            <span>AI Intelligence Active</span>
          </div>
          <p>© 2026 CareerMap AI</p>
        </div>
      </div>
    </aside>
    </>
  );
}
