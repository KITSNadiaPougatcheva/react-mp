import React, { useCallback } from 'react';

function MovieDetails(props) {

    const cb = useCallback(() => props.hideDetails())

    return (
        <>
            {props.isOpen &&
                <div className="movie-details-wrapper" >
                    <div className="movie-details-content">
                        <img src={props.details.poster_path} alt={props.details.title}/>
                        <div className="movie--details">
                            <h2 className="movie--title">{props.details.title}</h2>
                            <div className="movie--brif-description">{props.details.tagline}</div>
                            <div className="movie--year">{props.details.release_date}</div>
                            <div className="movie--range">Rating: {props.details.vote_average}</div>
                            <div className="movie--long-description">{props.details.overview}</div>
                            <div>
                                <input className="movie--close-btn" type="button" value="X" onClick={cb}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
    
}


export default MovieDetails;