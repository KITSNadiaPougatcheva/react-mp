import React from 'react';

class EditMovieBtn extends React.PureComponent {
    render() {
        return (
            <p className="movie--edit" onClick={this.props.openModal}>Edit</p>
        );
    }
}

export default EditMovieBtn;
