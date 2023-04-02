import { useState } from 'react';
import { FormEl, Input } from './Movies.style';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movie, setMovie] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.target.value });
    console.log('movie: ', movie);
    console.log('query: ', query);
  };

  return (
    <FormEl onSubmit={handleSubmit}>
      <Input
        type="text"
        name="movie"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        value={movie}
        onChange={e => setMovie(e.target.value)}
      />
      <button type="submit">Search</button>
    </FormEl>
  );
}
//
