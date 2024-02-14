import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import Profile from "../assets/images/nav-profile.jpg";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary d-flex flex-column align-items-center sticky-top min-vh-100">
      <div className="d-flex flex-column align-items-center nav-image"></div>
      <p className="nav-headTitle mt-4 mb-0">JANNY STANBRIDGE</p>
      <p className="nav-headSubTitle text-white"> janny@company.com</p>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="flex-column">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about-me">About</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#experience_education">Experience</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <div className="mt-auto nav-copyright">
        <p className="text-white mb-0">© Idea2code. All rights reserved.</p>
      </div>
    </Navbar>
  );
}

export default Header;
