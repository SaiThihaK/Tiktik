import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { Video } from '../types'
import { GoVerified } from 'react-icons/go';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import {HiVolumeOff,HiVolumeUp} from "react-icons/hi"

interface Iprop{
    post:Video
}

const VideoCard:NextPage<Iprop> = ({post}) => {
const [isHover,setIsHover] = useState(false);
const [isPlaying,setIsPlaying] = useState(false);
const [isMuted,setIsMuted] = useState(false);
const videoRef = useRef<HTMLVideoElement>(null);

const onVideoPress = ()=>{
if(isPlaying){
  videoRef.current?.pause();
  setIsPlaying(false);

}
else{
  videoRef.current?.play();
  setIsPlaying(true);

}
}

  return (
    <div className='flex flex-col border-b-2 border-gray-200 pb-6'>
     <div className='flex gap-2 p-2 cursor-pointer font-semibold rounded'>
        <div className='md:w-16 md:h-16 w-10 h-10 rounded-full'>
        <Link href="/">
            <Image src={post.postedBy.image} width={62} alt="profile" height={62} layout="responsive" className='rounded-full' />
        </Link>
        </div>
        <div className='flex gap-2 items-center capitalize'>
        <p className='flex gap-2 items-center md:text-md md:text-bold md:text-lg'>
            {post?.postedBy?.userName}
            {''}
            <GoVerified className='text-blue-500' />
        </p>
       <p className='text-gray-500 text-xs items-center hidden md:block'>{post?.postedBy?.userName}</p>
        </div>
     </div>
     <div className='ml-20 relative flex gap-20'>
      <div className='rounded-3xl'
      onMouseEnter={()=>setIsHover(true)}
      onMouseLeave={()=>setIsHover(false)}
      >
      <Link href="/">
        <video
        ref={videoRef}
        src={post?.video?.asset?.url}
        className='lg:w-[600px] h-[300px] md:h-[400px] lg:h-[528px] w-[200px] rounded-2xl cursor-pointer bg-gray-100'
        ></video>
      </Link>
      {
        isHover && 
        <div className='absolute right-0 left-0 bottom-6 md:bottom-14 flex gap-10'>
        {isPlaying ? (
                <button onClick={onVideoPress}>
                  <BsFillPauseFill className='text-black text-2xl lg:text-4xl' />
                </button>
              ) : (
                <button onClick={onVideoPress}>
                  <BsFillPlayFill className='text-black text-2xl lg:text-4xl' />
                </button>
              )}
              {isMuted ? (
                <button onClick={() => setIsMuted(false)}>
                  <HiVolumeOff className='text-black text-2xl lg:text-4xl' />
                </button>
              ) : (
                <button onClick={() => setIsMuted(true)}>
                  <HiVolumeUp className='text-black text-2xl lg:text-4xl' />
                </button>
              )}
            </div>
      }
      </div>
     </div>
    </div>
  )
}

export default VideoCard