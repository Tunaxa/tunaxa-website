"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_DATA } from "../data/productsData";
import { CornerBrackets } from "../components/ui/card";
import PixelIndicator from "../components/ui/PixelIndicator";
import Footer from "../components/Footer";
import PricingCard from "../components/pricing/PricingCard";
import CrmDiscountBanner from "../components/pricing/CrmDiscountBanner";

export default function GeneralPricingPage() {
  const [activeProductId, setActiveProductId] = useState<string>("axa-workspace");
  const [isAnnual, setIsAnnual] = useState(true);
  const [hasCrmDiscount, setHasCrmDiscount] = useState(true);

  const productList = Object.values(PRODUCTS_DATA);
  const activeProduct = PRODUCTS_DATA[activeProductId] || productList[0];

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

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 md:px-12 pt-28 pb-20">
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <PixelIndicator />
            <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase">
              / TRANSPARENT PRICING & ECOSYSTEM
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-black font-sans mb-4">
            Simple, Honest Pricing. Zero Lock-In.
          </h1>

          <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
            Market-killer standalone pricing with an automatic{" "}
            <span className="font-semibold text-black">50% CRM Bundle discount</span> across our
            entire productivity, security, and sales suite.
          </p>
        </div>

        {/* CONTROLS: BILLING TOGGLE */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center p-1.5 border border-[#d1d1d1] bg-white shadow-xs">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                !isAnnual ? "bg-black text-white" : "text-neutral-600 hover:text-black"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                isAnnual ? "bg-black text-white" : "text-neutral-600 hover:text-black"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 bg-[#2563eb] text-white text-[10px] rounded-xs font-bold">
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        {/* CRM DISCOUNT ACTIVATOR BANNER */}
        <CrmDiscountBanner
          hasCrmDiscount={hasCrmDiscount}
          onToggleDiscount={setHasCrmDiscount}
          productShortTitle={activeProduct.shortTitle}
          discountPercentage={50}
        />

        {/* PRODUCT TABS SELECTOR */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {productList.map((prod) => {
            const isCurrent = prod.id === activeProductId;
            return (
              <button
                key={prod.id}
                type="button"
                onClick={() => setActiveProductId(prod.id)}
                className={`relative border text-left p-4 transition-all duration-200 ${
                  isCurrent
                    ? "border-black bg-white shadow-md ring-1 ring-black/5"
                    : "border-[#d1d1d1] bg-neutral-100/70 hover:bg-white hover:border-neutral-400"
                }`}
              >
                <CornerBrackets className={isCurrent ? "text-black" : "text-neutral-300"} />
                <span className="font-mono text-[10px] text-[#2563eb] uppercase font-bold block mb-1">
                  {prod.tag.replace("/", "")}
                </span>
                <span className="font-sans text-sm font-extrabold uppercase text-black block">
                  {prod.title}
                </span>
                {prod.pricingModelType === "crm-dual" && (
                  <span className="font-mono text-[10px] text-emerald-700 font-semibold block mt-1">
                    50% CRM Bundle
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE PRODUCT HERO STRIP */}
        <div className="relative border border-[#d1d1d1] bg-white p-6 sm:p-8 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <CornerBrackets className="text-black" />

          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 shrink-0 border border-[#d1d1d1] bg-[#fbfbfb] p-2 flex items-center justify-center">
              <CornerBrackets className="text-neutral-400" />
              <Image
                src={activeProduct.image}
                alt={activeProduct.alt}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <PixelIndicator />
                <h2 className="text-xl sm:text-2xl font-extrabold uppercase text-black font-sans">
                  {activeProduct.title}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-0.5">
                {activeProduct.subtitle}
              </p>
            </div>
          </div>

          <Link
            href={`/our-products/${activeProduct.id}`}
            className="shrink-0 px-5 py-2.5 border border-black bg-transparent text-black text-xs font-mono uppercase tracking-wider font-semibold hover:bg-black hover:text-white transition-colors flex items-center gap-2"
          >
            <span>Full Specs & Feature Details</span>
            <span>→</span>
          </Link>
        </div>

        {/* PRICING TIERS GRID FOR SELECTED PRODUCT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {activeProduct.tiers.map((tier, idx) => (
            <PricingCard
              key={idx}
              tier={tier}
              isAnnual={isAnnual}
              hasCrmDiscount={hasCrmDiscount}
              pricingModelType={activeProduct.pricingModelType}
            />
          ))}
        </div>

        {/* ECOSYSTEM OVERVIEW MATRIX / BUNDLE CALCULATOR */}
        <div className="relative border border-black bg-black text-white p-8 md:p-12 mb-16 overflow-hidden">
          <CornerBrackets className="text-[#3b82f6]" />

          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 mb-2">
              <PixelIndicator />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3b82f6]">
                FULL SUITE BUNDLE ECONOMICS
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-sans tracking-tight text-white mb-2">
              The Power of the AXA Ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
              When you adopt AXA CRM as your sales operating system, you unlock flat 50% savings on every
              connected product in the stack:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-neutral-800 bg-neutral-900/90 p-4">
              <span className="font-mono text-xs text-blue-400 font-bold block mb-1">AXA PASS</span>
              <span className="text-2xl font-extrabold font-mono text-white">$1.50</span>
              <span className="text-xs text-neutral-400 font-mono"> / seat / mo</span>
              <p className="text-xs text-neutral-400 mt-2">~~$3.00/seat~~ (Undercuts 1Password $8.99)</p>
            </div>

            <div className="border border-neutral-800 bg-neutral-900/90 p-4">
              <span className="font-mono text-xs text-blue-400 font-bold block mb-1">AXA WORKSPACE</span>
              <span className="text-2xl font-extrabold font-mono text-white">$30</span>
              <span className="text-xs text-neutral-400 font-mono"> / mo (10 Seats)</span>
              <p className="text-xs text-neutral-400 mt-2">~~$60/mo~~ (Replaces Google + Slack + Zoom)</p>
            </div>

            <div className="border border-neutral-800 bg-neutral-900/90 p-4">
              <span className="font-mono text-xs text-blue-400 font-bold block mb-1">AXA SIGNATURE</span>
              <span className="text-2xl font-extrabold font-mono text-white">$40</span>
              <span className="text-xs text-neutral-400 font-mono"> / mo (10 Seats)</span>
              <p className="text-xs text-neutral-400 mt-2">~~$80/mo~~ (Unlimited envelopes vs DocuSign)</p>
            </div>

            <div className="border border-neutral-800 bg-neutral-900/90 p-4">
              <span className="font-mono text-xs text-blue-400 font-bold block mb-1">AXA CALENDAR</span>
              <span className="text-2xl font-extrabold font-mono text-white">$30</span>
              <span className="text-xs text-neutral-400 font-mono"> / mo (10 Seats)</span>
              <p className="text-xs text-neutral-400 mt-2">~~$60/mo~~ (Round-robin routing included)</p>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
