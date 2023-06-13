import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, Link, useLocation  } from 'react-router-dom';
import { fetchMovies } from 'service/api-themoviedb';
import { CardMovie } from 'components/CardMovie/CardMovie';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import {MovieSceleton} from 'components/sceletons/MovieSceleton/MovieSkeleton';

function MovieDetails() {
  const [infoMovie, setInfoMovie] = useState('');
  const [isErrorFetch, setIsErrorFetch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();
  const request = `movie/${moviesId}`;
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

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
      {isLoading && <MovieSceleton />}
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {isErrorFetch && <h3>Детальна інформація по фільму не знайдена</h3>}
      <CardMovie card={infoMovie} />
      {infoMovie &&  <AdditionalInfo/>}
      {infoMovie &&  
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      
      }
    </>
  );
}

export default MovieDetails;
