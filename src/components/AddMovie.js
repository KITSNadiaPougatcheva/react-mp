import React from 'react';
import { connect } from 'react-redux'

import ModalWithButton from "./ModalWithButton"
import AddMovieBtn from "./AddMovieBtn"

import { addMovieAsync } from "../actions/actionCreator";

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
        const overview = this.descrRef.current.value;
        console.log('Add movie ...', title, ',', overview)

        const { onAddMovie } = this.props;
        onAddMovie({ title, overview });
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

const mapDispatchToProps = {
    onAddMovie: addMovieAsync,
};

export default connect(null, mapDispatchToProps)(AddMovie);


 