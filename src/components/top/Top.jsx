import React from "react";
import "./Top.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Top = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container-fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <nav className="navbar">
              <ul className="nav-items">
                <Nav.Link>
                  {" "}
                  <Link
                    to="/"
                    className="link"
                    onClick={() => setActiveNav("/")}
                    id={activeNav === "/" ? "active" : ""}
                  >
                    <li>HOME</li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/About"
                    className="link"
                    onClick={() => setActiveNav("/About")}
                    id={activeNav === "/About" ? "active" : ""}
                  >
                    <li>ABOUT</li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/Services"
                    className="link"
                    onClick={() => setActiveNav("/Services")}
                    id={activeNav === "/Services" ? "active" : ""}
                  >
                    <li>SERVICES</li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/Logistics"
                    className="link"
                    onClick={() => setActiveNav("/Logistics")}
                    id={activeNav === "/Logistics" ? "active" : ""}
                  >
                    <li>LOGISTICS</li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/Career"
                    className="link"
                    onClick={() => setActiveNav("/Career")}
                    id={activeNav === "/Career" ? "active" : ""}
                  >
                    <li>CAREER</li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/Team"
                    className="link"
                    onClick={() => setActiveNav("/Team")}
                    id={activeNav === "/Team" ? "active" : ""}
                  >
                    <li>TEAM </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/Price"
                    className="link"
                    onClick={() => setActiveNav("/Price")}
                    id={activeNav === "/Price" ? "active" : ""}
                  >
                    <li>PRICE</li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to="/Location"
                    className="link"
                    onClick={() => setActiveNav("/Location")}
                    id={activeNav === "/Location" ? "active" : ""}
                  >
                    <li>LOCATION</li>
                  </Link>
                </Nav.Link>
              </ul>
            </nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top;
