import React from "react";
import StageFlow from "./StageFlow";

const Stages = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-center md:text-6xl text-4xl font-bold">
          Stages of <span className="text-green-400/90">Work</span>
        </h1>
        <p className="md:max-w-[60vw] text-center mx-auto md:text-xl mt-4">
          Our vision for the future of BuddyFi
        </p>
      </div>

      <div>
        <StageFlow />
      </div>

      <div className="flex justify-center">
        <div className="glass-morphism lg:max-w-[50vw] mx-2 text-center py-10 md:px-6 px-2 mt-10">
          <p className="text-neutral-50 md:text-2xl text-xl mb-6 font-semibold">
            Built by Developers, for Developers
          </p>
          <p className="text-neutral-400 md:text-lg text-sm">
            We&apos;ve been in your shoes. Every feature in BuddyFi solves a
            real problem we encountered during our own hackathon journey. This
            isn&apos;t just theory - it&apos;s {" "}
            <span className="text-cyan-500">battle-tested solutions</span> that
            have helped 
            <span className="text-blue-500"> 2,500+ developers</span> find their
            perfect teammates.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stages;
