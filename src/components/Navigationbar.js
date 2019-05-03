import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Sitemetadata from "./sitemetadata";
import "./navbarCSS.css";

const textStyle = {
  color: `black`,
  fontSize: `17px`,
  marginRight: `6px`,
  fontFamily: `Montserrat`
};

const logoStyle = {
  color: `black`,
  letterSpacing: `2px`,
  marginLeft: `30px`,
  fontFamily: `Montserrat`,
  fontWeight: `bold`,
  fontSize: `2em`
};

const NavigationBar = () => (
  <div>
    <Sitemetadata />
    <Navbar collapseOnSelect expand="lg" bg="white">
      <Navbar.Brand href="/" style={logoStyle}>
        ZAIRZA
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/projects" className="navbarStyle" style={textStyle}>
            PROJECTS
          </Nav.Link>
          <Nav.Link href="/team" className="navbarStyle" style={textStyle}>
            MEET THE TEAM
          </Nav.Link>
          <Nav.Link href="/about" className="navbarStyle" style={textStyle}>
            SESSIONS
          </Nav.Link>
          <Nav.Link href="/alumni" className="navbarStyle" style={textStyle}>
            ALUMNI
          </Nav.Link>
          <Nav.Link href="/faqs" className="navbarStyle" style={textStyle}>
            FAQs
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavigationBar;
