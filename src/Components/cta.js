import React from "react";
import hero from "../assets/images/hero.png";
const CTA = () => {
  return (
    <div className='relative'>
      <img className='min-h-[400px] object-cover w-full' src={hero} alt='' />
      <div className='absolute top-0 left-0 text-white flex flex-col items-center justify-center h-full w-full p-4'>
        <h1 className='font-medium text-2xl md:text-4xl text-center'>
          DO YOU WANT A <span className='text-yellow-600'> LOAN?</span>
        </h1>
        <p className='text-base my-2 text-center'>
          We have the best form of loan offer for you with flexible payment
          option
        </p>
        <button className='bg-[#028006] text-white p-4 text-center w-full max-w-3xl my-10 mx-auto shadow-xl hover:scale-105 hover:bg-green-900 transition'>
          Click here to apply
        </button>
      </div>
    </div>
  );
};

export default CTA;
