import { applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import promiseMiddleware from 'redux-promise'
import appReducers from "./resucers";

const ReduxStore=()=>{
    const composeEnhancer = window.window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
    const store = configureStore(
     {
        reducer:appReducers,
        devTools:composeEnhancer
     }
    );
    return store

}

export default ReduxStore