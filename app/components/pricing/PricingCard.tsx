"use client";

import React from "react";
import Link from "next/link";
import { CornerBrackets } from "../ui/card";
import PixelIndicator from "../ui/PixelIndicator";
import { PricingTier } from "../../data/productsData";

interface PricingCardProps {
  tier: PricingTier;
  isAnnual: boolean;
  hasCrmDiscount: boolean;
  pricingModelType?: "crm-dual" | "crm-tier" | "standard";
}

export default function PricingCard({
  tier,
  isAnnual,
  hasCrmDiscount,
  pricingModelType = "crm-dual",
}: PricingCardProps) {
  // Determine standard baseline price
  const baseMonthly = tier.standalonePriceMonthly;
  const baseAnnual = tier.standalonePriceAnnual ?? Math.round(baseMonthly * 0.85);

  // Determine CRM bundle price
  const crmMonthly = tier.crmDiscountMonthly;
  const crmAnnual = tier.crmDiscountAnnual ?? Math.round(crmMonthly * 0.85);

  // Active price based on toggles
  const isCrmApplicable = pricingModelType === "crm-dual" && hasCrmDiscount;

  const activePrice = isCrmApplicable
    ? isAnnual
      ? crmAnnual
      : crmMonthly
    : isAnnual
    ? baseAnnual
    : baseMonthly;

  const originalPrice = isAnnual ? baseAnnual : baseMonthly;

  const unit = tier.standalonePriceUnit ?? (tier.isSeatPerUser ? "/ user / mo" : "/ month");

  const extraSeatPrice = isCrmApplicable && tier.extraSeatPriceCrm
    ? tier.extraSeatPriceCrm
    : tier.extraSeatPriceStandalone;

  return (
    <div
      className={`relative border transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 ${
        tier.isPopular
          ? "border-black bg-white shadow-xl ring-1 ring-black/5"
          : "border-[#d1d1d1] bg-[#f7f7f7] hover:bg-white hover:shadow-lg"
      }`}
    >
      <CornerBrackets className={tier.isPopular ? "text-black" : "text-neutral-500"} />

      <div>
        {/* Top Header & Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <PixelIndicator />
            <span className="font-mono text-xs font-bold tracking-wider uppercase text-neutral-800">
              {tier.badge || "PLAN"}
            </span>
          </div>

          {tier.isPopular && (
            <span className="font-mono text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 bg-black text-white">
              POPULAR
            </span>
          )}
        </div>

        {/* Plan Title & Subtitle */}
        <h3 className="text-2xl font-extrabold tracking-tight uppercase text-black font-sans mb-2">
          {tier.name}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed mb-6">
          {tier.description}
        </p>

        {/* Pricing Block */}
        <div className="border-t border-b border-[#e5e5e5] py-5 mb-6 bg-neutral-50/70 -mx-6 sm:-mx-8 px-6 sm:px-8">
          <div className="flex items-baseline gap-2">
            {isCrmApplicable && originalPrice !== activePrice && (
              <span className="text-lg sm:text-xl font-mono text-neutral-400 line-through">
                ${originalPrice % 1 === 0 ? originalPrice : originalPrice.toFixed(2)}
              </span>
            )}

            <div className="flex items-baseline">
              <span className="text-3xl sm:text-4xl font-extrabold text-black font-mono tracking-tight">
                ${activePrice % 1 === 0 ? activePrice : activePrice.toFixed(2)}
              </span>
              <span className="text-xs sm:text-sm font-mono text-neutral-600 ml-1.5 font-medium">
                {unit}
              </span>
            </div>
          </div>

          {/* Seats Info */}
          <div className="mt-2.5 flex items-center justify-between">
            <span className="text-xs font-mono font-medium text-neutral-700">
              {tier.seatsInfo}
            </span>
            {isCrmApplicable && (
              <span className="text-[11px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 border border-emerald-200">
                50% OFF CRM Bundle
              </span>
            )}
          </div>

          {/* Extra seat cost if applicable */}
          {extraSeatPrice && (
            <div className="mt-1 text-[11px] font-mono text-neutral-500">
              +${extraSeatPrice}/mo per extra seat
            </div>
          )}

          {isAnnual && (
            <div className="mt-1 text-[11px] font-mono text-[#2563eb]">
              Billed yearly (~15% savings applied)
            </div>
          )}
        </div>

        {/* Feature List */}
        <div className="space-y-3 mb-8">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
            Included in this plan:
          </div>
          {tier.features.map((feature, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
              <div className="w-4 h-4 shrink-0 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] mt-0.5">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className={feature.startsWith("Everything in") ? "font-semibold text-black" : "font-normal"}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Link to Contact */}
      <div className="pt-2">
        <Link
          href="/#contact"
          className={`w-full group relative inline-flex items-center justify-between gap-4 px-6 py-3.5 border text-sm font-mono uppercase tracking-wider font-semibold transition-all duration-200 ${
            tier.isPopular
              ? "border-black bg-black text-white hover:bg-neutral-800"
              : "border-black bg-transparent text-black hover:bg-black hover:text-white"
          }`}
          style={{
            clipPath:
              "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
          }}
        >
          <div className="flex items-center gap-2">
            <PixelIndicator />
            <span>{tier.ctaText || "Get Started"}</span>
          </div>
          <span className="transform group-hover:translate-x-1 transition-transform duration-200 text-[#3b82f6] group-hover:text-white font-mono">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
