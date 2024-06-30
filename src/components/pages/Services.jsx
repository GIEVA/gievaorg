import React from "react";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";
import video from "../videos/LagosVideo.mp4";

function Services() {
  return (
    <div className="slide-container">
      <div className="servvideo">
        <video
          className="servid"
          src={video}
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <section>
        <div className="edu">
          <p className="serveP">
            GIEVA is the current International Representative for the SAT in
            Nigeria. With the working relationships with Education Testing
            Services (ETS) since 2007, GIEVA assists students who seek to study
            in the United States with platforms for easy access to admission
            process by facilitating registration, supplying of study resources,
            and offering a holistic education, advising and learning services
          </p>

          <h2 style={{ margin: "20px" }}>Apply for</h2>
          <div className="serveListCont">
            {/* <ul className="edufirst">
              <li className="bone">SAT/ACT ( Undergraduate)</li>
              <li className="btwoo">
                Graduate Record Examination(GRE) (graduate)
              </li>
              <li className="bthree">
                Test of English as a Foreign Language (TOEFL)
              </li>
              <li className="bfour">
                Graduate Management Admission Test (Management Graduate
                Programs)
              </li>
            </ul> */}
            <div
              className="serveList servbg2"
              style={{ backgroundColor: "#e5d" }}
            >
              <h3>SAT/ACT</h3>
              <p>Scholastic Aptitude Test (Undergraduate)</p>
              <Link to={"/Sat"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div
              className="serveList servbg2"
              style={{ backgroundColor: "#afa" }}
            >
              <h3>GRE</h3>
              <p>Graduate Record Examination</p>
              <Link to={"/Gre"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div
              className="serveList servbg2"
              style={{ backgroundColor: "#add" }}
            >
              <h3>TOEFL</h3>
              <p>Test of English as a Foreign Language</p>
              <Link to={"/Toefl"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div
              className="serveList servbg2"
              style={{ backgroundColor: "#fa2" }}
            >
              <h3>Management Graduate Programs</h3>
              <p>Graduate Management Admission Test</p>
              <Link to={"/Sat"} className="links">
                <VscArrowRight />
              </Link>
            </div>
          </div>
          <h2 style={{ paddingTop: "40px" }}>Join our</h2>
          <div className="serveListCont">
            <div className="serveList servbg">
              <h3>S.T.E.P</h3>
              <p>Sustainable Transformative Education Program (STEP)</p>
              <Link to={"/Step"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div className="serveList servbg">
              <h3>HEALS</h3>
              <p>Holistic Educational Advising and Learning Services</p>
              <Link to={"/Heals"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div className="third servbg">
              <h3>GIEVA Global Giving</h3>
              <p>Holistic Educational Advising and Learning Services</p>
              <Link to={"/Global"} className="links">
                <VscArrowRight />
              </Link>
            </div>
          </div>
          <div className="servactivity">
            <div className="second servbg">
              <p>we are here to serve you better</p>
            </div>
            <div className="third servbg">
              <p>we are here to serve you better</p>
            </div>
            <div className="third servbg">
              <p>we are here to serve you better</p>
            </div>
            <div className="third servbg">
              <p>we are here to serve you better</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
