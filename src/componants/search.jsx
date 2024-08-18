import React, { useEffect, useState } from 'react';
import Links from './Links';
import { AiOutlineSearch } from 'react-icons/ai';
import { useResultContext } from '../context/ResultContextProvider';
import { useDebounce } from 'use-debounce';
import mic from '../asset/mic.svg';
import imageSearch from '../asset/image.svg';
import ClearIcon from '@mui/icons-material/Clear';

function Search() {
  const { dark, searchTerm, setSearchTerm } = useResultContext();
  const [text, setText] = useState(searchTerm);
  const [debounceValue] = useDebounce(text, 2000);

  useEffect(() => {
    if (debounceValue) {
      setSearchTerm(debounceValue);
    }
  }, [debounceValue, setSearchTerm]);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className='h-[46px] w-full pl-[18px] pr-1 md:px-10 md:w-[584px] flex items-center justify-center md:gap-3 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0 bg-white'>
        <input
          type='search'
          value={text}
          autoFocus
          onChange={(e) => setText(e.target.value)}
          className='md:flex-grow flex outline-0 text-black/[0.87] bg-white hover:bg-white'
          placeholder='search'
        />
        <button
          type='button'
          className='flex items-center font-semibold text-xl text-gray-500 p-2 rounded-full'
          onClick={() => setText('')}
        >
          <ClearIcon />
        </button>
        <div className='flex items-center gap-2  md:gap-3'>
          <button className='h-6 w-6'>
            <img src={mic} alt="mic" />
          </button>
          <button className='h-6 w-6'>
            <img src={imageSearch} alt="image search" />
          </button>
          <button>
            <AiOutlineSearch size={20} color='blue' />
          </button>
        </div>
      </div>
      <Links />
    </div>
  );
}

export default Search;
