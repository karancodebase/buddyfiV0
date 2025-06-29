/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroCTA from "./HeroCTA";

const Intro = () => {
  return (
    <div>
      <section className="flex flex-col items-center py-16">
        <div className="py-1 border border-green-700/60 px-4 rounded-full md:text-sm text-xs mb-2">
        🧩 The First Swipe-to-Team Dev Platform
        </div>
        <div>
          <h1 className="text-[1.8rem] md:text-5xl lg:text-7xl font-bold md:mx-10 mx-2">
            Never Hack Alone Again.
          </h1>
          <h1 className="text-[1.3rem] md:text-4xl lg:text-5xl md:mx-14 mx-2 font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Find Devs Who Match Your Vision.
          </h1>
        </div>
        <img
          src="/gradient-bg.svg"
          alt="gradient-bg"
          className="w-full absolute mt-[10vh] hidden lg:block"
        />

        <div className="mt-6 text-center">
          <p className="text-neutral-100 md:text-xl text-sm mt-2 md:max-w-[65vw] max-w-[90vw] mx-auto">
            No more ghost teammates or off-track projects.
          </p>
          <p className="text-neutral-100 md:text-lg text-sm md:max-w-[65vw] max-w-[90vw] mx-auto">
            BuddyFi helps you
            <span className="text-cyan-400"> team up with verified devs</span>,
            based on
            <span className="text-purple-400"> skills and commitment.</span>  
          </p>
          <p className="md:text-3xl text-xl mt-2 font-semibold">
            {" "}
            Swipe. Match. Build. Succeed.
          </p>
        </div>

        <div className="md:w-[50vw]">
          <HeroCTA />
        </div>
        <div className="mt-14 grid md:grid-cols-4 grid-cols-2 gap-4 px-4">
          <div className="md:max-w-[8vw] glass-morphism text-center px-2 py-2 text-sm text-neutral-300">
            <span className="text-2xl text-blue-400 font-bold px-2">
              1,000+
            </span>{" "}
            Verified Developers
          </div>
          <div className="md:max-w-[8vw] glass-morphism text-center px-4 py-2 text-sm text-neutral-300">
            <span className="text-2xl text-cyan-400 font-bold px-2">500+</span>{" "}
            Teams Formed
          </div>
          <div className="md:max-w-[8vw] glass-morphism text-center px-4 py-2 text-sm text-neutral-300">
            <span className="text-2xl text-purple-400 font-bold px-2">
              100+
            </span>{" "}
            Hackathons Won
          </div>
          <div className="md:max-w-[8vw] glass-morphism text-center px-4 py-2 text-sm text-neutral-300">
            <span className="text-2xl text-green-400 font-bold px-2">
              $ 100K
            </span>{" "}
            Prize Money Won
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
