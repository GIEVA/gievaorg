import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
  const handlefb= () => {
    window.open("https://www.facebook.com/gieva.org/?locale2=en_GB&_rdr");
  }
  const handleis= () => {
    window.open("https://www.instagram.com/gievaorg/");
  }
  const handletw= () => {
    window.open("https://x.com/gievaorg?lang=en&mx=2");
  }
  return (
    <div>
      <div className="footCont">
        <div className="footAll">
          {/* <p>We are the best</p> */}
          <div className="footIn">
            <section className="logosection">
              <img
                className="footerimage"
                src={require("./images/GIEVALogo.png")}
                alt="logo"
              />

              <div className="socialicons">
                <ul id="icons">
                  <li onClick={handlefb}>
                    <FaFacebook />
                  </li>
                  <li onClick={handletw}>
                    <FaTwitter />
                  </li>
                  <li onClick={handleis}>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaWhatsapp />
                  </li>
                </ul>
              </div>
            </section>
            <section className="linkss">
              <ul className="first">
                <li
                  style={{
                    textDecoration: "underline",
                    fontSize: "1.2em",
                    color: "#f6d",
                    fontWeight: "bolder",
                  }}
                >
                  Quick Links
                </li>
                <li>
                  <Link to={"/"}>Testimony</Link>
                </li>
                <li>
                  <Link to={"Gallery"}>Gallery</Link>
                </li>
                <li>
                  <Link to={"Blog"}>Blog</Link>
                </li>
                <li>
                  <Link to={"Services"}>Services</Link>
                </li>
              </ul>
            </section>
            <section className="program">
              <ul className="second">
                <li
                  style={{
                    textDecoration: "underline",
                    fontSize: "1.2em",
                    color: "#f6d",
                    fontWeight: "bolder",
                  }}
                >
                  Our Programs
                </li>
                <li>STEP</li>
                <li>HEALS</li>
                <li>STEM</li>
                <li>AWIG</li>
              </ul>
            </section>
            <section className="contactjos">
              <ul className="third">
                <li
                  style={{
                    textDecoration: "underline",
                    color: "#f6d",
                    fontSize: "1.2em",
                    fontWeight: "bolder",
                  }}
                >
                  <FaLocationDot /> Contact us
                </li>
                <li>
                  <a href="contact@gieva.org">contact@gieva.org</a>
                </li>
                <li>
                  Lagos State House 3rd Floor Suite 329 Ralph Shodeinde Street
                  CBD Abuja, Nigeria
                </li>
                <li>+234 8100 289 330</li>
                <li style={{ fontSize: "0.6rem", fontFamily: "Noto" }}>
                  Monday-Thursday: 9am-3pm. Friday: 9am-2pm
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
