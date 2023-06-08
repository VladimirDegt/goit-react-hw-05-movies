import axios from "axios"

const API_KEY = '203c8efd66ec76470e0f4b5662bc1dde';
const BASE_URL = 'https://api.themoviedb.org/3/movie/11';

function fetchMovies() {
  return axios(`${BASE_URL}?api_key=${API_KEY}`)
};

export default fetchMovies;


// /trending/get-trending
// /search/search-movies
// /movies/get-movie-details
// /movies/get-movie-credits
// /movies/get-movie-reviews