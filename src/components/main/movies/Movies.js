import React from "react";
import MovieListItem from "./MovieListItem";
import styled from "styled-components";
import Button from "../navigation/Button";

const Container = styled.ul`
  display: flex;
  flex-basis: 80%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px 0;
  margin: 0;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px 20px;
`;

const Movies = ({ movies, page, onPageIncrease, onPageDecrease }) => (
  <div>
    <Container>
      {movies.map(movie => <MovieListItem key={movie.id} movie={movie} />)}
    </Container>
    <Pagination>
      <Button onClick={onPageDecrease}>Previous</Button>
      <span>{`Page ${page}`}</span>
      <Button onClick={onPageIncrease}>Next</Button>
    </Pagination>
  </div>
);

export default Movies;
