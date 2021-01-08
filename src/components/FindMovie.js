import React from 'react';
import { connect } from 'react-redux'
import { findMovies } from "../actions/actionCreator";

class FindMovie extends React.Component {
    constructor(props) {
        super(props);
        this.queryRef = React.createRef();
    }
    findMovieSubmit = e => {
        e.preventDefault();
        const queryInput = this.queryRef.current;
        console.log('Find movie ... by', queryInput.value)
        const {findMovies} = this.props
        findMovies(queryInput.value);
    }
    render() {
        return (
            <div className="header--find-movie">
                <nav className="header--find-movie-nav">
                    <form className="find-movie-form" name="find-movie-form" action="#" method="POST">
                        <ul className="find-movie-form">
                            <li className=""><input className="header--movie-name" name="name" type="text" placeholder="What do you want to watch ?" defaultValue={this.props.query}
                                required id="find-movie-by-query" ref={this.queryRef}/></li>
                            <li className=""><input className="header--find-movie-btn" name="find" type="button" value="Find movie" onClick={this.findMovieSubmit}/></li>
                        </ul>
                    </form>
                </nav>
            </div>
        );
    }
}

export default connect(state => ({
    ...state
}), { findMovies })(FindMovie);
