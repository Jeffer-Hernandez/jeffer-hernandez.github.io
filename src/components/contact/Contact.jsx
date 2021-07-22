import {useState} from "react";
import "./contact.scss"

export default function Contact() {

    const [status, setStatus] = useState("Submit");
    const [message,setMessage] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
          name: name.value,
          email: email.value,
          message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        // alert(result.status);


        setInputValue("")
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
                    <input type="text" id="name" placeholder="Name" />
                    <input type="email" id="email" placeholder="Email" />   
                    <textarea id="message" placeholder="Message" value={inputValue} onChange={handleUserInput} ></textarea>
                    <button type="submit">Send</button>
                    {message && <span> Thanks! I will reply ASAP :)</span>}
                </form>
            </div>

        </div>
    )
}
