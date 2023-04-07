
import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Abhishek Singh
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.6packprogrammer@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    500
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>official.6packprogrammer@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Abhishek" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home



/*
import {React,useRef} from 'react'
import { animate, motion } from "framer-motion"
// import { Typewriter} from 'typewriter-effect'
import me from "../assets/suraj.jpg"


const Home = () => {

  const clientCount = useRef(null)
  const projectCount = useRef(null)

  const animationClientCount = ()=>{
        animate(0,100,{
          duration: 1,
          onUpdate:(v)=>(clientCount.current.textContent=v.toFixed())
        })
  }

  
  const animationProjectCount = ()=>{
    animate(0,500,{
      duration: 1,
      onUpdate:(v)=>(projectCount.current.textContent=v.toFixed())
    })
}

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0
      },
      whileInView: {
        y: 0,
        opacity: 1
      }
    }
  }

  return (
    <>
      <div id="home">
        <section>
          <div>
            <motion.h1 {...animation.h1} >
              Hi guys, <br /> Suraj Kumar Yadav
            </motion.h1>

            <Typewriter options={{
              strings:["A developer", "A Designer"],
              autoStart: true,
              loop: true,
              wrapperClassName:"typewriterpara"
              
            }} /> 


            <div>
              <a href="mailto:surajkumar@gmail.com">Hire me</a>
              <a href="#work">Projects</a>
            </div>

            <article>
              <p>
                +<motion.span whileInView={animationClientCount} ref={clientCount}>100</motion.span>
              </p>
              <span>Client Worldwide</span>
            </article>

            <aside>
              <article>
                <p>
                  +<motion.span ref={projectCount} whileInView={animationProjectCount}>5000</motion.span>
                </p>
                <span>Projects done</span>
              </article>
            </aside>

            <article>
              <p>
                Contact</p>
              <span>Official.surajkumar</span>
            </article>
          </div>
        </section>

        <section>
          <img src="#" alt="myimage"></img>
        </section>
      </div>
    </>
  )
}

export default Home

*/