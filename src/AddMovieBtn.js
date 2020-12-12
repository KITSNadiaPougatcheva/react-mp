import React from 'react';

class AddMovieBtn extends React.Component {
    render() {
        return (
            <nav className="header--add-movie">
                <ul className="navigation">
                    <li className=""><input className="header--add-movie add-movie-btn" type="button" value="Add movie"/></li>
                </ul>
            </nav>                    
        );
    }
}

export default AddMovieBtn;
