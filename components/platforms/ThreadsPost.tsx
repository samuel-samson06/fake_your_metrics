import React from 'react'
import { PostState, formatNumber, formatDate } from '../homepage/Main'
import { FaRegHeart, FaRegComment, FaRetweet } from 'react-icons/fa'
import { FiSend, FiMoreHorizontal } from 'react-icons/fi'
import { HiBadgeCheck } from 'react-icons/hi'

interface Props {
  state: PostState
}

const ThreadsPost: React.FC<Props> = ({ state }) => {
  const avatar = state.profileImage || `https://ui-avatars.com/api/?name=${state.name}&background=f3f4f6&color=111827&bold=true`

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-lg shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-gray-100 animate-in fade-in zoom-in duration-300">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-gray-100">
            <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-bold text-gray-900 leading-tight">
                {state.username || state.name.toLowerCase().replace(/\s+/g, '')}
              </span>
              {state.isVerified && <HiBadgeCheck className="text-[#0095f6] w-[18px] h-[18px] shrink-0" />}
              <span className="text-gray-400 text-xs ml-1">{formatDate(state.date, 'threads')}</span>
            </div>
            <span className="text-gray-400 text-[13px]">{state.name}</span>
          </div>
        </div>
        <button className="text-gray-900 p-2  rounded-full transition-colors">
          <FiMoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="text-[15px] sm:text-[16px] text-gray-900 leading-relaxed mb-4 whitespace-pre-wrap pl-0">
        {state.content}
      </div>

      {/* Action Bar */}
      <div className="flex items-center gap-6 text-gray-900 mt-2">
        <div className="flex items-center gap-1.5 group cursor-pointer">
          <FaRegHeart className="w-[20px] h-[20px] hover:scale-110 transition-transform" />
          <span className="text-[14px] font-medium">{formatNumber(state.likes)}</span>
        </div>
        <div className="flex items-center gap-1.5 group cursor-pointer">
          <FaRegComment className="w-[20px] h-[20px] hover:scale-110 transition-transform" />
          <span className="text-[14px] font-medium">{formatNumber(state.replies)}</span>
        </div>
        <div className="flex items-center gap-1.5 group cursor-pointer">
          <FaRetweet className="w-[20px] h-[20px] hover:scale-110 transition-transform" />
          <span className="text-[14px] font-medium">{formatNumber(state.retweets)}</span>
        </div>
        <FiSend className="w-[20px] h-[20px] cursor-pointer hover:scale-110 transition-transform" />
      </div>
    </div>
  )
}

export default ThreadsPost
