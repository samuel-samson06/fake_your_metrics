import React, { useRef } from 'react'
import { PostState, Platform } from './Main'
import TwitterPost from '../platforms/TwitterPost'
import ThreadsPost from '../platforms/ThreadsPost'
import BlueskyPost from '../platforms/BlueskyPost'
import SubstackPost from '../platforms/SubstackPost'

interface PreviewProps {
  state: PostState
}

const platformColors: Record<Platform, string> = {
  twitter: '#000000',
  threads: '#000000',
  bluesky: '#000000',
  substack: '#000000'
}

const platformComponents: Record<Platform, React.FC<{ state: PostState }>> = {
  twitter: TwitterPost,
  threads: ThreadsPost,
  bluesky: BlueskyPost,
  substack: SubstackPost
}

function Preview({ state }: PreviewProps) {
  const bgColor = platformColors[state.platform]
  const PostComponent = platformComponents[state.platform]
  const exportRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full relative ">
      {/* Background Canvas */}
      <div 
        ref={exportRef}
        id="preview-canvas"
        className="w-full rounded-2xl flex items-center justify-center px-2 md:px-4 py-5 md:py-8 transition-all duration-500 shadow-lg relative overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        {/* Subtle decorative elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 rounded-full bg-white blur-3xl transition-all" />
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 rounded-full bg-white blur-3xl transition-all" />
        </div>

        {/* Dynamic Post Component */}
        <PostComponent state={state} />

        {/* Watermark */}
        {state.includeWatermark && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg pointer-events-none select-none transition-all duration-300">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest opacity-70">
              Generated with PostMetrics
            </span>
          </div>
        )}
      </div>
      
      {/* Visual hints */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="bg-black text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest shadow-xl">
          Live Editor Canvas
        </span>
      </div>
    </div>
  )
}

export default Preview
