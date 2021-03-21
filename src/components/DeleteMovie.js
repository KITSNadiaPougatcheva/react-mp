import React from 'react';
import { connect } from 'react-redux'

import DeleteMovieBtn from "./DeleteMovieBth"
import ModalWithButton from "./ModalWithButton"

import { deleteMovieAsync } from "../actions/actionCreator";

class DeleteMovie extends React.PureComponent {
    state = {
        isOpen: false
    }
    hideModal = event => {
        event.preventDefault();
        this.setState({isOpen: false});
    }
    submit = event => {
        event.preventDefault();
        console.log(`Deleting movie #${this.props.details.id}`)
        
        this.setState({isOpen: false});

        const { ondeleteMovie } = this.props;
        ondeleteMovie(this.props.details.id)
    }
    openModal = () => this.setState({isOpen: true});

    render() {
        return (
            <>
                <DeleteMovieBtn openModal={this.openModal}/>
                <ModalWithButton isOpen={this.state.isOpen} hideModal={this.hideModal} submit={this.submit} title="Delete Movie">
                        <p>Delete movie  "{this.props.details.title}"  ?</p>
                </ModalWithButton>
            </>
        );
    }
}

const mapDispatchToProps = {
    ondeleteMovie: deleteMovieAsync
}

export default connect(null, mapDispatchToProps)(DeleteMovie);

