import { v1 } from "uuid"
import movies from "../data/movies";

const BASE_PATH = "http://localhost:4000";
const MOVIES_PATH = "/movies";
const SEARCH_PARAM = "search=";
const SORT_PARAM = "sortBy=";

const MovieService = {

    getMovies: () => movies,
    addMovie: movie => movies.push({ id: v1(), ...movie }),

    getMovies: () => movies,
    findMovies: ({ sortBy, movieQuery }) => {
        console.log('Finding movies ... by ', sortBy, movieQuery);
        return movies;
    },
    deleteMovie: id => {
        const idx = movies.findIndex(movie => movie.id === id);
        if (~idx) {
            movies.splice(idx, 1)
        }
    }

}
export default MovieService;