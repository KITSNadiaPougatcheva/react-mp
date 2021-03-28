import React from 'react';

import ErrorBoundaries from './ErrorBoundaries';
import MovieList from './MovieList';
import { getAllMoviesAsync } from "../actions/actionCreator";
import store from "../store"

class MovieGallery extends React.Component {
    componentDidMount() {
        store.dispatch(getAllMoviesAsync())
    }
    render() {
        return (
            <section className="portfolio" id="portfolio">
                <div className="portfolio">
                    <div className="portfolio--images">
                        <ErrorBoundaries>
                            <MovieList/>
                        </ErrorBoundaries>
                    </div>
                </div>
            </section>
        );
    }
}

export default MovieGallery;
