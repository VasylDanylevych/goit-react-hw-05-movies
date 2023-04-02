import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesApi from 'services/Api';

const moviesApi = new MoviesApi();

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await moviesApi.getMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <h3>We don't have any reviews for this movie</h3>
        )}
      </ul>
    </div>
  );
}
