import logo from './logo.svg';
import React,{ useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Aboutus from './component/Aboutus';
import './App.css';

function App() {
  const [mode,setmode]=useState('light')
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743';
    }
    else{
      
      setmode('light')
      document.body.style.backgroundColor='white';
    }
  };
  return (
    <>
  <Navbar title="TextUtils"  aboutText="Aboutus" mode={mode} togglemode={togglemode}/>
  <TextForm heading="Enter the text to analyze" mode={mode}/>
  </>
  );
}

export default App;
