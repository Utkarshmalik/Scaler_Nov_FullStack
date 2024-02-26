
import { createSlice} from "@reduxjs/toolkit";


const counterSlice = createSlice({

    name:"counter",
    initialState : {
        value: 0
    },
    reducers : {

        increment : (state)=>{
            state.value +=1;
        }, 

        decrement  : (state)=> {
            state.value-=1;
        }

    }
})

const {actions, reducer} = counterSlice;

export const {increment, decrement} = actions;
export default reducer;

