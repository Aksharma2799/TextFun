import React, { useState } from 'react'

function TextForm(props) {

    const toUpperClick = () => {
        let newText = text.toLocaleUpperCase();
        setTet(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const toLowerClick = () => {
        let newText = text.toLocaleLowerCase();
        setTet(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const clearText = () => {
        let newText = "";
        setTet(newText);
        props.showAlert("Text has been cleared!", "success");
    }
    const handelOnChange = (event) => {
        setTet(event.target.value);

    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }
    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setTet(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const [text, setTet] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{ backgroundColor:props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743' }} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={toUpperClick}>Cobvert To Uppercase</button>
                <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={toLowerClick}>Cobvert To Lowercase</button>
                <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
                <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={removeSpaces}>Remove ExtraSpaces</button>


                <button disabled={text.length===0}  className="btn btn-danger mx-2" onClick={clearText}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summary</h1>
                <h5><p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters</p></h5>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview!"}</p>
            </div>
        </>
    )
}

export default TextForm
