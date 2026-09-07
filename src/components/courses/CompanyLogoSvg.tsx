"use client";

import React from "react";

interface LogoProps {
  company: string;
  size?: number;
  className?: string;
}

const logoMap: Record<string, { svg: React.ReactNode; color: string }> = {
  Google: {
    color: "#4285F4",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" fill="#FFC107"/>
        <path d="M6.3 14.7l7 5.1C14.8 16.2 19 13.5 24 13.5c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" fill="#FF3D00"/>
        <path d="M24 44c5.4 0 10.3-1.8 14.1-5l-6.5-5.5C29.5 35.1 26.9 36 24 36c-6 0-11.1-4-12.8-9.5l-7 5.4C7.5 38.2 15.2 44 24 44z" fill="#4CAF50"/>
        <path d="M44.5 20H24v8.5h11.8c-1 3.2-3 5.8-5.6 7.5l6.5 5.5c3.8-3.5 6.3-8.7 6.3-15.5 0-1.3-.2-2.7-.5-4z" fill="#1976D2"/>
      </svg>
    ),
  },
  Microsoft: {
    color: "#00A4EF",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" fill="#F25022"/>
        <rect x="26" y="2" width="20" height="20" fill="#7FBA00"/>
        <rect x="2" y="26" width="20" height="20" fill="#00A4EF"/>
        <rect x="26" y="26" width="20" height="20" fill="#FFB900"/>
      </svg>
    ),
  },
  IBM: {
    color: "#0530AD",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#0530AD"/>
        <g fill="white">
          <rect x="8" y="10" width="32" height="3"/>
          <rect x="8" y="18" width="32" height="3"/>
          <rect x="8" y="26" width="32" height="3"/>
          <rect x="8" y="34" width="32" height="3"/>
          <rect x="6" y="8" width="3" height="32" rx="1.5"/>
          <rect x="39" y="8" width="3" height="32" rx="1.5"/>
        </g>
      </svg>
    ),
  },
  AWS: {
    color: "#FF9900",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#232F3E"/>
        <path d="M14 30c-3.5 2.5-8.5 3.8-13 3.8C.5 33.8-2 31 -2 31s4 3 10 3c5 0 10-1.5 13-4" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M18 22c-.5-.7-3.2-1.6-3.2-1.6s-.5.8-.5.8 1-.4 2.8.2 1.8 2.8 1.8 2.8.2-1-.9-2.2" fill="#FF9900"/>
        <text x="24" y="20" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="11" fill="#FF9900">aws</text>
      </svg>
    ),
  },
  Meta: {
    color: "#0668E1",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.2 24c0-4.5 3.8-6.8 8.5-6.8 3 0 5.2 1.2 5.2 1.2s-1.8-2.7-5.2-2.7c-4.5 0-8.5 2.8-8.5 8.3 0 8 7 12 7 12s-2.3-1.8-3.5-4.2c-1.3 2.3-2.5 4.2-2.5 4.2S16.5 33 19.2 24z" fill="#0668E1"/>
        <path d="M28.8 24c0 4.5-3.8 6.8-8.5 6.8-3 0-5.2-1.2-5.2-1.2s1.8 2.7 5.2 2.7c4.5 0 8.5-2.8 8.5-8.3 0-8-7-12-7-12s2.3 1.8 3.5 4.2c1.3-2.3 2.5-4.2 2.5-4.2S31.5 15 28.8 24z" fill="#0668E1"/>
      </svg>
    ),
  },
  NVIDIA: {
    color: "#76B900",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#1A1A1A"/>
        <text x="24" y="30" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="14" fill="#76B900">N</text>
        <rect x="6" y="34" width="36" height="3" rx="1.5" fill="#76B900"/>
      </svg>
    ),
  },
  Oracle: {
    color: "#C74634",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#C74634"/>
        <text x="24" y="30" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="13" fill="white">O</text>
      </svg>
    ),
  },
  Cisco: {
    color: "#049FD9",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#049FD9"/>
        <g transform="translate(10, 8)">
          <path d="M14 2C7.4 2 2 7.4 2 14s5.4 12 12 12 12-5.4 12-12S20.6 2 14 2z" fill="none" stroke="white" strokeWidth="2"/>
          <path d="M2 14C2 7.4 7.4 2 14 2" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="14" cy="6" r="2" fill="white"/>
          <circle cx="22" cy="14" r="2" fill="white"/>
          <circle cx="6" cy="14" r="2" fill="white"/>
        </g>
      </svg>
    ),
  },
  GitHub: {
    color: "#24292E",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#24292E"/>
        <path d="M24 6C14.1 6 6 14.1 6 24c0 7.9 5.2 14.7 12.4 17.1.9.2 1.2-.4 1.2-.9v-3.1c-5 .9-6.1-2.5-6.1-2.5-.8-2.1-2-2.7-2-2.7-1.7-1.1.1-1.1.1-1.1 1.8.1 2.8 1.9 2.8 1.9 1.6 2.8 4.3 2 5.4 1.5.2-1.2.6-2 1.1-2.5-4-.5-8.2-2-8.2-8.9 0-2 .7-3.6 1.9-4.9-.2-.5-.8-2.3.2-4.8 0 0 1.5-.5 5 1.9 1.4-.4 3-.6 4.5-.6s3.1.2 4.5.6c3.5-2.4 5-1.9 5-1.9 1 2.5.4 4.3.2 4.8 1.2 1.3 1.9 2.9 1.9 4.9 0 6.9-4.2 8.4-8.2 8.9.6.6 1.2 1.6 1.2 3.1v4.6c0 .5.3 1.1 1.2.9C36.8 38.7 42 31.9 42 24c0-9.9-8.1-18-18-18z" fill="white"/>
      </svg>
    ),
  },
  Docker: {
    color: "#2496ED",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#2496ED"/>
        <rect x="10" y="20" width="4" height="3" rx="0.5" fill="white"/>
        <rect x="15" y="20" width="4" height="3" rx="0.5" fill="white"/>
        <rect x="20" y="20" width="4" height="3" rx="0.5" fill="white"/>
        <rect x="15" y="16" width="4" height="3" rx="0.5" fill="white"/>
        <rect x="20" y="16" width="4" height="3" rx="0.5" fill="white"/>
        <rect x="20" y="12" width="4" height="3" rx="0.5" fill="white"/>
        <path d="M8 26c0 0 2 6 16 6s16-6 16-6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  MongoDB: {
    color: "#4DB33D",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#4DB33D"/>
        <path d="M16 10v28l8-6V16z" fill="white" opacity="0.9"/>
        <path d="M24 10v28l8-6V16z" fill="white" opacity="0.7"/>
        <ellipse cx="24" cy="36" rx="10" ry="3" fill="#3D8B2F"/>
      </svg>
    ),
  },
  "Red Hat": {
    color: "#EE0000",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#EE0000"/>
        <text x="24" y="32" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="16" fill="white">RH</text>
      </svg>
    ),
  },
  Salesforce: {
    color: "#00A1E0",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#00A1E0"/>
        <path d="M16 18c3.3-2.4 7.6-3 11.5-1.5 3.8 1.5 6.5 4.9 7 8.8.5 4-1.5 8-5 10.2" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="14" cy="32" r="4" fill="white"/>
        <circle cx="24" cy="34" r="4" fill="white"/>
        <circle cx="34" cy="32" r="4" fill="white"/>
      </svg>
    ),
  },
  "Harvard CS50": {
    color: "#A51C30",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#A51C30"/>
        <text x="24" y="22" textAnchor="middle" fontFamily="serif" fontWeight="900" fontSize="11" fill="white">H</text>
        <text x="24" y="36" textAnchor="middle" fontFamily="Arial" fontWeight="700" fontSize="8" fill="white">CS50</text>
      </svg>
    ),
  },
  freeCodeCamp: {
    color: "#0A0A23",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#0A0A23"/>
        <path d="M16 14l8 10-8 10M32 14l-8 10 8 10" stroke="#FECE2F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  OpenAI: {
    color: "#10A37F",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#10A37F"/>
        <path d="M24 10c-4 0-7.5 1.5-10 4C11.5 16.5 10 20 10 24c0 2 .5 4 1.5 5.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M24 10c4 0 7.5 1.5 10 4C36.5 16.5 38 20 38 24c0 2-.5 4-1.5 5.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M24 38c-4 0-7.5-1.5-10-4C11.5 31.5 10 28 10 24c0-2 .5-4 1.5-5.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M24 38c4 0 7.5-1.5 10-4C36.5 31.5 38 28 38 24c0-2-.5-4-1.5-5.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" fill="white"/>
      </svg>
    ),
  },
  "Stanford Online": {
    color: "#8C1515",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#8C1515"/>
        <text x="24" y="28" textAnchor="middle" fontFamily="serif" fontWeight="900" fontSize="18" fill="white">S</text>
      </svg>
    ),
  },
  "MIT OCW": {
    color: "#750014",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#750014"/>
        <text x="24" y="28" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="12" fill="white">MIT</text>
      </svg>
    ),
  },
  Intel: {
    color: "#0071C5",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#0071C5"/>
        <g fill="none" stroke="white" strokeWidth="1.5">
          <rect x="12" y="12" width="24" height="24" rx="3"/>
          <line x1="12" y1="18" x2="36" y2="18"/>
          <line x1="12" y1="24" x2="36" y2="24"/>
          <line x1="12" y1="30" x2="36" y2="30"/>
          <line x1="18" y1="12" x2="18" y2="36"/>
          <line x1="24" y1="12" x2="24" y2="36"/>
          <line x1="30" y1="12" x2="30" y2="36"/>
        </g>
      </svg>
    ),
  },
  LinkedIn: {
    color: "#0A66C2",
    svg: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#0A66C2"/>
        <text x="10" y="32" fontFamily="Arial" fontWeight="900" fontSize="22" fill="white">in</text>
      </svg>
    ),
  },
};

const fallbackColors = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-red-600",
];

function getHash(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export function CompanyLogoSvg({ company, size = 40, className = "" }: LogoProps) {
  const entry = logoMap[company];

  if (entry) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl overflow-hidden shadow-md ${className}`}
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
      >
        <div className="w-full h-full">{entry.svg}</div>
      </div>
    );
  }

  // Fallback: gradient circle with initials
  const gradientClass = fallbackColors[getHash(company) % fallbackColors.length];
  const initial = company ? company.slice(0, 2).toUpperCase() : "CO";

  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-gradient-to-br ${gradientClass} text-white font-black shadow-md ${className}`}
      style={{ width: size, height: size, minWidth: size, minHeight: size, fontSize: size * 0.35 }}
    >
      {initial}
    </div>
  );
}
