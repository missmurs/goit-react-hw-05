import { Link, Outlet } from "react-router-dom";
import css from "./MovieDetailsList.module.css";

export default function MovieDetailsList({ movies }) {
  return (
    <>
      <div className={css.movieDetailsBox}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movies.backdrop_path}`}
          alt={movies.title}
        />
        <div className={css.movieDetailsText}>
          <h1>{movies.title}</h1>
          <p>User Score: {movies.vote_average}</p>
          <h2>Overview</h2>
          <p>{movies.overview}</p>
          <h3>Genres</h3>
          <p>{movies.genres.map((genre) => genre.name).join(", ")}</p>{" "}
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </>
  );
}
