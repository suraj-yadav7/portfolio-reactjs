import React from 'react'
import {motion} from "framer-motion"
// import { Typewriter} from 'typewriter-effect'
import me from "../assets/suraj.jpg"


const Home = () => {

  const animation ={
    h1:{
      initial:{
        x:"-100%",
        opacity:0
      },
      whileInView:{
        x:0,
        opacity:1
      }
    },
    button:{
      initial:{
        y:"-100%",
        opacity:0
      },
      whileInView:{
        y:0,
        opacity:1
      }
    }
  }

  return (
    <>
    <div id="home">
        <section>
          <div>
            <motion.h1 {...animation.h1} >
              Hi guys, <br/> Suraj Kumar Yadav
            </motion.h1>

            {/* <Typewriter options={{
              strings:["A developer", "A Designer"],
              autoStart: true,
              loop: true,
              wrapperClassName:"typewriterpara"
              
            }} /> */}
            

            <div>
              <a href="mailto:surajkumar@gmail.com">Hire me</a>
              <a href="#work">Projects</a>
            </div>

          <article>
            <p>
              +<span>100</span>
            </p>
            <span>Client Worldwide</span>
          </article>

          <aside>
          <article>
            <p>
              +<span>5000</span>
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
          <img src={me} alt="myimage"></img>
        </section>
    </div>
    </>
  )
}

export default Home
