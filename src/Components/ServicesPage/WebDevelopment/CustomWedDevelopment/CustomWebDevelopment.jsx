import React, { useRef } from "react";
import arrow_down from "../../../../assets/arrow-down.png"; // Make sure this path is correct
import Contact from "../../../Contact/Contact";
import Portfolio from "../../../Portfolio/Portfolio";
import "./CustomWebDevelopment.css";

const CustomWebDevelopment = () => {
  // Create a reference to the customWebDevelopment section
  const customWebDevelopmentRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = () => {
    if (customWebDevelopmentRef.current) {
      customWebDevelopmentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Custom Web Development HERO SECTION */}
      <section className="customWebDevelopment-hero container">
        <div className="customWebDevelopment-hero-text">
          <h1>Your Partner in Custom Web Development</h1>
          <p>Building Tailored Digital Solutions to Elevate Your Business</p>
          <button className="btn dark-btn" onClick={handleScroll}>
            Explore more <img src={arrow_down} alt="Explore more" />
          </button>
        </div>
      </section>

      {/* Custom Web Development SECTION */}
      <div
        ref={customWebDevelopmentRef}
        className="customWebDevelopment-section"
      >
        <h2>What is Custom Web Development?</h2>
        <p>
          In today's digital landscape, having a unique and effective online
          presence is essential for any business aiming to succeed.{" "}
          <strong>Custom web development</strong> involves creating websites and
          web applications specifically tailored to meet your organization's
          unique needs and objectives. Unlike generic templates, custom
          solutions offer greater flexibility, scalability, and the ability to
          integrate features that align precisely with your business goals.
        </p>

        <h3>Why Choose Albasa Web for Your Custom Web Development Needs?</h3>
        <p>
          At <strong>Albasa Web</strong>, we specialize in delivering custom web
          development services that are professional, innovative, and
          customer-centric. Here's why you can count on us:
        </p>

        <h4>1. Expert Team of Developers</h4>
        <p>
          Our team comprises skilled developers proficient in a wide range of
          technologies, including HTML5, CSS3, JavaScript, PHP, Python, and
          more. We stay abreast of the latest industry trends to ensure your
          project leverages cutting-edge technologies and best practices.
        </p>

        <h4>2. Customized Solutions</h4>
        <p>
          We understand that every business is unique. That's why we offer
          personalized web development services designed to reflect your brand
          identity and meet your specific requirements. From concept to
          deployment, we tailor every aspect of your project to achieve your
          desired outcomes.
        </p>

        <h4>3. User-Centric Design</h4>
        <p>
          Our designs focus on providing an exceptional user experience. We
          create intuitive interfaces and seamless navigation to engage your
          audience and drive conversions.
        </p>

        <h4>4. Transparent Communication</h4>
        <p>
          We believe in maintaining open and honest communication throughout the
          development process. You'll receive regular updates and have direct
          access to our team to discuss any questions or changes.
        </p>

        <h4>5. Commitment to Quality and Support</h4>
        <p>
          Quality is at the forefront of everything we do. We conduct thorough
          testing to ensure your website is robust, secure, and performs
          optimally across all devices and browsers. Post-launch, we offer
          ongoing support and maintenance to keep your site running smoothly.
        </p>

        <div className="divider"></div>

        <h3>Our Custom Web Development Services</h3>

        <ul>
          <li>
            <strong>Website Design and Development:</strong> Crafting responsive
            and visually appealing websites that effectively communicate your
            brand message.
          </li>
          <li>
            <strong>E-commerce Solutions:</strong> Building secure and scalable
            online stores with features like shopping carts, payment gateways,
            and inventory management.
          </li>
          <li>
            <strong>Web Applications:</strong> Developing custom web
            applications to automate processes, enhance productivity, and
            provide value to your users.
          </li>
          <li>
            <strong>Content Management Systems (CMS):</strong> Implementing
            user-friendly CMS platforms like WordPress, Drupal, or custom
            solutions to manage your content efficiently.
          </li>
          <li>
            <strong>API Integration and Development:</strong> Integrating
            third-party services and creating custom APIs to extend your
            website's functionality.
          </li>
          <li>
            <strong>Progressive Web Apps (PWA):</strong> Combining the best of
            web and mobile apps to deliver a fast, reliable, and engaging user
            experience.
          </li>
        </ul>

        <div className="divider"></div>

        <h3>Our Process</h3>

        <ol>
          <li>
            <strong>Discovery and Planning:</strong> We begin by understanding
            your business, target audience, and project goals. This phase
            involves research, requirement gathering, and project planning.
          </li>
          <li>
            <strong>Design:</strong> Our designers create wireframes and mockups
            to visualize the structure and look of your website. We focus on
            user experience and interface design.
          </li>
          <li>
            <strong>Development:</strong> Our developers bring the designs to
            life using clean, efficient code. We ensure the website is
            responsive and functional across all platforms.
          </li>
          <li>
            <strong>Testing:</strong> We perform rigorous testing to identify
            and fix any issues related to performance, security, and usability.
          </li>
          <li>
            <strong>Deployment:</strong> Once the website passes all tests, we
            deploy it to your hosting environment and perform a final check.
          </li>
          <li>
            <strong>Maintenance and Support:</strong> We provide ongoing support
            to keep your website updated, secure, and running smoothly.
          </li>
        </ol>

        <div className="divider"></div>

        <h3>Experience the Albasa Web Difference</h3>

        <p>
          Choosing Albasa Web means partnering with a team dedicated to your
          success. We are passionate about creating custom web solutions that
          not only meet but exceed your expectations. Our commitment to
          excellence and customer satisfaction sets us apart.
        </p>

        <div className="divider"></div>

        <a href="/contact" className="btn dark-btn">
          Contact Us.
        </a>

        <p>
          Ready to transform your online presence? Get in touch with us to
          discuss how our custom web development services can help your business
          thrive.
        </p>

        <p>
          <strong>Albasa Web</strong> – Empowering Businesses Through Innovative
          Web Solutions
        </p>

        <div className="divider"></div>

        <p>
          <em>Innovate. Build. Succeed.</em>
        </p>
      </div>

      {/* Custom Web Development BOTTOM SECTION */}
      <section className="bottom-about container">
        <Portfolio />
        <Contact />
      </section>
    </>
  );
};

export default CustomWebDevelopment;
