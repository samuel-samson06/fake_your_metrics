"use client"

import Link from 'next/link';
import React from 'react'

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
      <div>
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          FakeYourMetrics
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-8">
        <a href="/how_it_works" className="text-xs font-semibold text-accent transition-colors border-b-2 border-accent pb-0.5">
          How it works
        </a>
      </nav>

      <button 
        onClick={() => {
          document.getElementById('editor-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-accent hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-accent/25 cursor-pointer active:scale-95"
      >
        Create Post
      </button>
    </header>
  )
}

export default Header