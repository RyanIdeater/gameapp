import React from "react";
import { useEffect } from "react";

function TrendingGames({ gameList }) {
  useEffect(() => {
    console.log(gameList);
  }, []);
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="md:grid md:grid-cols-3 gap-4 mt-5 lg:grid-cols-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                className="bg-gray-500 bg-opacity-20 rounded-lg group
              hover:scale-110 trasition-all duration-300 ease-in-out cursor-pointer"
              >
                <img src={item.background_image} className="h-[270px] rounded-t-lg object-cover" />
                <h2 className="dark:text-white p-2 text-[20px] font-bold">{item.name}</h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
