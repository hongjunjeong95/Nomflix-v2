import styled from "styled-components";
import PropTypes from "prop-types";

import Loader from "Components/Loader";
import Section from "Components/Section";
import Poster from "Components/Poster";

const Container = styled.section`
  padding: 10px;
`;

const TVPresenter = ({ airing_today, popular, top_rated, error, loading }) => {
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Container>
          {airing_today && airing_today.length > 0 && (
            <Section title="Airing Today">
              {airing_today.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  backdrop_img={tv.backdrop_path}
                  title={tv.original_name}
                  overview={tv.overview}
                  poster_img={tv.poster_path}
                  rating={tv.vote_average}
                  year={tv.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {popular && popular.length > 0 && (
            <Section title="Popular">
              {popular.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  backdrop_img={tv.backdrop_path}
                  title={tv.original_name}
                  overview={tv.overview}
                  poster_img={tv.poster_path}
                  rating={tv.vote_average}
                  year={tv.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
          {top_rated && top_rated.length > 0 && (
            <Section title="Top Rated">
              {top_rated.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  backdrop_img={tv.backdrop_path}
                  title={tv.original_name}
                  overview={tv.overview}
                  poster_img={tv.poster_path}
                  rating={tv.vote_average}
                  year={tv.first_air_date.substring(0, 4)}
                />
              ))}
            </Section>
          )}
        </Container>
      )}
    </>
  );
};

TVPresenter.propTypes = {
  airing_today: PropTypes.array,
  popular: PropTypes.array,
  top_rated: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TVPresenter;
