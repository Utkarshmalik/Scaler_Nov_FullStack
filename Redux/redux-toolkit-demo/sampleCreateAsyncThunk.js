
/*
createAsyncThunk


1. Async Operations:

createAsyncThunk is designed to handle asynchronous operations, such as API calls, 
by allowing you to define three different action types for the pending, fulfilled, and rejected states of the asynchronous operation.


2. Action Creators:

It automatically generates three action creators:

pending: Dispatched when the asynchronous operation begins.
fulfilled: Dispatched when the asynchronous operation is successful.
rejected: Dispatched when the asynchronous operation encounters an error.


Syntax : 

createAsyncThunk(typePrefix, payloadCreator, options)

typePrefix: A string prefix for the generated action types.

payloadCreator: A function that returns a promise or an asynchronous function. It receives the arguments passed to the thunk action creator.


options: An object to specify additional configuration options.


*/



import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Example usage with an API call
export const fetchData = createAsyncThunk(
  'data/fetchData', // Type prefix for the generated action types
  async (apiEndpoint, thunkAPI) => {
    try {
      const response = await axios.get(apiEndpoint);
      return response.data; // The payload for the 'fulfilled' action
    } catch (error) {
      // The payload for the 'rejected' action
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



const mySlice = createSlice({
  name: 'mySlice',
  initialState: /* ... */,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(someActionType, (state, action) => {
        // Handle state update for someActionType
      })
      .addCase(anotherActionType, (state, action) => {
        // Handle state update for anotherActionType
      });
  },
});