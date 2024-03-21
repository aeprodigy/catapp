import axios from 'axios';
import React, { useState } from 'react'

const Gallery = () => {
  //Api key
  const API_KEY =
    "live_iFt3Tqo8B3oZO1LKao2mxS7QjTN55bJUmx9ykU0ruQhwoJXc9B1jmcFFcBeqsj5I";

  //states
  const [data, setData] = useState([]);

  const fetchCats = () => {
    axios(
      `https://api.thecatapi.com/v1/images/search?limit=5&api_key=${API_KEY}`
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
      <h2 className='text-center text-gray-600 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        {data.map((item) => (
          <div key={item.id} className="">
            <img
              src={item.url}
              alt="/"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery