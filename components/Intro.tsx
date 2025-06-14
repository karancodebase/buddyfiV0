/* eslint-disable @next/next/no-img-element */
import React from "react";
import HeroCTA from "./HeroCTA";

const Intro = () => {
  return (
    <div>
      <section className="flex flex-col items-center py-16">
        <div className="py-1 border px-4 rounded-full text-sm">
          The Future of Developer Collaboration
        </div>
        <div>
          <h1 className="text-4xl md:text-8xl font-bold mx-[20vw]">
            Find Your Perfect
          </h1>
          <h1 className="text-4xl md:text-8xl mx-[25vw] font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Code Companion
          </h1>
        </div>
       <img src="/gradient-bg.svg" alt="gradient-bg" className="w-full absolute mt-[17vh]"/>
       <div className="w-[50vw]">
        <HeroCTA/>
       </div>
      </section>
    </div>
  );
};

export default Intro;
