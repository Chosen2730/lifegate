import React from "react";
import about from "../assets/images/management.jpg";
import point from "../assets/images/point.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8 md:py-20 bg-gray-100'>
      <div>
        <img src={about} className='md:h-[660px] w-full object-cover' alt='' />
      </div>
      <div className='flex flex-col gap-4'>
        <AnimationOnScroll animateIn='animate__zoomIn'>
          <div className='flex items-center p-2 py-4 md:p-8 rounded-md bg-white gap-4'>
            <img src={point} alt='' />
            <div>
              <h2 className='text-[#028006] font-bold text-2xl'>About Us</h2>
              <p className='my-4 text-sm md:text-lg'>
                With 13+ years of experience, We have been providing financial
                and advisory services to the low income echelon of the Nigerian
                Society with such efficiency and integrity that all stakeholders
                are justifiably proud to be associated with.
              </p>
              <Link to='/about'>
                <button className='bg-[#028006] p-4 px-8 text-white ml-auto w-fit rounded-md shadow-xl hover:bg-green-900 transiton hover:scale-105'>
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn='animate__zoomIn'>
          <div className='flex items-center p-2 py-4 md:p-8 rounded-md bg-white gap-4'>
            <img src={point} alt='' />
            <div>
              <h2 className='text-[#028006] font-bold text-2xl'>
                What We Offer
              </h2>
              <p className='my-4 text-sm md:text-lg'>
                We pride ourselves in our ability to provide simple solutions
                with quality, excellent and exceptional services. As such, we
                are deliberate in ensuring that we are constantly abreast of
                innovations and market changes that can affect the businesses in
                our sector.
              </p>
              <Link to='/about'>
                <button className='bg-[#028006] p-4 px-8 text-white ml-auto w-fit rounded-md shadow-xl hover:bg-green-900 transiton hover:scale-105'>
                  See more
                </button>
              </Link>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default About;
