import axios from "axios";
const API_Key = "428e60789574cb00f254c824ba097102";

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
export const getMovies = async ({ abortController }) => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_Key}`, {
    signal: abortController.signal,
  });
  return response.data.results;
};

export const getMoviesById = async (moviesId) => {
  const response = await axios.get(`/movie/${moviesId}?api_key=${API_Key}`);
  return response.data;
};
export const getMoviesSearch = async ({ query }) => {
  const response = await axios.get(
    `/search/movie?api_key=${API_Key}&query=${query}`
  );
  return response.data.results;
};
