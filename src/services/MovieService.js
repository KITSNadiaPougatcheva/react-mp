import movies from "../data/movies";

const MovieService = {
    getMovies: () => movies,
    addMovie: movie => movies.push(movie)
}
export default MovieService;