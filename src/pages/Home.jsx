import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import GamesByGenresId from "../components/GamesByGenresId";
import GenreList from "../components/GenreList";
import TrendingGames from "../components/TrendingGames";
import GlobalApi from "../services/GlobalApi";

function Home() {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  useEffect(() => {
    getAllGamesList();
    getGameListByGenreId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getGameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      console.log("Games List By GenresId:", resp.data.results);
      setGameListByGenres(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-8 pb-8 w-full md:px-24">
      <div className="hidden md:block">
        <GenreList genereId={(genereId) => getGameListByGenreId(genereId)} selectedGenresName={(name) => setSelectedGenresName(name)} />
      </div>
      <div className="col-span-4 md:col-span-3 md:ml-8">
        {allGameList?.length > 0 && gameListByGenres?.length > 0 ? (
          <div className="md:col-span-3 col-span-4 px-3">
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenresId gameList={gameListByGenres} selectedGenresName={selectedGenresName} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
