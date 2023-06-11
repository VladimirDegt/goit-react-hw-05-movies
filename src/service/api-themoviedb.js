import axios from 'axios';

const API_KEY = '203c8efd66ec76470e0f4b5662bc1dde';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchMovies(request, signal, query = '') {
  if (!request) {
    return;
  }

  const result = await axios(`/${request}?api_key=${API_KEY}&query=${query}`, {
    signal,
  });
  return result.data;
};

