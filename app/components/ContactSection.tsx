'use client';
import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function ContactSection() {

  const links = [
    {
      name: "Gmail",
      icon: <FaEnvelope />,
      url: "mailto:nehanoor154@gmail.com",
      color: "from-red-400 to-pink-500",
      text: "nehanoor154@gmail.com"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/nehanoor-developer",
      color: "from-blue-400 to-blue-600",
      text: "Click to open"
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/nehanoor-dev",
      color: "from-gray-700 to-gray-900",
      text: "github.com/nehanoor-dev"
    },
    {
      name: "Fiverr",
      icon: "F",
      url: "https://fiverr.com/nehanoor31",
      color: "from-green-400 to-emerald-600",
      text: "fiverr.com/nehanoor31"

    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com/",
      color: "from-blue-500 to-indigo-600",
      text: "Click to open"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com",
      color: "from-pink-500 to-purple-600",
      text: "click to open"
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-10 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Get In Touch
        </h1>

        <p className="text-center text-gray-600 mb-14">
          Let’s connect through any platform below — I usually respond fastest on LinkedIn or Gmail.
        </p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {links.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-white/40 shadow-md hover:shadow-pink-300/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >

              {/* gradient glow hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${item.color} transition duration-500`}></div>

              <div className="relative flex items-center gap-4">

                {/* ICON */}
                <div className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg group-hover:scale-110 transition`}>
                  {item.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.text}
                  </p>
                </div>

              </div>

              {/* hover underline animation */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-purple-600 group-hover:w-full transition-all duration-500"></div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ContactSection;