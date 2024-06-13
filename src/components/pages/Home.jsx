import React from "react";
import HomeSlider from "./HomeSlider";
import Homebody from "./Homebody";

const Home = () => {
  // const images = [
  //   { name: require("../images/mentor.jpg"), title: "We Inspire" },
  //   { name: require("../images/educate.jpg"), title: "We Educate" },
  //   { name: require("../images/collab.jpg"), title: "We Volunteer" },
  // ];

  return (
    <div className="homeCont">
      <div className="homeCont">
        <section className="top">
          <div className="bgss">
            <HomeSlider />
          </div>
          <Homebody />
        </section>
      </div>
    </div>
  );
};

export default Home;
