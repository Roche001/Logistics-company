import React from "react";
import "./Logistics.css";
import { MdDoubleArrow } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Logistics = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <section id="logistics" data-aos="fade-up-right">
      <div className="logistics">
        <div className="logistics-header">
          <p>Andelles Logistics Solutions</p>
          <h3>Logistics Solutions </h3>
        </div>
      </div>
      <div className="logistics-section">
        <div className="logistics-section-one">
          <p>
            Logistics - TransLogic logistics is able to handle your full <br />
            logistics flow from your manufacturing plant to your end <br />
            customer.
          </p>
          <small>
            We manage inbound transportation, receipt of goods, storage, <br />
            receipt of orders, pick / pack and distribution.
          </small>
          <div className="logistics-section-one-list">
            <h5>
              <span>
                <MdDoubleArrow />
              </span>
              Consumer products
            </h5>
            <h5>
              {" "}
              <span>
                <MdDoubleArrow />
              </span>
              Industrial
            </h5>
            <h5>
              <span>
                <MdDoubleArrow />
              </span>{" "}
              Automotive
            </h5>
            <h5>
              <span>
                <MdDoubleArrow />
              </span>{" "}
              Healthcare
            </h5>
            <h5>
              {" "}
              <span>
                <MdDoubleArrow />
              </span>
              High-tech
            </h5>
          </div>
        </div>
        <div className="logistics-section-one">
          <img src="./assets/solutions.jpg" alt="solutions" />
        </div>
      </div>
      <div className="logistics-section-two">
        <div className="logistics-section-two-img">
          <img src="./assets/warehouse.jpeg" alt="ware" />
        </div>
        <div className="logistics-section-two-text">
          <h3>Warehousing and storage</h3>
          <p>
            All of our storage facilities are equipped with climate control{" "}
            <br />
            and are certified for food storage.
          </p>
          <small>
            We offer both short-term and long-term storage options, and
            guarantee <br />
            the best conditions for your wares. This is combined with our wide
            range of flexible solutions.
          </small>
        </div>
      </div>
      <div className="logistics-section-three">
        <div className="logistics-section-three-text">
          <h3>Cargo Insurance</h3>
          <p>
            We provides protection against all risks of physical loss or damage{" "}
            <br />
            to freight from any external cause during shipping, whether by land,{" "}
            <br />
            sea or air.
          </p>
          <small>
            We handle all cargo with personal and professional care, but we also
            acknowledge <br />
            the risks of transportation. Our goal is not only to offer the best
            logistics solutions, <br />
            but also to cover the risk of unforeseen events.
          </small>
        </div>
        <div className="logistics-section-three-img">
          <img src="./assets/semi.jpeg" alt="semi" />
        </div>
      </div>
      <div className="logistics-section-three"></div>
    </section>
  );
};

export default Logistics;
