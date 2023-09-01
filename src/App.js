import logo from './logo.svg';
import React,{ useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Aboutus from './component/Aboutus';
import './App.css';

function App() {
  const [mode,setmode]=useState('dark')
  return (
    <>
  <Navbar title="TextUtils"  aboutText="Aboutus" mode={mode}/>
  <TextForm heading="Enter the text to analyze"/>
  </>
  );
}

export default App;
