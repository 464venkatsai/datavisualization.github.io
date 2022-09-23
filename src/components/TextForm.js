import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("")
    const UpperClick=()=>{
        // console.log("clicked on upperclick") 
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted Into UpperCase !")
    }
    const ClearClick=()=>{
        let p=prompt("Do You Want To Clear Text ? (y/n)")
        if (p==='y'){
            props.ShowAlert("Cleared Text !")
            let newText = "";
            setText(newText);
        }
        // console.log("clicked on upperclick") 
    }
    const LowerClick=()=>{
        props.ShowAlert("Converted Into LowerCase !")
        // console.log("clicked on upperclick") 
        let newText = text.toLowerCase();
        setText(newText);
    }
    const changed=(event)=>{
        // console.log("clicked on upperclick")
        setText(event.target.value)
    }
    const CopyText=(event)=>{
        props.ShowAlert("Copy To ClipBoard")
        navigator.clipboard.writeText(text);
    }
    const SpaceRemover=()=>{
        props.ShowAlert("Extra Spaces Removed !")
        let newText=""
        for (let i = 0; i < text.length; i++) {
          if ( text[i]===" " && text[i+1]===" "){
              //pass
          }
          else{
            newText=newText+text[i]
          }
          // console.log(i)
        }
        // console.log(newText)
        setText(newText);
    }
  return (
    <>
    <div className='container my-4'>
        <h1 style={{color : props.mode==="light"?"black":"white"}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="Box" rows="8"  value={text} onChange={changed} style={{backgroundColor : props.mode==="light"?"white":"rgb(209, 234, 235)",color : props.mode==="light"?"black":"rgb(4, 6, 112)"}}></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={UpperClick}>Uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={LowerClick}>Lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={ClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={SpaceRemover}>Remove Extra Spaces</button>
        <button className='btn btn-primary mx-1 my-1' onClick={CopyText}>Copy Your Text</button>
    </div>
    <div className="container my-3" style={{color : props.mode==="light"?"black":"white"}}>
    <h2>Summary Of Your Text</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} of words and {text.length} of characters</p>
    <p><b>{(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length)} Required To Read</b></p> 
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Any Words To Preview Here"}</p>
    </div>
    </>
  )
}
