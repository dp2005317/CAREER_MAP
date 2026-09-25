"use client";

import React, { useState } from "react";

interface CompanyLogoProps {
  company: string;
  logoUrl?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

// Local official brand SVGs in /public/logos (Instant, 0 network latency, 100% reliable)
const LOCAL_LOGOS: Record<string, string> = {
  google: "/logos/google.svg",
  microsoft: "/logos/microsoft.svg",
  apple: "/logos/apple.svg",
  amazon: "/logos/amazon.svg",
  aws: "/logos/aws.svg",
  meta: "/logos/meta.svg",
  facebook: "/logos/meta.svg",
  netflix: "/logos/netflix.svg",
  flipkart: "/logos/flipkart.svg",
  zomato: "/logos/zomato.svg",
  swiggy: "/logos/swiggy.svg",
  phonepe: "/logos/phonepe.svg",
  razorpay: "/logos/razorpay.svg",
  cred: "/logos/cred.svg",
  uber: "/logos/uber.svg",
  intel: "/logos/intel.svg",
  samsung: "/logos/samsung.svg",
  tcs: "/logos/tcs.svg",
  "tata consultancy": "/logos/tcs.svg",
  tata: "/logos/tata.svg",
  infosys: "/logos/infosys.svg",
  finacle: "/logos/infosys.svg",
  cisco: "/logos/cisco.svg",
  qualcomm: "/logos/qualcomm.svg",
  wipro: "/logos/wipro.svg",
  spotify: "/logos/spotify.svg",
  stripe: "/logos/stripe.svg",
  adobe: "/logos/adobe.svg",
  oracle: "/logos/oracle.svg",
  ibm: "/logos/ibm.svg",
  paytm: "/logos/paytm.svg",
  cognizant: "/logos/cognizant.svg",
  capgemini: "/logos/capgemini.svg",
  pwc: "/logos/pwc.svg",
  deloitte: "/logos/deloitte.svg",
  accenture: "/logos/accenture.svg",
  zoho: "/logos/zoho.svg",
  ola: "/logos/ola.svg",
  postman: "/logos/postman.svg",
  pinnacle: "/logos/pinnacle.svg",
  webel: "/logos/webel.svg",
  target: "/logos/target.svg",
  databricks: "/logos/databricks.svg",
};

const BRAND_DOMAINS: Record<string, string> = {
  ltimindtree: "ltimindtree.com",
  techmahindra: "techmahindra.com",
  meesho: "meesho.com",
  groww: "groww.in",
  zerodha: "zerodha.com",
  honeywell: "honeywell.com",
  roku: "roku.com",
  toast: "toasttab.com",
  experian: "experian.com",
  crunchyroll: "crunchyroll.com",
  comcast: "comcast.com",
  speechify: "speechify.com",
  exl: "exlservice.com",
  faveo: "faveohelpdesk.com",
  truveta: "truveta.com",
  kaseya: "kaseya.com",
  joveo: "joveo.com",
  coindcx: "coindcx.com",
  smytten: "smytten.com",
  toddle: "toddleapp.com",
  nice: "nice.com",
};

function normalizeCompanyName(raw: string): string {
  return (raw || "")
    .toLowerCase()
    .replace(/\(.*?\)/g, " ") // Remove anything in parenthesis like (India), (Kolkata)
    .replace(/[^a-z0-9\s]/g, " ") // Clean punctuation
    .replace(/\b(labs|lab|tech|technology|technologies|internet|solutions|pvt|ltd|private|limited|corp|corporation|inc|innovations|digital|mobility|services|global)\b/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function resolveBrandLogo(company: string, providedUrl?: string): string {
  const norm = normalizeCompanyName(company);
  const rawLower = (company || "").toLowerCase();

  // 1. Direct or partial match against verified local high-res SVGs
  for (const [key, path] of Object.entries(LOCAL_LOGOS)) {
    if (norm === key || norm.startsWith(key + " ") || norm.endsWith(" " + key) || rawLower.includes(key)) {
      return path;
    }
  }

  // 2. If providedUrl is already a real valid image and NOT ui-avatars.com
  if (providedUrl && !providedUrl.includes("ui-avatars.com")) {
    return providedUrl;
  }

  // 3. Known domain mappings
  for (const [key, domain] of Object.entries(BRAND_DOMAINS)) {
    if (rawLower.includes(key) || norm.includes(key)) {
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    }
  }

  // 4. Extract first meaningful company keyword and query Google Favicon Service
  const firstWord = norm.split(" ")[0];
  if (firstWord && firstWord.length > 2) {
    return `https://www.google.com/s2/favicons?domain=${firstWord}.com&sz=128`;
  }

  return "";
}

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
  const src = resolveBrandLogo(company, logoUrl);

  const initial = company ? company.slice(0, 2).toUpperCase() : "CO";
  const sizeClasses =
    size === "lg"
      ? "w-20 h-20 text-2xl p-2.5"
      : size === "sm"
      ? "w-8 h-8 text-xs p-1"
      : "w-11 h-11 text-sm p-1.5";

  if (hasError || !src) {
    return (
      <div
        className={`${sizeClasses} rounded-2xl bg-gradient-to-br ${getGradientForCompany(
          company
        )} text-white font-extrabold flex items-center justify-center shadow-md flex-shrink-0 select-none border border-white/20 ${className}`}
      >
        {initial}
      </div>
    );
  }

  return (
    <div
      className={`${sizeClasses} rounded-2xl bg-white/95 dark:bg-white/90 border border-white/60 dark:border-white/30 shadow-xs flex items-center justify-center flex-shrink-0 overflow-hidden ${className}`}
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
