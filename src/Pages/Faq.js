import React, { useEffect } from "react";
import hero from "../assets/images/faq.png";
import Faqs from "../Components/Faq/index";
const Faq = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <div className='relative'>
        <img className='min-h-[400px] object-cover w-full' src={hero} alt='' />
        <div className='absolute top-0 left-0 text-black flex flex-col items-center justify-center h-full w-full p-4'>
          <h1 className='font-bold text-3xl md:text-6xl text-center'>
            Frequently Asked Questions
          </h1>
          <p className='text-medium text-lg text-center text-green-500 my-6'>
            Get Answers From The LifeGate Microfinance Team
          </p>
        </div>
      </div>
      <Faqs />
    </div>
  );
};

export default Faq;
