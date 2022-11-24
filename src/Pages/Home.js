import React from "react";
import About from "../Components/about";
import CTA from "../Components/cta";
import Hero from "../Components/hero";
import Partners from "../Components/partners";
import Section2 from "../Components/section2";
import Services from "../Components/services";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Home = () => {
  return (
    <div className='max-w-[2000px] mx-auto'>
      <Hero />
      <AnimationOnScroll animateIn='animate__zoomIn'>
        <Section2 />
      </AnimationOnScroll>
      <About />
      <Services />
      <Partners />
      <AnimationOnScroll animateIn='animate__zoomIn'>
        <CTA />
      </AnimationOnScroll>
    </div>
  );
};

export default Home;
