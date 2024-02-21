

const initialState = {countValue:0};

function counterReducer(state = initialState, action){

    console.log("Inside counter reducer with state and action ",state, action.type);

    if(action.type === "INCREMENT_COUNTER"){
        return {
            ...state,
            countValue: state.countValue + 1 
        }
    }

    return state;

}


export default counterReducer;