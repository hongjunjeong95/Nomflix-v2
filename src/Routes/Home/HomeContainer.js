import { movieApi } from "api";
import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component {
  state = {
    popular: null,
    top_rated: null,
    now_playing: null,
    upcoming: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: popular },
      } = await movieApi.popular();
      const {
        data: { results: top_rated },
      } = await movieApi.top_rated();
      const {
        data: { results: now_playing },
      } = await movieApi.now_playing();
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();

      this.setState({
        popular,
        top_rated,
        now_playing,
        upcoming,
      });
    } catch {
      this.setState({
        error: "Can't find movie information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const {
      popular,
      top_rated,
      now_playing,
      upcoming,
      error,
      loading,
    } = this.state;
    return (
      <>
        <HomePresenter
          popular={popular}
          top_rated={top_rated}
          now_playing={now_playing}
          upcoming={upcoming}
          error={error}
          loading={loading}
        />
      </>
    );
  }
}

export default HomeContainer;
