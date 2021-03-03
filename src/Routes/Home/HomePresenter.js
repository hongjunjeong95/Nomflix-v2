import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.section``;

export default ({
  popular,
  top_rated,
  now_playing,
  upcoming,
  error,
  loading,
}) => {
  return <>{loading ? <Loader></Loader> : <div>Movies</div>}</>;
};
