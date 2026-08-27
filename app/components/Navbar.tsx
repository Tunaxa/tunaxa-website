"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "./ui/card"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 z-50 flex justify-center m-2">
      <nav className="flex flex-col w-full max-w-8xl p-6 bg-[]/80 backdrop-blur-md border-b-2 text-neutral-200">
        <div className="flex items-center justify-evenly md:justify-evenly w-full">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold tracking-wider text-foreground text-2xl"
          >
            <Image
              src="/logo.png"
              alt="Evolt Logo"
              width={100}
              height={100}
              className="w-11 bg-black h-11 object-contain rounded-md transition-transform group-hover:scale-105"
            />

            <span>TUNAXA</span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-lg font-mono text-neutral-400">
            <Link
              href="#work"
              className="hover:text-black hover:underline underline-offset-1 transition-colors"
            >
              Work
            </Link>
            <Link
              href="#services"
              className="hover:text-black hover:underline underline-offset-1 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#stack"
              className="hover:text-black hover:underline underline-offset-1 transition-colors"
            >
              Tech Stack
            </Link>
            <Link
              href="#about"
              className="hover:text-black hover:underline underline-offset-1 transition-colors"
            >
              About
            </Link>
          </div>

          <div className="hidden md:flex">
            <Link
              href="#contact"
              className="flex items-center font-mono gap-1.5 px-4 py-2 text-sm font-medium rounded-full border border-neutral-700 bg-black text-white hover:bg-white hover:text-black transition-colors duration-200"
            >
              Let&apos;s chat
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-neutral-200 hover:text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 pt-6 text-lg font-mono text-neutral-400">
            <Link
              href="#work"
              onClick={() => setIsOpen(false)}
              className="hover:text-black hover:underline underline-offset-1 transition-colors"
            >
              Work
            </Link>
            <Link
              href="#services"
              onClick={() => setIsOpen(false)}
              className="hover:text-black hover:underline underline-offset-1 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#stack"
              onClick={() => setIsOpen(false)}
              className="hover:text-black hover:underline underline-offset-1 transition-colors"
            >
              Tech Stack
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-black hover:underline underline-offset-1 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center font-mono gap-1.5 px-4 py-2 text-sm font-medium rounded-full border border-neutral-700 bg-black text-white hover:bg-white hover:text-black transition-colors duration-200 mt-2"
            >
              Let&apos;s chat
            </Link>
          </div>
        )}
      </nav>

      <div>
        <Card
            title={"hey"}
            description={"yyyoooo"}
        >
            
        </Card>
      </div>
    </header>
  );
}


