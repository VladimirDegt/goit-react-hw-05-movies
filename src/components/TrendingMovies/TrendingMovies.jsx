import { Link } from 'react-router-dom';
function TrendingMovies({ trendingMovies }) {
  return (
    <ol>
      {trendingMovies &&
        trendingMovies.map(item => {
          return (
            <Link to={`/movies/${item.id}`} key={item.id}>
              <li >{item.title || item.name}</li>
            </Link>
          );
        })}
    </ol>
  );
}

export default TrendingMovies;
