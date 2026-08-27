"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Corner Cross Decorator Component
function CornerBrackets({ className = "text-black" }: { className?: string }) {
  return (
    <>
      {/* Top Left */}
      <div className={`absolute top-0 left-0 w-3 h-3 pointer-events-none z-10 ${className}`}>
        <div className="absolute top-0 left-0 w-3 h-[1.5px] bg-current" />
        <div className="absolute top-0 left-0 w-[1.5px] h-3 bg-current" />
      </div>
      {/* Top Right */}
      <div className={`absolute top-0 right-0 w-3 h-3 pointer-events-none z-10 ${className}`}>
        <div className="absolute top-0 right-0 w-3 h-[1.5px] bg-current" />
        <div className="absolute top-0 right-0 w-[1.5px] h-3 bg-current" />
      </div>
      {/* Bottom Right */}
      <div className={`absolute bottom-0 right-0 w-3 h-3 pointer-events-none z-10 ${className}`}>
        <div className="absolute bottom-0 right-0 w-3 h-[1.5px] bg-current" />
        <div className="absolute bottom-0 right-0 w-[1.5px] h-3 bg-current" />
      </div>
      {/* Bottom Left */}
      <div className={`absolute bottom-0 left-0 w-3 h-3 pointer-events-none z-10 ${className}`}>
        <div className="absolute bottom-0 left-0 w-3 h-[1.5px] bg-current" />
        <div className="absolute bottom-0 left-0 w-[1.5px] h-3 bg-current" />
      </div>
    </>
  );
}

// 4-Pixel Category Indicator (Eye-friendly modern electric indigo / blue squares)
function PixelIndicator() {
  return (
    <div className="grid grid-cols-2 gap-0.5 w-3 h-3">
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-100 animate-pulse" />
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-30" />
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-60" />
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-90" />
    </div>
  );
}

// Technical Pixel Divider Bar
function PixelDivider() {
  return (
    <div className="w-full relative py-3 border-y border-[#d1d1d1] bg-[#f7f7f7] overflow-hidden">
      <div
        className="w-full h-3 opacity-60 bg-repeat-x bg-center"
        style={{
          backgroundImage: `url('https://framerusercontent.com/images/YQkeJnGRKgTO0lQ2V724YxSbrSg.png')`,
          backgroundSize: "contain",
        }}
      />
      <div className="absolute left-4 top-0 bottom-0 w-px bg-[#d1d1d1]" />
      <div className="absolute right-4 top-0 bottom-0 w-px bg-[#d1d1d1]" />
    </div>
  );
}

