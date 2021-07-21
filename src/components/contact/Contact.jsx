import {useState} from "react";
import "./contact.scss"

export default function Contact() {

    const [message,setMessage] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
        
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/handshake_heart.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" onChange={(e) => setMessage(e.target.value)}/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span> Thanks! I will reply ASAP :)</span>}
                </form>
            </div>

        </div>
    )
}
