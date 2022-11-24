import React from "react";
import hero from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className='relative'>
      <img className='min-h-[850px] object-cover' src={hero} alt='' />
      <div className='absolute top-0 left-0 text-white flex items-center justify-center h-full w-full p-4'>
        <h1 className='font-bold text-4xl md:text-7xl text-center'>
          Leading Microfinance Bank <br /> In Nigeria
        </h1>
      </div>
    </div>
  );
};

export default Hero;
