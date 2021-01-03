import React, { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import MovieService from "../services/MovieService"

function MovieList(props) {
    const [movies, setMovies] = useState([]);
    const { sortBy, movieQuery } = props;

    useEffect(() => {
       
        console.log('Use effect ... for', sortBy, movieQuery);
        // MovieService.findMovies({sortBy, movieQuery}).then(list => 
        //     setMovies(list)
        // );
    }, [sortBy, movieQuery]);

    console.log('Rendering... by sorting', props.sortBy, 'movies length = ', movies.length)
    return (
        <>
            {movies && movies.map((movie) => 
                (<MovieCard details={movie} key={movie.id}/>))}
        </>
    );
}

export default MovieList;