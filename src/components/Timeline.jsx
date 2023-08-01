import React from "react";

const Timeline=()=>{
    const data = [
        {
            "date":"20/02/2023",
            "title" : "Weather Webapp",
            "description" : "This project is a weather web application built using React.js, Axios, and the OpenWeatherMap API. It allows users to easily check the weather conditions for any location around the world. Key Features: User-friendly interface for seamless navigation and interaction.",
            "url" : "https://weatherapp-liard-ten.vercel.app/",
        },
        {
            "date":"15/03/2023",
            "title" : "iCart",
            "description" : "This project is built on cart functionality. It has eCommerce layout with list of product with price. user can add product, delete products.",
            "url" : "https://icart-five.vercel.app/",
        },
        {
            "date":"15/03/2023",
            "title" : "IMDb clone",
            "description" : "This webapp is build using JavaScript, React Js ,Redux toolkit, Restful API. It fetch the latest movie data from TMDB Database and provides movie info like, rating, release date, summary, etc on the website. These website has different categories like Popular, Top Rated, Upcoming.",
            "url" : "https://imdb-clone-alpha.vercel.app/",
        },
        {
            "date":"15/03/2023",
            "title" : "eCommerce",
            "description" : "Ecommerce is a full-stack web application built using ReactJS, Redux Toolkit, Strapi, and Stripe Payment. It provides a seamless online shopping experience with features like product browsing, cart management, user authentication, and secure payment processing. ",
            "url" : "https://github.com/suraj-yadav7/ecommerce",
            "imgSrc" : "https://blog.magezon.com/wp-content/uploads/2023/02/website-shopping-cart-page.png"
        }

        
    ]

    return(
        <>
        <div id="timeline">
            <div className="timelineBox">
                    {
            data.map((item,index)=>(
                <TimelineItem heading={item.title} index={index} key={index }/>
                ))    
            }
            </div>
        </div>
        </>
    )
}

const TimelineItem =({heading,index})=>(
  
        <>
    <div className={`timelineItem ${index%2===0?"leftTimeline":"rightTimeline"}`}> 
    <div>
        <h1>{heading}</h1>
    </div>

    </div>
    </>
    )
    



export default Timeline;