import React, { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import MovieService from "../services/MovieService"

// const sort = (movieList, sortBy) => {
//     console.log('MovieList sorting by ', sortBy)
//     const sortedList = [...movieList];
//     sortedList.sort((a1, a2) => {
//         if (sortBy === 'Rating') {
//             return a2.range - a1.range;
//         }
//         return a1.title.localeCompare(a2.title);
//     })
//     return sortedList;
// }


function MovieList(props) {
    const [movies, setMovies] = useState([]);
    // MovieService.findMovies().then(list => {
    //     setMovies(list);
    // })
    const { sortBy, movieQuery } = props;

    useEffect(() => {
       
        console.log('Use effect ... for', sortBy, movieQuery);
        MovieService.findMovies({sortBy, movieQuery}).then(list => 
            setMovies(list)
        );

        // const filteresList = sort(MovieService.getMovies(), props.sortBy).filter(movie => {
        //         return !props.movieQuery || movie.title.toLowerCase().includes(props.movieQuery.toLowerCase());
        // });
        // setMovies(filteresList);
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