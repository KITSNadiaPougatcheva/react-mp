import React from 'react';

import './style.css';
import Header from './Header';
import MovieGallery from './MovieGallery';

class App extends React.Component {
    render() {
        return (
            <div  className="App">
            <Header/>
            <main>
                <MovieGallery showList="true"/>
            </main>
          </div>
        );
    }
}

export default App;
