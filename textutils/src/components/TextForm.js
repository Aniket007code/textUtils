import React,{useState}from 'react'

export default function TextForm(props) {

    const handleClearClick = ()=>{
        console.log("clear was clicked");
        // setText("apne clicked ko click kiya")
        let newText = ""
        setText(newText);
    }

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        // setText("apne clicked ko click kiya")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleSpaceClick = ()=>{
        console.log("spaceclicked was clicked");
        // setText("apne clicked ko click kiya")
        let newText = text.replaceAll(' ','');
        setText(newText);
    }

    const handleDownClick = ()=>{
        console.log("lowercase was clicked");
        // setText("apne clicked ko click kiya")
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("onchange was clicked");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Your Text Here");

    return (
        <>
            <div className="mb-3">
                <h4><label for="myBox" className="form-label">{props.name}</label></h4>
                
                <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="7" ></textarea>
            </div>
            <br />
            <button type="button" onClick={handleUpClick} className="btn btn-primary">Convert To Uppercase</button>
            <button type="button" onClick={handleDownClick} className="nbtn btn btn-primary" ml-3>Convert To lowercase</button>
            <button type="button" onClick={handleSpaceClick} className="nbtn btn btn-primary" ml-3>Remove Spaces</button>
            <button type="button" onClick={handleClearClick} className="nbtn btn btn-primary" ml-3>Clear</button>

             
             <div className="container my-4">
                <h4>your Text Summary</h4>
                <p><b>{text.split(" ").length}</b> words <b>{text.length}</b> length</p>
                <p>Time required to read paragraph : <b>{text.split(" ").length * 0.008} min </b></p>
                <h4>Preview</h4>
                <p>{text}</p>
             </div>
        </>

    )
}

// .replaceAll(' ','')
