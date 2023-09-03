import React from 'react'


export default function textform(props) {
   const handleUpClick = ()=>{
    console.log("uppercase was clicked");
   }
   const handleOnchange = ()=>{
    console.log("on change");
   }

  return (
          <div className="container" style={{color: props.darkMode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
  <div class="mb-3">
    <label for="myBox" class="form-label">Email textarea</label>
    <textarea className="form-control" onChange={handleOnchange}  style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.darkMode==='dark'?'white':'#042743'}}  id="myBox" rows="3"></textarea>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <button className="btn btn-primary">Convert to Uppercase</button>
    
  </div>
  
    {/*<div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} word and {textform.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>*/}
     
    </div>
    </div>
  
  
  )
}
