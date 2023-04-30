import React , {useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState('');
   
    const handleUpClick = ()=> {
        let newText=Text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Uppercase' , 'success')
    }
   
    const handleLowClick = ()=> {
        let newText=Text.toLowerCase();
        setText(newText)
        props.showAlert('Coverted to Lowercase' , 'success')
     }
   
    const handleClearClick = ()=> {
       setText("")
       props.showAlert('All cleared' , 'success')
    }

    const handleTextCopy = ()=> {
        let copyText = document.getElementById("myBox");
        copyText.select();      
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Copied to Clipboard' , 'success')
    }

    const handleTextSpace = ()=> {
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces has been managed' , 'success')
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    
    return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={Text}
            style = {{backgroundColor: 'black' , color: 'white' }} 
            onChange={handleOnChange} id="myBox" rows="7"></textarea>
        </div>
        
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleTextCopy}>Copy text </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleTextSpace}>Remove extra spaces </button>
    
    </div>
    
    <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>
            {Text.split(" ").length} word and {Text.length} characters
            <br/> {0.008 * Text.split(" ").length} minutes read
        </p>

        <h2>Preview</h2>
        <p>{Text}</p>
    </div>
    </>
  )
}
