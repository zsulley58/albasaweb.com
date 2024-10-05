import React, { useRef } from "react";
import arrow_down from "../../assets/arrow-down.png";
import Contact from "../Contact/Contact";
import "./ContactPage.css";

const ContactPage = () => {
  // Create a reference to the Contact section
  const contactRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="contact-hero container">
        <div className="contact-hero-text">
          <h1>Get in Touch with Us</h1>
          <h2>
            We're Here to Help with Your Web Development and Cybersecurity Needs
          </h2>
          <p>
            Whether you have a question, need assistance, or want to discuss a
            new project, our team is here for you. Reach out to us, and we'll
            get back to you promptly to help you achieve your online goals.
          </p>

          <button className="btn dark-btn" onClick={handleScroll}>
            Send us a message <img src={arrow_down} alt="Send us a message" />
          </button>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
};

export default ContactPage;
