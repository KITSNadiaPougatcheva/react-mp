import React from 'react';

class EditMovieBtn extends React.PureComponent {
    render() {
        return (
            <p className="movie--delete" onClick={this.props.openModal}>Delete</p>
        );
    }
}

export default EditMovieBtn;
