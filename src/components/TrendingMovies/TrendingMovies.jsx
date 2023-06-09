import { Link } from 'react-router-dom';
function TrendingMovies({ trendingMovies }) {
  return (
    <ul>
      {trendingMovies &&
        trendingMovies.map(item => {
          return (
            <Link to={`/movies/${item.id}`} key={item.id}>
              <li >{item.title || item.name}</li>
            </Link>
          );
        })}
    </ul>
  );
}

export default TrendingMovies;
