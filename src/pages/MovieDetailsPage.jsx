import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesById, getMoviesCredits } from "../api";
import MovieDetailsList from "../components/MovieDetailsList/MovieDetailsList";
import MovieCast from "../components/MovieCast/MovieCast";

export default function MovieDetailsPage() {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);
  const [casts, setCasts] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMovies = await getMoviesById(moviesId);
        const fetchedMoviesCredits = await getMoviesCredits(moviesId);
        setCasts(fetchedMoviesCredits);
        setMovies(fetchedMovies);
        console.log(fetchedMovies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [moviesId]);

  return (
    <>
      {movies && <MovieDetailsList movies={movies} />}
      {console.log("movies", movies)}

      <MovieCast casts={casts} />
      {console.log("casts", casts)}
    </>
  );
}
