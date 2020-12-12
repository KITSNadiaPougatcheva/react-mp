import React from 'react';

import './style.css';
import Navigation from './Navigation';
import MovieGallery from './MovieGallery';
import Footer from './Footer';
import AddMovie from './AddMovie';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <Navigation/>
                <main>
                    <MovieGallery showList/>
                </main>
                <Footer/>
                <AddMovie/>
                <EditMovie/>
                <DeleteMovie/>
            </>
        );
    }
}

export default App;
