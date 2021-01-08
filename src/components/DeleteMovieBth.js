import React from 'react';

class EditMovieBtn extends React.PureComponent {
    render() {
        return (
            <span className="movie--delete" onClick={this.props.openModal}>Delete</span>
        );
    }
}

export default EditMovieBtn;
