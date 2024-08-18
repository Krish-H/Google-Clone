import React,{useState} from "react";
import Navbar from './componants/Navbar.jsx';
import AppRoutes from './componants/Routes.jsx';
import Footer from './componants/Footer.jsx';
import Home   from "./componants/home.jsx";
import ResultPage from "./componants/ResultPage.jsx";
import './output.css'; 
import './App.css';


function App(){
  const [darkTheme,setDarkTheme]=useState(false);
  const [next,setNext] =useState()


  return(
    <>
    
<div className={darkTheme ? 'dark' : '' }>
  <div className=" bg-gray-100 dark:bg-gray-900   dark:text-gray-200 min-h-screen">
  <AppRoutes />
  
  </div>
</div>
    </>
  )
}

export default App;
