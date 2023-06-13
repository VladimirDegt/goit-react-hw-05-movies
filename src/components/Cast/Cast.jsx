import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'service/api-themoviedb';
import { Spinner } from 'components/Spinner/Spinner';

function Cast() {
  const [castList, setCastList] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();
  const request = `movie/${moviesId}/credits`;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const castMovie = await fetchMovies(request, abortController.signal);
        setCastList(castMovie.cast);
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
                  {item.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                      alt={`${item.character}`}
                      width="100"
                    />
                  ) : (
                    <img
                      src={`http://dummyimage.com/100x150/99cccc.jpg&text=No+photo`}
                      alt={`${item.character}`}
                      width="100"
                    />
                  )}
                </li>
                <li>{item.original_name}</li>
              </ul>
            );
          })}
      </section>
    </>
  );
};

export default Cast;