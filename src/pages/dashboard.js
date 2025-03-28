"use client";

import React from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { LayoutDashboard } from "lucide-react"; // Dashboard icon

export default function DashboardComingSoon() {
  return (
    <div className="flex h-screen bg-gradient-to-b from-gray-950 to-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 shadow-lg mb-4">
          <LayoutDashboard className="w-7 h-7 text-green-400" /> {/* Dashboard icon */}
        </div>
        <h1 className="text-2xl font-extrabold text-gray-200 tracking-wide">
          Dashboard Coming Soon ...
        </h1>
        <p className="text-xm text-gray-400 mt-3 max-w-md">
          Your personalized dashboard is on the way. Stay tuned for powerful insights and tools!
        </p>
      </main>
    </div>
  );
}
