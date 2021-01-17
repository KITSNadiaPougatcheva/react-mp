import { v1 } from "uuid"
import movies from "../data/movies";

const BASE_PATH = "http://localhost:4000";
const MOVIES_PATH = "/movies";
const SEARCH_PARAM = "search=";
const SORT_PARAM = "sortBy=";
const FILTER_PARAM = "filter=";

const sort = (movieList, sortBy) => {
    console.log('MovieList sorting by ', sortBy)
    const sortedList = [...movieList];
    sortedList.sort((a1, a2) => {
        if (sortBy === 'vote_average') {
            return a2.vote_average - a1.vote_average;
        }
        if (sortBy === 'title') {
            return a1.title.localeCompare(a2.title);
        }
        return 0;
    })
    return sortedList;
}

const MovieService = {

    getMovies: () => movies,
    addMovie: movie => movies.push({ id: v1(), ...movie }),

    findMovies: ({ sortBy, query, genre } = {}) => {
        console.log(`Filtering movies ... by sortBy = ${sortBy}, query = ${query}, genre = ${genre}`);
        let filteredList = movies;
        if (genre !== 'All') {
            filteredList = movies.filter(movie => {
                console.log('Title', movie.title, 'GENRES', movie.genres)
                if (genre && movie.genres && movie.genres.includes(genre)) {
                    return true;
                }
                if (query && movie.title.toLowerCase().includes(query.toLowerCase())) {
                    return true;
                }
                if (!query && !genre) {
                    return true;
                }
                return false;
            })
        }
        if (sortBy) {
            filteredList = sort(filteredList, sortBy);
        }
        return filteredList;
    },

    deleteMovie: id => {
        const idx = movies.findIndex(movie => movie.id === id);
        if (~idx) {
            movies.splice(idx, 1)
        }
    },
    updateMovie: newMovie => {
        const currentMovie = movies.find(movie => movie.id === newMovie.id)
        Object.assign(currentMovie, newMovie);
    },

    getMoviesAsync: () => {
        const url = `${BASE_PATH}${MOVIES_PATH}`;
        console.log('getMoviesAsync : url = ', url);
        return fetch(url)
            .then(result => result.json()).then(res => 
                res && res.data || []
            )
            .catch(error => {
                console.error(error);
                return [];
            });
    },

    findMoviesAsync: ({ sortBy, query, genre }) => {
        const filter = genre && genre !== 'All' ? `${FILTER_PARAM}${genre}` : ''
        const searchBy = query ? `${SEARCH_PARAM}${query}&searchBy=title` : ''
        const sort = `${SORT_PARAM}${sortBy}&sortOrder=desc`
        const url = `${BASE_PATH}${MOVIES_PATH}?${[filter, searchBy, sort].join('&')}`;
        console.log('findMoviesAsync : url = ', url);
        return fetch(url)
            .then(result => result.json()).then(res => {
                const results = res && res.data || []
                console.log('Fetch results : ', results)
                return results
            })
            .catch(error => {
                console.error(error);
                return [];
            });
    },

    addMovieAsync: movie => {
        const url = `${BASE_PATH}${MOVIES_PATH}`;
        console.log('Looking for movies : ', url);
        return fetch(url, {method: "POST", headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(movie)})
        .then(res => {
            if (!res.ok) {
                const msg = `Error ${res.status} ${res.statusText}`
                console.error(msg)
                res.json().then(errData => console.error('ERROR', errData))
                throw new Error(msg)
            }
            return res.json()
        })
        .then(res => {
            console.log("Added", res)
            return res
        })
    },

    deleteMovieAsync: id => {
        const url = `${BASE_PATH}${MOVIES_PATH}/${id}`;
        console.log('Looking for movies : ', url);
        return fetch(url, { 
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
        })
        .then(res => {
            if (!res.ok) {
                const msg = `Error ${res.status} ${res.statusText}`
                console.error(msg)
                res.json().then(errData => console.error('ERROR', errData))
                throw new Error(msg)
            }
        })
        .then(() => console.log("Deleted", id))
    },

    updateMovieAsync: movie => {
        const url = `${BASE_PATH}${MOVIES_PATH}`;
        console.log('Updating movie for movies : PUT ', url, 'body :' , movie);
        return fetch(url, { 
            method: "PUT",
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(movie)
        })
        .then(res => {
            if (!res.ok) {
                const msg = `Error ${res.status} ${res.statusText}`
                console.error(msg)
                res.json().then(errData => console.error('ERROR updating movie', errData, 'payload', movie))
                throw new Error(msg)
            }
            return res.json()
        })
        .then(res => {
            console.log("Updated", res)
            return res
        })
    }
}
export default MovieService;