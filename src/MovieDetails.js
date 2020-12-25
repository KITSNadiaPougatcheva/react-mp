import React from 'react';

class MovieDetails extends React.PureComponent {

    render() {
        return (
            <>
                {this.props.isOpen &&
                    <div className="movie-details-wrapper" >
                        <div className="movie-details-content">
                            <img src={this.props.details.img} alt={this.props.details.title}/>
                            <div className="movie--details">
                                <h2 className="movie--title">{this.props.details.title}</h2>
                                <div className="movie--brif-description">{this.props.details.short_description}</div>
                                <div className="movie--year">{this.props.details.year}</div>
                                <div className="movie--length">154 min</div>
                                <div className="movie--long-description">{this.props.details.description}</div>
                                <div>
                                    <input className="movie--close-btn" type="button" value="X" onClick={this.props.hideDetails}/>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }
}


export default MovieDetails;