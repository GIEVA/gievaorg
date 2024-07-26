import React from "react";

function HomeSlider() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <img
            title="Distribution of COVID 19 relief materials"
            src={require("../images/7.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="Gen. AI campaign"
            src={require("../images/11.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="We inspire inclusion"
            src={require("../images/UNITED.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="President"
            src={require("../images/Dr. Obaka.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="Consortium retreat"
            src={require("../images/retreat.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="Head of Jos branch"
            src={require("../images/cmh_9202.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="Gen. AI opening ceremony"
            src={require("../images/opening2.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="Mentorship session at Jos office"
            src={require("../images/josoff.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="GIEVA is for everyone"
            src={require("../images/unityAbj.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="GIEVA and Emmanuel college, Jos"
            src={require("../images/collab.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="GIEVA staff"
            src={require("../images/homeRach.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img
            title="Mrs. Obaka's SAT class"
            src={require("../images/educate.jpg")}
            alt="gieva"
          />
        </div>
        <div className="slide">
          <img src={require("../images/mentor.jpg")} alt="gieva" />
        </div>
      </div>
    </div>
  );
}
export default HomeSlider;
