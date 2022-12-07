import React from "react";
import hero from "../assets/images/hero.png";
import BlogHeader from "../Components/Layout/blogHeader";
import Section2 from "../Components/section2";
import { posts } from "../Configs/blog";
const Blog = () => {
  return (
    <div className=''>
      <div className='relative'>
        <img className='min-h-[600px] object-cover w-full' src={hero} alt='' />
        <div className='absolute top-0 left-0 text-white flex flex-col items-center justify-center h-full w-full p-4'>
          <h1 className='font-medium text-3xl md:text-6xl text-center'>
            Blog Posts
          </h1>
          <p className='text-3xl md:text-7x text-center font-bold my-6 capitalize'>
            Latest news
            <span className='text-yellow-600'> about us </span>
          </p>
        </div>
      </div>
      <div>
        <BlogHeader />
        <div className='max-w-5xl mx-auto p-8'>
          {posts.map(({ img, category, title, desc }, i) => {
            return (
              <div
                key={i}
                className='flex flex-col md:flex-row gap-4 bg-green-50 my-4'
              >
                <img
                  className='w-full md:w-52 h-64 md:h-52 object-cover'
                  src={img}
                  alt='image'
                />
                <div className='p-3'>
                  <h2 className='underline text-base capitalize my-2 font-medium'>
                    {category}
                  </h2>
                  <h2 className='text-[#028006] uppercase font-bold'>
                    {title}
                  </h2>
                  <h2 className='text-base'>{desc}</h2>

                  <a
                    href=''
                    className='text-sm text-[#028006] italic my-4 block'
                  >
                    Read More...
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className='p-0 md:p-8'>
          <Section2 />
        </div>
      </div>
    </div>
  );
};

export default Blog;
