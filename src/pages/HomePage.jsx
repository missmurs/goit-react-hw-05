import { useState, useEffect } from "react";
import { getMovies } from "../api.js";

import MovieList from "../components/MovieList/MovieList.jsx";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedMovies = await getMovies({
          abortController: controller,
        });

        setMovies(fetchedMovies);
        console.log(fetchedMovies);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      }
    }
    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>OOOPS, error!</p>}

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
