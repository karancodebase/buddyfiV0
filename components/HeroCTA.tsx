// components/HeroCTA.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="relative w-full h-[50vh] mt-10 flex items-center justify-center overflow-hidden rounded-xl">
      {/* Background glowing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[85%] h-[80%] rounded-full border border-[#7A1FFF]/30" />
        <div className="absolute w-[70%] h-[60%] rounded-full border-2 border-[#7A1FFF]/60" />
        <div className="absolute w-[50%] h-[35%] rounded-full border-2 border-[#7A1FFF]/80" />
        <div className="absolute w-[40%] h-[20%] rounded-full border-3 border-[#7A1FFF]" />
      </div>

      {/* CTA Button */}
      <Link href="https://app.buddyfi.xyz">
        <button className="relative cursor-pointer z-10 px-6 py-3 bg-black text-white text-lg font-semibold rounded-full flex items-center gap-2 hover:scale-105 transition">
          ✨ Get Started for free
        </button>
      </Link>

      <Image
        src="/globe.svg"
        alt="cursor"
        width={90}
        height={90}
        className="absolute top-[5%] right-[22%] z-10"
      />
      <Image
        src="/globe.svg"
        alt="cursor"
        width={70}
        height={70}
        className="absolute top-[25%] right-[40%] z-10"
      />
      <Image
        src="/globe.svg"
        alt="cursor"
        width={100}
        height={100}
        className="absolute top-[7%] left-[27%] z-10"
      />
      <Image
        src="/globe.svg"
        alt="cursor"
        width={100}
        height={100}
        className="absolute bottom-[10%] right-[20%] z-10"
      />
      <Image
        src="/globe.svg"
        alt="cursor"
        width={70}
        height={70}
        className="absolute bottom-[25%] left-[38%] z-10"
      />
      <Image
        src="/globe.svg"
        alt="cursor"
        width={100}
        height={100}
        className="absolute bottom-[7%] left-[15%] z-10"
      />
    </div>
  );
}
