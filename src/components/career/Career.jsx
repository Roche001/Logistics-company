import React from "react";
import "./Career.css";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

const Career = () => {
  return (
    <section>
      <div className="career">
        <div className="career-header">
          <h3>Career Opportunities</h3>
        </div>
      </div>
      <div className="career-text">
        <h4>Join Team of Professionals - Become a Part of TransLogic</h4>
        <p>
          We cherish active specialists willing to work on our company. If you
          are enthusiastic about transportation and <br /> ready to make
          impactful decisions, feel free to send us your CV. We are interested
          in hiring professionals for a long term.
        </p>
      </div>
      <div className="career-options">
        <div className="career-options-one">
          <div className="career-options-one-text">
            <h4>Infrastructure Project Manager</h4>
            <p>
              We are seeking a smart, organized, and personable leader
              <br /> who thrives in a fast-paced environment. As a Project
              <br />
              Analyst in the IT department you will be responsible for
              <br /> planning and executing projects for our infrastructure
              teams.
            </p>
            <a href="button" className="button">
              Send Resume
            </a>
          </div>
          <div className="career-options-one-social">
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
        <div className="career-options-one">
          <div className="career-options-one-text">
            <h4>Service Desk Analyst</h4>
            <p>
              The Service Desk Analyst provides first level technical <br />
              support for incidents and requests reported to the IT <br />
              service desk. Responsibilities include initial assessment,
              <br /> triage, research, and resolution of first level cases;
              commonly <br />
              regarding the use of application software products and/or
              <br />
              infrastructure components.
            </p>
            <a href="button" className="button">
              Send Resume
            </a>
          </div>
          <div className="career-options-one-social">
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
        <div className="career-options-one">
          <div className="career-options-one-text">
            <h4>Compensation Manager</h4>
            <h5>Experience and Skills</h5>
            <p>
              {" "}
              <span>
                <MdKeyboardArrowRight />
              </span>
              Bachelor’s degree in Business, Human Resources, or a related
              field.
            </p>
            <p>
              {" "}
              <span>
                <MdKeyboardArrowRight />
              </span>
              7 years’ compensation management experience in a sales focused{" "}
              organization.
            </p>
            <p>
              {" "}
              <span>
                <MdKeyboardArrowRight />
              </span>
              Proven experience writing and implementing successful compensation
              programs.
            </p>
            <a href="button" className="button">
              Send Resume
            </a>
          </div>
          <div className="career-options-one-social">
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
        <div className="career-options-one">
          <div className="career-options-one-text">
            <h4>Business Development Representative</h4>
            <h5>Experience and Skills</h5>
            <p>
              {" "}
              <span>
                <MdKeyboardArrowRight />
              </span>
              2-3 years of selling and account management experience
            </p>
            <p>
              {" "}
              <span>
                <MdKeyboardArrowRight />
              </span>
              Strong work ethic, self-motivation, and sales drive
            </p>
            <p>
              {" "}
              <span>
                <MdKeyboardArrowRight />
              </span>
              Ability to maintain composure in stressful situations
            </p>
            <p>
              {" "}
              <span>
                <MdKeyboardArrowRight />
              </span>
              Confident decision-making skills
            </p>
            <a href="button" className="button">
              Send Resume
            </a>
          </div>
          <div className="career-options-one-social">
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
    </section>
  );
};

export default Career;
