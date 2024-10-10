import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Programs from "./Component/Programs/Programs";
import Title from "./Component/Title/Title";
import About from "./Component/About/about";
import Campus from "./Component/Campus/Campus";
import Testimonials from "./Component/Testimonials/Testimonials";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Videoplayer from "./Component/Videoplayer/videoplayer";


const App = () => {

const [playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PRORAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Sudene Says" />
        <Testimonials />
        <Title subTitle="Contact US" title="Get in Touch" />
        <Contact/>
        <Footer/>
      </div>
      <Videoplayer playState={playState}setPlayState={setPlayState} />
    </div>
  );
};

export default App;
