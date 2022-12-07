import React from "react";
import hero from "../assets/images/about-hero.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import left from "../assets/images/l-left.png";
import Team from "./Team";

const About = () => {
  return (
    <div>
      <div className='relative'>
        <img className='min-h-[600px] object-cover w-full' src={hero} alt='' />
        <div className='absolute top-0 left-0 text-white flex flex-col items-center justify-center h-full w-full p-4'>
          <h1 className='font-medium text-3xl md:text-6xl text-center'>
            About us
          </h1>
          <p className='text-3xl md:text-7x text-center font-bold my-6'>
            Lifegate <span className='text-yellow-600'>Microfinance Bank</span>
          </p>
        </div>
      </div>
      <div className='max-w-6xl mx-auto p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 my-20 gap-6'>
          <div>
            <div className='flex item-center'>
              <img src={left} alt='' />
              <h2 className='font-bold text-xl md:text-2xl text-[#028006]'>
                About
              </h2>
            </div>
            <p className='my-4 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              voluptates atque eligendi itaque vel accusamus dignissimos
              voluptatem odit! Aliquam cupiditate officiis harum illum tenetur!
              Nobis aliquam exercitationem inventore earum.
            </p>
            <p className='my-4 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              voluptates atque eligendi itaque vel accusamus dignissimos
              voluptatem odit! Aliquam cupiditate officiis harum illum tenetur!
              Nobis aliquam exercitationem inventore earum.
            </p>
            <p className='my-4 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              voluptates atque eligendi itaque vel accusamus dignissimos
              voluptatem odit! Aliquam cupiditate officiis harum illum tenetur!
              Nobis aliquam exercitationem inventore earum.
            </p>
          </div>
          <img src={img1} alt='about-img' />
        </div>
        <div className='flex gap-6 flex-col md:flex-row-reverse my-20'>
          <div>
            <div className='flex gap-4 item-center'>
              <img src={left} alt='' />
              <h2 className='font-bold text-xl md:text-2xl text-[#028006]'>
                Our Mission
              </h2>
            </div>
            <p className='my-4 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              voluptates atque eligendi itaque vel accusamus dignissimos
              voluptatem odit! Aliquam cupiditate officiis harum illum tenetur!
              Nobis aliquam exercitationem inventore earum.
            </p>
            <p className='my-4 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              voluptates atque eligendi itaque vel accusamus dignissimos
              voluptatem odit! Aliquam cupiditate officiis harum illum tenetur!
              Nobis aliquam exercitationem inventore earum.
            </p>
            <p className='my-4 text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi
              voluptates atque eligendi itaque vel accusamus dignissimos
              voluptatem odit! Aliquam cupiditate officiis harum illum tenetur!
              Nobis aliquam exercitationem inventore earum.
            </p>
          </div>
          <img src={img2} alt='about-img' />
        </div>
      </div>
      <Team />
    </div>
  );
};

export default About;
