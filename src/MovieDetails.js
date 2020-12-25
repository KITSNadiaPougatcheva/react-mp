import React, { useCallback } from 'react';

function MovieDetails(props) {

    const cb = useCallback(() => props.hideDetails())

    return (
        <>
            {props.isOpen &&
                <div className="movie-details-wrapper" >
                    <div className="movie-details-content">
                        <img src={props.details.img} alt={props.details.title}/>
                        <div className="movie--details">
                            <h2 className="movie--title">{props.details.title}</h2>
                            <div className="movie--brif-description">{props.details.short_description}</div>
                            <div className="movie--year">{props.details.year}</div>
                            <div className="movie--range">Rating: {props.details.range}</div>
                            <div className="movie--long-description">{props.details.description}</div>
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