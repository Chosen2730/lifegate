import React from "react";
import Video from "./video";

const Hero = () => {
  return (
    <div className='relative'>
      <Video />
      <div className='absolute top-0 left-0 text-white flex items-center justify-center h-full w-full p-4'>
        <h1 className='font-bold text-4xl md:text-7xl text-center leading-[3rem]'>
          Partnership
          <span className='block text-yellow-500'>Beyond Banking</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
