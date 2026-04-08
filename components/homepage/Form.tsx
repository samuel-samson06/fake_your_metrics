import React, { useCallback, useMemo, useState } from 'react'
import { toPng } from 'html-to-image'
import { FiDownload, FiCheckCircle, FiUpload, FiAlertCircle } from 'react-icons/fi'
import { PostState } from './Main'
import avatar from "@/public/avatar.jpg"

interface FormProps {
  state: PostState
  updateState: (updates: Partial<PostState>) => void
}

interface ValidationErrors {
  name?: string
  username?: string
  content?: string
  date?: string
  time?: string
  profileImage?: string
}

const waitForImages = (node: HTMLElement): Promise<void[]> => {
  const images = Array.from(node.querySelectorAll('img'))
  return Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalHeight !== 0) return Promise.resolve()
      return new Promise<void>((resolve, reject) => {
        img.onload = () => resolve()
        img.onerror = () => reject(new Error(`Failed to load image: ${img.src}`))
      })
    })
  )
}

function Form({ state, updateState }: FormProps) {
  const [isTouched, setIsTouched] = useState(false)

  const errors = useMemo<ValidationErrors>(() => {
    if (!isTouched) return {}
    return {
      ...(!state.name?.trim()     && { name: 'Required' }),
      ...(!state.username?.trim() && { username: 'Required' }),
      ...(!state.content?.trim()  && { content: 'Required' }),
      ...(!state.date             && { date: 'Required' }),
      ...(!state.time             && { time: 'Required' }),
      ...(!state.profileImage     && { profileImage: 'Required' }),
    }
  }, [isTouched, state])

  const isValid = useMemo(() => {
    const { name, username, content, date, time, profileImage } = state
    return !!(name?.trim() && username?.trim() && content?.trim() && date && time && profileImage)
  }, [state])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      updateState({ profileImage: event.target?.result as string })
    }
    reader.readAsDataURL(file)
  }

  const handleDownload = useCallback(async () => {
    setIsTouched(true)
    if (!isValid) return

    const node = document.getElementById('preview-canvas')
    if (!node) return

    try {
      await document.fonts.ready
      await waitForImages(node)

      const dataUrl = await toPng(node, { cacheBust: true, pixelRatio: 3 })

      const link = document.createElement('a')
      link.download = `${state.platform}-post.png`
      link.href = dataUrl
      link.click()
    } catch (error) {
      console.error('Download error:', error)
      alert('Something went wrong during download. Please try again.')
    }
  }, [isValid, state.platform])

  const inputBase = 'px-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all'
  const errorBorder = 'border-red-200 ring-1 ring-red-50'
  const normalBorder = 'border-gray-100'

  return (
    <div className="w-full h-full bg-white/40 backdrop-blur-sm border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col gap-5">

      {/* Name & Username */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <FieldHeader label="Name" error={errors.name} />
          <input
            type="text"
            value={state.name}
            onChange={(e) => updateState({ name: e.target.value })}
            onBlur={() => setIsTouched(true)}
            className={`${inputBase} ${errors.name ? errorBorder : normalBorder}`}
            placeholder="Digital Architect"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <FieldHeader label="Username" error={errors.username} />
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">@</span>
            <input
              type="text"
              value={state.username}
              onChange={(e) => updateState({ username: e.target.value.replace(/^@/, '') })}
              onBlur={() => setIsTouched(true)}
              className={`w-full pl-8 pr-4 py-2.5 bg-white border ${errors.username ? errorBorder : normalBorder} rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all`}
              placeholder="username"
            />
          </div>
        </label>
      </div>

      {/* Avatar, Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <label className="flex flex-col gap-1.5">
          <FieldHeader label="Avatar" error={errors.profileImage} />
          <div className="relative grow min-h-[42px]">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer z-10"
            />
            <div className={`h-full flex items-center justify-center gap-2 border-2 border-dashed ${errors.profileImage ? 'border-red-200 bg-red-50/50' : 'border-gray-100 bg-white'} rounded-xl transition-colors hover:border-accent/40`}>
              {state.profileImage ? (
                <img
                  src={state.profileImage}
                  alt="Avatar preview"
                  className="w-8 h-8 rounded-full object-cover"
                  onError={(e) => { e.currentTarget.src = avatar.src }}
                />
              ) : (
                <FiUpload className="text-gray-400" />
              )}
              <span className="text-xs font-semibold text-gray-500">Upload</span>
            </div>
          </div>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date</span>
          <input
            type="date"
            value={state.date}
            onChange={(e) => updateState({ date: e.target.value })}
            className={`${inputBase} ${normalBorder}`}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Time</span>
          <input
            type="time"
            value={state.time}
            onChange={(e) => updateState({ time: e.target.value })}
            className={`${inputBase} ${normalBorder}`}
          />
        </label>
      </div>

      {/* Substack Title */}
      {state.platform === 'substack' && (
        <label className="flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-300">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Article Title</span>
          <input
            type="text"
            value={state.title}
            onChange={(e) => updateState({ title: e.target.value })}
            className={`${inputBase} ${normalBorder}`}
            placeholder="The Future of Interface Design"
          />
        </label>
      )}

      {/* Post Content */}
      <label className="flex flex-col gap-1.5">
        <FieldHeader label="Post Content" error={errors.content} />
        <textarea
          value={state.content}
          onChange={(e) => updateState({ content: e.target.value })}
          onBlur={() => setIsTouched(true)}
          rows={3}
          className={`px-4 py-3 bg-white border ${errors.content ? errorBorder : normalBorder} rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all resize-none`}
          placeholder="Write your content..."
        />
      </label>

      {/* Verified Badge Toggle */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border border-gray-100 rounded-xl">
        <div className="flex items-center gap-2">
          <div className="bg-[#1D9BF0] rounded-lg p-1 text-white shadow-sm">
            <FiCheckCircle className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold text-gray-700">Verified Badge</span>
        </div>
        <button
          onClick={() => updateState({ isVerified: !state.isVerified })}
          className={`w-12 h-6 rounded-full transition-all flex items-center p-1 cursor-pointer ${state.isVerified ? 'bg-indigo-600' : 'bg-gray-200'}`}
        >
          <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${state.isVerified ? 'translate-x-6' : 'translate-x-0'}`} />
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {(['likes', 'retweets', 'replies', 'views'] as const).map((metric) => (
          <label key={metric} className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              {metric === 'retweets' ? 'Reposts' : metric.charAt(0).toUpperCase() + metric.slice(1)}
            </span>
            <input
              type="number"
              value={state[metric]}
              onChange={(e) => updateState({ [metric]: parseInt(e.target.value) || 0 })}
              className={`px-3 py-2 bg-white border ${normalBorder} rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all`}
            />
          </label>
        ))}
      </div>

      {/* Download */}
      <button
        onClick={handleDownload}
        disabled={isTouched && !isValid}
        className={`w-full text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 transition-all mt-2 shadow-lg shadow-gray-200 active:scale-[0.98] cursor-pointer ${isTouched && !isValid ? 'bg-gray-300 cursor-not-allowed' : 'bg-gray-900 hover:bg-black'}`}
      >
        <FiDownload className="w-5 h-5" />
        {isTouched && !isValid ? 'Please fill required fields' : 'Download High-Res Image'}
      </button>
    </div>
  )
}

// Small helper to avoid repeating the label+error pattern
function FieldHeader({ label, error }: { label: string; error?: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</span>
      {error && (
        <span className="text-[10px] text-red-500 font-bold flex items-center gap-1">
          <FiAlertCircle /> Required
        </span>
      )}
    </div>
  )
}

export default Form