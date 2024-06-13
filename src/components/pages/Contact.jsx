import React from "react";

function Contact() {
  return (
    <div>
      <div className="contactCont">
        <div className="contact" style={{ backgroundColor: "#ffa" }}>
          <h1
            style={{
              fontFamily: "corinthia",
              color: "gold",
              fontSize: "70px",
              marginTop: "40px",
            }}
          >
            Get in Touch
          </h1>
          <div className="lagJos">
            <div className="abuja">
              <img
                src={require("../images/RACHEAL 1 .jpg")}
                alt="Abuja"
                style={{ width: "100%" }}
              />
              <div className="lagtext">
                <p
                  style={{
                    fontFamily: "akaya",
                    fontSize: "3.5vw",
                    color: "blue",
                  }}
                >
                  Abuja Office
                </p>
                <p
                  style={{
                    fontFamily: "akaya",
                    fontSize: "20px",
                    color: "#333",
                  }}
                >
                  Lagos State House
                  <br />
                  Plot 78 Ralph Shodeinde Street
                  <br />
                  3rd Floor
                  <br />
                  Suite 329
                  <br />
                  Central Business District
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      backgroundColor: "#aab",
                      // textAlign: "center",
                      alignContent: "center",
                      justifyContent: "center",
                      lineHeight: "5vw",
                      margin: "5px 0",
                    }}
                  >
                    <a href="www.contact@gieva.org">contact@gieva.org</a>
                  </div>
                  Monday-Thursday: 9am-3pm
                  <br />
                  Friday: 9am-2pm
                  <br />
                  +2347035250344
                  <br />
                </p>
              </div>
            </div>
            <div className="lagos">
              <img
                src={require("../images/lag.jpg")}
                alt="Lagos"
                style={{ width: "100%" }}
              />
              <div className="lagtext">
                <p
                  style={{
                    fontFamily: "akaya",
                    fontSize: "3.5vw",
                    color: "blue",
                  }}
                >
                  Lagos Office
                </p>
                <p
                  style={{
                    fontFamily: "akaya",
                    fontSize: "20px",
                    color: "#333",
                  }}
                >
                  561 Ladipo Bus Stop
                  <br />
                  (Along Oshodi-Ikeja
                  <br />
                  Expressway)
                  <br />
                  Opposite Tamarin Hotel GRA
                  <br />
                  Ikeja, Lagos
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      backgroundColor: "#aab",
                      // textAlign: "center",
                      alignContent: "center",
                      justifyContent: "center",
                      lineHeight: "5vw",
                      margin: "5px 0",
                    }}
                  >
                    <a href="www.contactlagos@gieva.org">
                      contactlagos@gieva.org
                    </a>
                  </div>
                  Monday-Thursday: 9am-3pm
                  <br />
                  Friday: 9am-2pm
                  <br />
                  +2347035250344
                  <br />
                </p>
              </div>
            </div>
            <br />
            <div className="jos">
              <img
                src={require("../images/josoff.jpg")}
                alt="Jos"
                style={{ width: "100%" }}
              />
              <div className="lagtext">
                <p
                  style={{
                    fontFamily: "akaya",
                    fontSize: "3.5vw",
                    color: "blue",
                  }}
                >
                  Jos Office
                </p>
                <p
                  style={{
                    fontFamily: "akaya",
                    fontSize: "20px",
                    color: "#333",
                  }}
                >
                  ECWA Production Building
                  <br />
                  RM 9
                  <br />
                  10 Kano-Beach Road
                  <br />
                  Jos
                  <br />
                  Plateau State
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      backgroundColor: "#aab",
                      alignContent: "center",
                      justifyContent: "center",
                      lineHeight: "5vw",
                      margin: "5px 0",
                    }}
                  >
                    <a href="www.contactjos@gieva.org">contactjos@gieva.org</a>
                  </div>
                  Monday-Thursday: 9am-3pm
                  <br />
                  Friday: 9am-2pm
                  <br />
                  +2348137533954
                  <br />
                </p>
              </div>
            </div>
          </div>
          <h1
            style={{
              color: "royalBlue",
              fontFamily: "corinthia",
              fontSize: "5vw",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Every contact is an experience!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Contact;
