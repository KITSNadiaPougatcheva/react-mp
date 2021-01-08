import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, FIND_MOVIES, FILTER_MOVIES, 
    SORT_MOVIES, GET_MOVIES, MOVIES_LOADED } from "../constants"

export const moviesLoaded = () => ({
    type: MOVIES_LOADED,
    movies,
    query,
    sortBy,
    genre
})

export const getMovies = () => ({
    type: GET_MOVIES,
})


export const addMovie = ({ title, overview }) => ({
    type: ADD_MOVIE,
    title, 
    overview
})

export const removeMovie = id => ({
    type: REMOVE_MOVIE,
    id, 
})

export const editMovie = movie => ({
    type: EDIT_MOVIE,
    movie, 
})

export const findMovies = query => ({
    type: FIND_MOVIES,
    query,
})

export const filterMovies = genre => ({
    type: FILTER_MOVIES,
    genre
})

export const sortMovies = sortBy => ({
    type: SORT_MOVIES,
    sortBy
})

