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
        <h2>Suraj Kumar Yadav</h2>
        <div>
            <a href="#home">Home</a>
            <a href="#work">work</a>
            <a href="#timeline">Experience</a>
            <a href="#service">service</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#Contact">Contact</a>
        </div>
        <a href="mailto: official.surajkumar@gmail.com">
            <button>Email</button>
        </a>
        </>
        )
}


export default Header;