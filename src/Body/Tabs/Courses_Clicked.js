import React from 'react'

export default function Courses_Clicked() {
    let Node =document.getElementById("Content");
    while (Node.firstChild) {
        Node.removeChild(Node.lastChild);
    }
    Node =document.getElementById("Content2");
    while (Node.firstChild) {
        Node.removeChild(Node.lastChild);
    }
    Node = document.getElementById("Line");
    Node.classList.remove("fade-effect1");
    console.log("Courses is clicked");
    let div = document.createElement("div")
    let text = document.createTextNode("This is the Courses Page")
    let p = document.createElement("p")
    p.appendChild(text)
    div.append(p)
    var x = document.getElementById("Content").appendChild(div);
}
