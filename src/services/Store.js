import { createStore } from 'redux'

const rootReducer = function() {

}

const initialState = {
    movies: [],
    user: ''
}
const store =  createStore(rootReducer, initialState)

const rootReducer = function(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_MOVIE': 
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        case 'DELETE_MOVIE':
            return {

            }
        default:
            return state;
    }
}