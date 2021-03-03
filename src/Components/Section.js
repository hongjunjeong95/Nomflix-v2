import styled from "styled-components";

const Container = styled.section`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-gap: 25px;
`;

export default ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);
