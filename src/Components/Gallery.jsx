import axios from 'axios';
import React, { useState } from 'react'
import BigImage from './BigImage';

const Gallery = () => {
  //Api key
  const API_KEY =
    "live_iFt3Tqo8B3oZO1LKao2mxS7QjTN55bJUmx9ykU0ruQhwoJXc9B1jmcFFcBeqsj5I";

  //states
  const [data, setData] = useState([]);

  const fetchCats = () => {
    axios(
      `https://api.thecatapi.com/v1/images/search?limit=4&api_key=${API_KEY}`
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
    <div className='max-w-[1200px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-600 p-4 text-xl md:text-2xl'>Gallery</h2>
      <div className='grid sm:grid-cols-4 gap-4'>
      <BigImage />
        {data.map((item) => (
          <div key={item.id} className="shadow-lg">
            <img
              src={item.url}
              alt="Loadin.."
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery