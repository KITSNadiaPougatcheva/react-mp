import React, { useState, useCallback } from 'react';

import EditMovie from "./EditMovie"
import DeleteMovie from "./DeleteMovie"
import MovieDetails from "./MovieDetails"

function MovieCard(props) {
    const [state, setState] = useState(false);
    
    // throw new Error('My Test Error')
    const callbackOpenDetails = useCallback(() => setState(true));
    const callbackHideDetails = useCallback(() => setState(false));

    return (
        <div className="movie-card-content">
            <img src={props.details.img} alt={props.details.title} onClick={callbackOpenDetails}/>
            <MovieDetails isOpen={state} hideDetails={callbackHideDetails} details={props.details}/>
            <h3 className="movie--title">{props.details.title}</h3>
            <p className="movie--rating">Rating : {props.details.range}</p>
            <p className="movie--description">{props.details.genre}</p>
            <EditMovie/>
            <DeleteMovie/>
        </div> 
    );
}

export default MovieCard;