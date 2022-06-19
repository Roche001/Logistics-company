import React from "react";
import "./Footer.css";
import { GiFrayedArrow } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="footer" className="container-fluid">
      <div className="container-one row">
        <div className="reach-out col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h5>Want to Get a Free Consultation? Let Us Know! </h5>
        </div>
        <div className="us col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <a href="#contact">Reach Out</a>
        </div>
      </div>
      <div className="container-two row">
        <div className="information col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
          <div className="logo-img">
            <div className="picture">
              <img src="./assets/logo2.png" alt="logo" />
            </div>
            <div className="picture2">
              <h3>Andelles Logistics</h3>
              <h6>International Transportation & Logistics</h6>
            </div>
          </div>
        </div>
        <div className="information col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
          <h4>Information</h4>
          <div className="spanner">
            <h5>
              <span>
                <GiFrayedArrow />
              </span>
              Home
            </h5>
          </div>
          <div className="spanner">
            <h5>
              <span>
                <GiFrayedArrow />
              </span>
              About
            </h5>
          </div>
          <div className="spanner">
            <h5>
              <span>
                <GiFrayedArrow />
              </span>
              Services
            </h5>
          </div>
          <div className="spanner">
            {" "}
            <h5>
              <span>
                <GiFrayedArrow />
              </span>
              Logistics
            </h5>
          </div>
          <div className="spanner">
            {" "}
            <h5>
              <span>
                <GiFrayedArrow />
              </span>
              Career
            </h5>
          </div>
          <div className="spanner">
            {" "}
            <h5>
              <span>
                <GiFrayedArrow />
              </span>
              Team
            </h5>
          </div>
        </div>

        <div className="information col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
          <div className="phone-number">
            <h4>Contact us</h4>
            <p>
              Washington, USA 6036 Richmond,
              <br /> hwy., Alexandria, VA, 2233
            </p>
            <p>Phone +1(409)987 5874</p>
            <h6>info@andelesslogistics.org</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
