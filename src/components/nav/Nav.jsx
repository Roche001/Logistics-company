import React from "react";
import "./Nav.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <nav className="navbar">
        <ul className="nav-items">
          <Link
            to="/"
            className="link"
            onClick={() => setActiveNav("/")}
            id={activeNav === "/" ? "active" : ""}
          >
            <li>HOME</li>
          </Link>
          <Link
            to="/About"
            className="link"
            onClick={() => setActiveNav("/About")}
            id={activeNav === "/About" ? "active" : ""}
          >
            <li>ABOUT</li>
          </Link>
          <Link
            to="/Services"
            className="link"
            onClick={() => setActiveNav("/Services")}
            id={activeNav === "/Services" ? "active" : ""}
          >
            <li>SERVICES</li>
          </Link>
          <Link
            to="/Logistics"
            className="link"
            onClick={() => setActiveNav("/Logistics")}
            id={activeNav === "/Logistics" ? "active" : ""}
          >
            <li>LOGISTICS</li>
          </Link>
          <Link
            to="/Career"
            className="link"
            onClick={() => setActiveNav("/Career")}
            id={activeNav === "/Career" ? "active" : ""}
          >
            <li>CAREER</li>
          </Link>
          <Link
            to="/Team"
            className="link"
            onClick={() => setActiveNav("/Team")}
            id={activeNav === "/Team" ? "active" : ""}
          >
            <li>TEAM </li>
          </Link>
          <Link
            to="/Price"
            className="link"
            onClick={() => setActiveNav("/Price")}
            id={activeNav === "/Price" ? "active" : ""}
          >
            <li>PRICE</li>
          </Link>
          <Link
            to="/Location"
            className="link"
            onClick={() => setActiveNav("/Location")}
            id={activeNav === "/Location" ? "active" : ""}
          >
            <li>LOCATION</li>
          </Link>
        </ul>
      </nav>
    </Navbar>
  );
};

export default Nav;
