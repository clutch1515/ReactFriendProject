import React, { Component } from 'react';
import ResumeLarsen from '../assets/ResumeLarsen.png'

class Resume extends Component {
    render(){
        return(
            <div >
                <h1>
                    <img src={ResumeLarsen}></img> 
                </h1>
            </div>
        );
    }
}

export default Resume;