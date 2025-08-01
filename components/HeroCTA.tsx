// components/HeroCTA.tsx
"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroCTA() {
  return (
    <div className="relative w-full hidden lg:block h-[50vh] mt-4 flex items-center justify-center overflow-hidden rounded-xl">
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
        .float2 {
          animation: float 3.5s ease-in-out infinite;
        }
        .float3 {
          animation: float 2.7s ease-in-out infinite;
        }
        .float4 {
          animation: float 4s ease-in-out infinite;
        }
        .float5 {
          animation: float 3.2s ease-in-out infinite;
        }
        @keyframes glow {
          0% {
            box-shadow: 0 0 8px 2px #7a1fff, 0 0 0px 0 #fff;
          }
          50% {
            box-shadow: 0 0 24px 8px #7a1fff, 0 0 8px 2px #fff;
          }
          100% {
            box-shadow: 0 0 8px 2px #7a1fff, 0 0 0px 0 #fff;
          }
        }
        .glow {
          animation: glow 1.5s infinite alternate;
        }
        @keyframes ringExpand {
          0% {
            transform: scale(0.5);
            opacity: 1;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .ring-anim {
          animation: ringExpand 2s linear infinite;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0.5);
          border-radius: 9999px;
          pointer-events: none;
        }
        .ring1 {
          animation-delay: 0s;
        }
        .ring2 {
          animation-delay: 0.5s;
        }
        .ring3 {
          animation-delay: 1s;
        }
        .ring4 {
          animation-delay: 1.5s;
        }
      `}</style>
      {/* Background glowing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-[85%] h-[80%] rounded-full border border-[#7A1FFF]/30 animate-ring animation-delay-3" />
        <div className="absolute w-[70%] h-[60%] rounded-full border-2 border-[#7A1FFF]/60 animate-ring animation-delay-2" />
        <div className="absolute w-[50%] h-[35%] rounded-full border-2 border-[#7A1FFF]/80 animate-ring animation-delay-1" />
        <div className="absolute w-[40%] h-[20%] rounded-full border-3 border-[#7A1FFF] animate-ring" />
      </div>

      {/* CTA Button */}
      <Link href="https://app.buddyfi.xyz">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="relative cursor-pointer z-10 py-1 px-3 text-white text-lg font-medium rounded-full bg-transparent flex items-center gap-2 hover:scale-105 transition glow">
            ✨ Start Building – It’s Free
          </button>
        </div>
      </Link>

      <div>
        <div
          className="absolute top-[5%] right-[22%] z-10 rounded-full float"
          style={{ width: 90, height: 90 }}
        >
          <Image
            src="/placeholder1.jpeg"
            alt="cursor"
            width={90}
            height={90}
            className="w-full h-full rounded-full"
          />
        </div>
        <div
          className="absolute top-[24%] right-[40%] z-10 rounded-full float2"
          style={{ width: 70, height: 70 }}
        >
          <Image
            src="/placeholder2.jpeg"
            alt="cursor"
            width={70}
            height={70}
            className="w-full h-full rounded-full"
          />
        </div>
        <div
          className="absolute top-[7%] left-[27%] z-10 rounded-full float3"
          style={{ width: 100, height: 100 }}
        >
          <Image
            src="/placeholder3.jpeg"
            alt="cursor"
            width={100}
            height={100}
            className="w-full h-full rounded-full"
          />
        </div>
        <div
          className="absolute bottom-[10%] right-[20%] z-50 rounded-full float4"
          style={{ width: 100, height: 100 }}
        >
          <Image
            src="/placeholder4.jpeg"
            alt="cursor"
            width={100}
            height={100}
            className="w-full h-full rounded-full"
          />
        </div>
        <div
          className="absolute bottom-[26%] left-[38%] z-10 rounded-full float5"
          style={{ width: 65, height: 65 }}
        >
          <Image
            src="/placeholder1.jpeg"
            alt="cursor"
            width={65}
            height={65}
            className="w-full h-full rounded-full"
          />
        </div>
        <div
          className="absolute bottom-[7%] left-[15%] z-10 rounded-full float2"
          style={{ width: 100, height: 100 }}
        >
          <Image
            src="/placeholder5.jpeg"
            alt="cursor"
            width={100}
            height={100}
            className="w-full h-full rounded-full"
          />
        </div>
        <Image
          src="/arrow.svg"
          alt="cursor"
          width={50}
          height={50}
          className="absolute bottom-[33%] right-[40%] z-10"
        />
        <Image
          src="/arrow-line.svg"
          alt="cursor"
          width={250}
          height={250}
          className="absolute bottom-[27%] right-[16%] z-0"
        />
      </div>

      <div>
        <div className="px-4 py-1 rounded-full shadow-xl/30 bg-black absolute top-[35%] right-[15%] z-10">
          <Search />
        </div>
        <div className="px-4 py-1 rounded-full shadow-xl/30 bg-black absolute top-[30%] left-[14%] z-10">
          <Search />
        </div>
        <div className="px-5 py-2 rounded-full shadow-xl/30 bg-black absolute bottom-[10%] right-[35%] z-10">
          <Search />
        </div>
      </div>
    </div>
  );
}
