import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";

const Container = styled.section`
  padding: 10px;
`;

export default ({
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
