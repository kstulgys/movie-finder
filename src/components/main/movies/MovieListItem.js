import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const MovieListItem = ({
	movie: { id, title, poster_path, release_date, vote_average, key }
}) => {
	const imgUrl = `https://image.tmdb.org/t/p/w342/${poster_path}`
	return (
		<ItemUl>
			<Thumbnail to={`/movies/${id}`}>
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
			</Thumbnail>
		</ItemUl>
	)
}

export default MovieListItem

const ItemUl = styled.div`
  // flex-basis: 30%;
  display: flex;
  flex-direction: column;
  background: white;
  margin: 4% 0;
  align-self: stretch;

  box-shadow: 0 10px 28px -7px rgba(0, 0, 0, 0.1);
  /* border: 5px solid yellow; */

  /* Small devices (portrait tablets and large phones, 600px and up) */
  /* @media only screen and (min-width: 600px) {
    flex-basis: 95%;
    margin: 3% 0;
  } */

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    flex-basis: 45%;
    margin: 2.5% 0px;
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    flex-basis: 31%;
    margin: 2% 0px;
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    flex-basis: 22%;
    margin: 1.5% 0px;
  }
`

const Thumbnail = styled(Link)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  cursor: pointer;
  text-decoration: none;
  /* border: 5px solid green; */
`

const Img = styled.img`
  width: 100%;
`

const Description = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  // height: auto;
`

const H2 = styled.h2`
  color: #555;
  font: bold;
  margin: 20px;
`

const Details = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
`

const Span = styled.span`
  color: #555;
  font: 0.8rem;
  font-weight: bold;
`

const Year = styled.div`
  display: flex;
  flex-direction: column;
`

const Rating = Year.extend`
  align-items: flex-end;
`

const Title = styled.span`
  color: #aaa;
  margin-bottom: 5px;
  font-size: 0.75rem;
  font-weight: normal;
`
