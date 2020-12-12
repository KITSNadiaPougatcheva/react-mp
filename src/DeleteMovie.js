import React from 'react';

class DeleteMovie extends React.Component {
    state = {
        activeState: 'wrapper delete-movie inactive'
    }
    hideModal = (event) => {
        event.preventDefault();
        console.log('Hide "Delete movie" form')
        this.setState({activeState: 'wrapper delete-movie inactive'});
    }

    componentDidMount() {
        const showModal = (event) => {
            event.preventDefault();
            console.log('Show "Delete movie" form')
            this.setState({activeState: 'wrapper delete-movie active'});
        }

        const elements = document.getElementsByClassName("movie--delete");
        for(const elem of elements) {
            elem.addEventListener("click", showModal);
        }
    }

    render() {
        return (
            <div className={this.state.activeState} >
                <div className="form-content">
                    <h2 className="active">delete movie</h2>
                    <form className="movie-form" name="delete-movie-form" action="#" method="POST">
                        <input type="button"  className="fadeIn fourth cancel" value="Cancel"
                            onClick={e => this.hideModal(e)}
                        />
                        <input type="submit"  className="fadeIn fourth submit" value="confirm"
                            onClick={e => this.hideModal(e)}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default DeleteMovie;
