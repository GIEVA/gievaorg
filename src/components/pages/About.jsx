import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const handleEcosoc = () => {
    window.open("https://ecosoc.un.org/en");
  };
  const handleEmma = () => {
    window.open("https://eicjos.com.ng/");
  };
  const handleMicro = () => {
    window.open("https://www.microsoft.com/en-ng");
  };
  const handleDat = () => {
    window.open("https://data.org/");
  };
  const [bgColor, setBgColor] = useState(getRandomColor());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgColor(getRandomColor());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
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
                  fontSize: "60px",
                  color: bgColor,
                  textAlign: "center",
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
                system and framework that provides global platforms for young
                African leaders and entrepreneurs to achieve potential through
                educational services/programs, and train to be free from system
                dependence and to become self-dependent.
              </p>
              <hr />
              <div className="hislink" onClick={scrollToTop}>
                <Link to={"/History"} style={{ color: "orange" }}>
                  Read more
                </Link>
              </div>
            </div>
          </div>

          <div className="ourprio">
            <p className="vision">
              Our <span className="visionspan">vision</span> is building a
              system that provides global platforms for young leaders through
              educational services, entrepreneurial programs, and volunteerism.
            </p>
          </div>
          <div className="weare">
            <section className="we">
              <p className="educ">We educate</p>
              <p className="ins">We inspire</p>
              <p className="mot">We volunteer</p>
              <p className="tra">We empower</p>
            </section>
          </div>
          <div className="thirdabout">
            <h1 style={{ color: "#fff" }}>What we do</h1>
            <div className="thirdcont">
              <div className="thirdeach">
                <div className="thirdeach2">
                  <p className="t1">Youth Development Program</p>
                  <p className="t2">
                    GIEVA as a Youth Development and Empowerment Center has
                    provision for young, dynamic, and innovative individuals who
                    want to serve as interns in our organization. Currently our
                    internship provision is between 3-6 months. We operate an
                    open door policy and treat all internship applications on
                    merit and based on first-come-first-served
                  </p>
                  {/* <p className="t3">Lorem ipsum dolor sit amet.</p> */}
                </div>
                <div className="imgez"></div>
              </div>
              <div className="thirdeach">
                <div className="thirdeach2">
                  <p className="t1">Educational Services</p>
                  <p className="t2">
                    With partnership with ETS since 2007 we have aided students
                    who seek to study in the United States a platform for easy
                    access to registration materials and preparatory books that
                    will allow them to achieve their goals. We also register
                    students for GRE, TOEFL.
                  </p>
                  {/* <p className="t3">Lorem ipsum dolor sit amet.</p> */}
                </div>
                <div className="imgez6"></div>
              </div>
              <div className="thirdeach">
                <div className="thirdeach2">
                  <p className="t1">Outreach</p>
                  <p className="t2">
                    GIEVA from time to time engage in outreach programs with
                    schools. The choices program is one of such, At inception it
                    was introduced twenty eight Government owned secondary
                    schools within the municipal Area council of Nigeria’s
                    Federal Capital, Abuja 2009.
                  </p>
                  {/* <p className="t3">Lorem ipsum dolor sit amet.</p> */}
                </div>
                <div className="imgez3"></div>
              </div>
              <div className="thirdeach">
                <div className="thirdeach2">
                  <p className="t1">CHOICES</p>
                  <p className="t2">
                    CHOICES is a school program designed to re-shape the
                    lifestyle of Nigerian students in secondary school.
                  </p>
                  {/* <p className="t3">Lorem ipsum dolor sit amet.</p> */}
                </div>
                <div className="imgez4"></div>
              </div>
              <div className="thirdeach">
                <div className="thirdeach2">
                  <p className="t1">Mentoring Program</p>
                  <p className="t2">
                    Leadership enhancement and Academic program LEAP is another
                    program set to motivate and inspire young people who have
                    leadership potentials and have capacity academically to
                    excel. GIEVA identifies these young people through our reach
                    out programs in schools and other social events. Our goal is
                    to mentor such young people to become what they dream to
                    become.
                  </p>
                  {/* <p className="t3">Lorem ipsum dolor sit amet.</p> */}
                </div>
                <div className="imgez5"></div>
              </div>

              <div className="thirdeach">
                <div className="thirdeach2">
                  <p className="t1">Volunteerism</p>
                  <p className="t2">
                    We believe in volunteering and Advocacy programs and
                    services, we have over time seen that volunteering is not a
                    popular culture in Nigeria, GIEVA is set to re-position this
                    trend by providing different opportunities and platforms for
                    young people to Volunteer their time, resources, and also
                    professional expertise for the course of humanity and
                    development of Nigeria.
                  </p>
                  {/* <p className="t3">Lorem ipsum dolor sit amet.</p> */}
                </div>
                <div className="imgez2"></div>
              </div>
            </div>
          </div>
          <div className="forthabout">
            <p className="vision">
              Our <span className="visionspan">mission</span> is to create an
              atmosphere of tolerance, foster cooperation and mutual
              understanding; build platforms for shared values, creativity, and
              innovation; facilitate inclusive entrepreneurial initiatives, and
              appreciation of the environment.
            </p>
          </div>

          <div className="aboutSecond">
            <h3
              style={{
                textAlign: "center",
                color: "rgb(8, 101, 250)",
                fontSize: "35px",
                margin: "35px 0",
              }}
            >
              Who we are?
            </h3>
            <div className="aboutSeconds">
              <div className="whoweare">
                <div className="weareb">
                  <img src={require("../images/empower2.jpg")} />
                  <p>
                    We are a Youth-Centered-Education-Empowerment
                    Non-Governmental Organization in Nigeria, committed to
                    empowering the Nigerian youth specifically and young African
                    leaders in general for constructive engagement and
                    sustainable future.
                  </p>
                </div>
                {/* <br /> */}
                <div className="weareb">
                  <img src={require("../images/thought.jpg")} />
                  <p>
                    We foster and facilitate the preparation and inspiration of
                    new generation of young leaders for constructive engagement
                    through integrative platforms, networks, and partnership.
                  </p>
                </div>
                {/* <br /> */}
                <div className="weareb">
                  <img src={require("../images/edur.jpg")} />
                  <p>
                    We believe that, a sustainable future with integrated
                    development depends on total education and mobilization of
                    the youth anchored on partnership platforms for
                    entrepreneurship, innovations, and inclusion
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutthird">
            {/* <hr
              style={{
                height: "1px",
                width: "50%",
                backgroundColor: "rgb(3, 3, 103)",
              }}
            /> */}
            <p className="build">
              {" "}
              We build global platforms for young leaders to develop innovative
              skills through leadership development and entrepreneurial
              programs.
            </p>
          </div>
          <div className="aboutforth">
            <div
              className="tdtop"
              style={{ backgroundColor: bgColor, transition: "all 0.9s" }}
            >
              <h1>We make your dreams become a reality</h1>
              <img src={require("../images/Logo.png")} />
            </div>
          </div>
          <div className="partcont">
            <div className="partner">
              <div className="corp">Our Corporate Partners</div>
              <p>
                GIEVA organization is currently in partnership with various
                international education and non-governmental organizations. Her
                passion to impact youth, women and PLWD has placed her in a
                global limelight. Her operational processes are time-bound,
                engaging and holistic, with a plethora of local and
                international testimonials to attest
              </p>
              <div className="parteach">
                <img
                  onClick={handleEcosoc}
                  src={require("../images/ECOSOC.png")}
                />
                <img
                  onClick={handleEmma}
                  src={require("../images/emmlogo.PNG")}
                />
                <img
                  onClick={handleMicro}
                  src={require("../images/microsoftl.png")}
                />
                <img
                  onClick={handleDat}
                  src={require("../images/data.orgve.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
