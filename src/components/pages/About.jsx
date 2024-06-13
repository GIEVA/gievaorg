import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="aboutCont">
        <div className="aboutAll">
          <div className="aboutFirst">
            <div className="aboutHeader">
              <p>We are</p>
              <h2>
                Global Integrated Education <br />
                Volunteers Association (GIEVA)
              </h2>
            </div>
          </div>
          <div className="aboutSecond">
            <div className="aboutSeconda">
              <h3
                style={{
                  fontFamily: "corinthia",
                  fontSize: "6vw",
                  color: "rgb(3, 3, 123)",
                }}
              >
                A brief history?
              </h3>
              <p className="histP">
                The dream all began in 2001. The Global Integrated Education
                Volunteers Association was registered as Incorporated Trustees
                August 2006.
              </p>

              <p className="histP">
                Daniel and Ruth Obaka founded and incorporated the Global
                Integrated Education Volunteers Association as a not-for-profit
                organization in Nigeria. It is with a vision for building a
                system that provides global platforms for young African leaders
                and entrepreneurs to achieve potential through educational
                services/programs, training to be free from system dependence
                and to become self-dependent.
              </p>
              <hr />
              <div className="hislink">
                <Link to={"/History"}>Read more</Link>
              </div>
            </div>
          </div>
          <div className="weare">
            <div className="weone">he</div>
            <div className="wetwo">hello ew</div>
            <div className="wethree"></div>
            <div className="wefour"></div>
          </div>
          <div className="ourprio"></div>
          <div className="thirdabout"></div>
          <div className="forthabout"></div>

          <div className="aboutSecond">
            <h3>Who we are?</h3>
            <div className="whoweare">
              <p>
                We foster and facilitate the preparation and inspiration of new
                generation of young leaders for constructive engagement through
                integrative platforms, networks, and partnership
              </p>
              <br />
              <p>
                We are committed to empowering the Nigerian youth specifically
                and young African leaders in general for constructive engagement
                and sustainable future through education, cultural exchange,
                advocacy, and volunteerism
              </p>
              <br />
              <p>
                We believe that, a sustainable future with integrated
                development depends on total education and mobilization of the
                youth anchored on partnership platforms for entrepreneurship,
                innovations, and inclusion
              </p>
            </div>
          </div>
          <div className="aboutthird">
            <p>
              Our VISION is building a system that provides global platforms for
              young leaders through educational services, entrepreneurial
              programs, and volunteerism
            </p>
            <hr
              style={{
                height: "1px",
                width: "50%",
                backgroundColor: "rgb(3, 3, 103)",
              }}
            />
            <p>
              Our MISSION is to create an atmosphere of tolerance, foster
              cooperation and mutual understanding; build platforms for shared
              values, creativity, and innovation; facilitate inclusive
              entrepreneurial initiatives, and appreciation of environment.
            </p>
          </div>
          <div className="aboutforth">
            <div className="tdtop"></div>
            <div className="tddn">
              <h2>What we do</h2>
              <div className="doing">
                <div className="do">
                  <img
                    src={require("../images/Edutainment.jpg")}
                    alt="educate"
                  />
                  <p>OUTREACH</p>
                  <p className="pSmall">
                    We engage in outreach programs with schools
                  </p>
                </div>
                <div className="do">
                  <img src={require("../images/volun.jpeg")} alt="volunteer" />
                  <p>VOLUNTEERING</p>
                  <p className="pSmall">
                    Young people who want to make a difference in our generation
                    can volunteer here
                  </p>
                </div>
                <div className="do">
                  <img src={require("../images/mentor.jpg")} alt="counsel" />
                  <p>MENTORING PROGRAM</p>
                  <p className="pSmall">
                    Leadership enhancement and Academic program
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>Our hierachy</div>
        </div>
      </div>
    </div>
  );
}

export default About;
