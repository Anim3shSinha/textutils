import React from 'react'
import { useState } from 'react';

export default function Textform(props) {
  
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
      console.log("On change");
      setText(event.target.value);
  }

    const handleUpClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text converted to upper case", "success")
  }

    const handleDownClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case", "success")
  }

    const handleClearClick = (text) => {
      setText(" ");
      props.showAlert("Text cleared", "success")
    }
    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard", "success")
  }

    return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
    </>
  )
}

