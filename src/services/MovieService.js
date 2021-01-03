import movies from "../data/movies";

const BASE_PATH = "http://localhost:4000";
const MOVIES_PATH = "/movies";
const SEARCH_PARAM = "search=";
const SORT_PARAM = "sortBy=";

const MovieService = {
    getMovies: () => movies,
    findMovies: ({ sortBy, movieQuery }) => {
        const url = `${BASE_PATH}${MOVIES_PATH}?${SEARCH_PARAM}${movieQuery}&${SORT_PARAM}${sortBy}&searchBy=title&sortOrder=asc`;
        console.log('Looking for movies : ', url);
        return fetch(url)
        .then(result => result.json()).then(res => 
            res && res.data || []
        )
        .catch(error => {
            console.error(error);
            return [];
        });
    },
    addMovie: movie => {
        // movies.push(movie)

        const url = `${BASE_PATH}${MOVIES_PATH}`;
        console.log('Looking for movies : ', url);
        fetch(url, {method: "POST", headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(movie)})
        .then(res => res.json())
        .then(res => console.log("Added", res))
        .catch(err => console.error(err))
    },
    deleteMovie: id => {
        // const idx = movies.findIndex(movie => movie.id === id);
        // if (~idx) {
        //     movies.splice(idx, 1)
        // }

        const url = `${BASE_PATH}${MOVIES_PATH}/${id}`;
        console.log('Looking for movies : ', url);
        fetch(url, {method: "DELETE", headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(movie)})
        .then(() => console.log("Deleted", id))
        .catch(err => console.error(err))
    }

}
export default MovieService;