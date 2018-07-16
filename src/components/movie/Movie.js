import React, { Component } from "react";
import LoadingMovie from "./LoadingMovie";
import styled from "styled-components";
// import "./Movie.css"

class Movie extends Component {
  state = {
    isLoading: true,
    movie: {}
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=651925d45022d1ae658063b443c99784&language=en-US`;
    fetch(movieUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ movie: data, isLoading: false });
      })
      .catch(error => console.log("Error:", error));
  }

  render() {
    const {
      title,
      backdrop_path,
      release_date,
      genres,
      overview,
      vote_average,
      runtime
    } = this.state.movie;

    const releaseYear = release_date ? release_date.substring(0, 4) : null;
    const imgUrl = `http://image.tmdb.org/t/p/w1280/${backdrop_path}`;
    const backgroundStyle = {
      backgroundImage: `url(${imgUrl})`
    };

    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? (
          <LoadingMovie />
        ) : (
          <MoviePage>
            <MovieImage style={backgroundStyle} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MovieDetails>
                <MovieHeader>
                  {title}
                  <span>({releaseYear})</span>
                </MovieHeader>
                <Genres>
                  {genres.map((genre, index) => (
                    <div key={genre.id}>
                      <span>{genre.name}</span>
                      {index < genres.length - 1 && <Separator>|</Separator>}
                    </div>
                  ))}
                </Genres>
                <h5>
                  Rating:
                  <span>{vote_average}</span>
                </h5>
                <h5>
                  Runtime:
                  <span>{`${runtime} min`}</span>
                </h5>
                <h4>Overview</h4>
                <p>{overview}</p>
              </MovieDetails>
            </div>
          </MoviePage>
        )}
      </div>
    );
  }
}

export default Movie;

const MovieImage = styled.div`
  flex-basis: 100 %;
  height: 60vh;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

const MoviePage = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  h5 {
    color: inherit;
    font-weight: normal;
    line-height: 1rem;
  }

  h5 span {
    font-size: inherit;

    font-weight: normal;
    color: inherit;
    padding-left: 1rem;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    line-height: 1rem;
  }

  p {
    color: inherit;
    line-height: 1.5rem;
  }
`;

const MovieHeader = styled.h1`
  line-height: 2.25rem;
  font-size: 2em;
  span {
    font-size: inherit;
    font-weight: normal;
    padding-left: 1rem;
    color: white;
    line-height: 1rem;
  }
`;

const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  span {
    line-height: 1.5rem;
    font-weight: normal;
  }
`;

const Separator = styled.span`
  color: lightgray;
  padding: 0 10px;
`;

const MovieDetails = styled.div`
  justify-content: "center";
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 1rem 20px;
`;
