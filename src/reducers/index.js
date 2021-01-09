import { MOVIES_LOADED } from "../constants"

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

        default: 
            return state;
    }
}

export default moviesReducer;