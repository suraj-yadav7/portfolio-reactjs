import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import {React,useRef} from 'react'
import { animate, motion } from "framer-motion"
// import { Typewriter} from 'typewriter-effect'
import me from "../assets/me.png"


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
              Hi i'm, <br /> Suraj Kumar Yadav
            </motion.h1>

            {/* <Typewriter options={{
              strings:["A developer", "A Designer"],
              autoStart: true,
              loop: true,
              wrapperClassName:"typewriterpara"
              
            }} />  */}


            <div>
              <a href="mailto:surajkumar@gmail.com">Hire me</a>
              <a href="#work">Projects <BsArrowUpRight /></a>
            </div>

            <article>
              <p>
                +<motion.span whileInView={animationClientCount} ref={clientCount}>30</motion.span>
              </p>
              <span>Project Completed</span>
            </article>

            <aside>
              <article>
                <p>
                  +<motion.span ref={projectCount} whileInView={animationProjectCount}>100</motion.span>
                </p>
                <span>Problems Solved</span>
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
          <img src={me} alt="myimage"></img>
        </section>
      </div>
    </>
  )
}

export default Home

