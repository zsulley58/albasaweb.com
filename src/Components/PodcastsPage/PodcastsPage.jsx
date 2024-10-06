import React, { useRef } from "react";
import arrow_down from "../../assets/arrow-down.png";
import Contact from "../Contact/Contact";
import "./podcastsPage.css";
import PodcastsSection from "./PodcastsSection";

const PodcastsPage = () => {
  // Create a reference to the Podcasts section
  const podcastsRef = useRef(null); // Changed to camelCase for convention

  // Function to handle smooth scrolling
  const handleScroll = () => {
    if (podcastsRef.current) {
      podcastsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Podcast HERO SECTION */}
      <section className="podcast-hero container">
        <div className="podcast-hero-text">
          <h1>Bridging the Gap: Web Innovation and Cyber Defense</h1>
          <h2>
            Unveiling Cutting-Edge Solutions and Cyber Threat Countermeasures
          </h2>
          <p>
            Join us on a journey through the evolving landscape of web
            development and cybersecurity. In this podcast, we explore how
            innovative technologies are transforming the way we build and
            protect online platforms. From the latest development frameworks to
            advanced threat mitigation strategies, we delve into the tools and
            practices that are shaping the future of the digital world.
          </p>
          <p>
            <strong>
              Stay ahead of the curve by understanding how to integrate robust
              security measures without compromising on innovation and user
              experience.
            </strong>
          </p>
          <button className="btn dark-btn" onClick={handleScroll}>
            Explore more <img src={arrow_down} alt="Explore more" />
          </button>
        </div>
      </section>

      {/* Podcasts SECTION */}
      <div ref={podcastsRef} className="podcasts-section">
        {" "}
        {/* Changed ref name to camelCase */}
        <PodcastsSection />
      </div>

      {/* BOTTOM SECTION */}
      <section className="bottom-section container">
        <Contact />
      </section>
    </>
  );
};

export default PodcastsPage;
