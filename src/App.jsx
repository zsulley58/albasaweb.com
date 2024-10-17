import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Components/About/About";
import AboutPage from "./Components/AboutPage/AboutPage";
import Blogs from "./Components/Blogs/Blogs";
import BlogsPage from "./Components/BlogsPage/BlogsPage";
import Contact from "./Components/Contact/Contact";
import ContactPage from "./Components/ContactPage/ContactPage";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Podcasts from "./Components/Podcasts/Podcasts";
import PodcastsPage from "./Components/PodcastsPage/PodcastsPage";
import Portfolio from "./Components/Portfolio/Portfolio";
import PortfoliosPage from "./Components/PortfoliosPage/PortfoliosPage";
import Services from "./Components/Services/Services";
import IncidentResponseForensics from "./Components/ServicesPage/CyberSecurity/IncidentResponseForensics/IncidentResponseForensics";
import PenetrationTesting from "./Components/ServicesPage/CyberSecurity/PenetrationTesting/PenetrationTesting";
import SecurityAwarenessTraining from "./Components/ServicesPage/CyberSecurity/SecurityAwarenessTraining/SecurityAwarenessTraining";
import WebApplicationSecurity from "./Components/ServicesPage/CyberSecurity/WebApplicationSecurity/WebApplicationSecurity";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import CustomWebDevelopment from "./Components/ServicesPage/WebDevelopment/CustomWedDevelopment/CustomWebDevelopment";
import ECommerceDevelopment from "./Components/ServicesPage/WebDevelopment/EcommerceDevelopment/EcommerceDevelopment";
import SEOOptimization from "./Components/ServicesPage/WebDevelopment/SEOOptimization/SEOOptimization";
import WebMaintenanceSupport from "./Components/ServicesPage/WebDevelopment/WebMaintenanceSupport/WebMaintenanceSupport";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="container">
                <About setPlayState={setPlayState} />
                <Title subTitle="Our SERVICES" title="What we offer" />
                <Services />

                <Title subTitle="Portfolio" title="Projects Demos" />
                <Portfolio />
                <Title
                  subTitle="Blogs"
                  title="Read Our Cybersecurity Articles"
                />
                <Blogs />
                <Title
                  subTitle="Podcasts"
                  title="Listen to Our Cybersecurity Podcasts"
                />
                <Podcasts />
                <Title subTitle="Contact Us" title="Get in touch" />
                <Contact />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />
        {/* About Page Route */}
        <Route path="/about" element={<AboutPage />} />

        {/* Service Page Route */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Penetration Testing Page Route */}
        <Route
          path="/services/cybersecurity/penetration-testing"
          element={<PenetrationTesting />}
        />

        {/* Custom Web Development Page Route */}
        <Route
          path="/services/web-development/custom-web-development"
          element={<CustomWebDevelopment />}
        />

        {/* E-commerce Development Page Route */}
        <Route
          path="/services/web-development/e-commerce-development"
          element={<ECommerceDevelopment />}
        />

        {/* SEO Optimization Page Route */}
        <Route
          path="/services/web-development/seo-optimization"
          element={<SEOOptimization />}
        />

        {/* Web Maintenance Support Page Route */}
        <Route
          path="/services/web-development/web-maintenance-support"
          element={<WebMaintenanceSupport />}
        />

        {/* Security Awareness Training Page Route */}
        <Route
          path="/services/cybersecurity/security-awareness-training"
          element={<SecurityAwarenessTraining />}
        />

        {/* Web Application Security Page Route */}
        <Route
          path="/services/cybersecurity/web-application-security"
          element={<WebApplicationSecurity />}
        />

        {/* Incident Response Forensics Page Route */}
        <Route
          path="/services/cybersecurity/incident-response-forensics"
          element={<IncidentResponseForensics />}
        />

        {/* Portfolio Page Route */}
        <Route path="/portfolio" element={<PortfoliosPage />} />

        {/* Blog Page Route */}
        <Route path="/blog" element={<BlogsPage />} />

        {/* Podcast Page Route */}
        <Route path="/podcast" element={<PodcastsPage />} />

        {/* Contact Us Page Route */}
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
