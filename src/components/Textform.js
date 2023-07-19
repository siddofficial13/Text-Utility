import React,{useState} from 'react'


export default function Textform(props) {

    const handleUpClick=()=>{
        console.log("uppercase was clicked");
        // setText("You have clicked on handleUpClick");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Upper Case" , "success");
    }
    const handleLoClick=()=>{
        console.log("lowercase was clicked");
        // setText("You have clicked on handleUpClick");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lower Case" , "success");
    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);

    }
    const handleCLearClick=()=>{
        //console.log("on change");
        let newText ='';
        setText(newText);
        props.showAlert("Text Cleared !" , "success");
    }
    const handleCopy=()=>{
        //console.log("on change");
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied !" , "success");
    }
    const handleExtraSpaces=(event)=>{
        //console.log("on change");
       let newText = text.split(/[ ] +/);
       setText(newText.join(" "));
       props.showAlert("Extra spaces removed" , "success");
    }
    const [text, setText] = useState('enter the text here');

  return (
    <>
    <div className = "conatiner" style ={{color:props.mode==='dark'?'white':'#0e2443'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="mybox" class="form-label">Example textarea</label> */}
        <textarea className="form-control"  value={text} onChange ={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'#0e2443':'white' , color:props.mode==='dark'?'white':'#0e2443'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn  btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-1 my-1" onClick={handleCLearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn  btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-2" style ={{color:props.mode==='dark'?'white':'#0e2443'}}>
        <h1>Text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    </div>
    </>
  )
}
