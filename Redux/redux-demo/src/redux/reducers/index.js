
import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import UserReducer from "./userReducer";


const allReducers = combineReducers({
    count:counterReducer,
    user : UserReducer
})

export default allReducers;