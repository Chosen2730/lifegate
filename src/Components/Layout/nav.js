import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CgMenuMotion } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
const Nav = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navLinks = [
    { link: "About Us", url: "/about" },
    // { link: "The Team", url: "/team" },
    { link: "Our Services", url: "/services" },
    { link: "Contact Us", url: "/contact" },
    { link: "Blog", url: "/blog" },
    { link: "Apply  Here", url: "/apply" },
  ];
  return (
    <nav className='max-w-[2000px] mx-auto relative'>
      <div
        className={`${
          isDropDown ? "bg-grad" : "bg-transparent"
        } lg:bg-transparent flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 p-8 absolute top-0 w-full right-0 z-10`}
      >
        <div className='flex justify-between w-full lg:w-fit'>
          <Link to='/' onClick={() => setIsDropDown(false)}>
            <img src={logo} className='w-20' alt='logo' />
          </Link>
          <i
            className='flex lg:hidden text-white bg-[#028006] w-10 h-10 text-2xl items-center justify-center rounded-md'
            onClick={() => setIsDropDown(!isDropDown)}
          >
            {isDropDown ? <MdOutlineClose /> : <CgMenuMotion />}
          </i>
        </div>
        <div
          className={`${
            isDropDown ? "flex-col" : "hidden lg:flex"
          } flex lg:flex-row lg:items-center gap-8 text-sm font-medium text-white`}
        >
          {navLinks.map(({ link, url }, i) => {
            return (
              <Link
                key={i}
                className={`${
                  i === navLinks.length - 1 &&
                  "bg-[#028006] p-4 px-8 text-white rounded-md font-bold hover:scale-105 hover:bg-green-900 transition"
                } ${i == selectedIndex ? "text-[#028006]" : "text-white"}`}
                to={url}
                onClick={() => {
                  setIsDropDown(false);
                  setSelectedIndex(i);
                }}
              >
                {link}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
