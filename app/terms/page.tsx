import React, { ReactNode } from 'react'
import Header from '@/components/homepage/Header'
import Footer from '@/components/homepage/Footer'
import { 
  FiShield, 
  FiBookOpen, 
  FiKey, 
  FiAlertTriangle, 
  FiXCircle, 
  FiMail, 
  FiArrowLeft 
} from 'react-icons/fi'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="bg-[#fbfcff] min-h-screen font-sans">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Terms of <span className="text-indigo-600">Service</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
            Please read these terms carefully before using our platform. By accessing FakeYourMetrics, you agree to be bound by these professional guidelines.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-100/40 p-8 md:p-16 border border-slate-100 relative overflow-hidden">
          
          <div className="space-y-16">
            {/* 1. Acceptance */}
            <Section 
              icon={<FiShield className="text-indigo-600" />} 
              title="1. Acceptance of Terms"
            >
              <p>
                By accessing and using the services provided by FakeYourMetrics (&apos;the Service&apos;), 
                you acknowledge that you have read, understood, and agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>
              <p className="mt-4">
                We reserve the right to update or modify these terms at any time. Your continued 
                use of the platform following any changes constitutes acceptance of those changes.
              </p>
            </Section>

            {/* 2. User Obligations */}
            <Section 
              icon={<FiBookOpen className="text-indigo-600" />} 
              title="2. User Obligations"
            >
              <p className="mb-4">
                Users are expected to utilize FakeYourMetrics for its intended purpose: the creation 
                of high-fidelity visual mockups for design presentations, case studies, and editorial layouts. 
                You agree not to:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-500">
                <li>Use generated mockups to commit fraud, impersonation, or financial deception.</li>
                <li>Attempt to reverse-engineer the underlying metric generation algorithms.</li>
                <li>Automate the scraping of the Service&apos;s visual assets for commercial resale.</li>
              </ul>
            </Section>

            {/* 3. Intellectual Property */}
            <Section 
              icon={<FiKey className="text-indigo-600" />} 
              title="3. Intellectual Property"
            >
              <p>
                <strong className="text-slate-900">The Tool:</strong> All code, algorithms, UI components, and brand identity elements remain the exclusive property of FakeYourMetrics.
              </p>
              <p className="mt-4">
                <strong className="text-slate-900">The Output:</strong> Users retain a non-exclusive license to use the visual mockups generated through our Service. However, the raw metadata templates remain our intellectual property.
              </p>
            </Section>

            {/* 4. Limitation of Liability */}
            <Section 
              icon={<FiAlertTriangle className="text-indigo-600" />} 
              title="4. Limitation of Liability"
            >
              <p>
                FakeYourMetrics provides a visualization tool &apos;as is.&apos; We are not responsible for how 
                these mockups are interpreted by third parties. The mockups are illustrative and 
                do not represent actual financial performance.
              </p>
            </Section>

            {/* 5. Termination */}
            <Section 
              icon={<FiXCircle className="text-indigo-600" />} 
              title="5. Termination of Use"
            >
              <p>
                We reserve the right to suspend or terminate your access to the Service at our sole 
                discretion, without notice, for conduct that we believe violates these Terms.
              </p>
            </Section>
          </div>

          {/* Contact Box */}
          <div className="mt-20 bg-indigo-50/50 border border-indigo-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-slate-900">Questions about our terms?</h4>
              <p className="text-slate-500 text-sm">Our legal team is here to help clarify our policies.</p>
            </div>
            <a 
              href="mailto:a.samuelsamson123@gmail.com" 
              className="flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-2xl font-bold shadow-sm border border-indigo-100 hover:bg-indigo-50 transition-colors"
            >
              <FiMail />
              a.samuelsamson123@gmail.com
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

function Section({ title, children } : {icon:ReactNode, title:string, children:ReactNode}) {
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