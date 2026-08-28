import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CornerBrackets } from "./ui/card";

export default function Footer() {
  return (
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
              href="https://www.linkedin.com/company/tunaxa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="relative w-11 h-11 border border-[#d1d1d1] bg-white flex items-center justify-center p-2.5 transition-colors hover:bg-neutral-100"
            >
              <CornerBrackets className="text-black" />
              <Image
                src="https://img.magnific.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg?semt=ais_hybrid&w=740&q=80"
                alt="LinkedIn"
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
                <Link href="/about" className="hover:text-black hover:underline transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/#work" className="hover:text-black hover:underline transition-colors">
                  Our work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black hover:underline transition-colors">
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
                <Link href="/our-products/axa-workspace" className="hover:text-black hover:underline transition-colors">
                  Axa Workspace
                </Link>
              </li>
              <li>
                <Link href="/our-products/axa-crm" className="hover:text-black hover:underline transition-colors">
                  Axa CRM
                </Link>
              </li>
              <li>
                <Link href="/our-products/axa-pass" className="hover:text-black hover:underline transition-colors">
                  Axa Pass
                </Link>
              </li>
              <li>
                <Link href="/our-products/axa-sign" className="hover:text-black hover:underline transition-colors">
                  Axa Sign
                </Link>
              </li>
              <li>
                <Link href="/our-products/axa-book" className="hover:text-black hover:underline transition-colors">
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
          <p>© 2026 Tunaxa. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
