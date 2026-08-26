import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 z-50 flex justify-center m-2">
      <nav className="flex items-center justify-evenly w-full max-w-8xl p-6 bg-[]/80 backdrop-blur-md border-b-2 text-neutral-200 ">
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
            href="/#work"
            className="hover:text-black hover:underline underline-offset-1 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/services"
            className="hover:text-black hover:underline underline-offset-1 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/our-products"
            className="hover:text-black hover:underline underline-offset-1 transition-colors"
          >
            Products
          </Link>
          <Link
            href="/#stack"
            className="hover:text-black hover:underline underline-offset-1 transition-colors"
          >
            Tech Stack
          </Link>
          <Link
            href="/#about"
            className="hover:text-black hover:underline underline-offset-1 transition-colors"
          >
            About
          </Link>
        </div>

        <div>
          <Link
            href="#contact"
            className="flex items-center font-mono gap-1.5 px-4 py-2 text-sm font-medium rounded-full border border-neutral-700 bg-black text-white hover:bg-white hover:text-black transition-colors duration-200"
          >
            Let's chat
          </Link>
        </div>
      </nav>
    </header>
  );
}
