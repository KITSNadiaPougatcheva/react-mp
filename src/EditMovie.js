import React from 'react';
import EditMovieBtn from "./EditMovieBth"
import ModalWithButton from "./ModalWithButton"

class EditMovie extends React.PureComponent {
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
                <EditMovieBtn openModal={this.openModal}/>
                <ModalWithButton isOpen={this.state.isOpen} hideModal={this.hideModal} title="Edit Movie">
                    <input type="text" required name="name" placeholder="name"/>
                    <input type="text" required name="description" placeholder="description"/>
                </ModalWithButton>
            </>
        );
    }
}

export default EditMovie;
