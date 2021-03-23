import React from 'react';
import { findMoviesAsync } from "../actions/actionCreator";
import store from "../store"
import { useFormik } from 'formik';

function FindMovie (props) {
    const formik = useFormik({
        initialValues: {
            query: '',
        },
        onSubmit: values => {
            const query = values.query
            const { findMovie } = props
            console.log('Query', query)
            store.dispatch(findMoviesAsync(query))
            findMovie(query);
        },
    });

    return (
        <div className="header--find-movie">
            <nav className="header--find-movie-nav">
                <form className="find-movie-form" name="find-movie-form" action="#" method="POST" onSubmit={formik.handleSubmit}>
                    <ul className="find-movie-form">
                        <li className="">
                            <input className="header--movie-name" name="query" type="text" placeholder="What do you want to watch ?" 
                            defaultValue={formik.values.query} required id="find-movie-by-query" onChange={formik.handleChange}/>
                        </li>
                        <li className="">
                            <input className="header--find-movie-btn" name="find" type="button" value="Find movie" onClick={formik.handleSubmit}/>
                        </li>
                    </ul>
                </form>
            </nav>
        </div>
    );
}

export default FindMovie;

