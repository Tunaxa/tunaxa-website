"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CornerBrackets } from "./ui/card";
import PixelIndicator from "./ui/PixelIndicator";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Products", href: "/our-products" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-1 pt-1">
      <div className="relative mx-auto w-full border border-[#d1d1d1] bg-white backdrop-blur-md transition-all duration-200">
        <CornerBrackets />

        <nav className="px-4 py-3 sm:px-6 sm:py-3.5">
          <div className="flex items-center justify-evenly">
            {/* Brand / Logo */}
            <Link href="/" className="group flex items-center gap-3 font-sans">
              <div className=" flex items-center justify-center p-1.5 transition-colors">
                <Image
                  src="/black-logo.png"
                  alt="Tunaxa Logo"
                  width={50}
                  height={50}
                  className="object-contain w-10 h-10"
                />
              </div>
              <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-black">
                TUNAXA
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 font-mono text-xs sm:text-sm uppercase tracking-wider">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`group relative flex items-center py-1 font-medium transition-colors ${
                      isActive
                        ? "text-black font-bold"
                        : "text-neutral-600 hover:text-black"
                    }`}
                  >
                    {/* Pixel Indicator with Hover Slide-in Effect */}
                    <span
                      className={`overflow-hidden transition-all duration-200 flex items-center ${
                        isActive
                          ? "w-4 opacity-100 mr-1"
                          : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 group-hover:mr-1"
                      }`}
                    >
                      <PixelIndicator />
                    </span>

                    <span>{link.name}</span>

                    {/* Bottom Blue Active/Hover Line */}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#3b82f6] transition-all duration-200 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-between gap-3 px-5 py-2.5 border border-black bg-transparent text-black text-xs font-mono font-medium uppercase tracking-wider transition-all duration-200 hover:bg-black hover:text-white"
                style={{
                  clipPath:
                    "polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)",
                }}
              >
                <div className="flex items-center gap-2">
                  <PixelIndicator />
                  <span>Let&apos;s chat</span>
                </div>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200 text-[#3b82f6] group-hover:text-white font-mono">
                  →
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-9 h-9 bg-white flex items-center justify-center text-black hover:bg-neutral-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-[#d1d1d1] flex flex-col gap-3 font-mono text-sm tracking-wider uppercase">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-2 px-3 border border-transparent transition-all ${
                      isActive
                        ? "border-[#d1d1d1] bg-white text-black font-bold"
                        : "text-neutral-600 hover:text-black hover:bg-white/50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {isActive ? (
                        <PixelIndicator />
                      ) : (
                        <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full" />
                      )}
                      <span>{link.name}</span>
                    </div>
                    <span className="text-xs text-[#3b82f6]">→</span>
                  </Link>
                );
              })}

              <div className="pt-2">
                <Link
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="group relative flex items-center justify-between px-5 py-3 border border-black bg-transparent text-black text-xs font-mono font-medium uppercase tracking-wider transition-all duration-200 hover:bg-black hover:text-white w-full"
                  style={{
                    clipPath:
                      "polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <PixelIndicator />
                    <span>Let&apos;s chat</span>
                  </div>
                  <span className="text-[#3b82f6] group-hover:text-white font-mono">
                    →
                  </span>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
