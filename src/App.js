import React from 'react';

import './style.css';
import Navigation from './Navigation';
import MovieGallery from './MovieGallery';
import Footer from './Footer';
import SortBy from './SortBy';
import Header from './Header';

class App extends React.Component {

    state = {
        sorting: 'none'
    }
    
    sortBy = () => {
        this.setState({sorting: this.state.sorting === 'Rating' ? 'Alphabet' : 'Rating' });
        console.log('Sorting...');
    }

    render() {
        return (
            <>
                <Header/>
                <Navigation>
                    <SortBy onSelect={this.sortBy}/>
                </Navigation>
                <main>
                    <MovieGallery showList sortBy={this.state.sorting}/>
                </main>
                <Footer/>
            </>
        );
    }
}

export default App;
