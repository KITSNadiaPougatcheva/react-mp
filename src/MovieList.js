import React from 'react';

import MovieCard from './MovieCard';

import {default as movies} from "./movies";
class MovieList extends React.Component {
    state = {
        movies
    }

    componentDidMount() {
        this.setState({ movies })
    }

    sort = (movieList, sortBy) => {
        movieList.sort((a1, a2) => {
            if (sortBy === 'Rating') {
                return a2.range - a1.range;
            }
            return a1.title.localeCompare(a2.title);
        })
        return movieList;
    }

    render() {
        return (
            <>
                {this.sort(this.state.movies, this.props.sortBy).map((movie) => 
                    (<MovieCard title={movie.title} description={movie.description} img={movie.img} key={movie.id}/>))}
            </>
        );
    }
}

export default MovieList;