

import React from "react"

const Header = ()=>{
    return(
        <nav>
            <NavContent/>
        </nav>
    )
};

const NavContent = () =>{
    return(

        <>
        <h2>My Portfolio</h2>
        <div>
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#services">Service</a>
            <a href="#contact">Contact</a>
        </div>
        <a href="mailto: official.surajkumar@gmail.com">
            <button>Email</button>
        </a>
        </>
        )
}


export default Header;