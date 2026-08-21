"use client";

import React from "react";
import Map, { Marker, NavigationControl, GeolocateControl } from "react-map-gl/maplibre";
import { Job } from "@/lib/mockData";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";

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
}

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
}: InteractiveMapProps) => {
  const filters = ["All", "Full Time", "Internship", "Remote"];

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 bg-slate-50">
      {/* Search & Filter Floating Bar */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20 flex flex-col sm:flex-row items-start sm:items-center gap-2 max-w-[calc(100%-60px)] sm:max-w-[calc(100%-80px)]">
        {/* Search Input */}
        <div className="relative neu-card-sm px-3.5 py-2 flex items-center gap-2 min-w-[200px] w-full sm:w-auto">
          <Search className="w-4 h-4 text-gray-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            placeholder="Search roles, companies..."
            className="w-full bg-transparent text-xs font-semibold text-gray-800 outline-none placeholder:text-gray-400"
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
                  : "neu-btn text-gray-700 hover:text-gray-900"
              }`}
            >
              {f === "All" ? "All Roles" : f}
            </button>
          ))}
        </div>
      </div>

      <Map
        {...viewState}
        onMove={onMove}
        mapStyle={{
          version: 8,
          sources: {
            carto: {
              type: "raster",
              tiles: [
                "https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              ],
              tileSize: 256,
              attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
            }
          },
          layers: [
            {
              id: "carto-tiles",
              type: "raster",
              source: "carto",
              minzoom: 0,
              maxzoom: 19
            }
          ]
        }}
        style={{ width: "100%", height: "100%" }}
        minZoom={3}
        maxBounds={[
          [65.0, 5.0], // Southwest coordinates (longitude, latitude)
          [100.0, 38.0] // Northeast coordinates (longitude, latitude)
        ]}
      >
        <GeolocateControl position="top-right" />
        <NavigationControl position="top-right" />

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
                      className="absolute -top-1 -left-1 w-8 h-10 bg-blue-500 rounded-full animate-ping opacity-40"
                    />
                  )}

                  {/* Teardrop Pin matching Reference Mockup */}
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
                        fill={isSelected ? "#2563EB" : "#3B82F6"}
                      />
                      <circle cx="14" cy="14" r="5" fill="white" />
                    </svg>
                  </div>

                  {/* Floating tooltip */}
                  <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-30">
                    <div className="bg-gray-900/90 backdrop-blur-md text-white px-2.5 py-1.5 rounded-xl shadow-xl text-xs font-semibold whitespace-nowrap">
                      {job.company}
                      <span className="text-gray-300 font-normal block text-[10px]">
                        {job.title}
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
