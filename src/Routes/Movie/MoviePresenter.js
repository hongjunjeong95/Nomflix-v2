import Loader from "Components/Loader";
import Helmet from "react-helmet";

const MoviePresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? <Loader /> : <h2>heloo</h2>}
  </>
);
export default MoviePresenter;
