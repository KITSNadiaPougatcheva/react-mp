import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers/index"
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    getMoviesMiddleware,
    findMoviesMiddleware,
    filterMoviesMiddleware,
    sortMoviesMiddleware,
    addMovieMiddleware,
    deleteMovieMiddleware,
    updateMovieMiddleware
} from './middlewares'

const composeEnhancers = composeWithDevTools(applyMiddleware(
        getMoviesMiddleware, findMoviesMiddleware, filterMoviesMiddleware,
        sortMoviesMiddleware, addMovieMiddleware, deleteMovieMiddleware,
        updateMovieMiddleware
    ));

const preloadedState = {
    // movies: MovieService.getMovies()
  }

const configureStore = () => {
    return createStore(
        rootReducer,
        preloadedState,
        composeEnhancers,
    )
};

const store = configureStore();

const unsubscribe = store.subscribe(() =>
  console.log('Initial state: ', store.getState())
)
store.dispatch({ type: 'GET_MOVIES' })
unsubscribe()

export default store;

