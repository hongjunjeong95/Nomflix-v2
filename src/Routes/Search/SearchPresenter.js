import styled from "styled-components";
import PropTypes from "prop-types";

import Loader from "Components/Loader";
import Section from "Components/Section";
import Poster from "Components/Poster";

const Container = styled.section`
  padding: 10px;
`;

const Form = styled.form`
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  font-size: 28px;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  handleSubmit,
  updateTerm,
  error,
  loading,
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        onChange={updateTerm}
        value={searchTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Now Playing">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                backdrop_img={movie.backdrop_path}
                title={movie.original_title}
                overview={movie.overview}
                poster_img={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date}
              />
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="Upcoming">
            {tvResults.map((tv) => (
              <Poster
                key={tv.id}
                id={tv.id}
                backdrop_img={tv.backdrop_path}
                title={tv.original_name}
                overview={tv.overview}
                poster_img={tv.poster_path}
                rating={tv.vote_average}
                year={tv.first_air_date}
              />
            ))}
          </Section>
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
