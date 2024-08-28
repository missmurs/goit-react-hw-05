import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesReviews } from "../../api";

export default function MovieReviews() {
  const { moviesId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedMoviesReviews = await getMoviesReviews(moviesId);
        setReviews(fetchedMoviesReviews);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [moviesId]);
  {
    console.log("reviews", reviews);
  }
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <b>Author : {review.author}</b>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No review information available</p>
      )}
    </>
  );
}
