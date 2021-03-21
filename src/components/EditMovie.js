import React from 'react';
import { connect } from 'react-redux'
import { Formik } from 'formik'

import EditMovieBtn from "./EditMovieBth"
import ModalWithButton from "./ModalWithButton"
import { editMovieAsync } from "../actions/actionCreator";

class EditMovie extends React.PureComponent {
    state = {
        isOpen: false
    }
    hideModal = event => {
        event.preventDefault();
        this.setState({isOpen: false});
    }
    openModal = () => this.setState({isOpen: true});
    submit = values => {
        console.log(`Editing movie #${this.props.details.id}`)
        const title = values.title;
        const overview = values.overview;
        this.setState({isOpen: false});
        const { onEditMovie } = this.props;
        onEditMovie({ ...this.props.details, title, overview })
    }
    validate = values => {
        const errors = {};
         if (!values.title) {
            errors.title = 'Title cannot be empty'
         }
         if (!values.overview) {
            errors.overview = 'Overview cannot be empty'
         }
         return errors
    }

    render() {
        return (
            <Formik initialValues={{ title: this.props.details.title, overview: this.props.details.overview, 
                openModal: this.openModal, hideModal: this.hideModal}} 
                onSubmit={this.submit} validate={this.validate}>
                {({values, errors, handleChange, handleSubmit, handleBlur }) => (
                    <>
                        <EditMovieBtn openModal={values.openModal}/>
                        <ModalWithButton isOpen={this.state.isOpen}  hideModal={values.hideModal} submit={handleSubmit} title="Edit Movie">
                            <input type="text" required name="title" defaultValue={values.title} onChange={handleChange} onBlur={handleBlur}/>
                            { errors.title && <div>ERROR : {errors.title}</div> }
                            <input type="text" required name="overview" defaultValue={values.overview} onChange={handleChange} onBlur={handleBlur}/>
                            { errors.overview && <div>ERROR : {errors.overview}</div> }
                        </ModalWithButton>
                    </>
                )}
            </Formik>
        );
    }
}

const mapDispatchToProps = {
    onEditMovie: editMovieAsync,
};

export default connect(null, mapDispatchToProps)(EditMovie);