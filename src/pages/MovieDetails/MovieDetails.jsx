import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovies } from 'service/api-themoviedb';
import { Spinner } from 'components/Spinner/Spinner';
import { CardMovie } from 'components/CardMovie/CardMovie';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

function MovieDetails() {
  const [infoMovie, setInfoMovie] = useState('');
  const [isErrorFetch, setIsErrorFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();
  const request = `movie/${moviesId}`;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movies = await fetchMovies(request, abortController.signal);
        setInfoMovie(movies);
      } catch (error) {
        if(error.code !== 'ERR_CANCELED') {
          setIsErrorFetch(true);
          setInfoMovie('');
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
  }, [request]);

  return (
    <>
      {isLoading && <Spinner />}
      <button> Go back</button>
      {isErrorFetch && <h3>Детальна інформація по фільму не знайдена</h3>}
      <CardMovie card={infoMovie} />
      {infoMovie &&  <AdditionalInfo/>}
      {infoMovie &&  <Outlet />}
    </>
  );
}

export default MovieDetails;
