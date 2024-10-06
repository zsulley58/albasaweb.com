/* eslint-disable no-unused-vars */

import React from "react";
import blog_1 from "../../assets/blog-images/blog-1.jpg";
import blog_2 from "../../assets/blog-images/blog-2.jpg";
import blog_3 from "../../assets/blog-images/blog-3.jpg";
import blog_4 from "../../assets/blog-images/blog-4.png";
import blog_5 from "../../assets/blog-images/blog-5.jpg";
import blog_6 from "../../assets/blog-images/blog-6.jpg";
import "./BlogsSection.css";

const BlogsSection = () => {
  return (
    <div className="blogs-sections">
      {/* First 3 items */}
      <ul className="top-blogs">
        <li>
          <div className="blogs-section-info">
            <img
              src={blog_1}
              alt="How to find and remove spyware from your phone"
            />
            <div>
              <h3>How to find and remove spyware from your phone</h3>
            </div>
          </div>
          <p className="blog-description">
            iPhone and Android users alike are facing more sophisticated
            surveillance threats than ever before, and some may be close to
            home. Suspect you're being tracked? Here's what to do....
            <br />
            <a
              href="https://www.zdnet.com/article/how-to-find-and-remove-spyware-from-your-phone/"
              className="links btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="blogs-section-info">
            <img
              src={blog_2}
              alt="Sick of ads on Android? Change these 5 settings for more privacy - fast"
            />
            <div>
              <h3>
                Sick of ads on Android? Change these 5 settings for more privacy
                - fast
              </h3>
            </div>
          </div>
          <p className="blog-description">
            If you care about your phone privacy, consider tweaking these
            settings to prevent Android from targeting you with ads. Here's
            how....
            <br />
            <a
              href="https://www.zdnet.com/article/sick-of-ads-on-android-change-these-5-settings-for-more-privacy/"
              className="links btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="blogs-section-info">
            <img
              src={blog_3}
              alt="The best antivirus software and apps you can buy"
            />
            <div>
              <h3>The best antivirus software and apps you can buy</h3>
            </div>
          </div>
          <p className="blog-description">
            If you're looking to protect yourself from the constant threat of
            surveillance and malware, we found the best antivirus that will help
            keep you and your information safe and secure...
            <br />
            <a
              href="https://www.zdnet.com/article/best-antivirus/"
              className="links btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to read the full article.
            </a>
          </p>
        </li>
      </ul>

      {/* Remaining items */}
      <ul className="bottom-blogs">
        <li>
          <div className="blogs-section-info">
            <img
              src={blog_4}
              alt="Scam ‘Funeral Streaming’ Groups Thrive on Facebook"
            />
            <div>
              <h3>Scam ‘Funeral Streaming’ Groups Thrive on Facebook</h3>
            </div>
          </div>
          <p className="blog-description">
            Scammers are flooding Facebook with groups that purport to offer
            video streaming of funeral services for the recently deceased.
            Friends and family who follow the links for the streaming services
            are then asked to cough up their credit card information. Recently,
            these scammers have branched out into offering fake streaming
            services for nearly any kind of event advertised on Facebook. Here’s
            a closer look at the size of this scheme, and some findings about
            who may be responsible...
            <br />
            <a
              href="https://krebsonsecurity.com/2024/09/scam-funeral-streaming-groups-thrive-on-facebook/"
              className="links btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="blogs-section-info">
            <img
              src={blog_5}
              alt="Interpol Arrests 300 People in a Global Crackdown on West African Crime Groups"
            />
            <div>
              <h3>
                Interpol Arrests 300 People in a Global Crackdown on West
                African Crime Groups Across 5 Continents
              </h3>
            </div>
          </div>
          <p className="blog-description">
            In a global operation targeting West African organized crime groups
            across five continents, police arrested 300 people, seized $3
            million and blocked 720 bank accounts, Interpol said Tuesday...
            <br />
            <a
              href="https://www.securityweek.com/interpol-arrests-300-people-in-a-global-crackdown-on-west-african-crime-groups-across-5-continents/"
              className="links btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to read the full article.
            </a>
          </p>
        </li>
        <li>
          <div className="blogs-section-info">
            <img
              src={blog_6}
              alt="Two Nigerians Sentenced to Prison in US for BEC Fraud"
            />
            <div>
              <h3>Two Nigerians Sentenced to Prison in US for BEC Fraud</h3>
            </div>
          </div>
          <p className="blog-description">
            Two Nigerian nationals were sentenced to prison in the US for
            operating a business email compromise (BEC) scheme, the Department
            of Justice announced on Wednesday...
            <br />
            <a
              href="https://www.securityweek.com/two-nigerians-sentenced-to-prison-in-us-for-bec-fraud/"
              className="links btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to read the full article.
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default BlogsSection;
/* eslint-disable no-unused-vars */

import React from "react";
import "./BlogsSection.css";

const BlogsSection = () => {
  return (
    <div className="blogs-sections">
      {/* First 3 items */}
      <ul className="top-blogs">
        <li>
          <div className="blogs-section-info">
            <img src={blog_1} alt="" />
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
          <div className="blogs-section-info">
            <img src={blog_2} alt="" />
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
          <div className="blogs-section-info">
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
            <a href="#" className="links btn">
              Click here to read the full article.
            </a>
          </p>
        </li>
      </ul>

      {/* Remaining items */}
      <ul className="bottom-blogs">
        <li>
          <div className="blogs-section-info">
            <img src={blog_4} alt="" />
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
          <div className="blogs-section-info">
            <img src={blog_4} alt="" />
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
          <div className="blogs-section-info">
            <img src={blog_4} alt="" />
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
          <div className="blogs-section-info">
            <img src={blog_4} alt="" />
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
          <div className="blogs-section-info">
            <img src={blog_4} alt="" />
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

export default BlogsSection;
