import React from "react";
import "./Top.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Top = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link
                className="link"
                to="/"
                onClick={() => setActiveNav("/")}
                id={activeNav === "/" ? "active" : ""}
              >
                <li>HOME</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link"
                to="/About"
                onClick={() => setActiveNav("/About")}
                id={activeNav === "/About" ? "active" : ""}
              >
                <li>ABOUT</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link"
                to="/Services"
                onClick={() => setActiveNav("/Services")}
                id={activeNav === "/Services" ? "active" : ""}
              >
                <li>SERVICES</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link"
                to="/Logistics"
                onClick={() => setActiveNav("/Logistics")}
                id={activeNav === "/Logistics" ? "active" : ""}
              >
                <li>LOGISTICS</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link"
                to="/Career"
                onClick={() => setActiveNav("/Career")}
                id={activeNav === "/Career" ? "active" : ""}
              >
                <li>CAREER</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link"
                to="/Team"
                onClick={() => setActiveNav("/Team")}
                id={activeNav === "/Team" ? "active" : ""}
              >
                <li>TEAM </li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link"
                to="/Price"
                onClick={() => setActiveNav("/Price")}
                id={activeNav === "/Price" ? "active" : ""}
              >
                <li>PRICE</li>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="link"
                to="/Location"
                onClick={() => setActiveNav("/Location")}
                id={activeNav === "/Location" ? "active" : ""}
              >
                <li>LOCATION</li>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Top;
