import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState(
    {
        color: 'Black',
        backgroundColor: 'White'
    })
    const [btnText, setBtnText] = useState('Enable Dark Mode')

    const toggleStyle = () => {
        if(myStyle.color === 'Black'){
            setMyStyle({
                color: 'White',
                backgroundColor: 'Black'
            })
        setBtnText('Enable Light Mode')
        }
        else{
            setMyStyle({
                color: 'Black',
                backgroundColor: 'White'
            })
        setBtnText('Enable Dark Mode')
        }
    }

  return (
    <div className='container' style={myStyle}>
        <h1>About us</h1>
        <div className="accordion my-3" id="accordionExample" >
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About TextEdi
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                It is free to use, It will help users to analyze thier text quickly and efficiently.TextEdi is a free character counter tool that provides instant character count & word count statistics for a given text. TextEdi reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                About Me
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Hello, My name is Aniket Yadav and I'm a Ui Developer who works as a software engineer at LTIMindtree. I have immense passion to build or develop projects.  
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Contact me
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <a href="https://yadavaniket.netlify.app/">Website</a><br/>
            <a href="https://www.linkedin.com/in/aniketyadav9">LinkedIn</a><br/>
            <a href="https://www.instagram.com/anikety4dav/">Instagram</a><br/>
            email: anikety4dav@gmail.com
            </div>
            </div>
        </div>
        </div>
        <div className='container'>
        <button onClick={toggleStyle} type="button" class="btn btn-primary">{btnText}</button>
        </div>
        <div className='container'> <br/> </div>
    </div>
  )
}
