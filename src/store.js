import { createStore, applyMiddleware } from "redux"
import rootReducer from "./reducers/index"
import { composeWithDevTools } from 'redux-devtools-extension'

import { getAllMoviesAsync } from "./actions/actionCreator";


import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools(applyMiddleware(
        thunk,
    ));

const configureStore = () => {
    return createStore(
        rootReducer,
        composeEnhancers,
    )
};

const store = configureStore();

export default store;

