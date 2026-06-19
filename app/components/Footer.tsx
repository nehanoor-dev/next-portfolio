import React from "react";

function Footer() {
  return (
    <footer className="relative overflow-hidden py-14 px-6 bg-gradient-to-r from-pink-500 to-purple-600">
      {/* soft glow background layer */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-xl"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* BRAND TEXT */}
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Designed & Built by <span className="text-yellow-300">Neha Noor</span>
        </h2>

        {/* SUB TEXT */}
        <p className="mt-3 text-sm md:text-base text-white/80">
          Crafting modern, responsive and interactive web experiences with
          React, Next.js & Tailwind CSS.
        </p>

        {/* DIVIDER */}
        <div className="my-6 flex justify-center">
          <div className="h-[1px] w-24 bg-white/40"></div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs md:text-sm text-white/70">
          © {new Date().getFullYear()} All Rights Reserved • Built with passion
          and clean code
        </p>
      </div>
    </footer>
  );
}

export default Footer;
