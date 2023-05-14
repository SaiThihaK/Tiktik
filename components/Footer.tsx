import React from 'react'
import { footerList1, footerList2, footerList3 } from '../utils/constants'


const List = ({items,mt}:{items:string[],mt:boolean})=>{
  return(
    <div className={`flex flex-wrap gap-2 ${mt? "mt-2":""}`}>
    {
     items.map((item,index)=>(
     <div className='text-gray-400 text-sm hover:underline cursor-pointer' key={index}>
    {item}
     </div>))
    }
    </div>
  )
}



const Footer = () => {
  return (
    <div className='hidden xl:block mt-5'>
    <List items={footerList1} mt={false} />
    <List items={footerList2} mt />
    <List items={footerList3} mt />
    </div>
  )
}

export default Footer