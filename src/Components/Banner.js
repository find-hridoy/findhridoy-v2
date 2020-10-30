import React from "react";
import SocialMenu from "./SocialMenu";

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
                    I'm a software engineer based in Boston, MA specializing in{" "}
                    <br />
                    building (and occasionally designing) exceptional websites,{" "}
                    <br />
                    applications, and everything in between.
                  </span>
                </div>
              </h4>
              <div className="btn-row">
                {/* <a href="/">More about us <RightArrow /></a> */}
                <button>Download Resume</button>
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
