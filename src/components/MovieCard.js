import React, { useState, useCallback } from 'react';

import EditMovie from "./EditMovie"
import DeleteMovie from "./DeleteMovie"
import MovieDetails from "./MovieDetails"

function MovieCard(props) {
    const [state, setState] = useState(false);
    
    // throw new Error('My Test Error')
    const callbackOpenDetails = useCallback(() => setState(true), []);
    const callbackHideDetails = useCallback(() => setState(false), []);

    return (
        <div className="movie-card-content">
            <img src={props.details.poster_path} alt={props.details.title} onClick={callbackOpenDetails}/>
            <MovieDetails isOpen={state} hideDetails={callbackHideDetails} details={props.details}/>
            <h3 className="movie--title">{props.details.title}</h3>
            <p className="movie--rating">Rating : {props.details.vote_average}</p>
            <p className="movie--description">Genres : {props.details.genres && props.details.genres.join(",")}</p>
            <p className="movie--release-date">Release date : {props.details.release_date}</p>
            <EditMovie details={props.details}/>
            <DeleteMovie details={props.details}/>
        </div> 
    );
}

export default MovieCard;