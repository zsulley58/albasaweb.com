import React, { useRef } from "react";
import arrow_down from "../../assets/arrow-down.png";
import Contact from "../Contact/Contact";
import "./PortfoliosPage.css";
import PortfoliosSection from "./PortfoliosSection";

const PortfoliosPage = () => {
  // Create a reference to the portfolios section
  const portfoliosRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = () => {
    if (portfoliosRef.current) {
      portfoliosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* PORTFOLIO HERO SECTION */}
      <section className="portfolio-hero container">
        <div className="portfolio-hero-text">
          <h1>Our Professional Web Development & Cybersecurity Portfolios</h1>
          <h2>Elevate Your Digital Presence with Confidence</h2>
          <p>
            Welcome to our world of professional web development and
            cybersecurity excellence. Our portfolios showcase a blend of
            innovative web solutions and robust cybersecurity strategies
            designed to propel your business forward.
          </p>
          <p>
            Discover how we create engaging, user-friendly websites while
            ensuring your digital assets are protected against evolving cyber
            threats. Let us help you build a secure and impactful online
            presence.
          </p>
          <button className="btn dark-btn" onClick={handleScroll}>
            Explore more <img src={arrow_down} alt="Explore more" />
          </button>
        </div>
      </section>

      {/* PORTFOLIOS SECTION */}
      <div ref={portfoliosRef} className="portfolios-section">
        <PortfoliosSection />
      </div>

      {/* BOTTOM SECTION */}
      <section className="bottom-section container">
        <Contact />
      </section>
    </>
  );
};

export default PortfoliosPage;
