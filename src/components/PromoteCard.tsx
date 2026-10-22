'use client'
import { useState } from 'react'
import VideoPlayer from './VideoPlayer'
import useWindowListener from '@/hooks/useWindowListener'

export default function PromoteCard() {
  const [isPlaying, setIsPlaying] = useState(true)

  useWindowListener('contextmenu', (e) => e.preventDefault())

  return (
    <div className="w-[80%] max-w-3xl my-6 flex flex-row rounded-2xl bg-orange-50 shadow-md p-4 gap-4">
      <div className="w-[40%] aspect-video overflow-hidden rounded-lg border border-gray-300">
        <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={isPlaying} />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <p className="text-lg">Book your venue today.</p>
        <button
          className="self-start rounded-full bg-sky-600 px-6 py-2 text-white hover:bg-sky-700"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  )
}
