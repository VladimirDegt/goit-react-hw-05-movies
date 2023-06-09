import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMovies from 'service/api-themoviedb';
import { Spinner } from 'components/Spinner/Spinner';
import { CardMovie } from 'components/CardMovie/CardMovie';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

function MovieDetails() {
  const [infoMovie, setInfoMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {moviesId} = useParams();

  const request = `movie/${moviesId}`;
  useEffect(() => {
    setIsLoading(true);
    fetchMovies(request)
      .then(movies => {
        setInfoMovie(movies.data)
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  }, [request]);

  return (
    <>
      {isLoading && <Spinner />}
      <CardMovie card={infoMovie}/>
      <AdditionalInfo />
    </>
  );
}

export default MovieDetails;
