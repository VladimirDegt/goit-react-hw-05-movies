import { useEffect, useState } from 'react';
import { StyledItemList, StyledLink } from './ListMovie.styled';

export function ListMovie({ movies, location }) {
  const [visibleMovie, setVisibleMovie] = useState('');

  useEffect(() => {
    setVisibleMovie(movies);
  }, [movies]);

  return (
    <ol>
    
      {visibleMovie &&
        visibleMovie.map(item => {
          return (
            <StyledLink key={item.id} to={`/movies/${item.id}`} state={{from:location}}>
              <StyledItemList>{item.title}</StyledItemList>
            </StyledLink>
          );
        })}
    </ol>
  );
}
