import React from 'react'
import { PostState, formatNumber, formatDate } from '../homepage/Main'
import { FaRegComment, FaRetweet, FaRegHeart } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'

interface Props {
  state: PostState
}

const BlueskyPost: React.FC<Props> = ({ state }) => {
  const avatar = state.profileImage || `https://ui-avatars.com/api/?name=${state.name}&background=f3f4f6&color=111827&bold=true`
  const handle = state.username.includes('.') ? state.username : `${state.username}.bsky.social`

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 w-full max-w-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 animate-in fade-in zoom-in duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
            <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-[16px] text-gray-900 leading-tight">{state.name}</span>
              <span className="text-gray-500 text-[14px]">@{handle}</span>
              <span className="text-gray-400 text-[14px]">{formatDate(state.date, 'bluesky')}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 p-2  rounded-full transition-colors">
          <FiMoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="text-[17px] text-gray-900 leading-relaxed mb-4 whitespace-pre-wrap pl-0">
        {state.content}
      </div>

      {/* Engagement */}
      <div className="flex items-center gap-8 text-gray-500 text-sm border-t border-gray-100 pt-4 px-1">
        <div className="flex items-center gap-2 group cursor-pointer ">
            <FaRegComment className="w-5 h-5" />
          <span className="font-semibold">{formatNumber(state.replies)}</span>
        </div>
        
        <div className="flex items-center gap-2 group cursor-pointer ">
          <FaRetweet className="w-5 h-5" />
          <span className="font-semibold">{formatNumber(state.retweets)}</span>
        </div>

        <div className="flex items-center gap-2 group cursor-pointer ">
          <FaRegHeart className="w-5 h-5" />
          <span className="font-semibold">{formatNumber(state.likes)}</span>
        </div>
      </div>
    </div>
  )
}

export default BlueskyPost
