import React, { useRef, useState } from "react";
// Import Swiper React components
import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";
import { services } from "../Configs/services";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
      >
        {services.map(({ service, img }, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='hover:scale-105 transition'>
                <img
                  src={img}
                  className='w-full h-24 md:w-72 md:h-[200px] object-cover'
                  alt={service}
                />
                <p className='text-xs text-center md:text-lg capitalize font-medium my-2'>
                  {service}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
