import {legacy_createStore} from "redux";
import allReducers from "./reducers";


const store = legacy_createStore(allReducers);
store.getState();

export default store;




/*

 In Redux, a store is the object that holds the application's state tree. 

The store.getState() method is used to get the current state of the Redux store

*/
