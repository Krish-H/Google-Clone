import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useResultContext } from '../context/ResultContextProvider';
import ClearIcon from '@mui/icons-material/Clear';
import mic from '../asset/mic.svg';
import imageSearch from '../asset/image.svg';

export const Homesearch = () => {
  const { setSearchTerm } = useResultContext();
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const Navto = () => {
    setSearchTerm(searchText);
    navigate('/websearch');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      Navto();
    }
  };

  return (
    <div className='search-container h-[46px] w-full md:w-[584px] flex items-center gap-3 px-2 md:px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0 bg-white'>
      <button className='pl-2' onClick={Navto} size={27} color='#9aa0a6'> <AiOutlineSearch /></button>
      <input 
        type='search' 
        value={searchText} 
        autoFocus 
        onChange={(e) => setSearchText(e.target.value)} 
        onKeyDown={handleKeyPress} 
        className='search-input grow outline-0 text-black/[0.87]' 
      />
      <button 
        type='button' 
        className='clear-button relative flex items-center max-sm:right-[10px] md:right-10 font-semibold text-xl text-gray-500 p-1 rounded-full' 
        onClick={() => setSearchText('')}
      >
        <ClearIcon />
      </button>
      <div className='icon-container flex items-center gap-1 md:gap-3'>
        <button className='icon-button h-6 w-6 flex-shrink-0'> <img src={mic} alt="mic" /></button>
        <button className='icon-button h-6 w-6 flex-shrink-0'> <img src={imageSearch} alt="image search" /></button>
      </div>
    </div>
  );
};
