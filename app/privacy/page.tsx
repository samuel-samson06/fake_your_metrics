import React from 'react'
import Header from '@/components/homepage/Header'
import Footer from '@/components/homepage/Footer'
import { FiCheck, FiSettings, FiShield, FiClock } from 'react-icons/fi'

function PrivacyPage() {
  return (
    <div className="bg-[#f8f9fc] min-h-screen font-sans">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Page Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100">
            <FiClock className="text-indigo-600 w-3.5 h-3.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
              Last Updated: April 08, 2026
            </span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 p-10 md:p-16 border border-slate-100">
          <p className="text-slate-600 leading-relaxed mb-12 text-lg">
            This Privacy Policy outlines our commitment to transparency and explains how we handle your information when you use our platform.
          </p>

          {/* Section: Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Information We Collect</h2>
            <p className="text-slate-500 mb-6">We collect information to provide a better experience for our users. This includes:</p>
            
            <ul className="space-y-4">
              <ListItem title="Account Information" desc="User information which are not stored anywhere." />
              <ListItem title="Metric Parameters" desc="The configuration data and templates you create within our editor." />
            </ul>
          </section>

          {/* Highlighted Box: How We Use Data */}
          <section className="bg-slate-50/80 rounded-3xl p-8 mb-12 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">How We Use Your Data</h3>
            <p className="text-slate-500 text-center text-sm mb-8 max-w-lg mx-auto">
              Your data is primarily used to facilitate the core functionality of the FakeYourMetrics platform. Specifically:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <UsageCard 
                icon={<FiSettings className="text-indigo-600" />}
                title="Tool Optimization"
                desc="Ensuring our UI components and template engines perform at peak efficiency for your specific workflow."
              />
              <UsageCard 
                icon={<FiShield className="text-indigo-600" />}
                title="Security & Access"
                desc="Protecting your account from unauthorized access."
              />
            </div>
          </section>

          {/* Section: Data Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We employ industry-standard encryption and security protocols. Our &apos;No-Line&apos; rule for design extends to our security—seamless, integrated, and invisible. We use TLS for data in transit and AES-256 encryption for data at rest.
            </p>
          </section>

          <div className="h-px bg-slate-100 w-full mb-12" />
 
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
 
            <a href="mailto:a.samuelsamson123@gmail.com" className="text-indigo-600 font-bold hover:underline decoration-2 underline-offset-4">
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

function Badge({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-xs font-bold border border-slate-200">
      {text}
    </span>
  )
}

export default PrivacyPage