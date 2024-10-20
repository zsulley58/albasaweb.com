import React, { useRef } from "react";
import arrow_down from "../../../../assets/arrow-down.png"; // Ensure this path is correct
import Contact from "../../../Contact/Contact";
import Portfolio from "../../../Portfolio/Portfolio";
import "./ECommerceDevelopment.css";

const ECommerceDevelopment = () => {
  // Create a reference to the eCommerceDevelopment section
  const eCommerceDevelopmentRef = useRef(null);

  // Function to handle smooth scrolling
  const handleScroll = () => {
    if (eCommerceDevelopmentRef.current) {
      eCommerceDevelopmentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* E-commerce Development HERO SECTION */}
      <section className="eCommerceDevelopment-hero container">
        <div className="eCommerceDevelopment-hero-text">
          <h1>Your Partner in E-commerce Development</h1>
          <p>
            Building Scalable and Secure Online Stores to Drive Your Business
            Growth
          </p>
          <button className="btn dark-btn" onClick={handleScroll}>
            Explore More <img src={arrow_down} alt="Explore more" />
          </button>
        </div>
      </section>

      {/* E-commerce Development SECTION */}
      <div
        ref={eCommerceDevelopmentRef}
        className="eCommerceDevelopment-section"
      >
        <h2>What is E-commerce Development?</h2>
        <p>
          In today's digital age, having a robust and user-friendly online store
          is essential for any business aiming to thrive.{" "}
          <strong>E-commerce development</strong> involves creating, managing,
          and optimizing online platforms where businesses can sell their
          products or services. Unlike generic platforms, custom E-commerce
          solutions offer enhanced functionality, better user experience, and
          seamless integration with various tools and services to meet your
          specific business needs.
        </p>

        <h3>Why Choose Albasa Web for Your E-commerce Development Needs?</h3>
        <p>
          At <strong>Albasa Web</strong>, we specialize in delivering
          comprehensive E-commerce development services that are professional,
          innovative, and customer-centric. Here's why you can count on us:
        </p>

        <h4>1. Expert Team of E-commerce Specialists</h4>
        <p>
          Our team comprises skilled developers and designers with extensive
          experience in E-commerce platforms like Shopify, Magento, WooCommerce,
          and custom solutions. We stay updated with the latest industry trends
          to ensure your online store leverages cutting-edge technologies and
          best practices.
        </p>

        <h4>2. Customized Solutions</h4>
        <p>
          We understand that every business has unique requirements. That's why
          we offer personalized E-commerce development services designed to
          reflect your brand identity and meet your specific goals. From design
          to deployment, we tailor every aspect of your online store to ensure
          it aligns perfectly with your business objectives.
        </p>

        <h4>3. User-Centric Design</h4>
        <p>
          Our designs focus on providing an exceptional user experience. We
          create intuitive interfaces, seamless navigation, and responsive
          layouts to engage your customers and drive conversions.
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
          testing to ensure your online store is robust, secure, and performs
          optimally across all devices and browsers. Post-launch, we offer
          ongoing support and maintenance to keep your store running smoothly.
        </p>

        <div className="divider"></div>

        <h3>Our E-commerce Development Services</h3>

        <ul>
          <li>
            <strong>Custom E-commerce Website Development:</strong> Building
            tailor-made online stores that cater to your specific business needs
            and goals.
          </li>
          <li>
            <strong>Platform Migration:</strong> Seamlessly migrating your
            existing store to a new platform without data loss or downtime.
          </li>
          <li>
            <strong>Shopping Cart Development:</strong> Creating secure and
            efficient shopping carts that enhance the shopping experience.
          </li>
          <li>
            <strong>Payment Gateway Integration:</strong> Integrating reliable
            and secure payment gateways to facilitate smooth transactions.
          </li>
          <li>
            <strong>Inventory Management Systems:</strong> Developing systems to
            manage your inventory efficiently and reduce operational costs.
          </li>
          <li>
            <strong>SEO and Digital Marketing:</strong> Optimizing your online
            store for search engines and implementing digital marketing
            strategies to drive traffic and sales.
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
            to visualize the structure and look of your online store. We focus
            on user experience and interface design.
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
          success. We are passionate about creating E-commerce solutions that
          not only meet but exceed your expectations. Our commitment to
          excellence and customer satisfaction sets us apart.
        </p>

        <div className="divider"></div>

        <a href="/contact" className="btn dark-btn">
          Contact Us.
        </a>

        <p>
          Ready to transform your online business? Get in touch with us to
          discuss how our E-commerce development services can help your business
          thrive.
        </p>

        <p>
          <strong>Albasa Web</strong> – Empowering Businesses Through Innovative
          E-commerce Solutions
        </p>

        <div className="divider"></div>

        <p>
          <em>Innovate. Sell. Succeed.</em>
        </p>
      </div>

      {/* E-commerce Development BOTTOM SECTION */}
      <section className="bottom-about container">
        <Portfolio />
        <Contact />
      </section>
    </>
  );
};

export default ECommerceDevelopment;
