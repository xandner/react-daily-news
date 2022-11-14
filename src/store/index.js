import { applyMiddleware, compose, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import promiseMiddleware from 'redux-promise'
import appReducers from "./resucers";
import thunk from "redux-thunk";

const ReduxStore=()=>{
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
      appReducers,
      composeEnhancers(applyMiddleware(promiseMiddleware))
    );
    return store
}

export default ReduxStore