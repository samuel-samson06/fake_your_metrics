"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const navItems = [
  { name: 'How It Works', href: '/how_it_works' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms', href: '/terms' },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      {/* Hamburger Menu Trigger */}
      <button
        onClick={toggleMenu}
        className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle navigation menu"
      >
        <HiBars3 className="w-7 h-7" />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Slide-In Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-50">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
              aria-label="Close menu"
            >
              <HiXMark className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center px-4 py-3.5 text-base font-semibold text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all group"
                >
                  <span className="flex-1">{item.name}</span>
                  <svg 
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer inside drawer */}
          <div className="p-6 border-t border-gray-50 bg-gray-50/50">
            <button 
              onClick={() => {
                closeMenu();
                document.getElementById('editor-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
            >
              Create Post
            </button>
            <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-widest font-bold">
              © 2026 PostMetrics
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation