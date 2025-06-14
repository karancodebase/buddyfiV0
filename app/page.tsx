"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function LandingPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center text-center px-6 py-24"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 text-transparent bg-clip-text">
          🚧 BuddyFi is Updating!
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          We&apos;re currently shipping some exciting updates to make your
          experience even better. In the meantime, you can visit the main app
          here:
        </p>
        <Link
          href="https://app.buddyfi.xyz"
          className="px-4 mt-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white font-medium transition"
        >
          Go to BuddyFi
        </Link>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          Thanks for your patience! 💙
        </p>
      </section>

      <footer className="w-full py-8 px-4 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 border-t border-gray-800">
        <span>
          © 2025 <span className="font-semibold text-white">BuddyFi</span>. Stay
          weird. Stay building.
        </span>
        <div className="flex gap-4">
          <Link
            href="https://x.com/buddyfii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline hover:text-blue-400 transition"
          >
            Twitter/X
          </Link>
          <span className="text-gray-400">·</span>
          <Link
            href="https://www.linkedin.com/company/buddyfii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline hover:text-blue-400 transition"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    </div>
  );
}
