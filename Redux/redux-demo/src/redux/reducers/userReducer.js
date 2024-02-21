

const initialState = {name:"",age:null}


function UserReducer(state=initialState, action){

    console.log("Inside user reducer with state and action ",state, action.type);


    if(action.type==="CHANGE_USER_DETAILS"){
        return {
            ...state,
            name:action.payload.name,
            age:action.payload.age
        }
    }

    return state;

}

export default UserReducer;