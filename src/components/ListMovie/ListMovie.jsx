import { useEffect, useState } from 'react';
import { StyledItemList, StyledLink } from './ListMovie.styled';

export function ListMovie({ movies }) {
  const [visibleMovie, setVisibleMovie] = useState('');

  useEffect(() => {
    setVisibleMovie(movies);
  }, [movies]);

  return (
    <ol>
      {visibleMovie &&
        visibleMovie.map(item => {
          return (
            <StyledLink key={item.id} to={`/movies/${item.id}`}>
              <StyledItemList>{item.title}</StyledItemList>
            </StyledLink>
          );
        })}
    </ol>
  );
}
