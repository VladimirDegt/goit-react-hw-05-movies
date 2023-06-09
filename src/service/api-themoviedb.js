import axios from "axios"

const API_KEY = '203c8efd66ec76470e0f4b5662bc1dde';
const BASE_URL = 'https://api.themoviedb.org/3/';

function fetchMovies(request, query='') {
  if(!request) {
    return
  }

  return axios(`${BASE_URL}${request}?api_key=${API_KEY}&query=${query}`);
};

export default fetchMovies;