import React, { useState } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
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
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Portfolio" title="Demos" />
        <Portfolio />
        <Title subTitle="Testimonials" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
