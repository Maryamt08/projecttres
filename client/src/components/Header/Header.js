import React from "react";
import Slideshow from "../Slideshow/Slideshow";

//import Typed from "react-typed";
import {Link} from "react-scroll";
////import "./Header.css";
const Header = () => {
    return (

        
       <div id="home" className="header-wraper" >
           <div className="main-info">
            
           
               
               {/* <Typed
               className="typed-text"
               strings={["Web Design", "Web Development", "Graphic Design", "Google Analytics", "Social Media Marketing"]}
               typeSpeed={20}
               backSpeed={60}
               loop
               /> */}
            {/* <Link smooth={true} to="SignIn" offset={-110} className="btn-main-offer">Log In</Link> */}
           </div>
           <Slideshow/>
       </div>
        
    )
}

export default Header;