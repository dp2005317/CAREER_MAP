"use client";

import React, { useState } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MobileDock } from "@/components/layout/MobileDock";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { ProfileSettings } from "@/components/profile/ProfileSettings";
import { OnboardingModal } from "@/components/profile/OnboardingModal";
import { useAuth } from "@/database/authContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, profile } = useAuth();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#EEF2F6] dark:bg-black text-gray-800 dark:text-zinc-100 antialiased font-sans">
      <AppSidebar
        activeTab="profile"
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onTabChange={(tab) => {
          if (tab === "courses") {
            router.push("/courses");
            return;
          }
          router.push(`/dashboard?tab=${tab}`);
        }}
      />
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
        <DashboardHeader
          title="Profile Settings"
          user={user || profile}
          hasResume={!!profile?.resumeName}
          onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          onOpenResumeUpload={() => setIsOnboardingOpen(true)}
        />
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 sm:py-8 pb-[96px] md:pb-8 flex flex-col custom-scrollbar">
          <div className="max-w-6xl mx-auto w-full mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mb-2">Account Settings</h1>
            <p className="text-sm text-gray-500 dark:text-zinc-400 font-medium">Manage your professional identity, career goals, and resume details.</p>
          </div>
          
          <ProfileSettings onOpenResumeUpload={() => setIsOnboardingOpen(true)} />
          
        </main>
      </div>

      <OnboardingModal 
        isOpen={isOnboardingOpen} 
        onClose={() => setIsOnboardingOpen(false)} 
        onComplete={() => setIsOnboardingOpen(false)} 
      />

      {/* Mobile Dock */}
      <MobileDock
        activeTab=""
        onTabChange={(tab) => {
          if (tab === "courses") {
            router.push("/courses");
            return;
          }
          router.push(`/dashboard?tab=${tab}`);
        }}
        onOpenProfile={() => router.push("/profile")}
      />
    </div>
  );
}
