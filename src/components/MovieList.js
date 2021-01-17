import React from 'react';
import { connect } from "react-redux";

import MovieCard from './MovieCard';

function MovieList(props) {
    const { movies } = props;
    console.log('Rendering... ', 'movies = ', movies)
    return (
        <>
            {movies && movies.map((movie) => 
                (<MovieCard details={movie} key={movie.id}/>))}
        </>
    );
}

export default connect(({ movies }) => ({
    movies,
}))(MovieList);
