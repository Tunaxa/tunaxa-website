import { Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const monoSans = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-sans",
});

export const metadata = {
  title: "Tunaxa | Enterprise Software Ecosystem & Custom Engineering",
  description:
    "Unified high-performance software tools, custom engineering, and enterprise solutions built for modern fast-moving teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={monoSans.variable}>
      <body className="font-mono bg-[#f7f7f7] text-[#171717] antialiased min-h-screen selection:bg-[#3b82f6] selection:text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
