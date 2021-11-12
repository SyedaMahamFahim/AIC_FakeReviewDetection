import React from "react";
import Banner from "../../components/Banner/Banner";
import { GrLocation } from "react-icons/gr";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <Banner pageName="Contact" pageLink="/contact" />
      <div className="contactpage-titles">
        <h1 className="contactpage-title">Contact detail</h1>
      </div>
      <div className="contactpage-info">
        <div className="contact-address-info">
          <div className="contact-icons">
            {" "}
            <GrLocation />
          </div>
          <div className="contact-content">
            <h5 className="contact-content-titles">ADDRESS</h5>
            <p> 1800 Abbot Kinney Blvd. Unit D & E Venice</p>
          </div>
        </div>
        <div className="contact-address-info">
          <div className="contact-icons">
            {" "}
            <BiPhoneCall />
          </div>
          <div className="contact-content">
            <h5 className="contact-content-titles">Mobile</h5>
            <p> +(92) 03152624276</p>
          </div>
        </div>
        <div className="contact-address-info">
          <div className="contact-icons">
            {" "}
            <AiOutlineMail />
          </div>
          <div className="contact-content">
            <h5 className="contact-content-titles">Email</h5>
            <p> info@ned.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
