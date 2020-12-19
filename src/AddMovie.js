import React from 'react';

import ModalWithButton from "./ModalWithButton"
import AddMovieBtn from "./AddMovieBtn"

class AddMovie extends React.PureComponent {
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
                <AddMovieBtn openModal={this.openModal}/>
                <ModalWithButton isOpen={this.state.isOpen} hideModal={this.hideModal} title="Add Movie">
                        <input type="text" required name="name" placeholder="name"/>
                        <input type="text" required name="description" placeholder="description"/>
                </ModalWithButton>
            </>
        );
    }
}

export default AddMovie;
 