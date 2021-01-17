import React, { useState } from 'react';
import { Provider } from 'react-redux'

import '../style.css';
import Navigation from './Navigation';
import MovieGallery from './MovieGallery';
import Footer from './Footer';
import SortBy from './SortBy';
import Header from './Header';

import store from "../store"

function App () {
    const [movieQuery, setMovieQuery] = useState('')
    const [sorting, sortBy] = useState('')

    return (
        <Provider store={store}>
            <Header findMovie={setMovieQuery} />
            <Navigation >
                <SortBy sortBy={sortBy}/>
            </Navigation>            
            <main>
                <MovieGallery sortBy={sorting} movieQuery={movieQuery}/>
            </main>
            <Footer/>
        </Provider>
    );
    
}


export default App;
