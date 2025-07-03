import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Connect = () => {
  return (
    <div className="pt-20 px-4 lg:block">
      <div className=" flex justify-center">
        <div className="glass-morphism rounded-lg lg:w-[50vw] py-10 text-center">
          <div className="flex justify-center">
            <div className="py-1 border border-green-700/60 px-4 rounded-full md:text-sm text-xs mb-2">
              Ready to Transform Your Development Journey?
            </div>
          </div>
          <div>
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Your Next Great</h1>
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">
              {" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Code Companion
              </span>{" "}
              Awaits
            </h1>
          </div>
          <div className="md:text-md text-sm text-neutral-400 text-center lg:px-10 px-2 md:mt-6 mt-2">
            Stop rolling the dice on random teammates. Join the revolution
            of <span className="text-blue-500">skill-verified, AI-matched</span> developer collaboration. Your
            breakthrough project starts with the right team.
          </div>
          <div className="flex lg:gap-6 gap-3 lg:px-10 px-2 py-8">
            <div className="py-2 lg:px-4 px-1 text-xs border rounded-md bg-white/2">Find your perfect coding partner in minutes</div>
            <div className="py-2 lg:px-4 px-1 text-xs border rounded-md bg-white/2">Join 2,500+ verified developers worldwide</div>
            <div className="py-2 lg:px-4 px-1 text-xs border rounded-md bg-white/2">Increase your hackathon win rate</div>
          </div>
          <div className="px-2">
            <Link href="https://app.buddyfi.xyz">
            <Button className="lg:py-6 lg:px-8 px-4 py-2 lg:text-xl md:text-lg text-blue-50 cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-600">Connect Wallet & Find Your Team</Button>
            </Link>
          </div>
          <div className="flex lg:text-md text-xs lg:gap-6 gap-2 lg:px-10 justify-center py-4">
            <div>🔐 Blockchain Secured</div>
            <div>🚀 Instant Matching</div>
            <div>💎 Free to Start</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="glass-morphism lg:max-w-[50vw] mx-2 text-center py-10 md:px-10 px-2 mt-10">
          <p className="text-neutral-50 md:text-2xl text-xl mb-4 font-semibold">
            The Developer Community You&apos;ve Been Waiting For
          </p>
          <p className="text-neutral-400 md:text-lg text-sm">
            BuddyFi isn&apos;t just a platform - it&apos;s a movement.
            We&apos;re building the future where talented developers never have
            to build alone, where skills are verified, and where great ideas get
            the teams they deserve. 
            <span className="text-cyan-500 font-semibold">
              Join us in shaping the future of collaboration.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Connect;
