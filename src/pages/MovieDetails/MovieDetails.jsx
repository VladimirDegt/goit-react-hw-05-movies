import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovies } from 'service/api-themoviedb';
import { Spinner } from 'components/Spinner/Spinner';
import { CardMovie } from 'components/CardMovie/CardMovie';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

function MovieDetails() {
  const [infoMovie, setInfoMovie] = useState('');
  const [isErrorFetch, setIsErrorFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fromPage, setFromPage] = useState('');
  const { moviesId } = useParams();
  const request = `movie/${moviesId}`;

  const location = useLocation();
  const paramValue = location.state.param;

  useEffect(() => {
    const abortController = new AbortController();

    setFromPage(paramValue)
    
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
      setFromPage('');
    };
  }, [request, paramValue]);

  return (
    <>
      {isLoading && <Spinner />}
      <Link to={`${fromPage}`}><button> Go back</button></Link>
      {isErrorFetch && <h3>Детальна інформація по фільму не знайдена</h3>}
      <CardMovie card={infoMovie} />
      {infoMovie &&  <AdditionalInfo/>}
      {infoMovie &&  <Outlet />}
    </>
  );
}

export default MovieDetails;
