import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
// .selection {
//   display: flex;
//   flex - direction: column;
//   margin - bottom: 60px;
// }

const Label = styled.label`
  margin: 0 0 10px 4px;
  color: #555;
`;

// .selection label {
//   margin - bottom: 10px;
//   color: #555;
// }

const Select = styled.select`
  max-width: 150px;
`;

// .selection select {
//   max - width: 150px;
// }

const Selection = ({ genres, genre, onGenreChange }) => (
  <Container>
    <Label>Genre</Label>
    <Select value={genre} onChange={onGenreChange}>
      {genres.map(genre => <option value={genre.name}>{genre.name}</option>)}
    </Select>
  </Container>
);

export default Selection;
