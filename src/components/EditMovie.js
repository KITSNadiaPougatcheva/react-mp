import React from 'react';
import { connect } from 'react-redux'

import EditMovieBtn from "./EditMovieBth"
import ModalWithButton from "./ModalWithButton"
import { editMovieAsync } from "../actions/actionCreator";

class EditMovie extends React.PureComponent {
    constructor(props) {
        super(props);
        this.titleRef = React.createRef();
        this.descrRef = React.createRef();
    }
    state = {
        isOpen: false
    }
    hideModal = event => {
        event.preventDefault();
        this.setState({isOpen: false});
    }
    openModal = () => this.setState({isOpen: true});
    submit = event => {
        event.preventDefault();
        console.log(`Editing movie #${this.props.details.id}`)
        const title = this.titleRef.current.value;
        const overview = this.descrRef.current.value;
        
        this.setState({isOpen: false});

        const { onEditMovie } = this.props;
        onEditMovie({ ...this.props.details, title, overview })
    }

    render() {
        return (
            <>
                <EditMovieBtn openModal={this.openModal}/>
                <ModalWithButton isOpen={this.state.isOpen} hideModal={this.hideModal} submit={this.submit} title="Edit Movie">
                    <input type="text" required name="name" defaultValue={this.props.details.title} ref={this.titleRef}/>
                    <input type="text" required name="description" defaultValue={this.props.details.overview} ref={this.descrRef}/>
                </ModalWithButton>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditMovie: movie => dispatch(editMovieAsync({ payload: { movie } }))
    }
}

export default connect(null, mapDispatchToProps)(EditMovie);