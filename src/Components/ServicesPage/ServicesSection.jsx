/* eslint-disable no-unused-vars */

import React from "react";
import blog_1 from "../../assets/blog-1.png";
import blog_2 from "../../assets/blog-2.png";
import blog_3 from "../../assets/blog-3.png";
import blog_4 from "../../assets/blog-4.png";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="services-sections">
      {/* First 3 items */}
      <ul className="top-services">
        <li>
          <div className="services-section-info">
            <img src={blog_1} alt="" />
            <div>
              <h3>Top Web Development Trends to Watch in 2024</h3>
            </div>
          </div>
          <p>
            The web development landscape is constantly evolving, with new
            technologies, frameworks, and methodologies emerging every year...
            <br />
            <a href="#" className="links">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_2} alt="" />
            <div>
              <h3>The Benefits of Custom Web Development vs. Templates</h3>
            </div>
          </div>
          <p>
            In today’s digital era, having a website is a necessity for any
            business looking to establish a strong online presence...
            <br />
            <a href="#" className="links">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_3} alt="" />
            <div>
              <h3>
                Common Cybersecurity Threats in 2024 and How to Protect Your
                Business
              </h3>
            </div>
          </div>
          <p>
            As technology continues to evolve, so do the tactics and strategies
            used by cybercriminals...
            <br />
            <a href="#" className="links">
              Click here to read the full article.
            </a>
          </p>
        </li>
      </ul>

      {/* Remaining items */}
      <ul className="bottom-services">
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={blog_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links">
              Click here to read the full article.
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ServicesSection;
