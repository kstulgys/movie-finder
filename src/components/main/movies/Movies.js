import React, { Fragment } from "react"
import MovieListItem from "./MovieListItem"
import styled from "styled-components"
import Button from "../navigation/Button"
import posed, { PoseGroup } from "react-pose"
import { lifecycle, withState, compose } from "recompose"

const MList = posed.div({
	open: { x: "0%", staggerChildren: 100 },
	closed: { x: "-100%" }
})

// flip: {
// 	x: "0%",
// 		opacity: 1,
// 			scale: 1,
// 				transition: {
// 		scale: {
// 			type: "spring",
// 				velocity: 10
// 		},
// 			default: {
// 			type: "spring"
// 		}
// 	}
// },

const MItem = posed.li({
	hoverable: true,
	init: { scale: 1 },
	hover: { scale: 1.1 },
	enter: {
		x: "0%",
		opacity: 1
	},
	exit: {
		x: "-10%",
		opacity: 0
	}
})

// enter: {
// 	opacity: 1,
// 	x: "0%",
// 	delay: ({ i }) => i * 50
// },
// exit: {
// 	x: "-100%",
// 	opacity: 0
// }
// })

const Container = styled.ul`
  display: flex;
  flex-basis: 70%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px 0px;
  margin: 0;
  min-height: 100vh;
`

const Pagination = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 40px 20px;
  /* border: 5px solid red; */
`

const Movies = ({ movies, page, onPageIncrease, onPageDecrease, on }) => {
	console.log("on is", movies)
	return (
		<ul
			style={{
				display: "flex",
				flexWrap: "wrap",
				justifyContent: "space-evenly",
				alignContent: "stretch",
				// flexBasis: "70%",
				// minHeight: "100vh",
				margin: 0
			}}>
			<PoseGroup>
				{movies.map((movie, i) => (
					<MItem key={movie.id} style={{ padding: "1vh" }}>
						<MovieListItem key={movie.id} movie={movie} />
					</MItem>
				))}
			</PoseGroup>
		</ul>
	)
}

// <MItem pose={on ? "open" : "closed"} i={i}>
const enhance = compose(
	withState("on", "toggle", false)
	// lifecycle({
	// 	componentDidUpdate(nextProps) {
	// 		if (nextProps.movies !== this.props.movies) {
	// 			this.props.toggle(n => false)
	// 			// console.log("before always false", this.props.on)
	// 			setTimeout(() => this.props.toggle(n => true), 200)
	// 		}
	// 	}
	// componentDidMount() {
	// 	setTimeout(() => this.props.toggle(n => !n), 200)
	// }
	// console.log("from item did mount", this.props.movies)

	// componentDidUpdate(nextProps) {
	// 	// setTimeout(() => this.props.toggle(n => !n), 200)
	// 	console.log("from item did update", nextProps.movies)
	// }
	// })
)
export default enhance(Movies)

// 	< PoseGroup
// pose = { on? "show" : "hidden"}
// style = {{
// 	display: "flex",
// 		flexWrap: "wrap",
// 			justifyContent: "space-evenly",
// 				minHeight: "100vh"
// }}>
// 	{movies.length > 15 && (
// 		<Pagination>
// 			<Button onClick={onPageDecrease}>Previous</Button>
// 			<span>{`Page ${page}`}</span>
// 			<Button onClick={onPageIncrease}>Next</Button>
// 		</Pagination>
// 	)}
// </Fragment>
