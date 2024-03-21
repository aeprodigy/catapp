import axios from 'axios';
import React, { useState } from 'react';
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  //Api key
  const API_KEY =
    "live_iFt3Tqo8B3oZO1LKao2mxS7QjTN55bJUmx9ykU0ruQhwoJXc9B1jmcFFcBeqsj5I";

  //states
  const [data, setData] = useState([]);

  const fetchCats = () => {
    axios(
      `https://api.thecatapi.com/v1/images/search?limit=1&api_key=${API_KEY}`
    )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cat images:", error);
      });
  };
  //useState effect
  useState(() => {
    fetchCats();
  }, []);

  return (
    <div className="max-w-[1200px] m-auto w-full p-4 py-16 ">
      <h2 className="text-center text-gray-700 text-2xl ">Send us a Message</h2>
      <p className="text-center text-gray-700 py-2">We're waiting on You</p>
      <div className="grid md:grid-cols-2">
        {data.map((item) => (
          <div key={item.id}>
            <img
              src={item.url}
              alt="/"
              className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]"
            />
          </div>
        ))}
        <form>
          <div className="grid grid-cols-2">
            <input className="border m-2 p-2" type="text" placeholder="first" />
            <input className="border m-2 p-2" type="text" placeholder="last" />
            <input
              className="border m-2 p-2"
              type="email"
              placeholder="email"
            />
            <input className="border m-2 p-2" type="tel" placeholder="phone" />
            <input
              className="border col-span-2 m-2 p-2"
              type="text"
              placeholder="address"
            />
            <textarea
              className="border p-2 m-2 col-span-2"
              cols="20"
              rows="10"
              placeholder="mssg"
            ></textarea>
            <button className="bg-black text-white m-2 col-span-2 py-2 font-semibold flex justify-center items-center">
              Submit<span className='text-xl'><IoIosSend /></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact