import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header"
import Link from "next/link";
import React, { ReactNode } from "react"

import { FiZap, FiLayout, FiShield} from "react-icons/fi";
export default function Page() {
  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
          How FakeYourMetrics Works
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Design stunning social media mockups and metric visualizations in seconds. Our tool helps you build posts without the complexity.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<FiZap className="w-5 h-5 text-white" />}
            title="Realistic Rendering"
            desc="We use exact CSS properties from major platforms to ensure your mockups look identical to the real thing."
          />
          <FeatureCard 
            icon={<FiLayout className="w-5 h-5 text-white" />}
            title="Platform-Based UI"
            desc="Each platform has its own unique layout. Switch between Twitter, Threads, Bluesky, and Substack with accurate styling."
          />
           <FeatureCard 
            icon={<FiShield className="w-5 h-5 text-white" />}
            title="Privacy First"
            desc="Your data never touches our servers. Everything happens locally in your browser for total security."
          />
        </div>
      </section>

      {/* Steps Section */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Just Three Easy Steps</h2>
            <p className="text-slate-500">The process is fluid, tactile, and designed for speed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <Step number="1" title="Select Platform" desc="Choose from our curated list of supported social architectures." />
            <Step number="2" title="Input Content" desc="Customize text, metrics, and images in real-time with instant feedback." />
            <Step number="3" title="Download" desc="Export high-resolution PNGs ready for presentations or social sharing." />
          </div>
        </div>
      </section>

      {/* Footer / CTA Section */}
      <section className="py-20 px-6 text-center">
         <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to start building?</h2>
            <Link href="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-indigo-200">
              Go to Generator
            </Link >
            <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest font-medium animate-bounce">
                Disclaimer: For entertainment and creative use only.
            </p>
         </div>
      </section>
      <Footer/>
    </div>
  )
}

function FeatureCard({ icon, title, desc }:{icon:ReactNode, title:string, desc:string}) {
  return (
    <div className="bg-indigo-50/50 p-8 rounded-3xl border border-transparent hover:border-indigo-100 transition-colors">
      <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-md">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function Step({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="relative">
      <div className="w-14 h-14 bg-white border-2 border-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
        <span className="text-indigo-600 font-bold text-lg">{number}</span>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed px-4">{desc}</p>
    </div>
  )
}