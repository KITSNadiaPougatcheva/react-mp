
import React from 'react';

import {default as movies} from "./movies";

function MovieListErrorBoundaries (props) {
    const EmptyList = () => (<p className="movies--empty-list">No movies found</p>);
    return <>{movies?.length ? props.children : <EmptyList/>}</>;
}

export default MovieListErrorBoundaries;
