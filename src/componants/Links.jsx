import React from 'react'
import { NavLink } from 'react-router-dom'
import { useResultContext } from '../context/ResultContextProvider'
const link= [
    {url:'/websearch',text:'All'},
    {url:'/imagesearch',text:'Images'},
    {url:'/videosearch',text:'Videos'},
    {url:'/news',text:'News'},
    
]
function Links() {
  const{dark,setDarkTheme}=useResultContext()
  return (
   <div className={dark?'dark':''}>
    <div className='  flex ml-9 space-x-4 items-left mt-4 dark:bg-[#202124] dark:text-white '>
       {link.map(({url,text},index)=>(
        <NavLink key={index} to={url}  className={({ isActive }) =>
            
            isActive
              ? ' text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 '
              : ''
          }>
            {text}
        </NavLink>
        
       ))}
     
    </div>
    </div>
  )
}

export default Links