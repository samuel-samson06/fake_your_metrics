import React from 'react'
import { PostState, formatNumber, formatDate } from '../homepage/Main'
import { FaRegHeart, FaRegComment } from 'react-icons/fa'
import { FiShare, FiPlus, FiCheckCircle } from 'react-icons/fi'

interface Props {
  state: PostState
}

const SubstackPost: React.FC<Props> = ({ state }) => {
  const avatar = state.profileImage || `https://ui-avatars.com/api/?name=${state.name}&background=f3f4f6&color=111827&bold=true`

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-10 w-full max-w-xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 animate-in fade-in zoom-in duration-300">
      {/* Publication Header */}
      <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-900 flex items-center justify-center text-white font-bold text-lg">
            {state.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900 text-[15px]">{state.name}&apos;s Substack</span>
            <span className="text-gray-500 text-xs">substack.com</span>
          </div>
        </div>
        <button className="bg-gray-900 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 ">
          <FiPlus className="w-4 h-4" />
          Subscribe
        </button>
      </div>

      {/* Author & Info */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <img src={avatar} alt="author" className="w-full h-full object-cover" />
        </div>
        <span className="text-sm font-medium text-gray-700">{state.name}</span>
        {state.isVerified && <FiCheckCircle className="text-blue-500 w-3.5 h-3.5" />}
        <span className="text-gray-400 text-sm">•</span>
        <span className="text-gray-400 text-sm">{formatDate(state.date, 'substack')}</span>
      </div>

      {/* Article Content */}
      <div className="flex flex-col gap-3 mb-8">
        {state.title && (
          <h2 className="text-2xl font-black text-gray-900 leading-tight tracking-tight">
            {state.title}
          </h2>
        )}
        <p className="text-[18px] text-gray-700 leading-relaxed font-serif">
          {state.content}
        </p>
      </div>

      {/* Footer / Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2 cursor-pointer ">
            <FaRegHeart className="w-5 h-5" />
            <span className="text-sm font-medium">{formatNumber(state.likes)}</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer ">
            <FaRegComment className="w-5 h-5" />
            <span className="text-sm font-medium">{formatNumber(state.replies)}</span>
          </div>
        </div>
        <div className="text-gray-400 cursor-pointer ">
          <FiShare className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}

export default SubstackPost
