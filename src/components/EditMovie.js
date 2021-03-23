import React from 'react';
import { connect } from 'react-redux'
import { Formik } from 'formik'

import EditMovieBtn from "./EditMovieBth"
import ModalWithButton from "./ModalWithButton"
import { editMovieAsync } from "../actions/actionCreator";

class EditMovie extends React.PureComponent {
    state = {
        ...this.props.details,
        isOpen: false
    }
    reset = () => {
        this.setState({ ...this.props.details, isOpen: false });
    }
    openModal = () => this.setState({...this.props.details, isOpen: true});
    submit = values => {
        console.log(`Editing movie #${this.props.details.id}`)
        const title = values.title;
        const overview = values.overview;
        this.setState({ title, overview, isOpen: false });
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
                onSubmit={this.submit} validate={this.validate} onReset={this.reset}>
                {({values, errors, handleChange, handleSubmit, handleBlur, handleReset }) => (
                    <>
                        <EditMovieBtn openModal={values.openModal}/>
                        <ModalWithButton isOpen={this.state.isOpen}  hideModal={handleReset} submit={handleSubmit} title="Edit Movie">
                            <input type="text" required name="title" value={values.title} onChange={handleChange} onBlur={handleBlur}
                            defaultValue={this.props.details.title}/>
                            { errors.title && <div>ERROR : {errors.title}</div> }
                            <input type="text" required name="overview" value={values.overview} onChange={handleChange} 
                            onBlur={handleBlur} defaultValue={this.props.details.overview}/>
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