import { ADD_MOVIE, GET_MOVIES } from "../constants"
import movies from "../data/movies"
import MovieService from "../services/MovieService"

const moviesReducer = (state = { movies: MovieService.getMovies() }, action) => {
    switch (action.type) {
        case ADD_MOVIE :
            return {
                ...state, 
                addMovie: {
                    title: action.title,
                    overview: action.overview
                },
            };
        case GET_MOVIES : 
            return {
                ...state, 
                movies: [...action.movies]
            };
        default: return state;
    }
}

export default moviesReducer;