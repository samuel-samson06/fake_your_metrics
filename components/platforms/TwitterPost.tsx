import React from 'react'
import { PostState, formatNumber, formatDate } from '../homepage/Main'
import { FaRegComment, FaRetweet, FaRegHeart, FaRegBookmark } from 'react-icons/fa'
import { FiShare, FiMoreHorizontal } from 'react-icons/fi'
import { HiBadgeCheck } from 'react-icons/hi'
import Image from 'next/image'

interface Props {
  state: PostState
}

const TwitterPost: React.FC<Props> = ({ state }) => {
  const avatar = state.profileImage || `https://ui-avatars.com/api/?name=${state.name}&background=f3f4f6&color=111827&bold=true`

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 w-full max-w-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 animate-in fade-in zoom-in duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-1">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-100">
            <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-bold text-[15px] text-gray-900 leading-tight truncate max-w-[200px]">{state.name}</span>
              {state.isVerified && <HiBadgeCheck className="text-[#1D9BF0] w-5 h-5 shrink-0" />}
            </div>
            <div className="flex items-center gap-1 text-[15px] text-gray-500">
              <span className="truncate max-w-[120px]">@{state.username}</span>
              <span>·</span>
              {/* <span>{formatDate(state.date, 'twitter')}</span> */}
            </div>
          </div>
        </div>
        <button className="text-gray-400 p-2  rounded-full transition-colors">
          <FiMoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="text-[15px] sm:text-[17px] text-gray-900 leading-relaxed mb-4 whitespace-pre-wrap pl-0">
        {state.content}
      </div>

      {/* Metadata Line (Full Date & Views) */}
      <div className="text-[14px] text-gray-500 py-3  flex items-center gap-1 flex-wrap">
        <span>{state.time}</span>
        <span>·</span>
        <span>{formatDate(state.date, 'twitter')}</span>
        <span>·</span>
        <span className="font-bold text-gray-900">{formatNumber(state.views)}</span>
        <span>Views</span>
      </div>

      {/* Action Bar */}
      <div className="flex items-center justify-between text-gray-500 border-t border-gray-100 pt-1">
        <div className="flex items-center group cursor-pointer  p-2">
          <div className="p-1 rounded-full ">
            <Image src={"/twitter_chat_bubble.png"} alt="Twitter chat bubble" width={25} height={25}/>
          </div>
          <span className="text-[13px]">{formatNumber(state.replies)}</span>
        </div>
        
        <div className="flex items-center gap-1 group cursor-pointer  p-2">
          <div className="p-2 rounded-full ">
            <FaRetweet className="w-[20px] h-[20px]" />
          </div>
          <span className="text-[13px]">{formatNumber(state.retweets)}</span>
        </div>

        <div className="flex items-center gap-1 group cursor-pointer  p-2">
          <div className="p-2 rounded-full ">
            <FaRegHeart className="w-[18px] h-[18px]" />
          </div>
          <span className="text-[13px]">{formatNumber(state.likes)}</span>
        </div>

        <div className="flex items-center gap-1 group cursor-pointer  p-2">
          <div className="p-2 rounded-full ">
            <FaRegBookmark className="w-[18px] h-[18px]" />
          </div>
        </div>

        <div className="flex items-center gap-1 group cursor-pointer  p-2">
          <div className="p-2 rounded-full ">
            <FiShare className="w-[18px] h-[18px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwitterPost
