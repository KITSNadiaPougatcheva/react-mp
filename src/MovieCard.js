import React from 'react';
import PropTypes from 'prop-types';
import EditMovie from "./EditMovie"
import DeleteMovie from "./DeleteMovie"

function MovieCard(props) {
    // throw new Error('My Test Error')

    return (
        <div>
            <img src={props.img} alt={props.title}/>
            <h3 className="movie--title">{props.title}</h3>
            <p className="movie--description">{props.description}</p>
            <EditMovie/>
            <DeleteMovie/>
        </div> 
    );
}

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default MovieCard;