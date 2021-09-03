import React from 'react'
import Body from '../Body';

export default function Content_Builder(head,body,subheading,tech,link_Body,link_Heading,link_SubHeading,type,dv) {

    let div = document.createElement("div")
    let text = document.createTextNode(head)
    let heading = document.createElement("h1")
    heading.appendChild(text)
    let a = document.createElement("a")
    a.appendChild(heading)
    if(link_Heading.length>0){
        a.href=link_Heading
        a.classList.add("Heading_Link")
    }
    div.append(a)
    div.classList.add("Content_Div")
    
    
    for(var i=0;i<body.length;i++){
        let newdiv = document.createElement("div")
        let span = document.createElement("span")
        let p = document.createElement("p")
        text = document.createTextNode(body[i])
        p.appendChild(text)
        let a1 = document.createElement("a")
        a1.appendChild(p)
        if(link_Body.length>0){
            a1.href = link_Body[i]
            a1.classList.add("Body_Link")
        }
        // let br = document.createElement("br")
        // b.appendChild(br)
        let sub = document.createElement("h3")
        if(subheading.length>0){
            while (p.firstChild) {
                p.removeChild(p.lastChild);
            }
            text = document.createTextNode(subheading[i])
            let t = document.createTextNode(tech[i])
            let brk = document.createElement("br")
            let bdy = document.createTextNode(body[i])
            if(link_Body.length>0){
                a1.href = link_Body[i]
            }
            p.appendChild(t)
            p.appendChild(brk)
            p.appendChild(bdy)
            sub.appendChild(text)
        }
        p.classList.add(type)
        a = document.createElement("a")
        a.appendChild(sub)
        if(link_SubHeading.length>0){
            a.href=link_SubHeading[i]
            a.classList.add("Subheading_Link")
        }
        span.appendChild(a)
        span.appendChild(a1)
        newdiv.appendChild(span)
        div.appendChild(newdiv)
    }
    
    // text = document.createTextNode("2md Semester SPI : 9.47")
    // let br = document.createElement("br")
    // body.appendChild(br)
    // body.appendChild(text)
    // div.appendChild(b)
    var x = document.getElementById(dv).appendChild(div);
}
