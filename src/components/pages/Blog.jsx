import React from "react";

function Blog() {
  return (
    <div>
      <div className="blogcont">
        <div className="blogtop">
          <p>Join us as we drive change</p>
        </div>
        <div className="blogeach">
          <p className="blogcont">Gen. AI campaign</p>
          <div className="imgba"></div>
          <div className="imgbb">
            <p className="blogha">
              Generative Artificial Intelligence is transforming our world today
            </p>
            <hr style={{ width: "50px", color: "orange" }} />
            {/* <p className="bloghb">by data.org</p> */}
          </div>
        </div>
      </div>

      {/* <p className="blogcont">Data for social impact conference</p>
      <div className="imgbb">
        <video width="600" controls>
          <source src="./" type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <p className="blogha">Importance of data science</p>
        <hr style={{ width: "50px", color: "orange" }} />
        <p className="bloghb">by data.org</p>
      </div> */}
    </div>
  );
}

export default Blog;
