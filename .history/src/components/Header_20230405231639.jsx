nav {
    width: 100%;
    height: 100px;
    background-color: $color1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 $p;
    position: sticky;
    top: 0%;
    z-index: 60;
    > h2 {
      font-size: 2rem;
    }
    > div {
      display: flex;
      align-items: center;
      gap: 2rem;
      a {
        color: $color6;
        font-weight: 500;
        transition: all 0.3s;
        letter-spacing: 1px;
        &:hover {
          color: $color3;
        }
      }
    }
  
    > a > button {
      border: 1px solid $color6_1;
      padding: 0.5rem 2rem;
      background-color: $color1;
      cursor: pointer;
      color: $color6;
      letter-spacing: 1px;
      font-weight: 500;
      transition: all 0.3s;
      &:hover {
        background-color: $color6;
        color: $color4;
      }
    }
  }
  
  .navBtn {
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    color: $color5;
    font-size: 1.4rem;
    z-index: 150;
    position: fixed;
    top: 2rem;
    right: 2rem;
    display: none;
  
    &:hover {
      color: $color3;
    }
  }
  
  .navPhone {
    transition: all 0.5s;
    transform: translateY(-200%);
    width: 100%;
    height: 100vh;
    background-color: $color5;
    padding: $p_base;
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  
    > h2 {
      font-size: 2rem;
      color: $color4;
    }
  
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
  
      a {
        color: $color4;
        letter-spacing: 1px;
        font-weight: 500;
        transition: all 0.3s;
        &:hover {
          color: $color3;
        }
      }
    }
  
    > a > button {
      border: 1px solid $color6_1;
      padding: 0.5rem 2rem;
      background-color: $color1;
      cursor: pointer;
      color: $color6;
      letter-spacing: 1px;
      font-weight: 500;
      transition: 0.5s;
      &:hover {
        background-color: $color6;
        color: $color4;
      }
    }
  }
  
  .navPhoneComes {
    transform: translateY(0);
  }


/*
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

*/