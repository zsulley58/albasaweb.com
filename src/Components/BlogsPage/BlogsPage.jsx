import React, { useRef } from "react";
import arrow_down from "../../assets/arrow-down.png";
import Contact from "../Contact/Contact";
import "./BlogsPage.css";
import BlogsSection from "./BlogsSection";

const BlogsPage = () => {
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
      <section className="blog-hero container">
        <div className="blog-hero-text">
          <h1>Explore the Cutting Edge of Web Development and Cybersecurity</h1>
          <h2>Insights, Tutorials, and Industry News at Your Fingertips</h2>
          <p>
            Welcome to our blog page, your go-to resource for insights and
            updates on professional web development and cybersecurity. Here, we
            share expert articles, tutorials, and the latest industry news to
            help you stay ahead in the digital world.
          </p>
          <p>
            Discover how innovative web solutions and robust cybersecurity
            practices can transform your business and protect your online
            assets.
          </p>
          <p>
            <strong>
              Join us on this journey to build a secure and impactful online
              presence.
            </strong>
          </p>
          <button className="btn dark-btn" onClick={handleScroll}>
            Explore more <img src={arrow_down} alt="Explore more" />
          </button>
        </div>
      </section>

      {/* PORTFOLIOS SECTION */}
      <div ref={portfoliosRef} className="blogs-section">
        <BlogsSection />
      </div>

      {/* BOTTOM SECTION */}
      <section className="bottom-section container">
        <Contact />
      </section>
    </>
  );
};

export default BlogsPage;
