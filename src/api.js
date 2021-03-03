import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_TMDB_API,
    language: "en-US",
  },
});

export const movieApi = {
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  popular: () => api.get("movie/popular"),
  top_rated: () => api.get("movie/top_rated"),
  now_playing: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  search: (term) =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  tvDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  airing_today: () => api.get("tv/airing_today"),
  popular: () => api.get("tv/popular"),
  top_rated: () => api.get("tv/top_rated"),
  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
