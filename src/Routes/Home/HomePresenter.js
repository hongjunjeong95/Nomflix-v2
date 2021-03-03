import styled from "styled-components";
import PropTypes from "prop-types";

import Loader from "Components/Loader";
import Section from "Components/Section";
import Poster from "Components/Poster";

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
          {now_playing && now_playing.length > 0 && (
            <Section title="Now Playing">
              {now_playing.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  backdrop_img={movie.backdrop_path}
                  title={movie.original_title}
                  overview={movie.overview}
                  poster_img={movie.poster_path}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {upcoming && upcoming.length > 0 && (
            <Section title="Upcoming">
              {upcoming.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  backdrop_img={movie.backdrop_path}
                  title={movie.original_title}
                  overview={movie.overview}
                  poster_img={movie.poster_path}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular">
              {popular.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  backdrop_img={movie.backdrop_path}
                  title={movie.original_title}
                  overview={movie.overview}
                  poster_img={movie.poster_path}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {top_rated && top_rated.length > 0 && (
            <Section title="Top Rated">
              {top_rated.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  backdrop_img={movie.backdrop_path}
                  title={movie.original_title}
                  overview={movie.overview}
                  poster_img={movie.poster_path}
                  rating={movie.vote_average}
                  year={movie.release_date.substring(0, 4)}
                />
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
