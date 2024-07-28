import React from "react";
// import Zoomeffect from "./Zoomeffect";
import HomeSlider from "./HomeSlider";
import "./Gallery.css";

function Gallery() {
  return (
    <div>
      <div className="gallall">
        <h1 className="galhead">Gallery</h1>
        <HomeSlider />
        <h1>Activities in 2024</h1>
        <div className="galphotos">
          <div className="galset1">
            <div className="galsmall">
              <img
                alt="gallery"
                src={require("../images/retreat.jpg")}
                className="gals"
              />
              <img
                alt="gallery"
                src={require("../images/unity 1.jpg")}
                className="gals"
              />
              <img
                alt="gallery"
                src={require("../images/bgdad.jpg")}
                className="gals"
              />
              <img
                alt="gallery"
                src={require("../images/about.jpg")}
                className="gals"
              />
              <img
                alt="gallery"
                src={require("../images/RACHEAL 1 .jpg")}
                className="gals"
              />
              <img
                alt="gallery"
                src={require("../images/Artboard 1.jpg")}
                className="gals"
              />
            </div>
          </div>
        </div>
        <HomeSlider />
        <h1>
          People living with disabilities are very important to our societies
        </h1>
        {/* <Zoomeffect/> */}
        <div className="galphotos">
          <div className="galset1">
            <div className="galsmall">
              <div className="gal gtwo">
                <p className="galtitle">
                  Empowering those with physical disability
                </p>
              </div>
              <div className="gal gthree">
                <p className="galtitle">
                  Empowering those with physical disability
                </p>
              </div>
              <div className="gal gfour">
                <p className="galtitle">
                  Empowering those with physical disability
                </p>
              </div>
              <div className="gal gfive">
                <p className="galtitle">
                  Empowering those with physical disability
                </p>
              </div>
              <div className="gal gone">
                <p className="galtitle">
                  Empowering those with physical disability
                </p>
              </div>
              <div className="gal gsix">
                <p className="galtitle">
                  Empowering those with physical disability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
