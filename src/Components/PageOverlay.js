import React from "react";
import "../../node_modules/spinkit/spinkit.min.css";

const PageOverlay = () => {
  return (
    <>
      <div className="page-overlay">
        <div class="sk-fold">
          <div class="sk-fold-cube"></div>
          <div class="sk-fold-cube"></div>
          <div class="sk-fold-cube"></div>
          <div class="sk-fold-cube"></div>
        </div>
      </div>
    </>
  );
};

export default PageOverlay;
