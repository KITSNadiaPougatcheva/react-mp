import React from 'react';
import { connect } from 'react-redux'

import { sortMoviesAsync } from "../actions/actionCreator";

class SortBy extends React.Component {
    constructor(props) {
        super(props);
        this.sortByRef = React.createRef();
    }

    sortBySubmit = e => {
        e.preventDefault();
        const sortBy = this.sortByRef.current.value;
        console.log('Sort movie ... by', sortBy);
        this.props.onSortMovie(sortBy);
    }

    render() {
        return (
            <ul className="header--sorting">
                <li>Sort by </li>
                <li>
                    <select className="header--sorting-selector" ref={this.sortByRef}
                    onChange={this.sortBySubmit}>
                        <option value="">--Please choose an option--</option>
                        <option value="release_date">Release date</option>
                        <option value="vote_average">Rating</option>
                    </select>
                </li>
            </ul>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSortMovie: sortBy => dispatch(sortMoviesAsync({ payload: { sortBy } }))
    }
}
export default connect(null, mapDispatchToProps)(SortBy);

