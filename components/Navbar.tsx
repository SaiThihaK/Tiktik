import { GoogleLogin } from '@react-oauth/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useAuthStore from '../store/authStore'
import { createOrGetUser } from '../utils'
import logo from "../utils/tiktik-logo.png"
import {IoMdAdd}from "react-icons/io"
import {AiOutlineLogout}from "react-icons/ai"

const Navbar = () => {
 
  const {userProfile,addUser,removeUser} = useAuthStore();
 
  return ( 
    <div className='w-full flex justify-between border-b-2 border-gray-200 py-2 px-4'>
        <Link href="/">
        <div className='w-[100px]  md:w-[130px] h-[38px] md:h-[38px]'>
            <Image src={logo} alt="TikTik" layout='responsive' />
        </div>
        </Link>
        <div>Search</div>
        {
          userProfile ? 
            <div className='flex gap-2'>
             <Link href="/upload">
              <button type='button' className='flex gap-2 p-2 rounded border-2 items-center font-semibold '>
              <IoMdAdd className='text-xl' />{' '}
             <span className='hidden md:block'>Upload </span>
             </button>
             </Link>
             {
              userProfile.image && <div className='hidden md:block md:rounded'>
              <Link href="/">
                  <Image src={userProfile.image} width={40} alt="profile" height={40} className='rounded-full cursor-pointer' />
              </Link>
              </div>
             }
             <button type='button' onClick={()=>{removeUser();}}>
              <AiOutlineLogout size={21} className="text-red-600" />
             </button>
            </div>
          :<div>
            <GoogleLogin 
            onSuccess={(response=>{createOrGetUser(response,addUser)})} 
            onError={()=>{console.log('Error')}}
            />
          </div>
        }
    </div>
  )
}

export default Navbar