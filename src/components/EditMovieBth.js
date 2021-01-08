import React from 'react';

class EditMovieBtn extends React.PureComponent {
    render() {
        return (
            <span className="movie--edit" onClick={this.props.openModal}>Edit, </span>
        );
    }
}

export default EditMovieBtn;
