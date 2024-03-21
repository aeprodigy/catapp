import axios from 'axios';
import React, { useState } from 'react'

const CatsModel = () => {
  //Api key
  const API_KEY =
    "live_iFt3Tqo8B3oZO1LKao2mxS7QjTN55bJUmx9ykU0ruQhwoJXc9B1jmcFFcBeqsj5I";

  //states
  const [data, setData] = useState([]);

  const fetchCats = () => {
    axios(
      `https://api.thecatapi.com/v1/images/search?limit=3&api_key=${API_KEY}`
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
    <div className="max-w-[1140px] m-[57px] w-full md:flex mt-[-75px] md:justify-center">
      {data.map((item) => (
        <div key={item.id} className="relative p-4 ">
          <h3 className="text-white absolute z-5 top-[25%] left-[25%] translate-x-[15%] translate-y-[160%]">
            Know More
          </h3>
          <img
            src={item.url}
            alt="/"
            className="w-[220px] md:w-[220px] h-full object-cover border-4 border-white shadow-lg hover:scale-110 "
          />
        </div>
      ))}
    </div>
  );
}

export default CatsModel