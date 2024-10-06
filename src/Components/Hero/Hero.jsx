import React, { useRef } from "react";
import arrow_down from "../../assets/arrow-down.png";
import "./Hero.css";

const Hero = () => {
  // Create a reference to the about section
  const aboutRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hero container">
        <div className="hero-text">
          <h1>Expert Web Development and Cybersecurity Solutions</h1>
          <p>
            We build and protect your digital presence with innovative web and
            security solutions tailored to your business needs.
          </p>
          <button className="btn dark-btn" onClick={handleScroll}>
            Explore more <img src={arrow_down} alt="Explore more" />
          </button>
        </div>
      </div>

      {/* About SECTION */}
      <div ref={aboutRef} className="about-section"></div>
    </>
  );
};

export default Hero;
