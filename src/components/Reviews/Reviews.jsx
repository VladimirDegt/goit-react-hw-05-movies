import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'service/api-themoviedb';
import { Spinner } from 'components/Spinner/Spinner';

export function Reviews() {
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();
  const request = `movie/${moviesId}/reviews`;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const reviewMovie = await fetchMovies(request, abortController.signal);
        setReview(reviewMovie.results);
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
        {review.length === 0 && <p>We don`t have any reviews for this movie</p>}
        {review &&
          review.map(item => {
            return (
              <ul key={item.id}>
                <li>Author: {item.author}</li>
                <li>{item.content}</li>
              </ul>
            );
          })}
      </section>
    </>
  );
}
