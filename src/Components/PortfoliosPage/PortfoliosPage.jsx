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
          <h1>
            We Offer Professional Web Development & Cybersecurity Services
          </h1>
          <p>
            We provide professional web development and cybersecurity services,
            ensuring modern, responsive websites with clean code while
            protecting your digital assets. Our expertise combines innovative
            design with top-tier security to safeguard your brand and drive
            success.
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
