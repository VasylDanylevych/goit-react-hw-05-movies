import { useLocation } from 'react-router-dom';
import { Item, List } from './MoviesList.style';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(movie => (
        <li key={movie.id}>
          <Item to={`${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Item>
        </li>
      ))}
    </List>
  );
};
