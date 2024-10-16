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
import PenetrationTesting from "./Components/ServicesPage/CyberSecurity/PenetrationTesting/PenetrationTesting";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
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
