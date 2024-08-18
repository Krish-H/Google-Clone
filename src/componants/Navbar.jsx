import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Search from './search';
import { useResultContext } from '../context/ResultContextProvider';

function Navbar() {
  const { dark, setDarkTheme } = useResultContext();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={dark ? 'dark' : ''}>
      <Link to="/" className='sm:hidden bg-white dark:bg-[#202124] max-sm:flex max-sm:justify-center max-sm:items-center max-sm:pt-6 max-sm:w-full'>
        <img className='md:block w-[92px] mr-10' src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google Logo' />
      </Link>
      <div className='p-[15px] sticky top-0 pb-0 flex flex-wrap md:pl-5 md:pt-10 border-b border-[#ebebeb] md:block dark:border-gray-700 items-center bg-white dark:bg-[#202124]'>
        <div className='flex justify-between items-center w-full'>
          <div className='flex'>
            <Link to="/" className='max-sm:hidden bg-white dark:bg-[#202124]'>
              <img className='md:block w-[92px] mr-10' src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='Google Logo' />
            </Link>
            <Search />
          
            
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Navbar;
 