"use client";

import React from "react";
import { CornerBrackets } from "../ui/card";
import PixelIndicator from "../ui/PixelIndicator";
import { CompetitorComparisonRow } from "../../data/productsData";

interface CompetitorComparisonProps {
  title: string;
  description: string;
  competitorNames: string[];
  rows: CompetitorComparisonRow[];
  hasCrmDiscount: boolean;
}

export default function CompetitorComparison({
  title,
  description,
  competitorNames,
  rows,
  hasCrmDiscount,
}: CompetitorComparisonProps) {
  return (
    <div className="relative border border-[#d1d1d1] bg-white p-6 sm:p-10 mb-14 overflow-hidden shadow-sm">
      <CornerBrackets className="text-black" />

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <PixelIndicator />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563eb]">
            VALUE ANALYSIS
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black font-sans mb-2">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 font-sans max-w-2xl">
          {description}
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto -mx-6 sm:mx-0">
        <table className="w-full text-left border-collapse min-w-150">
          <thead>
            <tr className="border-b-2 border-black bg-neutral-50">
              <th className="py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider text-neutral-700">
                Feature / Metric
              </th>
              {competitorNames.map((comp, idx) => (
                <th
                  key={idx}
                  className="py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider text-neutral-500"
                >
                  {comp}
                </th>
              ))}
              <th
                className={`py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider ${
                  !hasCrmDiscount ? "text-black bg-blue-50/50" : "text-neutral-700"
                }`}
              >
                AXA Standalone
              </th>
              <th
                className={`py-3.5 px-4 font-mono text-xs font-bold uppercase tracking-wider ${
                  hasCrmDiscount
                    ? "text-[#2563eb] bg-blue-100/70 border-l border-r border-[#3b82f6]/40"
                    : "text-neutral-800 bg-blue-50/30"
                }`}
              >
                AXA Bundle (50% OFF)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e5e5e5] text-xs sm:text-sm font-sans">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className="hover:bg-neutral-50/70 transition-colors"
              >
                <td className="py-3.5 px-4 font-medium text-black">
                  {row.feature}
                </td>
                {row.competitors.map((compVal, cIdx) => (
                  <td key={cIdx} className="py-3.5 px-4 text-neutral-500 font-mono">
                    {compVal.value}
                  </td>
                ))}
                <td
                  className={`py-3.5 px-4 font-mono font-bold ${
                    !hasCrmDiscount ? "text-black bg-blue-50/30" : "text-neutral-800"
                  }`}
                >
                  {row.axaStandalone}
                </td>
                <td
                  className={`py-3.5 px-4 font-mono font-bold ${
                    hasCrmDiscount
                      ? "text-[#2563eb] bg-blue-100/50 border-l border-r border-[#3b82f6]/30"
                      : "text-emerald-700 bg-emerald-50/30"
                  }`}
                >
                  {row.axaCrmDiscount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
