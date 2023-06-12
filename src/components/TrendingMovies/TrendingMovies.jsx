import { StyledItemList, StyledLink } from './TrendingMovies.styled';

function TrendingMovies({ trendingMovies, location }) {
  return (
    <ol>
      {trendingMovies &&
        trendingMovies.map(item => {
          return (            
            <StyledLink to={`/movies/${item.id}`} state={{from:location}} key={item.id}>
              <StyledItemList >{item.title || item.name}</StyledItemList>
            </StyledLink>
          );
        })}
    </ol>
  );
}

export default TrendingMovies;
