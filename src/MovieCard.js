import React, { useState } from 'react';

import EditMovie from "./EditMovie"
import DeleteMovie from "./DeleteMovie"
import MovieDetails from "./MovieDetails"

function MovieCard(props) {
    const [state, setState] = useState(false);
    
    // throw new Error('My Test Error')

    return (
        <div>
            <img src={props.details.img} alt={props.details.title} onClick={() => setState(true)}/>
            <MovieDetails isOpen={state} hideDetails={() => setState(false)} details={props.details}/>
            <h3 className="movie--title">{props.details.title}</h3>
            <p className="movie--description">{props.details.genre}</p>
            <EditMovie/>
            <DeleteMovie/>
        </div> 
    );
}

export default MovieCard;