import React from "react";
import spiral2 from "../assets/images/spiral2.png";
import part1 from "../assets/images/part1.png";
import part2 from "../assets/images/part2.png";
import part3 from "../assets/images/part3.png";
import part4 from "../assets/images/part4.png";
import part5 from "../assets/images/part5.png";
import part6 from "../assets/images/part6.png";
import part7 from "../assets/images/part7.png";

const Partners = () => {
  const partners = [part1, part2, part3, part4, part5, part6, part7];
  return (
    <div className='flex flex-col md:flex-row items-center bg-white p-4 md:px-8 py-24 gap-8'>
      <div className='relative w-full md:w-[40%]'>
        <h2 className='font-bold text-2xl md:text-4xl'>
          Take a Look At{" "}
          <span className='text-[#028006] block'>Our Partners</span>{" "}
        </h2>
        <div className='absolute top-0 w-full h-full flex items-center justify-center'>
          <img src={spiral2} className='-z-0 overflow-hidden' alt='spiral' />
        </div>
      </div>
      <div className='grid grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 items-center ml-auto gap-10 md:w-[60%]'>
        {partners.map((img, i) => {
          return (
            <img
              src={img}
              className='w-16 h-16 object-contain'
              alt='logo'
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Partners;
