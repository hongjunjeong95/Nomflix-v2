import styled from "styled-components";
import PropTypes from "prop-types";

import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.section`
  padding: 10px;
`;

const HomePresenter = ({
  popular,
  top_rated,
  now_playing,
  upcoming,
  error,
  loading,
}) => {
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Container>
          {popular && popular.length > 0 && (
            <Section title="Popular">
              {popular.map((movie) => (
                <div>{movie.original_title}</div>
              ))}
            </Section>
          )}
          {top_rated && top_rated.length > 0 && (
            <Section title="Top Rated">
              {top_rated.map((movie) => (
                <div>{movie.original_title}</div>
              ))}
            </Section>
          )}
          {now_playing && now_playing.length > 0 && (
            <Section title="Now Playing">
              {now_playing.map((movie) => (
                <div>{movie.original_title}</div>
              ))}
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming">
              {upcoming.map((movie) => (
                <div>{movie.original_title}</div>
              ))}
            </Section>
          )}
        </Container>
      )}
    </>
  );
};

HomePresenter.propTypes = {
  popular: PropTypes.array,
  top_rated: PropTypes.array,
  now_playing: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
