import React, { useRef } from "react";
import { Link } from "react-router-dom";
import arrow_down from "../../assets/arrow-down.png";
import white_arrow from "../../assets/white-arrow.png";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Podcasts from "../Podcasts/Podcasts";
import Portfolio from "../Portfolio/Portfolio";
import "./AboutPage.css";

const AboutPage = () => {
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
      <section className="about-hero container">
        <div className="about-hero-text">
          <h1>Expert Web Development and Cybersecurity Solutions</h1>
          <p>
            We build and protect your digital presence with innovative web and
            security solutions tailored to your business needs.
          </p>
          <button className="btn dark-btn" onClick={handleScroll}>
            Explore more <img src={arrow_down} alt="Explore more" />
          </button>
        </div>
      </section>

      <section className="about-page container" ref={portfoliosRef}>
        <h3>About us</h3>
        <h2>Expert Web Development and Cybersecurity Solutions</h2>
        <p>
          At Albasa Web, we are passionate about creating secure,
          high-performing, and innovative digital solutions tailored to meet the
          unique needs of our clients. With a strong foundation in web
          development, penetration testing, cybersecurity, and a suite of other
          web solutions, we are committed to helping businesses thrive in an
          increasingly digital world.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses by providing cutting-edge web
          development services and robust cybersecurity solutions that protect
          and enhance their online presence. We believe in delivering
          exceptional value through our expertise, customer-centric approach,
          and dedication to quality.
        </p>

        <h2>Who We Are</h2>
        <p>
          Founded by a team of seasoned professionals, Albasa Web brings
          together a wealth of experience in the tech industry. Our diverse team
          of developers, cybersecurity experts, and web solution specialists
          work collaboratively to deliver projects that exceed expectations. We
          pride ourselves on staying ahead of industry trends, ensuring that our
          clients benefit from the latest technologies and security practices.
        </p>

        <h3>What We Do</h3>
        <ul>
          <li>
            <strong>Web Development:</strong> From sleek, responsive websites to
            complex web applications, we craft digital experiences that engage
            and convert. Our development process is rooted in best practices,
            ensuring that our solutions are not only beautiful but also
            functional and scalable.
          </li>
          <li>
            <strong>Cybersecurity:</strong> In today’s landscape, securing your
            digital assets is more critical than ever. Our cybersecurity
            services are designed to protect your business from threats,
            ensuring that your data remains safe and your reputation intact.
          </li>
          <li>
            <strong>Other Web Solutions:</strong> Whether you need e-commerce
            development, SEO optimization, or custom software solutions, we have
            the expertise to deliver. Our goal is to be your one-stop shop for
            all things web-related, helping you achieve your business goals with
            efficiency and innovation.
          </li>
        </ul>
        <Link to="/contact">
          <button className="btn dark-btn">
            Get your Quote here <img src={white_arrow} alt="Get your Quote" />
          </button>
        </Link>
      </section>
      <section className="bottom-about container">
        <Portfolio />
        <Blogs />
        <Podcasts />
        <Contact />
      </section>
    </>
  );
};

export default AboutPage;
