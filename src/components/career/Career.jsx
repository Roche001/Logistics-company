import React from "react";
import "./Career.css";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Career = () => {
  AOS.init({
    duration: 2000,
  });
  return (
    <section data-aos="fade-up-right">
      <div className="career">
        <div className="career-header">
          <h3>Career Opportunities</h3>
        </div>
      </div>
      <div className="container">
        <div className="career-text row">
          <h4>Join Team of Professionals - Become a Part of TransLogic</h4>
          <p>
            We cherish active specialists willing to work on our company. If you
            are enthusiastic about transportation and <br /> ready to make
            impactful decisions, feel free to send us your CV. We are interested
            in hiring professionals for a long term.
          </p>
        </div>
        <div className="career-options">
          <div className="career-options-one row">
            <div className="career-options-one-text col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h4>Infrastructure Project Manager</h4>
              <ul>
                <li>
                  <p>
                    We are seeking a smart, organized, and personable leader who
                    thrives in a fast-paced environment. As a Project Analyst in
                    the IT department you will be responsible for planning and
                    executing projects for our infrastructure teams.
                  </p>
                </li>
              </ul>

              <a href="button" className="button">
                Send Resume
              </a>
            </div>
            <div className="career-options-one-social col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5>
                <span>
                  <BsFillCalendar2DateFill />
                </span>
                2022.08.25
              </h5>
              <h5>
                <span>
                  <MdLocationPin />
                </span>
                Cape Town
              </h5>
              <h5>
                <span>
                  <BsClockHistory />
                </span>
                Full-Time
              </h5>
            </div>
          </div>
          <div className="career-options-one row">
            <div className="career-options-one-text col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h4>Service Desk Analyst</h4>
              <ul>
                <li>
                  {" "}
                  <p>
                    The Service Desk Analyst provides first level technical{" "}
                    support for incidents and requests reported to the IT
                    service desk. Responsibilities include initial assessment,
                    triage, research, and resolution of first level cases;
                    commonly regarding the use of application software products
                    and/or infrastructure components.
                  </p>
                </li>
              </ul>

              <a href="button" className="button">
                Send Resume
              </a>
            </div>
            <div className="career-options-one-social col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5>
                <span>
                  <BsFillCalendar2DateFill />
                </span>
                2022.5.30
              </h5>
              <h5>
                <span>
                  <MdLocationPin />
                </span>
                Nairobi
              </h5>
              <h5>
                <span>
                  <BsClockHistory />
                </span>
                Full-Time
              </h5>
            </div>
          </div>
          <div className="career-options-one row">
            <div className="career-options-one-text col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
              <h4>Compensation Manager</h4>
              <h4>Experience and Skills</h4>
              <ul>
                <li>
                  <p>
                    <MdKeyboardArrowRight className="red" />
                    Bachelor’s degree in Business, Human Resources, or a related
                    field.
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <MdKeyboardArrowRight className="red" />7 years’
                    compensation management experience in a sales focused
                    organization.
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <MdKeyboardArrowRight className="red" />
                    Proven experience writing and implementing successful
                    compensation programs.
                  </p>
                </li>
              </ul>

              <a href="button" className="button">
                Send Resume
              </a>
            </div>
            <div className="career-options-one-social col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5>
                <span>
                  <BsFillCalendar2DateFill />
                </span>
                2022.5.30
              </h5>
              <h5>
                <span>
                  <MdLocationPin />
                </span>
                Nairobi
              </h5>
              <h5>
                <span>
                  <BsClockHistory />
                </span>
                Full-Time
              </h5>
            </div>
          </div>
          <div className="career-options-one row">
            <div className="career-options-one-text col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h4>Business Development Representative</h4>
              <h5>Experience and Skills</h5>
              <ul>
                <li>
                  {" "}
                  <p>
                    <MdKeyboardArrowRight className="red" />
                    2-3 years of selling and account management experience
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    <MdKeyboardArrowRight className="red" />
                    Strong work ethic, self-motivation, and sales drive
                  </p>
                </li>
                <li>
                  <p>
                    <MdKeyboardArrowRight className="red" />
                    Ability to maintain composure in stressful situations
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    <MdKeyboardArrowRight className="red" />
                    Confident decision-making skills
                  </p>
                </li>
              </ul>

              <a href="button" className="button">
                Send Resume
              </a>
            </div>
            <div className="career-options-one-social col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h5>
                <span>
                  <BsFillCalendar2DateFill />
                </span>
                2022.5.30
              </h5>
              <h5>
                <span>
                  <MdLocationPin />
                </span>
                Nairobi
              </h5>
              <h5>
                <span>
                  <BsClockHistory />
                </span>
                Full-Time
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
