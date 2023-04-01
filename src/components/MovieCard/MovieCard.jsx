import { CardContainer, CardList } from './MovieCard.style';

export const MovieCard = () => {
  return (
    <CardContainer>
      <img
        src="https://i.pinimg.com/originals/c0/32/e7/c032e75eb14d6a13c5524fad9cb823ff.jpg"
        alt="Movie poster"
        width={400}
      />
      <CardList>
        <li>
          Muvie name <p>User Score %</p>
        </li>
        <li>
          Overview
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            placeat?
          </p>
        </li>
        <li>
          Genresp<p>Lorem ipsum dolor sit amet.</p>
        </li>
      </CardList>
    </CardContainer>
  );
};
