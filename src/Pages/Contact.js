import React from "react";
import hero from "../assets/images/contact.png";
import email from "../assets/images/email.png";
import call from "../assets/images/call.png";
import venue from "../assets/images/venue.png";
import tw from "../assets/images/tw2.png";
import fb from "../assets/images/fb2.png";
import linkedin from "../assets/images/linkendIn2.png";
import ig from "../assets/images/ig2.png";
const Contact = () => {
  return (
    <div className=''>
      <div className='relative'>
        <img className='min-h-[600px] object-cover w-full' src={hero} alt='' />
        <div className='absolute top-0 left-0 text-white flex flex-col items-center justify-center h-full w-full p-4'>
          <h1 className='font-medium text-3xl md:text-6xl text-center'>
            Contact Us
          </h1>
          <p className='text-3xl md:text-7x text-center font-bold my-6 capitalize'>
            <span className='text-yellow-600'>We’d Love To Hear From You </span>
          </p>
        </div>
      </div>
      <div className='p-4'>
        <div className='max-w-5xl bg-black text-white p-3 md:p-12 rounded-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center my-12 shadow-xl'>
          <div className='flex flex-col items-center justify-center my-10'>
            <img src={venue} className='w-8' alt='' />
            <h2 className='text-base font-bold my-2'>Location</h2>
            <p className='text-sm text-center'>
              497, Ikorodu Road,Ketu, Lagos State.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center my-10'>
            <img src={call} className='w-8' alt='' />
            <h2 className='text-base font-bold my-2'>Phone Number</h2>
            <p className='text-sm text-center'>+234-809-680-9905</p>
          </div>
          <div className='flex flex-col items-center justify-center my-10'>
            <img src={email} className='w-8' alt='' />
            <h2 className='text-base font-bold my-2'>Email Address</h2>
            <p className='text-sm text-center'>hello@lifegatebank.com</p>
          </div>
        </div>
        <div className='max-w-5xl bg-gray-100 text-black p-8 md:p-12 rounded-2xl mx-auto flex flex-col md:flex-row gap-4 md:gap-20 md:items-center md:justify-between my-12 shadow-xl'>
          <div className=''>
            <h2 className='text-2xl font-bold my-2'>Connect With Us</h2>
            <p className='text-sm '>
              Reach out to us on our social media platforms and get a response
              swiftly. We are available on all Social media platforms 24/7.
            </p>
          </div>
          <div className='flex items-center gap-4 mt-4 text-gray-300 text-xs'>
            <a target={"_blank"} href='https://www.instagram.com/lifegatebank/'>
              <img src={ig} className='w-5 md:w-7' alt='' />
            </a>
            <a
              target={"_blank"}
              href='https://www.linkedin.com/in/lifegatebank/'
            >
              <img src={linkedin} className='w-5 md:w-7' alt='' />
            </a>
            <a target={"_blank"} href='https://twitter.com/LifegateBank/'>
              <img src={tw} className='w-5 md:w-7' alt='' />
            </a>
            <a
              target={"_blank"}
              href='https://web.facebook.com/profile.php?id=100071847211344'
            >
              <img src={fb} className='w-5 md:w-7' alt='' />
            </a>
          </div>
        </div>
        <div className=''>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15834.213685088695!2d3.3691251500000003!3d7.177506499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1670421716246!5m2!1sen!2sng'
            width='600'
            height='450'
            allowFullScreen=''
            className='w-full'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
