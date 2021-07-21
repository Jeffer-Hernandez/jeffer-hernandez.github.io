import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Vaino Narma",
            title: "CMO at BNY Mellon",
            img: 
            "assets/Vaino Narma.jpeg",
            icon: "assets/linkedin.png",
            desc: "Jeff is a curious, analytical thinker. I'm looking forward to seeing his growth." 
        },
        {
            id: 2,
            name: "Jerry Rosenzweig",
            title: "Director at BNY Mellon",
            img: 
            "assets/Jerry Rosenzweig.jpeg",
            icon: "assets/linkedin.png",
            desc: "I mentored Jeff during the Spring semester. He's very driven, and I'm confident he will thrive in the years to come.",
            featured: true,
        },
        {
            id: 3,
            name: "Remysell Salas",
            title: "Strategist & Professor",
            img: 
            "assets/remysell salas.jpeg",
            icon: "assets/linkedin.png",
            desc: "Jeff was a pleasure to have in my class!" 
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
