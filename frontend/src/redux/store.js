import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger"; // Updated import
import { thunk } from "redux-thunk"; // Use named import for thunk
import rootReducer from "./rootreducer";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
    const logger = createLogger(); // Initialize logger
    middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
