import React from "react";

import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    let result = null;
    const { isMovie } = this.state;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(id));
      } else {
        ({ data: result } = await tvApi.showDetail(id));
      }
      this.setState({
        result,
      });
    } catch {
      this.setState({
        error: "Can't find anything.",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
