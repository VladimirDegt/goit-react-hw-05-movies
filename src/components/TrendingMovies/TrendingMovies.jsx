import { Link } from 'react-router-dom';
import { StyledItemList } from './TrendingMovies.styled';

function TrendingMovies({ trendingMovies }) {

  return (
    <ol>
      {trendingMovies &&
        trendingMovies.map(item => {
          return (            
            <Link to={`/movies/${item.id}`} key={item.id}>
              <StyledItemList >{item.title || item.name}</StyledItemList>
            </Link>
          );
        })}
    </ol>
  );
}

export default TrendingMovies;
