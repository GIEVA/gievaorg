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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste cum
            consequuntur, aperiam aliquam tempore ea dolor rem delectus,
            nesciunt, eveniet dolorem odit. Quaerat, fugit illo ipsa dolorem
            corrupti dignissimos architecto quod ad vitae consequuntur! Odit,
            alias in. Culpa, inventore eos.
          </p>
        </section>
        <Counter />
        <section>
          <h2 style={{ marginTop: "40px" }}>Our uniqueness and impact</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium reprehenderit voluptate similique minima alias officiis
            quibusdam provident eos. Qui ut ratione, voluptas officiis molestiae
            veritatis consequuntur dicta tempora ad, quam, culpa dignissimos
            saepe perferendis aliquam corporis ab. Quod suscipit laudantium eos
            itaque corporis, nesciunt tempora tenetur non eius natus ab!
          </p>
        </section>
        <div className="unityabjdiv">
          <img
            className="unityabj"
            src={require("../images/UNITY 2.jpg")}
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
        <section className="we">
          <p className="educ">We educate</p>
          <p className="ins">We inspire</p>
          <p className="mot">We motivate</p>
          <p className="tra">We transform</p>
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
              <p style={{ textAlign: "left", color: "red" }}>Our latest</p>
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
                  <p className="latestTitle">GIEVA Project Opening Ceremony</p>
                </div>
                <div className="latestcon">
                  <div className="latestzoom three"></div>
                  <p className="latestTitle">
                    GIEVA Gen. AI Project Conference
                  </p>
                </div>
                <div className="latestcon">
                  <div className="latestzoom four"></div>
                  <p className="latestTitle">GIEVA Consortium Retreat</p>
                </div>
                <div className="latestcon">
                  <div className="latestzoom five"></div>
                  <p className="latestTitle">GIEVA Youth Empowerment Program</p>
                </div>
                <div className="latestcon">
                  <div className="latestzoom six"></div>
                  <p className="latestTitle">GIEVA Tech Conference Program</p>
                </div>
              </div>
            </div>

            <div className="zhe">
              <p
                style={{
                  width: "40%",
                  fontSize: "2.4vw",
                  textAlign: "center",
                  padding: "0",
                  margin: "0",
                }}
              >
                <span style={{ fontSize: "6vw", fontFamily: "courget" }}>
                  "
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                odit nisi nostrum expedita esse et repellat. In odit,
                exercitationem veritatis voluptate accusantium architecto.
                Nesciunt distinctio saepe ab tempora sunt excepturi non cumque!
                Numquam, accusantium quis ea molestiae tenetur totam quo!
                <span style={{ fontSize: "3vw", fontFamily: "courget" }}>
                  "
                </span>
                <br />
                <span style={{ fontFamily: "Noto", fontSize: "13px" }}>
                  Dr. Daniel Newton Obaka
                </span>
              </p>
              <img
                className="dad"
                style={{ width: "40%", marginRight: "30px" }}
                alt="zhe"
                src={require("../images/Dr. Obaka2.jpg")}
              />
            </div>
            <div className="zhe line">
              <img
                className="ceo"
                style={{ width: "40%", marginRight: "30px" }}
                alt="zhe"
                src={require("../images/ZHE.jpg")}
              />
              <p
                style={{
                  width: "40%",
                  fontSize: "2.4vw",
                  textAlign: "center",
                  padding: "0",
                  margin: "0",
                }}
              >
                <span style={{ fontSize: "6vw", fontFamily: "courget" }}>
                  "
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                odit nisi nostrum expedita esse et repellat. In odit,
                exercitationem veritatis voluptate accusantium architecto.
                Nesciunt distinctio saepe ab tempora sunt excepturi non cumque!
                Numquam, accusantium quis ea molestiae tenetur totam quo!
                <span style={{ fontSize: "3vw", fontFamily: "courget" }}>
                  "
                </span>{" "}
                <br />
                <span style={{ fontFamily: "Noto", fontSize: "13px" }}>
                  Zhebati Ogodo
                </span>
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
