"use client";

import React from "react";
import { CornerBrackets } from "../ui/card";
import PixelIndicator from "../ui/PixelIndicator";

interface DirectiveItem {
  heading: string;
  detail: string;
}

interface TechnicalDirectivesBoxProps {
  title: string;
  items: DirectiveItem[];
}

export default function TechnicalDirectivesBox({
  title,
  items,
}: TechnicalDirectivesBoxProps) {
  return (
    <div className="relative border border-neutral-800 bg-neutral-950 text-white p-6 sm:p-8 mb-14 shadow-lg">
      <CornerBrackets className="text-[#3b82f6]" />

      <div className="flex items-center gap-2 mb-4">
        <PixelIndicator />
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3b82f6]">
          DEVELOPER & ARCHITECTURAL SPECS
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-extrabold uppercase font-sans tracking-tight text-white mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="border border-neutral-800 bg-neutral-900/80 p-5 rounded-none relative flex flex-col justify-between"
          >
            <div className="absolute top-2 right-2 font-mono text-[10px] text-neutral-500">
              0{idx + 1}
            </div>
            <div>
              <h4 className="font-mono text-sm font-bold text-blue-400 mb-2 uppercase tracking-wide">
                {item.heading}
              </h4>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                {item.detail}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-400">
              <span className="text-emerald-400 font-semibold">✓ VERIFIED SPEC</span>
              <span>API / BILLING</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
