import React from 'react';

import ErrorBoundaries from './ErrorBoundaries';
import MovieList from './MovieList';

class MovieGallery extends React.Component {
    render() {
        const { sortBy, movieQuery } = this.props;
        return (
            <section className="portfolio" id="portfolio">
                <div className="portfolio">
                    <div className="portfolio--images">
                        <ErrorBoundaries>
                            <MovieList sortBy={sortBy} movieQuery={movieQuery}/>
                        </ErrorBoundaries>
                    </div>
                </div>
            </section>
        );
    }
}

export default MovieGallery;
