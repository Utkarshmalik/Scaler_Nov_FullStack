
import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import UserReducer from "./userReducer";
import postReducer from "./postReducer";


const allReducers = combineReducers({
    count:counterReducer,
    user : UserReducer,
    posts:postReducer
})

export default allReducers;