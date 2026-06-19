'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Home, User, Briefcase, FolderOpen, Mail, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Services", href: "#service", icon: Briefcase },
    { name: "Portfolio", href: "#portfolio", icon: FolderOpen },
    { name: "Contact", href: "#contact", icon: Mail },
  ]

  return (
    <nav className="relative">

      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-pink-700 via-fuchsia-600 to-purple-700 shadow-lg">

        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

          {/* Animated Logo */}
          <Link
            href="#"
            className="
              text-3xl font-extrabold tracking-wider
              bg-gradient-to-r from-white via-pink-200 to-yellow-200
              text-transparent bg-clip-text
              animate-pulse
              drop-shadow-lg
              hover:scale-105 transition-transform duration-300
            "
          >
            Neha N.
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="
              text-white text-3xl
              hover:scale-110 transition-transform duration-200
            "
          >
            ☰
          </button>

        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* FULL SCREEN SIDEBAR */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full z-50
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          bg-gradient-to-br from-purple-800 via-pink-600 to-red-500
        `}
      >

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="
            absolute top-6 right-6 text-white text-4xl
            hover:rotate-90 transition-transform duration-300
          "
        >
          <X size={32} />
        </button>

        {/* Menu */}
        <div className="flex flex-col items-center justify-center h-full space-y-10">

          {links.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  flex items-center gap-4 text-white
                  text-3xl font-extrabold
                  hover:scale-125 hover:text-yellow-200
                  transition-all duration-300
                  animate-fade-in
                "
              >
                <Icon size={34} />
                <span className="tracking-wide">{item.name}</span>
              </Link>
            )
          })}

        </div>

      </div>
    </nav>
  )
}

export default Navbar