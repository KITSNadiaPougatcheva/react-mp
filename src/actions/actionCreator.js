import { MOVIES_LOADED, SORT_MOVIES_SELECTED, MOVIES_REFRESHED, 
    ERROR, QUERY_SELECTED, GENRE_SELECTED } from "../constants"

import MovieService from "../services/MovieService"


export const moviesLoaded = () => ({
    type: MOVIES_LOADED,
    movies,
    query,
    sortBy,
    genre
})

export const addMovieAsync = ({ payload: { movie } }) => {
    return dispatch => {
      MovieService.addMovieAsync({ poster_path: 'http://posterpath.com/123', runtime: 123, genres: [ 'Action' ], ...movie })
        .then(movie => dispatch(moviesRefreshed([ movie ])))
        .catch(setError)
    };
};

export const deleteMovieAsync = ({ payload: { id } }) => {

    return (dispatch, getState) => {
      const { genre, query, sortBy } = getState();

      MovieService.deleteMovieAsync(id)
        .then(() => MovieService.findMoviesAsync({ sortBy, genre, query }))
        .then(movies => dispatch(moviesRefreshed(movies)))
        .catch(setError)
    };
};

export const editMovieAsync = ({ payload: { movie } }) => {

    return (dispatch, getState) => {
      const { genre, query, sortBy } = getState();

      MovieService.updateMovieAsync(movie)
        .then(() => MovieService.findMoviesAsync({ sortBy, genre, query }))
        .then(movies => dispatch(moviesRefreshed(movies)))
        .catch(setError)
    };
};

export const moviesRefreshed = movies => ({
    type: MOVIES_REFRESHED,
    payload: { movies }
})

export const sortMoviesSelected = sortBy => ({
    type: SORT_MOVIES_SELECTED,
    payload: { sortBy }
})

export const findMoviesSelected = query => ({
    type: QUERY_SELECTED,
    payload: { query }
})

export const filterMoviesSelected = genre => ({
    type: GENRE_SELECTED,
    payload: { genre }
})

export const setError = error => ({
    type:ERROR,
    error
})

export const sortMoviesAsync = ({ payload: { sortBy } }) => {
    return (dispatch, getState) => {
      dispatch(sortMoviesSelected(sortBy));
      const { genre, query } = getState();

      MovieService.findMoviesAsync({ sortBy, genre, query })
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError)
    };
};

export const findMoviesAsync = ({ payload: { query } }) => {
    return (dispatch, getState) => {
      dispatch(findMoviesSelected(query));
      const { genre, sortBy } = getState();

      MovieService.findMoviesAsync({ sortBy, genre, query })
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError)
    };
};

export const filterMoviesAsync = ({ payload: { genre } }) => {
    return (dispatch, getState) => {
      dispatch(filterMoviesSelected(genre));
      const { query, sortBy } = getState();

      MovieService.findMoviesAsync({ sortBy, genre, query })
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError)
    };
};

export const getAllMoviesAsync = () => {
    return dispatch => {
      MovieService.findMoviesAsync({})
      .then(movies => dispatch(moviesRefreshed(movies)))
      .catch(setError)
    };
};
