import { GoogleLogin } from '@react-oauth/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { createOrGetUser } from '../utils'
import logo from "../utils/tiktik-logo.png"

const Navbar = () => {
  const user = false;
  return ( 
    <div className='w-full flex justify-between border-b-2 border-gray-200 py-2 px-4'>
        <Link href="/">
        <div className='w-[100px]  md:w-[130px] h-[38px] md:h-[38px]'>
            <Image src={logo} alt="TikTik" layout='responsive' />
        </div>
        </Link>
        <div>Search</div>
        {
          user ? 
          <div>
            loggedin
          </div> 
          :<div>
            <GoogleLogin 
            onSuccess={(response=>{createOrGetUser(response)})} 
            onError={()=>{console.log('Error')}}
            />
          </div>
        }
    </div>
  )
}

export default Navbar