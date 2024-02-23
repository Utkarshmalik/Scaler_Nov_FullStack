import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "./redux/actionCreators/incrementCounter";
import { useEffect } from "react";


function Counter(){

        const dispatch = useDispatch();


    // useSelector: This is a React-Redux hook that allows functional components to extract and subscribe to slices of the Redux store state. 
    // It takes a selector function as an argument.

    // (state) => state.count: The selector function is (state) => state.count. 
    //This function takes the entire Redux store state as an argument and returns the specific piece of state you're interested in, in this case, state.count.


    //countState: This variable will now hold the value of state.count from the Redux store. 
    // Whenever the state.count value changes, 
    // React will automatically re-render the component that uses countState, keeping it in sync with the Redux store.



    const countState = useSelector((state)=>state.count);

    function onIncrement(e){


        const incrementActionFn = incrementCounter();
        
        dispatch(incrementActionFn);

    }


    return <div>

        <h2>  Value : {countState.countValue}  </h2>


        <input  onClick={onIncrement} type="button" value="Increment"/>

    </div>

}

export default Counter;