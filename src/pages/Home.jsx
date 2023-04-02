import { PopularMoviesList } from 'components/PopularMoviesList/PopularMoviesList';
import { Container, Title } from './Home.style';
import { useEffect, useState } from 'react';
import MoviesApi from 'services/Api';

const moviesApi = new MoviesApi();

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await moviesApi.getPopularMovies();
        setPopularMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <Container>
      <Title>Trending today:</Title>
      <PopularMoviesList movies={popularMovies} />
    </Container>
  );
}
