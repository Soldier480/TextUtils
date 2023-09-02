// import logo from './logo.svg';
import React,{ useState } from 'react';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import About from './component/About';
import Alert from './component/Alert';
import './App.css';
// import {
//   BrowserRouter as Router,
// } from "react-router-dom";
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
    {/* <Router> */}
  <Navbar title="TextUtils"  aboutText="About" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  <div className="container my-3"> 
  {/* <Routes> */}
    {/* Routes used instead of switch */}
          {/* <Route path="/about" element={<About/>}>
          </Route> */}
          {/* <Route path="/" element={<TextForm showalert={showalert}  heading="Enter the text to analyze" mode={mode}/>}>   
          </Route> */}
          {/* <Route path="/" element= */}
          <TextForm Home="Home" showalert={showalert}  heading="Enter the text to analyze" mode={mode}/>  
          {/* </Route>
        </Routes> */}
        </div>
        {/* </Router> */}
  </>
  );
}

export default App;
