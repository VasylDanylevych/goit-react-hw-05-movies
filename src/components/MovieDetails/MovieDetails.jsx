import { MovieCard } from 'components/MovieCard/MovieCard';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Container,
  DetailsCon,
  InfoCon,
  Item,
  List,
  Text,
} from './MovieDetails.style';

export default function MovieDetails() {
  const { movieId } = useParams();
  const location = useLocation();

  return (
    <Container>
      <Link to={location.state}>Back</Link>
      <DetailsCon>
        <h2>MovieDetails: {movieId}</h2>
        <MovieCard />
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
