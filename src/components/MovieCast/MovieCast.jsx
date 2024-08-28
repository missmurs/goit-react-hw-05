import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesCredits } from "../../api";

export default function MovieCast() {
  const { moviesId } = useParams();

  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMoviesCredits = await getMoviesCredits(moviesId);
        setCasts(fetchedMoviesCredits);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [moviesId]);
  {
    console.log("casts", casts);
  }
  return (
    <>
      {casts.length > 0 ? (
        <ul>
          {casts.map((cast) => (
            <li key={cast.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path} s`}
                alt={cast.name}
                style={{ width: "10%", height: "10%" }}
              />
              <p>{cast.name}</p>
              <p>Chapters: {cast.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast information available</p>
      )}
    </>
  );
}
