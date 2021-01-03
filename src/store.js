import { compose, createStore } from "redux"
import rootReducer from "./reducers/index"

const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloadState => {
    return createStore(
        rootReducer,
        preloadState,
        composeEnhancers(),
    )
};

const store = configureStore({});

export default store;

