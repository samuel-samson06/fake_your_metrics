"use client"

import React, { useState } from 'react'
import Form from './Form'
import Preview from './Preview';
import { motion } from 'framer-motion';
import { HiBolt, HiPhoto, HiCommandLine, HiShieldCheck } from 'react-icons/hi2';

export type Platform = 'twitter' | 'threads' | 'bluesky' | 'substack'

export interface PostState {
  platform: Platform
  name: string
  username: string
  content: string
  isVerified: boolean
  likes: number
  retweets: number
  replies: number
  views: number
  date: string
  time: string
  profileImage: string | null
  title: string
  includeWatermark: boolean
}

export const formatNumber = (num: number): string => {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
  return num.toString()
}

export const formatDate = (dateStr: string, platform: Platform): string => {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (platform === 'substack') {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  return date.toLocaleDateString('en-GB') // DD/MM/YYYY
}

function Main() {
  const [state, setState] = useState<PostState>({
    platform: 'twitter',
    name: 'Name',
    username: 'username',
    content: "Perfection is not when there is nothing more to add, but when there is nothing left to take away. Design is the silent ambassador of your brand. 📐✨",
    isVerified: true,
    likes: 1240,
    retweets: 482,
    replies: 12,
    time: '10:00',
    date: '2026-01-01',
    views: 1200000,
    profileImage: null,
    title: 'The Future of Interface Design',
    includeWatermark: true
  })

  const updateState = (updates: Partial<PostState>) => {
    setState(prev => ({ ...prev, ...updates }))
  }

  const platforms: { id: Platform; label: string; color: string; icon: React.ReactNode }[] = [
    { 
      id: 'twitter', 
      label: 'Twitter', 
      color: 'bg-twitter',
      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    { 
      id: 'threads', 
      label: 'Threads', 
      color: 'bg-threads',
      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12.786 11.082c-.443-.1-.908-.146-1.391-.146-2.585 0-4.382 1.621-4.382 3.829 0 2.052 1.455 3.385 3.518 3.385 1.135 0 2.14-.407 2.871-1.118l.192-.192c.381.762 1.121 1.31 2.386 1.31 1.776 0 3.376-1.189 3.376-3.957v-2.091c0-4.321-2.909-6.382-7.351-6.382C6.98 5.72 4.114 8.761 4.114 12.87c0 4.542 3.25 7.633 8.351 7.633.918 0 1.835-.112 2.766-.341l-.117-.991c-.88.221-1.748.332-2.649.332-4.524 0-7.351-2.684-7.351-6.633 0-3.666 2.502-6.382 6.432-6.382 3.965 0 6.351 1.75 6.351 5.382v2.091c0 2.091-.971 2.957-2.376 2.957-1.164 0-1.815-.559-1.991-1.31-.762.771-1.748 1.31-3.136 1.31-1.636 0-2.518-1.026-2.518-2.385 0-1.68 1.391-2.829 3.382-2.829.471 0 .894.045 1.31.118v-.091c0-1.408-.66-2.181-2.136-2.181-1.091 0-2.092.455-2.092 1.591zm-.99 1.127v2.363l-.118.118c-.473.473-.993.71-1.636.71-1.255 0-2.31-.818-2.31-2.385 0-1.5 1.091-2.829 2.136-2.829.17 0 .341.011.511.045l1.417.218v-.24z"/></svg>
    },
    { 
      id: 'bluesky', 
      label: 'Bluesky', 
      color: 'bg-bluesky',
      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 10.8c-1.32-2.4-5.28-7.2-9-7.2C1.32 3.6 0 4.92 0 6.6c0 1.08.6 4.32 3 6.6 2.4 2.28 4.8 2.4 8.4-1.2 3.6 3.6 6 3.48 8.4 1.2 2.4-2.28 3-5.52 3-6.6 0-1.68-1.32-3-3-3-3.72 0-7.68 4.8-9 7.2zM12 20.4c-1.32-1.2-6-1.2-6-1.2 0 1.08 3 4.8 6 4.8 3 0 6-3.72 6-4.8 0 0-4.68 0-6 1.2z"/></svg>
    },
    { 
      id: 'substack', 
      label: 'Substack', 
      color: 'bg-substack',
      icon: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M22.539 8.242H1.46V5.414h21.079v2.828zm0 4.381H1.46v9.963l10.539-6.03 10.54 6.03V12.623zm0-8.761H1.46V1.034h21.079v2.828z"/></svg>
    },
  ]

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 py-12 w-full flex flex-col items-center">
      <div className="text-center max-w-4xl mb-12 flex flex-col gap-2 lg:pt-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold lg:font-semibold tracking-tight text-gray-900 mb-4 sm:text-6xl">
          Create Realistic posts for fun
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Generate high quality engagement metrics for Twitter, Threads and more in seconds.
        </p>
      </div>

      {/* Platform Selection Tabs */}
      <div className="bg-gray-100/50 p-1.5 rounded-xl grid grid-cols-4 gap-1 mb-12 shadow-sm border border-gray-200/50">
        {platforms.map((p) => (
          <button
            key={p.id}
            onClick={() => updateState({ platform: p.id })}
            className={`px-8 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
              state.platform === p.id
                ? `${p.color} text-white shadow-md scale-[1.02]`
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/50'
            }`}
          >
            {p.icon}
            {p.label}
          </button>
        ))}
      </div>

      {/* Editor Grid */}
      <div id="editor-section" className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full items-start scroll-mt-24">
        <Preview state={state} />
        <Form state={state} updateState={updateState} />
      </div>
      
      {/* Bottom info section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 w-full max-w-6xl">
        {[
          {
            title: 'Instant Export',
            description: 'Download high-quality PNGs in seconds, ready to share on any platform.',
            icon: <HiBolt className="w-6 h-6" />,
            color: 'text-blue-500',
            bgColor: 'bg-blue-50',
            borderColor: 'border-blue-100'
          },
          {
            title: 'High-Quality Images',
            description: 'Pixel-perfect resolution ensuring your posts look authentic everywhere.',
            icon: <HiPhoto className="w-6 h-6" />,
            color: 'text-purple-500',
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-100'
          },
          {
            title: 'Platform-Accurate UI',
            description: 'Meticulously crafted templates matching the latest social media designs.',
            icon: <HiCommandLine className="w-6 h-6" />,
            color: 'text-emerald-500',
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-100'
          },
          {
            title: 'Privacy First',
            description: 'Processing happens in your browser. We never store or see your data.',
            icon: <HiShieldCheck className="w-6 h-6" />,
            color: 'text-orange-500',
            bgColor: 'bg-orange-50',
            borderColor: 'border-orange-100'
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl ${feature.bgColor} ${feature.color} flex items-center justify-center mb-4 border ${feature.borderColor} group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  )
}

export default Main
