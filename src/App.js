import React from 'react';

import './style.css';
import Header from './Header';
import MovieGallery from './MovieGallery';

class App extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <main>
                    <MovieGallery showList="true"/>
                </main>
            </>
        );
    }
}

export default App;
