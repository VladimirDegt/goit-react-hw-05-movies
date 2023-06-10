import axios from 'axios';

const API_KEY = '203c8efd66ec76470e0f4b5662bc1dde';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchMovies(request, query = '') {
  if (!request) {
    return;
  }

  const result = await axios(`${BASE_URL}${request}?api_key=${API_KEY}&query=${query}`);
  return result.data;
};

