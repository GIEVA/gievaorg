import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counter() {
  return (
    <div>
      {/* <div className="content" /> */}
      <section className="countercont">
        <div className="prog">
          <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
            {({ isVisible }) => (
              <div className="countnum">
                {isVisible ? <CountUp end={18} duration={5} /> : 0}{" "}
                <span>years</span>
              </div>
            )}
          </VisibilitySensor>
          <h4>Of being in existence</h4>
        </div>
        <div className="prog">
          <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
            {({ isVisible }) => (
              <div className="countnum">
                {isVisible ? <CountUp end={10000} duration={5} /> : 0}{" "}
                <span>+</span>
              </div>
            )}
          </VisibilitySensor>
          <h4>
            Applicants assisted with the SAT, TOEFL, IELTS, GRE, and GMAT tests
          </h4>
        </div>
        <div className="prog">
          <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
            {({ isVisible }) => (
              <div className="countnum">
                {isVisible ? <CountUp end={2000} duration={5} /> : 0}{" "}
                <span>+</span>
              </div>
            )}
          </VisibilitySensor>
          <h4>
            Applicants assisted with international admission (HEALS) placements
          </h4>
        </div>
        <div className="prog">
          <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
            {({ isVisible }) => (
              <div className="countnum">
                {isVisible ? <CountUp end={900} duration={5} /> : 0}{" "}
                <span>+</span>
              </div>
            )}
          </VisibilitySensor>
          <h4>
            Women trained on the use of Generative Artificial Intelligence
          </h4>
        </div>
        <div className="prog">
          <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
            {({ isVisible }) => (
              <div className="countnum">
                {isVisible ? <CountUp end={5000} duration={5} /> : 0}{" "}
                <span>+</span>
              </div>
            )}
          </VisibilitySensor>
          <h4>Applicants assisted with SEVIS and VISA process</h4>
        </div>

        <div className="prog">
          <VisibilitySensor partialVisibility offset={{ bottom: 20 }}>
            {({ isVisible }) => (
              <div className="countnum">
                {isVisible ? <CountUp end={20} duration={5} /> : 0}{" "}
                <span>+</span>
              </div>
            )}
          </VisibilitySensor>
          <h4>Partner organizations</h4>
        </div>
      </section>
    </div>
  );
}

export default Counter;
