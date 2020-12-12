import React from 'react';

class EditMovie extends React.Component {
    state = {
        activeState: 'wrapper edit-movie inactive'
    }

    hideModal = (event) => {
        event.preventDefault();
        console.log('Hide "Edit movie" form')
        this.setState({activeState: 'wrapper edit-movie inactive'});
    }

    componentDidMount() {
        const that = this
        const showModal = (event) => {
            event.preventDefault();
            console.log('Show "Edit movie" form')
            this.setState({activeState: 'wrapper edit-movie active'});
        }

        const elements = document.getElementsByClassName("movie--edit");
        for(const elem of elements) {
            elem.addEventListener("click", showModal);
        }
    }

    render() {
        return (
            <div className={this.state.activeState} >
            <div className="form-content">
                <h2 className="active">Edit movie</h2>
                <form className="movie-form" name="edit-movie-form" action="#" method="POST">
                    <input type="text" required name="name" placeholder="name"/>
                    <input type="text" required name="description" placeholder="description"/>
                    <input type="button"  className="fadeIn fourth cancel" value="Cancel"
                        onClick={e => this.hideModal(e)}
                    />
                    <input type="submit"  className="fadeIn fourth submit" value="Save"
                        onClick={e => this.hideModal(e)}
                    />
                </form>
            </div>
            </div>
        );
    }
}

export default EditMovie;
