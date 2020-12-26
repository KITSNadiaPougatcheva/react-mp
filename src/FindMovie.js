import React from 'react';

class FindMovie extends React.Component {
    constructor(props) {
        super(props);
        this.queryRef = React.createRef();
    }
    findMovieSubmit = e => {
        e.preventDefault();
        const queryInput = this.queryRef.current;
        console.log('Find movie ... by', queryInput.value)
        this.props.findMovie(queryInput.value);
    }
    render() {
        return (
            <div className="header--find-movie">
                <nav className="header--find-movie-nav">
                    <form className="find-movie-form" name="find-movie-form" action="#" method="POST">
                        <ul className="navigation">
                            <li className=""><input className="header--movie-name" name="name" type="text" placeholder="What do you want to watch ?"
                                required id="find-movie-by-query" ref={this.queryRef}/></li>
                            <li className=""><input className="header--find-movie-btn" name="find" type="button" value="Find movie" onClick={this.findMovieSubmit}/></li>
                        </ul>
                    </form>
                </nav>
            </div>
        );
    }
}

export default FindMovie;
