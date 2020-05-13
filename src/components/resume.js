import React, { Component } from 'react';
import ResumeLarsenClickable from '../assets/ResumeLarsenClickable.pdf'
import ResumeLarsen from '../assets/ResumeLarsen.png'

class Resume extends Component {
    render(){
        return(
            <div>
                <h1>
                <a href={ResumeLarsenClickable} target="_blank" Color="black" className="resume-text"> 
                    <img src={ResumeLarsen} className='resume'></img>
                    <p className="resume-text">
                        Click for a clickable PDF
                    </p>
                </a>
                </h1>
            </div>
        );
    }
}

export default Resume;