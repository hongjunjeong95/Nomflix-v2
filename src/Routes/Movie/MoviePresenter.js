import Helmet from "react-helmet";

const MoviePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? <h1>loading</h1> : <h2>heloo</h2>}
  </>
);
export default MoviePresenter;
