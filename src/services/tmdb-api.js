import axios from 'axios';

const API_KEY = '344c085950d5d69d8f113321e1626ad4';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

// Fetching Trend Movies
export const fetchTrendingMovies = async (page = 1) => {
  try {
    const response = await axios.get('/trending/movie/week', {
      params: {
        page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Failed to fetch trending movies:', error);
    throw error;
  }
};

// Fetching Query
export const fetchMovieQuery = async movieName => {
  const response = await axios.get(`search/movie?query=${movieName}`);
  return response.data.results;
};

// Fetching Details
export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

// Fetching Cast
export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`);
  return response.data.cast;
};

// Fetching Reviews
export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`);
  return response.data.results;
};
