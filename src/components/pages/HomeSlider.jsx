import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  { url: require("../images/educate.jpg"), caption: "We educate" },
  { url: require("../images/mentor.jpg"), caption: "We mentor" },
  { url: require("../images/collab.jpg"), caption: "We collaborate" },
  { url: require("../images/homeRach.jpg"), caption: "We inspire" },
];
function HomeSlider() {
  return (
    <div className="slide-container">
      <Fade>
        {slideImages.map((fadeImage, index) => (
          <div key={index} className="each-slide">
            <img alt="home" src={fadeImage.url} />
            <h2 id="homeCap">{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
}
export default HomeSlider;
