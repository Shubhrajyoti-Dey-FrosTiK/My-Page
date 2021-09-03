import React from 'react'
import './Blogs.css'
import Blogs_Clicked from './Blogs_Clicked'

export default function Blogs() {
    return (
        <div className="Blogs" onClick={Blogs_Clicked}>
            <h2 className="Blogs_Heading">Blogs</h2>
        </div>
    )
}
