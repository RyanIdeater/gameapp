import React from "react";
import { useEffect } from "react";

function Banner({ gameBanner }) {
  useEffect(() => {}, []);
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent w-full rounded-xl">
        <h2 className="text-[18px] md:text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">Get Now!</button>
      </div>
      <img src={gameBanner.background_image} className="md:h-[380px] w-full object-cover rounded-xl" />
    </div>
  );
}

export default Banner;
