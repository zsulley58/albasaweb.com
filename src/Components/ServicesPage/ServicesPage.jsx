import React, { useRef } from "react";
import arrow_down from "../../assets/arrow-down.png";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Podcasts from "../Podcasts/Podcasts";
import Portfolio from "../Portfolio/Portfolio";
import "./ServicesPage.css";
import ServicesSection from "./ServicesSection";

const ServicesPage = () => {
  // Create a reference to the services section
  const servicesRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* SERVICE HERO SECTION */}
      <section className="service-hero container">
        <div className="service-hero-text">
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

      {/* SERVICES SECTION */}
      <div ref={servicesRef} className="services-section">
        <ServicesSection />
      </div>

      {/* SERVICES BOTTOM SECTION */}
      <section className="bottom-about container">
        <Portfolio />
        <Blogs />
        <Podcasts />
        <Contact />
      </section>
    </>
  );
};

export default ServicesPage;
