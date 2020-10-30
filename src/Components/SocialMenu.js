import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);
const SocialMenu = () => {
  return (
    <>
      <div className="social-menu">
        <div className="social-row row">
          <FontAwesomeIcon className="brand-icon" icon={["fab", "linkedin"]} />
          <FontAwesomeIcon className="brand-icon" icon={["fab", "github"]} />
          <FontAwesomeIcon className="brand-icon" icon={["fab", "facebook"]} />
          <FontAwesomeIcon className="brand-icon" icon={["fab", "telegram"]} />
          <FontAwesomeIcon className="brand-icon" icon={["fab", "instagram"]} />
          <span></span>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SocialMenu;
