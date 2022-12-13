import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import {GoogleLogin} from "react-google-login"
import {AiOutlineMenu,AiFillHome} from "react-icons/ai"
import { MdOutlineCancel } from 'react-icons/md';
import Discover from './Discover';
import Footer from './Footer';
import SuggestedAccounts from './SuggestedAccounts';

const Sidebar = () => {
const [showSidebar,setShowSidebar] = useState(true);
const sidebarToggler = ()=>setShowSidebar((prev)=>!prev);

// CSS Long class
const normalLink = "flex justify-center items-center xl:justify-start p-3 gap-3 text-semibold text-[#F51997] cursor-pointer hover:bg-primary rounded";


// userlogin checked
const userProfile = false;


  return (
    <div>
<div className='block xl:hidden m-2 mt-3 ml-2 cursor-pointer'
onClick={sidebarToggler}
>
{showSidebar ? <MdOutlineCancel />:<AiOutlineMenu />}
</div>
{
    showSidebar && 
    <div className='xl:w-400 w-20 flex flex-col flex-start p-3 border-r-2 border-gray-100 xl:border-0'>
    <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
    {
        icons.map((i,index)=>(
            <Link href={i.path} key={index}>
            <div className={normalLink}>
            <p className='text-2xl flex'>
            {i.icon}
            <span className='hidden text-lg xl:block'>{i.text}</span>
            </p>
            </div>
            </Link>
        ))
    }
   
    </div>
    {/* user login checked */}
    {
     !userProfile && (
        <div className='hidden xl:block px-2 py-4 '>
            <p className='text-gray-400'>
                Log in to like and comment on videos
            </p>
            <div>
                <GoogleLogin
                clientId=''
                onSuccess={()=>{}}
                onFailure={()=>{}}
                cookiePolicy="single_host_origin"
                render={(renderProps)=>(
                    <button 
                    onClick={renderProps.onClick} disabled={renderProps.disabled}
                    className="text-lg bg-white text-[#F51997]
                    hidden xl:block
                    border-2 border-[#F51997] mt-3 px-6 py-2 w-full rounded hover:bg-[#F51997] hover:text-white
                    
                    "
                    >
                    Log in
                    </button>
                
                )}
                />
            </div>
           
        </div>
     )   
    }
     <Discover />
    <SuggestedAccounts />
    <Footer />
    </div>
}
</div>
  )
}

export default Sidebar


const icons = [
    {
        icon:<AiFillHome />,
        path:"/",
        text:"for home"
    }
]