import React, { memo, useEffect, useState } from "react";
import { useQuery } from "react-query";

import { moviesApi } from "api";
import MoviePresenter from "./MoviePresenter";

const MovieContainer = memo(() => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [popular, setPopular] = useState(null);
  const [error, setError] = useState(null);

  const { data, isLoading, isError, status } = useQuery(
    "movie_now_playing",
    moviesApi.nowPlaying()
  );

  console.log(data, isLoading, isError, status);

  useEffect(async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      setNowPlaying(nowPlaying);

      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();

      setUpcoming(upcoming);

      const {
        data: { results: popular },
      } = await moviesApi.popular();

      setPopular(popular);
    } catch {
      setError("Can't find movie information.");
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <MoviePresenter
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />
  );
});

export default MovieContainer;
