import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  // margin: 0 0 5px 0;
`;
// .selection {
//   display: flex;
//   flex - direction: column;
//   margin - bottom: 60px;
// }

const Label = styled.label`
  margin: 0 0 10px 0;
  color: white;
  font-size: 1.25rem;
`;

// .selection label {
//   margin - bottom: 10px;
//   color: #555;
// }

const Select = styled.select`
  max-width: 150px;
  flex: 1;
`;

// .selection select {
//   max - width: 150px;
// }

const Selection = ({ genres, genre, onGenreChange }) => (
  <Container
    className="wow bounceInLeft"
    data-wow-duration="1s"
    data-wow-delay="1s"
  >
    <Label>Genre</Label>
    <Select value={genre} onChange={onGenreChange}>
      {genres.map(genre => <option value={genre.name}>{genre.name}</option>)}
    </Select>
  </Container>
);

export default Selection;
