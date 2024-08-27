import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
// import MovieReviews from "./components/MovieReviews/MovieReviews";
// import MovieCast from "./components/MovieCast/MovieCast";

import { lazy, Suspense } from "react";

const HomePage = lazy(function () {
  return import("../src/pages/HomePage");
});
const MoviesPage = lazy(function () {
  return import("../src/pages/MoviesPage");
});

const NotFoundPage = lazy(function () {
  return import("../src/pages/NotFoundPage");
});

const MovieDetailsPage = lazy(function () {
  return import("../src/pages/MovieDetailsPage");
});

const MovieCast = lazy(function () {
  return import("./components/MovieCast/MovieCast");
});
const MovieReviews = lazy(function () {
  return import("./components/MovieReviews/MovieReviews");
});
function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moviesId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
