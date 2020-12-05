import React from 'react';

import './style.css';
import MovieCard from './MovieCard';


const movies = [
    {
        title: 'Pulp Fiction',
        description: 'by Quentin Tarantino',
        img: './img/m1.png',
        id: '00001'
    },
    {
        title: 'Bohemian rapsody',
        // description: 'by Quentin Tarantino',
        img: './img/m2.png',
        id: '00002'
    },
    {
        title: 'Kill Bill',
        // description: 'by Quentin Tarantino',
        img: './img/m3.png',
        id: '00003'
    },
    {
        title: 'Avengers',
        //  description: 'by Quentin Tarantino',
        img: './img/m4.png',
        id: '00004'
    },
    {
        title: 'Inception',
        // description: 'by Quentin Tarantino',
        img: './img/m5.png',
        id: '00005'
    },
    {
        title: 'Reservoir dogs',
        // description: 'by Quentin Tarantino',
        img: './img/m6.png',
        id: '00006'
    }
]

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