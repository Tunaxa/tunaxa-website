"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CornerBrackets } from "../components/ui/card";
import PixelIndicator from "../components/ui/PixelIndicator";
import PixelDivider from "../components/ui/PixelDivider";
import Footer from "../components/Footer";

const INQUIRY_TOPICS = [
  { id: "sales", label: "Enterprise Sales" },
  { id: "custom-eng", label: "Custom Engineering" },
  { id: "support", label: "Product Support" },
  { id: "partnership", label: "Partnership" },
  { id: "general", label: "General Inquiry" },
];

const CONTACT_CHANNELS = [
  {
    title: "RESPONSE TIME SLA",
    value: "< 24 Hours",
    caption: "Fast turnaround for high-velocity teams worldwide",
    badge: "GUARANTEED",
  },
  {
    title: "GLOBAL ARCHITECTURE",
    value: "Worldwide Edge",
    caption: "Distributed infrastructure with zero-knowledge nodes",
    badge: "ACTIVE",
  },
  {
    title: "CUSTOM IMPLEMENTATIONS",
    value: "Bespoke Builds",
    caption: "Dedicated engineers assigned to custom enterprise scopes",
    badge: "AVAILABLE",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "Enterprise Sales",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@tunaxa.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please write a message before transmitting.");
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "Enterprise Sales",
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

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

      <div className="relative z-10 max-w-360 mx-auto px-4 sm:px-6 md:px-12 pt-28 pb-20 space-y-12">
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <PixelIndicator />
            <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-[#3b82f6] uppercase">
              / DIRECT TRANSMISSION & CHANNELS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase text-black font-sans">
            GET IN TOUCH WITH TUNAXA
          </h1>

          <p className="text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-2xl mx-auto">
            Directly connect with our core engineering and product leadership. Every inquiry is reviewed by technical architects with a guaranteed response within 24 hours.
          </p>
        </div>

        {/* MAIN GRID: INFO & FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: SYSTEM CHANNELS & SPECS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative border border-[#d1d1d1] bg-white p-6 sm:p-8 shadow-xs">
              <CornerBrackets />

              <div className="flex items-center justify-between border-b border-[#d1d1d1] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <PixelIndicator />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                    SYSTEM INFO & CHANNELS
                  </span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 bg-[#eff6ff] text-[#2563eb] border border-[#bfdbfe] font-bold">
                  LIVE STATUS: ONLINE
                </span>
              </div>

              {/* Channels List */}
              <div className="space-y-6">
                {CONTACT_CHANNELS.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-[#e5e5e5] bg-[#fafafa] transition-all hover:border-[#bfdbfe] hover:bg-white group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="font-mono text-[9px] font-bold uppercase px-1.5 py-0.5 bg-neutral-200 text-neutral-800">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="font-mono text-base font-bold text-black tracking-tight group-hover:text-[#2563eb] transition-colors">
                      {item.value}
                    </div>
                    <p className="text-xs text-neutral-600 font-sans mt-1">
                      {item.caption}
                    </p>
                  </div>
                ))}
              </div>

              {/* Security & Reliability Callout */}
              <div className="mt-6 pt-5 border-t border-[#d1d1d1] space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase text-neutral-900">
                  <span className="w-2 h-2 bg-[#22c55e] inline-block"></span>
                  <span>ENCRYPTED END-TO-END TRANSMISSION</span>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  Messages are directly recorded to secure servers and routed to the on-duty engineering team. No marketing spam, zero third-party brokers.
                </p>
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="relative border border-[#d1d1d1] bg-[#f7f7f7] p-6 shadow-xs">
              <CornerBrackets />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-black mb-3">
                LOOKING FOR SOMETHING SPECIFIC?
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <Link
                  href="/pricing"
                  className="flex items-center justify-between p-2.5 bg-white border border-[#d1d1d1] hover:border-black transition-colors text-neutral-800 hover:text-black"
                >
                  <span>→ View Software Ecosystem Pricing</span>
                  <span className="text-[#2563eb]">50% OFF CRM BUNDLE</span>
                </Link>
                <Link
                  href="/our-products"
                  className="flex items-center justify-between p-2.5 bg-white border border-[#d1d1d1] hover:border-black transition-colors text-neutral-800 hover:text-black"
                >
                  <span>→ Explore All 5 Core Modules</span>
                  <span className="text-neutral-500">STANDALONE</span>
                </Link>
                <Link
                  href="/services"
                  className="flex items-center justify-between p-2.5 bg-white border border-[#d1d1d1] hover:border-black transition-colors text-neutral-800 hover:text-black"
                >
                  <span>→ Custom Software Engineering</span>
                  <span className="text-neutral-500">BESPOKE</span>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative border border-[#d1d1d1] bg-white p-6 sm:p-10 shadow-xs">
              <CornerBrackets />

              {status === "success" ? (
                /* SUCCESS STATE */
                <div className="py-8 space-y-6 text-center animate-in fade-in duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ecfdf5] border border-[#a7f3d0] text-[#059669] mb-2">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#059669] font-bold">
                      TRANSMISSION CONFIRMED 
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black font-sans">
                      MESSAGE LOGGED & TRANSMITTED
                    </h2>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto">
                      Thank you, <span className="font-bold text-black">{formData.name}</span>. Your message has been permanently recorded in our system. A team member will respond to <span className="font-mono font-semibold text-black">{formData.email}</span> shortly.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="max-w-md mx-auto text-left border border-[#d1d1d1] bg-[#fafafa] p-4 font-mono text-xs space-y-2">
                    <div className="flex justify-between border-b border-neutral-200 pb-1">
                      <span className="text-neutral-500">SENDER:</span>
                      <span className="font-bold text-black">{formData.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-200 pb-1">
                      <span className="text-neutral-500">SUBJECT:</span>
                      <span className="text-[#2563eb] font-bold">{formData.subject}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">STATUS:</span>
                      <span className="text-[#059669] font-bold">SENT</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-black bg-black text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-transparent hover:text-black transition-colors"
                      style={{
                        clipPath:
                          "polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)",
                      }}
                    >
                      <PixelIndicator />
                      <span>Transmit Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM VIEW */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#d1d1d1] pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <PixelIndicator />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3b82f6]">
                        DISPATCH CONSOLE
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-black font-sans">
                      SEND A DIRECT MESSAGE
                    </h2>
                  </div>

                  {/* Error Notification */}
                  {status === "error" && errorMessage && (
                    <div className="p-4 border border-[#fecaca] bg-[#fef2f2] text-[#b91c1c] text-xs font-mono flex items-center gap-3">
                      <span className="font-bold text-base">✕</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* 1. Inquiry Topic Selector */}
                  <div className="space-y-2">
                    <label className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-800">
                      1. SELECT INQUIRY TOPIC <span className="text-[#2563eb]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {INQUIRY_TOPICS.map((topic) => {
                        const isSelected = formData.subject === topic.label;
                        return (
                          <button
                            key={topic.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, subject: topic.label })}
                            className={`p-2.5 text-xs font-mono text-left transition-all border ${
                              isSelected
                                ? "border-black bg-black text-white font-bold"
                                : "border-[#d1d1d1] bg-[#fafafa] text-neutral-700 hover:border-neutral-400 hover:bg-white"
                            }`}
                          >
                            <span className="mr-1">{isSelected ? "■" : "□"}</span> {topic.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Personal & Company Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-name"
                        className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-800"
                      >
                        FULL NAME <span className="text-[#2563eb]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-4 py-3 bg-[#fafafa] border border-[#d1d1d1] text-sm text-black font-sans placeholder:text-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-email"
                        className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-800"
                      >
                        WORK EMAIL <span className="text-[#2563eb]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full px-4 py-3 bg-[#fafafa] border border-[#d1d1d1] text-sm text-black font-sans placeholder:text-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company / Organization (Optional) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact-company"
                      className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-800"
                    >
                      COMPANY / ORGANIZATION <span className="text-neutral-400 font-normal">(OPTIONAL)</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Systems Ltd."
                      className="w-full px-4 py-3 bg-[#fafafa] border border-[#d1d1d1] text-sm text-black font-sans placeholder:text-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-colors"
                    />
                  </div>

                  {/* 3. Message Area */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="contact-message"
                        className="block font-mono text-xs font-bold uppercase tracking-wider text-neutral-800"
                      >
                        YOUR MESSAGE <span className="text-[#2563eb]">*</span>
                      </label>
                      <span className="font-mono text-[11px] text-neutral-500">
                        {formData.message.length} CHARS
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your goals, requirements, questions, or timeline..."
                      className="w-full px-4 py-3 bg-[#fafafa] border border-[#d1d1d1] text-sm text-black font-sans placeholder:text-neutral-400 focus:outline-none focus:border-black focus:bg-white transition-colors resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">


                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 border border-black bg-black text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-transparent hover:text-black disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      style={{
                        clipPath:
                          "polygon(6px 0%, 100% 0%, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0% 100%, 0% 6px)",
                      }}
                    >
                      {status === "loading" ? (
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>TRANSMITTING MESSAGE...</span>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-center gap-2">
                            <PixelIndicator />
                            <span>TRANSMIT MESSAGE</span>
                          </div>
                          <span className="transform group-hover:translate-x-1 transition-transform duration-200 text-[#3b82f6] group-hover:text-black font-mono">
                            →
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Technical Divider */}
        <PixelDivider />

        {/* FOOTER SECTION */}
        <Footer />
      </div>
    </div>
  );
}
