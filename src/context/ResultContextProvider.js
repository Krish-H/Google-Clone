import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();

const baseUrl = 'https://google-api31.p.rapidapi.com';

export const ResultContextProvider = ({ children}) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dark,setDarkTheme]=useState(false)

  

  const getResult = async (type,path) => {
    setIsLoading(true);
     try{
      const response = await fetch(`${baseUrl+path}`,{
        method: 'POST',
        headers:  {
         'x-rapidapi-key': 'your api key',
		'x-rapidapi-host': 'host name',
		'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         "text": type,
  "safesearch": "off",
  "timelimit": "",                       
  "region": "wt-wt",
  "duration": "",
 "resolution": "",
  "color": "",
  "size": "",
  "type_image": "",
  "layout": "",
  "max_results": 10
        })
      });
    
      const data = await response.json();
      setResults(data ); 
      
    setIsLoading(false);
}
catch(err){
  return "we can't fetch"
}
  };
  



  return (
    <ResultContext.Provider value={{ getResult, results, searchTerm, setSearchTerm, isLoading,dark,setDarkTheme }}>
      {children}
    </ResultContext.Provider>
  );
};



export const useResultContext = () => useContext(ResultContext);

