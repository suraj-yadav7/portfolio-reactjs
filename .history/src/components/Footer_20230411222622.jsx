import React from "react";
import mypic from "../assets/mypic.jpg"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={mypic}
          alt="Founder"
        />

        <h2>Suraj Kumar</h2>
        <p>Make it work, make it right, make it fast.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/suraj-yadav7/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/suraj-yadav7" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;