import React from "react";
import About from "../Components/about";
import Hero from "../Components/hero";
import Section2 from "../Components/section2";
import Services from "../Components/services";

const Home = () => {
  return (
    <div className='max-w-[2000px] mx-auto'>
      <Hero />
      <Section2 />
      <About />
      <Services />
    </div>
  );
};

export default Home;
