import "./topbar.scss"
import {Person, Mail, LinkedIn, GitHub} from "@material-ui/icons"
import AccountBoxIcon from '@material-ui/icons/AccountBox';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")} >
            <div className="wrapper">
                <div className="left">
                    
                    <a href="#intro" className="logo">jeff.</a>

                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span> (347) 422-4001 </span>
                    </div>


                    <div className="itemContainer" href="#contact">
                        
                        <a href="#contact">
                            <Mail className="icon"/>
                            <span  >jefferhernandez92@gmail.com </span>
                        </a> 
                    </div>

                    <a href="https://www.linkedin.com/in/jeffer-hernandez/">
                            <LinkedIn className="icon"/>
                    </a>        
                    
                    <a href="https://github.com/Jeffer-Hernandez">
                        <GitHub className="icon"/>
                    </a>

                    <a href="https://drive.google.com/file/d/1gYZgbEzvfEcp4h32U9f06Eze7iQBMqjd/view?usp=sharing">
                        <AccountBoxIcon className="icon"/>
                    </a>
            
                </div>

                <div className="right">

                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>

                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>

                    </div>

                </div>

            </div>
            
        </div>
    )
}
