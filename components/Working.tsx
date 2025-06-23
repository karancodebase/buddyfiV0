import React from "react";

const Working = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-center md:text-6xl text-4xl font-bold">
          How <span className="text-green-400/90">BuddyFi</span> Works
        </h1>
        <p className="md:max-w-[60vw] text-center mx-auto md:text-xl mt-4">
          The magic happens in three simple steps, but each step is powered by
          sophisticated technology working behind the scenes to ensure perfect
          matches and seamless collaboration.
        </p>
      </div>
      <div className="py-10 flex flex-col gap-10">
        <div className="flex gap-6 justify-center">
          <div className="w-[25vw] h-[30vh] border-2"></div>
          <div className="w-[25vw] h-[30vh] border-2"></div>
        </div>
        <div className="flex gap-6 justify-center">
          <div className="w-[25vw] h-[30vh] border-2"></div>
          <div className="w-[25vw] h-[30vh] border-2"></div>
        </div>
        <div className="flex gap-6 justify-center">
          <div className="w-[25vw] h-[30vh] border-2"></div>
          <div className="w-[25vw] h-[30vh] border-2"></div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="glass-morphism md:max-w-[50vw] mx-2 text-center py-6 md:px-10 px-2 mt-10">
          <p className="text-neutral-50 md:text-2xl text-xl mb-4 font-semibold">
            Real Results from Real Teams
          </p>
          <div className="flex gap-6 py-6 justify-between">
            <div>
              <p className="pb-4 text-4xl font-semibold text-blue-400">
                89%
              </p>
              <div>
                <p>Team Compatibility Score</p>
                <p className="text-neutral-500">vs 23% random teams</p>
              </div>
            </div>
            <div>
              <p className="pb-4 text-4xl font-semibold text-cyan-400">
                3.2x
              </p>
              <div>
                <p>Faster Project Completion</p>
                <p className="text-neutral-500">Less time teaching basics</p>
              </div>
            </div>
            <div>
              <p className="pb-4 text-4xl font-semibold text-purple-400">
                73%
              </p>
               <div>
                <p>Higher Win Rate</p>
                <p className="text-neutral-500">In competitive hackathons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
