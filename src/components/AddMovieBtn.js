import React from 'react';

class AddMovieBtn extends React.PureComponent {
    render() {
        return (
            <nav className="header--add-movie">
                <ul className="navigation">
                    <li className=""><input className="header--add-movie add-movie-btn" 
                    type="button" value="Add movie" onClick={this.props.openModal}/></li>
                </ul>
            </nav>
        );
    }
}

export default AddMovieBtn;
