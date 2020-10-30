import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import gsap from "gsap";

let tl = gsap.timeline();
const Home = () => {
  useEffect(() => {
    tl.from(".logo ,.nav-toggle", 1.5, {
      y: -100,
      ease: "expo.inOut",
      delay: -3,
      skewY: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.from(".line span", 1.8, {
      y: 130,
      ease: "power4.out",
      delay: -2,
      skewY: 0,
      stagger: {
        amount: 0.5,
      },
    });
    tl.from(".btn-row", 1.5, {
      opacity: 0,
      delay: -1,
      skewY: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.from(".social-menu", 1.5, {
      y: 300,
      ease: "expo.inOut",
      delay: -2,
      skewY: 0,
      stagger: {
        amount: 0.3,
      },
    });
  }, []);
  return (
    <>
      <Banner />
    </>
  );
};

export default Home;
