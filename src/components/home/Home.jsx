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
import AOS from "aos";
import "aos/dist/aos.css";
import { TextField, List, ListItem, TextareaAutosize } from "@mui/material";

const Home = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  AOS.init({
    duration: 2000,
  });
  const style = {
    width: "20rem",
    maxWidth: 600,
    bgcolor: "#f3f3f3",
  };

  return (
    <section id="home" className="container-fluid" data-aos="flip-left">
      <div className="home-photo ">
        <div className="overlay"></div>
        <div className="home-photo-def row">
          <h3> Andelles Logistics</h3>
          <small>Logistic Solutions for Your Successful Business</small>
        </div>
      </div>

      <div className="selection container-fluid">
        <div className="selection-a row">
          <h4>Why Choose Us?</h4>
        </div>

        <div className="choose-us row container-fluid" text-center>
          <div
            className="choose-a col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 "
            data-aos="fade-up"
          >
            <span>
              <ImRocket />
            </span>
            <h4>Quicker Delivery</h4>
            <p>Fast and secure delivery.</p>
          </div>

          <div
            className="choose-a col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
            data-aos="fade-down"
          >
            <span>
              <RiCustomerServiceFill />
            </span>
            <h4>24/7 Support</h4>
            <p>Track your cargo on its way.</p>
          </div>

          <div
            className="choose-a col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
            data-aos="fade-up"
          >
            <span>
              {" "}
              <RiSecurePaymentFill />
            </span>
            <h4>Secured Services</h4>
            <p>The highest security level.</p>
          </div>

          <div
            className="choose-a col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
            data-aos="fade-down"
          >
            <span>
              <RiPriceTagFill />
            </span>
            <h4>Affordable Prices</h4>
            <p>Affordable business solutions.</p>
          </div>
        </div>
      </div>
      <div className="company container-fluid">
        <div className="row">
          <h4>Our Services</h4>
        </div>

        <div className="service-items container-fluid">
          <div className=" container row">
            <div
              className="services-one col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
              data-aos="fade-right"
            >
              <img src="./assets/road1.jpeg" alt="road" className="img-fluid" />
              <div className="road">
                <h5> Road Transportation </h5>
              </div>
            </div>
            <div
              className="services-one col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
              data-aos="fade-right"
            >
              <img src="./assets/road2.jpeg" alt="road" className="img-fluid" />
              <div className="road">
                <h5> Sea Freight</h5>
              </div>
            </div>
            <div
              className="services-one col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
              data-aos="fade-right"
            >
              <img src="./assets/road3.jpeg" alt="road" className="img-fluid" />
              <div className="road">
                <h5> Air Freight</h5>
              </div>
            </div>
            <div
              className="services-one col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
              data-aos="fade-right"
            >
              <img src="./assets/road4.jpeg" alt="road" className="img-fluid" />
              <div className="road">
                <h5> Logistics Solutions</h5>
              </div>
            </div>
          </div>
          <div className="container row">
            <div
              className="services-one col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
              data-aos="fade-left"
            >
              <img src="./assets/road5.jpeg" alt="road" className="img-fluid" />
              <div className="road">
                <h5> Logistics Laboratory</h5>
              </div>
            </div>
            <div
              className="services-one col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
              data-aos="fade-left"
            >
              <img src="./assets/road6.jpeg" alt="road" className="img-fluid" />
              <div className="road">
                <h5> Warehousing Solutions</h5>
              </div>
            </div>
            <div
              className="services-one col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
              data-aos="fade-left"
            >
              <img src="./assets/road7.jpeg" alt="road" className="img-fluid" />
              <div className="road">
                <h5> Refrigerated LTL</h5>
              </div>
            </div>
            <div
              className="services-one col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12"
              data-aos="fade-left"
            >
              <img src="./assets/road8.jpeg" alt="road" className="img-fluid" />
              <div className="road">
                <h5> Truckload Services</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container container-fluid" data-aos="flip-left">
        <div className="row text-center">
          <h3>Who are We</h3>
        </div>
        <div className="row">
          <div className="about-container-p col-sm-12 text-center">
            <small
              col-xxl-12
              col-xl-12
              col-lg-12
              col-md-12
              col-sm-12
              col-xs-12
              text-align-center
            >
              As a fully integrated transport and logistics provider, Andelles
              Logistics Solutions is able to make your logistics network more
              (cost-)efficient, whatever your business sector. Our goal is to
              develop customized, high-quality, large-scale logistical projects
              for our customers in order to provide a definite competitive
              advantage.
            </small>
          </div>
        </div>
      </div>
      <div className="testimonial-box container-fluid">
        <div className="testimonial-box-header row text-center">
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
          className="mySwiper row"
        >
          <SwiperSlide className="review-box">
            <div className="review-box-img">
              <img src="./assets/tes1.jpeg" alt="r" />
            </div>
            <div className="reveiw-box-name">
              <h3>Zana (Alexandra) Moss</h3>
              <h4>Human Performance Specialist </h4>
            </div>
            <div className="comment text-center ">
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
        <div className="job-a">
          {" "}
          <h3>Job opportunities</h3>
          <p>
            Define your own success with a career at Andelles Logistics
            Solutions{" "}
          </p>
          <button onClick={toggleModal} className="button">
            Find Your Job
          </button>
        </div>
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
      <div className="find container-fluid">
        <div className="row">
          <div className="find-container col-sm-6">
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
          <div className="find-container-a col-sm-6">
            <h3>Get in Touch</h3>

            <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem button>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </ListItem>
              <ListItem button>
                <TextField
                  id="outlined-basic"
                  label="E-Mail"
                  variant="outlined"
                />
              </ListItem>
              <ListItem button>
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                />
              </ListItem>
              <ListItem button>
                <TextareaAutosize
                  aria-label="empty textarea"
                  placeholder="Leave Message"
                  style={{ width: 245 }}
                />
              </ListItem>
            </List>

            <div className="button">Send Message</div>
          </div>
        </div>
      </div>
      <div className="news container-fluid">
        <div className="row text-center">
          <div className="news-header">
            <h2>Latest News</h2>
          </div>
        </div>
        <div className="news-container row">
          <div
            className="news-container-one col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"
            data-aos="fade-right"
          >
            <img src="./assets/Scania.jpeg" alt="Lorry" />
            <h4>Fleet Operator Training</h4>
            <p>
              We are looking for new drivers. Do you want to join us? <br /> In
              this article, you can get all the details
            </p>
            <div className="button">Read More</div>
          </div>
          <div
            className="news-container-one col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"
            data-aos="fade-right"
          >
            <img src="./assets/Scania2.jpeg" alt="Lorry" />
            <h4>Driver Training Program</h4>
            <p>
              Take advantage of another training course developed by our
              recruiting team.
            </p>
            <div className="button">Read More</div>
          </div>
          <div
            className="news-container-one col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12"
            data-aos="fade-right"
          >
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
