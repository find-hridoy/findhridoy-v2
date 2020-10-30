import React, { useEffect } from "react";
import gsap from "gsap";

let tl = gsap.timeline();
const Blogs = () => {
  useEffect(() => {
    tl.from("h3", 2.5, {
      delay: 0.8,
      skewY: 0,
      opacity: 0,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);
  return (
    <div className="blogs-area">
      <h3>Blogs is Comming Soon</h3>
    </div>
  );
};

export default Blogs;
