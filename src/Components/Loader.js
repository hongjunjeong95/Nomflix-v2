import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  font-size: 28px;
`;

export default () => (
  <Container>
    <span role="img" aria-label="Loading">
      ⏰
    </span>
  </Container>
);
