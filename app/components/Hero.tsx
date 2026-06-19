"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const colors = [
    "bg-pink-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-pink-500",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % colors.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Scroll animation
  const { scrollY } = useScroll();
  const leftX = useTransform(scrollY, [0, 300], [0, -60]);
  const rightX = useTransform(scrollY, [0, 300], [0, 60]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative flex flex-col-reverse lg:flex-row justify-center items-center w-full min-h-screen px-4 py-8 lg:py-16 overflow-hidden bg-gradient-to-l from-purple-200 to-pink-200">

      {/* 🌈 Floating Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* 🖱 Cursor Glow */}
      <div className="cursor-glow"></div>

      <div className="w-4/5 flex flex-col-reverse lg:flex-row justify-center items-center relative z-10">

        {/* LEFT SECTION (animated in/out) */}
        <motion.div
          style={{ x: leftX, scale }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-2/3 w-full space-y-4"
        >
          <h1 className="text-2xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
            Hi, I am Neha
          </h1>

          <div className="text-2xl lg:text-5xl font-extrabold text-gray-800">
            <TypeAnimation
              sequence={[
                "a Web Developer",
                1000,
                "a Programmer",
                1000,
                "a Full Stack Developer",
                1000,
                "a Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="text-base lg:text-lg text-gray-600 max-w-md">
            I build amazing, responsive websites and user-friendly interfaces.
          </p>

          <Link href="#contact">
            <button className="text-lg text-white rounded-3xl font-bold py-2 px-5 bg-gradient-to-r from-pink-400 to-purple-600 hover:scale-105 transition">
              Lets Connect
            </button>
          </Link>
        </motion.div>

        {/* RIGHT SECTION (moves opposite direction) */}
        {isMounted && (
          <motion.div
            style={{ x: rightX, scale }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`rounded-full mt-5 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 transition-colors duration-500 ${colors[currentIndex]} flex items-center justify-center border-4 border-yellow-300`}
          >
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="rounded-full"
              width={300}
              height={300}
            />
          </motion.div>
        )}
      </div>

      {/* 🖱 Cursor tracking glow */}
      <style jsx>{`
        .cursor-glow {
          position: fixed;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,0,150,0.3), transparent 70%);
          pointer-events: none;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          mix-blend-mode: screen;
          z-index: 0;
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('mousemove', (e) => {
            const glow = document.querySelector('.cursor-glow');
            if (glow) {
              glow.style.left = e.clientX + 'px';
              glow.style.top = e.clientY + 'px';
            }
          });
        `
      }} />
    </section>
  );
};

export default Hero;