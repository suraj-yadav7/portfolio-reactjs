import React from 'react'
import {motion} from "framer-motion"

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
    }
  }

  return (
    <>
    <div id="home">
        <section>
          <div>
            <motion.h1 {...animation,h1} >
              Hi guys, <br/> Suraj Kumar Yadav
            </motion.h1>
          </div>
        </section>

        <section></section>
    </div>
    </>
  )
}

export default Home
