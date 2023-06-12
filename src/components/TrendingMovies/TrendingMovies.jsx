import { StyledItemList, StyledLink } from './TrendingMovies.styled';

function TrendingMovies({ trendingMovies }) {

  return (
    <ol>
      {trendingMovies &&
        trendingMovies.map(item => {
          return (            
            <StyledLink to={`/movies/${item.id}`} key={item.id}>
              <StyledItemList >{item.title || item.name}</StyledItemList>
            </StyledLink>
          );
        })}
    </ol>
  );
}

export default TrendingMovies;
