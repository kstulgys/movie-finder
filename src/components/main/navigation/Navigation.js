import React from "react";
import styled from "styled-components";
import Selection from "./Selection";
import Slider from "./Slider";
import Button from "./Button";

class Navigation extends React.Component {
  // async componentDidMount() {
  //   await fetch(this.props.url)
  //     .then(response => response.json())
  //     .then(data => this.props.setGenres(data.genres))
  //     .catch(error => console.log(error));
  // }
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
      <Container
        className="wow fadeInLeft"
        data-wow-duration="3s"
        data-wow-delay="1s"
      >
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

const Container = styled.div`
  height: auto;
  flex-basis: calc(30%-40px);
  min-width: 350px;
  padding: 40px;
  /* border: 5px solid red; */
`;
