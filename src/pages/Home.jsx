import { useLocation } from 'react-router-dom';
import { Container, Item, List, Title } from './Home.style';

export default function Home() {
  const location = useLocation();
  return (
    <Container>
      <Title>Trending today:</Title>
      <List>
        <li>
          <Item key={1} to="movies/movie-1" state={location}>
            Popular Movie-1
          </Item>
        </li>
        <li>
          <Item key={2} to="movies/movie-2" state={location}>
            Popular Movie-2
          </Item>
        </li>
        <li>
          <Item key={3} to="movies/movie-3" state={location}>
            Popular Movie-3
          </Item>
        </li>
      </List>
    </Container>
  );
}
