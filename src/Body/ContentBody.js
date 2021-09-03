import React from 'react'
import './ContentBody.css'
import About_Clicked from './Tabs/About_Clicked'

export default function ContentBody() {
    console.log(window.$count)
    return (
        <>
            <div className="ContentBody">
                <div id="Content" className="Content3"></div>
                <div className="fade-effect1" id="Line"></div>
                <div id="Content2" className="Content4"></div>
            </div>
            <script async defer>
                export default function Click() {
                    window.onload = function Done(){
                        // document.getElementById("About").click()
                        About_Clicked()
                    }
                }
            </script>
        
        </>
    )
}
