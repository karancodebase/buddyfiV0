import React from "react";
import Carousel from "./ui/solutionCarousel";

const Rewrites = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-center md:text-6xl text-4xl font-bold">
          How <span className="text-green-400/90">BuddyFi</span> Rewrites the
          Story
        </h1>
        <p className="md:max-w-[60vw] text-center mx-auto md:text-xl mt-4">
          From frustrated hackathon participants to building the world&apos;s
          first 
          <span className="text-blue-400">
            skill-based developer matching platform
          </span>
           .
        </p>
      </div>

      <div className="flex justify-center gap-6 py-10">
        <Carousel/>
      </div>

       <div className="flex justify-center">
        <div className="glass-morphism md:max-w-[50vw] mx-2 text-center py-8 md:px-10 px-2 mt-10">
          <p className="text-neutral-50 md:text-2xl text-xl mb-4 font-semibold">
            The Technology Behind the Magic
          </p>
         <div className="flex md:flex-row flex-col md:gap-6 gap-4 md:py-6">
          <div>
            <p className="pb-4 md:text-xl font-semibold text-blue-400">AI Matching Engine</p>
            <p className="md:text-md text-sm">Advanced ML algorithms analyze 50+ data points to predict team compatibility with 89% accuracy</p>
          </div>
          <div>
            <p className="pb-4 md:text-xl font-semibold text-cyan-400">On-Chain Verification</p>
            <p className="md:text-md text-sm">Blockchain-based reputation system that can&apos;t be faked, ensuring genuine skill verification</p>
          </div>
          <div>
            <p className="pb-4 md:text-xl font-semibold text-purple-400">Real-Time Analytics</p>
            <p className="md:text-md text-sm">Live collaboration tracking and team performance insights to optimize future matches</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Rewrites;