const products = [
  {
    id: "axa-workspace",
    tag: "/COLLABORATION SUITE",
    title: "AXA WORKSPACE",
    subtitle: "Team collaboration, docs, and communication",
    description:
      "Your company’s central command center. Axa Workspace combines real-time documents, team chat, task management, and file storage into one seamless interface. Built to eliminate tab-switching fatigue and keep async teams fully synchronized.",
    features: [
      "Real-time Documents & Docs",
      "Team Chat & Async Channels",
      "Task Management & Cloud Storage",
    ],
    link: "#axa-workspace",
    image: "/axaworkspace.svg",
    alt: "Axa Workspace Preview",
  },
  {
    id: "axa-crm",
    tag: "/SALES & PIPELINE",
    title: "AXA CRM",
    subtitle: "Customer relationship & sales pipeline management",
    description:
      "Intelligent sales pipeline and contact management. Gives your team end-to-end visibility over deals, contact histories, automated follow-ups, and sales metrics, helping move leads faster with custom pipelines and revenue forecasts.",
    features: [
      "Visual Deal & Sales Pipelines",
      "Automated Follow-ups & Reminders",
      "Revenue Forecasts & Analytics",
    ],
    link: "#axa-crm",
    image: "/axacrm.svg",
    alt: "Axa CRM Preview",
  },
  {
    id: "axa-pass",
    tag: "/CREDENTIAL SECURITY",
    title: "AXA PASS",
    subtitle: "Secure password management",
    description:
      "Enterprise-grade security for credentials. Provides encrypted, role-based password sharing, secure note storage, and credential rotation, keeping company data safe while granting controlled team access.",
    features: [
      "Zero-Knowledge Encrypted Vaults",
      "Role-Based Password Sharing",
      "Automated Credential Rotation",
    ],
    link: "#axa-pass",
    image: "/axapass.svg",
    alt: "Axa Pass Preview",
  },
  {
    id: "axa-sign",
    tag: "/DIGITAL CONTRACTS",
    title: "AXA SIGN",
    subtitle: "Digital signature & contract platform",
    description:
      "Legally binding digital signatures and contracts. Features audit-trailed e-signatures, custom document templates, and real-time status tracking to close deals and execute agreements faster.",
    features: [
      "Legally Binding Digital Signatures",
      "Audit-Trailed Verification",
      "Custom Document Templates",
    ],
    link: "#axa-sign",
    image: "/axasign.svg",
    alt: "Axa Sign Preview",
  },
  {
    id: "axa-book",
    tag: "/CALENDAR & SCHEDULING",
    title: "AXA BOOK",
    subtitle: "Calendar scheduling & appointment booking",
    description:
      "Automated scheduling and calendar management. Syncs directly with team calendars to offer custom booking links, automated email/SMS reminders, intake forms, and payment collection.",
    features: [
      "Real-Time 2-Way Calendar Sync",
      "Automated Email & SMS Reminders",
      "Intake Forms & Payment Collection",
    ],
    link: "#axa-book",
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

              <div className="p-6 md:p-8 flex flex-col justify-between h-full">
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
                  <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* Features Card with Corner Crosses */}
                  <div className="relative border border-[#d1d1d1] bg-white p-5 mb-8 shadow-xs">
                    <CornerBrackets className="text-neutral-900" />
                    <div className="space-y-3">
                      {product.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <div className="w-5 h-5 shrink-0 rounded-md bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[#2563eb]">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
                    className="group relative inline-flex items-center justify-between gap-4 px-6 py-3 border border-black bg-transparent text-black text-sm font-medium transition-all duration-200 hover:bg-black hover:text-white w-full sm:w-auto"
                    style={{
                      clipPath: "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 relative shrink-0 text-[#2563eb] group-hover:text-white transition-colors duration-200 flex items-center justify-center">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                      <span className="tracking-wide">Explore {product.title}</span>
                    </div>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-200 text-[#3b82f6] group-hover:text-white font-mono">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER SECTION */}
        <footer className="mt-20 border border-[#d1d1d1] bg-[#f7f7f7] relative">
          <CornerBrackets />

          {/* Main Footer Links & Branding */}
          <div className="p-8 md:p-14 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#d1d1d1]">
            {/* Left: Brand + Tagline + Socials */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <span className="font-extrabold text-2xl tracking-wider text-black">
                    TUNAXA
                  </span>
                </div>
                <p className="text-sm font-mono text-neutral-500 mb-6">
                  Execution. Value. Obsession. Learning. Trust.
                </p>
              </div>

              {/* Social Buttons */}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href="https://www.linkedin.com/company/evolt-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="relative w-11 h-11 border border-[#d1d1d1] bg-white flex items-center justify-center p-2.5 transition-colors hover:bg-neutral-100"
                >
                  <CornerBrackets className="text-black" />
                  <Image
                    src="https://framerusercontent.com/images/ptjHZfR22qLY0nuPLyhE25pOyGQ.png"
                    alt="LinkedIn"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </a>
                <a
                  href="https://x.com/evolt123"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter"
                  className="relative w-11 h-11 border border-[#d1d1d1] bg-white flex items-center justify-center p-2.5 transition-colors hover:bg-neutral-100"
                >
                  <CornerBrackets className="text-black" />
                  <Image
                    src="https://framerusercontent.com/images/byNhsqDwWzetQTwsPI11zx7A.png"
                    alt="X"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </a>
                <a
                  href="https://www.instagram.com/evoltdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="relative w-11 h-11 border border-[#d1d1d1] bg-white flex items-center justify-center p-2.5 transition-colors hover:bg-neutral-100"
                >
                  <CornerBrackets className="text-black" />
                  <Image
                    src="https://framerusercontent.com/images/gRcM0sXhNZOtvdIIIfURMEnIE.png"
                    alt="Instagram"
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Right: 3 Column Links */}
            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="font-mono text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
                  COMPANY
                </h4>
                <ul className="space-y-2.5 text-sm text-neutral-600 font-sans">
                  <li>
                    <Link href="/#services" className="hover:text-black hover:underline transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/#about" className="hover:text-black hover:underline transition-colors">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link href="/#work" className="hover:text-black hover:underline transition-colors">
                      Our work
                    </Link>
                  </li>
                  <li>
                    <Link href="/#contact" className="hover:text-black hover:underline transition-colors">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
                  OUR PRODUCTS
                </h4>
                <ul className="space-y-2.5 text-sm text-neutral-600 font-sans">
                  <li>
                    <Link href="/our-products#axa-workspace" className="hover:text-black hover:underline transition-colors">
                      Axa Workspace
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-products#axa-crm" className="hover:text-black hover:underline transition-colors">
                      Axa CRM
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-products#axa-pass" className="hover:text-black hover:underline transition-colors">
                      Axa Pass
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-products#axa-sign" className="hover:text-black hover:underline transition-colors">
                      Axa Sign
                    </Link>
                  </li>
                  <li>
                    <Link href="/our-products#axa-book" className="hover:text-black hover:underline transition-colors">
                      Axa Book
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
                  LEGAL
                </h4>
                <ul className="space-y-2.5 text-sm text-neutral-600 font-sans">
                  <li>
                    <Link href="#privacy" className="hover:text-black hover:underline transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
            <div>
              © 2026 Tunaxa. All Rights Reserved.
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
