import React from 'react'
import { FaPaw } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="h-[70px] max-w-[1400px] text-white bg-black flex justify-center items-center  mr-auto ml-auto">
      <div>
        <h1 className="flex f md:text-2xl ">
          <FaPaw className="animate-pulse" />
          Pur<span className="bg-white text-black  rounded">Fect</span>
        </h1>
      </div>
      <div className="flex justify-center ">
        <h3 className="text-white ml-20">|</h3>
        <h3 className="text-white ml-20">mambwe</h3>
      </div>
    </div>
  );
}

export default Footer