import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');
  
  const handleOnChange = (event) => {
    //console.log("on change event triggered");
    setText(event.target.value)

  }

  const handleUpClick = () => {
    //console.log("on click event triggered");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text changed to uppercase", "success");
  }
  const handleLoClick = () => {
    //console.log("on click event triggered");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text changed to lowercase", "success");
    
  }
  
  /* const handleFindClick = () => {
    let findText = text.indexOf(prompt("Enter the text to find"));
    console.log(findText);
  } */
  const handleReset = () => {
    setText('');
    props.showAlert("Textbox cleared", "success");
  }
  const handleCopy = () => {
    
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  }
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }

  return (
    <>
      <div className='container' style={{color: props.mode==='light'?'black':'white' }} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor:  props.mode==='light'?'white':'#4b5f79', color: props.mode==='light'?'black':'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
        {/* <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleFindClick}>Click to Find</button> */}
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleReset}>Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleSpaces}>Remove Spaces</button>
          
      </div>
      <div className="container my-2"  style={{color: props.mode==='light'?'black':'white' }}>
        <h1>Text Summary</h1>
        <p> {text.trim().split('').length === 0? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        {/* <p> {text.split(/\s+/).filter((element) => {return element.length !== 0 }).length} words and {text.length} characters</p> */}
        <p>{0.08 * (text.trim().split('').length === 0? 0 : text.trim().split(/\s+/).length)} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : 'Enter something in the textbox to preview'}</p>
      </div>
    </>
  )
}
