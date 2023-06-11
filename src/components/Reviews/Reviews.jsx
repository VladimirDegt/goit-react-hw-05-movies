import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovies } from 'service/api-themoviedb';
import { Spinner } from 'components/Spinner/Spinner';

export function Reviews(){
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();
  const request = `movie/${moviesId}/reviews`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const reviewMovie = await fetchMovies(request);
        console.log(reviewMovie.results);
        setReview(reviewMovie.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [request]);

  return(
    <>
      {isLoading && <Spinner />}
      <section>
        {
          review && review.map((item)=>{
            return(
              <ul key={item.id}>
                <li>Author: {item.author}</li>
                <li>{item.content}</li>
              </ul>
            )
          })
        }
      </section>
    </>
  )
}