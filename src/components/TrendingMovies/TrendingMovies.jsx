import { useNavigate } from 'react-router-dom';
function TrendingMovies({ trendingMovies }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movies/${id}`, { state: { param: '/' } });
  };

  return (
    <ol>
      {trendingMovies &&
        trendingMovies.map(item => {
          return (            
            <li key={item.id} onClick={() => handleClick(item.id)}>
              {item.title || item.name}
            </li>
          );
        })}
    </ol>
  );
}

export default TrendingMovies;
