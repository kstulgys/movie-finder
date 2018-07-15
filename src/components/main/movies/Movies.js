import React from "react";
import MovieListItem from "./MovieListItem";
import styled from "styled-components";
import Button from "../navigation/Button";
import Wow from "../../Wow";

const Container = styled.ul`
  display: flex;
  flex-basis: 70%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px 0px;
  margin: 0;
  /* border: 5px solid red; */
  min-height: 100vh;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 20px;
  /* border: 5px solid red; */
`;

const Movies = ({ movies, page, onPageIncrease, onPageDecrease }) => {
  let sec = 0.5;
  const renderList = movies.map(movie => {
    sec += 0.1;
    return (
      // <Wow anim="fadeInRight" delay={`${sec}s`} duration="1s" offset="0">
      <MovieListItem delay={sec} key={movie.id} movie={movie} />
    );
  });

  return (
    <div>
      <Container>{renderList}</Container>
      <Wow anim="fadeInUp" duration="2s" delay="0s">
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
