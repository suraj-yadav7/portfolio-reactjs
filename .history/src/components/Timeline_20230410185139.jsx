import React from "react";
import data from "../assets/data.json"

const Timeline=()=>{
    return(
        <>
        <div id="timeline">
            <div className="timelineBox">
                <h3>The timeline div </h3>
                    {
            data.projects.map((item,index)=>(
                <TimelineItem heading={item.title} text={item.date} index={index} key={index }/>
                ))    
            }
            </div>
        </div>
        </>
    )
}


const TimelineItem =(heading,text,index)=>(
  
        <>
    <div className={`timelineItem ${index%2===0?"leftTimeline":"rightTimeline"}`}> 
        <h1>{heading}</h1>
        <p>{text}</p>

    </div>
    </>
    )
    



export default Timeline;