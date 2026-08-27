import React from "react";
import Link from "next/link";
import Card, { CornerBrackets } from "../ui/card";

// 4-Pixel Category Indicator
function PixelIndicator() {
  return (
    <div className="grid grid-cols-2 gap-0.5 w-3 h-3 shrink-0">
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-100 animate-pulse" />
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-30" />
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-60" />
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-90" />
    </div>
  );
}

interface NewsItem {
  id: string;
  tag: string;
  category: "product" | "partnership" | "milestone";
  title: string;
  description: string;
  date: string;
  link: string;
}

const newsData: NewsItem[] = [
  {
    id: "1",
    tag: "/ PRODUCT RELEASE",
    category: "product",
    title: "AXA WORKSPACE 2.0 LAUNCHES GLOBALLY",
    description:
      "Integrated real-time collaborative docs, threaded team chat, and task tracking into a unified interface to end tab-switching fatigue.",
    date: "AUG 2026",
    link: "/our-products#axa-workspace",
  },
  {
    id: "2",
    tag: "/ ENTERPRISE EXPANSION",
    category: "partnership",
    title: "NEW STRATEGIC PARTNERSHIP SIGNED",
    description:
      "Tunaxa partners with leading regional scale-ups to deploy Axa CRM and Axa Sign across 150+ operational teams.",
    date: "AUG 2026",
    link: "/our-products#axa-crm",
  },
  {
    id: "3",
    tag: "/ SECURITY MILESTONE",
    category: "milestone",
    title: "AXA PASS RECEIVES ZERO-KNOWLEDGE CERTIFICATION",
    description:
      "Enterprise-grade credential rotation and encrypted vault sharing now certified for end-to-end team protection.",
    date: "JUL 2026",
    link: "/our-products#axa-pass",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="w-full">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-[#d1d1d1] pb-6">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <PixelIndicator />
            <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase">
              / COMPANY DISPATCH
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-black font-sans">
            LATEST UPDATES & MILESTONES
          </h2>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[#2563eb] bg-[#eff6ff] border border-[#bfdbfe] px-3.5 py-1.5 shadow-xs uppercase tracking-wider w-fit">
          <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
          Active Development
        </div>
      </div>

      {/* Grid of Update Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="group relative border border-[#d1d1d1] bg-[#f7f7f7] p-6 md:p-8 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
          >
            <CornerBrackets />

            <div>
              {/* Category Tag & Date */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-[11px] md:text-xs font-semibold tracking-wider text-[#3b82f6] uppercase">
                  {item.tag}
                </span>
                <span className="font-mono text-xs text-neutral-500 font-medium">
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-extrabold tracking-tight uppercase text-black mb-3 font-sans leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            {/* Read Changelog Link */}
            <div className="pt-4 border-t border-[#d1d1d1] flex items-center justify-between">
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-black group-hover:text-[#2563eb] transition-colors"
              >
                <span>Read dispatch</span>
                <span className="text-sm font-mono text-[#3b82f6] transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}