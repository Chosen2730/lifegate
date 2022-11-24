import React from "react";
import { services } from "../Configs/services";
const Services = () => {
  return (
    <div className='p-4 md:p-8 md:py-20 bg-gray-100'>
      <h2 className='font-bold text-2xl md:text-5xl text-center p-2 my-4'>
        Our Services
      </h2>

      <div className='grid grid-flow-col overflow-x-scroll horScroll scroll p-5 bg-[#028006] text-white'>
        {services.map(({ service, img }, i) => {
          return (
            <div
              key={i}
              className='w-[150px] md:w-[300px] hover:scale-105 transition'
            >
              <img
                src={img}
                className='w-32 h-24 md:w-72 md:h-[200px] object-cover'
                alt={service}
              />
              <p className='text-sm text-center md:text-lg capitalize font-medium my-2'>
                {service}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
