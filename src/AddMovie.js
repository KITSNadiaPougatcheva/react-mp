import React from 'react';


class AddMovie extends React.Component {
    state = {
        activeState: 'wrapper add-movie inactive'
    }
    hideModal(event) {
        event.preventDefault();
        console.log('Hide "Add movie" form')
        this.setState({activeState: 'wrapper add-movie inactive'});
    }

    componentDidMount() {
        const that = this;
        document.querySelector(".add-movie-btn").addEventListener("click", event => {
            event.preventDefault();
            console.log('Show "Add movie" form')
            that.setState({activeState: 'wrapper add-movie active'});
        });
    }

    render() {
        return (
            <div className={this.state.activeState} >
                <div className="form-content modal-form">
                    <h2 className="active">Add movie</h2>
                    <form className="movie-form" name="add-movie-form" action="#" method="POST">
                        <input type="text" required name="name" placeholder="name"/>
                        <input type="text" required name="description" placeholder="description"/>
                        <input type="button"  className="fadeIn fourth cancel" value="cancel"
                            onClick={e => this.hideModal(e)}
                        />
                        <input type="submit"  className="fadeIn fourth submit" value="submit"
                            onClick={e => this.hideModal(e)}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddMovie;
