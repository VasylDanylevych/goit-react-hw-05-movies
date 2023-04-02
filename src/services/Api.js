import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/';
const API_KEY = '51710d149e771e558fc72465c85784a4';

export default class MoviesApi {
  async getPopularMovies() {
    try {
      const response = await axios.get(
        `${URL}trending/movie/day?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMoviesOnQuery(query) {
    try {
      const response = await axios.get(
        `${URL}search/movie?api_key=${API_KEY}&query=${query}&page=1`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieDetails(id) {
    try {
      const response = await axios.get(`${URL}movie/${id}?api_key=${API_KEY}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieCast(id) {
    try {
      const response = await axios.get(
        `${URL}movie/${id}/credits?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getMovieReviews(id) {
    try {
      const response = await axios.get(
        `${URL}movie/${id}/reviews?api_key=${API_KEY}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
