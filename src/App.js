import React from 'react';

import './style.css';
import Navigation from './Navigation';
import MovieGallery from './MovieGallery';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <>
                <Navigation/>
                <main>
                    <MovieGallery showList/>
                </main>
                <Footer/>
            </>
        );
    }
}

export default App;
