import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoviesApi from 'services/Api';

const moviesApi = new MoviesApi();

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function fetchCasts() {
      try {
        const data = await moviesApi.getMovieCast(movieId);
        setCasts(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCasts();
  }, [movieId]);

  return (
    <div>
      <ul>
        {casts &&
          casts.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt="profile path"
                loading="lazy"
                width={120}
              />
              <h4>{cast.name}</h4>
              <p>Character: {cast.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
