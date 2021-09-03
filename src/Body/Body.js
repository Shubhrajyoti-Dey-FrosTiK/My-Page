import React from 'react'
import './Body.css'
import ContentBody from './ContentBody'
import TabBar from './TabBar'
import About_Clicked from './Tabs/About_Clicked'

export default function Body() {
    return (
        <div className="Content2">
            <TabBar/>
            <ContentBody/>
            {/* <script defer>{About_Clicked()}</script> */}
        </div>
    )
}
