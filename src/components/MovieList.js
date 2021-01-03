import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import MovieCard from './MovieCard';
import MovieService from "../services/MovieService"

function MovieList(props) {
    // const [movies, setMovies] = useState([]);
    const { sortBy, movieQuery, movies } = props;

    // useEffect(() => {
       
    //     console.log('Use effect ... for', sortBy, movieQuery);
    //     const list = MovieService.findMovies({sortBy, movieQuery});
    //     setMovies([...list]);
    // }, [sortBy, movieQuery]);

    console.log('Rendering... by sorting', props.sortBy, 'movies.length = ', movies.length)
    return (
        <>
            {movies && movies.map((movie) => 
                (<MovieCard details={movie} key={movie.id}/>))}
        </>
    );
}

export default connect(state => ({
    movies: state.movies,
}))(MovieList);
// MovieList;