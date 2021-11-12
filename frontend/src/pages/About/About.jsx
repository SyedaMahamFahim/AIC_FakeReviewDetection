import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import './about.css'
const About = () => {
    return (
        <>
           <Banner pageName="About" pageLink="/about"/>
           <div className="container">
               <div className="row">
                   <h1 className="text-center">
                       About
                   </h1>
                   <h2 className="text-center">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                   </h2>
               </div>
           </div>
           <section className="about">
           <div className="about-section-container">
                <div className="about-section-row">
                    <div className="about-section-img" >
                        <img src="https://blog.hubspot.com/hubfs/about-page.jpg" alt="aic-logo" className="about-img" />
                    </div>
                    <div className="about-section-detail" >
                        <p className="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.
                        </p>
                        <ul className="about-ul">
                            <li className="about-li"><strong>Model: </strong> Haniya</li>
                            <li className="about-li"><strong>Frontend: </strong> Syeda Maham Fahim</li>
                            <li className="about-li">Lorem ipsum dolor sit amet.</li>
                        </ul>
                        <button type="button" className="btn btn-primary mt-5">
                            <Link to="/team">Read More</Link>
                            
                            </button>

                     

                    </div>
                </div>
            </div>
           </section>
        </>
    )
}

export default About
