import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }: AppProps) {
  const [isSSR,setIsSSR] = useState(true);


  useEffect(()=>{
    setIsSSR(false)
  },[]);
  if(isSSR)return null
  return (
  <GoogleOAuthProvider clientId={`117076050515-9s30lba6i0gsd60lcjul0s2avhp6m44k.apps.googleusercontent.com`}>
  <div className=''>
    <Navbar />
    <div className='flex  gap-6 xl:gap-20'>
    <div className='overflow-hidden xl:hover:overflow-auto h-[92vh]'>
     <Sidebar />
    </div>
    <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh]'>
    <Component {...pageProps} />
    </div>
    </div>
  </div>
  </GoogleOAuthProvider>
  )
}
