import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, FIND_MOVIES, FILTER_MOVIES, SORT_MOVIES, GET_MOVIES, MOVIES_LOADED } from "../constants"
import MovieService from "../services/MovieService"

const moviesReducer = (state = {}, action) => {
    const { sortBy, genre, query } = state;
    console.log('Reducer previous state :', state, 'ACTION :', action);
    switch (action.type) {
        case MOVIES_LOADED :
            return { 
                movies: action.movies, 
                genre: action.genre || genre, 
                sortBy: action.sortBy || sortBy, 
                query: action.query || query 
            };

        // case ADD_MOVIE :
        //     MovieService.addMovie({title: action.title, overview: action.overview})
        //     return {
        //         movies: [...MovieService.findMovies({ sortBy, query, genre })],
        //         sortBy, genre, query
        //     };
        // case REMOVE_MOVIE : 
        //     MovieService.deleteMovie(action.id);
        //     return {
        //         movies: [...MovieService.findMovies({ sortBy, query, genre })],
        //         sortBy, genre, query
        //     };
        // case EDIT_MOVIE : 
        //     MovieService.updateMovie(action.movie);
        //     return {
        //         movies: [...MovieService.findMovies({ sortBy, query, genre })],
        //         sortBy, genre, query
        //     };
        default: 
            return state;
    }
}

export default moviesReducer;