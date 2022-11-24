import React from "react";
import phone from "../assets/images/phone.png";
import spiral from "../assets/images/spiral.png";

const Section2 = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 relative text-white bg-[#028006] p-4 md:p-8 py-20 items-center'>
      <div className=''>
        <h2 className='text-4xl md:text-6xl font-medium'>
          One Account,{" "}
          <span className='text-yellow-500 font-bold'>Multiple </span> Savings
          Plan
        </h2>
        <p className='text-lg my-3'>
          Open a Lifegate account in minutes and start living
        </p>
        <button className='p-4 font-bold px-8 rounded-md shadow-lg text-[#028006] bg-white my-4'>
          Register now
        </button>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-2 my-10'>
        <img src={phone} alt='phone' />
        <div className='text-lg'>
          <li className='list-disc my-3'>Lifegate Savings/Current Account</li>
          <li className='list-disc my-3'>Lifegate Business Account</li>
          <li className='list-disc my-3'>Lifegate Daily</li>
          <li className='list-disc my-3'>Lifegate Future Account</li>
          <li className='list-disc my-3'>Lifegate Invest</li>
          <li className='list-disc my-3'>Lifegate Social Investor</li>
        </div>
      </div>
      <div className='absolute top-0 flex items-center justify-center w-full h-full'>
        <img src={spiral} alt='' />
      </div>
    </div>
  );
};

export default Section2;
