import { moviesApi } from "api";
import React from "react";
import MoviePresenter from "./MoviePresenter";

export default class extends React.Component {
  state = {
    loading: true,
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();
      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movie information.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <MoviePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
