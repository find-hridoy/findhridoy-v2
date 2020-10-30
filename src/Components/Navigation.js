import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
let tl = gsap.timeline();
const Navigation = ({ state }) => {
  // Create varibles of our dom nodes
  let menu = useRef(null);
  // let reveal1 = useRef(null);
  // let reveal2 = useRef(null);
  useEffect(() => {
    if (state === false) {
      // tl.from([reveal1, reveal2], {
      //   duration: 0.8,
      //   height: 0,
      //   ease: "power3.inOut",
      //   stagger: {
      //     amount: 0.07,
      //   },
      // });
      tl.to(menu, { duration: 0, css: { display: "none" } });
    } else if (state === true) {
      // tl.from([reveal1, reveal2], {
      //   duration: 0.8,
      //   height: 0,
      //   transformOrigin: "right top",
      //   skewY: 2,
      //   ease: "power3.inOut",
      //   stagger: {
      //     amount: 0.1,
      //   },
      // });
      tl.to(menu, { duration: 0, css: { display: "block" } });
    }
  }, [state]);
  return (
    <nav ref={(el) => (menu = el)}>
      <div className="first-layer">
        <div className="second-layer">
          <div className="container">
            <div className="nav-columns">
              <div className="nav-column">
                <div className="nav-label">Menu</div>
                <ul className="nav-links">
                  <li>
                    <NavLink to="/about" exact>
                      About Me
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/projects" exact>
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs" exact>
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" exact>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* <div className="nav-column">
                <div className="nav-label">Contact</div>
                <div className="nav-infos">
                  <ul className="nav-info">
                    <li className="nav-info-label">Email</li>
                    <li>
                      <NavLink to="/contact" exact>
                        Get in touch with us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/audit" exact>
                        Get a free audit
                      </NavLink>
                    </li>
                  </ul>
                  <ul className="nav-info">
                    <li className="nav-info-label">Headquarter</li>
                    <li>Route du Jura 49</li>
                    <li>1700 Fribourg</li>
                    <li>Switzerland</li>
                  </ul>
                  <ul className="nav-info">
                    <li className="nav-info-label">Phone</li>
                    <li>+41 (0) 79 510 28 70</li>
                  </ul>
                  <ul className="nav-info">
                    <li className="nav-info-label">Legal</li>
                    <li>Privacy & Cookies</li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
