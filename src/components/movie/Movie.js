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
          </MoviePage>
        )}
      </div>
    );
  }
}

/* Movie.css */

// .movie - page {
//   display: flex;
//   flex - direction: column;
// }

// .movie - page h5 {
//   color: #888;
//   font - weight: normal;
//   line - height: 1.25rem;
// }

// .movie - page h5 span {
//   font - size: inherit;
//   font - weight: normal;
//   color: black;
//   padding - left: 1rem;
// }

// .movie - page h4 {
//   margin: 0;
//   font - size: 1.25rem;
//   line - height: 2;
// }

// .movie - page p {
//   color: #888;
//   line - height: 1.5;
// }

// .movie-page .movie-image {
//   flex - basis: 100 %;
//   height: 575px;
//   background - size: cover;
//   background - position: center center;
// }

// .movie - page.movie - details {
//   display: flex;
//   flex - direction: column;
//   max - width: 800px;
//   margin: 20px auto 60px auto;
// }

// .movie - page.movie - details h1 {
//   line - height: 1.5em;
// }

// .movie - page.movie - details h1 span {
//   font - size: inherit;
//   font - weight: normal;
//   padding - left: 1rem;
//   color: #bbb;
//   line - height: inherit;
// }

// .movie - page.genres {
//   display: flex;
//   margin - bottom: 1rem;
// }

// .movie - page.genres span {
//   font - weight: normal;
// }

// .movie - page.separator {
//   color: lightgray;
//   padding: 0 10px;
// }

export default Movie;

const MoviePage = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    color: #888;
    font-weight: normal;
    line-height: 1.5rem;
  }

  h5 span {
    font-size: inherit;
    font-weight: normal;
    color: black;
    padding-left: 1rem;
  }

  h4 {
    margin: 0;
    font-size: 1.5rem;
    line-height: 3em;
  }

  p {
    color: #888;
    line-height: 1.5;
  }
`;

const MovieImage = styled.div`
  flex-basis: 100 %;
  height: 575px;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 4em auto 100px auto;
`;

const MovieHeader = styled.h1`
  line-height: 1.5em;
  font-size: 2em;
  span {
    font-size: inherit;
    font-weight: normal;
    padding-left: 1rem;
    color: #bbb;
    line-height: inherit;
  }
`;

const Genres = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  span {
    font-weight: normal;
  }
`;

const Separator = styled.span`
  color: lightgray;
  padding: 0 10px;
`;
