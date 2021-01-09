import React, { useCallback } from 'react';
import { connect } from 'react-redux'

import { sortMovies } from "../actions/actionCreator";

class SortBy extends React.Component {
    constructor(props) {
        super(props);
        this.sortByRef = React.createRef();
    }

    sortBySubmit = e => {
        e.preventDefault();
        const sortBy = this.sortByRef.current.value;
        console.log('Sort movie ... by', sortBy);
        this.props.sortMovies(sortBy);
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

//export default SortBy;
export default connect(state => ({
    ...state
}), { sortMovies })(SortBy);

