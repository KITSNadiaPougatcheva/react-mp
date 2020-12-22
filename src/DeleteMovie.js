import React from 'react';
import DeleteMovieBtn from "./DeleteMovieBth"
import ModalWithButton from "./ModalWithButton"

class DeleteMovie extends React.PureComponent {
    state = {
        isOpen: false
    }
    hideModal = event => {
        event.preventDefault();
        this.setState({isOpen: false});
    }
    openModal = () => this.setState({isOpen: true});

    render() {
        return (
            <>
                <DeleteMovieBtn openModal={this.openModal}/>
                <ModalWithButton isOpen={this.state.isOpen} hideModal={this.hideModal} title="Delete Movie"/>
            </>
        );
    }
}

export default DeleteMovie;
