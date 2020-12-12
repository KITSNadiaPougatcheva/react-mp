import React from 'react';

import MovieCard from './MovieCard';

import {default as movies} from "./movies";
class MovieList extends React.Component {
    state = {
        movies
    }

    componentDidMount() {
        const that = this
        const showModal = (event) => {
            event.preventDefault();
            console.log('Show "Edit movie" form')
            that.setState({activeState: 'wrapper edit-movie active'});
        }

        document.querySelector(".menuSortByName").addEventListener("click", event => {
            event.preventDefault();
            console.log('Sort by name');
            movies.sort((a1, a2) => {
                return a1.title.localeCompare(a2.title);
            })
            that.setState({ movies });
        });

        const elements = document.getElementsByClassName("movie--edit");
        for(const elem of elements) {
            elem.addEventListener("click", showModal);
        }
    }

    render() {
        return (
            <>
                {this.state.movies.map((movie, idx) => (<MovieCard title={movie.title} description={movie.description} img={movie.img} key={movie.id}/>))}
            </>
        );
    }
}

export default MovieList;