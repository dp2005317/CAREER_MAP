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
        className={`hidden lg:flex flex-col justify-between relative transition-all duration-300 ease-in-out z-50 h-screen bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-r border-slate-200/80 dark:border-white/10 shrink-0 select-none ${
          isSidebarHidden 
            ? "w-0 p-0 m-0 border-r-0 opacity-0 overflow-hidden pointer-events-none" 
            : "w-64 p-4 opacity-100"
        }`}
      >
        <div className="flex flex-col gap-5">
        {/* Logo / Brand */}
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

        {/* Quick Search */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchVal}
            onChange={handleSearchInput}
            placeholder="Search roles, skills..."
            className="w-full pl-8 pr-9 py-2 bg-slate-100/80 dark:bg-white/5 text-xs font-medium text-gray-800 dark:text-white rounded-xl border border-slate-200/60 dark:border-white/10 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-orange-500/20 focus:border-blue-500 dark:focus:border-orange-500 outline-none transition-all placeholder:text-gray-400"
          />
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[9px] font-mono font-semibold text-gray-400 bg-white dark:bg-white/10 px-1.5 py-0.5 rounded border border-slate-200/60 dark:border-white/5">
            ⌘K
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            const isExternal = (item as any).external;
            const isSubItem = (item as any).isSubItem;
            
            const baseClass = `flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer no-underline ${
              isSubItem ? "ml-4 py-2 px-3 text-[11px]" : ""
            } ${
              isActive
                ? "bg-blue-50 text-blue-700 border border-blue-200/70 shadow-2xs dark:bg-orange-500/15 dark:text-orange-400 dark:border-orange-500/25"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5 border border-transparent"
            }`;

            if (isExternal) {
              const href = item.id === "code" ? "/code" : "/courses";
              return (
                <a key={item.id} href={href} className={baseClass}>
                  <div className="flex items-center gap-2.5">
                    <Icon className={`${isSubItem ? "w-3 h-3" : "w-4 h-4"} ${isActive ? "text-blue-600 dark:text-orange-400" : "text-gray-400 dark:text-gray-500"}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.hasChevron && (
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-blue-600/80 dark:text-orange-400/80" : "text-gray-300 dark:text-gray-600"}`} />
                  )}
                </a>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={baseClass}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`${isSubItem ? "w-3 h-3" : "w-4 h-4"} ${isActive ? "text-blue-600 dark:text-orange-400" : "text-gray-400 dark:text-gray-500"}`} />
                  <span>{item.label}</span>
                </div>
                {item.hasChevron && (
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-blue-600/80 dark:text-orange-400/80" : "text-gray-300 dark:text-gray-600"}`} />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer / Bottom Actions */}
      <div className="flex flex-col gap-3 mt-auto pt-4">
        <nav className="flex flex-col gap-1">
          {bottomNavItems.map((item) => {
            const isActive = activeTab === item.id;
            const Icon = item.icon;
            const href = item.id === "profile" ? "/profile" : "#";
            return (
              <a
                key={item.id}
                href={href}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer no-underline ${
                  isActive
                    ? "bg-blue-50 text-blue-700 border border-blue-200/70 shadow-2xs dark:bg-orange-500/15 dark:text-orange-400 dark:border-orange-500/25"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5 border border-transparent"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? "text-blue-600 dark:text-orange-400" : "text-gray-400 dark:text-gray-500"}`} />
                  <span>{item.label}</span>
                </div>
                {item.hasChevron && (
                  <ChevronRight className={`w-3.5 h-3.5 ${isActive ? "text-blue-600/80 dark:text-orange-400/80" : "text-gray-300 dark:text-gray-600"}`} />
                )}
              </a>
            );
          })}
        </nav>
        
        {/* Footer Info */}
        <div className="pt-3 border-t border-slate-200/60 dark:border-white/10 flex flex-col gap-1 text-[11px] text-gray-400 dark:text-gray-500 font-medium px-1">
          <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-orange-400" />
            <span>AI Intelligence Active</span>
          </div>
          <p className="text-[10px]">© 2026 CareerMap AI</p>
        </div>
      </div>
    </aside>
    </>
  );
}
