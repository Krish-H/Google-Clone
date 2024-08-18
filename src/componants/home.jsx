import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import {useNavigate} from 'react-router-dom'
import { useResultContext } from '../context/ResultContextProvider';
import HomeNav from './HomeNav';
import { Homefooter } from './Homefooter';
import { Homesearch } from './Homesearch';
import { ResultContextProvider } from '../context/ResultContextProvider';




function Home() {

    const{dark,setDarkTheme,setSearchTerm}=useResultContext()
  
    const[searchText,setSearchText]=useState('')
    const Navigate =useNavigate()
    const Navto=()=>{
      Navigate('/websearch')
      setSearchTerm(searchText)
    }
  
    
  return (
    <div className={dark?'dark':''}>
    <div className='flex h-[100vh] flex-col bg-slate-100 dark:bg-[#202124]' >
     <HomeNav/>
     <main className='grow flex justify-center'>
  
  <div className='w-full px-5 flex flex-col items-center mt-[5rem] '>
   {dark?<img  className='mb-8 w-[172px] md:w-[272px]'src='https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' /> : <img  className='mb-8 w-[172px] md:w-[272px]'src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' />}
    
   
   <Homesearch/>
    <div className='flex gap-2 text-[#3c4043] mt-8'>
   <button className='h-9 px-4 bg-[#af8f9fa] text-sm rounded-md border
   border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 dark:text-white'>
    Google Search
    </button>
    <button className='h-9 px-4 bg-[#af8f9fa] text-sm rounded-md border
   border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 dark:text-white'>
    I'm Feeling Lucky
    </button>
   </div> 
</div>
   </main>
   <Homefooter/>

    </div>
    </div>
  )
}

export default Home