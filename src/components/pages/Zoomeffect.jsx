import React, { useState, useEffect } from "react";
// import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  require("../images/educate.jpg"),
  require("../images/mentor.jpg"),
  require("../images/collab.jpg"),
  require("../images/homeRach.jpg"),
];

function Zoomeffect() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="zlide-container">
      <img
        src={slideImages[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="zoom-right"
      />
    </div>
  );
}

export default Zoomeffect;
