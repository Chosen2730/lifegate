import React from "react";
import logo from "../../assets/images/logo.png";
import tw from "../../assets/images/tw.png";
import fb from "../../assets/images/fb.png";
import linkedin from "../../assets/images/in.png";
import ig from "../../assets/images/ig.png";
import app from "../../assets/images/app.png";
import google from "../../assets/images/google.png";
import { Link } from "react-router-dom";
import whatsapp from "../../assets/images/whatsapp.png";

const Footer = () => {
  return (
    <div className='bg-black text-white p-4 md:px-8 py-20 max-w-[2000px] mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-sm gap-8'>
        <div>
          <img src={logo} className='w-24' alt='logo' />
          <p className='text-base'>
            Life Gate Microfinance <br /> Bank
          </p>
        </div>
        <div>
          <h2 className='font-medium uppercase'>What we offer</h2>
          <div className='flex flex-col gap-2 mt-4 text-gray-300 text-xs'>
            <h3 className=''>Care</h3>
            <h3 className=''>Affordability</h3>
            <h3 className=''>Responsiveness</h3>
            <h3 className=''>Due Diligence</h3>
            <h3 className=''>Simplicity</h3>
          </div>
        </div>
        <div>
          <h2 className='font-medium uppercase'>Quick Links</h2>
          <div className='flex flex-col gap-2 mt-4 text-gray-300 text-xs'>
            <h3 className=''>Customer Service</h3>
            <h3 className=''>Privacy Policy</h3>
            <Link to='/terms'>Terms & Condition</Link>
            <Link to='/faq'>FAQs</Link>
          </div>
        </div>
        <div>
          <h2 className='font-medium uppercase'>Contact Us</h2>
          <div className='flex items-center gap-4 mt-4 text-gray-300 text-xs'>
            <a target={"_blank"} href='https://www.instagram.com/lifegatebank/'>
              <img src={ig} className='w-4' alt='' />
            </a>
            <a
              target={"_blank"}
              href='https://www.linkedin.com/in/lifegatebank/'
            >
              <img src={linkedin} className='w-4' alt='' />
            </a>
            <a target={"_blank"} href='https://twitter.com/LifegateBank/'>
              <img src={tw} className='w-4' alt='' />
            </a>
            <a
              target={"_blank"}
              href='https://web.facebook.com/profile.php?id=100071847211344'
            >
              <img src={fb} className='w-4' alt='' />
            </a>
          </div>
          <div className='flex items-center gap-4 mt-4 text-gray-300 text-xs'>
            <img src={google} className='w-16 md:w-24' alt='' />
            <img src={app} className='w-16 md:w-24' alt='' />
          </div>
        </div>
      </div>
      <p className='text-center text-xs mt-10'>
        Copyright 2022. All Rights Reserved
      </p>
      <a
        href='http://wa.me/2348096809905'
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='fixed bottom-10 right-4 z-50 bg-black p-3 rounded-full'>
          <img src={whatsapp} className='w-8 object-contain ' alt='' />
        </div>
      </a>
    </div>
  );
};

export default Footer;
