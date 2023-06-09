import { useEffect, useState } from 'react';
import fetchMovies from 'service/api-themoviedb';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import { Spinner } from 'components/Spinner/Spinner';

const request = 'trending/all/day';

function Home() {
  const [trendingMovies, settrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovies(request)
    .then(movies => {
      settrendingMovies(movies.data.results);
    })
    .catch((error) => {
      console.log(error.message)
    })
    .finally(()=>setIsLoading(false))
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <Spinner/>}
      <TrendingMovies trendingMovies={trendingMovies} />
    </>
  );
}

export default Home;
