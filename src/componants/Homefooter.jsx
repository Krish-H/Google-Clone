import React from 'react'
import { useResultContext } from '../context/ResultContextProvider'


// Privacy
// Terms
// Settings
export const Homefooter = () => {
  const{dark,setDarkTheme}=useResultContext()
  return (
    <div className={dark?'dark':''}>
    <div className='bg-[#f2f2f2] dark:bg-[#18191a] text-md max-sm:text-sm text-[#202124] dark:text-white'>
    <div className='flex max-sm:py-[5px] py-[15px]    border-[#dadce0] dark:border-black '>
   <span className='max-sm:px-[18px] md:px-[30px]  '>India</span>
    </div>

    <div className='flex flex-col md:flex-row justify-between py-3 md:py-0 md:px-[15px]'>
<div className='flex max-sm:justify-center space-x-4 max-sm:py-[5px] py-[15px] md:px-[18px] '>
         <a href="">About</a>
         <a href="">Advertising</a>
         <a href="">Business</a>
         <a href="">How Search works</a>
</div>
<div className='flex max-sm:justify-center space-x-4 max-sm:py-[5px] py-[15px] md:px-[18px]'>
<a href="">Privacy</a>
         <a href="">Terms</a>
         <a href="">Settings</a>
</div>
    </div>
    </div>
    </div>
  )
}
