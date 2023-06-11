import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
              <li>{item.title}</li>
            </Link>
          );
        })}
    </ol>
  );
}
