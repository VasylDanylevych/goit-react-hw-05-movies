import { CardContainer, CardList } from './MovieCard.style';

export const MovieCard = ({ movie }) => {
  const genres = movie.genres ?? [];

  return (
    <CardContainer>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : `http://www.suryalaya.org/images/no_image.jpg`
        }
        loading="lazy"
        alt="Movie poster"
        width={400}
      />
      <CardList>
        <li>
          {movie.title ?? movie.name}
          <p>User Score {movie.vote_average}</p>
        </li>
        <li>
          Overview
          <p>{movie.overview}</p>
        </li>
        <li>
          Genresp
          {genres && genres.map(genre => <p key={genre.id}>{genre.name}</p>)}
        </li>
      </CardList>
    </CardContainer>
  );
};
