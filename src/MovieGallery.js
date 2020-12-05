import React from 'react';

import img1 from './img/m1.png'
import img2 from './img/m2.png'
import img3 from './img/m3.png'
import img4 from './img/m4.png'
import img5 from './img/m5.png'
import img6 from './img/m6.png'

import './style.css';
import MovieCard from './MovieCard';

class MovieGallery extends React.Component {

    render() {
        return (
            <section class="portfolio" id="portfolio">
                <div class="portfolio">
                    <div class="portfolio--images">
                        <MovieCard title='Pulp Fiction' img={img1} key='1'/>
                        <MovieCard title='Bohemian rapsody' img={img2}  key='2'/>
                        <MovieCard title='Kill Bill' img={img3} key='1'/>
                        <MovieCard title='Avengers' img={img4} key='4'/>
                        <MovieCard title='Inception' img={img5} key='5'/>
                        <MovieCard title='Reservoir dogs' img={img6} key='6'/>
                    </div>
                </div>
                SECTION !
            </section>
        );
    }
}

export default MovieGallery;
