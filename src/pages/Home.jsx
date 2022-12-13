import React from "react";

import Header from "../components/Header";
import Land from "../components/Landing";
import Features from "../components/Features";
import Upcoming from "../components/Upcoming";
import Info from "../components/Info";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Gallary from "../components/Gallary";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className=" justify-center items-center text-center">
        <Header />
        <Land />
        <Features />
        <Info />
        <Upcoming />
        <Testimonial />
        <Gallary />
        <Team />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
