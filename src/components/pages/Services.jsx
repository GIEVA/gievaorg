import React from "react";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import { VscArrowRight } from "react-icons/vsc";
import video from "../videos/LagosVideo.mp4";

function Services() {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };
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
            GIEVA is a Service Provider of the College Board (CB) to oversee SAT
            administration in Nigeria and to promote CB related educational
            products especially AP to expand opportunities for African students
            to develop the skills they need in a competitive world.
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
              onClick={scrollToTop}
              className="serveList servbg2"
              style={{ backgroundColor: "#e5d" }}
            >
              <h3>SAT</h3>
              <p>SAT (Undergraduate)</p>
              <Link to={"/Sat"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div
              className="serveList servbg2"
              style={{ backgroundColor: "#afa" }}
              onClick={scrollToTop}
            >
              <h3>GRE</h3>
              <p>Graduate Record Examination</p>
              <Link to={"/Sat"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div
              onClick={scrollToTop}
              className="serveList servbg2"
              style={{ backgroundColor: "#afa" }}
            >
              <h3>ACT</h3>
              <p>America College Test</p>
              <Link to={"/Sat"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div
              onClick={scrollToTop}
              className="serveList servbg2"
              style={{ backgroundColor: "#afa" }}
            >
              <h3>TOEFL</h3>
              <p>Test of English as a Foreign Language</p>
              <Link to={"/Sat"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div
              onClick={scrollToTop}
              className="serveList servbg2"
              style={{ backgroundColor: "#afa" }}
            >
              <h3>IELTS</h3>
              <p>International English Language Test System</p>
              <Link to={"/Sat"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div
              onClick={scrollToTop}
              className="serveList servbg2"
              style={{ backgroundColor: "#afa" }}
            >
              <h3>Additional Score Report</h3>
              {/* <p>Graduate Record Examination</p> */}
              <Link to={"/Sat"} className="links">
                <VscArrowRight />
              </Link>
            </div>
            <div
              onClick={scrollToTop}
              className="serveList servbg2"
              style={{ backgroundColor: "#add" }}
            >
              <h3>SEVIS Fee</h3>
              {/* <p>Test of English as a Foreign Language</p> */}
              {/* <Link to={"/Toefl"} className="links">
                <VscArrowRight />
              </Link> */}
            </div>
            <div
              onClick={scrollToTop}
              className="serveList servbg2"
              style={{ backgroundColor: "#add" }}
            >
              <h3>VISA process</h3>
              {/* <p>Test of English as a Foreign Language</p> */}
              {/* <Link to={"/Toefl"} className="links">
                <VscArrowRight />
              </Link> */}
            </div>

            <div
              onClick={scrollToTop}
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
            <div className="serveList servbg" onClick={scrollToTop}>
              <h3>S.T.E.P</h3>
              <p>Sustainable Transformative Education Program (STEP)</p>
              {/* <Link to={"/Step"} className="links">
                <VscArrowRight />
              </Link> */}
            </div>
            <div className="serveList servbg" onClick={scrollToTop}>
              <h3>CHOICES</h3>
              <p>
                Creative Hands in Organizatinal Innovations for Constructive
                Education and Sustainability
              </p>
              {/* <Link to={"/Heals"} className="links">
                <VscArrowRight />
              </Link> */}
            </div>
            <div className="third servbg" onClick={scrollToTop}>
              <h3>GIEVA HEALS</h3>
              <p>Holistic Educational Advising and Learning Services</p>
              {/* <Link to={"/Global"} className="links">
                <VscArrowRight />
              </Link> */}
            </div>
            <div className="third servbg" onClick={scrollToTop}>
              <h3>STEM</h3>
              <p>Science Technology Engineering and Mathematics</p>
              {/* <Link to={"/Global"} className="links">
                <VscArrowRight />
              </Link> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
