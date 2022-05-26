import React from "react";
import "./Price.css";
import { BsSlashLg } from "react-icons/bs";

const Price = () => {
  return (
    <section id="pricing">
      <div className="pricing">
        <div className="pricing-header">
          <h4>Our Competitive Prices</h4>
        </div>
      </div>
      <div className="pricing-header">
        <h3>
          With our extensive knowledge of logistics and transport systems as
          well as 30 years of <br />
          experience, we will find the best solution for you.
        </h3>
        <p>
          We make sure your cargo will get there: on time, safely, and on
          budget. Do not worry about the world becoming
          <br /> more and more complex and transportation requirements
          increasing every day. We will take care of it all, every
          <br /> step of the way.
        </p>
      </div>
      <div className="price-container">
        <div className="price-categories">
          <h3>BASIC</h3>
          <h1>
            $230{" "}
            <small>
              <BsSlashLg />
              Mile
            </small>
          </h1>
          <p>2000 kg load</p>
          <p>925 kg / pallet</p>
          <p>Warehousing</p>
          <p>Free Packaging</p>
          <p>24/7 support</p>
          <a href="button" className="button">
            Select Option
          </a>
        </div>
        <div className="price-categories">
          <h3>STANDARD</h3>
          <h1>
            $360{" "}
            <small>
              <BsSlashLg />
              Mile
            </small>
          </h1>
          <p>3000 kg load</p>
          <p>825 kg / pallet</p>
          <p>Warehousing</p>
          <p>Free Packaging</p>
          <p>24/7 support</p>
          <a href="button" className="button">
            Select Option
          </a>
        </div>
        <div className="price-categories">
          <h3>GOLD</h3>
          <h1>
            $520{" "}
            <small>
              <BsSlashLg /> Mile
            </small>
          </h1>
          <p>4000 kg load</p>
          <p>625 kg / pallet</p>
          <p>Warehousing</p>
          <p>Free Packaging</p>
          <p>24/7 support</p>
          <a href="button" className="button">
            Select Option
          </a>
        </div>
        <div className="price-categories">
          <h3>PLATINUM</h3>
          <h1>
            $660{" "}
            <small>
              <BsSlashLg /> Mile
            </small>
          </h1>
          <p>5000 kg load</p>
          <p>425 kg / pallet</p>
          <p>Warehousing</p>
          <p>Free Packaging</p>
          <p>24/7 support</p>
          <a href="button" className="button">
            Select Option
          </a>
        </div>
      </div>
    </section>
  );
};

export default Price;
