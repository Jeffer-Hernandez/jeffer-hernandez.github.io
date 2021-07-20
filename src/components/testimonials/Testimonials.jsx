import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Alex Kalinski",
            title: "Co-Founder of Delka",
            img: 
            "assets/man-with-cigarette.jpeg",
            icon: "assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum quasi reprehenderit sint ratione et consectetur velit voluptate." 
        },
        {
            id: 2,
            name: "Jerry Rosenzweig",
            title: "Director at BNY Mellon",
            img: 
            "assets/man-with-cigarette.jpeg",
            icon: "assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum quasi reprehenderit sint ratione et consectetur velit voluptate.",
            featured: true,
        },
        {
            id: 3,
            name: "Yesenia Lopez-Hernandez",
            title: "Community Manger at Gotham Real Estate",
            img: 
            "assets/man-with-cigarette.jpeg",
            icon: "assets/youtube.png",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum quasi reprehenderit sint ratione et consectetur velit voluptate." 
        },

    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">

                {data.map((d) => (


                
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img className="left" src="assets/very-thin-right-arrow.png" alt="" />
                            <img className="user" src={d.img} alt="" />
                            <img className="right" src={d.icon} alt="" />
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <h3>{d.name}</h3>
                            <h4>{d.title}</h4>
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    )
}
