import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const BlogHeader = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const categories = [
    "All Topics",
    "Investing",
    "Saving",
    "Testimonials",
    "Lifestyles",
    "Business",
  ];
  const navigate = useNavigate();
  return (
    <section className='flex items-center bg-[#028006] text-white px-8 py-2 gap-4'>
      <i className='text-xl'>
        <AiOutlineMenu />
      </i>
      <nav className='hidden w-full md:flex justify-between items-center gap-4'>
        {categories.map((item, i) => (
          <h2
            className={`${
              selectedIndex === i ? "border-b-white" : "border-b-transparent"
            } capitalize text-sm border-b pb-2 cursor-pointer`}
            key={i}
            onClick={() => {
              setSelectedIndex(i);
              // if (i === 0) {
              //   navigate("/shop");
              // } else navigate(`shop/category/${item}`);
            }}
          >
            {item}
          </h2>
        ))}
      </nav>
      <div className='md:hidden w-full flex items-center bg-[#028006] text-white gap-4'>
        <select
          className='bg-[#028006] w-full p-4 rounded-md'
          onChange={(e) => {
            const id = e.target.value;
            setSelectedIndex(id);
            // if (id === "All categories") {
            //   navigate("/shop");
            // } else navigate(`shop/category/${id}`);
          }}
        >
          {categories.map((item, i) => (
            <option className='capitalize text-sm' key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default BlogHeader;
