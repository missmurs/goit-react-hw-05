import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList/MovieList";
import { getMoviesSearch } from "../api.js";
export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const [value, setValue] = useState("");
  const query = params.get("query") ?? "";
  const changeQuery = async (newQuery) => {
    setValue(newQuery);
    setParams(params);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await getMoviesSearch({ query: query });
        setMovies(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
    }
    if (query) {
      fetchData();
    }
  }, [query]);
  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <Filter value={value} onChange={changeQuery} />
      {movies.length > 0 && <MovieList movies={filterMovies} />}
    </>
  );
}
