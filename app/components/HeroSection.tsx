"use client";

import React from "react";
import Link from "next/link";
import { CornerBrackets } from "./ui/card";
import PixelIndicator from "./ui/PixelIndicator";

const metrics = [
  {
    value: "05",
    label: "INTEGRATED MODULES",
    detail: "Docs, CRM, Pass, Sign & Booking",
  },
  {
    value: "100%",
    label: "ZERO-KNOWLEDGE",
    detail: "End-to-end encrypted vaults",
  },
  {
    value: "< 50ms",
    label: "EDGE LATENCY",
    detail: "Global real-time sync network",
  },
  {
    value: "10x",
    label: "COST EFFICIENCY",
    detail: "Zero predatory enterprise seat-tax",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full space-y-12">
      {/* 1. Main Hero Framing Card */}
      <div className="relative border border-[#d1d1d1] bg-[#f7f7f7] p-8 md:p-14 lg:p-16 shadow-xs">
        <CornerBrackets />

        <div className="max-w-4xl space-y-6">
          {/* System Badge */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] text-xs font-mono font-semibold uppercase tracking-wider">
            <PixelIndicator />
            <span>TUNAXA / ENTERPRISE BLUEPRINT</span>
          </div>

          {/* High-Stakes Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase text-black font-sans leading-[1.08]">
            ENGINEERED FOR VELOCITY. <br className="hidden sm:inline" />
            BUILT WITHOUT THE <span className="text-[#2563eb]">ENTERPRISE BLOAT.</span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
            Tunaxa unifies core business operations—documents, sales pipelines, credential vaults, and legally binding digital agreements—into a single high-performance software ecosystem at fair, transparent rates.
          </p>

          {/* Dual Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary Cut-Corner Button */}
            <Link
              href="/our-products"
              className="group relative inline-flex items-center justify-between gap-4 px-7 py-3.5 border border-black bg-black text-white text-sm font-mono font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-transparent hover:text-black"
              style={{
                clipPath:
                  "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <PixelIndicator />
                <span>Explore Ecosystem</span>
              </div>
              <span className="transform group-hover:translate-x-1 transition-transform font-mono text-[#3b82f6]">
                →
              </span>
            </Link>

            {/* Secondary Technical Button */}
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-between gap-4 px-7 py-3.5 border border-[#d1d1d1] bg-white text-black text-sm font-mono font-semibold uppercase tracking-wider transition-all duration-200 hover:border-black hover:bg-neutral-100"
            >
              <CornerBrackets className="text-black" />
              <span>Custom Engineering</span>
              <span className="transform group-hover:translate-x-1 transition-transform font-mono text-neutral-500 group-hover:text-black">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Quick Metrics Bar (4 Columns) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="relative border border-[#d1d1d1] bg-[#f7f7f7] p-5 md:p-6 transition-all duration-200 hover:shadow-md"
          >
            <CornerBrackets />
            <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black font-mono tracking-tight mb-1">
              {metric.value}
            </div>
            <div className="text-[11px] font-mono font-bold text-[#2563eb] tracking-wider uppercase mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#3b82f6] rounded-full" />
              {metric.label}
            </div>
            <div className="text-xs text-neutral-500 font-sans">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
