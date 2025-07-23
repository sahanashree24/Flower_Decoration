import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import "./Home.css";
import Services from "../../components/Services/Services";
import Work from "../../components/Work/Work";
import Counter from "../../components/counter/counter";
import Team from "../../components/Team/Team";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Work />
      <Counter/>
      <Team/>
    </>
  );
};

export default Home;
