import React from 'react';
import { connect } from 'react-redux'
import { filterMovies } from "../actions/actionCreator";

class MenuItem extends React.Component{
    constructor(props) {
        super(props);
        this.filterRef = React.createRef();
    }

    filterMovieSubmit = e => {
        e.preventDefault();
        const filter = this.filterRef.current.getAttribute("data-value");
        console.log('Filter movie ... by', filter)
        this.props.filterMovies(filter);
    }

    render() {
        return (
            <li>
                <a id={this.props.id} data-value={this.props.text} onClick={this.filterMovieSubmit} ref={this.filterRef} href={this.props.href}>{this.props.text}</a>
            </li>)
    }
}

export default connect(state => ({
    ...state
}), { filterMovies })(MenuItem);