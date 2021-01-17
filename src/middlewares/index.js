import { GET_MOVIES, MOVIES_LOADED } from "../constants"
import MovieService from "../services/MovieService"

export const getMoviesMiddleware = storeAPI => next => action => {
    const { dispatch } = storeAPI;
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