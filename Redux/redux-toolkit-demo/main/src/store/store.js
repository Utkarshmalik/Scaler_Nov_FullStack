import {configureStore} from '@reduxjs/toolkit';
import counterReducer from "../features/counter/counterSlice";
import postsReducer  from "../features/SocialMedia/postSlice";

// configureStore is a function provided by Redux Toolkit that simplifies the process of creating a Redux store. 

const store = configureStore({
    reducer:{
        counter: counterReducer,
        posts : postsReducer
    }
})


export default store;