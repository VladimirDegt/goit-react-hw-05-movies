import { useEffect, useState } from 'react';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { ListMovie } from 'components/ListMovie/ListMovie';
import { fetchMovies } from 'service/api-themoviedb';
import MovieTopList from 'components/sceletons/HomeSkeleton/HomeSkeleton';


function Movies() {
  const [movie, setMovie] = useState('');
  const [matchMovie, setMatchMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const request = `search/movie`;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movies = await fetchMovies(request, abortController.signal, movie);
        setMatchMovie(movies.results);
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
  }, [request, movie]);

  function addMovie(name) {
    setMovie(name);
  }

  return (
    <>
      <SearchMovie addMovie={addMovie} />
      {isLoading && <MovieTopList />}
      <ListMovie movies={matchMovie} />
    </>
  );
}

export default Movies;
