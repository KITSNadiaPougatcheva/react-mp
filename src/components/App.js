import React, { useState } from 'react';
import { Provider } from 'react-redux'

import '../style.css';
import Navigation from './Navigation';
import MovieGallery from './MovieGallery';
import Footer from './Footer';
import SortBy from './SortBy';
import Header from './Header';

import store from "../store"

class App extends React.Component {

    state = {
        movieQuery: '',
        sorting: ''
    }

    handleSetQuery = movieQuery => {
        this.setState({
            movieQuery
        })
    }

    handleSetSorting = sorting => {
        this.setState({
            sorting
        })
    }

    getState = () => this.state;

    render() {

        const st = {store}

    return (
        <Provider store={store}>
            <Header findMovie={this.handleSetQuery} />
            <Navigation >
                <SortBy sortBy={this.handleSetSorting}/>
            </Navigation>
            
            <main>
                <MovieGallery sortBy={this.state.sorting} movieQuery={this.state.movieQuery}/>
            </main>
            <Footer/>
        </Provider>
    );
    
}
}

export default App;
