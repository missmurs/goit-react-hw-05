import { useState, useEffect } from "react";
import { getMovies } from "../api.js";
import { Link } from "react-router-dom";

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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
