import React from "react";
import white_arrow from "../../assets/white-arrow.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Expert Web Development and Cybersecurity Solutions</h1>
        <p>
          We build and protect your digital presence with innovative web and
          security solutions tailored to your business needs.
        </p>
        <button className="btn dark-btn">
          Explore more <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
