import { combineReducers } from "redux"
import moviesReducer from "./movies";

const rootReducer = combineReducers({ 
    movies: moviesReducer 
}
);



// const rootReducer = function(state = initialState, action) {
//     switch (action.type) {
//         case 'UPDATE_MOVIE': 
//             return {
//                 ...state,
//                 movies: [...state.movies, action.payload]
//             }
//         case 'DELETE_MOVIE':
//             return {

//             }
//         default:
//             return state;
//     }
// }

export default rootReducer;