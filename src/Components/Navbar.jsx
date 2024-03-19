import axios from 'axios';
import React, { useState } from 'react';
import { FaPaw } from "react-icons/fa6";



const Navbar = () => {


  return (
    <div className="bg-black py-4 text-white fixed top-0 z-[10] w-full px-4">
      <h1 className="flex font-bold md:text-2xl">
        <FaPaw className="animate-pulse" />
        Pur<span className="bg-white text-black pr-2 rounded">Fect</span>
      </h1>
    </div>
  );
}

export default Navbar