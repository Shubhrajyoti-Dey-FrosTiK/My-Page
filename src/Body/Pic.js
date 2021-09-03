import React from 'react'
import './Pic.css';
import img from './img/1.jpg';
import img1 from './img/2.png';
import img2 from './img/3.png';

export default function Pic() {
    return (
        <>
        <div className="Content1">
            <div className="pic">
                <img src={img} alt="Logo" className="img"></img> 
            </div>
            <div className="Name_College" >
                    <h1 className="Name">Shubhrajyoti Dey</h1>
                    <h2 className="College">IIT BHU MnC</h2>
                    <h4 className="College" id="Email">Email ID: toshhubhrajyotidey@gmail.com</h4>
                    <h4 className="College" id="PhNo">Phone No: 7003026879</h4>
            </div>
                <div id="Social" className="Social">
                        <a href="https://github.com/Shubhrajyoti-Dey-FrosTiK">
                            <img src={img1} alt="Logo" className="Profile_Button_Image"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/shubhrajyoti-dey-217353201/">
                            <img src={img2} alt="Logo" className="Profile_Button_Image"></img>
                        </a>
                </div>
        </div>
        </>
    )
}
