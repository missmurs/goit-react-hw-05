import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesById } from "../api";
import MovieDetailsList from "../components/MovieDetailsList/MovieDetailsList";

export default function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await getMoviesById(moviesId);

        setMovies(fetchedMovies);
        console.log(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [moviesId]);

  return <>{movies && <MovieDetailsList movies={movies} />}</>;
}
