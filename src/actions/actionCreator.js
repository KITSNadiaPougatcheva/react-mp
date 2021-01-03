import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from "../constants"

export const addMovie = ({ title, overview }) => ({
    type: ADD_MOVIE,
    title, 
    overview
})

export const removeMovie = (id) => ({
    type: REMOVE_MOVIE,
    id, 
})

export const editMovie = (movie) => ({
    type: EDIT_MOVIE,
    movie, 
})