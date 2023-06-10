import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchMovie } from "components/SearchMovie/SearchMovie";
import { ListMovie } from "components/ListMovie/ListMovie";
import {fetchMovies} from "service/api-themoviedb";
import { Spinner } from "components/Spinner/Spinner";

function Movies() {
  const [movie, setMovie] = useState('');
  const [matchMovie, setMatchMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const request = `search/movie`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const movies = await fetchMovies(request, movie);
        setMatchMovie(movies.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [request, movie]);

  function addMovie(name){
    setMovie(name)
  };

  return (
    <>
      <SearchMovie addMovie={addMovie}/>
      {isLoading && <Spinner />}
      <Link to={`/movies?query=${movie}`}>
        <ListMovie movies={matchMovie}/>
      </Link>
    </>
  );
};

export default Movies;
