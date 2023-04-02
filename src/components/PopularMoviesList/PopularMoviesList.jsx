import { useLocation } from 'react-router-dom';
import { Item, List } from './PopularMoviesList.style';

export const PopularMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Item to={`movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Item>
        </li>
      ))}
    </List>
  );
};
