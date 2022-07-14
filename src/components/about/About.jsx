import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <section id="about" data-aos="zoom-in">
      <div className="about-header">
        <div className="about-header-one">
          <p>Andelles Logistics Solutions </p>
          <h3>About Us</h3>
        </div>
      </div>
      <div className="mission container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
            <div
              className="mission-global "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h3>0.1 GLOBAL</h3>
              <h5>We are distributing our services across the globe</h5>
              <p>
                We span major hubs on all continents providing a seamless supply
                chain solution focused on quality systems throughout. We operate
                strategically located transportation, distribution and
                value-added service centers throughout North America, Europe and
                Asia.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
            <div
              className="mission-global  "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h3>0.2 VISION</h3>
              <h5>We have a unique philosophy and protect it</h5>
              <p>
                Our culture is tuned to exceeding every customer’s expectations
                while providing a place for employees to build their careers and
                prosper. Our environment breeds success, and you’ll notice our
                people move faster, work harder and are better rewarded than the
                competition.
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 ">
            <div
              className="mission-global "
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h3>0.3 MISSION</h3>
              <h5>We are adding value to each step of your supply chain</h5>
              <p>
                Our job is to make sure that from raw material to finished
                goods, to returns management, we provide the critical services
                and information necessary to We then build a solution customized
                to your cost and service requirements using all possible
                information and our proven experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="glance container">
        <div className="row text-center">
          <div className="glance-head">
            <h3>Our Organization at glance</h3>
          </div>
        </div>

        <div className="glance-about row">
          <div className="glance-about-img col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img
              className="d-block w-100"
              src="./assets/logo2.png"
              alt="glance"
            />
          </div>
          <div className="glance-about-para col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <p>
              Our transportation company with 30 years of experience is you best
              choice for shipping cargo of any size, storage, packing or
              delivering wares to your customers. Our professional employees
              will take care of your goods, whenever you send them. You are
              granted complete control over the process of delivery by phone or
              by our mobile app. Your freight is tracked every step of the way.
              We provide a high standard of shipping, regardless of its volume.
              If your company needs to establish a supply chain, we have
              prepared several readymade solutions with flexible pricing rates
              for you. Our urgent cargo services offer defined time frames for
              convenience of your business. Our supply chain services include
              shipping, warehousing, packaging, quality control and
              distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
