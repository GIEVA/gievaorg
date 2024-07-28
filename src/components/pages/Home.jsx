import React from "react";
import HomeSlider from "./HomeSlider";
import Homebody from "./Homebody";
import Gallery from "./Gallery";
import Coolslider from "./Coolslider";
import Counter from "./Counter";
import { Link } from "react-router-dom";

const images = [1, 2, 3, 4];
const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
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
            className="galhead"
            onClick={scrollToTop}
            style={{
              fontFamily: "corinthia",
              fontSize: "50px",
              fontWeight: "bolder",
              marginTop: "40px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <Link to={"Gallery"}>Gallery</Link>
          </h1>
          <HomeSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
