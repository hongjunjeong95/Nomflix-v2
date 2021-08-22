import React, { memo, useState } from "react";
import { useQuery } from "react-query";

import { moviesApi } from "api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = memo(() => {
  const [error, setError] = useState(null);

  const {
    data: dataNowPlaying,
    isLoading: isLoadingNowPlaying,
    status: statusNowPlaying,
    error: errorNowPlaying,
  } = useQuery("movie_now_playing", moviesApi.nowPlaying);

  const {
    data: dataUpcoming,
    isLoading: isLoadingUpcoming,
    status: statusUpcoming,
    error: errorUpcoming,
  } = useQuery("movie_upcoming", moviesApi.upcoming);

  const {
    data: dataPopular,
    isLoading: isLoadingPopular,
    status: statusPopular,
    error: errorPopular,
  } = useQuery("movie_popular", moviesApi.popular);

  if (errorNowPlaying || errorUpcoming || errorPopular) {
    setError(errorNowPlaying);
  }

  return (
    <MoviePresenter
      nowPlaying={
        statusNowPlaying === "success" ? dataNowPlaying?.data?.results : []
      }
      upcoming={statusUpcoming === "success" ? dataUpcoming?.data.results : []}
      popular={statusPopular === "success" ? dataPopular?.data.results : []}
      error={error}
      loading={isLoadingNowPlaying || isLoadingUpcoming || isLoadingPopular}
    />
  );
});

export default MovieContainer;
