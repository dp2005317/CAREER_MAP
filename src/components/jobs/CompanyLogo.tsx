"use client";

import React, { useState } from "react";

interface CompanyLogoProps {
  company: string;
  logoUrl?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

// Local official brand SVGs in /public/logos
const LOCAL_LOGOS: Record<string, string> = {
  google: "/logos/google.svg",
  microsoft: "/logos/microsoft.svg",
  apple: "/logos/apple.svg",
  amazon: "/logos/amazon.svg",
  meta: "/logos/meta.svg",
  netflix: "/logos/netflix.svg",
  flipkart: "/logos/flipkart.svg",
  zomato: "/logos/zomato.svg",
  swiggy: "/logos/swiggy.svg",
  phonepe: "/logos/phonepe.svg",
  razorpay: "/logos/razorpay.svg",
  uber: "/logos/uber.svg",
  intel: "/logos/intel.svg",
  samsung: "/logos/samsung.svg",
  tcs: "/logos/tcs.svg",
  "tata consultancy services": "/logos/tcs.svg",
  infosys: "/logos/infosys.svg",
  cisco: "/logos/cisco.svg",
  qualcomm: "/logos/qualcomm.svg",
  wipro: "/logos/wipro.svg",
  spotify: "/logos/spotify.svg",
  stripe: "/logos/stripe.svg",
  adobe: "/logos/adobe.svg",
  oracle: "/logos/oracle.svg",
  ibm: "/logos/ibm.svg",
  paytm: "/logos/paytm.svg",
};

function getGradientForCompany(company: string) {
  const gradients = [
    "from-blue-600 to-indigo-600",
    "from-purple-600 to-pink-600",
    "from-emerald-500 to-teal-700",
    "from-amber-500 to-orange-600",
    "from-rose-500 to-red-600",
    "from-cyan-600 to-blue-700",
    "from-violet-600 to-purple-800",
  ];
  let hash = 0;
  for (let i = 0; i < (company || "").length; i++) {
    hash = company.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradients[Math.abs(hash) % gradients.length];
}

export function CompanyLogo({ company, logoUrl, className = "", size = "md" }: CompanyLogoProps) {
  const [hasError, setHasError] = useState(false);
  const normalized = (company || "").toLowerCase().trim();
  
  const localLogo = LOCAL_LOGOS[normalized];
  const src = localLogo || logoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(company)}&background=0D8ABC&color=fff&rounded=true&bold=true`;

  const initial = company ? company.slice(0, 2).toUpperCase() : "CO";
  const sizeClasses = size === "lg" ? "w-20 h-20 text-2xl p-3" : size === "sm" ? "w-8 h-8 text-xs p-1" : "w-11 h-11 text-sm p-1.5";

  if (hasError) {
    return (
      <div
        className={`${sizeClasses} rounded-2xl bg-gradient-to-br ${getGradientForCompany(
          company
        )} text-white font-bold flex items-center justify-center shadow-md flex-shrink-0 select-none ${className}`}
      >
        {initial}
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses} rounded-2xl bg-white/95 border border-gray-100 shadow-xs flex items-center justify-center flex-shrink-0 overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt={`${company} logo`}
        className="w-full h-full object-contain"
        onError={() => setHasError(true)}
        loading="lazy"
      />
    </div>
  );
}
