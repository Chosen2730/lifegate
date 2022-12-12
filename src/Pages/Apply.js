import React, { useEffect } from "react";
import Input from "../Components/Form/input";

const Apply = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <div className='p-4 my-10 max-w-5xl mx-auto'>
        <h4 className='font-bold text-xl'>Personal Information</h4>
        <div className='border-2 rounded-md p-4 my-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='name' title='First Name' id='' />
            <Input input type='name' title='Last Name' id='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='date' title='Date of Birth' id='' />
            <Input input type='name' title='Next of Kin' id='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='email' title='Email Address' id='' />
            <Input input type='tel' title='Phone Number' id='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='text' title='Gender' id='' />
            <Input input type='number' title='BVN' id='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='text' title='Full Residential Address' id='' />
            <Input input type='text' title='Residential Type' id='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='text' title='Marital Status' id='' />
            <Input input type='text' title='Occupation' id='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='file' title='Passport' id='' />
            <Input input type='file' title='ID Card' id='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='file' title='Utility Bill' id='' />
            <Input input type='file' title='Signature' id='' />
          </div>
        </div>
        <h4 className='font-bold text-xl'>Guarantor's Information</h4>
        <div className='border-2 rounded-md p-4 my-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='name' title='First Name' id='' />
            <Input input type='name' title='Last Name' id='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='email' title='Email Address' id='' />
            <Input input type='tel' title='Phone Number' id='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='file' title='Passport' id='' />
            <Input input type='file' title='ID Card' id='' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='file' title='Signature' id='' />
          </div>
        </div>
        <h4 className='font-bold text-xl'>Employment Information</h4>
        <div className='border-2 rounded-md p-4 my-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='name' title={`Employer's Full Name`} id='' />
            <Input input type='name' title={`Employer's Address`} id='' />
          </div>
        </div>
        <h4 className='font-bold text-xl'>Loan Information</h4>
        <div className='border-2 rounded-md p-4 my-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input input type='number' title={`Requested Amount`} id='' />
            <Input input type='text' title={`Loan Tenure`} id='' />
          </div>
        </div>

        <div className='flex items-center justify-center my-10'>
          <button className='bg-[#028006] rounded-md hover:bg-green-500 transition text-white p-4 px-12'>
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
