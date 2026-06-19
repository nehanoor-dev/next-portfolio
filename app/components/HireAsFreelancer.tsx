"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";

function HireAsFreelancer() {
  return (
    <section
      id="hire"
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600"
    >
      {/* Floating background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <Sparkles className="text-yellow-300" />
            <p className="text-yellow-200 font-semibold tracking-wide">
              Available for Freelance Work
            </p>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Let’s build something <br /> amazing together 🚀
          </h2>

          <p className="text-yellow-100 mt-4 max-w-md">
            I design and develop modern, fast, and responsive websites.
            Let’s turn your ideas into reality with clean code and creative UI.
          </p>

          {/* Button */}
          <a
            href="https://www.fiverr.com/nehanoor31"
            target="_blank"
            className="inline-block mt-6"
          >
            <button
              className="
                flex items-center gap-2
                bg-white text-purple-700
                font-bold px-6 py-3
                rounded-full
                hover:scale-110 hover:shadow-xl
                transition-all duration-300
              "
            >
              Hire Me on Fiverr
              <ExternalLink size={18} />
            </button>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-white/20 blur-2xl animate-pulse" />

          <div className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src="/images/profile.png" 
              alt="Freelancer Profile"
              width={330}
              height={330}
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HireAsFreelancer;