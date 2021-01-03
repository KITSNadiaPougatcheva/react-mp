export default addMovie = (title, overview) => ({
    type: "ADD_MOVIE",
    title, 
    overview
})

export default getMovies = (movies) => ({
    type: "GET_MOVIES",
    movies, 
})