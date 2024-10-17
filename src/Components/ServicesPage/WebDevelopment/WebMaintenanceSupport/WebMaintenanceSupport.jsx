import React, { useRef } from "react";
import arrow_down from "../../../../assets/arrow-down.png"; // Ensure this path is correct
import Contact from "../../../Contact/Contact";
import Portfolio from "../../../Portfolio/Portfolio";
import "./WebMaintenanceSupport.css";

const WebMaintenanceSupport = () => {
  // Create a reference to the webMaintenanceSupport section
  const webMaintenanceSupportRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = () => {
    if (webMaintenanceSupportRef.current) {
      webMaintenanceSupportRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Web Maintenance Support HERO SECTION */}
      <section className="webMaintenanceSupport-hero container">
        <div className="webMaintenanceSupport-hero-text">
          <h1>Your Partner in Web Maintenance Support</h1>
          <p>
            Ensuring Your Website Runs Smoothly with Expert and Customer-Centric
            Support Services
          </p>
          <button className="btn dark-btn" onClick={handleScroll}>
            Explore More <img src={arrow_down} alt="Explore more" />
          </button>
        </div>
      </section>

      {/* Web Maintenance Support SECTION */}
      <div
        ref={webMaintenanceSupportRef}
        className="webMaintenanceSupport-section"
      >
        <h2>What is Web Maintenance Support?</h2>
        <p>
          In the fast-paced digital landscape, maintaining your website's
          performance, security, and relevance is crucial for sustained success.{" "}
          <strong>Web Maintenance Support</strong> involves regular updates,
          monitoring, and optimization to ensure your website remains
          functional, secure, and up-to-date. By entrusting your website
          maintenance to experts, you can focus on your core business activities
          while we take care of your online presence.
        </p>

        <h3>Why Choose Albasa Web for Your Web Maintenance Support Needs?</h3>
        <p>
          At <strong>Albasa Web</strong>, we specialize in delivering
          comprehensive Web Maintenance Support services that are professional,
          reliable, and customer-centric. Here's why you can count on us:
        </p>

        <h4>1. Expert Team of Maintenance Specialists</h4>
        <p>
          Our team comprises skilled professionals with extensive experience in
          website maintenance, security, and optimization. We stay updated with
          the latest industry trends and technologies to ensure your website is
          always in top condition.
        </p>

        <h4>2. Customized Maintenance Plans</h4>
        <p>
          We understand that every website has unique needs. That's why we offer
          personalized maintenance plans tailored to your specific requirements.
          Whether you need regular updates, security monitoring, or performance
          optimization, we have the right solution for you.
        </p>

        <h4>3. Proactive Monitoring and Support</h4>
        <p>
          Our proactive approach ensures that potential issues are identified
          and resolved before they become major problems. We provide continuous
          monitoring and support to keep your website running smoothly 24/7.
        </p>

        <h4>4. Transparent Communication</h4>
        <p>
          We believe in maintaining open and honest communication with our
          clients. You'll receive regular reports and updates on your website's
          status, along with any actions taken to enhance its performance and
          security.
        </p>

        <h4>5. Commitment to Quality and Security</h4>
        <p>
          Quality and security are at the forefront of our services. We
          implement best practices to ensure your website is secure from
          vulnerabilities and performs optimally across all devices and
          browsers.
        </p>

        <div className="divider"></div>

        <h3>Our Web Maintenance Support Services</h3>

        <ul>
          <li>
            <strong>Regular Content Updates:</strong> Keeping your website's
            content fresh and relevant with timely updates and additions.
          </li>
          <li>
            <strong>Security Monitoring and Updates:</strong> Implementing the
            latest security patches and monitoring for potential threats to
            protect your website from cyber attacks.
          </li>
          <li>
            <strong>Performance Optimization:</strong> Enhancing your website's
            speed and responsiveness to provide a seamless user experience.
          </li>
          <li>
            <strong>Backup and Recovery:</strong> Regularly backing up your
            website's data and providing quick recovery solutions in case of
            data loss.
          </li>
          <li>
            <strong>Technical Support:</strong> Offering prompt and reliable
            technical support to resolve any issues that arise.
          </li>
          <li>
            <strong>SEO Maintenance:</strong> Continuously optimizing your
            website to maintain and improve its search engine rankings.
          </li>
          <li>
            <strong>Plugin and Theme Management:</strong> Managing and updating
            plugins and themes to ensure compatibility and functionality.
          </li>
        </ul>

        <div className="divider"></div>

        <h3>Our Process</h3>

        <ol>
          <li>
            <strong>Assessment and Planning:</strong> We start by assessing your
            website's current state and understanding your maintenance needs.
            This involves identifying areas that require attention and planning
            the necessary actions.
          </li>
          <li>
            <strong>Implementation:</strong> Our team implements the planned
            maintenance activities, including updates, optimizations, and
            security enhancements.
          </li>
          <li>
            <strong>Monitoring:</strong> We continuously monitor your website to
            ensure it operates smoothly and efficiently, addressing any issues
            that arise promptly.
          </li>
          <li>
            <strong>Reporting:</strong> We provide detailed reports on the
            maintenance activities performed, the current status of your
            website, and any recommendations for further improvements.
          </li>
          <li>
            <strong>Ongoing Support:</strong> We offer ongoing support to
            address any future maintenance needs, ensuring your website remains
            up-to-date and secure.
          </li>
        </ol>

        <div className="divider"></div>

        <h3>Experience the Albasa Web Difference</h3>

        <p>
          Choosing Albasa Web means partnering with a team dedicated to your
          success. We are passionate about providing Web Maintenance Support
          services that not only keep your website running smoothly but also
          enhance its performance and security. Our commitment to excellence and
          customer satisfaction sets us apart.
        </p>

        <div className="divider"></div>

        <button type="button" className="btn dark-btn">
          Contact Us
        </button>

        <p>
          Ready to ensure your website remains robust and efficient? Get in
          touch with us to discuss how our Web Maintenance Support services can
          benefit your organization.
        </p>

        <p>
          <strong>Albasa Web</strong> – Empowering Businesses Through Reliable
          Web Maintenance Solutions
        </p>

        <div className="divider"></div>

        <p>
          <em>Maintain. Secure. Excel.</em>
        </p>
      </div>

      {/* Web Maintenance Support BOTTOM SECTION */}
      <section className="bottom-about container">
        <Portfolio />
        <Contact />
      </section>
    </>
  );
};

export default WebMaintenanceSupport;
