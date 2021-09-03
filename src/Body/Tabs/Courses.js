import React from 'react'
import './Courses.css'
import Courses_Clicked from './Courses_Clicked'

export default function Courses() {
    return (
        <div className="Courses" onClick={Courses_Clicked}>
            <h2>Courses</h2>
        </div>
    )
}
