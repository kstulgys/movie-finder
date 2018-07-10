import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Wow from "../../Wow";

const Thumbnail = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  cursor: pointer;
  text-decoration: none;
`;

// .thumbnail {
// display: flex;
// flex - direction: column;
// flex - grow: 1;
// cursor: pointer;
// text - decoration: none;
// }

const MovieListItem = ({
  movie: { id, title, poster_path, release_date, vote_average }
}) => {
  const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`;
  return (
    <ItemUl>
      <Thumbnail to={`/movies/${id}`} className="thumbnail">
        <ListItem>
          <Img src={imgUrl} alt={title} />
          <Description>
            <H2>{title}</H2>
            <Details>
              <Year>
                <Title>Year</Title>
                <Span>{release_date}</Span>
              </Year>
              <Rating>
                <Title>Rating</Title>
                <Span>{vote_average}</Span>
              </Rating>
            </Details>
          </Description>
        </ListItem>
      </Thumbnail>
    </ItemUl>
  );
};

export default MovieListItem;

// ul {
//   display: flex;
//   padding: 20px;
// }

const ItemUl = styled.ul`
  display: flex;
  padding: 20px;
`;

// .movie - item {
//   flex - basis: 22 %;
//   display: flex;
//   flex - direction: column;
//   list - style: none;
//   box - sizing: border - box;
//   margin: 1.5 %;
//   border: 1px solid #eee;
//   box - shadow: 0 10px 28px - 7px rgba(0, 0, 0, 0.1);
// }

const ListItem = styled.li`
  display: flex;
  flex-basis: 22%;
  flex-direction: column;
  list-style: none;
  box-sizing: border-box;
  margin: 1.5%;
  border: 1px solid #eee;
  box-shadow: 0 10px 28px -7px rgba(0, 0, 0, 0.1);
`;

// .movie - item img {
//   width: 100 %;
// }

const Img = styled.img`
  width: 100 %;
`;

// .movie - description {
//   display: flex;
//   flex - direction: column;
//   flex - grow: 1;
//   justify - content: space - between;
//   padding: 10px;
// }

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding: 10px;
`;

// .movie - description h2 {
//   color: #555;
//   font - weight: bold;
//   margin - bottom: 20px;
// }

const H2 = styled.h2`
  color: #555;
  font: bold;
  margin: 20px;
`;

// .movie - details {
//   display: flex;
//   justify - content: space - between;
// }

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

// .movie - details span {
//   color: #555;
//   font - size: 0.8rem;
//   font - weight: bold;
// }

const Span = styled.span`
  color: #555;
  font: 0.8rem;
  font-weight: bold;
`;

// .movie - year, .movie - rating {
//   display: flex;
//   flex - direction: column;
// }

const Year = styled.div`
  display: flex;
  flex-direction: column;
`;
// .movie - rating {
//   align - items: flex - end;
// }

const Rating = Year.extend`
  align-items: flex-end;
`;

// .movie - year.title, .movie - rating.title {
//   color: #aaa;
//   margin - bottom: 5px;
//   font - size: 0.65rem;
//   font - weight: normal;
// }

const Title = styled.span`
  color: #aaa;
  margin-bottom: 5px;
  font-size: 0.75rem;
  font-weight: normal;
`;
