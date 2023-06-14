import { useEffect, useState } from 'react';
import { StyledInfoSection } from './CardMovie.styled';

export function CardMovie({ card }) {
  const [infoMovie, setInfoMovie] = useState('');

  useEffect(() => {
    setInfoMovie(card);
  }, [card]);

  return (
    infoMovie && (
      <StyledInfoSection>
        {infoMovie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${infoMovie.poster_path}`}
            alt={`${infoMovie.title || infoMovie.name}`}
            width="300"
          />
        ) : (
          <img
            src={`http://dummyimage.com/300x450/99cccc.jpg&text=No+photo`}
            alt={`${infoMovie.title || infoMovie.name}`}
            width="300"
          />
        )}

        <div>
          <h1>{infoMovie.title || infoMovie.name}</h1>
          <p>vote_average: {infoMovie.vote_average}</p>
          <h2>Overview</h2>
          <p>{infoMovie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {infoMovie &&
              infoMovie.genres.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
        </div>
      </StyledInfoSection>
    )
  );
};
