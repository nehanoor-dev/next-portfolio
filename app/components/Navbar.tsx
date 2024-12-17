'use client'
import Link from 'next/link'
import React, {useState} from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return ( 

   <section>
    <nav className="border-b-4 border-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-20 items-center">
        <div className="flex-shrink-0">
            <Link href={'#'} className="font-extrabold text-3xl py-2 px-2 text-gray-800 scroll-smooth">
            Neha N.
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="md:flex sm:hidden">
            <Link
              href="#"
              className="link"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="link"
            >
              About
            </Link>
            <Link
              href="#service"
              className="link"
            >
              Services
            </Link>
            <Link
              href="#hire"
              className="link"
            >
              Hire As Freelancer
            </Link>
            <Link
              href="#portfolio"
              className="link"
            >
              Portfolio
            </Link>
            <Link
              href={'#contact'}
              className="link"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base hover:text-white font-medium hover:bg-gray-500"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base hover:text-white font-medium hover:bg-gray-500"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base hover:text-white font-medium hover:bg-gray-500"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base hover:text-white font-medium hover:bg-gray-500"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
   </section>
  )
}

export default Navbar