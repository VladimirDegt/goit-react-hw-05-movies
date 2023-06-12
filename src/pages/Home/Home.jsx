import { useEffect, useState } from 'react';
import { fetchMovies } from 'service/api-themoviedb';
import TrendingMovies from 'components/TrendingMovies/TrendingMovies';
import MovieTopList from 'components/sceletons/HomeSkeleton/HomeSkeleton';
import { useLocation } from 'react-router-dom';

const request = 'trending/all/day';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movies = await fetchMovies(request, abortController.signal);
        setTrendingMovies(movies.results);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') {
          console.log(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {isLoading && <MovieTopList />}
      <TrendingMovies trendingMovies={trendingMovies} location={location} />
    </>
  );
}

export default Home;
