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
      `https://api.thecatapi.com/v1/images/search?limit=20&api_key=${API_KEY}`
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
    <div className="min-h-full">
      <div className="w-full absolute top-[0%] p-4 md:p-8 "></div>
      <h3 className="text-center pt-8 text-4xl font-bold text-gray-700">
        Cat World
      </h3>
      <div className="grid md:grid-cols-3 gap-7 py-20">
        {data.map((item) => (
          <div key={item.id} className="mx-auto py-4">
            <img
              src={item.url}
              alt="/"
              className="w-[220px] hover:scale-110 "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatsModel