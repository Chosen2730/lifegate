import React from "react";
import About from "../Components/about";
import CTA from "../Components/cta";
import Hero from "../Components/hero";
import Partners from "../Components/partners";
import Section2 from "../Components/section2";
import Services from "../Components/services";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Slider from "../Components/swiper";
import Faq from "../Components/Faq";

const Home = () => {
  return (
    <div className='max-w-[2000px] mx-auto'>
      <Hero />
      <AnimationOnScroll animateIn='animate__zoomIn'>
        <Section2 />
      </AnimationOnScroll>
      <About />
      {/* <Services /> */}
      <div className='p-5 bg-[#028006] text-white'>
        <Slider />
      </div>
      <Partners />
      <AnimationOnScroll animateIn='animate__zoomIn'>
        <CTA />
      </AnimationOnScroll>
      <Faq />
    </div>
  );
};

export default Home;
