'use client';
import React from 'react';
import { FaGithub, FaReact, FaAngular, FaVuejs } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { MdPreview } from "react-icons/md";

function ProjectSection() {

  const projects = [
    {
      id: 'fitness-app',
      title: 'Fitness App',
      desc: 'HTML, CSS & Vanilla JS fitness tracker with clean UI and responsive design.',
      tech: [<SiBootstrap />, <FaReact />],
      video: '/videos/fitness.mp4',
      github: 'https://github.com/nehanoor-dev/fitness-app',
      live: 'https://nehanoor-dev.github.io/fitness-app/',
    },
    {
      id: 'tour-site',
      title: 'Tour Management System',
      desc: 'Angular + TypeScript powered booking system with dynamic UI.',
      tech: [<FaAngular />],
      video: '/videos/tour-site.mp4',
      github: '',
      live: 'https://tour-site-plum.vercel.app/',
    },
    {
      id: 'next-portfolio',
      title: 'Next.js Portfolio',
      desc: 'Modern portfolio with animations, SEO and responsive design.',
      tech: [<SiTailwindcss />, <FaReact />],
      video: '/videos/portfolio.mp4',
      github: 'https://github.com/nehanoor-dev',
      live: 'https://neha-noor.vercel.app/',
    },
    {
      id: 'innohub',
      title: 'Innohub Landing Page',
      desc: 'Vue + Vuetify landing page for SaaS solution branding.',
      tech: [<FaVuejs />],
      video: '/videos/innohub.mp4',
      github: '',
      live: 'https://innohub-solution.netlify.app/',
    },
    // {
    //   id: 'restaurant-app',
    //   title: 'Restaurant App',
    //   desc: 'React + Bootstrap frontend for restaurant ordering UI.',
    //   tech: [<FaReact />, <SiBootstrap />],
    //   video: '/videos/restaurant.mp4',
    //   github: '',
    //   live: 'https://restaurant-web-js.netlify.app/',
    // },
    // {
    //   id: 'realestate',
    //   title: 'Real Estate Landing Page',
    //   desc: 'Responsive real estate landing page built with React.',
    //   tech: [<FaReact />, <SiBootstrap />],
    //   video: '/videos/realestate.mp4',
    //   github: '',
    //   live: 'https://na-realestate.netlify.app/',
    // },
    {
      id: 'printox',
      title: 'Printing webiste (Printox)',
      desc: 'A client project for ecommerce printing application.',
      tech: [<FaReact />, <SiBootstrap />],
      video: '/videos/printox.mp4',
      github: '',
      live: 'https://www.printox.co.uk/site',
    },
    {
      id: 'OpenAi chatbot integration',
      title: 'Vehicle Marketplace',
      desc: 'A Client application openai chatbot integration for vehicle search',
      tech: [<FaReact />, <SiBootstrap />],
      video: '/videos/chatbot.mp4',
      github: '',
      live: '',
    },
    // {
    //   id: 'restaurant-landing',
    //   title: 'Restaurant Landing Page',
    //   desc: 'Modern landing page for restaurant branding.',
    //   tech: [<FaReact />, <SiBootstrap />],
    //   video: '/videos/res-landing.mp4',
    //   github: '',
    //   live: 'https://zaiqa-restaurant-maanilverma.netlify.app/',
    // },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 md:px-10 bg-white">
      
      <h1 className="text-4xl text-center font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
        Projects
      </h1>

      {/* GRID: 2 cards on large screens */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">

        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl overflow-hidden border border-pink-300/30 shadow-lg hover:shadow-pink-400/30 transition-all duration-500 hover:-translate-y-2 bg-white"
          >

            {/* VIDEO */}
            <div className="h-56 w-full overflow-hidden">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* OVERLAY (INTERACTIVE HOVER) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* CONTENT */}
            <div className="p-5 flex flex-col gap-3 relative z-10">

              {/* TITLE */}
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-pink-500 transition">
                {project.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 group-hover:text-gray-800">
                {project.desc}
              </p>

              {/* TECH ICONS */}
              <div className="flex items-center gap-3 text-xl text-pink-500">
                {project.tech?.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex items-center gap-5 mt-2">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-pink-500 text-2xl transition"
                  >
                    <FaGithub />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-purple-500 text-2xl transition"
                  >
                    <MdPreview />
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default ProjectSection;