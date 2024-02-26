// A "slice" in the context of Redux refers to a collection of Redux-related code: 
// specifically, an action creator and a reducer that manage a specific piece of the application state. 

// Slices are a concept introduced by Redux Toolkit to reduce boilerplate code and simplify the structure of Redux logic.




import { createSlice } from '@reduxjs/toolkit';

const mySlice = createSlice({
  name: 'sliceName',
  initialState: initialStateValue,
  reducers: {
    // Reducer functions go here
    actionName: (state, action) => { /* reducer logic */ },
    anotherAction: (state, action) => { /* reducer logic */ },
  },
});

export const { actionName, anotherAction } = mySlice.actions;
export default mySlice.reducer;

/*
1. name (string):

The name of the slice. 
It is used to automatically generate action types and is helpful for debugging and organizing your Redux DevTools.


2.initialState (any):

The initial state of the slice. This is the state that the slice's reducer will manage.


3.reducers (object):


An object where each key is an action name, and the corresponding value is a reducer function. 
The reducer functions define how the state should be updated when a specific action is dispatched.





Returned Values:

The createSlice function returns an object with two properties:

1. actions (object):
An object containing the generated action creators. These action creators can be directly used to dispatch actions.


2. reducer (function):

The generated reducer function. This function contains the logic to update the state based on the dispatched actions.

*/