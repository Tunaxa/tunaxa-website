"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsSection from "./components/home-news/NewsSection";
import AboutSection from "./components/about/about";
import { CornerBrackets } from "./components/ui/card";

// Technical Pixel Divider Bar
function PixelDivider() {
  return (
    <div className="w-full relative py-3 border-y border-[#d1d1d1] bg-[#f7f7f7] overflow-hidden my-12">
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

export default function Home() {
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

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 md:px-12 pt-28 pb-20 space-y-16">
        {/* 1. NEWS / DISPATCH SECTION */}
        <NewsSection />

        {/* Technical Divider */}
        <PixelDivider />

        {/* 2. ABOUT SECTION */}
        <AboutSection />

        {/* FOOTER SECTION */}
        <footer className="mt-20 border border-[#d1d1d1] bg-[#f7f7f7] relative">
          <CornerBrackets />

          {/* Main Footer Links & Branding */}
          <div className="p-8 md:p-14 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-[#d1d1d1]">
            {/* Left: Brand + Tagline + Socials */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <div className="mb-4">
                  <span className="font-extrabold text-2xl tracking-wider text-black font-sans">
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
