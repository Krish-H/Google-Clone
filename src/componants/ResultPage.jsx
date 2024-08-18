import React,{useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Result from "./result";
import { useResultContext } from "../context/ResultContextProvider";



function ResultPage() {
  const{dark,setDarkTheme}=useResultContext()
  return (
    <div className={dark?'dark':''}>
      <div className="bg-white dark:bg-[#202124]">
      <div className="sticky top-0"> 
      <Navbar/>
      </div>
      
      <Result/>
      <Footer/>
    
    </div>
    </div>
  )
}

export default ResultPage