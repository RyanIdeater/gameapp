import axios from "axios";

const key = "1791934af69e4667932d54be72d1e0e5";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId = (id) => axiosCreate.get("/games?key=" + key + "&genres=" + id);
export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
