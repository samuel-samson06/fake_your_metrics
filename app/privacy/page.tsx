import React from 'react'
import Header from '@/components/homepage/Header'
import Footer from '@/components/homepage/Footer'
import { FiCheck, FiSettings, FiShield, FiClock } from 'react-icons/fi'

function PrivacyPage() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen font-sans">
      <Header />

      <main className="max-w-5xl mx-auto px-2 py-20">
  {/* Page Title Section */}
  <div className="text-center mb-16">
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
      Privacy Policy
    </h1>
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
      <FiClock className="text-indigo-600 w-3.5 h-3.5" />
      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
        Last Updated: April 21, 2026
      </span>
    </div>
  </div>

  {/* Main Content Card */}
  <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 py-10 px-5 md:p-16 border border-slate-100">
    
    <p className="text-slate-600 leading-relaxed mb-12 text-lg">
      At <span className="font-semibold text-slate-800">PostMetrics</span>, we value simplicity and transparency. 
      This Privacy Policy explains how your information is handled when you use our platform.
    </p>

    {/* Section: Information We Collect */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Information We Collect
      </h2>

      <p className="text-slate-500 mb-6">
        PostMetrics is designed to be lightweight and privacy-friendly. Most of your activity happens directly in your browser.
      </p>

      <ul className="space-y-4">
        <ListItem 
          title="User Inputs" 
          desc="Details such as names, usernames, post content, and metrics are used only to generate previews and are not stored on our servers." 
        />
        <ListItem 
          title="Generated Content" 
          desc="All mock posts and configurations exist temporarily in your session and are not permanently saved." 
        />
      </ul>
    </section>

    {/* Highlighted Box: How We Use Data */}
    <section className="bg-slate-50/80 rounded-3xl py-8 px-4 mb-12 border border-slate-100">
      <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
        How We Use Your Data
      </h3>

      <p className="text-slate-500 text-center text-sm mb-8 max-w-lg mx-auto">
        PostMetrics uses your inputs solely to power the core experience of generating realistic, playful post previews.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <UsageCard 
          icon={<FiSettings className="text-indigo-600" />}
          title="Real-Time Rendering"
          desc="Your inputs are processed instantly to generate accurate platform-style previews."
        />
        <UsageCard 
          icon={<FiShield className="text-indigo-600" />}
          title="Privacy First"
          desc="We do not store or share your generated content or personal inputs."
        />
      </div>
    </section>

    {/* Section: Data Security */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        Data Security
      </h2>

      <p className="text-slate-600 leading-relaxed">
        We prioritize keeping your data secure. Since most processing happens locally in your browser, your information remains under your control. 
        Where applicable, we use secure protocols such as TLS to ensure safe data transmission.
      </p>
    </section>

    <div className="h-px bg-slate-100 w-full mb-12" />

    {/* Section: Disclaimer */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        Disclaimer
      </h2>

      <p className="text-slate-600 leading-relaxed">
        PostMetrics is intended for entertainment, mockups, and creative use only. 
        Generated content should not be used to mislead, impersonate, or deceive others.
      </p>
    </section>

    {/* Contact */}
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        Contact
      </h2>

      <a 
        href="mailto:a.samuelsamson123@gmail.com" 
        className="text-indigo-600 font-bold hover:underline decoration-2 underline-offset-4"
      >
        a.samuelsamson123@gmail.com
      </a>
    </section>

  </div>
</main>

      <Footer />
    </div>
  )
}

// Sub-components for cleaner code
function ListItem({ title, desc }: {title:string, desc:string}) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-1 w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
        <FiCheck className="text-indigo-600 w-3 h-3" />
      </div>
      <p className="text-slate-600">
        <span className="font-bold text-slate-900">{title}:</span> {desc}
      </p>
    </li>
  )
}

function UsageCard({ icon, title, desc }: {icon:React.ReactNode, title:string, desc:string}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <div className="mb-3 text-lg">{icon}</div>
      <h4 className="font-bold text-slate-900 text-sm mb-2">{title}</h4>
      <p className="text-slate-500 text-[13px] leading-relaxed">{desc}</p>
    </div>
  )
}


export default PrivacyPage