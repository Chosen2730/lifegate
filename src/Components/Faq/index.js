import React from "react";
import { faqs } from "../../Configs/faqs";
import Singlefaq from "./singleFaq";

const Faq = () => {
  return (
    <div className='my-20 max-w-3xl mx-auto'>
      <h1 className='text-center font-bold text-3xl text-[#028006]'>
        Frequently Asked Questions (FAQS)
      </h1>
      <div className='my-10 p-4'>
        {faqs.map((faq, index) => {
          return <Singlefaq key={index} {...faq} />;
        })}
      </div>
      <div className='flex flex-col justify-center items-center my-10'>
        <h2 className='text-center text-xl font-bold capitalize'>
          Got more questions to ask?
        </h2>
        <a
          href='mailto:Info@Lifegatemicrofinance.com'
          target={"__blank"}
          className='bg-[#028006] text-white p-4 px-8 text-center w-fit my-4 shadow-xl hover:scale-105 hover:bg-green-900 transition'
        >
          Info@Lifegatemicrofinance.com
        </a>
      </div>
    </div>
  );
};

export default Faq;
