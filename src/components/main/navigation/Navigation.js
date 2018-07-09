import React from "react";
import styled from "styled-components";
import Selection from "./Selection";
import Slider from "./Slider";
import Button from "./Button";

const Container = styled.div`
  height: 200px;
  flex-basis: 20%;
  min-width: 300px;
  padding: 40px;
`;

class Navigation extends React.Component {
  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.props.setGenres(data.genres))
      .catch(error => console.log(error));
  }
  render() {
    const {
      genre,
      genres,
      onGenreChange,
      onChange,
      year,
      rating,
      runtime,
      onSearchButtonClick
    } = this.props;
    return (
      <Container>
        <Selection
          genre={genre}
          genres={genres}
          onGenreChange={onGenreChange}
        />
        <Slider data={year} onChange={onChange} />
        <Slider data={rating} onChange={onChange} />
        <Slider data={runtime} onChange={onChange} />
        <br />
        <br />

        <br />

        <Button onClick={onSearchButtonClick}>Search</Button>
      </Container>
    );
  }
}

export default Navigation;
