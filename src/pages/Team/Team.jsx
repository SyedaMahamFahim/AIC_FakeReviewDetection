import React from 'react'
// import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import TeamData from '../../Data/TeamData'
import './team.css'
const Team = () => {
    return (
        <>
                       <Banner pageName="Our Team" pageLink="/team"/>
                       <section className="team-section">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h1>Our Team</h1>
                            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="team-items">
                            {
                                TeamData.map((val, index) => {
                                    return (
                                        <>
                                            <div className="item" key={index}>
                                                <img src={val.img} alt="team" />
                                                <div className="inner">
                                                    <div className="info">
                                                        <h5>{val.name}</h5>
                                                        <p>{val.title}</p>
                                                        <div className="social-links">
                                                            <a href="www.facebook.com" className="soical-links" >
                                                            {/* <FaFacebookSquare /> */}
                                                            </a>
                                                            <a href="www.facebook.com" className="soical-links" >
                                                            {/* <FaInstagram/> */}
                                                            </a>
                                                            <a href="www.facebook.com" className="soical-links" >
                                                            {/* <FaLinkedinIn/> */}
                                                            </a>
                                                            <a href="www.facebook.com" className="soical-links" >
                                                            {/* <FaMediumM/> */}
                                                            </a>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Team
