import {useState} from "react";
import "./works.scss"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "assets/mobile.png",
            title: "Bootcamp Graduate",
            desc: "I participated in an intensive Software Engineering bootcamp at The Flatiron School.",
            img: 
            "assets/flatiron.jpg",
            category: "Education"
        },
        {
            id: "2",
            icon: "assets/globe.png",
            title: "New York Cares Volunteer",
            desc: "I am a monthly volunteer at my community pantry.",
            img: 
            "assets/new york cares.jpg",
            category: "Interesting Fact"
        },
        {
            id: "3",
            icon: "assets/writing.png",
            title: "BNY Mellon Intern",
            desc: "I worked on a Jenkins to Gitlab migration with the Enterprise Risk Platform team.",
            img: 
            "assets/bny mellon.png",
            category: "Experience"
        },
    ];

    const handleClick = (way) =>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>

                {data.map((d) => (

                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc} </p>
                                    <span>{d.category}</span>
                                </div>
                            </div>
                            <div className="right">
                                <img 
                                src={d.img}
                                alt="" />
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <img 
            src="assets/white-arrow-transparent.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img 
            src="assets/white-arrow-transparent.png" className="arrow right" alt="" onClick={()=>handleClick()} />
            
        </div>
    )
}
