import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesById } from "../api";

export default function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await getMoviesById(moviesId);
        setMovies(fetchedMovies);
        console.log(fetchedMovies);
      } catch (error) {}
    }
    fetchData();
  }, [moviesId]);

  return (
    <div>
      <h1>PAGE about films</h1>
      {movies && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
            alt={movies.title}
          />
          <h1>{movies.title}</h1>
          <p>User Score: {movies.vote_average}</p>
          <h2>Overview</h2>
          <p>{movies.overview}</p>
          <h3>Genres</h3>
          <p>{movies.genres.map((genre) => genre.name).join(", ")}</p>{" "}
        </div>
      )}
    </div>
  );
}
