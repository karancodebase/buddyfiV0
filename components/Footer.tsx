import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black w-full py-8 px-4 text-center text-sm text-gray-500 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 border-t border-gray-800">
        <span>
          © 2025 <span className="font-semibold text-gray-300">BuddyFi</span> Building the future of developer collaboration
        </span>
        <div className="flex gap-4">
          <Link
            href="https://x.com/buddyfii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline hover:text-blue-400 transition"
          >
            Twitter/X
          </Link>
          <span className="text-gray-400">·</span>
          <Link
            href="https://www.linkedin.com/company/buddyfii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline hover:text-blue-400 transition"
          >
            LinkedIn
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
