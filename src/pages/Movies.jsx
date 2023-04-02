import { FormEl, Input } from './Movies.style';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Container } from './Home.style';
import { useCallback, useEffect, useState } from 'react';
import MoviesApi from 'services/Api';

const moviesApi = new MoviesApi();

export default function Movies() {
  const [movies, setMovie] = useState([]);
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = useCallback(evt => {
    evt.preventDefault();
    setShouldFetchData(true);
  }, []);

  useEffect(() => {
    async function fetchMovies() {
      if (query !== '') {
        try {
          const data = await moviesApi.getMoviesOnQuery(query);
          setMovie(data.results);
        } catch (error) {
          console.log(error);
        } finally {
          setShouldFetchData(false);
        }
      } else {
        setMovie([]);
      }
    }
    if (shouldFetchData) {
      fetchMovies();
    }
  }, [query, shouldFetchData]);

  const updateQuery = e => {
    const queryValue = e.target.value;
    if (queryValue !== '') {
      return setSearchParams({ query: queryValue });
    }
    setSearchParams({});
  };

  return (
    <Container>
      <FormEl onSubmit={handleSubmit}>
        <Input
          type="text"
          name="movie"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          value={query}
          onChange={updateQuery}
        />
        <button type="submit">Search</button>
      </FormEl>
      <MoviesList movies={movies} />
    </Container>
  );
}
