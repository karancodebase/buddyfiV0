/* eslint-disable @next/next/no-img-element */
"use client";

import { Github } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-black w-full md:px-6 px-2 pt-2 pb-1 flex justify-between items-center border-b border-zinc-800">
      <Link href="/">
        <div className="flex gap-1 items-center">
          <img
            src="./BuddyFi_logo.svg"
            alt="BuddyFi logo"
            className="md:h-12 md:w-12 h-8 w-8"
          />
          <p className="md:text-2xl text-lg font-bold text-white">BuddyFi</p>
        </div>
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        
        <Link href="https://github.com/karancodebase/buddyfi">
          <Github className="text-neutral-400" />
        </Link>
        <Link
          href="https://app.buddyfi.xyz"
          className="px-4 py-2 cursor-pointer rounded bg-blue-500 hover:bg-blue-400 text-white font-medium transition"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
