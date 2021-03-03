import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section``;

const SLink = styled(Link)``;

const Image = styled.img.attrs((props) => ({
  src: props.bgUrl,
}))`
  width: 100%;
  transition: 0.1s opacity linear;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  opacity: 0;
  transition: 0.1s opacity linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

export default ({
  id,
  poster_img,
  title,
  year,
  rating,
  backdrop_img,
  overview,
}) => (
  <Container>
    <SLink to={`movie/${id}`}>
      <ImageContainer>
        <Image
          bgUrl={
            poster_img
              ? `https://image.tmdb.org/t/p/w300${poster_img}`
              : require("../assets/noPosterSmall.png")
          }
        ></Image>
        <Rating>
          <span role="img" aria-label="rating">
            ⭐️
          </span>
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </SLink>
  </Container>
);
