import React from "react";
import Carousel from "./ui/problemCarousel";

const Problem = () => {
  return (
    <div className="py-20">
      <h1 className="text-center md:text-6xl text-4xl font-bold">
        The <span className="text-orange-500">Problem</span> We Faced
      </h1>
      <p className="md:max-w-[60vw] text-center mx-auto md:text-xl mt-4">
        As developers who&apos;ve been through{" "}
        <span className="text-orange-600">50+ hackathons</span> , we experienced
        these pain points firsthand. Every weekend, talented developers were
        failing not because of lack of skill, but because of{" "}
        <span className="text-orange-400">team formation chaos</span>.
      </p>
      <div className="flex justify-center">
        <div className="glass-morphism lg:max-w-[50vw] mx-2 text-center py-6 md:px-6 px-2 mt-10">
          <p className="text-neutral-400 md:text-lg text-sm">
            &quot;We watched brilliant ideas die because great developers
            couldn&apos;t find each other. The random team formation process was
            killing innovation before it even started.&quot;
          </p>
          <p className="text-cyan-400 md:text-xl mt-4">- BuddyFi Team</p>
        </div>
      </div>

      <div className="flex justify-center gap-6 py-10">
        <Carousel/>
      </div>
      <div className="flex justify-center">
        <div className="glass-morphism lg:max-w-[50vw] mx-2 text-center py-8 md:px-10 px-2 mt-10">
          <p className="text-neutral-50 md:text-2xl text-xl mb-4 font-semibold">
            The Breaking Point
          </p>
          <p className="text-neutral-400 md:text-lg text-sm">
            After losing our 10th hackathon not due to lack of skill but team
            dysfunction, we decided to solve this problem once and for all. We
            needed a way to find{" "}
            <span className="text-blue-500"> verified, skilled developers</span>
             who{" "}
            <span className="text-cyan-500">
               matched our vision and commitment level
            </span>
             .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
