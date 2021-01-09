import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, FIND_MOVIES, FILTER_MOVIES, SORT_MOVIES, GET_MOVIES, MOVIES_LOADED } from "../constants"
import MovieService from "../services/MovieService"

export const getMoviesMiddleware = storeAPI => next => action => {
    const { dispatch, getState } = storeAPI;
    if (action.type === GET_MOVIES) {
      console.log('Async call to API for GET_MOVIES action')
      MovieService.getMoviesAsync()
        .then(movies => {
            dispatch({ type: MOVIES_LOADED, movies })
        })
      return;
    }
    return next(action)
}

export const findMoviesMiddleware = storeAPI => next => action => {
    const { dispatch, getState } = storeAPI;
    const { genre, sortBy } = getState();
    if (action.type === FIND_MOVIES) {
      console.log('Async call to API for FIND_MOVIES action by query =', action.query)
      MovieService.findMoviesAsync({ query: action.query, genre, sortBy })
        .then(movies => {
            dispatch({ type: MOVIES_LOADED, movies, query: action.query, genre, sortBy })
        })
      return;
    }
    return next(action)
}

export const filterMoviesMiddleware = storeAPI => next => action => {
    const { dispatch, getState } = storeAPI;
    const { query, sortBy } = getState();
    if (action.type === FILTER_MOVIES) {
        console.log('Async call to API for FILTER_MOVIES action by gernre =', action.genre)
        MovieService.findMoviesAsync({ query, genre: action.genre, sortBy })
        .then(movies => {
            dispatch({ type: MOVIES_LOADED, movies, query, genre: action.genre, sortBy })
        })
        return;
    }
    return next(action)
  }

export const sortMoviesMiddleware = storeAPI => next => action => {
    const { dispatch, getState } = storeAPI;
    const { genre, query } = getState();
    if (action.type === SORT_MOVIES) {
      console.log('Async call to API for SORT_MOVIES action by sortBy =', action.sortBy)
      MovieService.findMoviesAsync({ query, genre, sortBy: action.sortBy })
        .then(movies => {
            dispatch({ type: MOVIES_LOADED, movies, query, genre, sortBy: action.sortBy })
        })
      return;
    }
    return next(action)
}

export const addMovieMiddleware = storeAPI => next => action => {
    const { dispatch } = storeAPI;
    if (action.type === ADD_MOVIE) {
        const { title, overview } = action
      console.log('Async call to API for ADD_MOVIE action, movie =', { title, overview })
      MovieService.addMovieAsync({ title, overview, poster_path: 'http://posterpath.com/123', runtime: 123, genres: [ 'Action' ] })
        .then(movie => {
            dispatch({ type: MOVIES_LOADED, movies: [movie], query: title, genre: undefined, sortBy: undefined })
        })
        .catch(err => console.error(err))
      return;
    }
    return next(action)
}

export const deleteMovieMiddleware = storeAPI => next => action => {
    const { dispatch, getState } = storeAPI;
    const { genre, query, sortBy } = getState();
    if (action.type === REMOVE_MOVIE) {
        const { id } = action
      console.log('Async call to API for REMOVE_MOVIE action, movie =', id)
      MovieService.deleteMovieAsync(id)
        .then(() => MovieService.findMoviesAsync({ genre, query, sortBy }))
        .then(movies => {
            dispatch({ type: MOVIES_LOADED, movies, genre, query, sortBy })
        })
        .catch(err => console.error(err))
      return;
    }
    return next(action)
}

export const updateMovieMiddleware = storeAPI => next => action => {
    const { dispatch, getState } = storeAPI;
    const { genre, query, sortBy } = getState();
    if (action.type === EDIT_MOVIE) {
      const { movie: movieDetails } = action
      console.log('Async call to API for EDIT_MOVIE action, movie =', movieDetails)
      MovieService.updateMovieAsync(movieDetails)
        .then(movie => {
            dispatch({ type: MOVIES_LOADED, movies: [movie], genre, query, sortBy })
        })
        .catch(err => console.error(err))
      return;
    }
    return next(action)
}