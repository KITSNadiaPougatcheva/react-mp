import React, { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import MovieService from "../services/MovieService"

const sort = (movieList, sortBy) => {
    console.log('MovieList sorting by ', sortBy)
    const sortedList = [...movieList];
    sortedList.sort((a1, a2) => {
        if (sortBy === 'Rating') {
            return a2.range - a1.range;
        }
        return a1.title.localeCompare(a2.title);
    })
    return sortedList;
}

function MovieList(props) {
    const [movies, setMovies] = useState(MovieService.getMovies());

    useEffect(() => {
        console.log('Use effect...');
        const filteresList = sort(MovieService.getMovies(), props.sortBy).filter(movie => {
                return !props.movieQuery || movie.title.toLowerCase().includes(props.movieQuery.toLowerCase());
        });
        setMovies(filteresList);
    }, [props.sortBy, props.movieQuery]);
    console.log('Rendering... by sorting', props.sortBy)
    return (
        <>
            {movies.map((movie) => 
                (<MovieCard details={movie} key={movie.id}/>))}
        </>
    );
}

export default MovieList;