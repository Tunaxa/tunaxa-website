"use client";

import React from "react";
import { CornerBrackets } from "../ui/card";
import PixelIndicator from "../ui/PixelIndicator";

interface CrmDiscountBannerProps {
  hasCrmDiscount: boolean;
  onToggleDiscount: (active: boolean) => void;
  productShortTitle?: string;
  discountPercentage?: number;
}

export default function CrmDiscountBanner({
  hasCrmDiscount,
  onToggleDiscount,
  productShortTitle = "Product",
  discountPercentage = 50,
}: CrmDiscountBannerProps) {
  return (
    <div className="relative border border-[#3b82f6]/40 bg-linear-to-r from-blue-50/80 via-white to-blue-50/50 p-5 md:p-6 mb-10 overflow-hidden shadow-xs">
      <CornerBrackets className="text-[#2563eb]" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        {/* Left: Info */}
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <PixelIndicator />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563eb]">
              CRM Bundle Advantage ({discountPercentage}% OFF)
            </span>
            {hasCrmDiscount && (
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-mono font-bold px-2 py-0.5 uppercase tracking-wide">
                Active Promo
              </span>
            )}
          </div>
          <h3 className="text-base md:text-lg font-bold text-neutral-900 font-sans">
            Already using or planning to use AXA CRM?
          </h3>
          <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed">
            Active AXA CRM subscribers receive an automatic{" "}
            <span className="font-semibold text-neutral-900">{discountPercentage}% discount</span> on{" "}
            {productShortTitle}. Toggle the CRM customer switch to preview your bundled pricing.
          </p>
        </div>

        {/* Right: Interactive Toggle Switch */}
        <div className="flex items-center gap-3 shrink-0 pt-2 lg:pt-0">
          <span className="font-mono text-xs text-neutral-600 font-medium">
            Standard Rate
          </span>

          <button
            type="button"
            onClick={() => onToggleDiscount(!hasCrmDiscount)}
            aria-pressed={hasCrmDiscount}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
              hasCrmDiscount ? "bg-[#2563eb]" : "bg-neutral-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 shadow-sm ${
                hasCrmDiscount ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>

          <span
            className={`font-mono text-xs font-bold uppercase tracking-wide ${
              hasCrmDiscount ? "text-[#2563eb]" : "text-neutral-500"
            }`}
          >
            CRM Bundle (50% OFF)
          </span>
        </div>
      </div>
    </div>
  );
}
