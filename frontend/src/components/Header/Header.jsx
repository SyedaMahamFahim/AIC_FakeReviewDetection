import React from "react";
import { Link } from "react-router-dom";
import NavData from "../../Data/NavData";
import "./header.css";
const Headers = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: "#6351CE" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            AIC-Fake Review Detection
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">

              {NavData.map((navLinks, index) => {
                return (
                  <>
                    <NavLinkComponent navLinks={navLinks} key={index} />
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavLinkComponent = ({ navLinks }) => {
  return (
    <>
      <li className="nav-item">
        <Link to={navLinks.url} className="nav-link">
          {navLinks.title}
        </Link>
      </li>
    </>
  );
};
export default Headers;
