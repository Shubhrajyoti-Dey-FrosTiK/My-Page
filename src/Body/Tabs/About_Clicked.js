import Content_Builder from "./Content_Builder";
import img1 from '../img/2.png'
import img2 from '../img/3.png'

export default async function About_Clicked() {
    let Node =document.getElementById("Content");
    if(Node != null){
        while (Node.firstChild) {
                Node.removeChild(Node.lastChild);
        }
    }
    Node =document.getElementById("Content2");
    if(Node != null){
        while (Node.firstChild) {
                Node.removeChild(Node.lastChild);
        }
    }
    Node = document.getElementById("Line");
    Node.classList.add("fade-effect1");
    
    if(window.screen.width < 1024) {
        let phno = document.getElementById("PhNo")
        if(phno!=null){
            phno.parentNode.removeChild(document.getElementById("PhNo"))
        }
        let email = document.getElementById("Email")
        if(email!=null){
            email.parentNode.removeChild(email)
        }
        let social = document.getElementById("Social")
        if(social!=null){
            social.parentNode.removeChild(social)
        }
        // social.removeChild()
        let ContactHeading = document.createElement("h1")
        let txt = document.createTextNode("Contact :")
        let img = document.createElement("img")
        img.src = img1
        img.classList.add("Profile_Button_Image1")
        let newdiv = document.createElement("div")
        ContactHeading.appendChild(txt)
        newdiv.appendChild(ContactHeading)
        let a = document.createElement("a")
        a.href = "https://github.com/Shubhrajyoti-Dey-FrosTiK"
        a.appendChild(img)
        newdiv.appendChild(a)
        let img3 = document.createElement("img")
        img3.src=img2
        img3.classList.add("Profile_Button_Image1")
        a = document.createElement("a")
        a.href = "https://www.linkedin.com/in/shubhrajyoti-dey-217353201/"
        a.appendChild(img3)
        newdiv.appendChild(a)
        newdiv.classList.add("Content_Div")
        let p = document.createElement("p")
        txt = document.createTextNode("Email id : toshhubhrajyotidey@gmail.com")
        p.appendChild(txt)
        newdiv.appendChild(p)
        p = document.createElement("p")
        txt = document.createTextNode("Phone No : 7003026879")
        p.appendChild(txt)
        newdiv.appendChild(p)
        document.getElementById("Content").appendChild(newdiv)
    }


    let tech = []
    let subheading = []
    let ls = []
    let link_Heading = ""
    let link_SubHeading = []
    let link_Body = [
        "https://drive.google.com/file/d/1VZaI9suJNHn2RCaAQkjMI5w-x_W5cDNi/view?usp=sharing",
        "https://drive.google.com/file/d/1ZrOLtz0P6VrBTDTNXk2qMxHUwYSCOudd/view?usp=sharing"
    ]
    ls.push("1st Semester SPI : 9.78")
    ls.push("2nd Semester SPI : 9.47")
    Content_Builder("Academics",ls,subheading,tech,link_Body,link_Heading,link_SubHeading,"Normal","Content")

    link_Body = []
    link_Heading = ""
    link_SubHeading = []
    tech = []
    subheading = []
    ls = [
        "C++",
        "Java",
        "Python",
        "HTML , CSS , Javascript",
        "React",
        "PHP",
        "Kotlin",
        "Machine Learning",
        "Flutter"
    ]
    
    Content_Builder("Skills",ls,subheading,tech,link_Body,link_Heading,link_SubHeading,"Skills","Content")

    link_Body = []
    link_Heading = ""
    link_SubHeading = []
    subheading = [
        "Vaccine Alert Bot :",
        "Stock Market Manager :",
        "Sentiment Analysis :",
        "Obstruction detection using OpenCV"
    ]
    tech = [
        "Technologies used : Python",
        "Technologies used : Java, Swing, YahooFinance API",
        "Technologies used : Python, ML",
        "Technologies used : Python, OpenCV"
    ]
    ls = [
        "This is a discord bot which uses web scraping to alert a user after specific intervals of time, if any vacant centre is available nearby.",
        "This is a simple Java application with a GUI built with Swing which uses YahooFinance API to check the data of real time international stock prices and buy sell the stocks in a virtual environment",
        "This is a python script which collects the headlines and checks weather it is a spam or an useful message by the help of the vaderSentiment library",
        "Here a virtual environment is taken (WeBots) and an E-Puck is programmed to move in a virtual world without colliding to any obstacles and reach the required destination. This is done by analysing the picture gathered by the camera and the readings of the builtin IR Sensor to move without colliding to objects. Here the interpretation of the image is done using OpenCV"
    ]

    Content_Builder("Projects",ls,subheading,tech,link_Body,link_Heading,link_SubHeading,"Normal","Content2")
}

// default funciton Content_Builder(){
    
// }

// Delete all the child elements 
// let Node =document.getElementById("Content");
//   while (Node.firstChild) {
//     Node.removeChild(Node.lastChild);
//   }