import React, { useEffect } from "react";
import hero from "../assets/images/service.jpg";
import business from "../assets/images/business.png";
import dail from "../assets/images/daily.png";
import future from "../assets/images/future.png";
import piggy from "../assets/images/piggy.png";
import social from "../assets/images/social.png";
import account from "../assets/images/account.png";
import { Link } from "react-router-dom";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const services = [
    { service: "Lifegate Savings/Current Account", img: piggy },
    { service: "Lifegate Target Savings Account", img: business },
    { service: "Lifegate AJO Oriire Account", img: dail },
    { service: "Lifegate Future Account", img: future },
    { service: "Lifegate Invest Account", img: account },
    { service: "Lifegate Social Investor Account", img: social },
  ];
  const loans = [
    { title: "Lifegate Kiakia Loan", amount: "100,000" },
    { title: "Lifegate Micro Loan", amount: "500,000" },
    { title: "Lifegate SME Loan", amount: "10,000,000" },
    { title: "Lifegate Salary Loan", amount: "3,000,000" },
    { title: "Lifegate Asset/ LPO Loan", amount: "10,000,000" },
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
            <p className='text-sm md:text-base text-center font-medium my-6 text-black'>
              The bank is committed to its passion of improving the business
              opportunities of entrepreneurs by availing them easy access to
              affordable loans, micro investment opportunities and financial
              advisory services, as well as acting as agent for Micro pension
              and insurance, a one stop shop for all financial needs of SMEs in
              Lagos
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
        <Link to='/apply'>
          <button className='bg-[#028006] text-white p-4 text-center w-full my-10 shadow-xl hover:scale-105 hover:bg-green-900 transition'>
            Apply Now
          </button>
        </Link>
      </div>
      <div className='bg-gray-50 p-8'>
        <div className='max-w-6xl mx-auto my-20 '>
          <h2 className='font-bold text-2xl text-center'>Loan Services</h2>
          <p className='text-base my-5 text-center'>
            We will match you with a loan that meets your financial needs. With
            Fast and easy application process with Lifegate Microfinance, Begin
            with a click.
          </p>
          <div className='p-8'>
            <div className='max-w-2xl mx-auto flex flex-col gap-8'>
              {loans.map(({ title, amount }, i) => {
                return (
                  <div
                    className='flex flex-col md:flex-row justify-between shadow-md p-8 rounded-md bg-white'
                    key={i}
                  >
                    <div className='flex items-center gap-3'>
                      <img src={future} className='w-8' alt='' />
                      <h2 className='text-lg font-medium'>{title}</h2>
                    </div>
                    <h2 className='text-gray-700'>Max NGN {amount}</h2>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='max-w-2xl mx-auto'>
            <Link to='/apply'>
              <button className='bg-[#028006] text-white p-4 text-center w-full my-10 shadow-xl hover:scale-105 hover:bg-green-900 transition'>
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
