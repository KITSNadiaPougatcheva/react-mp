import React, { useState } from 'react';

import './style.css';
import Navigation from './Navigation';
import MovieGallery from './MovieGallery';
import Footer from './Footer';
import SortBy from './SortBy';
import Header from './Header';

function App () {

    const [movieQuery, setMovieQuery] = useState('')
    const [sorting, sortBy] = useState('none')

    return (
        <>
            <Header findMovie={setMovieQuery}/>
            <Navigation >
                <SortBy sortBy={sortBy}/>
            </Navigation>
            
            <main>
                <MovieGallery sortBy={sorting} movieQuery={movieQuery}/>
            </main>
            <Footer/>
        </>
    );
    
}

export default App;
