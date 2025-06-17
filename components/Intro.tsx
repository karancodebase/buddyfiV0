/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroCTA from "./HeroCTA";

const Intro = () => {
  return (
    <div>
      <section className="flex flex-col items-center py-16">
        <div className="py-1 border px-4 rounded-full md:text-sm text-xs mb-2">
          The Future of Developer Collaboration
        </div>
        <div>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold md:mx-[20vw] mx-[5vw]">
            Find Your Perfect
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-7xl md:mx-[25vw] mx-[10vw] font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Code Companion
          </h1>
        </div>
        <img
          src="/gradient-bg.svg"
          alt="gradient-bg"
          className="w-full absolute mt-[10vh] hidden md:block"
        />
        <div className="md:w-[50vw]">
          <HeroCTA />
        </div>
        <div className="mt-6 text-center">
          <p className="md:text-2xl font-semibold md:max-w-[70vw] max-w-[95vw]">
            <span className="text-cyan-400">
              Remember that hackathon nightmare?
            </span>{" "}
            You&apos;re a skilled developer with a brilliant idea, but you end
            up with random teammates who don&apos;t match your vision, skills,
            or commitment level.
          </p>
          <p className="text-neutral-400 md:text-lg text-sm mt-4 md:max-w-[65vw] max-w-[90vw] mx-auto">
            We&apos;ve been there. That&apos;s why we built{" "}
            <span className="text-cyan-400"> BuddyFi </span> - the first
            platform that matches developers based on{" "}
            <span className="text-purple-400">
              verified skills, on-chain reputation, and project compatibility.
            </span>{" "}
             
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-4 grid-cols-2 gap-4 px-4">
          <div className="md:max-w-[8vw] glass-morphism text-center px-2 py-2 text-sm text-neutral-300">
           <span className="text-2xl text-blue-400 font-bold px-2">1,000+</span> Verified Developers
          </div>
          <div className="md:max-w-[8vw] glass-morphism text-center px-4 py-2 text-sm text-neutral-300">
          <span className="text-2xl text-cyan-400 font-bold px-2">500+</span> Teams Formed
          </div>
          <div className="md:max-w-[8vw] glass-morphism text-center px-4 py-2 text-sm text-neutral-300">
          <span className="text-2xl text-purple-400 font-bold px-2">100+</span> Hackathons Won
          </div>
          <div className="md:max-w-[8vw] glass-morphism text-center px-4 py-2 text-sm text-neutral-300">
          <span className="text-2xl text-green-400 font-bold px-2">$ 100K</span> Prize Money Won
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
