import Link from 'next/link'
import React from 'react'

const generators = [
  { id: 'TW', name: 'Twitter Post' },
  { id: 'TH', name: 'Threads Post' },
  { id: 'BS', name: 'Bluesky Post' },
  { id: 'SS', name: 'Substack Post' },
  // { id: 'IG', name: 'Instagram Metric' },
  // { id: 'FB', name: 'Facebook Metric' },
  // { id: 'LD', name: 'LinkedIn Post' },
  // { id: 'TK', name: 'TikTok Metric' },
]

function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-neutral-400 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Popular Generators */}
        <div className="mb-12">
          <h3 className="text-white text-xs font-bold tracking-widest uppercase mb-8">
            Popular Generators
          </h3>
          
          <div className="flex flex-wrap gap-3">
            {generators.map((gen) => (
              <Link
                key={gen.id}
                href="/"
                className="flex items-center px-4 py-2 bg-neutral-900/30 border border-neutral-800/50 rounded-full hover:border-neutral-700 hover:bg-neutral-800/50 transition-all group"
              >
                <span className="text-[10px] font-bold text-neutral-500 mr-3 uppercase tracking-tighter">
                  {gen.id}
                </span>
                <span className="text-xs font-medium text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  {gen.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-900 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[13px] md:text-sm text-neutral-500">
            © 2026 PostMetrics. All rights reserved.
          </div>

          <div className="flex items-center gap-8 text-[13px] md:text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a 
              href="mailto:a.samuelsamson123@gmail.com" 
              className="text-neutral-400 hover:text-white transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer