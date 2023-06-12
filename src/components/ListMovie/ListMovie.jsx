import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ListMovie({ movies }) {
  const [visibleMovie, setVisibleMovie] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setVisibleMovie(movies);
  }, [movies]);

  const handleClick = (id) => {
    navigate(`/movies/${id}`, { state: { param: '/movies' } });
  };

  return (
    <ol>
      {visibleMovie &&
        visibleMovie.map(item => {
          return (
            <li key={item.id} onClick={() => handleClick(item.id)}>
              {item.title || item.name}
            </li>
          );
        })}
    </ol>
  );
}
