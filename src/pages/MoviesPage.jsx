import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import MovieList from "../components/MovieList/MovieList";
import { getMoviesSearch } from "../api.js";
// export default function MoviesPage() {
//   const [movies, setMovies] = useState([]);
//   const [params, setParams] = useSearchParams();
//   const [values, setValues] = useState({
//     query: "",
//   });

//   const query = params.get("query") ?? "";
//   const changeQuery = (newQuery) => {
//     params.set("query", newQuery);
//     setParams(params);
//   };
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const fetchedMovies = await getMoviesSearch({ query: query });
//         setMovies(fetchedMovies);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     if (query) {
//       fetchData();
//     }
//   }, [query]);
//   const filterMovies = movies.filter((movie) =>
//     movie.title.toLowerCase().includes(query.toLowerCase())
//   );
//   return (
//     <>
//       <Filter value={values.query} onChange={changeQuery} />
//       {movies.length > 0 && <MovieList movies={filterMovies} />}
//     </>
//   );
// }

export default function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [values, setValues] = useState({
    query: "",
  });

  const query = params.get("query") ?? "";
  console.log(query);

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.query]: evt.target.value,
    });
  };

  const handleSumit = (evt) => {
    evt.preventDefault();

    console.log(values);

    setValues({
      query: "",
    });
  };
  const filterMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          name="query"
          value={values.query}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
      {movies.length > 0 && <MovieList movies={filterMovies} />}
    </>
  );
}
