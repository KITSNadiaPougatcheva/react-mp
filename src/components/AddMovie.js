import React from 'react';
import { connect } from 'react'

import ModalWithButton from "./ModalWithButton"
import AddMovieBtn from "./AddMovieBtn"
import MovieService from "../services/MovieService"
import { v1 } from "uuid"


class AddMovie extends React.PureComponent {
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
        this.descrRef = React.createRef();
    }
    state = {
        isOpen: false,
    }
    hideModal = event => {
        event.preventDefault();
        this.setState({ ...this.state, isOpen: false});
    }

    submitAddMovie = event => {
        event.preventDefault();
        this.setState({ ...this.state, isOpen: false});
        const title = this.titleRef.current.value;
        const description = this.descrRef.current.value;
        console.log('Add movie ...', title, ',', description)
        MovieService.addMovie({id: v1(), title, description})
    }

    openModal = () => this.setState({ ...this.state, isOpen: true});

    render() {
        return (
            <>
                <AddMovieBtn openModal={this.openModal}/>
                <ModalWithButton isOpen={this.state.isOpen} hideModal={this.hideModal} submit={this.submitAddMovie} title="Add Movie">
                        <input type="text" required name="name" placeholder="name" id="addMovieName" ref={this.titleRef}/>
                        <input type="text" required name="description" placeholder="description" id="addMovieDescr" ref={this.descrRef}/>
                </ModalWithButton>
            </>
        );
    }
}

// const addMovie = newMovie => ({
//     type: 'ADD_MOVIE',
//     movie: newMovie
// })

// function mapDispatchToProps(dispatch) {
//     return {
//         addMovieProp: newMovie => dispatch(addMovie(newMovie))
//     }
// }
// export default connect(null, mapDispatchToProps)(AddMovie);

export default AddMovie;
 