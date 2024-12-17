'use client'
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdPreview } from "react-icons/md";

function ProjectSection() {
    const projects = [
        {
            id: 'tour-site',
            title: 'Tour Management using Angular and Typescript',
            desc: "Design and develop sleek, responsive Single Page Applications (SPAs) for seamless user experiences and fast performance.",
            img: '/images/portfolio/tour-site.png',
            link: 'https://tour-site-plum.vercel.app/',
        },
        {
            id: 'next',
            title: 'Portfolio Website Using Next JS and Tailwind Css',
            desc: "Design and develop sleek, responsive Single Page Applications (SPAs) for seamless user experiences and fast performance.",
            img: '/images/portfolio/portfolio-next.png',
            link: 'https://neha-noor.vercel.app/',
        },
        {
            id: 'innohub',
            title: 'Innohub Solution Landing Page using Vue JS and Vuetify',
            desc: "Design and develop sleek, responsive Single Page Applications (SPAs) for seamless user experiences and fast performance.",
            img: '/images/portfolio/innohub.png',
            link: 'https://innohub-solution.netlify.app/',
        },
        {
            id: 'res-app',
            title: 'Restaurant Application Frontend using React JS and Bootstrap',
            desc: "Design and develop sleek, responsive Single Page Applications (SPAs) for seamless user experiences and fast performance.",
            img: '/images/portfolio/res-app.png',
            link: 'https://restaurant-web-js.netlify.app/',
        },
        {
            id: 'realestate',
            title: 'Real Estate Landing Page using React JS and Bootstrap',
            desc: "Design and develop sleek, responsive Single Page Applications (SPAs) for seamless user experiences and fast performance.",
            img: '/images/portfolio/realestate.png',
            link: 'https://na-realestate.netlify.app/',
        },
        {
            id: 'portfolio',
            title: 'Portfolio Landing Page using React JS and Bootstrap',
            desc: "Design and develop sleek, responsive Single Page Applications (SPAs) for seamless user experiences and fast performance.",
            img: '/images/portfolio/portfolio.png',
            link: 'https://nehanoordev.netlify.app/',
        },
        {
            id: 'ecommerce',
            title: 'Frontend Ecommerce Website using React JS and Bootstrap',
            desc: "Design and develop sleek, responsive Single Page Applications (SPAs) for seamless user experiences and fast performance.",
            img: '/images/portfolio/ecommerce.png',
            link: 'https://bargain-ecommerce.netlify.app/',
        },
        {
            id: 'res-landing',
            title: 'Restaurant Landing Page Using React JS and Bootstrap',
            desc: "Design and develop sleek, responsive Single Page Applications (SPAs) for seamless user experiences and fast performance.",
            img: '/images/portfolio/res-landing.png',
            link: 'https://zaiqa-restaurant-maanilverma.netlify.app/',
        },
    ]
  return (
    <section className='h-full' id='portfolio'>
        <h1 className='heading'>Projects</h1>
        <div className='container grid grid-cols-1 w-2/3 mx-auto '>
        {projects.map((project) => (
            <div
             key={project.id}
             className='container grid bg-blue-50 lg:grid-cols-2 grid-cols-1 lg:w-4/5 w-3/4 md:mx-auto border-4 border-pink-500
             mt-7 rounded-xl hover:scale-125 hover:-translate-y-4 hover:border-yellow-300 transition-transform 
            transform'>
                <img src={project.img}
                alt={project.title}
                className='h-60'
                />
                <div className='my-auto px-4 md:mt-6 '>
                    <h2 className='heading-small'>{project.title}</h2>
                    <p>{project.desc}</p>
                    <div className='flex flex-row py-2'>
                    <a href='https://github.com/nehanoor-dev' target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-4xl mx-2 text-pink-500 hover:text-purple-500 
                    cursor-pointer" />
                    </a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <MdPreview className="text-4xl mx-2 text-pink-500 
                   hover:text-purple-500 cursor-pointer" />
                     </a>

                    </div>
                </div>
            </div>
        ))}
        </div>
    </section>
  )
}

export default ProjectSection