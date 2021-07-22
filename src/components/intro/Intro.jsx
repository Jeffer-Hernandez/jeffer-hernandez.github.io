import "./intro.scss"
import {init} from "ityped"
import {useEffect, useRef} from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["web developer.","software engineer.","front end guru."]

        })
        
    }, [])

    return (
        <div className="intro" id="intro"> 


           <div className="left">

                <div className="imgContainer">
                    <img src="assets/headshot.png" alt="" />
                </div>

           </div>

            <div className="right">
                
                <div className="wrapper">
                    <h2>Hey, homies! I'm</h2>
                    <h1>Jeff Hernandez</h1>
                    <h3>Your friendly neighborhood <span ref={textRef}></span></h3>
                </div>

                <a href="#portfolio">
                    <img src="assets/down-arrow.png" alt="" />
                </a>

            </div>


        </div>
    )
}
