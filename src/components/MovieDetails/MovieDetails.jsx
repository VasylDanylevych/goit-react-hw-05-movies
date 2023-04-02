import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import MoviesApi from 'services/Api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import {
  Button,
  Container,
  DetailsCon,
  InfoCon,
  Item,
  List,
  Text,
} from './MovieDetails.style';

const moviesApi = new MoviesApi();

export default function MovieDetails() {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await moviesApi.getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <Container>
      <Button to={backLink.current}>Back</Button>
      <DetailsCon>
        <MovieCard movie={movie} />
      </DetailsCon>
      <InfoCon>
        <Text>Additional information:</Text>
        <List>
          <li>
            <Item to="cast">Cast</Item>
          </li>
          <li>
            <Item to="reviews">Reviews</Item>
          </li>
        </List>
      </InfoCon>
      <Outlet />
    </Container>
  );
}
