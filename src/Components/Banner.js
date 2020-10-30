import React from "react";
import SocialMenu from "./SocialMenu";
import resume from "../Assests/Resume_Hridoy v1.4.pdf";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="main">
            <div className="row">
              <h5>
                <div className="line">
                  <span>Hi, my name is</span>
                </div>
              </h5>
              <h1>
                <div className="line">
                  <span>Hridoy</span>
                </div>
              </h1>
              <h2>
                <div className="line">
                  <span>I build things for the web.</span>
                </div>
              </h2>
              <h4>
                <div className="line">
                  <span>
                    I am a tireless seeker of knowledge, an occasional purveyor
                    of wisdom, and also,
                    <br /> coincidentally, a Web Developer. Skilled in
                    JavaScript, React, MongoDB, Firebase, <br /> Node, Express,
                    Bootstrap, Material-UI, HTML, and CSS.
                  </span>
                </div>
              </h4>
              <div className="btn-row">
                <a href={resume} download>
                  <button>Download Resume</button>
                </a>
              </div>
            </div>
          </div>
          <SocialMenu />
        </div>
      </section>
    </>
  );
};

export default Banner;
