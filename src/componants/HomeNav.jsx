import React, { Children, useState } from 'react'
import {TbGridDots} from 'react-icons/tb'
import { useContext } from 'react'
import { useResultContext } from '../context/ResultContextProvider'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";


function HomeNav(children) {
  
  const {dark,setDarkTheme}=useResultContext()
  return (
    <div className={dark?'dark':''}>
      <div className='absolute top-2 left-4 text-xl flex items-center dark:bg-gray-50 dark:text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue  border-blue rounded-full hover:shadow-lg'>
          <button onClick={()=>setDarkTheme(!dark)}>{dark? <FaSun color='white' className='bg-[#202124]' size={40} /> :<MdOutlineDarkMode size={40}/>}</button>
        </div>
        
        <header className='h-16 flex justify-between md:justify-end items-center gap-4 px-5 bg-slate-100 dark:bg-[#202124]' >    
           <div className='flex gap-4 '>
            <span className='text-black/[0.87] dark:text-gray-100   text-[13px] line-height hover:underline cursor-pointer'>
            Gmail
            </span>
            <span className=' text-black/[0.87] dark:text-gray-100  text-[13px] line-height hover:underline cursor-pointer'>
            Images
            </span>
           </div>
           <div className='flex gap-2'>
            <span className='h-10 w-10 flex items-center justify-center rounded-full
            cursor-pointer dark:hover:bg-gray-200 hover:bg-black/[0.05]'>
                <TbGridDots size={20} color='#5f6368'/>
            </span>
          
              <button className='bg-blue-800  text-white px-4 py-2 rounded-full gap-1'>
              Sign in
              </button>     
           </div>
        </header>
    </div>
    
  )
 
}

export default HomeNav