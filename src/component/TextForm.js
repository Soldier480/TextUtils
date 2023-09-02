import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import { saveAs } from 'file-saver';
export default function TextForm(props) {
    const handleupClick=()=>{
    console.log('Uppercase was clicked')
    let newText=text.toUpperCase()
    setText(newText)
    }
    const handleOnChange=(event)=>{
        console.log('on change')
        setText(event.target.value)
    }
    const handleloClick=()=>{
      let newText=text.toLowerCase()
      setText(newText)
    }
    const cleartext=()=>{
      let newText=''
      setText(newText)  
    }
    const downloadfile=()=>{
      var content = text;
      // any kind of extension (.txt,.cpp,.cs,.bat)
      var filename = "hello.txt";
      
      var blob = new Blob([content], {
       type: "text/plain;charset=utf-8"
      });
      
      saveAs(blob, filename);
    }
    const [text,setText]=useState('enter the text here')
  return (
    <>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}> 
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to Upper case</button>
<button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to lower case</button>
<button className="btn btn-primary mx-1" onClick={cleartext}>clear text</button>
<button className="btn btn-primary mx-1" onClick={downloadfile}>download text file</button>
  </div>
  <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length}words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes read</p>
    <h3>preview</h3>
    <p>{text.length > 0 ?text:'Enter something in textbox to preview here'}</p>
  </div>
  </>
  )

  }