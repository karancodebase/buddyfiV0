"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center bg-black border-b border-zinc-800">
      <Link href="/" className="text-white font-mono text-2xl tracking-tight">
        <span className="text-green-400">{"{Buddy"}</span>
        <span className="text-blue-400">{"Fi}"}</span>
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        
        <Link href="#early-access" className="text-zinc-400 hidden md:block hover:text-white transition">
          Early Access
        </Link>
        <Link
          href="https://app.buddyfi.xyz/"
          className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white font-medium transition"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
