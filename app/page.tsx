"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const router = useRouter();
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (isValidEmail) {
      router.push("/thanks");
    } else {
      alert("Enter a valid email.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center text-center px-6 py-24"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 text-transparent bg-clip-text">
          Built to Match the Dopest Builders
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          Where devs don&apos;t just vibe — they match. Find your hackathon
          dream team, buddy up with builders, and launch cool stuff together.
        </p>
      </section>

      <section
        ref={formRef}
        className="bg-neutral-950 px-6 py-20 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Be the First to Join the Hacker Network
        </h2>
        <p className="mt-4 text-gray-400 max-w-lg">
          We&apos;re bringing together the dopest devs, builders, and code-heads
          to match and vibe pre-hackathons. <br />
          Want in early? Drop your email and let&apos;s go.
        </p>

        <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="your@devmail.xyz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded bg-zinc-800 text-white border border-zinc-600"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 transition-all px-4 py-2 rounded"
          >
            Count Me In
          </button>
        </form>

        <div className="mt-6 text-xs text-gray-600 font-mono">
          <p> booting buddyfi.exe ...</p>
          <p> matching legendary builders</p>
          <p> vibe levels: 1337</p>
        </div>
      </section>

      <footer className="text-center py-10 text-gray-500 text-sm flex justify-center items-center md:flex-row flex-col">
        © 2025 BuddyFi. Stay weird, stay building. ·{" "}
        <Link href="https://x.com/buddyfii" className="underline font-bold">
          Twitter/X
        </Link>
      </footer>
    </div>
  );
}
