import React, { useState } from "react";
import "./Home.css";
import { ImRocket } from "react-icons/im";
import { RiCustomerServiceFill } from "react-icons/ri";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiPriceTagFill } from "react-icons/ri";
import { GrStar } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineTimerOff } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Home = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <section id="home">
      <div className="home-photo">
        <div className="overlay"></div>
        <div className="home-photo-def">
          <h3> Andelles Logistics</h3>
          <p>Reliable Trucking and Transportation Services.</p>
          <small>Logistic Solutions for Your Successful Business</small>
        </div>
      </div>
      <div className="selection">
        <div className="selection-a">
          <h4>Why Choose Us?</h4>
        </div>

        <div className="choose-us">
          <div className="choose-a">
            <span>
              <ImRocket />
            </span>
            <h4>Quick Delivery</h4>
            <p>
              Cooperating with Andelles Logistics Solutions you are guaranteed
              to have your cargo delivered fast and secure.
            </p>
          </div>
          <div className="choose-a">
            <span>
              <RiCustomerServiceFill />
            </span>
            <h4>24/7 Support</h4>
            <p>
              We provide you with 24/7 support, which gives you an opportunity
              to track your cargo on its way.
            </p>
          </div>
          <div className="choose-a">
            <span>
              {" "}
              <RiSecurePaymentFill />
            </span>
            <h4>Secured Services</h4>
            <p>
              We provide all our clients with professional transportation
              services on the highest security level.
            </p>
          </div>
          <div className="choose-a">
            <span>
              <RiPriceTagFill />
            </span>
            <h4>Affordable Prices</h4>
            <p>
              We have the lowest prices on the market and offer affordable
              solutions tailored to your business.
            </p>
          </div>
        </div>
      </div>
      <div className="services">
        <h4>Our Services</h4>
        <div className="service-items">
          <div className="services-one">
            <img src="./assets/road1.jpeg" alt="road" />
            <div className="road">
              <h5> Road Transportation </h5>
            </div>
          </div>
          <div className="services-one">
            <img src="./assets/road2.jpeg" alt="road" />
            <div className="road">
              <h5> Sea Freight</h5>
            </div>
          </div>
          <div className="services-one">
            <img src="./assets/road3.jpeg" alt="road" />
            <div className="road">
              <h5> Air Freight</h5>
            </div>
          </div>
          <div className="services-one">
            <img src="./assets/road4.jpeg" alt="road" />
            <div className="road">
              <h5> Logistics Solutions</h5>
            </div>
          </div>
          <div className="services-one">
            <img src="./assets/road5.jpeg" alt="road" />
            <div className="road">
              <h5> Logistics Laboratory</h5>
            </div>
          </div>
          <div className="services-one">
            <img src="./assets/road6.jpeg" alt="road" />
            <div className="road">
              <h5> Warehousing Solutions</h5>
            </div>
          </div>
          <div className="services-one">
            <img src="./assets/road7.jpeg" alt="road" />
            <div className="road">
              <h5> Refrigerated LTL</h5>
            </div>
          </div>
          <div className="services-one">
            <img src="./assets/road8.jpeg" alt="road" />
            <div className="road">
              <h5> Truckload Services</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
        <h3>Who are We</h3>
        <div className="about-container-p">
          <p>
            Andelles Logistics Solutions is a worldwide transport and logistics
            company and provides added-value services in the areas of road
            transport, air and sea freight, logistics and customs and forwarding
            services.
          </p>
          <small>
            As a fully integrated transport and logistics provider, Andelles
            Logistics Solutions is able to make your logistics network more
            (cost-)efficient, whatever your business sector. Our goal is to
            develop customized, high-quality, large-scale logistical projects
            for our customers in order to provide a definite competitive
            advantage.
          </small>
        </div>
        <div className="about-container-bg">
          <div className="about-container-def">
            <h4>14</h4>
            <p>Years of Experience</p>
          </div>
          <div className="about-container-def">
            <h4>1800</h4>
            <p>Skilled Workers</p>
          </div>
          <div className="about-container-def">
            <h4>54</h4>
            <p>Countries Worldwide</p>
          </div>
          <div className="about-container-def">
            <h4>1050</h4>
            <p>Offices Globally</p>
          </div>
        </div>
      </div>
      <div className="testimonial-box">
        <div className="testimonial-box-header">
          <h3>Customers' Reviews</h3>
          <p>What customers say about us</p>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="review-box">
            <div className="review-box-img">
              <img src="./assets/tes1.jpeg" alt="r" />
            </div>
            <div className="reveiw-box-name">
              <h3>Zana (Alexandra) Moss</h3>
              <h4>Human Performance Specialist </h4>
            </div>
            <div className="comment">
              <p>
                The restaurant has a way of Making Guests come back for more, My
                Family felt wanted here, <br /> From how our Reservation was
                taken to how the service was delivered its always amazing -{" "}
                <br />
                the consistency on food and service delivery is to die for-
                Moseti <br />
                and Maurice have the best service there can be
              </p>
            </div>
            <div className="stars">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
          </SwiperSlide>
          <SwiperSlide className="review-box">
            <div className="review-box-img">
              <img src="./assets/tes2.jpeg" alt="r" />
            </div>
            <div className="reveiw-box-name">
              <h3>Zana (Alexandra) Moss</h3>
              <h4>Human Performance Specialist </h4>
            </div>
            <div className="comment">
              <p>
                The restaurant has a way of Making Guests come back for more, My
                Family felt wanted here, <br /> From how our Reservation was
                taken to how the service was delivered its always amazing -{" "}
                <br />
                the consistency on food and service delivery is to die for-
                Moseti <br />
                and Maurice have the best service there can be
              </p>
            </div>
            <div className="stars">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
          </SwiperSlide>
          <SwiperSlide className="review-box">
            <div className="review-box-img">
              <img src="./assets/test3.jpeg" alt="r" />
            </div>
            <div className="reveiw-box-name">
              <h3>Zana (Alexandra) Moss</h3>
              <h4>Human Performance Specialist </h4>
            </div>
            <div className="comment">
              <p>
                The restaurant has a way of Making Guests come back for more, My
                Family felt wanted here, <br /> From how our Reservation was
                taken to how the service was delivered its always amazing -{" "}
                <br />
                the consistency on food and service delivery is to die for-
                Moseti <br />
                and Maurice have the best service there can be
              </p>
            </div>
            <div className="stars">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
          </SwiperSlide>
          <SwiperSlide className="review-box">
            <div className="review-box-img">
              <img src="./assets/test4.jpeg" alt="r" />
            </div>
            <div className="reveiw-box-name">
              <h3>Zana (Alexandra) Moss</h3>
              <h4>Human Performance Specialist </h4>
            </div>
            <div className="comment">
              <p>
                The restaurant has a way of Making Guests come back for more, My
                Family felt wanted here, <br /> From how our Reservation was
                taken to how the service was delivered its always amazing -{" "}
                <br />
                the consistency on food and service delivery is to die for-
                Moseti <br />
                and Maurice have the best service there can be
              </p>
            </div>
            <div className="stars">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
          </SwiperSlide>
          <SwiperSlide className="review-box">
            <div className="review-box-img">
              <img src="./assets/test5.png" alt="r" />
            </div>
            <div className="reveiw-box-name">
              <h3>Zana (Alexandra) Moss</h3>
              <h4>Human Performance Specialist </h4>
            </div>
            <div className="comment">
              <p>
                The restaurant has a way of Making Guests come back for more, My
                Family felt wanted here, <br /> From how our Reservation was
                taken to how the service was delivered its always amazing -{" "}
                <br />
                the consistency on food and service delivery is to die for-
                Moseti <br />
                and Maurice have the best service there can be
              </p>
            </div>
            <div className="stars">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
          </SwiperSlide>
          <SwiperSlide className="review-box">
            <div className="review-box-img">
              <img src="./assets/test6.jpeg" alt="r" />
            </div>
            <div className="reveiw-box-name">
              <h3>Zana (Alexandra) Moss</h3>
              <h4>Human Performance Specialist </h4>
            </div>
            <div className="comment">
              <p>
                The restaurant has a way of Making Guests come back for more, My
                Family felt wanted here, <br /> From how our Reservation was
                taken to how the service was delivered its always amazing -{" "}
                <br />
                the consistency on food and service delivery is to die for-
                Moseti <br />
                and Maurice have the best.
              </p>
            </div>
            <div className="stars">
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
              <GrStar />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="job">
        <h3>Job opportunities</h3>
        <p>
          Define your own success with a career at Andelles Logistics Solutions{" "}
        </p>
        <button onClick={toggleModal} className="button">
          Find Your Job
        </button>
        {modal && (
          <div className="modal">
            <div className="overlay"></div>
            <span onClick={toggleModal}>
              <AiFillCloseCircle />
            </span>
            <h4>Want to Get a Free Consultation? Send us a request.</h4>
            <div className="input">
              <input type="Name" name="Name" placeholder="Name" required />
              <input type="Email" name="Email" placeholder="Email" required />
              <input type="Phone" name="Phone" placeholder="Phone" required />
              <textarea
                name="Message"
                id="Message"
                cols="20"
                rows="2"
                placeholder="Leave Message"
              ></textarea>
            </div>
            <div className="button">Send Message</div>
          </div>
        )}
      </div>
      <div className="find">
        <div className="find-container">
          <h4>Let us help you to find a solution that meets your needs</h4>
          <p>
            Do you need transport for your cargo by road, sea
            <br /> or air, customised solutions for more demanding <br />
            project forwarding cases or logistics solutions for <br />
            your business? Do you have questions or comments <br />
            regarding our services? Are you interested in our <br />
            company or the opportunities we can offer?
          </p>
          <div className="phones">
            <h3>
              <small>
                <MdPhone />
              </small>
              +386 40 222 455 <p>info@andelesslogistics.org</p>
            </h3>
            <h3>
              <small>
                <MdLocationPin />
              </small>
              Transport ltd. inc. 300
              <p>Pennsylvania Ave NW, Washington</p>
            </h3>
            <h3>
              <small>
                <MdOutlineTimerOff />
              </small>
              9:00-18:00
              <p>Monday-Friday</p>
            </h3>
          </div>
        </div>
        <div className="find-container-a">
          <h3>Get in Touch</h3>
          <div className="input">
            <input type="Name" name="Name" placeholder="Name" required />
            <input type="Email" name="Email" placeholder="Email" required />
            <input type="Phone" name="Phone" placeholder="Phone" required />
            <textarea
              name="Message"
              id="Message"
              cols="20"
              rows="2"
              placeholder="Leave Message"
            ></textarea>
          </div>
          <div className="button">Send Message</div>
        </div>
      </div>
      <div className="news">
        <div className="news-header">
          <h2>Latest News</h2>
        </div>
        <div className="news-container">
          <div className="news-container-one">
            <img src="./assets/Scania.jpeg" alt="Lorry" />
            <h4>Fleet Operator Training</h4>
            <p>
              We are looking for new drivers. Do you want to join us? <br /> In
              this article, you can get all the details
            </p>
            <div className="button">Read More</div>
          </div>
          <div className="news-container-one">
            <img src="./assets/Scania2.jpeg" alt="Lorry" />
            <h4>Driver Training Program</h4>
            <p>
              Take advantage of another training course developed by our
              recruiting team.
            </p>
            <div className="button">Read More</div>
          </div>
          <div className="news-container-one">
            <img src="./assets/Scania3.jpeg" alt="Lorry" />
            <h4>Driver Incentives</h4>
            <p>
              Learn how we encourage our drivers and discover how to grow your
              transportation business.
            </p>
            <div className="button">Read More</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
