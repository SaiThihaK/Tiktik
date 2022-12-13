import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { topics } from '../utils/constants'

const Discover = () => {
const router = useRouter();
const {topic} = router.query;
const normalTopic = "xl:border-2 rouned xl:rounded-full px-3 py-2 cursor-pointer flex justify-center items-center text-black border-gray-400 hover:bg-primary gap-2 ";
const activeTopic ="xl:border-2 rounded xl:rounded-full px-3 py-2 cursor-pointer flex justify-center items-center text-[#F51997] border-[#F51997] hover:bg-primary gap-2 ";
  return (
    <div className='xl:border-b-2 xl:border-gray-200'>
    <p className='text-semibold text-gray-500  mt-4 hidden xl:block '>
        Popular topics
    </p>
    <div className='flex gap-3 flex-wrap'>
    {
        topics.map((item,index)=>(
            <Link href={`/?topic=${item.name}`} key={index}>
                <div className={topic=== item.name ? activeTopic:normalTopic}>
                    <span className='font-semibold text-2xl xl:text-md'>{item.icon}</span>
                    <span className='font-medium text-xl hidden xl:block capitalize'>{item.name}</span>
                </div>
            </Link>
        ))
    }
    </div>
    </div>
  )
}

export default Discover