import React, { useEffect } from "react";
import hero from "../assets/images/service.png";
import business from "../assets/images/business.png";
import dail from "../assets/images/daily.png";
import future from "../assets/images/future.png";
import piggy from "../assets/images/piggy.png";
import social from "../assets/images/social.png";
import account from "../assets/images/account.png";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const services = [
    { service: "Lifegate Savings/Current Account", img: piggy },
    { service: "Lifegate Business Account", img: business },
    { service: "Lifegate Daily Account", img: dail },
    { service: "Lifegate Future Account", img: future },
    { service: "Lifegate Invest Account", img: account },
    { service: "Lifegate Social Investor Account", img: social },
  ];
  const loans = [
    { title: "Lifegate Kiakia Loan", amount: "100,000" },
    { title: "Lifegate Micro Loan", amount: "100,000" },
    { title: "Lifegate SME Loan", amount: "100,000" },
    { title: "Lifegate Salary Loan", amount: "100,000" },
    { title: "Lifegate Asset/ LPO Loan", amount: "100,000" },
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
      <div className='max-w-6xl mx-auto p-4'>
        <button className='bg-[#028006] text-white p-4 text-center w-full my-10 shadow-xl hover:scale-105 hover:bg-green-900 transition'>
          Apply Now
        </button>
      </div>
      <div className='bg-gray-50 p-8'>
        <div className='max-w-6xl mx-auto my-20 '>
          <h2 className='font-bold text-2xl text-center'>Loan Services</h2>
          <p className='text-base my-5 text-center'>
            We will match you with a loan that meets your financial needs. With
            Fast and easy application process with Lifegate Microfinance, Begin
            with a click.
          </p>
          <div className='bg-white p-8'>
            <div className='max-w-2xl mx-auto flex flex-col gap-8'>
              {loans.map(({ title, amount }, i) => {
                return (
                  <div
                    className='flex flex-col md:flex-row justify-between'
                    key={i}
                  >
                    <h2 className='text-lg font-medium'>{title}</h2>
                    <h2 className='text-gray-700'>Max NGN {amount}</h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='max-w-6xl mx-auto'>
            <button className='bg-[#028006] text-white p-4 text-center w-full my-10 shadow-xl hover:scale-105 hover:bg-green-900 transition'>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
