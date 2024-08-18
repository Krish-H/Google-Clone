import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../context/ResultContextProvider';
import Loading from './Loader';

function Result() {
  const { results, getResult, isLoading, searchTerm } = useResultContext();
  const location = useLocation();
  const locate =location.pathname

  useEffect(() => {
    if(location.pathname ==='/websearch'){
      getResult(searchTerm,locate);
    }else if (location.pathname ==='/imagesearch'){
      getResult(searchTerm,locate);
    }else if (location.pathname ==='/news'){
      getResult(searchTerm,'');
    }
    else if (location.pathname ==='/videosearch'){
      getResult(searchTerm,locate);
    }
    else{
      return alert("routes mismatch")
    }
    
    

  },[searchTerm,locate]);
 

  if (isLoading) return <Loading />;

    switch (location.pathname) {
      case '/websearch':
        
        return (
        
  <div className=' pt-4 space-y-6 sm:px-[186px] '>
  {results?.result?.map(({href, title}, index) => (
    <div key={index} className='md:w-full mb-4 max-sm:px-4  '>
      <a href={href} target='_blank' rel='noreferrer'>
        <p className='text-sm mb-1 dark:text-white'>
          {href?.length > 30 ? `${href.substring(0, 30)}...` : href}
        </p>
        <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
          {title}
        </p>
      </a>
    </div> 
  ))}
</div>

        );
      
      case '/imagesearch':
        
      return (
        
        <div className='flex flex-wrap justify-center itemes-center bg-center '>
          {results?.result?.map(({image,title,url},index)=>(
            <a className='sm:p-3 p-5' href={url}  key={index} target='_blank' rel='noreferrer'>
             <img src={image} alt={title} loading='lazy' className='w-52  h-48'/>
             <p className='break-words w-36 text-sm mt-2 dark:text-white'>
                  {title}
             </p>
            </a>
          ))} 
          
        </div>
        );
      case '/news':
        return (
        
          <div className=' space-y-6 pt-4 sm:px-[186px]'>
            {results?.news?.map(({url,title},index)=>(
               <div key={index} className='md:w-full w-full max-sm:px-4'>
                 <a href={url} target='_blank' rel='noreferrer'>
                     <p className='text-sm dark:text-white'>
                       {url.length > 30 ? url.substring(0,30):url}
                     </p>
                     <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                       {title}
                     </p>
                 </a>
                </div>
            ))} 
            
          </div>
          );
      case '/videosearch':
  return (
    <div className='space-y-6 pt-4 sm:px-[186px]'>
      {results?.result?.map(({ content, title, description, embed_url }, index) => (
        <div key={index} className='p-2'>
          {embed_url ? (
            <a href={embed_url} target='_blank' rel='noopener noreferrer'>
              <p className='mb-1 dark:text-gray-600 text-sm'>
                {embed_url.length > 30 ? embed_url.substring(0, 30) : embed_url}
              </p>
              <p className='text-lg text-blue-600 mb-1'>{title}</p>
            </a>
          ) : (
            <p className='mb-1 dark:text-gray-600 text-sm'>No URL provided</p>
          )}
          <div className='flex  flex-col sm:flex-row sm:items-start md:items-center justify-between'>
            <div classname='rounded-lg overflow-hidden ' style={{ borderRadius: '15px' }}  width='355px' height='144px'>
            <ReactPlayer url={content}  controls  width='355px' height='144px' />
            </div>
            <p className='mt-2 sm:mt-0 sm:ml-5 dark:text-gray-600 text-sm text-justify'>
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

      default:
        return <div>Error: Invalid Path</div>;
    }
  

}

export default Result;
