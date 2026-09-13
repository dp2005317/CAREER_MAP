"use client";

import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function BrandLogo({
  className = "object-contain w-auto h-16 scale-[1.3]",
  width = 200,
  height = 200,
  priority = false
}: BrandLogoProps) {
  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Light Mode Logo (Original Blue) */}
      <Image
        src="/logo.png"
        alt="CareerMap Logo"
        width={width}
        height={height}
        priority={priority}
        className={`dark:hidden ${className}`}
      />
      {/* Dark Mode Logo (Flame Orange) */}
      <Image
        src="/logo-orange.png"
        alt="CareerMap Logo"
        width={width}
        height={height}
        priority={priority}
        className={`hidden dark:block ${className}`}
      />
    </div>
  );
}
