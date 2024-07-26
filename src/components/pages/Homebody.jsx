import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Counter from "./Counter";

function Homebody() {
  return (
    <div>
      <div className="top">
        <section>
          <h2 style={{ marginTop: "40px" }}>Our commitments</h2>
          <p style={{ margin: "0px 50px", fontSize: "20px" }}>
            GIEVA is committed to empowering the Nigerian youth specifically and
            young African leaders in general for constructive engagement and
            sustainable future through education, cultural exchange, advocacy,
            and volunteerism. It is for building global platforms for young
            leaders to develop innovative skills through leadership development
            and entrepreneurial programs
          </p>
        </section>
        <Counter />
        <section className="partsec">
          <h2 style={{ marginTop: "40px" }}>Our uniqueness and impact</h2>
          <p
            style={{
              margin: "10px 50px",
              textAlign: "center",
              fontSize: "20px",
            }}
          >
            GIEVA is currently in partnership with various international
            education and non-governmental organizations. Her passion to impact
            youth, marginalized communities, especially women and Persons Living
            With Disability (PLWD) has placed her in a global limelight. Her
            operational processes are time-bound, engaging and holistic, with a
            plethora of local and international testimonials to attest.
          </p>
        </section>
        <div className="unityabjdiv">
          <img
            className="unityabj"
            src={require("../images/Amarachi eze, sweet potato.JPG")}
            alt="diversity"
            style={{ objectFit: "cover", minHeight: "100%", minWidth: "100%" }}
          />
          <p className="roundworld">We take you round the world</p>
        </div>
        <section className="idea">
          <div className="inclusion"></div>
          <div className="diversity"></div>
          <div className="equity"></div>
          <div className="access"></div>
        </section>

        <section>
          <h2
            style={{
              fontFamily: "corinthia",
              fontSize: "5vw",
              fontWeight: "bolder",
              marginTop: "40px",
            }}
          >
            Our activities
          </h2>
          <div>
            <div className="latestall">
              <p style={{ textAlign: "left", color: "red" }}>
                We touch the world
              </p>
              <p style={{ fontFamily: "corinthia", fontSize: "35px" }}>
                Catch up on our most recent events, news, and updates
              </p>
              <div className="latest">
                <div className="latestcon">
                  <div className="latestzoom one"></div>
                  <p className="latestTitle">
                    GIEVA Generative Artificial Intelligence Awareness Campaign
                  </p>
                </div>
                <div className="latestcon">
                  <div className="latestzoom two"></div>
                  <p className="latestTitle">
                    GIEVA distributing COVID 19 relief materials
                  </p>
                </div>
                <div className="latestcon">
                  <div className="latestzoom three"></div>
                  <p className="latestTitle">
                    GIEVA does not fail to include people living with
                    disabilities
                  </p>
                </div>
                <div className="latestcon">
                  <div className="latestzoom four"></div>
                  <p className="latestTitle">
                    GIEVA preparing students of SAT examination
                  </p>
                </div>
                <div className="latestcon">
                  <div className="latestzoom five"></div>
                  <p className="latestTitle">GIEVA Youth Empowerment Program</p>
                </div>
                <div className="latestcon">
                  <div className="latestzoom six"></div>
                  <p className="latestTitle">
                    GIEVA-UNITED NATIONS ECOSOC side event
                  </p>
                </div>
              </div>
            </div>

            <div className="zhe">
              <p className="zhetext">
                Our vision is to build a system that provides global platforms
                for young African leaders and entrepreneurs to achieve potential
                through educational services and programs, and to train them to
                be free from system dependence and become self-dependent
                individuals
                <br />
                <span style={{ fontFamily: "Noto", fontSize: "13px" }}>
                  Dr. Daniel Newton Obaka
                </span>
                <br />
                <p>President</p>
              </p>
              <img
                className="dad"
                style={{ width: "40%", marginRight: "30px" }}
                alt="president"
                src={require("../images/Dr. Obaka2.jpg")}
              />
            </div>
            <div className="zhe line">
              <img
                className="ceo"
                style={{ width: "40%", marginRight: "30px" }}
                alt="CEO"
                src={require("../images/ZHE.jpg")}
              />
              <p className="zhetext">
                At GIEVA organization, we understand that transformation may
                start slowly, embracing change may take time, but we are willing
                to make the sacrifice to ensure that we transform lives through
                education, innovation and collaboration to be a vehicle for
                positive change in order to make lasting impact for the common
                good.
                <br />
                <span style={{ fontFamily: "Noto", fontSize: "13px" }}>
                  Zhebati Ogodo
                </span>
                <br />
                <p>CEO</p>
              </p>
            </div>
            {/* <p>Testimonials</p>
            <p>follow us on facebook</p> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homebody;
