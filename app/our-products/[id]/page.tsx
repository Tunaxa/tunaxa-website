"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "../../data/productsData";
import { CornerBrackets } from "../../components/ui/card";
import PixelIndicator from "../../components/ui/PixelIndicator";
import Footer from "../../components/Footer";
import CrmDiscountBanner from "../../components/pricing/CrmDiscountBanner";
import PricingCard from "../../components/pricing/PricingCard";
import CompetitorComparison from "../../components/pricing/CompetitorComparison";
import TechnicalDirectivesBox from "../../components/pricing/TechnicalDirectivesBox";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPricingPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const product = PRODUCTS_DATA[productId];

  if (!product) {
    notFound();
  }

  // Interactive state for viewing pricing calculations
  const [isAnnual, setIsAnnual] = useState(true); // Default to Annual for 15% discount
  const [hasCrmDiscount, setHasCrmDiscount] = useState(true); // Default preview to CRM Bundle

  const otherProducts = Object.values(PRODUCTS_DATA).filter(
    (p) => p.id !== product.id,
  );

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
        {/* BREADCRUMB & NAV BACK */}
        <div className="flex items-center gap-2 mb-8 font-mono text-xs text-neutral-500 uppercase tracking-wider">
          <Link
            href="/our-products"
            className="hover:text-black transition-colors flex items-center gap-1.5"
          >
            <span>←</span>
            <span>All Products</span>
          </Link>
          <span>/</span>
          <span className="text-[#2563eb] font-bold">{product.title}</span>
          <span>/</span>
          <span className="text-neutral-800">Pricing & Specs</span>
        </div>

        {/* PRODUCT HERO SECTION */}
        <div className="relative border border-[#d1d1d1] bg-white p-6 sm:p-10 md:p-14 mb-12 shadow-sm">
          <CornerBrackets className="text-black" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Headline & Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <PixelIndicator />
                <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase">
                  {product.tag}
                </span>
                {product.pricingModelType === "crm-dual" && (
                  <span className="bg-blue-100 text-blue-800 text-[11px] font-mono font-bold px-2 py-0.5 border border-blue-200 uppercase">
                    50% CRM Bundle Eligible
                  </span>
                )}
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase text-black font-sans mb-3">
                  {product.title}
                </h1>
                <p className="text-base sm:text-lg font-mono text-neutral-500 font-medium">
                  {product.subtitle}
                </p>
              </div>

              <div className="p-4 border-l-2 border-[#2563eb] bg-blue-50/40">
                <p className="text-sm sm:text-base font-semibold text-neutral-900 font-sans">
                  {product.heroHeadline}
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-1">
                  {product.heroPitch}
                </p>
              </div>

              {/* Value Proposition Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {product.valueProposition.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs font-medium text-neutral-800"
                  >
                    <div className="w-4 h-4 shrink-0 rounded-sm bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] mt-0.5">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product SVG Graphic */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-4/3 border border-[#d1d1d1] bg-[#fbfbfb] overflow-hidden flex items-center justify-center p-6 shadow-inner">
                <CornerBrackets className="text-neutral-400" />
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={500}
                  height={350}
                  className="w-full h-full object-contain drop-shadow-sm"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* PRICING CONTROLS & TOGGLES */}
        <div className="mb-10 text-center space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <PixelIndicator />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                FLEXIBLE PRICING ENGINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black font-sans">
              Simple, Transparent Plans
            </h2>
            <p className="text-sm text-neutral-600 font-sans mt-2 max-w-xl mx-auto">
              Choose the plan tailored to your team size. Scale anytime with
              zero hidden seat fees.
            </p>
          </div>

          {/* Billing Toggle: Monthly vs Annual (15% OFF) */}
          <div className="inline-flex items-center p-1.5 border border-[#d1d1d1] bg-white shadow-xs">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                !isAnnual
                  ? "bg-black text-white"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                isAnnual
                  ? "bg-black text-white"
                  : "text-neutral-600 hover:text-black"
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 bg-[#2563eb] text-white text-[10px] rounded-xs font-bold">
                SAVE 15%
              </span>
            </button>
          </div>
        </div>

        {/* CRM DISCOUNT BANNER IF DUAL PRICING */}
        {product.pricingModelType === "crm-dual" && (
          <CrmDiscountBanner
            hasCrmDiscount={hasCrmDiscount}
            onToggleDiscount={setHasCrmDiscount}
            productShortTitle={product.title}
            discountPercentage={product.crmDiscountPercentage}
          />
        )}

        {/* AXA CRM SPECIAL RULE: 8-SEAT PROMPT DEMO */}
        {product.id === "axa-crm" && (
          <div className="relative border border-amber-300 bg-amber-50/80 p-5 mb-10 text-xs sm:text-sm font-sans flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <CornerBrackets className="text-amber-600" />
            <div className="flex items-center gap-3">
              <span className="text-xl">💡</span>
              <div>
                <span className="font-bold text-amber-950 block">
                  The 8-Seat Optimization Rule:
                </span>
                <span className="text-amber-900">
                  If you require 8 seats on the Team plan ($50 × 8 = $400/mo),
                  you can upgrade to the <strong>Growth Plan</strong> to get 10
                  seats for just <strong>$350/mo</strong> — saving $50/mo while
                  gaining 50,000 contacts and priority limits!
                </span>
              </div>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 px-4 py-2 border border-amber-900 bg-amber-950 text-white font-mono text-xs uppercase tracking-wider hover:bg-black transition-colors"
            >
              Upgrade to Growth ($350/mo)
            </Link>
          </div>
        )}

        {/* AXAPASS SPECIAL PROMO BANNER */}
        {product.id === "axa-pass" && (
          <div className="relative border border-blue-300 bg-blue-50/90 p-5 mb-10 text-xs sm:text-sm font-sans flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <CornerBrackets className="text-[#2563eb]" />
            <div className="flex items-center gap-3">
              <span className="text-xl">🛡️</span>
              <div>
                <span className="font-bold text-blue-950 block uppercase tracking-wide">
                  Cross-Sell Banner: Unlock Axapass Enterprise Vault for 50% Off
                </span>
                <span className="text-blue-900">
                  &ldquo;Protect your sales team&apos;s passwords, client
                  credentials, and API keys. Because you own our CRM, get
                  Axapass for just $1.50/seat.&rdquo;
                </span>
              </div>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 px-4 py-2 border border-[#2563eb] bg-[#2563eb] text-white font-mono text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors"
            >
              Activate Axapass Upgrade
            </Link>
          </div>
        )}

        {/* PRICING TIERS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {product.tiers.map((tier, idx) => (
            <PricingCard
              key={idx}
              tier={tier}
              isAnnual={isAnnual}
              hasCrmDiscount={hasCrmDiscount}
              pricingModelType={product.pricingModelType}
            />
          ))}
        </div>

        {/* ADD-ONS SECTION (IF APPLICABLE) */}
        {product.addons && product.addons.length > 0 && (
          <div className="relative border border-[#d1d1d1] bg-white p-6 sm:p-10 mb-14">
            <CornerBrackets className="text-black" />

            <div className="flex items-center gap-2 mb-2">
              <PixelIndicator />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563eb]">
                MODULAR SCALING
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-sans tracking-tight text-black mb-2">
              Add-ons & Capacity Boosters
            </h3>
            <p className="text-sm text-neutral-600 font-sans mb-8">
              Need extra power? Scale storage, contacts, and credits dynamically
              with no surprises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.addons.map((addon, aIdx) => (
                <div
                  key={aIdx}
                  className="border border-[#e5e5e5] bg-neutral-50/60 p-6 flex flex-col justify-between hover:border-black transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-sm font-bold text-black uppercase">
                        {addon.name}
                      </span>
                    </div>
                    <div className="font-mono text-xl font-extrabold text-[#2563eb] mb-2">
                      {addon.price}
                    </div>
                    <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                      {addon.description}
                    </p>
                  </div>
                  <Link
                    href="/#contact"
                    className="mt-5 w-full py-2 border border-neutral-300 bg-white font-mono text-xs font-semibold text-black uppercase hover:bg-black hover:text-white transition-colors text-center block"
                  >
                    Inquire Add-on
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMPETITOR VALUE ANALYSIS MATRIX */}
        {product.competitorComparison && (
          <CompetitorComparison
            title={product.competitorComparison.title}
            description={product.competitorComparison.description}
            competitorNames={product.competitorComparison.competitorNames}
            rows={product.competitorComparison.rows}
            hasCrmDiscount={hasCrmDiscount}
          />
        )}

        {/* TECHNICAL DIRECTIVES & ARCHITECTURE GUARDRAILS */}
        <TechnicalDirectivesBox
          title={product.technicalDirectives.title}
          items={product.technicalDirectives.items}
        />

        {/* FAQS SECTION */}
        <div className="relative border border-[#d1d1d1] bg-white p-6 sm:p-10 mb-16">
          <CornerBrackets className="text-black" />

          <div className="flex items-center gap-2 mb-2">
            <PixelIndicator />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2563eb]">
              FAQ
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-sans tracking-tight text-black mb-8">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6 divide-y divide-neutral-200">
            {product.faqs.map((faq, fIdx) => (
              <div key={fIdx} className={fIdx > 0 ? "pt-6" : ""}>
                <h4 className="text-base font-bold font-sans text-neutral-900 mb-2">
                  {faq.question}
                </h4>
                <p className="text-sm text-neutral-600 font-sans leading-relaxed font-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EXPLORE OTHER AXA PRODUCTS */}
        <div className="border-t border-[#d1d1d1] pt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-[#2563eb] tracking-wider block mb-1">
                CONNECTED ECOSYSTEM
              </span>
              <h3 className="text-2xl font-extrabold uppercase text-black font-sans">
                Explore More AXA Products
              </h3>
            </div>
            <Link
              href="/our-products"
              className="font-mono text-xs uppercase font-bold text-neutral-700 hover:text-black flex items-center gap-1"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherProducts.map((other) => (
              <Link
                key={other.id}
                href={`/our-products/${other.id}`}
                className="group relative border border-[#d1d1d1] bg-white p-5 hover:border-black transition-all hover:shadow-md flex flex-col justify-between"
              >
                <CornerBrackets className="text-neutral-400 group-hover:text-black transition-colors" />
                <div>
                  <span className="font-mono text-[10px] text-[#2563eb] uppercase font-bold tracking-wide block mb-1">
                    {other.tag}
                  </span>
                  <h4 className="text-base font-extrabold uppercase text-black font-sans mb-1 group-hover:text-[#2563eb] transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-xs text-neutral-500 font-sans line-clamp-2">
                    {other.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between font-mono text-xs font-semibold text-black">
                  <span>View Pricing</span>
                  <span className="text-[#3b82f6] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <Footer />
      </div>
    </div>
  );
}
