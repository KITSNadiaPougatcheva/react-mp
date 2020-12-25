import React from 'react';

class FindMovie extends React.Component {
    findMovieSubmit = e => {
        e.preventDefault();
        const queryInput = document.getElementById("find-movie-by-query")
        console.log('Find movie ... by', queryInput.value)
        this.props.findMovie(queryInput.value);
    }
    render() {
        return (
            <div className="header--find-movie">
                <nav className="header--find-movie-nav">
                    <form className="find-movie-form" name="find-movie-form" action="#" method="POST">
                        <ul className="navigation">
                            <li className=""><input className="header--movie-name" name="name" type="text" placeholder="What do you want to watch ?" required id="find-movie-by-query"/></li>
                            <li className=""><input className="header--find-movie-btn" name="find" type="button" value="Find movie" onClick={this.findMovieSubmit}/></li>
                        </ul>
                    </form>
                </nav>
            </div>
        );
    }
}

export default FindMovie;
