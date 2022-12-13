import React from "react";

import Header from "../components/Header";
import AboutLanding from "../components/AboutLanding";
import Footer from "../components/Footer";
import Howtoapply from "../components/Howtoapply";

const About = () => (
  <div>
    <div className=" justify-center items-center text-center">
      <Header />
      <AboutLanding />
      <Howtoapply />
      <Footer />
    </div>
  </div>
);

export default About;
