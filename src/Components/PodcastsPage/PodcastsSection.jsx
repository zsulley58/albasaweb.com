/* eslint-disable no-unused-vars */

import React from "react";
import podcast_1 from "../../assets/podcasts-1.jpg";
import podcast_2 from "../../assets/podcasts-2.jpg";
import podcast_3 from "../../assets/podcasts-3.jpg";
import podcast_4 from "../../assets/podcasts-4.jpg";
import "./PodcastsSection.css";

const PodcastsSection = () => {
  return (
    <div className="podcasts-sections">
      {/* First 3 items */}
      <ul className="top-podcasts">
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_1} alt="" />
            <div>
              <h3>Top Web Development Trends to Watch in 2024</h3>
            </div>
          </div>
          <p>
            The web development landscape is constantly evolving, with new
            technologies, frameworks, and methodologies emerging every year...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_2} alt="" />
            <div>
              <h3>The Benefits of Custom Web Development vs. Templates</h3>
            </div>
          </div>
          <p>
            In today’s digital era, having a website is a necessity for any
            business looking to establish a strong online presence...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_3} alt="" />
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
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
      </ul>
      {/* Remaining items */}
      <ul className="bottom-podcasts">
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="podcasts-section-info">
            <img src={podcast_4} alt="" />
            <div>
              <h3>Cybersecurity Best Practices for Remote Work</h3>
            </div>
          </div>
          <p>
            Remote work has become a standard for many businesses around the
            world, offering flexibility and efficiency...
            <br />
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PodcastsSection;
