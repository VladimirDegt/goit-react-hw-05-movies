import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledItemList } from './ListMovie.styled';

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
            <Link key={item.id} to={`/movies/${item.id}`}>
              <StyledItemList>{item.title}</StyledItemList>
            </Link>
          );
        })}
    </ol>
  );
}
