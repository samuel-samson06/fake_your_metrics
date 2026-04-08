import React, { useCallback, useState } from 'react'
import { PostState } from './Main'
import { toPng } from 'html-to-image'
import { FiDownload, FiCheckCircle, FiUpload, FiAlertCircle } from 'react-icons/fi'

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

function Form({ state, updateState }: FormProps) {
  const [isTouched, setIsTouched] = useState(false)

  const getErrors = useCallback(() => {
    const newErrors: ValidationErrors = {}
    if (!state.name?.trim()) newErrors.name = 'Required'
    if (!state.username?.trim()) newErrors.username = 'Required'
    if (!state.content?.trim()) newErrors.content = 'Required'
    if (!state.date) newErrors.date = 'Required'
    if (!state.time) newErrors.time = 'Required'
    if (!state.profileImage) newErrors.profileImage = 'Required'
    return newErrors
  }, [state])

  const errors = isTouched ? getErrors() : {}
  const isValid = Object.keys(getErrors()).length === 0

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (state.profileImage) URL.revokeObjectURL(state.profileImage)
      const url = URL.createObjectURL(file)
      updateState({ profileImage: url })
    }
  }

  const handleDownload = useCallback(() => {
    setIsTouched(true)
    const currentErrors = getErrors()
    if (Object.keys(currentErrors).length > 0) return

    const node = document.getElementById('preview-canvas')
    if (!node) return

    toPng(node, { 
      cacheBust: true,
      pixelRatio: 3,
    })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = `fake-${state.platform}-post.png`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.error('oops, something went wrong!', err)
      })
  }, [state.platform, getErrors])

  // const isValid = Object.keys(getErrors()).length === 0

  return (
    <div className="w-full h-full bg-white/40 backdrop-blur-sm border border-gray-100 p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col gap-5">
      {/* Name & Username */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Name</span>
            {errors.name && <span className="text-[10px] text-red-500 font-bold flex items-center gap-1"><FiAlertCircle /> Required</span>}
          </div>
          <input
            type="text"
            value={state.name}
            onChange={(e) => updateState({ name: e.target.value })}
            onBlur={() => setIsTouched(true)}
            className={`px-4 py-2.5 bg-white border ${errors.name ? 'border-red-200 ring-1 ring-red-50' : 'border-gray-100'} rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all`}
            placeholder="Digital Architect"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Username</span>
            {errors.username && <span className="text-[10px] text-red-500 font-bold flex items-center gap-1"><FiAlertCircle /> Required</span>}
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">@</span>
            <input
              type="text"
              value={state.username}
              onChange={(e) => updateState({ username: e.target.value.replace(/^@/, '') })}
              onBlur={() => setIsTouched(true)}
              className={`w-full pl-8 pr-4 py-2.5 bg-white border ${errors.username ? 'border-red-200 ring-1 ring-red-50' : 'border-gray-100'} rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all`}
              placeholder="username"
            />
          </div>
        </label>
      </div>

      {/* Profile Image & Date/Time */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-1">
          <label className="flex flex-col gap-1.5 h-full">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Avatar</span>
            </div>
            <div className="relative grow min-h-[42px]">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              <div className={`h-full flex items-center justify-center gap-2 border-2 border-dashed ${errors.profileImage ? 'border-red-200 bg-red-50/50' : 'border-gray-100 bg-white'} rounded-xl transition-colors hover:border-accent/40`}>
                {state.profileImage ? (
                  <img src={state.profileImage} alt="Preview" className="w-8 h-8 rounded-full object-cover" />
                ) : (
                  <FiUpload className="text-gray-400" />
                )}
                <span className="text-xs font-semibold text-gray-500">Upload</span>
              </div>
            </div>
          </label>
        </div>
        <label className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date</span>
          <input
            type="date"
            value={state.date}
            onChange={(e) => updateState({ date: e.target.value })}
            className="px-4 py-2.5 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Time</span>
          <input
            type="time"
            value={state.time}
            onChange={(e) => updateState({ time: e.target.value })}
            className="px-4 py-2.5 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all"
          />
        </label>
      </div>

      {state.platform === 'substack' && (
        <label className="flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-300">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Article Title</span>
          <input
            type="text"
            value={state.title}
            onChange={(e) => updateState({ title: e.target.value })}
            className="px-4 py-2.5 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all"
            placeholder="The Future of Interface Design"
          />
        </label>
      )}

      {/* Content */}
      <label className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Post Content</span>
          {errors.content && <span className="text-[10px] text-red-500 font-bold flex items-center gap-1"><FiAlertCircle /> Required</span>}
        </div>
        <textarea
            value={state.content}
            onChange={(e) => updateState({ content: e.target.value })}
            onBlur={() => setIsTouched(true)}
            rows={3}
            className={`px-4 py-3 bg-white border ${errors.content ? 'border-red-200 ring-1 ring-red-50' : 'border-gray-100'} rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all resize-none mb-0`}
            placeholder="Write your content..."
        />
      </label>

      {/* Verified Toggle */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border border-gray-100 rounded-xl">
        <div className="flex items-center gap-2">
          <div className="bg-[#1D9BF0] rounded-lg p-1 text-white shadow-sm">
            <FiCheckCircle className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold text-gray-700">Verified Badge</span>
        </div>
        <button 
          onClick={() => updateState({ isVerified: !state.isVerified })}
          className={`w-12 h-6 rounded-full transition-all flex items-center p-1 cursor-pointer ${
            state.isVerified ? 'bg-indigo-600' : 'bg-gray-200'
          }`}
        >
          <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${state.isVerified ? 'translate-x-6' : 'translate-x-0'}`} />
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Likes</span>
          <input
            type="number"
            value={state.likes}
            onChange={(e) => updateState({ likes: parseInt(e.target.value) || 0 })}
            className="px-3 py-2 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Reposts</span>
          <input
            type="number"
            value={state.retweets}
            onChange={(e) => updateState({ retweets: parseInt(e.target.value) || 0 })}
            className="px-3 py-2 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Replies</span>
          <input
            type="number"
            value={state.replies}
            onChange={(e) => updateState({ replies: parseInt(e.target.value) || 0 })}
            className="px-3 py-2 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Views</span>
          <input
            type="number"
            value={state.views}
            onChange={(e) => updateState({ views: parseInt(e.target.value) || 0 })}
            className="px-3 py-2 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-accent/20 outline-none text-sm font-medium transition-all"
          />
        </label>
      </div>

      {/* Download Button */}
      <button 
        onClick={handleDownload}
        disabled={isTouched && !isValid}
        className={`w-full ${!isTouched || isValid ? 'bg-gray-900 hover:bg-black' : 'bg-gray-300 cursor-not-allowed'} text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 transition-all mt-2 shadow-lg shadow-gray-200 active:scale-[0.98] cursor-pointer`}
      >
        <FiDownload className="w-5 h-5" />
        {isTouched && !isValid ? 'Please fill required fields' : 'Download High-Res Image'}
      </button>
    </div>
  )
}

export default Form