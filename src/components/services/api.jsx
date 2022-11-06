import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '80621b5b2d3f86fe2da6b1cfe7d912cf';

export const getTrending = async () => {
  const options = {
    params: {
      api_key: API_KEY,
    },
  };
  const response = await axios.get('/trending/movie/day', options);
  return response.data.results;
};

export const getMovieById = async movie_id => {
  const options = {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  };
  const response = await axios.get(`/movie/${movie_id}`, options);
  return response.data;
};
