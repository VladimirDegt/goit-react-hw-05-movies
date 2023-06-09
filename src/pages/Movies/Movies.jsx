import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchMovie } from "components/SearchMovie/SearchMovie";
import { ListMovie } from "components/ListMovie/ListMovie";
import fetchMovies from "service/api-themoviedb";

function Movies() {
  const [movie, setMovie] = useState('');
  const [matchMovie, setMatchMovie] = useState('');
  const request = `search/movie`;

  useEffect(()=>{
    if(!movie){
      return
    };

    fetchMovies(request, movie)
    .then((items)=>setMatchMovie(items.data.results))
  },[movie, request]);

  function addMovie(name){
    setMovie(name)
  };

  return (
    <>
      <SearchMovie addMovie={addMovie}/>
      <Link to={`/movies?query=${movie}`}>
        <ListMovie movies={matchMovie}/>
      </Link>
    </>
  );
};

export default Movies;
