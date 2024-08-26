import { Link, Outlet, useLocation } from "react-router-dom";
import css from "./MovieDetailsList.module.css";
import { useRef } from "react";

export default function MovieDetailsList({ movies }) {
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  console.log(backLinkRef);

  return (
    <>
      <Link to={backLinkRef.current ?? "/"}>Go back</Link>
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
