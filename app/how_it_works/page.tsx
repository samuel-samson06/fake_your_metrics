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

  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
    How PostMetrics Works
  </h1>

  <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
    Create realistic social media mock posts in seconds. Customize content, metrics, and visuals to match how real platforms look — all in one place.
  </p>

</section>

      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
  <div className="grid md:grid-cols-3 gap-6">

    <FeatureCard 
      icon={<FiZap className="w-5 h-5 text-white" />}
      title="Realistic Rendering"
      desc="Carefully crafted layouts that closely match real platform designs, from spacing to typography."
    />

    <FeatureCard 
      icon={<FiLayout className="w-5 h-5 text-white" />}
      title="Platform-Specific UI"
      desc="Switch between Twitter, Threads, Bluesky, and Substack with layouts tailored to each platform."
    />

    <FeatureCard 
      icon={<FiShield className="w-5 h-5 text-white" />}
      title="Privacy First"
      desc="Everything runs locally in your browser. Your data isn’t stored or shared."
    />

  </div>
</section>

      {/* Steps Section */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 mb-4">Just Three Easy Steps</h2>
            <p className="text-slate-500">The process is fluid, tactile, and designed for speed.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <Step number="1" title="Select Platform" desc="Choose from our curated list of supported social architectures." />
            <Step number="2" title="Input Content" desc="Customize text, metrics, and images in real-time with instant feedback." />
            <Step number="3" title="Download" desc="Export high-resolution PNGs ready for presentations or social sharing." />
          </div>
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