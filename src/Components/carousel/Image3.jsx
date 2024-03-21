import axios from 'axios';
import React, { useState } from 'react'

const Image3 = () => {
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
    <div>
      <div className="sm:col-span-2 row-span-2">
        {data.map((item) => (
          <div key={item.id} className="shadow-lg">
            <img
              src={item.url}
              alt="/"
              className="w-full h-[400px] object-cover rounded border-4 border-red-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Image3