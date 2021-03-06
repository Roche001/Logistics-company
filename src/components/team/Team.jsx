import React from "react";
import "./Team.css";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <section id="team" data-aos="zoom-in-up">
      <div className="team">
        <div className="team-header">
          <h4>Our Team</h4>
        </div>
      </div>
      <div className="container-fluid">
        <div className="team-text row">
          <h5>
            Join Team of Professionals - Become a Part of Andelles Logistics
            Solutions{" "}
          </h5>
          <p>
            {" "}
            cherish active specialists willing to work on our company. If you
            are enthusiastic about transportation and ready to make impactful{" "}
            <br />
            decisions, feel free to send us your CV. We are interested in hiring
            professionals for a long term.
          </p>
        </div>
        <div className="team-container row">
          <div className="team-members col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="team-members-text">
              <img
                className="img-responsive"
                src="./assets/driver1.jpeg"
                alt="driver"
                data-aos="zoom-in-up"
              />
              <h4>Donald McCullin</h4>
              <p>Operations Manager</p>
            </div>
            <div className="team-members-social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram />
              </a>
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="team-members col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="team-members-text">
              <img
                className="img-responsive"
                src="./assets/driver2.jpeg"
                alt="driver"
                data-aos="zoom-in-up"
              />
              <h4>Erika Michaelson</h4>
              <p>Logistics Coordinator</p>
            </div>
            <div className="team-members-social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram />
              </a>
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="team-members col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="team-members-text">
              <img
                className="img-responsive"
                src="./assets/driver3.jpeg"
                alt="driver"
                data-aos="zoom-in-up"
              />
              <h4>Bill While</h4>
              <p>Driver</p>
            </div>
            <div className="team-members-social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram />
              </a>
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
          <div className="team-members col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
            <div className="team-members-text">
              <img
                className="img-responsive"
                src="./assets/driver4.jpeg"
                alt="driver"
                data-aos="zoom-in-up"
              />
              <h4>Jeremy Gregson</h4>
              <p>Driver</p>
            </div>
            <div className="team-members-social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram />
              </a>
              <a
                href="https://twitter.com/i/flow/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
