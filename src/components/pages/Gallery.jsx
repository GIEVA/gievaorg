import React from "react";
import Zoomeffect from "./Zoomeffect";
import HomeSlider from "./HomeSlider";
import "./Gallery.css";

function Gallery() {
  return (
    <div>
      <div className="gallall">
        <h1>Gallery</h1>
        <HomeSlider />
        <h1>Memories in 2024</h1>
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
        <h1>Memories in 2023</h1>
        <div className="galphotos">
          <div className="galset1">
            <div className="galsmall">
              <img
                alt="gallery"
                src={require("../images/Edutainment.jpg")}
                className="gals"
              />
              <img
                alt="gallery"
                src={require("../images/akuya.jpg")}
                className="gals"
              />
              <img
                alt="gallery"
                src={require("../images/volun.jpeg")}
                className="gals"
              />
              <img
                alt="gallery"
                src={require("../images/opening2.jpg")}
                className="gals"
              />
              <img
                alt="gallery"
                src={require("../images/UNITY 2.jpg")}
                className="gals"
              />
              <img
                alt="gallery"
                src={require("../images/counselling.jpg")}
                className="gals"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
