import React from "react";
import "./header.css";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavData from "../../Data/NavData";
const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ background: "#6351CE" }}
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>AIC-Fake Review Detection</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {NavData.map((navLinks, index) => {
                return (
                  <>
                    <NavLinkComponent navLinks={navLinks} key={index} />
                  </>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

const NavLinkComponent = ({ navLinks }) => {
  return (
    <>
      <LinkContainer to={navLinks.url}>
        <Nav.Link>{navLinks.title}</Nav.Link>
      </LinkContainer>
    </>
  );
};
export default Header;
