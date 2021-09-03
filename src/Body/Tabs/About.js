import React from 'react'
import './About.css';
import About_Clicked from './About_Clicked.js';

export default function About() {
    return (
        <div className="About" id="About" onClick={About_Clicked}>
            <h2 className="About_Heading">About</h2>
            
        </div>
    )
}
