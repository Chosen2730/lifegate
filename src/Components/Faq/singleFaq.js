import React, { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const Singlefaq = ({ p, quest, ans }) => {
  const [show, setShow] = useState(false);
  const second_p = p || null;

  return (
    <>
      <div className='cursor-pointer' onClick={() => setShow(!show)}>
        <div className='bg-green-50 shadow-md p-4 my-6 flex items-center justify-between'>
          <h5 className='text-base capitalize font-medium'>{quest}</h5>
          <button>{show ? <AiOutlineClose /> : <AiOutlinePlus />}</button>
        </div>
        {show && (
          <p className='text-sm ml-4'>
            {ans} <br />
            <br />
            {second_p}
          </p>
        )}
      </div>
    </>
  );
};
export default Singlefaq;
