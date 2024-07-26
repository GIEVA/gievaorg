import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
              <div className="maintitle">We educate</div>
              <div className="subtitle">for success</div>
              <div className="desc">
                Inspiring minds through education, we ignite a passion for
                lifelong learning and discovery. Together, we build a brighter
                future by providing the knowledge, skills, and opportunities
                needed for success in an ever-changing world
              </div>
              <div className="seemore">
                <button>
                  <Link to={"About"}>See More</Link>
                </button>
              </div>
              <div className="bot">We build a brighter future</div>
            </div>
          </div>
          <div
            className={`bigitem ${currentIndex === 1 ? "visible" : "hidden"}`}
          >
            <img src={require("../images/bgmom.jpg")} alt="gieva" />
            <div className="bigcontent">
              <div className="maintitle">We inspire</div>
              <div className="subtitle">Now and always</div>
              <div className="desc">
                Empowering young minds today fosters a brighter, more innovative
                tomorrow. Together, we ignite potential, nurture dreams, and
                inspire the leaders of the future
              </div>
              <div className="seemore">
                <button>
                  <Link to={"About"}>See More</Link>
                </button>
              </div>
              <div className="bot">we will never retire</div>
            </div>
          </div>
          <div
            className={`bigitem ${currentIndex === 2 ? "visible" : "hidden"}`}
          >
            <img src={require("../images/collab.jpg")} alt="gieva" />
            <div className="bigcontent">
              <div className="maintitle">We collaborate</div>
              <div className="subtitle">with you</div>
              <div className="desc">
                Together, we achieve more. By embracing collaboration, we unite
                diverse talents and perspectives, creating solutions that make a
                lasting impact on our communities and the world
              </div>
              <div className="seemore">
                <button>
                  <Link to={"About"}>See More</Link>
                </button>
              </div>
              <div className="bot">Together is even better</div>
            </div>
          </div>
          <div
            className={`bigitem ${currentIndex === 3 ? "visible" : "hidden"}`}
          >
            <img src={require("../images/homeRach.jpg")} alt="gieva" />
            <div className="bigcontent">
              <div className="maintitle">We volunteer</div>
              <div className="subtitle"> giving unlimited</div>
              <div className="desc">
                Through the power of volunteering, we connect hearts and hands
                to make a meaningful difference. Together, we create positive
                change and build stronger, more compassionate communities
              </div>
              <div className="seemore">
                <button>
                  <Link to={"About"}>See More</Link>
                </button>
              </div>
              <div className="bot">All to better the world</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coolslider;
