import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

function Footer() {
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
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
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
                <li style={{ textDecoration: "underline", fontSize: "1.2em" }}>
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
                <li style={{ textDecoration: "underline", fontSize: "1.2em" }}>
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
                <li style={{ textDecoration: "underline", fontSize: "1.2em" }}>
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
