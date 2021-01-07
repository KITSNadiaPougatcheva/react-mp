import { v1 } from "uuid"
import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, FIND_MOVIES, FILTER_MOVIES, SORT_MOVIES } from "../constants"
import movies from "../data/movies"
import MovieService from "../services/MovieService"

const moviesReducer = (state = {}, action) => {
    const { movies, sortBy, genre, query } = state;
    state = {
        movies: movies || MovieService.getMovies(),
        sortBy, genre, query
    }
    console.log('STATE :', state);
    switch (action.type) {
        case ADD_MOVIE :
            MovieService.addMovie({title: action.title, overview: action.overview})
            return {
                movies: [...MovieService.findMovies({ sortBy, query, genre })],
                sortBy, genre, query
        };
        case REMOVE_MOVIE : 
            MovieService.deleteMovie(action.id);
            return {
                movies: [...MovieService.findMovies({ sortBy, query, genre })],
                sortBy, genre, query
            };
        case EDIT_MOVIE : 
            MovieService.updateMovie(action.movie);
            return {
                movies: [...MovieService.findMovies({ sortBy, query, genre })],
                sortBy, genre, query
            };
        case FIND_MOVIES :
            return {
                movies: [...MovieService.findMovies({ sortBy, query: action.query, genre: undefined })],
                sortBy, genre, query: action.query
            };
        case FILTER_MOVIES :
            return {
                movies: [...MovieService.findMovies({ sortBy, query: undefined, genre: action.genre })],
                sortBy, genre: action.genre, query
            };
        case SORT_MOVIES :
            return {
                movies: [...MovieService.findMovies({ sortBy: action.sortBy, query, genre })],
                sortBy: action.sortBy, genre, query
            };
        default: 
            return state;
    }
}

export default moviesReducer;