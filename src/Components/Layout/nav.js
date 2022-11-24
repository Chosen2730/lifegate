import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CgMenuMotion } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
const Nav = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  return (
    <nav className='max-w-[2000px] mx-auto relative'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-8 p-8 absolute top-0 w-full right-0 z-10 '>
        <div className='flex justify-between w-full md:w-fit'>
          <img src={logo} alt='logo' />
          <i
            className='flex md:hidden text-white bg-green-600 w-12 h-12 text-3xl items-center justify-center rounded-md'
            onClick={() => setIsDropDown(!isDropDown)}
          >
            {isDropDown ? <MdOutlineClose /> : <CgMenuMotion />}
          </i>
        </div>
        <div
          className={`${
            isDropDown ? "flex-col" : "hidden md:flex"
          } flex md:flex-row md:items-center gap-8 text-sm font-medium text-white`}
        >
          <a href='#'>About Us</a>
          <a href='#'>Our Services</a>
          <a href='#'>Contact Us</a>
          <Link
            className='bg-green-600 p-4 px-8 text-white rounded-md font-bold hover:scale-105 hover:bg-green-900 transition'
            to='/'
          >
            Apply Here
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
