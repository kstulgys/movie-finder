import React from "react";
import MovieListItem from "./MovieListItem";
import styled from "styled-components";
import Button from "../navigation/Button";
import Wow from "../../Wow";

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

const Movies = ({ movies, page, onPageIncrease, onPageDecrease }) => {
  let sec = -0.1;
  const renderList = movies.map(movie => {
    sec += 0.1;
    return (
      <Wow anim="fadeInRight" delay={`${sec}s`} duration="1s" offset="0">
        <MovieListItem key={movie.id} movie={movie} />
      </Wow>
    );
  });

  return (
    <div>
      <Container>{renderList}</Container>
      <Wow anim="fadeInDown" duration="3s" delay="1s">
        {movies.length > 15 && (
          <Pagination>
            <Button onClick={onPageDecrease}>Previous</Button>
            <span>{`Page ${page}`}</span>
            <Button onClick={onPageIncrease}>Next</Button>
          </Pagination>
        )}
      </Wow>
    </div>
  );
};

export default Movies;
