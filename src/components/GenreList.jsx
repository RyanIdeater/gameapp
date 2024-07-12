import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";

function GenreList({ genereId, selectedGenresName }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {
      setGenreList(resp.data.results);
    });
  };
  return (
    <div>
      <h3 className="text-[30px] font-bold dark:text-white">Genre</h3>
      {genreList.map((item, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            genereId(item.id);
            selectedGenresName(item.name);
          }}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-orange-400 p-3
          group rounded-lg hover:dark:bg-gray-600      ${activeIndex == index ? "bg-orange-500 dark:bg-gray-600 " : null} duration-300    transition-all
     `}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px] object-cover rounded-lg 
          group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex == index ? "scale-105" : null}`}
          />
          <h3
            className={`dark:text-white text-[18px] group-hover:font-bold transition-all 
          ease-out duration-300  ${activeIndex == index ? "font-bold" : null}`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;