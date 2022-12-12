import React, { useEffect } from "react";
import About from "../Components/about";
import CTA from "../Components/cta";
import Hero from "../Components/hero";
import Partners from "../Components/partners";
import Section2 from "../Components/section2";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Slider from "../Components/swiper";
const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
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
    </div>
  );
};

export default Home;
