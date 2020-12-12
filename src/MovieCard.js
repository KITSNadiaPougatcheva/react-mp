import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
    // throw new Error('My Test Error')

    return (
        <div>
            <img src={props.img} alt={props.title}/>
            <h3 className="movie--title">{props.title}</h3>
            <p className="movie--description">{props.description}</p>
            <p className="movie--edit">Edit</p>
            <p className="movie--delete">Delete</p>
        </div> 
    );
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default MovieCard;