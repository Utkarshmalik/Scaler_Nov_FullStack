import {applyMiddleware, createStore} from "redux";
import allReducers from "./reducers";
import loggingMiddleware from "./middlewares/loggingMiddleware";
import {thunk} from 'redux-thunk';

const store = createStore(allReducers, applyMiddleware(loggingMiddleware, thunk));


export default store;




/*

 In Redux, a store is the object that holds the application's state tree. 

The store.getState() method is used to get the current state of the Redux store

*/
