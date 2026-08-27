"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CornerBrackets } from "../components/ui/card";
import PixelIndicator from "../components/ui/PixelIndicator";
import Footer from "../components/Footer";

const products = [
  {
    id: "axa-workspace",
    tag: "/COLLABORATION SUITE",
    title: "AXA WORKSPACE",
    subtitle: "Team collaboration, docs, and communication",
    priceTeaser: "From $3/seat (50% CRM Bundle) | $30/mo",
    description:
      "Your company’s central command center. Axa Workspace combines real-time documents, team chat, task management, and file storage into one seamless interface. Built to eliminate tab-switching fatigue and keep async teams fully synchronized.",
    features: [
      "Real-time Documents & Docs",
      "Team Chat & Async Channels",
      "Task Management & Cloud Storage",
    ],
    link: "/our-products/axa-workspace",
    image: "/axaworkspace.svg",
    alt: "Axa Workspace Preview",
  },
  {
    id: "axa-crm",
    tag: "/SALES & PIPELINE",
    title: "AXA CRM",
    subtitle: "Customer relationship & sales pipeline management",
    priceTeaser: "Simple, honest plans from $85/mo",
    description:
      "Intelligent sales pipeline and contact management. Gives your team end-to-end visibility over deals, contact histories, automated follow-ups, and sales metrics, helping move leads faster with custom pipelines and revenue forecasts.",
    features: [
      "Visual Deal & Sales Pipelines",
      "Automated Follow-ups & Reminders",
      "Revenue Forecasts & Analytics",
    ],
    link: "/our-products/axa-crm",
    image: "/axacrm.svg",
    alt: "Axa CRM Preview",
  },
  {
    id: "axa-pass",
    tag: "/CREDENTIAL SECURITY",
    title: "AXA PASS",
    subtitle: "Secure password management",
    priceTeaser: "From $1.50/seat (50% CRM Bundle) | $3/seat standalone",
    description:
      "Enterprise-grade security for credentials. Provides encrypted, role-based password sharing, secure note storage, and credential rotation, keeping company data safe while granting controlled team access.",
    features: [
      "Zero-Knowledge Encrypted Vaults",
      "Role-Based Password Sharing",
      "Automated Credential Rotation",
    ],
    link: "/our-products/axa-pass",
    image: "/axapass.svg",
    alt: "Axa Pass Preview",
  },
  {
    id: "axa-sign",
    tag: "/DIGITAL CONTRACTS",
    title: "AXA SIGN",
    subtitle: "Digital signature & contract platform",
    priceTeaser: "From $4/seat (50% CRM Bundle) | Unlimited envelopes",
    description:
      "Legally binding digital signatures and contracts. Features audit-trailed e-signatures, custom document templates, and real-time status tracking to close deals and execute agreements faster.",
    features: [
      "Legally Binding Digital Signatures",
      "Audit-Trailed Verification",
      "Custom Document Templates",
    ],
    link: "/our-products/axa-sign",
    image: "/axasign.svg",
    alt: "Axa Sign Preview",
  },
  {
    id: "axa-book",
    tag: "/CALENDAR & SCHEDULING",
    title: "AXA BOOK",
    subtitle: "Calendar scheduling & appointment booking",
    priceTeaser: "From $3/seat (50% CRM Bundle) | Round-robin routing",
    description:
      "Automated scheduling and calendar management. Syncs directly with team calendars to offer custom booking links, automated email/SMS reminders, intake forms, and payment collection.",
    features: [
      "Real-Time 2-Way Calendar Sync",
      "Automated Email & SMS Reminders",
      "Intake Forms & Payment Collection",
    ],
    link: "/our-products/axa-book",
    image: "/axabook.svg",
    alt: "Axa Book Preview",
  },
];

export default function OurProductsPage() {
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
        {/* PRODUCTS LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {products.map((product, idx) => (
            <div
              key={product.id}
              id={product.id}
              className={`border border-[#d1d1d1] bg-[#f7f7f7] relative overflow-hidden transition-all duration-300 hover:shadow-lg scroll-mt-28 flex flex-col justify-between ${
                idx === products.length - 1 && products.length % 2 !== 0
                  ? "md:col-span-2 md:max-w-xl md:w-full md:mx-auto"
                  : ""
              }`}
            >
              <CornerBrackets />

              <div className="p-6 md:p-8 flex flex-col justify-evenly h-full">
                <div>
                  {/* Tag / Category */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <PixelIndicator />
                    <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase">
                      {product.tag}
                    </span>
                  </div>

                  {/* Product SVG Graphic Frame */}
                  <div className="relative w-full aspect-2/1 border border-[#d1d1d1] bg-white overflow-hidden mb-6 flex items-center justify-center p-3 shadow-2xs">
                    <CornerBrackets className="text-black" />
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={640}
                      height={320}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Name */}
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-black mb-2 font-sans">
                    {product.title}
                  </h2>

                  {/* Short Subtitle */}
                  <p className="text-sm font-mono text-neutral-500 mb-4 font-normal">
                    {product.subtitle}
                  </p>

                  {/* Full Description */}
                  <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Price Teaser Callout */}
                  <div className="mb-6 p-2.5 border border-[#3b82f6]/30 bg-blue-50/50 flex flex-col items-center justify-between text-xs font-mono">
                    <span className="text-neutral-600 font-medium">
                      Pricing:
                    </span>
                    <span className="font-bold text-[#2563eb] text-center">
                      {product.priceTeaser}
                    </span>
                  </div>

                  {/* Features Card with Corner Crosses */}
                  <div className="relative border border-[#d1d1d1] bg-white p-5 mb-8 shadow-xs">
                    <CornerBrackets className="text-neutral-900" />
                    <div className="space-y-3">
                      {product.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <div className="w-5 h-5 shrink-0 rounded-md bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[#2563eb]">
                            <svg
                              className="w-3.5 h-3.5"
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
                          <span className="text-sm font-medium text-neutral-800">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Link
                    href={product.link}
                    className="group relative inline-flex items-center justify-between gap-4 px-6 py-3.5 border border-black bg-black text-white text-sm font-medium transition-all duration-200 hover:bg-neutral-800 w-full"
                    style={{
                      clipPath:
                        "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 relative shrink-0 text-[#3b82f6] group-hover:text-white transition-colors duration-200 flex items-center justify-center">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                      <span className="tracking-wide font-mono text-xs uppercase font-bold">
                        Explore {product.title} & Pricing
                      </span>
                    </div>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200 text-[#3b82f6] group-hover:text-white font-mono font-bold">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER SECTION */}
        <Footer />
      </div>
    </div>
  );
}
