import React from 'react';

import MovieCard from './MovieCard';

import {default as movies} from "./movies.json";
class MovieList extends React.Component {
    render() {
        return (
            <>
                {movies.map((movie, idx) => (<MovieCard title={movie.title} description={movie.description} img={movie.img} key={movie.id}/>))}
            </>
        );
    }
}

export default MovieList;