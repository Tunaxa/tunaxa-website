import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CornerBrackets } from "../ui/card";

// 4-Pixel Category Indicator
function PixelIndicator() {
  return (
    <div className="grid grid-cols-2 gap-0.5 w-3 h-3 shrink-0">
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-100 animate-pulse" />
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-30" />
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-60" />
      <span className="w-1.5 h-1.5 bg-[#3b82f6] opacity-90" />
    </div>
  );
}

const products = [
  {
    id: "axa-workspace",
    name: "AXA WORKSPACE",
    tag: "/ COMMAND CENTER",
    desc: "Real-time documents, team chat, task boards, and file storage in one unified interface.",
    image: "/axaworkspace.svg",
  },
  {
    id: "axa-crm",
    name: "AXA CRM",
    tag: "/ REVENUE ENGINE",
    desc: "End-to-end sales pipelines, automated follow-ups, and custom conversion analytics.",
    image: "/axacrm.svg",
  },
  {
    id: "axa-pass",
    name: "AXA PASS",
    tag: "/ ZERO-KNOWLEDGE",
    desc: "Enterprise credential vaults, role-based sharing, and automated credential rotation.",
    image: "/axapass.svg",
  },
  {
    id: "axa-sign",
    name: "AXA SIGN",
    tag: "/ LEGAL COMPLIANCE",
    desc: "Audit-trailed digital signatures, custom contract templates, and document lifecycle tracking.",
    image: "/axasign.svg",
  },
  {
    id: "axa-book",
    name: "AXA BOOK",
    tag: "/ SCHEDULING",
    desc: "Intelligent calendar sync, dynamic booking links, automated reminders, and payments.",
    image: "/axabook.svg",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full space-y-12">
      {/* Purpose & Vision Header */}
      <div className="border-b border-[#d1d1d1] pb-6">
        <div className="flex items-center gap-2.5 mb-2">
          <PixelIndicator />
          <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase">
            / ABOUT TUNAXA
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight uppercase text-black font-sans">
          MISSION, PURPOSE & VISION
        </h2>
      </div>

      {/* Purpose & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Purpose */}
        <div className="relative border border-[#d1d1d1] bg-[#f7f7f7] p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
          <CornerBrackets />
          <div>
            <div className="flex items-center gap-2 mb-3">
              <PixelIndicator />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#3b82f6] uppercase">
                / WHY WE EXIST
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight uppercase text-black mt-2 mb-4 font-sans">
              Democratizing World-Class Software
            </h3>
            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
              We eliminate predatory, inflated enterprise pricing. Tunaxa builds unified, high-performance tools and custom software solutions that give growing businesses global-grade capabilities at fair, real-world rates.
            </p>
          </div>

          <div className="relative border border-[#d1d1d1] bg-white p-4 mt-6 shadow-xs">
            <CornerBrackets className="text-black" />
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 shrink-0 rounded-sm bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[#2563eb] mt-0.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-xs font-mono text-neutral-700 leading-relaxed">
                <strong className="text-black font-semibold">Purpose:</strong> Leveling the technical playing field for businesses worldwide through affordable, uncompromised software.
              </p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="relative border border-[#d1d1d1] bg-[#f7f7f7] p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
          <CornerBrackets />
          <div>
            <div className="flex items-center gap-2 mb-3">
              <PixelIndicator />
              <span className="font-mono text-xs font-semibold tracking-wider text-[#3b82f6] uppercase">
                / WHERE WE ARE GOING
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold tracking-tight uppercase text-black mt-2 mb-4 font-sans">
              The Single-Ecosystem Alternative
            </h3>
            <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed">
              To become the world&apos;s leading, all-in-one software ecosystem and technical development power—proving that ambitious, world-class technology can be built from anywhere, for everyone.
            </p>
          </div>

          <div className="relative border border-[#d1d1d1] bg-white p-4 mt-6 shadow-xs">
            <CornerBrackets className="text-black" />
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 shrink-0 rounded-sm bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[#2563eb] mt-0.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-xs font-mono text-neutral-700 leading-relaxed">
                <strong className="text-black font-semibold">Vision:</strong> The ultimate single-ecosystem alternative to overpriced enterprise software.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Suite Overview */}
      <div className="pt-6">
        <div className="border-b border-[#d1d1d1] pb-6 mb-8">
          <div className="flex items-center gap-2.5 mb-2">
            <PixelIndicator />
            <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase">
              / THE ECOSYSTEM
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-black font-sans">
            Built for Modern High-Growth Teams
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((prod) => (
            <div
              key={prod.name}
              className="group relative border border-[#d1d1d1] bg-[#f7f7f7] p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <CornerBrackets />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-mono text-[11px] md:text-xs font-semibold px-2.5 py-1 border border-[#bfdbfe] bg-[#eff6ff] text-[#2563eb] uppercase tracking-wider">
                    {prod.tag}
                  </span>
                </div>

                {/* Framed SVG Graphic */}
                <div className="relative w-full aspect-2/1 border border-[#d1d1d1] bg-white overflow-hidden mb-5 flex items-center justify-center p-2.5 shadow-2xs">
                  <CornerBrackets className="text-black" />
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={640}
                    height={320}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h4 className="text-lg md:text-xl font-extrabold uppercase text-black mb-2 font-sans tracking-tight">
                  {prod.name}
                </h4>
                <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
                  {prod.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#d1d1d1]">
                <Link
                  href={`/our-products#${prod.id}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-black group-hover:text-[#2563eb] transition-colors"
                >
                  <span>Explore module</span>
                  <span className="text-sm font-mono text-[#3b82f6] transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}