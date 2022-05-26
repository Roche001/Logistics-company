import React from "react";
import "./Footer.css";
import { GiFrayedArrow } from "react-icons/gi";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container-one">
        <div className="reach-out">
          <h5>Want to Get a Free Consultation? Let Us Know! </h5>
        </div>
        <div className="us">
          <a href="#contact">Reach Out</a>
        </div>
      </div>
      <div className="container-two">
        <div className="information">
          <div className="logo-img">
            <div className="picture">
              <img src="./assets/logo2.png" alt="logo" />
            </div>
            <div className="picture2">
              <h3>Andelles Logistics</h3>
              <h6>International Transportation & Logistics</h6>
            </div>
          </div>
          <div className="picture3">
            {" "}
            <p>
              Andelles Logistics is a leading logistics company <br /> that
              delivers customized supply chain solutions <br />
              and all related services to meet the unique <br /> logistics needs
              of our customers.
            </p>
          </div>
        </div>
        <div className="information">
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
          <div className="spanner">
            {" "}
            <h5>
              <span>
                <GiFrayedArrow />
              </span>
              Price
            </h5>
          </div>
          <div className="spanner">
            {" "}
            <h5>
              <span>
                <GiFrayedArrow />
              </span>
              Location
            </h5>
          </div>
          <div className="spanner">
            {" "}
            <h5>
              <span>
                <GiFrayedArrow />
              </span>
              News
            </h5>
          </div>
          <div className="spanner">
            {" "}
            <h5>
              <span>
                <GiFrayedArrow />
              </span>
              Contacts
            </h5>
          </div>
        </div>

        <div className="information">
          <div className="phone-number">
            <h4>Contact us</h4>
            <p>
              Washington, USA 6036 Richmond,
              <br /> hwy., Alexandria, VA, 2233
            </p>
            <p>Phone +1(409)987 5874</p>
            <h6>info@andelesslogistics.org</h6>
          </div>
          <div className="social">
            <h4>Social Media Handles</h4>
            <a href="facebook">
              {" "}
              <BsFacebook />
            </a>
            <a href="Instagram">
              <BsInstagram />
            </a>
            <a href="Twitter">
              <FiTwitter />
            </a>
            <a href="Linked">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
