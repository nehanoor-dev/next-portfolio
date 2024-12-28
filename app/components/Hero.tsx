"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [colors.length]);

  return (
    <section className="flex flex-col-reverse lg:flex-row justify-center items-center w-full 
    min-h-screen bg-gray-100 px-4 py-8 lg:py-16 bg-clip bg-gradient-to-l from-purple-200 to-pink-200">
      <div className=" w-4/5 flex flex-col-reverse lg:flex-row justify-center items-center">
      {/* Left Section */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-2/3 w-full space-y-4">
        <h1 className="text-2xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
          Hi, I am Neha 
        </h1>
        <div className="text-2xl lg:text-5xl font-extrabold text-gray-800 ">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "a Web Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "a programmer",
              1000,
              "a Full Stack Developer",
              1000,
              "a Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <p className="text-base lg:text-lg text-gray-600 max-w-md">
          I build amazing, responsive websites and user-friendly interfaces.
          Let’s create something awesome together!
        </p>
        <Link href={'#contact'}>
        <button
          className="text-lg text-gray-100 rounded-3xl font-bold py-2 px-5 
        bg-transparent bg-clip bg-gradient-to-r from-pink-400 to-purple-600">
          Lets Connect
        </button>
        </Link>
      </div>

      {/* Right Section */}
      {isMounted && (
        <div
          id="colorChangingDiv"
          className={`rounded-full mt-5 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 transition-colors 
            duration-500 ${colors[currentIndex]} flex items-center justify-center border-4 border-yellow-300`}
        >
          <Image
            src="/images/hero-image.png"
            alt="hero image"
            className="rounded-full"
            width={300}
            height={300}
          />
        </div>
      )}
      </div>

    </section>
  );
};

export default Hero;
