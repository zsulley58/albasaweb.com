import React, { useState } from "react";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Podcasts from "./Components/Podcasts/Podcasts";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our SERVICES" title="What we offer" />
        <Services />
        <About setPlayState={setPlayState} />
        <Title subTitle="Portfolio" title="Projects Demos" />
        <Portfolio />
        <Title subTitle="Blogs" title="Read Our Cybersecurity Articles" />
        <Blogs />
        <Title
          subTitle="Podcasts"
          title="Listen to Our Cybersecurity Podcasts"
        />
        <Podcasts />
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
