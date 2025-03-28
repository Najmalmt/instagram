"use client"; // Ensure this is at the top

import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Clapperboard } from "lucide-react"; // Importing new icon

export default function ReelsComingSoon() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 shadow-lg mb-4">
          <Clapperboard className="w-7 h-7 text-pink-400" /> {/* New Reels Icon */}
        </div>
        <h1 className="text-2xl font-extrabold text-gray-300 tracking-wide">
          Reels Coming Soon ...
        </h1>
        <p className="text-xm text-gray-400 mt-3 max-w-md">
          A brand-new way to create, share, and explore short videos is on its way.  
          Stay tuned for an exciting experience!
        </p>
      </main>
    </div>
  );
}
