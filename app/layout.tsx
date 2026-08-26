import { Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const monoSans = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-sans",
});

export const metadata = {
  title: "Evolt Clone",
  description: "High-stakes engineering navbar clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${monoSans.variable}`}>
      <body className="font-mono bg-[#0a0a0a] text-white antialiased min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}