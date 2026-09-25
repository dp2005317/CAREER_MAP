"use client";

import React, { useState, useMemo } from "react";
import Map, { Marker, NavigationControl, GeolocateControl } from "react-map-gl/maplibre";
import { Job } from "@/backend/mockData";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, Layers } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

interface InteractiveMapProps {
  jobs: Job[];
  selectedJob: Job | null;
  onJobSelect: (job: Job) => void;
  viewState: any;
  onMove: (evt: any) => void;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
  hasResumeSkills?: boolean;
  userLocation?: { lat: number; lng: number } | null;
}

const GOOGLE_MAPS_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
  process.env.NEXT_PUBLIC_GMAP_API_KEY ||
  "";

export const InteractiveMap = ({
  jobs,
  selectedJob,
  onJobSelect,
  viewState,
  onMove,
  searchQuery = "",
  onSearchChange,
  activeFilter = "All",
  onFilterChange,
  hasResumeSkills = false,
  userLocation,
}: InteractiveMapProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [mapType, setMapType] = useState<"gmap" | "satellite" | "theme">("gmap");

  const googleRoadmapStyle = useMemo(
    () => ({
      version: 8 as const,
      sources: {
        "google-roadmap": {
          type: "raster" as const,
          tiles: [
            `https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${GOOGLE_MAPS_KEY}`,
            `https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${GOOGLE_MAPS_KEY}`,
            `https://mt2.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${GOOGLE_MAPS_KEY}`,
            `https://mt3.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${GOOGLE_MAPS_KEY}`,
          ],
          tileSize: 256,
          attribution: "© Google Maps",
        },
      },
      layers: [
        {
          id: "google-roadmap-layer",
          type: "raster" as const,
          source: "google-roadmap",
          minzoom: 0,
          maxzoom: 22,
        },
      ],
    }),
    []
  );

  const googleSatelliteStyle = useMemo(
    () => ({
      version: 8 as const,
      sources: {
        "google-satellite": {
          type: "raster" as const,
          tiles: [
            `https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&key=${GOOGLE_MAPS_KEY}`,
            `https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&key=${GOOGLE_MAPS_KEY}`,
            `https://mt2.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&key=${GOOGLE_MAPS_KEY}`,
            `https://mt3.google.com/vt/lyrs=y&x={x}&y={y}&z={z}&key=${GOOGLE_MAPS_KEY}`,
          ],
          tileSize: 256,
          attribution: "© Google Maps Satellite",
        },
      },
      layers: [
        {
          id: "google-satellite-layer",
          type: "raster" as const,
          source: "google-satellite",
          minzoom: 0,
          maxzoom: 22,
        },
      ],
    }),
    []
  );

  const activeMapStyle = useMemo(() => {
    if (mapType === "gmap") return googleRoadmapStyle;
    if (mapType === "satellite") return googleSatelliteStyle;
    return isDark
      ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
      : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";
  }, [mapType, isDark, googleRoadmapStyle, googleSatelliteStyle]);

  const filters = hasResumeSkills 
    ? ["Recommended", "All", "Full Time", "Internship", "Remote"]
    : ["All", "Full Time", "Internship", "Remote"];

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 dark:border-white/10 bg-slate-50 dark:bg-black">
      {/* Search & Filter Floating Bar */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20 flex flex-col sm:flex-row items-start sm:items-center gap-2 max-w-[calc(100%-60px)] sm:max-w-[calc(100%-80px)]">
        {/* Search Input */}
        <div className="relative neu-card-sm px-3.5 py-2 flex items-center gap-2 min-w-[200px] w-full sm:w-auto">
          <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            placeholder="Search roles, companies..."
            className="w-full bg-transparent text-xs font-semibold text-gray-800 dark:text-white outline-none placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange && onFilterChange(f)}
              className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${
                activeFilter === f
                  ? "neu-btn-primary"
                  : "neu-btn text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {f === "Recommended" ? "Recommended" : (f === "All" ? "All Roles" : f)}
            </button>
          ))}
        </div>

        {/* Map Layer Switcher */}
        <div className="flex items-center gap-1 bg-white/90 dark:bg-black/80 backdrop-blur-md p-1 rounded-2xl border border-gray-200/80 dark:border-white/10 shadow-xs">
          <Layers className="w-3.5 h-3.5 text-gray-500 ml-1 mr-0.5 shrink-0 hidden sm:block" />
          <button
            type="button"
            onClick={() => setMapType("gmap")}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-xl transition-all cursor-pointer ${
              mapType === "gmap"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Google Maps
          </button>
          <button
            type="button"
            onClick={() => setMapType("satellite")}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-xl transition-all cursor-pointer ${
              mapType === "satellite"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            Satellite
          </button>
          <button
            type="button"
            onClick={() => setMapType("theme")}
            className={`px-2.5 py-1 text-[10px] font-bold rounded-xl transition-all cursor-pointer ${
              mapType === "theme"
                ? "bg-blue-600 text-white shadow-xs"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {isDark ? "Dark GL" : "Light GL"}
          </button>
        </div>
      </div>

      {/* Google Maps Active Badge */}
      {(mapType === "gmap" || mapType === "satellite") && (
        <div className="absolute bottom-2 left-2 z-10 pointer-events-none flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md border border-gray-200/60 dark:border-white/10 text-[10px] font-semibold text-gray-800 dark:text-gray-200 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Google Maps Engine</span>
        </div>
      )}

      <Map
        {...viewState}
        onMove={onMove}
        mapStyle={activeMapStyle}
        style={{ width: "100%", height: "100%" }}
        minZoom={3}
        maxBounds={[
          [65.0, 5.0], // Southwest coordinates (longitude, latitude)
          [100.0, 38.0] // Northeast coordinates (longitude, latitude)
        ]}
      >
        <GeolocateControl position="top-right" />
        <NavigationControl position="top-right" />

        {/* User Current Location Marker */}
        {userLocation && (
          <Marker
            longitude={userLocation.lng}
            latitude={userLocation.lat}
            anchor="center"
          >
            <div className="relative group cursor-pointer flex items-center justify-center">
              <div className="absolute -inset-2 rounded-full bg-blue-500/50 animate-ping" />
              <div className="relative w-5 h-5 rounded-full bg-blue-600 border-2 border-white shadow-xl flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <div className="absolute bottom-full mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-gray-900/95 text-white text-[10px] font-bold px-2.5 py-1 rounded-xl shadow-xl border border-white/20">
                You are here
              </div>
            </div>
          </Marker>
        )}

        {jobs
          .filter((job) => job.lat !== null && job.lng !== null)
          .map((job) => {
            const isSelected = selectedJob?.id === job.id;

            return (
              <Marker
                key={job.id}
                longitude={job.lng!}
                latitude={job.lat!}
                anchor="bottom"
                onClick={(e) => {
                  e.originalEvent.stopPropagation();
                  onJobSelect(job);
                }}
              >
                <div className="relative group cursor-pointer transition-transform duration-300">
                  {/* Ping animation on selected */}
                  {isSelected && (
                    <motion.div
                      layoutId="pulse"
                      className="absolute -top-1 -left-1 w-8 h-10 bg-orange-500 rounded-full animate-ping opacity-40"
                    />
                  )}

                  {/* Teardrop Pin */}
                  <div
                    className={`relative flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "scale-125 z-20"
                        : "group-hover:scale-115"
                    }`}
                  >
                    <svg
                      width="28"
                      height="36"
                      viewBox="0 0 28 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="filter drop-shadow-md"
                    >
                      <path
                        d="M14 0C6.268 0 0 6.268 0 14C0 24.5 14 36 14 36C14 36 28 24.5 28 14C28 6.268 21.732 0 14 0Z"
                        fill={isSelected ? (isDark ? "#EA580C" : "#2563EB") : (isDark ? "#F97316" : "#3B82F6")}
                      />
                      <circle cx="14" cy="14" r="5" fill="white" />
                    </svg>
                  </div>

                  {/* Floating tooltip */}
                  <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-30">
                    <div className="bg-gray-900/95 dark:bg-black/95 border border-white/15 text-white px-3 py-1.5 rounded-xl shadow-xl text-xs font-semibold whitespace-nowrap">
                      <div className="font-bold flex items-center gap-1.5">
                        <span>{job.company}</span>
                        {job.distance !== undefined && job.distance < 99999 && (
                          <span className="text-[10px] text-blue-400 font-semibold">
                            ({Math.round(job.distance)} km)
                          </span>
                        )}
                      </div>
                      <span className="text-gray-300 dark:text-gray-400 font-normal block text-[10px]">
                        {job.title} • {job.location.split(",")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </Marker>
            );
          })}
      </Map>
    </div>
  );
};
