"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Globe,
  Server,
  Cpu,
  Database,
  Layers,
  Container,
  GitBranch,
  GraduationCap,
  Award,
} from "lucide-react";

function AboutSection() {
  const [activeTab, setActiveTab] = useState("skills");

  // Skills data
  const skills = [
    { name: "React JS", icon: Code2 },
    { name: "Next JS", icon: Globe },
    { name: "Node JS", icon: Server },
    { name: "Express JS", icon: Cpu },
    { name: "PHP", icon: Code2 },
    { name: "PostgreSQL", icon: Database },
    { name: "Redis", icon: Layers },
    { name: "MongoDB", icon: Database },
    { name: "Docker", icon: Container },
    { name: "Git / GitLab", icon: GitBranch },
  ];

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="
                  flex items-center gap-3
                  bg-white/70 backdrop-blur-md
                  border border-white/40
                  rounded-xl px-4 py-3
                  shadow-sm
                  hover:scale-105 hover:shadow-lg
                  transition-all duration-300
                  cursor-pointer
                "
              >
                <Icon className="text-pink-500" size={22} />
                <span className="font-semibold text-gray-700">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      ),
    },

    // 🎓 EDUCATION (UPDATED)
    {
      title: "Education",
      id: "education",
      content: (
        <div className="flex flex-col items-center justify-center gap-6 text-center">

          <div className="flex flex-col items-center bg-white/70 backdrop-blur-md border border-white/40 rounded-xl p-6 w-full max-w-md shadow-sm hover:scale-105 transition">
            <GraduationCap className="text-pink-500" size={34} />
            <h3 className="font-bold text-lg mt-2">
              Bachelors in Information Technology
            </h3>
            <p className="text-gray-600">
              University of the Punjab
            </p>
          </div>

          <div className="flex flex-col items-center bg-white/70 backdrop-blur-md border border-white/40 rounded-xl p-6 w-full max-w-md shadow-sm hover:scale-105 transition">
            <GraduationCap className="text-purple-500" size={34} />
            <h3 className="font-bold text-lg mt-2">
              Masters in Information Technology
            </h3>
            <p className="text-gray-600">
              University of Education
            </p>
          </div>

        </div>
      ),
    },

    // 🏆 CERTIFICATES (UPDATED)
    {
      title: "Certificates",
      id: "certificate",
      content: (
        <div className="flex justify-center">

          <div className="flex flex-col items-center bg-white/70 backdrop-blur-md border border-white/40 rounded-xl p-6 w-full max-w-md shadow-sm hover:scale-105 transition">

            <Award className="text-yellow-500" size={38} />

            <h3 className="font-bold text-lg mt-2 text-center">
              Full Stack Developer Certification
            </h3>

            <p className="text-gray-600 text-center">
              NFTP Program
            </p>

          </div>

        </div>
      ),
    },
  ];

  const buttons = [
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "certificate", label: "Certificates" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-pink-50 to-purple-100"
    >
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
        About Me
      </h1>

      {/* Description */}
      <p className="max-w-3xl text-center text-gray-600 mb-10 text-lg leading-relaxed">
        I am a full stack web developer passionate about building modern,
        interactive, and responsive web applications using cutting-edge technologies.
      </p>

      {/* Tabs */}
      <div className="flex gap-3 flex-wrap justify-center mb-8">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveTab(btn.id)}
            className={`
              px-5 py-2 rounded-full font-semibold transition-all duration-300
              border
              ${
                activeTab === btn.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg scale-110"
                  : "text-gray-700 hover:scale-105 hover:bg-white/60"
              }
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Content Card */}
      <div className="w-full max-w-5xl">
        <AnimatePresence mode="wait">
          {TAB_DATA.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-8 text-gray-700"
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AboutSection;