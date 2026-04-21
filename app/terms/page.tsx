import React, { ReactNode } from 'react'
import Header from '@/components/homepage/Header'
import Footer from '@/components/homepage/Footer'
import { 
  FiMail, 
  FiArrowLeft 
} from 'react-icons/fi'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="bg-[#fbfcff] min-h-screen font-sans">
      <Header />

      <main className="max-w-4xl mx-auto px-3 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Terms of <span className="text-indigo-600">Service</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Please read these terms carefully before using our platform. By accessing <strong>PostMetrics</strong>, you agree to these guidelines.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-100/40 p-8 md:p-16 border border-slate-100 relative overflow-hidden">
          
          <div className="space-y-16">

            {/* 1. Acceptance */}
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing and using PostMetrics (&apos;the Service&apos;), you agree to be bound by these Terms of Service. 
                If you do not agree, please do not use the platform.
              </p>
              <p className="mt-4">
                We may update these terms from time to time. Continued use of the platform means you accept any updates.
              </p>
            </Section>

            {/* 2. Purpose of the Service */}
            <Section title="2. Purpose of the Service">
              <p>
                PostMetrics is a creative tool designed to generate realistic-looking social media mockups for 
                entertainment, design, storytelling, and educational purposes.
              </p>
              <p className="mt-4">
                It is not intended for deceptive, fraudulent, or misleading use.
              </p>
            </Section>

            {/* 3. User Responsibilities */}
            <Section title="3. User Responsibilities">
              <p className="mb-4">
                By using this platform, you agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-500">
                <li>Use generated content for impersonation, fraud, or misinformation.</li>
                <li>Present generated mockups as real or verified content.</li>
                <li>Exploit the platform for harmful or illegal activities.</li>
              </ul>
            </Section>

            {/* 4. Intellectual Property */}
            <Section title="4. Intellectual Property">
              <p>
                <strong className="text-slate-900">The Platform:</strong> All design, code, and functionality remain the property of PostMetrics.
              </p>
              <p className="mt-4">
                <strong className="text-slate-900">Generated Content:</strong> You are free to use generated images for personal or creative purposes, 
                but responsibility for how they are used remains with you.
              </p>
            </Section>

            {/* 5. Disclaimer */}
            <Section title="5. Disclaimer">
              <p>
                PostMetrics provides a visualization tool &apos;as is&apos;. Generated content is illustrative and does not represent real metrics or engagement.
              </p>
            </Section>

            {/* 6. Termination */}
            <Section title="6. Termination">
              <p>
                We reserve the right to restrict or terminate access if these terms are violated.
              </p>
            </Section>

          </div>

          {/* Contact Box */}
          <div className="mt-20 bg-indigo-50/50 border border-indigo-100 rounded-3xl py-8 px-3 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Questions about our terms?
              </h4>
              <p className="text-slate-500 text-sm">
                Feel free to reach out for clarification.
              </p>
            </div>
            <a 
              href="mailto:a.samuelsamson123@gmail.com" 
              className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-2xl font-bold shadow-sm border border-indigo-100 hover:bg-indigo-50 transition-colors"
            >
              <FiMail />
              Contact
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-medium transition-colors">
            <FiArrowLeft />
            Return to Platform
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function Section({ title, children } : { title:string, children:ReactNode}) {
  return (
    <div className="flex gap-6">
      <div>
        <h2 className="text-xl font-bold text-indigo-600 mb-4">{title}</h2>
        <div className="text-slate-500 leading-relaxed text-[15px]">
          {children}
        </div>
      </div>
    </div>
  )
}