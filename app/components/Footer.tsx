import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <section className='h-56 bg-clip  bg-gradient-to-r from-pink-400 to-purple-600'>
     <div className='flex flex-row items-center justify-center align-middle mt-10'>
        <FaInstagram className='text-4xl text-yellow-300 mt-20 mx-1 cursor-pointer
        hover:text-purple-400
        ' />
        <FaFacebook className='text-4xl text-yellow-300 mt-20 mx-1 cursor-pointer
        hover:text-purple-400
        ' />
        <a href='https://www.linkedin.com/in/nehanoor-developer/' target='_blank'>
        <FaLinkedin className='text-4xl text-yellow-300 mt-20 mx-1 hover:text-purple-400' />
        </a>
     </div>
     <p className='flex justify-center mt-5 mb-3 text-gray-100 border-b border-gray-300
     '>© Developer Neha Noor </p>

    </section>
  )
}

export default Footer