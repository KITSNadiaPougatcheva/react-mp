import { SORT_MOVIES_SELECTED, MOVIES_REFRESHED, QUERY_SELECTED, ERROR, GENRE_SELECTED } from "../constants"

const moviesReducer = (state = {}, action) => {
    console.log('Reducer previous state :', state, 'ACTION :', action);
    switch (action.type) {
        case GENRE_SELECTED: {
            return {
                ...state, genre: action.payload.genre
            }
        }
        case ERROR: {
            return {
                ...state, error: action.error
            }
        }
        case QUERY_SELECTED: {
            return {
                ...state, query: action.payload.query
            }
        }
        case SORT_MOVIES_SELECTED: {
            return {
                ...state, sortBy: action.payload.sortBy
            }
        }
        case MOVIES_REFRESHED: {
            return {
                ...state, movies: action.payload.movies
            }
        }
        default: 
            return state;
    }
}

export default moviesReducer;