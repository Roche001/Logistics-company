import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <div className="services">
        <div className="services-header">
          <h3>Our Services</h3>
        </div>
      </div>
      <div className="logistics-services">
        <p>
          With our extensive knowledge of logistics and transport systems as
          well as 30 years of <br /> experience, we will find the best solution
          for you.
        </p>
        <small>
          We make sure your cargo will get there: on time, safely, and on
          budget. Do not worry about the world becoming more and more complex{" "}
          <br />
          and transportation requirements increasing every day. We will take
          care of it all, every step of the way.
        </small>
      </div>
      <div className="offerings-container">
        <div className="offering-container-one">
          <div className="offering-container-img">
            <img src="./assets/road1.jpeg" alt="road" />
          </div>
          <div className="offering-container-text">
            <h3>ROAD TRANSPORTATION</h3>
            <p>
              Delivery of full load, part load and group page shipments.
              <br />
              We will always find room on our trucks for your cargo.
            </p>
            <small>
              We always handle your single shipments and your frequent
              deliveries <br /> with equal amount of professionalism and
              commitment. In our day-to-day <br />
              operations, we constantly work on making our procedures more
              efficient and <br />
              reducing the strain on the environment without compromising
              quality and service.
            </small>
            <div className="btn">Read More</div>
          </div>
        </div>
        <div className="offering-container-one">
          <div className="offering-container-text">
            <h3>SEA FREIGHT</h3>
            <p>
              Our company’s sea services provide much more than the average
              logistics company. <br /> Sea is faster, safer.
            </p>
            <small>
              We always handle your single shipments and your frequent
              deliveries <br /> with equal amount of professionalism and
              commitment. In our day-to-day <br />
              operations, we constantly work on making our procedures more
              efficient and <br />
              reducing the strain on the environment without compromising
              quality and service.
            </small>
            <div className="btn">Read More</div>
          </div>
          <div className="offering-container-img">
            <img src="./assets/road2.jpeg" alt="road" />
          </div>
        </div>
        <div className="offering-container-one">
          <div className="offering-container-img">
            <img src="./assets/road3.jpeg" alt="road" />
          </div>
          <div className="offering-container-text">
            <h3>AIR FREIGHT</h3>
            <p>
              Not all cargo can travel by road. <br />
              When you need to make it fly, we make it fly for you.
            </p>
            <small>
              We always handle your single shipments and your frequent
              deliveries <br /> with equal amount of professionalism and
              commitment. In our day-to-day <br />
              operations, we constantly work on making our procedures more
              efficient and <br />
              reducing the strain on the environment without compromising
              quality and service.
            </small>
            <div className="btn">Read More</div>
          </div>
        </div>
        <div className="offering-container-one">
          <div className="offering-container-text">
            <h3>LOGISTICS SOLUTIONS</h3>
            <p>
              Our company’s sea services provide much more than the average
              logistics company. <br /> Sea is faster, safer.
            </p>
            <small>
              We always handle your single shipments and your frequent
              deliveries <br /> with equal amount of professionalism and
              commitment. In our day-to-day <br />
              operations, we constantly work on making our procedures more
              efficient and <br />
              reducing the strain on the environment without compromising
              quality and service.
            </small>
            <div className="btn">Read More</div>
          </div>
          <div className="offering-container-img">
            <img src="./assets/road4.jpeg" alt="road" />
          </div>
        </div>
        <div className="offering-container-one">
          <div className="offering-container-img">
            <img src="./assets/road5.jpeg" alt="road" />
          </div>
          <div className="offering-container-text">
            <h3>LOGISTICS SOLUTIONS</h3>
            <p>
              Not all cargo can travel by road. <br />
              When you need to make it fly, we make it fly for you.
            </p>
            <small>
              We always handle your single shipments and your frequent
              deliveries <br /> with equal amount of professionalism and
              commitment. In our day-to-day <br />
              operations, we constantly work on making our procedures more
              efficient and <br />
              reducing the strain on the environment without compromising
              quality and service.
            </small>
            <div className="btn">Read More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
