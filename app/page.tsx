"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import NewsSection from "./components/home-news/NewsSection";
import PixelDivider from "./components/ui/PixelDivider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#171717] font-sans antialiased selection:bg-[#3b82f6] selection:text-white">
      {/* Background Subtle Grid Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.4] z-0"
        style={{
          backgroundImage: `radial-gradient(#d1d1d1 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 md:px-12 pt-28 pb-20 space-y-16">
        {/* 1. HERO SECTION */}
        <HeroSection />

        {/* Technical Divider */}
        <PixelDivider />

        {/* 2. NEWS / DISPATCH SECTION */}
        <NewsSection />

        {/* FOOTER SECTION */}
        <Footer />
      </div>
    </div>
  );
}
