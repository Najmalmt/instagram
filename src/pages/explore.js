"use client";

import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Compass } from "lucide-react"; // Importing a better explore icon

export default function ExploreComingSoon() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 shadow-lg mb-4">
          <Compass className="w-7 h-7 text-blue-400" /> {/* Modern explore icon */}
        </div>
        <h1 className="text-2xl font-extrabold text-gray-200 tracking-wide">
          Explore Coming Soon ...
        </h1>
        <p className="text-xm text-gray-400 mt-3 max-w-md">
          Discover exciting content from around the world. Stay tuned for an amazing experience!
        </p>
      </main>
    </div>
  );
}
