import React from 'react'
import { GiCat } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="w-full md:h-[100vh] h-[90vh] md:pt-16">
      <img
        src="https://cdn2.thecatapi.com/images/a4m.jpg"
        className="w-full h-full object-cover"
        alt="loadin.."
      />
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] flex flex-col text-white p-4">
          <h1 className="text-2xl  md:text-7xl font-semibold">Find Your Pet</h1>
          <h3 className="font-thin md:text-6xl text-shadow-lg">See Your Way</h3>
          <p className="italic flex items-center">
            Discover Your Feline Companion <span className='ml-2 text-2xl'e><GiCat /></span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero