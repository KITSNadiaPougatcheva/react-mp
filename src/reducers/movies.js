import { ADD_MOVIE, GET_MOVIES } from "../constants"
import movies from "../data/movies"

const moviesReducer = (state = { movies }, action) => {
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