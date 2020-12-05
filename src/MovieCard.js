import React from 'react';

function MovieCard(props) {
    return (
        <div >
        <img src={props.img} alt={props.title} key={props.key}/>
        <h3 className="movie-title">{props.title}</h3>
        </div> 
    );
}

export default MovieCard;