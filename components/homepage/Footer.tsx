import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 mt-auto bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="text-lg font-bold text-gray-900">FakeYourMetrics</div>
          <p className="text-xs text-gray-500">
            © 2026 FakeYourMetrics.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium text-gray-600">
          <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          <a href="mailto:a.samuelsamson123@gmail.com" className="hover:text-gray-900 transition-colors">Contact Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer