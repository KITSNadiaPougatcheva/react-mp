import React from 'react';

import ErrorBoundaries from './ErrorBoundaries';
import MovieList from './MovieList0';

class MovieGallery extends React.Component {
    render() {
        return (
            <section className="portfolio" id="portfolio">
                <div className="portfolio">
                    <div className="portfolio--images">
                        <ErrorBoundaries>
                            <MovieList sortBy={this.props.sortBy} movieQuery={this.props.movieQuery}/>
                        </ErrorBoundaries>
                    </div>
                </div>
            </section>
        );
    }
}

export default MovieGallery;
