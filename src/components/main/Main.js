import React from "react"
import Movies from "./movies/Movies"
import Navigation from "./navigation/Navigation"
import styled from "styled-components"

var maxYear = new Date().getFullYear() + 1
class Main extends React.Component {
	state = {
		movies: [],
		total_pages: 1,
		page: 1,
		genresUrl: `https://api.themoviedb.org/3/genre/movie/list?api_key=${
			process.env.REACT_APP_TMDB_API_KEY
		}&language=en-US`,
		moviesUrl: `https://api.themoviedb.org/3/discover/movie?api_key=${
			process.env.REACT_APP_TMDB_API_KEY
		}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
		genre: "Action",
		genres: [],
		year: {
			label: "year",
			min: 1990,
			max: maxYear,
			step: 1,
			value: { min: 2000, max: 2018 }
		},
		rating: {
			label: "rating",
			min: 0,
			max: 10,
			step: 1,
			value: { min: 8, max: 10 }
		},
		runtime: {
			label: "runtime",
			min: 0,
			max: 300,
			step: 15,
			value: { min: 60, max: 120 }
		}
	}

	async componentDidMount() {
		await this.setGenres()
		await this.fetchMovies(this.state.moviesUrl)

		console.log(this.state)
	}

	// componentDidMount() {
	//   const savedState = this.getStateFromLocalStorage()
	//   if (!savedState) {
	//     this.setGenres()
	//     this.fetchMovies(this.state.moviesUrl)
	//   } else {
	//     this.setState({ ...savedState })
	//     this.generateUrl(savedState)
	//   }
	//   console.log(this.state)
	// }

	// componentDidUpdate(nextProps, nextState) {
	// 	if (this.state.moviesUrl !== nextState.moviesUrl) {
	// 		this.generateUrl(nextState)
	// 		this.fetchMovies(nextState.moviesUrl)
	// 	}
	// 	// if (this.state.page !== nextState.page) {
	// 	// 	this.generateUrl(nextState)
	// 	// }
	// 	// this.saveStateToLocalStorage()
	// }

	onGenreChange = async event => {
		await this.setState({ genre: event.target.value })
		await this.generateUrl(this.state)
		await this.fetchMovies(this.state.moviesUrl)
	}

	setGenres = async () => {
		const genresFromUrl = await fetch(this.state.genresUrl).then(response =>
			response.json()
		)
		// console.log(genres)
		// .catch(error => console.log(error))
		this.setState({ genres: genresFromUrl.genres, movies: [] })
	}

	onChange = data => {
		this.setState({
			[data.type]: {
				...this.state[data.type],
				value: data.value
			}
		})
	}

	generateUrl = () => {
		const { genres, year, rating, runtime, page } = this.state
		// console.log(genres);
		const selectedGenre = this.state.genres.filter(
			g => g.name === this.state.genre
		)[0]
		console.log("selected genre", selectedGenre)
		const genreId = selectedGenre.id

		const moviesUrl =
			`https://api.themoviedb.org/3/discover/movie?` +
			`api_key=${process.env.REACT_APP_TMDB_API_KEY}&` +
			`language=en-US&sort_by=popularity.desc&` +
			`with_genres=${genreId}&` +
			`primary_release_date.gte=${year.value.min}-01-01&` +
			`primary_release_date.lte=${year.value.max}-12-31&` +
			`vote_average.gte=${rating.value.min}&` +
			`vote_average.lte=${rating.value.max}&` +
			`with_runtime.gte=${runtime.value.min}&` +
			`with_runtime.lte=${runtime.value.max}&`
		// `page=${page}`
		console.log(moviesUrl)
		this.setState({ moviesUrl })
	}

	onSearchButtonClick = () => {
		// this.setState({ movies: [], page: 1 })
		this.generateUrl(this.state)
	}

	// saveStateToLocalStorage = () => {
	// 	localStorage.setItem("removies", JSON.stringify(this.state))
	// }

	// getStateFromLocalStorage = () => {
	// 	return JSON.parse(localStorage.getItem("removies"))
	// }

	fetchMovies = async url => {
		const data = await fetch(url).then(response => response.json())
		const movies = data.results.map(result => {
			const {
				vote_count,
				id,
				genre_ids,
				poster_path,
				title,
				vote_average,
				release_date
			} = result
			return {
				vote_count,
				id,
				genre_ids,
				poster_path,
				title,
				vote_average,
				release_date
			}
		})
		this.setState({ movies, total_pages: data.total_pages })
		// .catch(error => console.log(error))
		// total_pages: data.total_pages
	}

	storeMovies = async data => {
		const movies = await data.results.map(result => {
			const {
				vote_count,
				id,
				genre_ids,
				poster_path,
				title,
				vote_average,
				release_date
			} = result
			return {
				vote_count,
				id,
				genre_ids,
				poster_path,
				title,
				vote_average,
				release_date
			}
		})
		this.setState({ movies, total_pages: data.total_pages })
	}

	onPageIncrease = () => {
		const { page, total_pages } = this.state
		const nextPage = page + 1
		if (nextPage <= total_pages) {
			this.setState({ page: nextPage })
		}
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth"
		})
	}

	onPageDecrease = () => {
		const nextPage = this.state.page - 1
		if (nextPage > 0) {
			this.setState({ page: nextPage })
		}
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth"
		})
	}
	render() {
		return (
			<Container>
				<Navigation
					onChange={this.onChange}
					onGenreChange={this.onGenreChange}
					setGenres={this.setGenres}
					onSearchButtonClick={this.onSearchButtonClick}
					{...this.state}
				/>
				<Movies
					movies={this.state.movies}
					page={this.state.page}
					onPageIncrease={this.onPageIncrease}
					onPageDecrease={this.onPageDecrease}
				/>
			</Container>
		)
	}
}

export default Main

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
