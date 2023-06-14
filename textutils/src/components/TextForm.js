import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        setText("apne clicked ko click kiya")
    }

    const handleOnChange = ()=>{
        console.log("onchange was clicked");
    }

    const [text, setText] = useState("Enter Your Text Here");

    return (
        <>
            <div className="mb-3">
                <h4><label for="myBox" className="form-label">{props.name}</label></h4>
                
                <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="7" ></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="btn btn-primary">Convert To Uppercase</button>
        </>

    )
}
