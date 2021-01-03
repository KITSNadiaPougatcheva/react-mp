import { v1 } from "uuid"
import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from "../constants"
import movies from "../data/movies"
import MovieService from "../services/MovieService"

const moviesReducer = (state = [ ...MovieService.getMovies() ], action) => {
    switch (action.type) {
        case ADD_MOVIE :
            return [
                ...state, 
               {
                    id: v1(),
                    title: action.title,
                    overview: action.overview
                },
            ];
        case REMOVE_MOVIE : 
            return state.filter(movie => movie.id !== action.id);
        case EDIT_MOVIE : 
            return state.map(movie => {
                if (movie.id !== action.movie.id) {
                    return movie;
                }
                return { ...action.movie };
            });
        default: return state;
    }
}

export default moviesReducer;