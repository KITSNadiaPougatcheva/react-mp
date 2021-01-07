import { v1 } from "uuid"
import movies from "../data/movies";

const BASE_PATH = "http://localhost:4000";
const MOVIES_PATH = "/movies";
const SEARCH_PARAM = "search=";
const SORT_PARAM = "sortBy=";


const sort = (movieList, sortBy) => {
    console.log('MovieList sorting by ', sortBy)
    const sortedList = [...movieList];
    sortedList.sort((a1, a2) => {
        if (sortBy === 'vote_average') {
            return a2.vote_average - a1.vote_average;
        }
        if (sortBy === 'title') {
            return a1.title.localeCompare(a2.title);
        }
        return 0;
    })
    return sortedList;
}

const MovieService = {

    getMovies: () => movies,
    addMovie: movie => movies.push({ id: v1(), ...movie }),

    findMovies: ({ sortBy, query, genre }) => {
        console.log(`Filtering movies ... by sortBy = ${sortBy}, query = ${query}, genre = ${genre}`);
        let filteredList = movies;
        if (genre !== 'All') {
            filteredList = movies.filter(movie => {
                console.log('Title', movie.title, 'GENRES', movie.genres)
                if (genre && movie.genres && movie.genres.includes(genre)) {
                    return true;
                }
                if (query && movie.title.toLowerCase().includes(query.toLowerCase())) {
                    return true;
                }
                if (!query && !genre) {
                    return true;
                }
                return false;
            })
        }
        if (sortBy) {
            filteredList = sort(filteredList, sortBy);
        }
        return filteredList;
    },

    deleteMovie: id => {
        const idx = movies.findIndex(movie => movie.id === id);
        if (~idx) {
            movies.splice(idx, 1)
        }
    },
    updateMovie: newMovie => {
        const currentMovie = movies.find(movie => movie.id === newMovie.id)
        Object.assign(currentMovie, newMovie);
    }

}
export default MovieService;