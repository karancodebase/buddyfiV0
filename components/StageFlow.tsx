import React from "react";

const stages = [
  {
    title: "User Onboarding",
    desc: "User connects their Solana wallet and lands on the app. We ask minimal but key questions to understand skills, interests, and hackathon intent.",
    label: "preparation",
  },
  {
    title: "Profile Creation",
    desc: "User fills out a form with skills, goals, and availability. This data is pinned to IPFS and referenced on-chain, ensuring decentralized identity.",
    label: "preparation",
  },
  {
    title: "Sketching the Match",
    desc: "We map out potential matches using compatibility logic based on interests, tech stack, and activity level.",
    label: "structure & feedback loop",
  },
  {
    title: "Initial Matching",
    desc: "Show basic swipe interface with top matches. Prioritize functionality, not style, to test early assumptions.",
    label: "",
  },
  {
    title: "Refining the Flow",
    desc: "Add personality - gamified badges, profile vibes, and match indicators. Begin integrating user feedback into the matching algorithm.",
    label: "",
  },
  {
    title: "Making Components",
    desc: "Build and polish key UI components: swipe cards, badge logic, match notifications, and profile dashboards.",
    label: "Final Touches",
  },
  {
    title: "User Validation",
    desc: "Collect early user feedback post-match. Adjust flow, fix edge cases, and enhance clarity in the UX.",
    label: "",
  },
  {
    title: "Live & Iterate",
    desc: "Platform is live and growing! Monitor activity, collect data, and prep for upcoming features like team formation, leaderboards, and mobile support.",
    label: "",
  },
];

export default function StageFlow() {
  return (
    <section className="relative bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-6 mb-32">
          {stages.slice(0, 4).map((stage, i) => (
            <div key={i} className="relative">
              <div className="w-6 h-6 bg-gray-300 rounded-full mb-6" />
              {stage.label && (
                <p className="absolute top-[-10] left-20 text-gray-300">{stage.label}</p>
              )}
              <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
              <p className="text-sm text-gray-400">{stage.desc}</p>
              {i < 3 && (
                <div className="absolute top-3 left-10 right-[0rem] h-0.5 bg-white" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-8 gap-y-6">
          {stages.slice(4).reverse().map((stage, i) => (
            <div key={i} className="relative">
              <div className="w-6 h-6 bg-gray-300 rounded-full mb-6" />
              {stage.label && (
                <p className="absolute top-[-10] left-14 text-sm text-gray-300">{stage.label}</p>
              )}
              <h3 className="text-lg font-semibold mb-2">{stage.title}</h3>
              <p className="text-sm text-gray-400">{stage.desc}</p>
              {i < 3 && (
                <div className="absolute top-3 right-1 left-[2.5rem] h-0.5 bg-white" />
              )}
            </div>
          ))}
        </div>

        {/* SVG loop arrow (from top right to bottom right) */}
        <svg className="absolute hidden md:block top-36 right-[15vw] w-28 h-56" viewBox="0 0 100 200" fill="none">
          <path
            d="M 0 0 Q 100 0 100 100 Q 100 200 0 200"
            stroke="#ccc"
            strokeWidth="2"
            fill="transparent"
            markerEnd="url(#arrowhead)"
          />
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="10"
              refX="10"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#ccc" />
            </marker>
          </defs>
        </svg>
      </div>
    </section>
  );
}
