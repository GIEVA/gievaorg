import React, { useState, useEffect } from "react";

function Coolslider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4); // Assuming there are 5 nested divs
    }, 4000); // Change item every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <div className="bigslider">
        <div className="list">
          <div
            className={`bigitem ${currentIndex === 0 ? "visible" : "hidden"}`}
          >
            <img src={require("../images/opening2.jpg")} alt="gieva" />
            <div className="bigcontent">
              <div className="maintitle">we educate</div>
              <div className="subtitle">for the future</div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                laborum enim obcaecati unde repellat magnam. Veniam itaque vero
                enim ad? Dolorum oribus! Odio aut ad dolor ipsam officiis vero
                tempore aliquam cupiditate sequi?{" "}
              </div>
              <div className="seemore">
                <button>see more</button>
              </div>
              <div className="bot">we have got you covered</div>
            </div>
          </div>
          <div
            className={`bigitem ${currentIndex === 1 ? "visible" : "hidden"}`}
          >
            <img src={require("../images/bgmom.jpg")} alt="gieva" />
            <div className="bigcontent">
              <div className="maintitle">we inspire</div>
              <div className="subtitle">follow us</div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                laborum enim obcaecati unde repellat magnam. Veniam itaque vero
                enim ad? Dolorum oribus! Odio aut ad dolor ipsam officiis vero
                tempore aliquam cupiditate sequi?{" "}
              </div>
              <div className="seemore">
                <button>see more</button>
              </div>
              <div className="bot">we have got you covered</div>
            </div>
          </div>
          <div
            className={`bigitem ${currentIndex === 2 ? "visible" : "hidden"}`}
          >
            <img src={require("../images/collab.jpg")} alt="gieva" />
            <div className="bigcontent">
              <div className="maintitle">we collaborate</div>
              <div className="subtitle">together</div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                laborum enim obcaecati unde repellat magnam. Veniam itaque vero
                enim ad? Dolorum oribus! Odio aut ad dolor ipsam officiis vero
                tempore aliquam cupiditate sequi?{" "}
              </div>
              <div className="seemore">
                <button>see more</button>
              </div>
              <div className="bot">we have got you covered</div>
            </div>
          </div>
          <div
            className={`bigitem ${currentIndex === 3 ? "visible" : "hidden"}`}
          >
            <img src={require("../images/homeRach.jpg")} alt="gieva" />
            <div className="bigcontent">
              <div className="maintitle">we volunteer</div>
              <div className="subtitle">for the future</div>
              <div className="desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                laborum enim obcaecati unde repellat magnam. Veniam itaque vero
                enim ad? Dolorum oribus! Odio aut ad dolor ipsam officiis vero
                tempore aliquam cupiditate sequi?{" "}
              </div>
              <div className="seemore">
                <button>see more</button>
              </div>
              <div className="bot">we have got you covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coolslider;
