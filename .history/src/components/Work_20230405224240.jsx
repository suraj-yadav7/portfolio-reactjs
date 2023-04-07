import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import data from "../assets/data.json"

const Work = () => {
  return (
  <>
  <div className='work'>
    <h2>Work</h2>
    <section>
        <article>
            <Carousel>
                {
                    data.projects.map(i=>(
                        <div key={i.key} className="workItem">
                            <img src={i.imgSrc} href={i.title}/>
                            <aside>
                                <h3>{i.title}</h3>
                                <p>{i.description}</p>
                                <a href={i.url} target="blank"> view demo </a>
                            </aside>
                        </div>
                    ))
                }
            </Carousel>
        </article>
    </section>
  </div>
  </>
  )
}

export default Work
