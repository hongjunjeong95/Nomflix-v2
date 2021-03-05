import { tvApi } from "api";
import React from "react";
import TVPresenter from "./TVPresenter";

class TVContainer extends React.Component {
  state = {
    airing_today: null,
    popular: null,
    top_rated: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    try {
      const {
        data: { results: airing_today },
      } = await tvApi.airing_today();
      const {
        data: { results: popular },
      } = await tvApi.popular();
      const {
        data: { results: top_rated },
      } = await tvApi.top_rated();

      this.setState({
        airing_today,
        popular,
        top_rated,
      });
    } catch {
      this.setState({
        error: "Can't find tv information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { airing_today, popular, top_rated, error, loading } = this.state;
    return (
      <>
        <TVPresenter
          airing_today={airing_today}
          popular={popular}
          top_rated={top_rated}
          error={error}
          loading={loading}
        />
      </>
    );
  }
}

export default TVContainer;
