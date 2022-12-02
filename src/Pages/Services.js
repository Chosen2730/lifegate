import React from "react";
import hero from "../assets/images/service.png";
import business from "../assets/images/business.png";
import dail from "../assets/images/daily.png";
import future from "../assets/images/future.png";
import piggy from "../assets/images/piggy.png";
import social from "../assets/images/social.png";
import account from "../assets/images/account.png";

const Services = () => {
  const services = [
    { service: "Lifegate Savings/Current Account", img: piggy },
    { service: "Lifegate Business Account", img: business },
    { service: "Lifegate Daily Account", img: dail },
    { service: "Lifegate Future Account", img: future },
    { service: "Lifegate Invest Account", img: account },
    { service: "Lifegate Social Investor Account", img: social },
  ];
  return (
    <div>
      <div className='relative'>
        <img className='min-h-[600px] object-cover w-full' src={hero} alt='' />
        <div className='absolute top-0 left-0 text-white flex flex-col items-center justify-center h-full w-full p-4'>
          <div className='max-w-5xl mx-auto p-8 bg-white rounded-md'>
            <h1 className='font-bold text-3xl md:text-6xl text-center text-[#028006]'>
              Our Services
            </h1>
            <p className='text-base md:text-xl text-center font-medium my-6 text-black'>
              With Industry Experts right in the loop. We have come up with the
              best savings options for everyone interested in banking with
              Lifegate Microfinance.
            </p>
          </div>
        </div>
      </div>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-10'>
        {services.map(({ service, img }, i) => {
          return (
            <div
              key={i}
              className='bg-gray-50 p-8 flex gap-4 items-center shadow-md'
            >
              <img src={img} className='w-8' alt='' />
              <p>{service}</p>
            </div>
          );
        })}
      </div>
      <div className='max-w-6xl mx-auto'>
        <button className='bg-[#028006] text-white p-4 text-center w-full my-10 shadow-xl hover:scale-105 hover:bg-green-900 transition'>
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Services;
