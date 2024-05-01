'use client'
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import gif from "@/public/Animation.json";

const AnimationComponent = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current!, // the dom element
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: `${gif}`, // the path to the animation json
    });

    return () => anim.destroy(); // optional clean up for unmounting
  }, []);

  return <div ref={animationContainer}></div>;
};

export default AnimationComponent;