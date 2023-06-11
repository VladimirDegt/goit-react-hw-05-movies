import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'service/api-themoviedb';
import { Spinner } from 'components/Spinner/Spinner';

export function Cast() {
  const [castList, setCastList] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();
  const request = `movie/${moviesId}/credits`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const castMovie = await fetchMovies(request);
        setCastList(castMovie.cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [request]);

  return (
    <>
      {isLoading && <Spinner />}
      <section>
      {castList &&
        castList.map(item => {
          return (
            <ul key={item.id}>
              <li>{item.character}</li>
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={`${item.character}`}
                />
              </li>
              <li>{item.original_name}</li>
            </ul>
          );
        })}
        </section>
    </>
  );
}
