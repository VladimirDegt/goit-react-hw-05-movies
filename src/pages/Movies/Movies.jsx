import { useEffect, useState } from 'react';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { ListMovie } from 'components/ListMovie/ListMovie';
import { fetchMovies } from 'service/api-themoviedb';
import MovieTopList from 'components/sceletons/HomeSkeleton/HomeSkeleton';
import { useLocation, useSearchParams } from 'react-router-dom';

function Movies() {
  const [movie, setMovie] = useState('');
  const [matchMovie, setMatchMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const request = `search/movie`;
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movies = await fetchMovies(request, abortController.signal, movie);
        setMatchMovie(movies.results);
        if(movie && movies.results.length === 0){
          setIsVisible(true);
        }
      } catch (error) {
        if(error.code !== 'ERR_CANCELED') {
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
  }, [request, movie, searchParams]);

  function addMovie(name) {
    setMovie(name);
    setSearchParams({query: name})
  }

  return (
    <>
      <SearchMovie addMovie={addMovie} />
      {isLoading && <MovieTopList />}
      <ListMovie movies={matchMovie} location={location} />
      {isVisible && <h3>По Вашему запиту нічого не знайдено</h3>}
    </>
  );
}

export default Movies;
