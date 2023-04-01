import { useState } from 'react';
import { FormEl, Input } from './Movies.style';

export default function Movies() {
  const [movie, setMovie] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('movie: ', movie);
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
