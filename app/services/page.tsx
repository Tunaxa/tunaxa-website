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

// 4-Pixel Category Indicator
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

const services = [
  {
    id: "web-development",
    tag: "/WEB ENGINEERING",
    title: "CUSTOM WEB DEVELOPMENT",
    overview:
      "High-performance, scalable websites and web applications engineered with modern tech stacks. Built for lightning-fast load speeds, high security, and seamless user experiences.",
    capabilities: [
      "Custom web applications and client portals",
      "Full-stack frontend and backend development",
      "Search engine optimization (SEO) architecture",
      "Scalable cloud hosting setup and maintenance",
    ],
    cta: "Start Web Project",
    link: "/#contact",
  },
  {
    id: "mobile-development",
    tag: "/MOBILE ENGINEERING",
    title: "CUSTOM MOBILE APP DEVELOPMENT",
    overview:
      "Native and cross-platform mobile applications designed for iOS and Android. We build responsive, intuitive apps from scratch tailored to your exact product requirements.",
    capabilities: [
      "Cross-platform apps (iOS and Android)",
      "Custom UI/UX design and wireframing",
      "Offline-first capabilities and cloud sync",
      "App Store and Google Play deployment management",
    ],
    cta: "Build Mobile App",
    link: "/#contact",
  },
  {
    id: "api-integration",
    tag: "/API & INTEGRATIONS",
    title: "CUSTOM API DEVELOPMENT & INTEGRATION",
    overview:
      "Secure, high-throughput custom APIs built to connect software systems, streamline workflows, and enable automated data transfers across your operational ecosystem.",
    capabilities: [
      "RESTful and GraphQL API design",
      "Third-party software integrations",
      "Secure database architecture and data pipelines",
      "Backend optimization and legacy migration",
    ],
    cta: "Connect Systems",
    link: "/#contact",
  },
  {
    id: "web-scraping",
    tag: "/DATA & EXTRACTION",
    title: "CUSTOM WEB SCRAPING & DATA EXTRACTION",
    overview:
      "Automated scraping engines and data pipelines built to extract, clean, and structure high-volume web data safely for market intelligence and operational automation.",
    capabilities: [
      "Automated large-scale data extraction",
      "Anti-bot bypass and proxy management",
      "Structured data formatting (JSON, CSV, SQL databases)",
      "Real-time monitoring and data pipelines",
    ],
    cta: "Extract Web Data",
    link: "/#contact",
  },
  {
    id: "sales-outsourcing",
    tag: "/SALES OPERATIONS",
    title: "TURNKEY SALES SETUP & OUTSOURCING",
    overview:
      "We build complete sales teams and pipelines from scratch. We combine proven sales strategy with vetted, cost-effective global talent to run your cold outreach, follow-ups, and deal closing at a fraction of local hiring costs.",
    capabilities: [
      "End-to-end sales pipeline setup and CRM integration",
      "Sourcing, placing, and managing global sales talent",
      "Outbound cold outreach, email, and phone infrastructure",
      "Ongoing commission-based or retainer management setups",
    ],
    cta: "Scale Sales Team",
    link: "/#contact",
  },
  {
    id: "growth-marketing",
    tag: "/GROWTH & ACQUISITION",
    title: "GROWTH MARKETING SERVICES",
    overview:
      "Data-driven marketing strategies designed to generate qualified leads and drive revenue. We run target-focused campaigns optimized directly for customer acquisition.",
    capabilities: [
      "Performance ad campaigns (Paid Search, Social Ads)",
      "Sales funnel design and conversion rate optimization",
      "Lead generation strategy and automated nurturing",
      "Brand positioning and content strategy",
    ],
    cta: "Drive Growth",
    link: "/#contact",
  },
];

export default function ServicesPage() {
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

        {/* ONE PAGE-LEVEL CARD WRAPPING EVERYTHING */}
        <div className="relative border border-[#d1d1d1] bg-[#f7f7f7] shadow-xs">
          <CornerBrackets />

          {/* HERO — no own border, just content + divider */}
          

          <PixelDivider />

          {/* SERVICES — static stacked content, no per-service card */}
          {services.map((service, idx) => (
            <div key={service.id} id={service.id} className="scroll-mt-28">
              <div className="p-8 md:p-12 lg:p-14">
                <div className="gap-8 lg:gap-12 items-start">

                  {/* Left Column: Index, Tag, Title, Overview, CTA */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-xs font-bold text-neutral-400">
                          0{idx + 1}
                        </span>
                        <span className="text-neutral-300 font-mono">/</span>
                        <PixelIndicator />
                        <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase">
                          {service.tag}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-black mb-4 font-sans leading-tight">
                        {service.title}
                      </h2>

                      <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-8 max-w-2xl">
                        {service.overview}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={service.link}
                        className="group/btn mb-8 relative inline-flex items-center justify-between gap-4 px-6 py-3.5 border border-black bg-transparent text-black text-sm font-medium transition-all duration-200 hover:bg-black hover:text-white"
                        style={{
                          clipPath: "polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)",
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 relative shrink-0 text-[#2563eb] group-hover/btn:text-white transition-colors duration-200 flex items-center justify-center">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </svg>
                          </div>
                          <span className="tracking-wide">{service.cta}</span>
                        </div>
                        <span className="transform group-hover/btn:translate-x-1 transition-transform duration-200 text-[#3b82f6] group-hover/btn:text-white font-mono">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Key Capabilities — plain content, no card border */}
                  <div className="lg:col-span-5 pt-8 lg:pt-0">
                    <div className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
                      <span>Key Capabilities</span>
                    </div>

                    <div className="space-y-3.5">
                      {service.capabilities.map((capability, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 shrink-0 rounded-sm bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[#2563eb] mt-0.5">
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-xs md:text-sm font-medium text-neutral-800 leading-snug">
                            {capability}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {idx < services.length - 1 && <PixelDivider />}
            </div>
          ))}

          <PixelDivider />

          {/* FOOTER — no own border, just content */}
          <footer className="relative">
            <div className="p-8 md:p-14 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#d1d1d1]">
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

              <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-mono text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
                    COMPANY
                  </h4>
                  <ul className="space-y-2.5 text-sm text-neutral-600 font-sans">
                    <li>
                      <Link href="/services" className="hover:text-black hover:underline transition-colors">
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

            <div className="px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
              <div>© 2026 Tunaxa. All Rights Reserved.</div>
            </div>
          </footer>

        </div>

      </div>
    </div>
  );
}