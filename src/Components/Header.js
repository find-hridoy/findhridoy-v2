import React, { useState } from "react";
import Burger from "react-css-burger";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    setState(!state);
  };
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row v-center space-between">
            <div className="logo">
              <NavLink to="/" exact>
                HRIDOY
              </NavLink>
            </div>
            <div className="nav-toggle">
              <Burger
                onClick={handleClick}
                active={isActive}
                burger="collapse"
                color="#fff"
                hoverOpacity={0.8}
                scale={0.8}
              />
            </div>
          </div>
        </div>
      </div>
      <Navigation state={state} />
    </>
  );
};

export default Header;

// onClick={() => setMenuState({ menuOpened: true })}

// onClick={() => setMenuState({ menuOpened: false })}
