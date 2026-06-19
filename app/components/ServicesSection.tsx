"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Globe,
  Code2,
  Smartphone,
  Database,
  Rocket,
} from "lucide-react";

function ServicesSection() {
  const services = [
    {
      id: "spa",
      title: "Single Page Applications",
      desc: "Fast, responsive SPAs with smooth navigation and modern UX.",
      icon: Globe,
    },
    {
      id: "fullstack",
      title: "Full Stack Development",
      desc: "Scalable end-to-end web applications using modern tech stacks.",
      icon: Code2,
    },
    {
      id: "webapp",
      title: "Web Applications",
      desc: "Custom web apps built for performance, scalability, and business needs.",
      icon: Layers,
    },
    {
      id: "backend",
      title: "Backend Systems",
      desc: "Secure APIs, databases, authentication, and server architecture.",
      icon: Database,
    },
    {
      id: "mobile",
      title: "Responsive Design",
      desc: "Mobile-first UI/UX designs that work on all devices seamlessly.",
      icon: Smartphone,
    },
    {
      id: "deployment",
      title: "Deployment & Hosting",
      desc: "CI/CD pipelines, cloud deployment, and production optimization.",
      icon: Rocket,
    },
  ];

  return (
    <section
      id="service"
      className="py-20 px-6 bg-gradient-to-b from-purple-50 to-pink-50"
    >
      <h1 className="text-4xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
        Services
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        I provide modern web development services focused on performance,
        scalability, and beautiful user experience.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="
                group relative p-6 rounded-2xl
                bg-white/70 backdrop-blur-md
                border border-white/40
                shadow-md
                hover:shadow-2xl
                hover:scale-105
                transition-all duration-300
              "
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white mb-4">
                <Icon size={26} />
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;