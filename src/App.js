import React from 'react';

import img1 from './assets/Image1_.png'
import img2 from './assets/Image2_.png'
import img3 from './assets/Image3_.png'
import img4 from './assets/Image4_.png'
import img5 from './assets/Image5_.png'
import img6 from './assets/Image6_.png'
import img7 from './assets/Image7_.png'
import img8 from './assets/Image8_.png'

import './style.css';
import Header from './Header';
import MovieCard from './MovieCard';

class App extends React.Component {
    render() {
        return (
            <div className="App">
            <Header/>
            <main>

            <section class="portfolio" id="portfolio">
			          <div class="portfolio">
                <div class="portfolio--images">
                  <MovieCard title='Undoing' img={img1}/>
                  <MovieCard title='It' img={img2}/>
                  <MovieCard title='Ameli' img={img3}/>
                  <MovieCard title='Star Wars' img={img4}/>
                  <MovieCard title='Undoing' img={img5}/>
                  <MovieCard title='It' img={img6}/>
                  <MovieCard title='Ameli' img={img7}/>
                  <MovieCard title='Star Wars' img={img8}/>
                </div>
                </div>
            </section>
            </main>
            </div>
        );
    }
}

export default App;
