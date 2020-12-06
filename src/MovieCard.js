import React from 'react';
import PropTypes from 'prop-types';

function MovieCard(props) {
    return (
        <div>
            <img src={props.img} alt={props.title} />
            <h3 className="movie--title">{props.title}</h3>
            <p className="movie--description">{props.description}</p>
        </div> 
    );
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default MovieCard;