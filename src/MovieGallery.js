import React from 'react';

import './style.css';
import MovieList from './MovieList';

class MovieGallery extends React.Component {

    render() {
        return (
            <section className="portfolio" id="portfolio">
                <div className="portfolio">
                    <div className="portfolio--images">
                        <MovieList/>
                    </div>
                </div>
            </section>
        );
    }
}

export default MovieGallery;
