import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../utils/tiktik-logo.png"

const Navbar = () => {
  return ( 
    <div className='w-full flex justify-between border-b-2 border-gray-200 py-2 px-4'>
        <Link href="/">
        <div className='w-[100px]  md:w-[130px] h-[38px] md:h-[38px]'>
            <Image src={logo} alt="TikTik" layout='responsive' />
        </div>
        </Link>
    </div>
  )
}

export default Navbar