/* eslint-disable no-unused-vars */

import React from "react";
import e_commerce from "../../assets/services-images/e-commerce-image.jpg";
import incident_response from "../../assets/services-images/incident-response-forensics.png";
import pentest from "../../assets/services-images/pen-testing.png";
import security_awareness from "../../assets/services-images/security-awareness -training.jpg";
import seo_optimization from "../../assets/services-images/seo-optimization-image.png";
import web_application from "../../assets/services-images/web-application-security.png";
import custom_web from "../../assets/services-images/website-image.jpg";
import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="services-sections">
      <h1>Web Development Services</h1>
      {/* First 3 items */}
      <ul className="top-services">
        <li>
          <div className="services-section-info">
            <img src={custom_web} alt="" />
            <div>
              <h3>Custom Web Development</h3>
            </div>
          </div>
          <p>
            At ALBASA WEB, we specialize in creating websites that are designed
            just for you. Our Custom Web Development service means that we build
            everything from scratch, focusing on your unique needs and business
            goals. Whether you need a sleek portfolio, an e-commerce solution,
            or a fully interactive web application, we deliver a solution that
            perfectly fits your vision.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={e_commerce} alt="" />
            <div>
              <h3>E-Commerce Development</h3>
            </div>
          </div>
          <p>
            At ALBASA WEB, we know that selling online is more than just putting
            products on a page—it's about creating an engaging, seamless
            shopping experience that keeps customers coming back. Our E-Commerce
            Development service focuses on building a fully customized online
            store that is designed to convert visitors into loyal customers,
            while keeping your brand and goals at the center.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
      </ul>

      {/* Remaining items */}
      <ul className="bottom-services">
        <li>
          <div className="services-section-info">
            <img src={seo_optimization} alt="" />
            <div>
              <h3>SEO Optimization</h3>
            </div>
          </div>
          <p>
            In today’s digital world, being visible online is crucial for
            success. At ALBASA WEB, our SEO Optimization service is designed to
            help your website rank higher in search engines, drive more traffic,
            and attract the right audience. We use proven strategies to make
            sure your business stands out and reaches potential customers
            effectively.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={custom_web} alt="" />
            <div>
              <h3>Web Maintainance & Support</h3>
            </div>
          </div>
          <p>
            A successful website requires ongoing attention and support to keep
            it secure, up-to-date, and performing at its best. At ALBASA WEB,
            our Web Maintenance & Support service ensures your website stays in
            optimal condition, providing you with peace of mind so you can focus
            on growing your business.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
      </ul>
      <h1>Cybersecurity Services</h1>
      {/* Cybersecurity Section */}
      <ul className="top-services">
        <li>
          <div className="services-section-info">
            <img src={pentest} alt="" />
            <div>
              <h3>Penetration Testing</h3>
            </div>
          </div>
          <p>
            In a world where cyber threats are on the rise, it’s essential to
            know your digital defenses are strong enough to protect your
            business. At ALBASA WEB, our Penetration Testing service is designed
            to identify and address vulnerabilities before attackers can exploit
            them, giving you the confidence that your systems are secure.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
        <li>
          <div className="services-section-info">
            <img src={security_awareness} alt="" />
            <div>
              <h3>Security Awareness Training</h3>
            </div>
          </div>
          <p>
            The strength of your cybersecurity doesn’t rely solely on
            technology—it also depends on your people. At ALBASA WEB, our
            Security Awareness Training service is designed to educate and
            empower your employees to recognize and respond to security threats,
            reducing the risk of human error and enhancing your overall security
            posture.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
      </ul>

      {/* Remaining items */}
      <ul className="bottom-services">
        <li>
          <div className="services-section-info">
            <img src={web_application} alt="" />
            <div>
              <h3>Web Application Security</h3>
            </div>
          </div>
          <p>
            Web applications are a critical part of modern business operations,
            but they are also prime targets for cybercriminals. At ALBASA WEB,
            our Web Application Security service is designed to protect your
            applications from threats, ensuring they are secure, reliable, and
            resilient against attacks. We help safeguard your sensitive data and
            maintain the trust of your users by implementing industry-leading
            security measures.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>

        <li>
          <div className="services-section-info">
            <img src={incident_response} alt="" />
            <div>
              <h3>Incident Response and Forensics</h3>
            </div>
          </div>
          <p>
            When a security breach occurs, a swift and effective response is
            crucial to minimize damage and recover quickly. At ALBASA WEB, our
            Incident Response and Forensics service helps you contain,
            investigate, and recover from security incidents, providing the
            expertise you need to respond effectively and understand the root
            cause of the incident.
            <br />
            <a href="#" className="links btn">
              Contact Us.
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ServicesSection;
