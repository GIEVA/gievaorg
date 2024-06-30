import React from "react";
import HomeSlider from "./HomeSlider";
import Homebody from "./Homebody";
import Gallery from "./Gallery";
import Coolslider from "./Coolslider";
import Counter from "./Counter";

const images = [1, 2, 3, 4];
const Home = () => {
  return (
    <div className="homeCont">
      <div className="homeCont">
        <section className="top">
          <div className="bgss">
            {/* <Gallery /> */}
            <Coolslider />
          </div>
          <Homebody />
        </section>
        {/* <Counter /> */}
        <div>
          <h1
            style={{
              fontFamily: "corinthia",
              fontSize: "5vw",
              fontWeight: "bolder",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            Gallery
          </h1>
          <HomeSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
