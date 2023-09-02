import logo from './logo.svg';
import React,{ useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Aboutus from './component/Aboutus';
import Alert from './component/Alert';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
  } from "react-router-dom" ;
function App() {
  const [mode,setmode]=useState('light')
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled","success")
    }
    else{
      
      setmode('light')
      document.body.style.backgroundColor='white';
      showalert("light mode has been enabled","success")
    }
  };
  return (
    <>
  <Navbar title="TextUtils"  aboutText="Aboutus" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
  <TextForm showalert={showalert}  heading="Enter the text to analyze" mode={mode}/>
  </>
  );
}

export default App;
