import React from 'react'
import './TabBar.css'
import About from './Tabs/About'
import Blogs from './Tabs/Blogs'
import Courses from './Tabs/Courses'

export default function TabBar() {
    return (
        <div className="TabBar">
            <div className="Tabs">
                <div></div>
                <About/>
                <div></div>
                <Courses/>
                <div></div>
                <Blogs/>
                <div></div>
            </div>
        </div>
    )
}
