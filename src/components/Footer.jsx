import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footCont">
        <div className="footAll">
          {/* <p>We are the best</p> */}
          <div className="footIn">
            <ul>
              <img src={require("./images/GIEVALogo.png")} alt="logo" />
              <a
                href="contact@gieva.org"
                style={{ padding: "10px", color: "green" }}
              >
                contact@gieva.org
              </a>
              <div>
                <ul id="icons">
                  <li>icon</li>
                  <li>icons</li>
                  <li>icons</li>
                  <li>whapp</li>
                </ul>
              </div>
            </ul>
            <ul className="first">
              <li>Links</li>
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
            <ul className="second">
              <li>Our Programs</li>
              <li>STEP</li>
              <li>HEALS</li>
              <li>STEM</li>
              <li>AWIG</li>
            </ul>
            <ul className="third">
              <li>Contact us</li>
              <li>
                Lagos State House 3rd Floor Suite 329 Ralph Shodeinde Street CBD
                Abuja, Nigeria
              </li>
              <li>+234 8100 289 330</li>
              <li style={{fontSize:"0.6rem", fontFamily:"Noto"}}>Monday-Thursday: 9am-3pm. Friday: 9am-2pm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
