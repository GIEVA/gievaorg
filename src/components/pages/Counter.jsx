import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter() {
  return (
    <div>
      {/* <div className="content" /> */}
      <section className="countercont">
        <div className="prog">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div className="countnum">
                {isVisible ? <CountUp end={10000} duration={5} /> : 0}{" "}
                <span>+</span>
              </div>
            )}
          </VisibilitySensor>
          <h4>We have trained over students for SAT, TOFEL and GMAT</h4>
        </div>
        <div className="prog">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div className="countnum">
                {isVisible ? <CountUp end={600} duration={5} /> : 0}{" "}
                <span>+</span>
              </div>
            )}
          </VisibilitySensor>
          <h4>
            We have trained over 600 women on the use of generative artificial
            intelligence
          </h4>
        </div>
        <div className="prog">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div className="countnum">
                {isVisible ? <CountUp end={20} duration={5} /> : 0}{" "}
                <span>years</span>
              </div>
            )}
          </VisibilitySensor>
          <h4>We have existed for over 20 years now</h4>
        </div>
        <div className="prog">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div className="countnum">
                {isVisible ? <CountUp end={30} duration={5} /> : 0}{" "}
                <span>+</span>
              </div>
            )}
          </VisibilitySensor>
          <h4>We currently partner with over 30 organizations</h4>
        </div>
      </section>
    </div>
  );
}

export default Counter;
