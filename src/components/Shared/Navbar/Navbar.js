import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Navbar.css";
import logo from "../../../image/Ash logo-01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIntercom } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import PopOver from "../PopOver/PopOver";

const NavBar = () => {
  const { user } = useContext(UserContext);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const scrollTop = () => window["scrollTo"]({ top: 0, behavior: "smooth" });
  return (
    <Navbar
      className={`navbar navbar-expand-lg navbar-dark ${
        isSticky ? "navStyle" : "navDefault"
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          exact
          to="/"
          onClick={scrollTop}
          className="navBrn"
        >
          {/* <FontAwesomeIcon icon={faIntercom} className="brnIcon"/> */}
          <img
            style={{ width: "100%", height: "90px" }}
            src={logo}
            alt=""
            loading="lazy"
          />
          {/* Ash<span className="navHighlight">Interior</span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mainNav" activeKey="/home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                exact
                to="/"
                className="nav-link"
                onClick={() =>
                  window["scrollTo"]({ top: 0, behavior: "smooth" })
                }
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#services" className="nav-link">
                Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#testimonial" className="nav-link">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" className="nav-link">
                Contact Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/dashboard" className="nav-link">
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/login" className="nav-link">
                Login
              </Nav.Link>
              {/* {user.email ? (
                <PopOver />
              ) : (
                <Link to="/login" key="login">
                  <button className="loginBtn">Login</button>
                </Link>
              )} */}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
